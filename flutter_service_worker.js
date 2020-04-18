'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "0f882aa09d7f16295fa35d84e2632f0d",
"assets/assets/avatar1.png": "ed453c23beef934099211a6ee0998822",
"assets/assets/avatar2.png": "144dfc550934e9a7cbcef9bea77c2d37",
"assets/assets/avatar3.png": "02b6aabd8ee85f5379244cd0d6137bcc",
"assets/assets/image1.png": "1e4bb66ddcb5125f8ba3d8e641f79b9a",
"assets/assets/image2.png": "28402f12f593c5421f2bcd70b5501db9",
"assets/assets/image3.png": "a5a6a730973db70cc71883ab863681fa",
"assets/assets/image4.png": "30c543a8c056327201b3752df1688d7f",
"assets/assets/Montserrat-Black.ttf": "e3242149669bebf6afc4b0b5d22ec6ae",
"assets/assets/Montserrat-Bold.ttf": "a3b387c93882604792867736aecd56c8",
"assets/assets/Montserrat-Light.ttf": "2f354053d1c9c36f533ebd226698bfa5",
"assets/assets/Montserrat-Medium.ttf": "0098f804fc2d06af52650e0b8ed3390c",
"assets/assets/Montserrat-Regular.ttf": "a8a117360e71de94ae3b0b0f8d15b44d",
"assets/FontManifest.json": "e15c6230317dd9b01e6205c6943faf49",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "fdd0942e6a6d94ab6c3abe1c3294de81",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "552f0de74763073b303e80ce52220282",
"/": "552f0de74763073b303e80ce52220282",
"main.dart.js": "70ab3472dca616973c5b1e46abbeacc9",
"manifest.json": "e74e43bcce008b5bb9839efa90438858"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
