if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let a={};const f=e=>d(e,c),b={module:{uri:c},exports:a,require:f};i[c]=Promise.all(r.map((e=>b[e]||f(e)))).then((e=>(s(...e),a)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/01/18/REDIS主从复制/index.html",revision:"15b5a15993945c2d4baa5f33d778cff6"},{url:"2022/01/23/REDIS持久化/index.html",revision:"870948656f9c9adaa20eed6bcd08ad0e"},{url:"2022/01/23/微服务/index.html",revision:"a643c86b8c791be696db17592b85fdcb"},{url:"about/index.html",revision:"bff2cfc2815329e50531330fd8d18287"},{url:"archives/2022/01/index.html",revision:"b88930eb5790f49ce22fe2b6283d2a41"},{url:"archives/2022/index.html",revision:"32d04747552717030ce3f48e33ea56f1"},{url:"archives/index.html",revision:"fb4c6c586085a0254cf6ae4c57def534"},{url:"categories/index.html",revision:"38ca4221bbd5ee0c4e10faf86d277207"},{url:"comments/index.html",revision:"d93942e2abef2ffb4d868753b35e423c"},{url:"css/copyright.css",revision:"cc1551030b56144155baf0ec4a1bf516"},{url:"css/custom.css",revision:"9124a5c9765a5d554c5b63b6c32cd552"},{url:"css/index.css",revision:"1f0cc1c430d28a8cf62617dc1daee0d4"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"25f581824005205bb7dd4124e471c2df"},{url:"img/bg2.jpg",revision:"593a9a3769b51fb9223f3cc057f8b7e5"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/golang_tag.jpg",revision:"abef6dd90cc4e666390dc3b6e2865d57"},{url:"img/head.jpg",revision:"5ef2ebf370fbb53b2b7e404e64ab1478"},{url:"img/Microservices_tag.jpg",revision:"8360391e192741dc6f300ad7f505b94f"},{url:"img/redis/redis_tag.jpg",revision:"a1fabfe4d817dd910c0b00882bb81af3"},{url:"img/redis/redis1.jpg",revision:"bc9611ad986d9984630edc4db5d22632"},{url:"img/redis/redis10.jpg",revision:"6dd317b22a92941f89fea8a7536307dc"},{url:"img/redis/redis11.jpg",revision:"7ea5ec4323985d2442bf5158811a81da"},{url:"img/redis/redis12.jpg",revision:"f9ebe0192acd708cd63fbfdb6dc1126c"},{url:"img/redis/redis13.jpg",revision:"1007a56c0412f541b8ffce4ddad457eb"},{url:"img/redis/redis14.jpg",revision:"8fd83aecfe6d65fdd69062df3bf798e3"},{url:"img/redis/redis15.jpg",revision:"19c05f1618e20cc3062816d265d1e504"},{url:"img/redis/redis16.jpg",revision:"bd476e086643014a9ddaaf27c957cd97"},{url:"img/redis/redis17.jpg",revision:"f7d5c328e97c319735446286b2f004ae"},{url:"img/redis/redis18.jpg",revision:"7c11172514ba1cc171c2a44fee489af8"},{url:"img/redis/redis19.jpg",revision:"1b344dc0943dddb6cc6bf9135bbecd75"},{url:"img/redis/redis2.jpg",revision:"ab176d76b5357ac715d700de56409d1a"},{url:"img/redis/redis20.jpg",revision:"4afdaa5a38ae01f4901a679c25d7679d"},{url:"img/redis/redis21.jpg",revision:"260f2c0d334c3c83959a0fe09a55612b"},{url:"img/redis/redis22.jpg",revision:"0023ff9726394e22a9f51e2457b36d03"},{url:"img/redis/redis3.jpg",revision:"1d12903cb0a4e8a3833494eb039b4fc3"},{url:"img/redis/redis4.webp",revision:"9655c8333d7a2e8cb17e88bcec038d50"},{url:"img/redis/redis5.jpg",revision:"80439314c5c8e5e87872d29bba74a7eb"},{url:"img/redis/redis6.webp",revision:"98e8c2b46018082c8b8085625e1aa403"},{url:"img/redis/redis7.jpg",revision:"0071c1a426d0eaa9019fb007d7b4a615"},{url:"img/redis/redis8.jpg",revision:"94c2d52184c67d05ab277304feb50103"},{url:"img/redis/redis9.jpg",revision:"a5a5c6e7eec58509a8e76e3e103a9f96"},{url:"index.html",revision:"781dfd2407662e152f92104bb6feaf45"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"link/index.html",revision:"fff465b3f8527d8f1bf6591adad5a9e1"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"001aa117e92aa83f6c6ae2c43cfb80d1"},{url:"live2d-widget/demo/demo.html",revision:"180275f4ed193ab8a4713040b0a649c6"},{url:"live2d-widget/demo/login.html",revision:"5bcdd7f2471429e8dac7e866aab2b94b"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.html",revision:"4043e88982a0fe93478345b7d443c489"},{url:"live2d-widget/waifu-tips.js",revision:"e01c75f70a9465389471f638b1356bf8"},{url:"live2d-widget/waifu.css",revision:"fac85747b688d60213723b9becccf335"},{url:"tags/go进阶/index.html",revision:"d71c5c43f5c7c93ac3571e90f2a35479"},{url:"tags/index.html",revision:"162046d292940759431ff7a3006a817b"},{url:"tags/redis/index.html",revision:"4a902be86dd41f5304a188d785f585d3"},{url:"tags/微服务/index.html",revision:"f526438fd768d9457a59985878a7c095"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
