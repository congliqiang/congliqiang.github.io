if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const n=e=>d(e,r),l={module:{uri:r},exports:a,require:n};i[r]=Promise.all(c.map((e=>l[e]||n(e)))).then((e=>(s(...e),a)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/01/18/REDIS主从复制/index.html",revision:"0eeef64c5fc5dc835e90237c511e2da2"},{url:"about/index.html",revision:"11b6cd37d0f8e2dde816a6ac8208ed32"},{url:"archives/2022/01/index.html",revision:"a8fa01310e1a0f2c32f8f3c623c18068"},{url:"archives/2022/index.html",revision:"baac0ab7ad998eb5a3db885def39c971"},{url:"archives/index.html",revision:"115db485714aad0a794b8931e21d6c40"},{url:"categories/index.html",revision:"7d8493687da93f7bbb0c7e6ed1ad79ce"},{url:"comments/index.html",revision:"d539b03293f4940f325d32c228b9c4e0"},{url:"css/copyright.css",revision:"cc1551030b56144155baf0ec4a1bf516"},{url:"css/custom.css",revision:"9124a5c9765a5d554c5b63b6c32cd552"},{url:"css/index.css",revision:"ead848570132cfe4abde59c86a56cecf"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/redis1.png",revision:"4d35598905fca7fe60e78447134d90ba"},{url:"img/redis2.png",revision:"15d687af2926483271a3ea807dfc7c6c"},{url:"index.html",revision:"85885520c53b239057d7172511902832"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"link/index.html",revision:"8d240451567f79ed98640ad8fcbd9fad"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"001aa117e92aa83f6c6ae2c43cfb80d1"},{url:"live2d-widget/demo/demo.html",revision:"180275f4ed193ab8a4713040b0a649c6"},{url:"live2d-widget/demo/login.html",revision:"5bcdd7f2471429e8dac7e866aab2b94b"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.html",revision:"4043e88982a0fe93478345b7d443c489"},{url:"live2d-widget/waifu-tips.js",revision:"e01c75f70a9465389471f638b1356bf8"},{url:"live2d-widget/waifu.css",revision:"fac85747b688d60213723b9becccf335"},{url:"tags/index.html",revision:"134f41cc7ca10e8808437164d193c3bc"},{url:"tags/redis/index.html",revision:"9d5a4311e755642c14aabfcc60796316"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
