'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "21b64de514d0a9316f6a166be8dfca8d",
".git/config": "4d8b6261c316dbe2acb84d7bc09e7e1f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c7d9fe24e66be1571f918608d9de192a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5faed7dc0ccd773c24aa852f9ea1f4e6",
".git/logs/refs/heads/main": "7483315dd532eed3698c6ffcc698e91a",
".git/logs/refs/remotes/origin/main": "1af965d15edff39f1df045bcaad71d68",
".git/objects/02/387735e9c2c68bb3d32c54dbfb57ed5cfb6c94": "e4fd442e6111e44080ee09edf99ad83d",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/03/8a59521b66890954e25142550a5386b97a23b4": "168b45cedab8be086e2b98238afd761b",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/08/c32a8ac9d9c028b0ed0969a8103c44c82202b8": "54b2676ec9a8216abb808b45ab5e437c",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/14/cc116ec1cd773c3ec8e5d33567f5d2b3fa3d73": "31c18d3e93e57dc4e14dfc8689faa321",
".git/objects/16/829b7e56e4f691cfaa4bf770d83ee0836a6d1e": "398bae814ece149b001102c9081022cf",
".git/objects/1c/7e83f6d7b9fe9db81acdd8bd56bee21b7a9fa1": "b19daca93fc76733f938377ba62d39d7",
".git/objects/1d/e9f1a4b4a2577cd447a4074c11c253c91ef5ab": "76cabff1add0e2c2ffbf1f0bd2e6ea2f",
".git/objects/1f/c354af8f916e3e6dee18ab2828a4f096db6f6f": "82a23359ed00e8aa910af1e21ddbacb3",
".git/objects/23/7127d2ccd9d5699d5d40843e8ce4621a7592f9": "c4e97354216905ab77cd25d5e549207b",
".git/objects/23/bcc853c70d173f1097990b15ffe6a22b5c94bc": "234664534077db2c6e0d1fabeacc7986",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/32/4a5dd8ac29c54d3bc1248600b8bc5e640c74ac": "fe90823138217d2f307dbed5263c5f3f",
".git/objects/36/414919c056918765069370fdb29e7f5d522afd": "388b85336c1c22eb7dc47d4c876f9a14",
".git/objects/3a/1f79cfcadf870372197c0c2963b8be7da86677": "ae2a45f245bd1c60a9825a0fb1cc6b7d",
".git/objects/3d/dca0d7ed9521a1102cb0564f8b98a4f591ecaa": "4ff09bd5c165574efe147b2e8e4e7afa",
".git/objects/47/6c8b6e715795b7f2a4280b591495145baa225c": "d40b98a4deeb1b0634c25373d1281aea",
".git/objects/48/e02db533602d1f41b09a38fca8e65f8f4f32b5": "aa1f6a219bb76b68d26bf8ddc752e1d3",
".git/objects/53/ae2f11f3b2cc7e03ea1c98ba0090baad1f7959": "76f5182a53bbd7970959a24cc67fb6c0",
".git/objects/55/d738e3122dbc350fa5f71e0043ef8ef27d28be": "8ffdbd4f6840379cc40c3a5e492e058c",
".git/objects/60/3997d8e618410b18d353b0346a07410a5876a1": "60a51599733ca3a7642a8245441b12e7",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6f/155daa1b77708e11ab622bdd5b14de68e7b411": "b1bfd8771315507d8c8158e7bc41b27a",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/d46e8df24b3463a54ea725b3ec707b174e1572": "d0e4fd590426ff7d885cc40595d0157e",
".git/objects/77/9fad5fd9303a1c3723c5ea49328b69d9f74ae2": "023d7ec457627ae8e349265702b7a3c1",
".git/objects/7b/bbdb4eb7a9e9cff9685ce9a13014a1db3de58b": "da84312518caf125881a32aee89587e9",
".git/objects/7e/ed88598f91e0972e4377ecb9592becfabc553f": "0ab08e6712d949ade9cebed6d2d71b3f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8d/8f241d5a2d72e45b1aa598956d3aa0828438be": "cabf9e5b5713059b06d5ce5ad33557c7",
".git/objects/8d/a41888f0a55d4cd49998db2154812d1c21dc5e": "2d298df8fcb61b7a19d74734b7d7f0e7",
".git/objects/8e/46578a5330c0788bdf503bba2d5ff2d0fed6cc": "0b85ef76733668f32c587ec5a273e0c2",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/5078b95c26c31bca900be1820a25e7f6fe2e6a": "e7512eb6f23d13b28fdd58ed78fb4c37",
".git/objects/99/b88d31a23655f530beb05f9a0400f847190945": "367836a486cdf84de884674a3672f402",
".git/objects/9c/114484f0c4eccde6489c5c021a404815f68f30": "053ff6e6bcf84227a250d28a04d3757a",
".git/objects/9c/a151044c2ad04855250f895735c247a5900d30": "f32e605ce4aab88e76f22710e0a88631",
".git/objects/9c/dd414afdc7024957da7ba33a8a3fe23c58da3a": "6d4e2234d8f7756c8e23fc8450f52fd4",
".git/objects/a1/77f875682ec50fab4fa2032a22c0842b6638eb": "11c260ebb673bc076a3456bf321568ee",
".git/objects/a5/a4df395e716d9c3c850fd7e2a7a2788240b8ca": "8e2e217b5803309c7415bb08a99f64b2",
".git/objects/aa/d8819efbd6a4988ec0f371e0f1c03f10963f0b": "7577e9db05c50fa0aa01bbb31045d58d",
".git/objects/ac/5bc2a242df3fe2f7a2603185c28835a34c505a": "b8d5ec315e242ac9a81bf96f675bd6fd",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/1b6ac8587aabb4712c0ca8899fda15a8c31567": "d98e383b95a5d392ffe2a0b443f81f01",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5c0ac32de51c18caa05e3b70f91600221a0485": "b203325f4b752f92089b28e597e509a2",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/faee5b18aeabc636647218963853039b6e2597": "537e0a0ce1008162050f7ea71bc80bd2",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/3063e6a71c37524fd91c75d8ea9d3b138f1eaa": "fccfd26e6cf4eaf8b24e6e44d81f1afa",
".git/objects/cd/8d311fc60f725e78f39aad3a5361d009474f1a": "1b78538fce0ea578e0811606d72e62d9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/b90095c6efead2915b6c8f3225673ee5065e8e": "86c328cceb894959b1ba6f4267a36673",
".git/objects/e3/b4391dd852cb4f0fc15cfdce1ee188c8892c9e": "914181741819ffaac319c79742b26b87",
".git/objects/ea/5f964c4bea57063745e16df77b36526528b528": "2e08ce8308d2a44481e9326c960c5cb8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fc/53d9d1f59b78f736251fa15938ca4c894ef045": "f74a81b1c720fe41a639fba88dcf4100",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "6822dab62d05cf23ee9c6891737d2895",
".git/refs/remotes/origin/main": "6822dab62d05cf23ee9c6891737d2895",
"assets/AssetManifest.bin": "d33c996c65fc77e282aeb3fb1de1fba4",
"assets/AssetManifest.bin.json": "9c994735ba69672f4873e3d781230f41",
"assets/AssetManifest.json": "767ecdfa60247aedf2cb68e530185c11",
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
"assets/assets/images/windows_bg.jpg": "ddc6b6f245656773f689f34734409e72",
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
"flutter_bootstrap.js": "7c9134ff3bd1531f9a1118b25de0488e",
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
