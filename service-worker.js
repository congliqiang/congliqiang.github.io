if(!self.define){let e,i={};const d=(d,s)=>(d=new URL(d+".js",s).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const n=e=>d(e,r),l={module:{uri:r},exports:a,require:n};i[r]=Promise.all(s.map((e=>l[e]||n(e)))).then((e=>(c(...e),a)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/01/18/REDIS主从复制/index.html",revision:"c0002358563018e9d8a8a583018cfa09"},{url:"about/index.html",revision:"01ea6a89ca2c4464c7f5eba190efdcb7"},{url:"archives/2022/01/index.html",revision:"635a5a64c75e050e79ec937803d980d6"},{url:"archives/2022/index.html",revision:"11e9937b2b81bdfcdf70a84cca1eeaf6"},{url:"archives/index.html",revision:"f4a7271c2d8c5ccfe090f0028291f78d"},{url:"categories/index.html",revision:"8c9efb5d331ca7dbdd4a3af2f21425fd"},{url:"comments/index.html",revision:"dabe195ed3088f81769b1084258e1bcd"},{url:"css/copyright.css",revision:"cc1551030b56144155baf0ec4a1bf516"},{url:"css/custom.css",revision:"9124a5c9765a5d554c5b63b6c32cd552"},{url:"css/index.css",revision:"ead848570132cfe4abde59c86a56cecf"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/head.jpg",revision:"5ef2ebf370fbb53b2b7e404e64ab1478"},{url:"img/redis1.jpg",revision:"bc9611ad986d9984630edc4db5d22632"},{url:"img/redis2.jpg",revision:"ab176d76b5357ac715d700de56409d1a"},{url:"img/redis3.jpg",revision:"1d12903cb0a4e8a3833494eb039b4fc3"},{url:"img/redis4.webp",revision:"9655c8333d7a2e8cb17e88bcec038d50"},{url:"img/redis5.jpg",revision:"80439314c5c8e5e87872d29bba74a7eb"},{url:"img/redis6.webp",revision:"98e8c2b46018082c8b8085625e1aa403"},{url:"index.html",revision:"a871e63018559b76aa0025821f6fb3a4"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"link/index.html",revision:"34d5441405b14c675b64e3152edc2af7"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"001aa117e92aa83f6c6ae2c43cfb80d1"},{url:"live2d-widget/demo/demo.html",revision:"180275f4ed193ab8a4713040b0a649c6"},{url:"live2d-widget/demo/login.html",revision:"5bcdd7f2471429e8dac7e866aab2b94b"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.html",revision:"4043e88982a0fe93478345b7d443c489"},{url:"live2d-widget/waifu-tips.js",revision:"e01c75f70a9465389471f638b1356bf8"},{url:"live2d-widget/waifu.css",revision:"fac85747b688d60213723b9becccf335"},{url:"tags/index.html",revision:"7850e33d27ac3aa9154f32ec98ccaae9"},{url:"tags/redis/index.html",revision:"349cb814ef4ee0ab0fa001be3a1e0d08"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
