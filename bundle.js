(()=>{var e,r,t,n,o,i,a,d,s,c,u,l,f,p,b,_,g={463:(e,r,t)=>{Promise.all([t.e(602),t.e(74)]).then(t.bind(t,74)).catch((e=>console.error("Error importing `index.ts`:",e))),"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("service-worker.js").catch((e=>{console.log("SW registration failed: ",e)}))}))}},m={};function v(e){var r=m[e];if(void 0!==r)return r.exports;var t=m[e]={id:e,loaded:!1,exports:{}};return g[e](t,t.exports,v),t.loaded=!0,t.exports}v.m=g,v.c=m,v.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return v.d(r,{a:r}),r},v.d=(e,r)=>{for(var t in r)v.o(r,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},v.f={},v.e=e=>Promise.all(Object.keys(v.f).reduce(((r,t)=>(v.f[t](e,r),r)),[])),v.u=e=>e+".bundle.js",v.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),v.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="leadpipe-wordgrid:",v.l=(t,n,o,i)=>{if(e[t])e[t].push(n);else{var a,d;if(void 0!==o)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var u=s[c];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==r+o){a=u;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,v.nc&&a.setAttribute("nonce",v.nc),a.setAttribute("data-webpack",r+o),a.src=t),e[t]=[n];var l=(r,n)=>{a.onerror=a.onload=null,clearTimeout(f);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},f=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),d&&document.head.appendChild(a)}},v.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},v.p="",(()=>{v.b=document.baseURI||self.location.href;var e={179:0};v.f.j=(r,t)=>{var n=v.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var i=v.p+v.u(r),a=new Error;v.l(i,(t=>{if(v.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[i,a,d]=t,s=0;if(i.some((r=>0!==e[r]))){for(n in a)v.o(a,n)&&(v.m[n]=a[n]);d&&d(v)}for(r&&r(t);s<i.length;s++)o=i[s],v.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkleadpipe_wordgrid=self.webpackChunkleadpipe_wordgrid||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),v.nc=void 0,p={},b={166:function(){return{"./leadpipe_wordgrid_bg.js":{__wbindgen_object_drop_ref:function(e){return void 0===t&&(t=v.c[513].exports),t.ug(e)},__wbindgen_error_new:function(e,r){return void 0===n&&(n=v.c[513].exports),n.hd(e,r)},__wbindgen_string_new:function(e,r){return void 0===o&&(o=v.c[513].exports),o.h4(e,r)},__wbindgen_object_clone_ref:function(e){return void 0===i&&(i=v.c[513].exports),i.m_(e)},__wbg_set_20cbc34131e76824:function(e,r,t){return void 0===a&&(a=v.c[513].exports),a.Wl(e,r,t)},__wbindgen_is_string:function(e){return void 0===d&&(d=v.c[513].exports),d.eY(e)},__wbg_new_268f7b7dd3430798:function(){return void 0===s&&(s=v.c[513].exports),s.Ad()},__wbg_new_0b9bfdd97583284e:function(){return void 0===c&&(c=v.c[513].exports),c.uB()},__wbg_set_933729cf5b66ac11:function(e,r,t){return void 0===u&&(u=v.c[513].exports),u.EW(e,r,t)},__wbindgen_debug_string:function(e,r){return void 0===l&&(l=v.c[513].exports),l.fY(e,r)},__wbindgen_throw:function(e,r){return void 0===f&&(f=v.c[513].exports),f.Or(e,r)}}}}},_={602:[166]},v.w={},v.f.wasm=function(e,r){(_[e]||[]).forEach((function(t,n){var o=p[t];if(o)r.push(o);else{var i,a=b[t](),d=fetch(v.p+""+{602:{166:"d19c8387ef9e3c121c01"}}[e][t]+".module.wasm");i=a&&"function"==typeof a.then&&"function"==typeof WebAssembly.compileStreaming?Promise.all([WebAssembly.compileStreaming(d),a]).then((function(e){return WebAssembly.instantiate(e[0],e[1])})):"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(d,a):d.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,a)})),r.push(p[t]=i.then((function(e){return v.w[t]=(e.instance||e).exports})))}}))},v(463)})();