const scope = new URL('./', import.meta.url).pathname;
export const liveKey = 'lingkod-live:' + scope;
export const draftKey = 'lingkod-drafts:' + scope;
export const themeKey = 'lingkod-theme:' + scope;
export const bus = 'BroadcastChannel' in window ? new BroadcastChannel(liveKey) : null;

const database = new Promise((resolve, reject) => {
  const request = indexedDB.open('lingkod-presenter-v2:' + scope, 1);
  request.onupgradeneeded = () => {
    request.result.createObjectStore('workspace');
    request.result.createObjectStore('media');
  };
  request.onsuccess = () => resolve(request.result);
  request.onerror = () => reject(request.error);
});

export async function read(store, key) {
  const db = await database;
  return new Promise((resolve, reject) => {
    const request = db.transaction(store).objectStore(store).get(key);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function write(store, key, value) {
  const db = await database;
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(store, 'readwrite');
    const objectStore = transaction.objectStore(store);
    if (value === undefined) objectStore.delete(key);
    else objectStore.put(value, key);
    transaction.oncomplete = () => resolve();
    transaction.onabort = () => reject(transaction.error);
  });
}

export function readLocal(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

export function publishLive(snapshot) {
  try {
    localStorage.setItem(liveKey, JSON.stringify(snapshot));
  } catch {
    // BroadcastChannel and the operator window still deliver live changes.
  }
  bus?.postMessage({ type: 'cue', snapshot });
}

const mediaUrls = new Map();
export function mediaUrl(id) {
  if (!mediaUrls.has(id)) {
    mediaUrls.set(id, read('media', id).then(blob => blob ? URL.createObjectURL(blob) : ''));
  }
  return mediaUrls.get(id);
}

export async function forgetMedia(id) {
  const pending = mediaUrls.get(id);
  mediaUrls.delete(id);
  const url = await pending;
  if (url) URL.revokeObjectURL(url);
}
