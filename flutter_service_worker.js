'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8b49fb699148141c63a2fbad8f2a53d5",
"assets/AssetManifest.bin.json": "3328bf536c5ed7c48ba3c782cacccd0b",
"assets/AssetManifest.json": "7b73989b8c59a3397ce5903d234a25c3",
"assets/assets/fonts/Tahoma.ttf": "f2e23885f804603feafbea12f793dee3",
"assets/assets/images/clippy.png": "10acd893aae09a7606b5114e465214fb",
"assets/assets/images/college.jpg": "94f5f0f0aa6eab38c024b02199d8f352",
"assets/assets/images/cross.png": "9d14a95a502b4de5dc00dad0d8009689",
"assets/assets/images/folder_icon.png": "1d15a602b17973eda236e620fdcf4a1d",
"assets/assets/images/internet_explorer.png": "6e0725ea07bcfe040bb6b9b6f467118b",
"assets/assets/images/jr_college.jpeg": "84bd84bda3d66b22f48e9fc456330cc6",
"assets/assets/images/maximize.png": "ce94c597400633b6e441e37f38f464db",
"assets/assets/images/minimize.png": "8eb950abde3ff55e2148d1ae6b86ffd2",
"assets/assets/images/my_computer_icon.png": "f4c9a1d711fe4bd022e0a20f47817cc7",
"assets/assets/images/school.jpeg": "cde87c1cdc6d1bc4742a9d07eb619250",
"assets/assets/images/shutdown.png": "18ad4a296b08a3eda4b893f988ea87b4",
"assets/assets/images/skills/android.png": "6ef96b1056cafc0126442c1a1c60def0",
"assets/assets/images/skills/apple.png": "f6386f5fa082da3aacc41241feac5e83",
"assets/assets/images/skills/css.png": "989b5a017ae2ea93c72fb2fa83e069a0",
"assets/assets/images/skills/git.png": "e6c777730ffc13eaed9e5db005b70170",
"assets/assets/images/skills/github.png": "076a021cf0773b5eeb44927c26b3a2b9",
"assets/assets/images/skills/html.png": "ba888c414669a8f2d63bdb9be519a676",
"assets/assets/images/skills/mysql.png": "b6f29586b4dc32e8b48399e62e9e3a7e",
"assets/assets/images/skills/swift.png": "a49152a9d160e27354ca98b3ded29cbd",
"assets/assets/images/start.png": "4a1a685f4858c282ae50c56878100647",
"assets/assets/images/start_icon.png": "0996210b53bfa979264d9776ae932d2b",
"assets/assets/images/txt_icon.png": "fbecf4de55cc73afb0074d908b71b9c0",
"assets/assets/images/windows_bg.webp": "bfa1d2ed3e4087277cb096b2afde26e8",
"assets/assets/images/windows_loading.gif": "fdc3afe632cbdee6b7d68e1c8c2958ee",
"assets/assets/videos/windows_loading.mp4": "9f2eeca52d75ed1d3e987208cbd4dc32",
"assets/FontManifest.json": "beb45102c5838f96976b14e213a78316",
"assets/fonts/MaterialIcons-Regular.otf": "a8a52c99d0a408a1340201bfac7cc394",
"assets/NOTICES": "b0c74a21468e246c9749f4f477ed7513",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "af7e053a18458874875c05e5922016df",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "80b7f3c2a7bb29c643595523dbc0fc2e",
"/": "80b7f3c2a7bb29c643595523dbc0fc2e",
"main.dart.js": "467d8a53c2711cbdb7029abc90f2efc2",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"version.json": "0325640b78b9f97959290dc5ebb8b3ed"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
