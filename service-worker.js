const CACHE_NAME = "Us-v1";

const FILES_TO_CACHE = [
  "index.html",
  "Feelings.html",
  "Reminder.html",
  "Beentogether.html",
  "Catch_Falling_Hearts_Fixed.html",
  "Song1.mp3",
  "Song2.mp3",
  "Song3.mp3",
  "Song4.mp3",
  "Song5.mp3",
  "pink-heart.png",
  "heart.png",
  "basket.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});