const CACHE_NAME = 'uba-bvn-v1';

// Everything the app needs to work offline
const ASSETS = [
  '/',
  '/index.html',
  // Google Fonts — cache on first fetch via the fetch handler below
];

// External origins to cache (fonts, icons)
const CACHE_ORIGINS = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
];

// ── Install: pre-cache core assets ──────────────────────────────
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting(); // activate immediately
});

// ── Activate: clear old caches ───────────────────────────────────
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim(); // take control of all open tabs
});

// ── Fetch: cache-first for app shell & fonts ─────────────────────
self.addEventListener('fetch', evt => {
  const { request } = evt;
  const url = new URL(request.url);

  // Only handle GET requests
  if (request.method !== 'GET') return;

  // Cache-first strategy
  evt.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;

      // Not in cache — fetch from network and cache the response
      return fetch(request)
        .then(response => {
          // Only cache valid responses from our origins or external font origins
          if (
            response.ok &&
            (url.origin === self.location.origin ||
              CACHE_ORIGINS.some(o => url.href.startsWith(o)))
          ) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => {
          // Network failed and not in cache
          // For navigation requests, return the app shell
          if (request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        });
    })
  );
});