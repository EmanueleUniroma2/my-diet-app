var cacheName = "my-diet-app";
var filesToCache = ["./manifest.json", "./favicon.png", "./icon-512x512.png"];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", function (e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});
