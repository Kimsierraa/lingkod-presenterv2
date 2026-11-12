const version = 'lingkod-v2-20261112-1';
const cacheName = version + ':' + self.registration.scope;
const shell = [
  './index.html', './style.css', './app.mjs', './core.mjs', './stage.mjs', './store.mjs', './ui.mjs',
  './mountain-dusk.jpg', './icon.svg',
].map(path => new URL(path, self.registration.scope).href);

self.addEventListener('install', event => {
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(shell)));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) {
      if (key.startsWith('lingkod-v2-') && key.endsWith(':' + self.registration.scope) && key !== cacheName) {
        await caches.delete(key);
      }
    }
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const scope = new URL(self.registration.scope);
  const isApp = url.origin === scope.origin &&
    (url.pathname === scope.pathname || url.pathname === new URL(shell[0]).pathname);
  const asset = shell.find(path => new URL(path).pathname === url.pathname && url.origin === scope.origin);
  if (event.request.mode === 'navigate' && isApp) {
    event.respondWith(fetch(event.request).then(response => {
      if (!response.ok) throw new Error('App shell unavailable.');
      return response;
    }).catch(() => caches.match(shell[0], { cacheName })));
  } else if (asset) {
    event.respondWith(caches.match(asset, { cacheName }).then(response => response ?? fetch(event.request)));
  }
});
