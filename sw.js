// urls to cache (basically app's files)
let cacheUrls = [
    '/',
    '/main.js',
    '/styles.css',
    '/bgimage.png'
];

// on install cache everything
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('calculator-cache').then(function(cache) {
            console.log('[SW] Cache opened');
            return cache.addAll(cacheUrls);
        })
    );
});

// on fetch check if resource exists, then return it
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if(response) {
                return response;
            };

            return fetch(event.request);
        })  
    );
});
