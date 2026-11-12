import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import {
  adjacentCue, mergeSongs, moveEntry, newWorkspace, normalizeSong, parseLibrary, parseSetlist, setlistBundle,
} from './dist/core.mjs';

test('supports JSON and legacy data-only libraries with formatting tags and page breaks', () => {
  const json = JSON.stringify({ songs: [{ title: 'Warm up', pages: [{ label: 'Verse', lyrics: 'One line\n---\n[F1]Another line[/F1]' }] }] });
  const songs = parseLibrary(json, 'library.json');
  assert.equal(songs[0].pages[1].label, 'Verse · 2');
  assert.equal(songs[0].pages[1].lyrics, '[F1]Another line[/F1]');
  const js = '/* authorized export */ const rawSongs = [{title:"Warm up",sections:[{name:"[C1]Verse[/C1]",lyrics:"One line\\nSecond line"},],},];';
  const legacy = parseLibrary(js, 'songs.js');
  assert.equal(legacy[0].pages[0].label, 'Verse');
  assert.equal(legacy[0].pages[0].lyrics, 'One line\nSecond line');
  assert.equal(parseLibrary('First\n---\nSecond', 'Practice.txt')[0].pages.length, 2);
});

test('rejects executable input and invalid pages', () => {
  assert.throws(() => parseLibrary('const rawSongs = []; alert("test");', 'songs.js'), /single rawSongs/);
  assert.throws(() => parseLibrary('const rawSongs = (() => [])();', 'songs.js'), /data-only/);
  assert.throws(() => normalizeSong({ title: 'Practice', pages: [{ lyrics: 'Text\n---\n' }] }), /empty page/);
});

test('advances across song boundaries and respects reordered duplicate entries', () => {
  const state = newWorkspace();
  state.cue.page = state.songs[0].pages.length - 1;
  const second = state.setlist.items[1];
  assert.deepEqual(adjacentCue(state, 1), { entryId: second.id, songId: second.songId, page: 0 });
  const duplicate = { ...second, id: 'repeat' };
  state.setlist.items.push(duplicate);
  assert.equal(moveEntry(state.setlist.items, duplicate.id, 1), true);
  assert.equal(adjacentCue(state, 1).entryId, 'repeat');
  state.cue = adjacentCue(state, 1);
  assert.equal(adjacentCue(state, -1).page, state.songs[0].pages.length - 1);
});

test('setlist exports preserve embedded lyrics, repeats, order, and empty lists', () => {
  const state = newWorkspace();
  state.setlist.items.push({ ...state.setlist.items[0], id: 'repeat' });
  const copy = parseSetlist(JSON.stringify(setlistBundle(state, state.setlist)));
  assert.deepEqual(copy.order, [0, 1, 2, 3, 0]);
  assert.deepEqual(copy.songs[0].pages, state.songs[0].pages);
  assert.deepEqual(mergeSongs(state.songs, copy.songs), state.songs.map(song => song.id));
  const empty = parseSetlist(JSON.stringify(setlistBundle(state, { name: 'Empty', items: [] })));
  assert.deepEqual(empty.order, []);
});

test('parses the supplied legacy library', { skip: !process.env.LINGKOD_TEST_LIBRARY }, () => {
  const songs = parseLibrary(readFileSync(process.env.LINGKOD_TEST_LIBRARY, 'utf8'), 'songs.js');
  assert.ok(songs.length > 0);
  assert.ok(songs.every(song => song.pages.every(page => page.lyrics.length > 0)));
});
