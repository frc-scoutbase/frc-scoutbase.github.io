importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

workbox.routing.registerRoute(
    new RegExp('https://www.gstatic.com/firebasejs/5.4.0/firebase.js'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://fonts.googleapis.com/icon?family=Material+Icons'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://scoutbase-testing.firebaseio.com'),
    workbox.strategies.networkFirst()
);

workbox.precaching.precacheAndRoute([
  {
    "url": "css/app.a0f4d436.css",
    "revision": "1f981e5365e58741405ef6e45ddccae4"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "9ef7cf5e225343d3036617d62abcda08"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "9bd615b8eb23d32c59ecb94c9cf0bb45"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "e7d9fee61cbbcad502059cc6df820d29"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "64c9221060ce87eae4cc03682aee37ef"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "2d78662c8434be673cadec3f2ada831f"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "a640a921c38b43efd8f27b0f54009ebc"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "bc060c6d0356c3eb6244ca0366a9d174"
  },
  {
    "url": "index.html",
    "revision": "1b06a612c4a7542045f64184759fc1a8"
  },
  {
    "url": "js/app.1a62b9cc.js",
    "revision": "1fc145800cfd2862d28c66b8e47defb4"
  },
  {
    "url": "js/chunk-vendors.1626fbef.js",
    "revision": "26bf9ce61645ccd2c3e16fa474b46181"
  },
  {
    "url": "JSFN.js",
    "revision": "cd524a6274834729ccdbf675260b6a52"
  },
  {
    "url": "Logo.png",
    "revision": "d465563e26c85b94e98404a5644574f2"
  },
  {
    "url": "PowUp.json",
    "revision": "2f844f047f064abe59c91b51d34771f2"
  },
  {
    "url": "SFDK.js",
    "revision": "97a41760a4127a18e476efedc73e9bc7"
  },
  {
    "url": "src-sw.js",
    "revision": "bc90e29ead2dc367f6f16d87a0031ac9"
  },
  {
    "url": "workbox-config.js",
    "revision": "cded27ca0500a1f358cfacf94b3121de"
  }
]);