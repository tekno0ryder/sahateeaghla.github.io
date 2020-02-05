'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "2f339f1bd87ca76a1b23167fd1eb3244",
"/assets\assets\days\friday.png": "49a707d939ddf910fd8772046edd4e57",
"/assets\assets\days\monday.png": "aedcf90e9b0e761ba8503b5bc5abf2f8",
"/assets\assets\days\saturday.png": "d392ffd488e5b04a54f3838edfa6cb48",
"/assets\assets\days\sunday.png": "2729c089274b94ae204b8eb7feea886f",
"/assets\assets\days\thursday.png": "3a42f4879c9e08afe841ab525b3e99b6",
"/assets\assets\days\tuesday.png": "3cfce0023dbbf1ed26fe60bb794257a1",
"/assets\assets\days\wednesday.png": "8d289fd3d6785ac58768bc5b69a48f07",
"/assets\assets\discount.png": "663b34e46549f028101bd2422da15aff",
"/assets\assets\facebook.png": "84f2c3b67cad809c4eed55d6ccd5ad4f",
"/assets\assets\icons8-apple-maps-96.png": "9ceff7c208f7d75ac2de22e29c080fa9",
"/assets\assets\instagram.png": "11afc9bc8624f067be43ebdd6944bc14",
"/assets\assets\location.png": "2637a8dbc72e79352299da8d2810b789",
"/assets\assets\logo-white.png": "8c99a66e18b43d9945359eda81acdad6",
"/assets\assets\logo.png": "d7c16d160c57eda51a5bcefb5a1acdb8",
"/assets\assets\maps.png": "96c6968b4fb9d0915145b0a344ff24da",
"/assets\assets\map_marker.png": "dca7d6bd2ca2f46c17eea94d4b9350b7",
"/assets\assets\phone.png": "83b5e36eea5ea47e582cf32d3ad3cfcf",
"/assets\assets\pinch1.png": "902b3777c27df12be272f19019cf9132",
"/assets\assets\pinch2.png": "012babf4831124d7216e2cc0fe83b0a2",
"/assets\assets\placeholder.png": "813e0b8c7c6860b5a7f5956356532016",
"/assets\assets\snapchat.png": "16a549e25a5e128909d145afbb85e44e",
"/assets\assets\star.png": "d7643df289c2af0840317c23ef565218",
"/assets\assets\whatsapp.png": "120d4bb6256afd38ee59f11809790594",
"/assets\FontManifest.json": "72e79046286c8a87476196a0201768d4",
"/assets\fonts\CustomIcons.ttf": "7b11a004012a6313b50a55b650ce2c9f",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\fonts\Tajawal-Black.ttf": "d97b08004fd1159f59e649b5443a24a0",
"/assets\fonts\Tajawal-Bold.ttf": "928bdad12bce16065217fb4f8d3d6660",
"/assets\fonts\Tajawal-ExtraBold.ttf": "c819dea273331f05faa643a530b2fc5c",
"/assets\fonts\Tajawal-ExtraLight.ttf": "4e83d8febc64721489eb8ef6cc1a768f",
"/assets\fonts\Tajawal-Light.ttf": "4d224df0d68b28402c9ff7b3800114e1",
"/assets\fonts\Tajawal-Medium.ttf": "6e338a4528da5962838ed88194b2fa61",
"/assets\fonts\Tajawal-Regular.ttf": "215e30a4c4f67dd29a32d3c8c0d5fe99",
"/assets\LICENSE": "f136f4c4d60570016b2abc3b96b2a638",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets\packages\open_iconic_flutter\assets\open-iconic.woff": "3cf97837524dd7445e9d1462e3c4afe2",
"/index.html": "024f47e1ace493b9d41754b49de6ad30",
"/main.dart.js": "06ce0ff81d30e6ab674e5eae7cc56521"
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
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
