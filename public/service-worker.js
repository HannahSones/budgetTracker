console.log('This is your service-worker.js file!');

const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/styles.css",
  "index.js",
  "/manifest.webmanifest",
  "database.js",
  "icons/icon-192x192.png",
  "icons/icon-512x512.png"
];



// install
self.addEventListener('install', function (evt) {

  evt.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log({ cache });
        cache.addAll(FILES_TO_CACHE);
      })
      .catch((err) => {
        console.log({ err });
      })
  );


  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("cache data is removed", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});


self.addEventListener("fetch", function (event) {
  if (event.request.url.includes("/api/")) {
    event.respondWith(
      caches.open(DATA_CACHE_NAME).then(cache => {
        return fetch(event.request)
          .then(response => {

            if (response.status === 200) {
              cache.put(event.request.url, response.clone());
            }

            return response;
          })
          .catch(error => {
            console.log(error);
            return cache.match(event.request);
          });
      }).catch(error => console.log(error))
    );

    return;
  }

  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});