import {
  adjacentCue, defaultLook, fold, mergeSongs, moveEntry, newWorkspace, normalizeSong,
  parseLibrary, parseSetlist, presets, setlistBundle, songFor, uid,
} from './core.mjs';
import { bus, draftKey, forgetMedia, liveKey, publishLive, read, readLocal, themeKey, write } from './store.mjs';
import { disposeStage, drawStage, plainLyrics } from './stage.mjs';
import { button, dataId, escape as e, fileInput, icon, iconButton, inputSearch, key, plural } from './ui.mjs';

const $ = (selector, root = document) => root.querySelector(selector);
const app = $('#app');
const dialog = $('#dialog');
const notice = $('#notice');
const projectorUrl = new URL('./?view=projector', import.meta.url);
const isProjector = new URLSearchParams(location.search).get('view') === 'projector';
let noticeTimer;

function notify(message) {
  notice.textContent = message;
  notice.hidden = false;
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => { notice.hidden = true; }, 4300);
}

if (isProjector) initProjector();
else void initOperator();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {
    const status = $('#offline-status');
    if (status) status.textContent = 'Offline cache unavailable';
  });
}

function initProjector() {
  document.title = 'Lingkod · Projector';
  document.body.className = 'projector';
  app.innerHTML = '<main class="stage projector-stage" aria-label="Projected lyrics"></main>' +
    '<div class="projector-tools visible">' + iconButton('fullscreen', 'Toggle fullscreen (F)', 'expand', '', '') + '</div>';
  const stage = $('.projector-stage');
  const tools = $('.projector-tools');
  let timer;
  let wakeLock;
  let revision = 0;

  function apply(snapshot) {
    if (!snapshot || snapshot.revision <= revision) return;
    revision = snapshot.revision;
    drawStage(stage, snapshot.page, snapshot.look, snapshot.blank || !snapshot.page);
  }
  drawStage(stage, null, defaultLook, true);
  apply(readLocal(liveKey, null));
  const reply = (type) => {
    bus?.postMessage({ type });
    window.opener?.postMessage({ lingkod: liveKey, type }, location.origin);
  };
  bus?.addEventListener('message', ({ data }) => {
    if (data?.type === 'cue') apply(data.snapshot);
  });
  window.addEventListener('storage', ({ key: changed, newValue }) => {
    if (changed === liveKey && newValue) apply(readLocal(liveKey, null));
  });
  window.addEventListener('message', event => {
    if (event.origin === location.origin && event.data?.lingkod === liveKey && event.data.type === 'cue') {
      apply(event.data.snapshot);
    }
  });

  function wake() {
    if (document.visibilityState === 'visible' && (!wakeLock || wakeLock.released)) {
      navigator.wakeLock?.request('screen').then(lock => { wakeLock = lock; }).catch(() => {});
    }
  }
  async function fullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      notify('Use your browser’s fullscreen control.');
    }
  }
  function showTools() {
    tools.classList.add('visible');
    document.body.classList.remove('idle-cursor');
    clearTimeout(timer);
    timer = setTimeout(() => {
      tools.classList.remove('visible');
      document.body.classList.add('idle-cursor');
    }, 1800);
  }

  tools.addEventListener('click', fullscreen);
  document.addEventListener('dblclick', event => {
    if (!tools.contains(event.target)) void fullscreen();
  });
  document.addEventListener('pointermove', showTools);
  document.addEventListener('visibilitychange', () => { wake(); reply('projector-ready'); });
  document.addEventListener('keydown', event => {
    if (event.key.toLowerCase() === 'f' && !event.ctrlKey && !event.altKey && !event.metaKey) {
      event.preventDefault();
      void fullscreen();
    }
  });
  window.addEventListener('pagehide', () => reply('projector-closed'));
  setInterval(() => reply('projector-heartbeat'), 2200);
  reply('projector-ready');
  wake();
  showTools();
}

async function initOperator() {
  let state;
  let theme = readLocal(themeKey, 'night') === 'day' ? 'day' : 'night';
  document.documentElement.dataset.theme = theme;
  let view = 'present';
  let projector;
  let projectorSeen = 0;
  let revision = 0;
  let storageMessage = 'Saved on this device';
  let saveNumber = 0;
  let dragging = null;
  let drafts = readLocal(draftKey, {});
  let draft;
  let draftId;
  let latestSnapshot;
  let sharedLibraryTask;
  let appearancePanel = 'lyrics';
  let uploadSlot = 'background';

  try {
    state = await read('workspace', 'current');
  } catch {
    storageMessage = 'Browser storage unavailable';
    notify('Browser storage is unavailable. Changes will last until you close this page.');
  }
  state ??= newWorkspace();
  state.media ??= [];
  state.look = { ...defaultLook, ...state.look };
  if (state.cue && !songFor(state)) state.cue = null;
  if (state.cue) state.cue.page = Math.max(0, Math.min(state.cue.page, songFor(state).pages.length - 1));

  app.innerHTML = '<header class="topbar"><div class="brand"><img src="./icon.svg" alt=""><div><strong>Lingkod Presenter</strong><small>Music Ministry</small></div></div>' +
    '<nav class="topnav" aria-label="Workspace">' +
    button('view', 'Present', 'play', '', 'data-id="present"') +
    button('view', 'Song library', 'music', '', 'data-id="library"') +
    button('view', 'Setlists', 'list', '', 'data-id="setlists"') + '</nav>' +
    '<div class="top-actions">' + button('theme', '', '', '', 'id="theme-toggle"') +
    iconButton('appearance', 'Appearance settings', 'gear', '', '') +
    button('projector', '<span class="projector-word">Open projector</span>', 'monitor', 'primary', 'aria-label="Open projector"') + '</div></header>' +
    '<main class="workspace" id="workspace"></main>' +
    '<footer class="app-footer"><div class="footer-status">' +
    '<span>' + icon('check') + '<span id="save-status"></span></span><span>' +
    icon('wifi') + '<span id="offline-status">Preparing offline access…</span></span></div>' +
    '<small>Sierra Business Solutions, Inc.™</small></footer>' +
    fileInput('library-file', '.json,.js,.txt') + fileInput('setlist-file', '.json') +
    fileInput('image-file', '.gif,.png,.jpg,.jpeg,.webp,.avif,.apng');
  const workspace = $('#workspace');
  updateTheme();

  function updateTheme() {
    const day = theme === 'day';
    document.documentElement.dataset.theme = theme;
    $('meta[name="theme-color"]').content = day ? '#f4f6f8' : '#101010';
    const toggle = $('#theme-toggle');
    const label = day ? 'Night mode' : 'Day mode';
    toggle.innerHTML = icon(day ? 'moon' : 'sun') + '<span class="theme-word">' + label + '</span>';
    toggle.setAttribute('aria-label', 'Switch to ' + label.toLowerCase());
    toggle.title = 'Switch to ' + label.toLowerCase();
  }

  function save() {
    const number = ++saveNumber;
    setSaveStatus('Saving…');
    return write('workspace', 'current', state).then(() => {
      if (number === saveNumber) setSaveStatus('Saved on this device');
      return true;
    }).catch(() => {
      if (number === saveNumber) {
        setSaveStatus('Changes could not be saved');
        notify('Browser storage could not save the workspace. Export your library and setlist to keep a copy.');
      }
      return false;
    });
  }

  function setSaveStatus(message) {
    storageMessage = message;
    const status = $('#save-status');
    if (status) status.textContent = message;
  }

  function postProjector() {
    if (projector && !projector.closed && latestSnapshot) {
      projector.postMessage({ lingkod: liveKey, type: 'cue', snapshot: latestSnapshot }, location.origin);
    }
  }

  function sync() {
    revision = Math.max(Date.now(), revision + 1);
    latestSnapshot = {
      page: songFor(state)?.pages[state.cue?.page] ?? null,
      look: { ...state.look }, blank: state.blank, revision,
    };
    publishLive(latestSnapshot);
    postProjector();
  }

  function setCue(cue) {
    state.cue = cue;
    refreshPresent();
    sync();
    save();
  }

  function projectorEvent(type) {
    if (!['projector-ready', 'projector-heartbeat', 'projector-closed'].includes(type)) return;
    projectorSeen = type === 'projector-closed' ? 0 : Date.now();
    refreshConnection();
    if (type === 'projector-ready') sync();
  }
  bus?.addEventListener('message', ({ data }) => projectorEvent(data?.type));
  window.addEventListener('message', event => {
    if (event.origin === location.origin && event.data?.lingkod === liveKey) projectorEvent(event.data.type);
  });
  setInterval(refreshConnection, 2500);

  function refreshConnection() {
    const status = $('#connection');
    if (!status) return;
    const connected = Date.now() - projectorSeen < 7200;
    const label = connected ? 'Projector connected' : 'Projector closed';
    if (status.dataset.connected !== String(connected)) {
      status.dataset.connected = String(connected);
      status.innerHTML = '<span class="dot' + (connected ? ' online' : '') + '"></span>' + label;
    }
    const badge = $('#current-badge');
    if (badge) {
      badge.textContent = state.blank ? 'Blanked' : connected && songFor(state) ? 'On air' : 'Preview';
      badge.classList.toggle('blank', state.blank);
    }
  }

  function openProjector() {
    sync();
    if (projector && !projector.closed) {
      projector.focus();
      return;
    }
    projector = window.open(projectorUrl.href, 'lingkod-projector-' + encodeURIComponent(liveKey), 'popup,width=960,height=570');
    if (!projector) {
      showDialog('Open projector', '<p>Allow pop-ups for this site, or open the projector with the link below. Move it to your extended display and press F.</p>' +
        '<a class="btn primary" target="_blank" rel="noopener" href="' + e(projectorUrl.href) + '">Open projector in new tab</a>');
    }
  }

  function changeView(next) {
    if (next !== view) render(next);
  }

  function heading(title, subtitle, actions = '') {
    return '<header class="heading"><div><h1>' + title + '</h1><p>' + subtitle + '</p></div>' +
      '<div class="heading-actions">' + actions + '</div></header>';
  }

  function preview(id, label, glyph) {
    return '<article class="panel preview-card"><div class="panel-head"><div class="preview-label">' + icon(glyph) +
      label + '</div>' + (id === 'current' ? '<span class="preview-badge" id="current-badge">Preview</span>' :
      '<span class="preview-badge">Queued</span>') + '</div><div id="' + id + '-stage" class="stage" role="img" aria-label="' + label + ' lyrics"></div>' +
      '<div id="' + id + '-info" class="preview-footer"></div></article>';
  }

  function presentation() {
    return heading('Presentation', 'Cue lyrics and control your projector', '<span id="connection" class="connection" role="status"></span>') +
      '<div class="work-grid"><aside class="panel setlist-panel"><div class="panel-head"><h2 class="panel-title">' +
      icon('list') + 'Setlist</h2>' + iconButton('add-songs', 'Add songs', 'plus', '', '') + '</div>' +
      '<div class="list-name" id="list-name"></div><ol class="queue" id="queue" aria-label="Setlist song order"></ol>' +
      button('add-songs', 'Add songs', 'plus', 'ghost add-row') + '<div class="sidebar-footer">' +
      button('save-set', 'Save setlist', 'save') + button('view', 'Saved setlists', 'folder', 'ghost', 'data-id="setlists"') + '</div></aside>' +
      '<section class="console" aria-label="Presentation controls"><div class="preview-grid">' +
      preview('current', 'Current slide', 'monitor') + preview('next', 'Up next', 'right') + '</div>' +
      '<div class="panel controls"><div class="button-group">' +
      button('previous', 'Previous ' + key('←'), 'left', '', 'id="previous"') +
      button('next', 'Next ' + key('→'), 'right', 'primary', 'id="next"') +
      '</div><div class="button-group">' +
      button('blank', '<span id="blank-label">Blank screen</span> ' + key('B'), 'blank', '', 'id="blank" aria-pressed="false"') +
      button('shortcuts', '<span class="help-word">Shortcuts</span>', 'keys', 'ghost', 'aria-label="Keyboard shortcuts"') +
      '</div></div><section class="panel pages-panel"><div class="panel-head"><div><h2 class="panel-title">' + icon('layers') +
      'Song pages</h2><p id="pages-meta"></p></div>' + button('edit-current', 'Edit lyrics', 'edit', '', 'id="edit-current"') +
      '</div><div class="page-grid" id="pages" aria-label="Jump to page"></div></section></section></div>';
  }

  function updateOffline() {
    const status = $('#offline-status');
    if (!status) return;
    if (!('serviceWorker' in navigator)) status.textContent = 'Offline cache unavailable';
    else Promise.all([navigator.serviceWorker.ready, sharedLibraryTask]).then(() => {
      if (status.isConnected) status.textContent = navigator.onLine ? 'Offline ready' : 'Working offline';
    }).catch(() => { status.textContent = 'Offline cache unavailable'; });
  }

  function render(nextView = view) {
    if (view === 'present') workspace.querySelectorAll('.stage').forEach(disposeStage);
    view = nextView;
    for (const tab of document.querySelectorAll('.topnav button')) {
      if (tab.dataset.id === view) tab.setAttribute('aria-current', 'page');
      else tab.removeAttribute('aria-current');
    }
    if (view === 'present') {
      workspace.innerHTML = presentation();
      setSaveStatus(storageMessage);
      refreshPresent();
      updateOffline();
    } else if (view === 'library') {
      workspace.innerHTML = '<div class="library-view">' + heading('Song library', 'Search, import, and prepare lyrics for your setlist.',
        button('import-library', 'Import songs', 'upload') + button('edit-song', 'New song', 'plus', 'primary')) +
        '<section class="panel"><div class="library-tools">' + inputSearch('search-library', 'Search by title or author') +
        button('export-library', 'Export library', 'download') + '</div><div class="library-list" id="library-list"></div></section></div>';
      renderLibrary($('#library-list'), '', false);
    } else {
      workspace.innerHTML = '<div class="setlists-view">' + heading('Setlists', 'Prepare an order for each gathering.',
        button('import-set', 'Import setlist', 'upload') + button('new-set', 'New setlist', 'plus', 'primary')) +
        '<section class="panel"><div class="panel-head"><h2>Active setlist</h2></div>' +
        setlistRow(state.setlist, true) + '</section><section class="panel" style="margin-top:15px"><div class="panel-head"><h2>Saved setlists</h2></div>' +
        (state.saved.length ? state.saved.map(list => setlistRow(list, false)).join('') :
          '<p class="empty">Save a setlist to open it again for a future gathering.</p>') + '</section></div>';
    }
  }

  function refreshPreview(id, cue, blank) {
    const song = songFor(state, cue);
    const page = song?.pages[cue?.page];
    drawStage($('#' + id + '-stage'), page, id === 'next' && !page ? defaultLook : state.look, blank || !page);
    $('#' + id + '-info').innerHTML = page ?
      '<div><strong>' + e(song.title) + '</strong><small>' + e(page.label) + '</small></div><span class="slide-count">' +
      (cue.page + 1) + ' / ' + song.pages.length + '</span>' :
      '<div><strong>' + (id === 'next' ? 'No upcoming slide' : 'No song selected') + '</strong></div>';
  }

  function refreshQueue() {
    $('#list-name').innerHTML = '<strong>' + e(state.setlist.name) + '</strong><p>' + plural(state.setlist.items.length, 'song') + '</p>';
    $('#queue').innerHTML = state.setlist.items.map((entry, index) => {
      const song = songFor(state, entry);
      const active = entry.id === state.cue?.entryId;
      return '<li draggable="true" data-entry="' + e(entry.id) + '" class="' + (active ? 'active' : '') + '">' +
        '<span class="grip" title="Drag to reorder">' + icon('grip') + '</span>' +
        '<button type="button" class="song-row" data-action="cue-entry" ' + dataId(entry.id) + (active ? ' aria-current="true"' : '') + '>' +
        '<span class="song-number">' + String(index + 1).padStart(2, '0') + '</span><span><strong>' +
        e(song?.title ?? 'Unavailable song') + '</strong><small>' + plural(song?.pages.length ?? 0, 'page') + '</small></span></button>' +
        iconButton('entry-menu', 'Manage ' + (song?.title ?? 'song'), 'more', dataId(entry.id)) + '</li>';
    }).join('');
  }

  function refreshPresent() {
    if (view !== 'present') return;
    const focus = document.activeElement;
    const focusAction = focus?.dataset.action;
    const focusId = focus?.dataset.id;
    const song = songFor(state);
    const next = adjacentCue(state, 1);
    refreshQueue();
    refreshPreview('current', state.cue, state.blank);
    refreshPreview('next', next, false);
    $('#previous').disabled = !adjacentCue(state, -1);
    $('#next').disabled = !next;
    $('#blank').setAttribute('aria-pressed', state.blank);
    $('#blank-label').textContent = state.blank ? 'Restore screen' : 'Blank screen';
    $('#edit-current').disabled = !song;
    $('#pages-meta').textContent = song ? song.title + ' · ' + plural(song.pages.length, 'page') : 'Select a song to see its pages';
    const pages = $('#pages');
    const scrollTop = pages.scrollTop;
    pages.innerHTML = song ? song.pages.map((page, index) => {
      const lines = plainLyrics(page.lyrics).split('\n').filter(Boolean).slice(0, 2);
      return '<button type="button" class="page-card" data-action="cue-page" data-id="' + index +
        '" aria-current="' + (index === state.cue.page) + '"><span class="page-head"><span class="page-num">' +
        (index + 1) + '</span><strong>' + e(page.label) + '</strong></span>' +
        lines.map(line => '<span class="line">' + e(line) + '</span>').join('') + '</button>';
    }).join('') : '';
    pages.scrollTop = scrollTop;
    if (!focus?.isConnected && focusAction && focusId !== undefined) {
      const selector = '[data-action="' + CSS.escape(focusAction) + '"][data-id="' + CSS.escape(focusId) + '"]';
      $(selector, workspace)?.focus({ preventScroll: true });
    }
    refreshConnection();
  }

  function renderLibrary(container, query, picker) {
    const term = fold(query);
    const songs = state.songs.filter(song => fold(song.title + ' ' + song.author).includes(term))
      .sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }));
    container.innerHTML = songs.map(song => {
      const attrs = dataId(song.id);
      return '<div class="library-row"><div><h3>' + e(song.title) + '</h3><small>' +
        e(song.author ? song.author + ' · ' : '') + plural(song.pages.length, 'page') + '</small></div><div class="button-group">' +
        (picker ? button('add-entry', 'Add to setlist', 'plus', '', attrs) :
          iconButton('edit-song', 'Edit ' + song.title, 'edit', attrs, '') +
          iconButton('add-entry', 'Add ' + song.title + ' to setlist', 'plus', attrs, '') +
          button('cue-song', 'Cue', 'play', '', attrs)) + '</div></div>';
    }).join('') || '<p class="empty">No songs match your search.</p>';
  }

  function setlistRow(list, active) {
    return '<div class="library-row"><div><h3>' + e(list.name) + '</h3><small>' + plural(list.items.length, 'song') + '</small></div>' +
      '<div class="button-group">' + (active ? button('view', 'Present', 'play', '', 'data-id="present"') + button('save-set', 'Save', 'save') :
        button('load-set', 'Load', 'folder', '', dataId(list.id))) +
      iconButton('export-set', 'Export ' + list.name, 'download', dataId(list.id ?? ''), '') +
      (active ? '' : iconButton('delete-set', 'Delete ' + list.name, 'trash', dataId(list.id), 'danger')) + '</div></div>';
  }

  function showDialog(title, body, actions = '') {
    if (dialog.open) closeDialog();
    dialog.innerHTML = '<div class="dialog-head"><h2 id="dialog-title">' + e(title) + '</h2>' +
      iconButton('close', 'Close dialog', 'x') + '</div><div class="dialog-body">' + body + '</div>' +
      (actions ? '<div class="dialog-actions">' + actions + '</div>' : '');
    dialog.showModal();
  }

  function closeDialog() {
    dialog.querySelectorAll('.stage').forEach(disposeStage);
    dialog.close();
  }
  dialog.addEventListener('cancel', event => { event.preventDefault(); closeDialog(); });

  function showError(error) {
    const message = error instanceof SyntaxError ? 'The JSON file is invalid. Check its structure and try again.' : error.message;
    const field = $('#form-error', dialog);
    if (dialog.open && field) {
      field.textContent = message;
      field.hidden = false;
    } else notify(message || 'The operation could not be completed.');
  }

  function addSongsDialog() {
    showDialog('Add songs to setlist', inputSearch('picker-search', 'Search songs') +
      '<div class="library-list" id="picker-list"></div>', button('close', 'Done', 'check', 'primary'));
    renderLibrary($('#picker-list'), '', true);
    $('#picker-search').focus();
  }

  function draftSave() {
    drafts[draftId] = draft;
    try {
      localStorage.setItem(draftKey, JSON.stringify(drafts));
    } catch {
      $('#draft-status').textContent = 'Draft stored for this session';
    }
  }

  function editor(id) {
    const song = songFor(state, { songId: id });
    draftId = song?.id ?? 'new';
    draft = structuredClone(drafts[draftId] ?? song ?? { title: '', author: '', pages: [{ label: 'Verse 1', lyrics: '' }] });
    showDialog(song ? 'Edit lyrics' : 'New song',
      '<div class="form-grid"><label class="field">Title<input id="draft-title" maxlength="180" value="' + e(draft.title) +
      '"></label><label class="field">Author or credit<input id="draft-author" maxlength="180" value="' + e(draft.author) +
      '"></label></div><p>Add a page below or insert a line containing only <code>---</code> to split a page.</p>' +
      '<div id="draft-pages" class="dialog-body" style="padding:0"></div>' +
      button('append-page', 'Add page', 'plus', '', 'id="append-page"') +
      '<p class="error" id="form-error" role="alert" hidden></p>',
      (song ? iconButton('delete-song', 'Delete song', 'trash', ' ' + dataId(song.id), 'left danger') : '') +
      '<span id="draft-status" class="muted">Draft autosaves</span>' +
      button('apply-song', 'Save lyrics', 'check', 'primary'));
    renderDraftPages();
  }

  function renderDraftPages() {
    $('#draft-pages').innerHTML = draft.pages.map((page, index) => {
      const attrs = dataId(index);
      return '<div class="edit-page"><div class="edit-page-top"><label class="field">Page ' + (index + 1) + ' label' +
        '<input maxlength="80" data-edit="label" ' + attrs + ' value="' + e(page.label) + '"></label>' +
        iconButton('remove-page', 'Remove page ' + (index + 1), 'trash', attrs + (draft.pages.length < 2 ? ' disabled' : ''), '') +
        '</div><label class="field">Lyrics<textarea maxlength="16000" data-edit="lyrics" ' + attrs + '>' + e(page.lyrics) +
        '</textarea></label></div>';
    }).join('');
    $('#append-page').disabled = draft.pages.length >= 200;
  }

  function applySong() {
    const song = normalizeSong(draft);
    const index = state.songs.findIndex(item => item.id === draftId);
    if (index >= 0) {
      song.id = draftId;
      state.songs[index] = song;
      if (state.cue?.songId === song.id) state.cue.page = Math.min(state.cue.page, song.pages.length - 1);
    } else {
      state.songs.push(song);
    }
    delete drafts[draftId];
    try { localStorage.setItem(draftKey, JSON.stringify(drafts)); } catch { /* Lyrics still save to IndexedDB. */ }
    closeDialog();
    view === 'present' ? refreshPresent() : render();
    sync();
    save();
    notify('Lyrics saved to the library.');
  }

  function prepareSetlist(newList) {
    const title = newList ? 'New setlist' : 'Save setlist';
    const initial = newList ? '' : state.setlist.name;
    showDialog(title, '<label class="field">Setlist name<input maxlength="120" id="set-name" value="' + e(initial) +
      '" placeholder="e.g. Sunday Worship"></label><p class="error" id="form-error" hidden role="alert"></p>',
      button('close', 'Cancel', '', 'ghost') + button(newList ? 'create-set' : 'store-set', newList ? 'Create setlist' : 'Save setlist', 'check', 'primary'));
    $('#set-name').focus();
    $('#set-name').select();
  }

  function applySetlist(list) {
    state.setlist = { name: list.name, items: structuredClone(list.items), savedId: list.id };
    const first = list.items[0];
    state.cue = first ? { entryId: first.id, songId: first.songId, page: 0 } : null;
    closeDialog();
    render('present');
    sync();
    save();
  }

  function storeSet() {
    const name = $('#set-name').value.trim();
    if (!name) throw new Error('Enter a setlist name.');
    state.setlist.name = name;
    const match = state.saved.find(list => list.id === state.setlist.savedId && list.name === name) ??
      state.saved.find(list => fold(list.name) === fold(name));
    const entry = { id: match?.id ?? uid(), name, items: structuredClone(state.setlist.items) };
    if (match) state.saved[state.saved.indexOf(match)] = entry;
    else state.saved.unshift(entry);
    state.setlist.savedId = entry.id;
    closeDialog();
    view === 'present' ? refreshPresent() : render();
    save();
    notify('Setlist saved.');
  }

  function entryMenu(id) {
    const index = state.setlist.items.findIndex(item => item.id === id);
    if (index < 0) return;
    const song = songFor(state, state.setlist.items[index]);
    showDialog(song.title, '<div class="button-group">' +
      button('move-up', 'Move up', 'up', '', dataId(id) + (index === 0 ? ' disabled' : '')) +
      button('move-down', 'Move down', 'down', '', dataId(id) + (index === state.setlist.items.length - 1 ? ' disabled' : '')) +
      '</div>', button('remove-entry', 'Remove from setlist', 'trash', 'danger left', dataId(id)) + button('close', 'Done', 'check', 'primary'));
  }

  function removeEntry(id) {
    state.setlist.items = state.setlist.items.filter(item => item.id !== id);
    if (state.cue?.entryId === id) state.cue.entryId = null;
    closeDialog();
    refreshPresent();
    save();
  }

  function removeSong(id) {
    const song = songFor(state, { songId: id });
    if (!song || !window.confirm('Delete “' + song.title + '” from the library and all setlists?')) return;
    state.songs = state.songs.filter(item => item.id !== id);
    for (const list of [state.setlist, ...state.saved]) list.items = list.items.filter(item => item.songId !== id);
    if (state.cue?.songId === id) state.cue = null;
    delete drafts[id];
    try { localStorage.setItem(draftKey, JSON.stringify(drafts)); } catch { /* The library remains independent. */ }
    closeDialog();
    render();
    sync();
    save();
  }

  function lookSelect(label, name, values) {
    const options = values.map(([value, text]) => '<option value="' + e(value) + '"' +
      (String(state.look[name]) === String(value) ? ' selected' : '') + '>' + e(text) + '</option>').join('');
    return '<label class="field">' + label + '<select data-look="' + name + '">' + options + '</select></label>';
  }

  function lookRange(label, name, min, max, unit) {
    return '<label class="field"><span>' + label + ' <output id="out-' + name + '">' + state.look[name] + unit +
      '</output></span><input type="range" data-look="' + name + '" min="' + min + '" max="' + max + '" value="' + state.look[name] + '"></label>';
  }

  const lookSlot = () => appearancePanel === 'blank' ? 'blankBackground' : 'background';

  function appearance(panel = appearancePanel) {
    appearancePanel = panel;
    const blankPanel = panel === 'blank';
    const backgrounds = Object.entries(presets).map(([id, preset]) => [id, preset.name])
      .concat(state.media.map(image => [image.id, image.name]));
    const settings = blankPanel ?
      lookSelect('Blank background', 'blankBackground', [['solid', 'Solid color'], ['current', 'Match lyrics background'], ...backgrounds]) +
      '<label class="field" id="blank-color-field">Blank screen color<input type="color" data-look="blankColor" value="' + e(state.look.blankColor) + '"></label>' :
      lookSelect('Background', 'background', backgrounds) + lookRange('Background dim', 'dim', 0, 90, '%') +
      lookSelect('Font family', 'font', [['sans', 'Sans serif'], ['serif', 'Serif'], ['mono', 'Monospace']]) +
      lookRange('Text scale', 'size', 50, 160, '%') +
      lookSelect('Font weight', 'weight', [[400, 'Regular'], [600, 'Semibold'], [700, 'Bold'], [900, 'Heavy']]) +
      lookSelect('Alignment', 'align', [['center', 'Center'], ['left', 'Left'], ['right', 'Right']]) +
      '<label class="field">Text color<input type="color" data-look="color" value="' + e(state.look.color) + '"></label>';
    const tabs = '<div class="button-group appearance-tabs" role="group" aria-label="Appearance view">' +
      button('look-lyrics', 'Lyrics', 'layers', '', 'aria-pressed="' + !blankPanel + '"') +
      button('look-blank', 'Blank screen', 'blank', '', 'aria-pressed="' + blankPanel + '"') + '</div>';
    showDialog('Appearance', tabs + '<div class="stage look-preview" id="look-preview"></div><div class="form-grid">' + settings + '</div>' +
      '<div class="button-group">' + button('upload-image', 'Upload image or GIF', 'image') +
      button('delete-image', 'Remove upload', 'trash', 'danger', 'id="delete-image"') + '</div>',
      button('reset-look', 'Reset appearance', '', 'ghost left') + button('close', 'Done', 'check', 'primary'));
    refreshLookPreview();
  }

  function refreshLookPreview() {
    const host = $('#look-preview');
    if (!dialog.open || !host) return;
    drawStage(host, songFor(state)?.pages[state.cue?.page] ?? { lyrics: 'Your lyrics will appear here' }, state.look, appearancePanel === 'blank');
    const colorField = $('#blank-color-field');
    if (colorField) colorField.hidden = state.look.blankBackground !== 'solid';
    $('#delete-image').disabled = !state.media.some(image => image.id === state.look[lookSlot()]);
  }

  function applyLook() {
    refreshLookPreview();
    refreshPresent();
    sync();
    save();
  }

  async function addImage(file, slot) {
    if (file.size > 25 * 1024 * 1024) throw new Error('Choose an image or GIF smaller than 25 MB.');
    const extension = file.name.split('.').pop().toLowerCase();
    const types = { gif: 'image/gif', png: 'image/png', apng: 'image/apng', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp', avif: 'image/avif' };
    if (!Object.hasOwn(types, extension)) throw new Error('Choose a GIF, PNG, JPEG, WebP, AVIF, or APNG.');
    const blob = file.slice(0, file.size, types[extension]);
    const url = URL.createObjectURL(blob);
    try {
      const testImage = new Image();
      testImage.src = url;
      await testImage.decode();
    } catch {
      throw new Error('The browser could not open this image.');
    } finally {
      URL.revokeObjectURL(url);
    }
    const id = uid();
    await write('media', id, blob);
    state.media.push({ id, name: file.name.slice(0, 120) });
    state.look[slot] = id;
    applyLook();
    if (dialog.open && $('#look-preview')) appearance(slot === 'blankBackground' ? 'blank' : 'lyrics');
    notify('Background saved on this device.');
  }

  function download(data, name) {
    const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = name.replace(/[\\/:*?"<>|]/g, '-');
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 3000);
  }

  function shortcuts() {
    const items = [
      ['Previous page', '←', 'PgUp'], ['Next page', '→', 'Space', 'PgDn'], ['First / last page of song', 'Home', 'End'],
      ['Jump to page 1–9', '1–9'], ['Blank / restore projector', 'B'], ['Search song library', '/'],
      ['Fullscreen in projector window', 'F'], ['Show shortcuts', '?'],
    ];
    showDialog('Keyboard shortcuts', '<div class="shortcut-list">' + items.map(([label, ...keys]) =>
      '<div><span>' + label + '</span><span>' + keys.map(key).join(' ') + '</span></div>').join('') + '</div>',
      button('close', 'Done', 'check', 'primary'));
  }

  function cueEntry(id) {
    const entry = state.setlist.items.find(item => item.id === id);
    if (entry) setCue({ entryId: entry.id, songId: entry.songId, page: 0 });
  }

  function step(direction) {
    const cue = adjacentCue(state, direction);
    if (cue) setCue(cue);
  }

  function pageCue(index) {
    if (songFor(state)?.pages[index]) setCue({ ...state.cue, page: index });
  }

  function blank() {
    state.blank = !state.blank;
    sync();
    refreshPresent();
    save();
  }

  async function action(name, id) {
    switch (name) {
      case 'view': changeView(id); break;
      case 'theme':
        theme = theme === 'day' ? 'night' : 'day';
        updateTheme();
        try { localStorage.setItem(themeKey, JSON.stringify(theme)); } catch { /* Theme still applies for this visit. */ }
        break;
      case 'projector': openProjector(); break;
      case 'appearance':
      case 'look-lyrics': appearance('lyrics'); break;
      case 'look-blank': appearance('blank'); break;
      case 'close': closeDialog(); break;
      case 'previous': step(-1); break;
      case 'next': step(1); break;
      case 'blank': blank(); break;
      case 'shortcuts': shortcuts(); break;
      case 'cue-entry': cueEntry(id); break;
      case 'cue-page': pageCue(Number(id)); break;
      case 'cue-song':
        changeView('present');
        setCue({ entryId: null, songId: id, page: 0 });
        break;
      case 'edit-current': editor(state.cue?.songId); break;
      case 'edit-song': editor(id); break;
      case 'apply-song': applySong(); break;
      case 'delete-song': removeSong(id); break;
      case 'append-page':
        draft.pages.push({ label: 'Page ' + (draft.pages.length + 1), lyrics: '' });
        draftSave();
        renderDraftPages();
        $('#draft-pages .edit-page:last-child textarea').focus();
        break;
      case 'remove-page':
        draft.pages.splice(Number(id), 1);
        draftSave();
        renderDraftPages();
        $('#append-page').focus();
        break;
      case 'import-library': $('#library-file').click(); break;
      case 'export-library': download({ songs: state.songs }, 'lingkod-library.json'); break;
      case 'import-set': $('#setlist-file').click(); break;
      case 'add-songs': addSongsDialog(); break;
      case 'add-entry': {
        const entry = { id: uid(), songId: id };
        state.setlist.items.push(entry);
        refreshPresent();
        save();
        notify('Added ' + songFor(state, entry).title + ' to the setlist.');
        break;
      }
      case 'entry-menu': entryMenu(id); break;
      case 'move-up':
      case 'move-down': {
        const index = state.setlist.items.findIndex(item => item.id === id);
        if (moveEntry(state.setlist.items, id, index + (name === 'move-up' ? -1 : 1))) {
          refreshPresent();
          save();
          entryMenu(id);
        }
        break;
      }
      case 'remove-entry': removeEntry(id); break;
      case 'new-set': prepareSetlist(true); break;
      case 'save-set': prepareSetlist(false); break;
      case 'store-set': storeSet(); break;
      case 'create-set': {
        const name = $('#set-name').value.trim();
        if (!name) throw new Error('Enter a setlist name.');
        applySetlist({ name, items: [] });
        break;
      }
      case 'load-set': applySetlist(state.saved.find(list => list.id === id)); break;
      case 'export-set': {
        const list = id ? state.saved.find(list => list.id === id) : state.setlist;
        download(setlistBundle(state, list), list.name + '.lingkod.json');
        break;
      }
      case 'delete-set':
        if (window.confirm('Delete this saved setlist?')) {
          state.saved = state.saved.filter(list => list.id !== id);
          render();
          save();
        }
        break;
      case 'upload-image':
        uploadSlot = lookSlot();
        $('#image-file').click();
        break;
      case 'delete-image': {
        const id = state.look[lookSlot()];
        state.media = state.media.filter(image => image.id !== id);
        if (state.look.background === id) state.look.background = defaultLook.background;
        if (state.look.blankBackground === id) state.look.blankBackground = defaultLook.blankBackground;
        applyLook();
        appearance();
        await write('media', id, undefined);
        await forgetMedia(id);
        break;
      }
      case 'reset-look':
        state.look = { ...defaultLook };
        applyLook();
        appearance();
        break;
    }
  }

  document.addEventListener('click', event => {
    const target = event.target.closest('[data-action]');
    if (target && !target.disabled) void action(target.dataset.action, target.dataset.id).catch(showError);
  });

  document.addEventListener('input', ({ target }) => {
    if (target.id === 'search-library') renderLibrary($('#library-list'), target.value, false);
    if (target.id === 'picker-search') renderLibrary($('#picker-list'), target.value, true);
    if (target.id === 'draft-title' || target.id === 'draft-author') {
      draft[target.id.slice(6)] = target.value;
      draftSave();
    }
    if (target.dataset.edit) {
      draft.pages[Number(target.dataset.id)][target.dataset.edit] = target.value;
      draftSave();
    }
    if (target.dataset.look) {
      const setting = target.dataset.look;
      state.look[setting] = ['size', 'dim', 'weight'].includes(setting) ? Number(target.value) : target.value;
      const output = $('#out-' + setting);
      if (output) output.value = target.value + '%';
      applyLook();
    }
  });

  function addToLibrary(songs) {
    const before = state.songs.length;
    mergeSongs(state.songs, songs);
    const library = $('#library-list');
    if (library) renderLibrary(library, $('#search-library').value, false);
    const picker = $('#picker-list');
    if (dialog.open && picker) renderLibrary(picker, $('#picker-search').value, true);
    return state.songs.length - before;
  }

  async function loadSharedLibrary() {
    if (state.sharedLibraryLoaded || !navigator.onLine) return;
    let response;
    try {
      response = await fetch(new URL('./songs.js', import.meta.url), {
        cache: 'no-cache',
        signal: AbortSignal.timeout(8000),
      });
    } catch {
      return;
    }
    if (response.status === 404) return;
    try {
      if (!response.ok || Number(response.headers.get('Content-Length')) > 15 * 1024 * 1024) {
        throw new Error('The shared song file is unavailable or too large.');
      }
      const contents = await response.text();
      if (contents.length > 15 * 1024 * 1024) throw new Error('The shared song file is too large.');
      const added = addToLibrary(parseLibrary(contents, 'songs.js'));
      state.sharedLibraryLoaded = true;
      if (!await save()) state.sharedLibraryLoaded = false;
      else if (added) notify('Loaded ' + plural(added, 'shared song') + '. Open Song library to browse.');
    } catch {
      notify('The shared song library could not load. You can still import songs from your computer.');
    }
  }

  function checkSharedLibrary() {
    sharedLibraryTask ??= loadSharedLibrary().finally(() => { sharedLibraryTask = null; });
  }

  async function readFile(input) {
    const file = input.files[0];
    input.value = '';
    if (!file) return;
    if (input.id === 'image-file') {
      await addImage(file, uploadSlot);
      return;
    }
    if (file.size > 15 * 1024 * 1024) throw new Error('Choose a song or setlist file smaller than 15 MB.');
    const contents = await file.text();
    if (input.id === 'library-file') {
      const songs = parseLibrary(contents, file.name);
      const added = addToLibrary(songs);
      if (view !== 'library') render('library');
      save();
      notify('Imported ' + plural(added, 'song') + (added < songs.length ? ' · ' + (songs.length - added) + ' already in library' : '') + '.');
    } else {
      const imported = parseSetlist(contents);
      const ids = mergeSongs(state.songs, imported.songs);
      const list = { id: uid(), name: imported.name, items: imported.order.map(index => ({ id: uid(), songId: ids[index] })) };
      state.saved.unshift(list);
      applySetlist(list);
      notify('Setlist imported and loaded.');
    }
  }

  document.addEventListener('change', ({ target }) => {
    if (target.type === 'file') void readFile(target).catch(showError);
  });

  document.addEventListener('dragstart', event => {
    const row = event.target.closest('[data-entry]');
    if (!row) return;
    dragging = row.dataset.entry;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', dragging);
  });
  document.addEventListener('dragover', event => {
    const row = event.target.closest('[data-entry]');
    if (!dragging || !row || dragging === row.dataset.entry) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    $('.drop-target')?.classList.remove('drop-target');
    row.classList.add('drop-target');
  });
  document.addEventListener('drop', event => {
    const row = event.target.closest('[data-entry]');
    if (!dragging || !row) return;
    event.preventDefault();
    const target = state.setlist.items.findIndex(item => item.id === row.dataset.entry);
    if (moveEntry(state.setlist.items, dragging, target)) {
      refreshPresent();
      save();
    }
  });
  document.addEventListener('dragend', () => {
    dragging = null;
    $('.drop-target')?.classList.remove('drop-target');
  });

  document.addEventListener('keydown', event => {
    if (dialog.open && event.target.id === 'set-name' && event.key === 'Enter') {
      event.preventDefault();
      const confirm = $('[data-action="store-set"], [data-action="create-set"]', dialog);
      confirm?.click();
      return;
    }
    if (dialog.open || event.ctrlKey || event.metaKey || event.altKey || event.isComposing ||
        event.target.closest('input, textarea, select, [contenteditable]')) return;
    const pressed = event.key.toLowerCase();
    if (event.repeat && ['b', '/', '?'].includes(pressed)) return;
    if (pressed === '/') {
      event.preventDefault();
      changeView('library');
      $('#search-library').focus();
    } else if (pressed === '?') {
      event.preventDefault();
      shortcuts();
    } else if (pressed === 'b') {
      event.preventDefault();
      blank();
    } else if (view === 'present') {
      const previous = ['arrowleft', 'arrowup', 'pageup'].includes(pressed);
      const next = ['arrowright', 'arrowdown', 'pagedown', ' '].includes(pressed);
      if (pressed === ' ' && event.target.closest('button, a')) return;
      if (previous || next) {
        event.preventDefault();
        step(previous ? -1 : 1);
      } else if (pressed === 'home' || pressed === 'end') {
        event.preventDefault();
        pageCue(pressed === 'home' ? 0 : (songFor(state)?.pages.length ?? 1) - 1);
      } else if (/^[1-9]$/.test(pressed)) {
        event.preventDefault();
        pageCue(Number(pressed) - 1);
      }
    }
  });

  window.addEventListener('online', () => {
    checkSharedLibrary();
    updateOffline();
  });
  window.addEventListener('offline', updateOffline);
  checkSharedLibrary();
  render('present');
  sync();
}
