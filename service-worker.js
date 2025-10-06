// =============================
// SERVICE WORKER FOR HRQ APP
// =============================

const CACHE_NAME = "hrq-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./css/tailwind.css",
  "./css/custom.css",
  "./js/data.js",
  "./js/quiz.js",
  "./js/ui.js",
  "./js/miniGame.js",
  "./js/main.js",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png"
];

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch from cache first, then network fallback
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});

// Activate and remove old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) => {
      return Promise.all(
        names
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
});