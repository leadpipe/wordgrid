if(!self.define){let e,l={};const r=(r,i)=>(r=new URL(r+".js",i).href,l[r]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=l,document.head.appendChild(e)}else e=r,importScripts(r),l()})).then((()=>{let e=l[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,f)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(l[n])return;let c={};const o=e=>r(e,n),u={module:{uri:n},exports:c,require:o};l[n]=Promise.all(i.map((e=>u[e]||o(e)))).then((e=>(f(...e),c)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"03568dfaabfa694e7a08.woff2",revision:null},{url:"39eefd9621a880a488de.woff2",revision:null},{url:"452.bundle.js",revision:"501481b682ba1c3c2d870be5dc292966"},{url:"452.bundle.js.LICENSE.txt",revision:"c9ae65c215fbf97b96bce384781c89ea"},{url:"4b3185cc3e5c87255c6a.woff2",revision:null},{url:"74.bundle.js",revision:"d57e0fcb827f664f3705ee4010aa0a13"},{url:"83da9165dc6389b53836.woff",revision:null},{url:"88899cc48af9534ab3fb.woff",revision:null},{url:"89794d09bb8922cca671.module.wasm",revision:null},{url:"958.bundle.js",revision:"c49ccf4df738193bc32b291d0c07dfc0"},{url:"975.bundle.js",revision:"81ed82eb081046ff657f607346d0a91c"},{url:"bundle.js",revision:"0887a9623923cdd54a2489c8ac3a5768"},{url:"d19c8387ef9e3c121c01.module.wasm",revision:null},{url:"e34dc6c285e600012acb.woff",revision:null},{url:"f3089560c7061a0363f4.woff",revision:null},{url:"fbec73474c1c92fba7af.woff2",revision:null},{url:"index.html",revision:"eab7faa9de11f49205b375b2d22c06d1"},{url:"lpwg-256.png",revision:"57c785912efd38a6f45908969be19f50"},{url:"lpwg-512-maskable.png",revision:"134da9b02f46f52d88360069762eefcd"},{url:"lpwg-512.png",revision:"ff445df42983cc9c3455e2aeddc7c421"},{url:"wordgrid.webmanifest",revision:"806e46dc9dfc43f8108ef1489a5f416c"},{url:"words-v1.txt",revision:null}],{})}));
