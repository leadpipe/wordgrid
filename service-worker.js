if(!self.define){let e,l={};const r=(r,i)=>(r=new URL(r+".js",i).href,l[r]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=l,document.head.appendChild(e)}else e=r,importScripts(r),l()})).then((()=>{let e=l[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(l[f])return;let o={};const u=e=>r(e,f),c={module:{uri:f},exports:o,require:u};l[f]=Promise.all(i.map((e=>c[e]||u(e)))).then((e=>(n(...e),o)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"03568dfaabfa694e7a08.woff2",revision:null},{url:"39eefd9621a880a488de.woff2",revision:null},{url:"3e67f529632a6f1a3090.module.wasm",revision:null},{url:"4b3185cc3e5c87255c6a.woff2",revision:null},{url:"6aae076bfa912126deab.module.wasm",revision:null},{url:"723.bundle.js",revision:"0c2e744209c34b2308f3560863df2009"},{url:"723.bundle.js.LICENSE.txt",revision:"c9ae65c215fbf97b96bce384781c89ea"},{url:"726.bundle.js",revision:"3fa185d63080299b1ed6b9e60078943f"},{url:"83da9165dc6389b53836.woff",revision:null},{url:"88899cc48af9534ab3fb.woff",revision:null},{url:"958.bundle.js",revision:"9b299f76dbcd72988c2995f54a6e604d"},{url:"975.bundle.js",revision:"8b5e4a360c61d0ea2b114bf374e56b1a"},{url:"bundle.js",revision:"a3e57e40da54ebeea197dbc55c9c5016"},{url:"e34dc6c285e600012acb.woff",revision:null},{url:"f3089560c7061a0363f4.woff",revision:null},{url:"fbec73474c1c92fba7af.woff2",revision:null},{url:"index.html",revision:"c91e2e594350a2063cae094bcde8933d"},{url:"lpwg-256.png",revision:"57c785912efd38a6f45908969be19f50"},{url:"lpwg-512-maskable.png",revision:"134da9b02f46f52d88360069762eefcd"},{url:"lpwg-512.png",revision:"ff445df42983cc9c3455e2aeddc7c421"},{url:"wordgrid.webmanifest",revision:"806e46dc9dfc43f8108ef1489a5f416c"},{url:"words-v1.txt",revision:null}],{})}));
