if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let a={};const f=e=>d(e,c),b={module:{uri:c},exports:a,require:f};i[c]=Promise.all(r.map((e=>b[e]||f(e)))).then((e=>(s(...e),a)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/01/18/REDIS主从复制/index.html",revision:"1c06646494e16b215cff2a9c77bdbc82"},{url:"2022/01/23/REDIS哨兵机制/index.html",revision:"5819398c948817e6c072f6cef82d1e9a"},{url:"2022/01/23/REDIS持久化/index.html",revision:"d741df00ece15358495f527f0d850d42"},{url:"2022/01/23/微服务/index.html",revision:"b1cf54d1e50211718afe81c0df5aff1d"},{url:"2022/01/24/REDIS内存优化及配置/index.html",revision:"cbf1a23aec2f21fa5e06ce8d517f17b4"},{url:"about/index.html",revision:"7c5253c56477725bf9c858e59c3e8e99"},{url:"archives/2022/01/index.html",revision:"db7e7418d8fa541efc9926a25250f0dc"},{url:"archives/2022/index.html",revision:"9775f40d4a20a24c46f944d1fa5ba91a"},{url:"archives/index.html",revision:"314bd7bbe568336e1fc121588d6f692e"},{url:"categories/index.html",revision:"9e54291d0fbf0d640e6179190068efaf"},{url:"comments/index.html",revision:"57a15be4b8b677c3425d85492773ff67"},{url:"css/copyright.css",revision:"cc1551030b56144155baf0ec4a1bf516"},{url:"css/custom.css",revision:"9124a5c9765a5d554c5b63b6c32cd552"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"1f0cc1c430d28a8cf62617dc1daee0d4"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"25f581824005205bb7dd4124e471c2df"},{url:"img/bg2.jpg",revision:"593a9a3769b51fb9223f3cc057f8b7e5"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/go/go1.jpg",revision:"45785e8f06e1a6c28b3c22ed8b043a34"},{url:"img/go/go2.jpg",revision:"97ce373d0863217a68578bc8f97247a1"},{url:"img/go/go3.jpg",revision:"13086f459fc62a6f7eaeddec0b8285fb"},{url:"img/golang_tag.jpg",revision:"abef6dd90cc4e666390dc3b6e2865d57"},{url:"img/head.jpg",revision:"5ef2ebf370fbb53b2b7e404e64ab1478"},{url:"img/Microservices_tag.jpg",revision:"8360391e192741dc6f300ad7f505b94f"},{url:"img/redis/redis_tag.jpg",revision:"a1fabfe4d817dd910c0b00882bb81af3"},{url:"img/redis/redis1.jpg",revision:"bc9611ad986d9984630edc4db5d22632"},{url:"img/redis/redis10.jpg",revision:"6dd317b22a92941f89fea8a7536307dc"},{url:"img/redis/redis11.jpg",revision:"7ea5ec4323985d2442bf5158811a81da"},{url:"img/redis/redis12.jpg",revision:"f9ebe0192acd708cd63fbfdb6dc1126c"},{url:"img/redis/redis13.jpg",revision:"1007a56c0412f541b8ffce4ddad457eb"},{url:"img/redis/redis14.jpg",revision:"8fd83aecfe6d65fdd69062df3bf798e3"},{url:"img/redis/redis15.jpg",revision:"19c05f1618e20cc3062816d265d1e504"},{url:"img/redis/redis16.jpg",revision:"bd476e086643014a9ddaaf27c957cd97"},{url:"img/redis/redis17.jpg",revision:"f7d5c328e97c319735446286b2f004ae"},{url:"img/redis/redis18.jpg",revision:"7c11172514ba1cc171c2a44fee489af8"},{url:"img/redis/redis19.jpg",revision:"1b344dc0943dddb6cc6bf9135bbecd75"},{url:"img/redis/redis2.jpg",revision:"ab176d76b5357ac715d700de56409d1a"},{url:"img/redis/redis20.jpg",revision:"4afdaa5a38ae01f4901a679c25d7679d"},{url:"img/redis/redis21.jpg",revision:"260f2c0d334c3c83959a0fe09a55612b"},{url:"img/redis/redis22.jpg",revision:"0023ff9726394e22a9f51e2457b36d03"},{url:"img/redis/redis23.jpg",revision:"5809acdc876544326d0f5fc48cd9e130"},{url:"img/redis/redis24.jpg",revision:"0d16500492308e644bfa7537928293ef"},{url:"img/redis/redis25.jpg",revision:"46c55eac379609310e7ba46d128a9a69"},{url:"img/redis/redis26.jpg",revision:"d936baf528660683c070b71d6935513e"},{url:"img/redis/redis27.jpg",revision:"b2354dc19e54ef3d27403a399d878b41"},{url:"img/redis/redis28.jpg",revision:"3ab028a5322962e52fc0dfc1d6742d63"},{url:"img/redis/redis29.jpg",revision:"d418ff7dd76621f52054b0ceac650b59"},{url:"img/redis/redis3.jpg",revision:"1d12903cb0a4e8a3833494eb039b4fc3"},{url:"img/redis/redis30.jpg",revision:"13476eb66ab69c16940f292de8a2f2d3"},{url:"img/redis/redis31.jpg",revision:"451918133c5ec6d4b9b4d863789b9e01"},{url:"img/redis/redis32.jpg",revision:"edaf35ce0a41cbe3e7048b4d1f1432dd"},{url:"img/redis/redis33.jpg",revision:"792bd5fddffa3b887f096277e016c2e0"},{url:"img/redis/redis34.jpg",revision:"cd4c74457d46d32e5089b4bdfbd28b45"},{url:"img/redis/redis35.jpg",revision:"67f7ac80612e948b63657191fa7c8183"},{url:"img/redis/redis36.jpg",revision:"1bf7b107694ee81a70a606180bb6ffc1"},{url:"img/redis/redis37.jpg",revision:"089347dfd9d9969c03b6f01290e858c9"},{url:"img/redis/redis4.webp",revision:"9655c8333d7a2e8cb17e88bcec038d50"},{url:"img/redis/redis5.jpg",revision:"80439314c5c8e5e87872d29bba74a7eb"},{url:"img/redis/redis6.webp",revision:"98e8c2b46018082c8b8085625e1aa403"},{url:"img/redis/redis7.jpg",revision:"0071c1a426d0eaa9019fb007d7b4a615"},{url:"img/redis/redis8.jpg",revision:"94c2d52184c67d05ab277304feb50103"},{url:"img/redis/redis9.jpg",revision:"a5a5c6e7eec58509a8e76e3e103a9f96"},{url:"index.html",revision:"541d8ab7e05be3716be42cfaad041867"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/index.html",revision:"133926b2c2c6f9d79d24f51a76033587"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"001aa117e92aa83f6c6ae2c43cfb80d1"},{url:"live2d-widget/demo/demo.html",revision:"180275f4ed193ab8a4713040b0a649c6"},{url:"live2d-widget/demo/login.html",revision:"5bcdd7f2471429e8dac7e866aab2b94b"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.html",revision:"4043e88982a0fe93478345b7d443c489"},{url:"live2d-widget/waifu-tips.js",revision:"e01c75f70a9465389471f638b1356bf8"},{url:"live2d-widget/waifu.css",revision:"fac85747b688d60213723b9becccf335"},{url:"tags/go进阶/index.html",revision:"1e4f58f2165639214ab61f97ea640c54"},{url:"tags/index.html",revision:"3f649009acca46db78dd1e6b906e2e60"},{url:"tags/redis/index.html",revision:"296daba610d4cb87159a62b942bdff52"},{url:"tags/微服务/index.html",revision:"40c67ef7310c58c50053fdf7a5b6f32c"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
