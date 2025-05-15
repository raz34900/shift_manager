const CACHE_NAME = 'shift-calculator-v1';
const urlsToCache = [
    'index.html',
    'script.js',
    'styles.css',
    'manifest.json',
    'icon.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});