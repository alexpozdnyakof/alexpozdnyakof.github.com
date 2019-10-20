importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

self.addEventListener('install', event => {
    event.waitUntil(
        caches
        .open('my-site-name')
        .then(cache =>
            cache.addAll([
                'favicon.ico',
                'main.js',
            ])
        )
    )
})
workbox.routing.registerRoute(
    /\.js$/,
    new workbox.strategies.NetworkFirst()
);
workbox.routing.registerRoute(
    // Cache CSS files.
    /\.css$/,
    // Use cache but update in the background.
    new workbox.strategies.StaleWhileRevalidate({
        // Use a custom cache name.
        cacheName: 'css-cache',
    })
);
workbox.routing.registerRoute(
    // Cache image files.
    /\.(?:png|jpg|jpeg|svg|gif)$/,
    // Use the cache if it's available.
    new workbox.strategies.CacheFirst({
        // Use a custom cache name.
        cacheName: 'image-cache',
        plugins: [
        new workbox.expiration.Plugin({
            // Cache only 20 images.
            maxEntries: 20,
            // Cache for a maximum of a week.
            maxAgeSeconds: 7 * 24 * 60 * 60,
        })
        ],
    })
);
/*
workbox.precaching.precacheAndRoute([
    {
      "url": "css/app.css",
      "revision": "fd2e1d3c4c8d43da10afe67a7d69fbd1"
    },
    {
      "url": "index.html",
      "revision": "39b8fb34f8be7ecf969530f1b9e69ba1"
    },
    {
      "url": "js/app.js",
      "revision": "03bde26b6af07cd6bb0378ec0a50e410"
    }
  ]);*/