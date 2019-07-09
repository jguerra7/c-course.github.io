/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "592ebb5b8d32aab58c86099bf2a5c832"
  },
  {
    "url": "about/index.html",
    "revision": "d79ded009fcb6325d7bb567f289bc276"
  },
  {
    "url": "assets/css/0.styles.5419c221.css",
    "revision": "85ff96ef47d67079477361ba620a3e67"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cbec5df7.js",
    "revision": "95dc8b286f2a602d356ad08dd9da4674"
  },
  {
    "url": "assets/js/11.fc67231a.js",
    "revision": "a54f2d3ffc56be0709a8175a0d3e9276"
  },
  {
    "url": "assets/js/12.d0966dbe.js",
    "revision": "0966e18386bf6cf257e91ebb8f870e4b"
  },
  {
    "url": "assets/js/13.74de51dd.js",
    "revision": "69bd0fd2647d2af38287f011e64a0119"
  },
  {
    "url": "assets/js/14.8c6045cf.js",
    "revision": "c702b9bda11fdf7c85fef158bde9eed8"
  },
  {
    "url": "assets/js/15.e308f660.js",
    "revision": "6935120a02f393da6b7205b680426bd8"
  },
  {
    "url": "assets/js/16.cf805f19.js",
    "revision": "1288e5bc85a2ad8f092662d6566eb9d6"
  },
  {
    "url": "assets/js/17.99eb9f46.js",
    "revision": "761094022ed31ce0b675b64067ff4fd9"
  },
  {
    "url": "assets/js/18.dac473e3.js",
    "revision": "e7f8e70abb184213cb64c5363336c806"
  },
  {
    "url": "assets/js/19.d49109b7.js",
    "revision": "6f3f8f73f6b0fb74cfcb88d5febc2118"
  },
  {
    "url": "assets/js/20.810f9fa2.js",
    "revision": "79c30e179da31b05b9ea1b76b2f53566"
  },
  {
    "url": "assets/js/3.498838e4.js",
    "revision": "b623397489298da7c5f711558cf4154e"
  },
  {
    "url": "assets/js/4.d71eaa82.js",
    "revision": "eabede6ba076e825d3f71b5e34630f6c"
  },
  {
    "url": "assets/js/5.35cf8ca2.js",
    "revision": "d17d381f1c11ad23c9728ae44dc053a7"
  },
  {
    "url": "assets/js/6.c542c250.js",
    "revision": "f7d91d420f15f42e127b88c49d393d66"
  },
  {
    "url": "assets/js/7.c73a3557.js",
    "revision": "31833a87d8cdd22bd6352ac1e466122a"
  },
  {
    "url": "assets/js/8.1ca68717.js",
    "revision": "c2910e2f2a861fc115bd89ab06cd7d93"
  },
  {
    "url": "assets/js/9.c34f0ff1.js",
    "revision": "b9abb0979a85418b51b5956368958fd1"
  },
  {
    "url": "assets/js/app.6085cb73.js",
    "revision": "77bf45b0212ba5df6e3a58a8f1eb6d61"
  },
  {
    "url": "assets/js/vendors~docsearch.079e410d.js",
    "revision": "66f3012a696d211de9b3ab79205c31e8"
  },
  {
    "url": "icons/icon192.png",
    "revision": "98a726f23537a190793ab9c53c824422"
  },
  {
    "url": "icons/icon512.png",
    "revision": "9f34c069264a47cff199afaedc0712b3"
  },
  {
    "url": "images/logo.png",
    "revision": "5fcc7f0f6f9d8d978fb4acf16878ca1e"
  },
  {
    "url": "index.html",
    "revision": "43516170b14f5f113bc2a8ebd07bceb6"
  },
  {
    "url": "practice/01/index.html",
    "revision": "44cb693d7b379a070ee79427706737a8"
  },
  {
    "url": "practice/02/index.html",
    "revision": "c70c8315bba95630c10bdb25444b410a"
  },
  {
    "url": "practice/03/index.html",
    "revision": "5605f03d6f26578371d178c2d63c1a2c"
  },
  {
    "url": "practice/04/index.html",
    "revision": "b655d0f5923dea0cd712a6a7a0e608b6"
  },
  {
    "url": "practice/05/index.html",
    "revision": "ee22d8f39b5e2bfc2801e15ffc000c20"
  },
  {
    "url": "practice/06/index.html",
    "revision": "a5972638a83cff230a9a58b03c6c8b26"
  },
  {
    "url": "practice/07/index.html",
    "revision": "7e0cabd7a9746b7c13cb2d918945c372"
  },
  {
    "url": "practice/08/index.html",
    "revision": "26c7c1d9ff8bc252336cfd9ff67ee37d"
  },
  {
    "url": "practice/09/index.html",
    "revision": "2e5ddfab1cfdb86f59a584861bcd8461"
  },
  {
    "url": "practice/10/index.html",
    "revision": "7b2d58ca116ba73d90aab8755ee7f51b"
  },
  {
    "url": "practice/index.html",
    "revision": "f3d168bf6b256066e103c9f61e0b626b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
