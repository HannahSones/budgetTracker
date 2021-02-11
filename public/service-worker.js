'use strict'

console.log('This is your service-worker.js file!');

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
  
  const CACHE_NAME = "static-cache-v2";
  const DATA_CACHE_NAME = "data-cache-v1";