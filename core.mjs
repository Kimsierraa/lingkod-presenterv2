export const presets = {
  mountain: { name: 'Mountain dusk', image: './mountain-dusk.jpg' },
  violet: { name: 'Deep violet', gradient: 'radial-gradient(ellipse at 48% 115%, #7452a6, #281a49 60%, #130f24 88%)' },
  ocean: { name: 'Midnight blue', gradient: 'radial-gradient(ellipse at 50% 110%, #306a7f, #152c4c 55%, #0b1223 85%)' },
  black: { name: 'Solid black', gradient: '#000' },
};

export const defaultLook = {
  background: 'mountain', dim: 24, font: 'sans', size: 100,
  weight: 700, color: '#ffffff', align: 'center',
};

const demo = (id, title, pages) => ({
  id, title, author: 'Rehearsal sample',
  pages: pages.map(([label, lyrics]) => ({ label, lyrics })),
});

export const demoSongs = [
  demo('morning-light', 'Morning Light', [
    ['Verse 1', 'When the morning fills the sky\nWe will lift our voices high\nEvery breath a gift of grace\nHere together in this place'],
    ['Chorus', 'Let our voices rise as one\nLike the dawning of the sun\nFill this room with hope and peace\nLet our grateful song increase'],
    ['Verse 2', 'Through the quiet of the night\nYou have kept a steady light\nStep by step we walk with You\nMaking every morning new'],
    ['Bridge', 'In the stillness, in the song\nHere with You is where we belong'],
    ['Chorus', 'Let our voices rise as one\nLike the dawning of the sun\nFill this room with hope and peace\nLet our grateful song increase'],
    ['Ending', 'Every breath a gift of grace\nHere together in this place'],
  ]),
  demo('steady-hope', 'Steady Hope', [
    ['Verse 1', 'When the road is hard to see\nYou are walking here with me'],
    ['Chorus', 'Hope will hold us through the night\nTill we see the morning light'],
    ['Verse 2', 'With a quiet heart I know\nYou are near where’er I go'],
  ]),
  demo('room-for-grace', 'Room for Grace', [
    ['Verse 1', 'In this room we make a space\nFor the kindness of Your grace'],
    ['Chorus', 'All are welcome, come and sing\nBring the gifts that you can bring'],
    ['Ending', 'May Your kindness fill this place\nMay we always make room for grace'],
  ]),
  demo('peace-go-with-us', 'Peace Go with Us', [
    ['Verse 1', 'May Your peace go with us now\nAs we carry what we’ve found'],
    ['Ending', 'In the work of every day\nMay we share Your peace along the way'],
  ]),
];

export const uid = () => crypto.randomUUID();
export const fold = (value) => value.normalize('NFD').replace(/\p{M}|['’]/gu, '').toLowerCase().trim();
export const sectionName = (value) => value.replace(/\[\/?(?:C1|F1)\]/gi, '').trim();
const record = (value) => value && typeof value === 'object' && !Array.isArray(value);
const plain = (value, limit) => typeof value === 'string' ? value.trim().slice(0, limit) : '';

export function normalizeSong(value) {
  if (!record(value)) throw new Error('Each song must be an object.');
  const title = plain(value.title, 180);
  const sections = value.pages ?? value.sections;
  if (!title || !Array.isArray(sections) || sections.length < 1 || sections.length > 200) {
    throw new Error('Each song needs a title and 1–200 pages.');
  }
  const pages = sections.flatMap((page, index) => {
    const label = sectionName(plain(page?.label ?? page?.name, 80)) || 'Page ' + (index + 1);
    if (typeof page?.lyrics !== 'string' || page.lyrics.length > 16000) {
      throw new Error(title + ' has a page without valid lyric text.');
    }
    return page.lyrics.replace(/\r\n?/g, '\n').split(/^---[ \t]*$/m).map((part, partIndex) => {
      const lyrics = part.trim();
      if (!lyrics) throw new Error(title + ' has an empty page. Remove extra page breaks.');
      return { label: partIndex ? label + ' · ' + (partIndex + 1) : label, lyrics };
    });
  });
  if (pages.length > 200) throw new Error(title + ' has more than 200 pages.');
  return { id: uid(), title, author: plain(value.author, 180), pages };
}

// Read the legacy data literal without executing JavaScript.
function parseRawSongs(source) {
  const token = /\s+|\/\/[^\n]*|\/\*[\s\S]*?\*\/|"(?:[^"\\\r\n]|\\[\s\S])*"|'(?:[^'\\\r\n]|\\[\s\S])*'|[A-Za-z_$][\w$]*|[=[\]{},:;]/y;
  let position = 0;
  function next() {
    while (position < source.length) {
      token.lastIndex = position;
      const match = token.exec(source);
      if (!match) throw new Error('Expected a data-only rawSongs declaration near character ' + (position + 1) + '.');
      position = token.lastIndex;
      if (!/^(?:\s|\/)/.test(match[0])) return match[0];
    }
    return null;
  }

  let current = next();
  function eat(expected) {
    if (current !== expected) return false;
    current = next();
    return true;
  }
  function requireToken(expected) {
    if (!eat(expected)) throw new Error('Expected ' + expected + ' in the rawSongs file.');
  }
  function readString() {
    if (!current || !/^["']/.test(current)) throw new Error('Expected quoted text in the rawSongs file.');
    const body = current.slice(1, -1);
    current = next();
    const escapes = { n: '\n', r: '\r', t: '\t', b: '\b', f: '\f', v: '\v', '0': '\0', "'": "'", '"': '"', '\\': '\\', '/': '/' };
    return body.replace(/\\(?:u([\da-f]{4})|x([\da-f]{2})|(\r\n|[\s\S]))/gi, (_, unicode, hex, simple) => {
      if (unicode || hex) return String.fromCharCode(parseInt(unicode ?? hex, 16));
      if (/^[\r\n]/.test(simple)) return '';
      if (!Object.hasOwn(escapes, simple)) throw new Error('Unsupported escape in rawSongs text.');
      return escapes[simple];
    });
  }
  function readValue(depth) {
    if (depth > 8) throw new Error('The rawSongs file is nested too deeply.');
    if (eat('[')) {
      const items = [];
      while (!eat(']')) {
        items.push(readValue(depth + 1));
        if (eat(']')) break;
        requireToken(',');
      }
      return items;
    }
    if (eat('{')) {
      const fields = Object.create(null);
      while (!eat('}')) {
        let key;
        if (/^[A-Za-z_$]/.test(current ?? '')) {
          key = current;
          current = next();
        } else {
          key = readString();
        }
        requireToken(':');
        fields[key] = readValue(depth + 1);
        if (eat('}')) break;
        requireToken(',');
      }
      return fields;
    }
    return readString();
  }

  eat('export');
  if (!eat('const') && !eat('let') && !eat('var')) throw new Error('Expected a rawSongs data declaration.');
  requireToken('rawSongs');
  requireToken('=');
  const result = readValue(0);
  eat(';');
  if (current !== null) throw new Error('Only a single rawSongs data declaration is supported.');
  return result;
}

export function parseLibrary(text, filename) {
  const input = text.replace(/^\uFEFF/, '').trim();
  if (!input) throw new Error('The file is empty.');
  let data;
  if (/\.txt$/i.test(filename)) {
    const title = filename.replace(/\.txt$/i, '');
    data = [{ title, pages: [{ lyrics: input }] }];
  } else {
    data = /\.js$/i.test(filename) ? parseRawSongs(input) : JSON.parse(input);
    data = Array.isArray(data) ? data : data.songs ?? data.rawSongs ?? [data];
  }
  if (!Array.isArray(data) || !data.length || data.length > 5000) {
    throw new Error('The file needs 1–5,000 songs.');
  }
  return data.map(normalizeSong);
}

const fingerprint = ({ title, author, pages }) => JSON.stringify([title, author, pages]);
export function mergeSongs(library, songs) {
  const byContent = new Map(library.map(song => [fingerprint(song), song.id]));
  return songs.map(song => {
    const key = fingerprint(song);
    const existing = byContent.get(key);
    if (existing) return existing;
    library.push(song);
    byContent.set(key, song.id);
    return song.id;
  });
}

export function newWorkspace() {
  const songs = structuredClone(demoSongs);
  const items = songs.map(song => ({ id: uid(), songId: song.id }));
  return {
    songs, setlist: { name: 'Sunday Worship', items }, saved: [], look: { ...defaultLook },
    cue: { entryId: items[0].id, songId: songs[0].id, page: 0 }, blank: false,
  };
}

export const songFor = (state, cue = state.cue) => state.songs.find(song => song.id === cue?.songId);

export function adjacentCue(state, direction) {
  const cue = state.cue;
  const song = songFor(state);
  if (!song) return null;
  const page = cue.page + direction;
  if (page >= 0 && page < song.pages.length) return { ...cue, page };
  const index = state.setlist.items.findIndex(item => item.id === cue.entryId);
  if (index < 0) return null;
  const entry = state.setlist.items[index + direction];
  if (!entry) return null;
  const next = songFor(state, entry);
  if (!next) return null;
  return { entryId: entry.id, songId: entry.songId, page: direction > 0 ? 0 : next.pages.length - 1 };
}

export function moveEntry(items, id, targetIndex) {
  const index = items.findIndex(item => item.id === id);
  if (index < 0 || index === targetIndex || targetIndex < 0 || targetIndex >= items.length) return false;
  const [item] = items.splice(index, 1);
  items.splice(targetIndex, 0, item);
  return true;
}

export function setlistBundle(state, list) {
  const ids = [...new Set(list.items.map(item => item.songId))];
  const songs = ids.map(id => songFor(state, { songId: id }));
  return { format: 'lingkod-setlist', version: 1, name: list.name, songs, order: list.items.map(item => ids.indexOf(item.songId)) };
}

export function parseSetlist(text) {
  const data = JSON.parse(text.replace(/^\uFEFF/, ''));
  if (data?.format !== 'lingkod-setlist' || data.version !== 1 || !plain(data.name, 120) ||
      !Array.isArray(data.songs) || !Array.isArray(data.order) || data.songs.length > 5000 ||
      data.order.length > 5000 || data.order.some(i => !Number.isInteger(i) || i < 0 || i >= data.songs.length)) {
    throw new Error('Choose a Lingkod setlist export (.json).');
  }
  return { name: plain(data.name, 120), songs: data.songs.map(normalizeSong), order: data.order };
}
