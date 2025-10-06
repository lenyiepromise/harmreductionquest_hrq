// =============================
// SERVICE WORKER WITH OFFLINE FALLBACK
// =============================

const CACHE_NAME = "hrq-cache-v2";
const OFFLINE_URL = "offline.html";

const urlsToCache = [
  "./",
  "./index.html",
  "./offline.html",
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
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching essential files...");
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Fetch Handler
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Optionally: update cache dynamically here
        return response;
      })
      .catch(() => {
        // On failure (offline), try cache, else show offline page
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          if (event.request.mode === "navigate") {
            return caches.match(OFFLINE_URL);
          }
        });
      })
  );
});

// Activate and clear old cache
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});