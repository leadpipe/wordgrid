if(!self.define){let e,l={};const f=(f,r)=>(f=new URL(f+".js",r).href,l[f]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=f,e.onload=l,document.head.appendChild(e)}else e=f,importScripts(f),l()})).then((()=>{let e=l[f];if(!e)throw new Error(`Module ${f} didn’t register its module`);return e})));self.define=(r,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(l[n])return;let d={};const o=e=>f(e,n),u={module:{uri:n},exports:d,require:o};l[n]=Promise.all(r.map((e=>u[e]||o(e)))).then((e=>(i(...e),d)))}}define(["./workbox-1f84e78b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"03568dfaabfa694e7a08.woff2",revision:null},{url:"0c35d18bf06992036b69.woff2",revision:null},{url:"2e9321c277ffa1c03872.module.wasm",revision:null},{url:"39eefd9621a880a488de.woff2",revision:null},{url:"53d7b7122f00a0ca2a35.woff2",revision:null},{url:"558.bundle.js",revision:"79b0ecdee231b69786df2094caa2d2c9"},{url:"68d14b8a66db1db3d189.woff2",revision:null},{url:"710.bundle.js",revision:"d11990d748b4ee9d2e76a4e965006a2a"},{url:"717fc72c75c07806e9bf.woff2",revision:null},{url:"728.bundle.js",revision:"ddc68586e60828efbd95264955957336"},{url:"7ef2a66a9fd65c2f527c.woff2",revision:null},{url:"803.bundle.js",revision:"a13a0b26b0b39efb7ffd08a16304c716"},{url:"803.bundle.js.LICENSE.txt",revision:"e24f71cc322735ecbbd644b5decd2a72"},{url:"a5d1c6111c2b9d5021e6.woff2",revision:null},{url:"b5bd8b823b9410bebb5f.module.wasm",revision:null},{url:"bc009f4b45283f5dc1f8.woff2",revision:null},{url:"bundle.js",revision:"0b3d7c613027b0ff1a489ea7775179a3"},{url:"d0099dced32e7a5c5beb.woff2",revision:null},{url:"d60020c5c158e8db9aea.woff2",revision:null},{url:"f94c9cc8688a3f4cd511.woff2",revision:null},{url:"fcb9f2cd6facf97a501e.woff2",revision:null},{url:"index.html",revision:"bd5785a10edc8f1a8c06caca5eefeb24"},{url:"lpwg-256.png",revision:"57c785912efd38a6f45908969be19f50"},{url:"lpwg-512-maskable.png",revision:"134da9b02f46f52d88360069762eefcd"},{url:"lpwg-512.png",revision:"ff445df42983cc9c3455e2aeddc7c421"},{url:"wordgrid.webmanifest",revision:"7d1f5124a30a29a2aef122ba7111c30f"},{url:"words-v1.txt",revision:null}],{})}));
