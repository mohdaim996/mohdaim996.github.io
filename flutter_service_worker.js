'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ce771bb33a2a445c8e616a88ec29c517",
".git/config": "28baa5ea32cfc0a5148507b6555a573e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "06af93d9c7009d5c054e5655a5e3f822",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3f91036547989597399120704ff50696",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b10fa94529a50b558c529417e7adac00",
".git/logs/refs/heads/main": "b10fa94529a50b558c529417e7adac00",
".git/logs/refs/remotes/origin/HEAD": "9a1319a0d198930a158588e582368314",
".git/logs/refs/remotes/origin/main": "daea0cad94d0bc9734c9646734bfe7fc",
".git/objects/09/16e3d94d361182c9dbb658b75e917a1edab8a3": "10b2f681f4e2e91c3d3974e131131cd4",
".git/objects/09/7d9c159ad7e24ba033b5847d7d80fe8b236011": "dd9bf50b940779b24b9538cf66998047",
".git/objects/0b/2ce350fefc6dda6fa4f8e2afaff1a7f29e889b": "e8b11c36510358d74833e986e5a6567c",
".git/objects/11/8ea2620f32eda014ea6b3fcd9c269914fcdde5": "e59e98b3fc7f49212ef3a90c0f62a20b",
".git/objects/15/3d059ee1dabe767c5e6d6c3358eaaece1a3d9f": "0fad18dccfbe5af6c01cc16e573dd637",
".git/objects/21/c70fec06c3eea1cc35d16f7741182197e5d846": "fd54ed5384993e4c9ac24190939f5d1d",
".git/objects/21/f0d19fc22f2d337c724dc17d5d61d24e0ce872": "f991bdb2e32a5eea1a5f4a101410e982",
".git/objects/22/05fff9ed8ebc8f3a4c9b3c6eb93f1e49bc8a43": "0868e682eb7fe94ff9c33415b442a075",
".git/objects/25/edcf57c246a4db036eb2b15e3013372cdfeadd": "eee13200a3f17f99464ff154c0bfb503",
".git/objects/32/6c263638e345119b27ab280fdad6887e94dc80": "ae111349302f360b7f2b712c94ea17a0",
".git/objects/33/4a4ff63c2dac89fe733b1c50d3d7d87a1bfdf1": "a52d764acd3a5c251a8df552cf2c7379",
".git/objects/37/cd0b49d5cad1f7326fdd812301a753beda8b27": "06f2f21b0caa8581ac039f29477bdb34",
".git/objects/3a/1beda71111f4e61dfe60d11d1fc95aeb21ec54": "1a0a6b9716214d30e19a544de54896e6",
".git/objects/3b/a3f25d9e2f8c9f476fc793d49c32eec6e6d7cd": "b87d331c1f8b0d1d58a7fe56c836fea9",
".git/objects/3e/eadd26aef6ccdda97cfaf86c7e317ed220c9c3": "abd2d65ed648d54bf95217e522a3c498",
".git/objects/3f/ec60a96146202261d0e1bea80fbb905f1d9499": "ae61a14d9364b79cf6e6ca9f1dbc651d",
".git/objects/47/09e788d0826d4a14207b048285f282e4a8bf0f": "22d9c5d00d9757c9c1324e777a055c96",
".git/objects/47/7b0d982209f32a5b85f70b3b8b12abae9a1e03": "cf1f75250e408a04cd257ea13b71e796",
".git/objects/4a/4d3647efa22c6a303d4bc4edfb60adc329e0b2": "4482c80fefbaaaac238f7f9a1fd4b461",
".git/objects/50/ed0ec80ebb5b9b9a15443eb809caaaba3cf2df": "263d3c75a4eccbb666de7b3bd93af79b",
".git/objects/53/a404edcf79acfe560ce6b9bc82820015f2113f": "fffcbce44d5b8e5a22914ed3d243510f",
".git/objects/57/dd3357df87993165db68f4f3c7b9482ade0b79": "da9a0083b7e6881efba952b8d7af419b",
".git/objects/5e/30ae2de717d7182cbe385aec3fcef916871d85": "8c2c4916a56020f8ebfa62d88fa6819c",
".git/objects/61/41f13571e3ff62989db926ab2d24c73a2243db": "776706febf5f655087b09b953fcf6a93",
".git/objects/62/085c1f09d2ec7c50e50794924896bc64121810": "6870f4bdfddb88d5a0c72898a6ceb011",
".git/objects/66/26c650623be533c012ad3e39d5fafef6605cbb": "c583f5663e485197d281654a1a373ef3",
".git/objects/68/71a02f25397ce76aab172fb2c8b838df827618": "b5360a9b3aaf6231d21caad808cf9724",
".git/objects/6b/3b40e7c2179894d41c6000f27c648ac00b9e33": "d743fb1368587b82b3a7acbeee3c2720",
".git/objects/6b/f5246b3844431beeaa0d172315aae267ee5dd9": "98ed23b9f2b7a04d1ec305cd805c608e",
".git/objects/6d/3037f2858912bdb2b2e3ccd19fcb2c25435014": "f2faa846cb5850bf76ec18124d918034",
".git/objects/6f/568019d3c69d4966bb5a0f759980a1472afc1e": "11711ec452167a523e427fab835abd15",
".git/objects/74/6adbb6b9e14b7e685c91e280a4d37a672afbd8": "eba295c22165b01ec06a735e4dbb3a44",
".git/objects/7a/7f9873ad7dceb4dc17087fb06c800fa0191376": "91f6523d91623d19d122fea7b32a3db9",
".git/objects/81/10c8470ebd16a652275a2fe4963d8fc63b6a65": "b0119c79b0882e614fa3f34a4d080836",
".git/objects/92/ac4af7b1080d3174abf2abffbff28ca0ee51ea": "1303838907b91137e4c532e8b5db4f19",
".git/objects/96/4b89e7fab2d07ea71ffd51d5abc53baed5d27e": "bb38996e0ae192eccc0a9cc1a5b52585",
".git/objects/96/be72e668d1a67deb035f90de3cc28c29303557": "f8ce58c1c4d6dd372d48a68d9fe6ce2e",
".git/objects/9a/a428e103b53fbb2307128d4dc5610f071fb437": "3572d8d3a0e14ce391d84ec1479297fd",
".git/objects/9a/d999dfb5a7391a3827f4fb46990b2e0266cbab": "bfbb1017aabe7aa6112cc29bc129887a",
".git/objects/a0/443f0cd29860785f555ebecf5c1fa08ffe7734": "991262979647bcb8971f952cd70ffa02",
".git/objects/a0/dacbd112a3b2acfdcd6907c45f25f9e091adf5": "0b8624b1b412428fb41ec6a210a61551",
".git/objects/a1/7fb7805ca05eb1acc1f616d1bcbf4b312fa9d0": "40d7a9c990cfa7b750c33a9c18cb3aa7",
".git/objects/a2/7085d179945836f649494e4ab0c7a29c6609e2": "0e9abb22501e81f0f10ff46bc6937220",
".git/objects/a7/35e068587f0bad4bf0b958ad03e508b92d4f06": "45e1cb0dc42b813e2e0225b09e2e9e4c",
".git/objects/a8/e938c083971baaa22638db9180d260f9deb325": "41bb8dcc3dde30fddc5799c17f97a0d0",
".git/objects/ad/a4da0fffc4030352c5eaae1cff7bcce11ec2f0": "b1a07d117f2a6a86f7f9e75825dfcedc",
".git/objects/b3/6ba1b34b63146c822abee87f18712115e7bfcb": "2ea88022c8b551d7261c74be435efd95",
".git/objects/bd/519ee0145a48a065f0397fbcd574c56c2502f1": "3c89bcc1f2144d9fe3bb8ebdd7b28f18",
".git/objects/bd/f3096235b78d4d32f37a9a6f46d5b3571ef493": "b568ba1cd6bdf7a11c84a9c05b752fb9",
".git/objects/c0/105331d4d487670c8d6e6d4702339715446492": "96bea492246940ba1e0a498df7eaebdd",
".git/objects/c0/733997934f1fc6a48a5ef97d181458076e7c7e": "c93e8dd310f67ca886449be6020d5f66",
".git/objects/c4/256e1c34869ccb9763c602ee45904a313f5d5f": "f662add2f012f6b47abb157db3d480e3",
".git/objects/c6/c602f91f90555350d074c1985938b3979c7f3e": "dc8f3077d6c1d4a7f1b6304a16b37458",
".git/objects/ce/13b42014bd49a3aafabafb0c3b81c899c42f18": "a3babc9a2b1a5f2c3c4dbc17461e31b6",
".git/objects/cf/5befa70b5bc204515a005a0a6d009cef6edabc": "b192c8f93c04626f464f99719d4f74d4",
".git/objects/d0/97d77a0f112f10bc99e1f66b907aa499b0c3c4": "b0c2b8b9c22238741687e015cc5d1e3e",
".git/objects/d1/177913931d3cb3cb43380b74aa8ff020bfe374": "35aa30556b0f9038a6dd5973e27e914a",
".git/objects/d3/896c98444fbe7288d434169a28c532258a4466": "65bd2275cf87203cd8cbaa19e4cce2fc",
".git/objects/d4/92d0d98c8fdc9f93ad2543bb4f531803e9df72": "e3677ae8914304b8340d8db27e7db71a",
".git/objects/da/7bdb7847320fe7fb4e6da88989a796038cd8f0": "067b363ac08089b48d2c96730ca2b1b0",
".git/objects/df/0abfc14678d269b079cc6411d968261bdad595": "ba38aca7753b557d053d022fdaa05b31",
".git/objects/e2/c8f59c3e114013c6b63d9875bb467c0e5c44db": "964a8ac56e27d89d58914267b8d178df",
".git/objects/e6/3cf8843f9c4f508edc933331c3c688f4e95f20": "a6ed577e69bbed772f9ce3e4809c4a53",
".git/objects/e7/e9ff135742a7bebb619ad5859f3b4e29163b8c": "6ee21e69a5a33e1b311ae539c40f02cb",
".git/objects/ef/b800bfe0732fbff57ed7d7f1c13e04a71ebee8": "2be645b84316a4bd1cddac53ad9f2fef",
".git/objects/fb/67cc5e46c945e1853b07da6244a6ce608bb667": "abd896b2ee0fcb190072dc49315aa78d",
".git/objects/fe/0ca48808f7a581b04df98d445ec8a221b7d3aa": "9cc1481695ee189b116360e51cf23fd8",
".git/objects/fe/31834420c6429c9ca49eeb5b8b8a7eb36235ee": "4cf936273f5c6c34f81f80d41e4e9e56",
".git/objects/pack/pack-456affaa6330ee45900c65b1ca89d6dcc3cf8a17.idx": "14e73a33fbb44c15f7575094764ef6b2",
".git/objects/pack/pack-456affaa6330ee45900c65b1ca89d6dcc3cf8a17.pack": "e132994bdf09b36591f459cedfca2056",
".git/ORIG_HEAD": "4545cdd3a86ef7ab10c5c4f967b6912b",
".git/packed-refs": "3d091dcb25a130783130bbc0f29972c6",
".git/refs/heads/main": "4545cdd3a86ef7ab10c5c4f967b6912b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "4545cdd3a86ef7ab10c5c4f967b6912b",
"assets/AssetManifest.json": "916da3e31756dbfb737425847f567c8d",
"assets/assets/bg/bg1.jpg": "cca6d1807f0fffd35f432e58a89e220e",
"assets/assets/logo/logo.png": "4a8b0cb56e5435eaf72948e036c3c297",
"assets/assets/logo/logo2.png": "3df4c8243ea48df9da12e5d17aac7c2d",
"assets/assets/logo/logo3.png": "22b69a06c2a527a657be69716647ffef",
"assets/assets/logo/SCC.png": "570b57ed3f14a385187b45e3a2686d5a",
"assets/assets/logo/SCC1.png": "413cd0eb9c7ce0eda3bf0f4692211838",
"assets/assets/logo/SCC2.png": "9499a4f81abb5971ad1296b6b97d03e4",
"assets/bg/bg1.jpg": "cca6d1807f0fffd35f432e58a89e220e",
"assets/FontManifest.json": "dc6099ca78be95c01bdb2cbf7ee731f0",
"assets/fonts/BlackOpsOne-Regular.ttf": "d81ce5697cdf4e12ea16988e94e0e899",
"assets/fonts/KdamThmorPro-Regular.ttf": "7f30542a7d396654b40db106fcf9acf9",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/NotoKufiArabic-Bold.ttf": "602dea4209bbe50fa2e001433e557dc4",
"assets/fonts/NotoKufiArabic-Regular.ttf": "079940ca1259e80e0639c922b3c31994",
"assets/logo/logo.png": "4a8b0cb56e5435eaf72948e036c3c297",
"assets/logo/logo2.png": "3df4c8243ea48df9da12e5d17aac7c2d",
"assets/logo/logo3.png": "22b69a06c2a527a657be69716647ffef",
"assets/logo/SCC.png": "570b57ed3f14a385187b45e3a2686d5a",
"assets/logo/SCC1.png": "413cd0eb9c7ce0eda3bf0f4692211838",
"assets/logo/SCC2.png": "9499a4f81abb5971ad1296b6b97d03e4",
"assets/NOTICES": "61a7888909ae49c7f8c876956f6c0609",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "b79e094bd07fb7bf00bcef95be2c60f6",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4a5b3f9833f80c5d86f0ca0f340fc455",
"/": "4a5b3f9833f80c5d86f0ca0f340fc455",
"main.dart.js": "e3a87c0d01ef791d256a24963a07c2f1",
"manifest.json": "b4d8a9bdead167a891cbfcbed6111076",
"version.json": "2fae176bc9ce8da62c0ee16fab465d6e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
