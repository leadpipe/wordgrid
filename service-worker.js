if(!self.define){let e,r={};const i=(i,l)=>(i=new URL(i+".js",l).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,n)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(r[f])return;let d={};const o=e=>i(e,f),s={module:{uri:f},exports:d,require:o};r[f]=Promise.all(l.map((e=>s[e]||o(e)))).then((e=>(n(...e),d)))}}define(["./workbox-0858eadd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"03568dfaabfa694e7a08.woff2",revision:null},{url:"0c35d18bf06992036b69.woff2",revision:null},{url:"0fc3f077b168beae55e9.module.wasm",revision:null},{url:"39eefd9621a880a488de.woff2",revision:null},{url:"808.bundle.js",revision:"9cb70315357b5739086a8efdb95dff7e"},{url:"859.bundle.js",revision:"817b411b930d2708b24a359eb9cc8115"},{url:"97.bundle.js",revision:"4034c3e3ce37216f6f400d74610f71ae"},{url:"97.bundle.js.LICENSE.txt",revision:"e24f71cc322735ecbbd644b5decd2a72"},{url:"975.bundle.js",revision:"f7c0bc4788b0d9e6920fbb909876ac32"},{url:"a29a8ce2b639925b7e73.module.wasm",revision:null},{url:"bundle.js",revision:"7c6dab14f30dd709431d989b4e0f44cd"},{url:"f94c9cc8688a3f4cd511.woff2",revision:null},{url:"index.html",revision:"c8be3c2d6e723130f44282f35820f3bc"},{url:"lpwg-256.png",revision:"57c785912efd38a6f45908969be19f50"},{url:"lpwg-512-maskable.png",revision:"134da9b02f46f52d88360069762eefcd"},{url:"lpwg-512.png",revision:"ff445df42983cc9c3455e2aeddc7c421"},{url:"wordgrid.webmanifest",revision:"806e46dc9dfc43f8108ef1489a5f416c"},{url:"words-v1.txt",revision:null}],{})}));
