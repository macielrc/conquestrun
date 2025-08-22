
const CACHE_NAME = 'conquestrun-demo-v2';
const URLS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png'
];
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS))
  );
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))\n  );\n});\nself.addEventListener('fetch', (event) => {\n  event.respondWith(\n    caches.match(event.request).then(resp => resp || fetch(event.request))\n  );\n});\n