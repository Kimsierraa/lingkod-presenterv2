import { defaultLook, presets } from './core.mjs';
import { mediaUrl } from './store.mjs';

const stages = new WeakMap();
const observer = new ResizeObserver(entries => entries.forEach(({ target }) => fit(target)));

function getStage(host) {
  if (!stages.has(host)) {
    const image = document.createElement('img');
    image.className = 'stage-image';
    image.alt = '';
    image.hidden = true;
    const veil = document.createElement('div');
    veil.className = 'stage-veil';
    const lyrics = document.createElement('div');
    lyrics.className = 'stage-lyrics';
    host.replaceChildren(image, veil, lyrics);
    stages.set(host, { image, veil, lyrics, background: undefined, text: undefined });
    observer.observe(host);
  }
  return stages.get(host);
}

export function plainLyrics(text) {
  return text.replace(/\[\/?(C1|F1)\]/gi, '');
}

function addLyrics(container, text) {
  const chunks = text.split(/(\[\/?(?:C1|F1)\])/gi);
  const active = new Set();
  const nodes = [];
  for (const chunk of chunks) {
    const tag = /^\[(\/?)(C1|F1)\]$/i.exec(chunk);
    if (tag) {
      const type = tag[2].toUpperCase();
      if (tag[1]) active.delete(type);
      else active.add(type);
    } else if (chunk) {
      if (!active.size) nodes.push(document.createTextNode(chunk));
      else {
        const span = document.createElement('span');
        span.textContent = chunk;
        span.classList.toggle('lyric-highlight', active.has('C1'));
        span.classList.toggle('lyric-emphasis', active.has('F1'));
        nodes.push(span);
      }
    }
  }
  container.replaceChildren(...nodes);
}

function fit(host) {
  const stage = stages.get(host);
  const { lyrics, size } = stage;
  const width = host.clientWidth;
  const height = host.clientHeight;
  if (!width || !height || !stage.text) return;
  const maxSize = Math.max(2, Math.min(width * 0.065, height * 0.19) * size / 100);
  lyrics.classList.add('measure-lines');
  lyrics.style.fontSize = maxSize + 'px';
  const lineScale = Math.min(1, (width * 0.878) / lyrics.scrollWidth);
  const preserveLines = lineScale >= 0.72;
  lyrics.classList.toggle('measure-lines', preserveLines);
  let low = 2;
  let high = Math.max(low, preserveLines ? maxSize * lineScale : maxSize);
  for (let i = 0; i < 12 && high - low > 0.15; i++) {
    const mid = (low + high) / 2;
    lyrics.style.fontSize = mid + 'px';
    if (lyrics.scrollHeight > height * 0.82) high = mid;
    else low = mid;
  }
  lyrics.style.fontSize = low + 'px';
}

async function backgroundFor(host, stage, id) {
  const preset = Object.hasOwn(presets, id) ? presets[id] : null;
  host.style.background = preset?.gradient ?? '#141226';
  stage.image.hidden = true;
  try {
    const url = preset?.image ?? (preset ? '' : await mediaUrl(id));
    if (stage.background !== id) return;
    if (url) {
      stage.image.src = url;
      stage.image.hidden = false;
    } else {
      stage.image.removeAttribute('src');
    }
  } catch {
    if (stage.background === id) stage.image.removeAttribute('src');
  }
}

export function drawStage(host, page, config, blank = false) {
  const look = { ...defaultLook, ...config };
  const stage = getStage(host);
  host.classList.toggle('stage-blackout', blank);
  stage.veil.style.opacity = String(look.dim / 100);
  const family = { sans: '"Segoe UI", Arial, sans-serif', serif: 'Georgia, serif', mono: 'Consolas, monospace' };
  stage.lyrics.style.fontFamily = family[look.font] ?? family.sans;
  stage.lyrics.style.fontWeight = String(look.weight);
  stage.lyrics.style.color = look.color;
  stage.lyrics.style.textAlign = look.align;
  stage.size = look.size;
  const text = page?.lyrics ?? '';
  if (text !== stage.text) {
    stage.text = text;
    addLyrics(stage.lyrics, text);
  }
  if (stage.background !== look.background) {
    stage.background = look.background;
    void backgroundFor(host, stage, look.background);
  }
  fit(host);
}

export function disposeStage(host) {
  observer.unobserve(host);
  stages.delete(host);
}
