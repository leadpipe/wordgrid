(()=>{var e,n,r,t,o,i,s,c,d,u,a,f,p,_,b={398:(e,n,r)=>{const t=r.e(958).then(r.bind(r,958)).catch((e=>console.error("Error importing `words-worker.ts`:",e)));self.onmessage=async e=>{const{handleToWorkerMessage:n}=await t;n(self,e.data)}}},l={};function g(e){var n=l[e];if(void 0!==n)return n.exports;var r=l[e]={id:e,loaded:!1,exports:{}};return b[e](r,r.exports,g),r.loaded=!0,r.exports}g.m=b,g.c=l,g.d=(e,n)=>{for(var r in n)g.o(n,r)&&!g.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},g.f={},g.e=e=>Promise.all(Object.keys(g.f).reduce(((n,r)=>(g.f[r](e,n),n)),[])),g.u=e=>e+".bundle.js",g.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),g.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),g.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},g.p="",(()=>{var e={975:1};g.f.i=(n,r)=>{e[n]||importScripts(g.p+g.u(n))};var n=self.webpackChunkleadpipe_wordgrid=self.webpackChunkleadpipe_wordgrid||[],r=n.push.bind(n);n.push=n=>{var[t,o,i]=n;for(var s in o)g.o(o,s)&&(g.m[s]=o[s]);for(i&&i(g);t.length;)e[t.pop()]=1;r(n)}})(),f={},p={166:function(){return{"./leadpipe_wordgrid_bg.js":{__wbindgen_object_drop_ref:function(n){return void 0===e&&(e=g.c[513].exports),e.ug(n)},__wbindgen_error_new:function(e,r){return void 0===n&&(n=g.c[513].exports),n.hd(e,r)},__wbindgen_string_new:function(e,n){return void 0===r&&(r=g.c[513].exports),r.h4(e,n)},__wbindgen_object_clone_ref:function(e){return void 0===t&&(t=g.c[513].exports),t.m_(e)},__wbg_set_20cbc34131e76824:function(e,n,r){return void 0===o&&(o=g.c[513].exports),o.Wl(e,n,r)},__wbindgen_is_string:function(e){return void 0===i&&(i=g.c[513].exports),i.eY(e)},__wbg_new_268f7b7dd3430798:function(){return void 0===s&&(s=g.c[513].exports),s.Ad()},__wbg_new_0b9bfdd97583284e:function(){return void 0===c&&(c=g.c[513].exports),c.uB()},__wbg_set_933729cf5b66ac11:function(e,n,r){return void 0===d&&(d=g.c[513].exports),d.EW(e,n,r)},__wbindgen_debug_string:function(e,n){return void 0===u&&(u=g.c[513].exports),u.fY(e,n)},__wbindgen_throw:function(e,n){return void 0===a&&(a=g.c[513].exports),a.Or(e,n)}}}}},_={958:[166]},g.w={},g.f.wasm=function(e,n){(_[e]||[]).forEach((function(r,t){var o=f[r];if(o)n.push(o);else{var i,s=p[r](),c=fetch(g.p+""+{958:{166:"89794d09bb8922cca671"}}[e][r]+".module.wasm");i=s&&"function"==typeof s.then&&"function"==typeof WebAssembly.compileStreaming?Promise.all([WebAssembly.compileStreaming(c),s]).then((function(e){return WebAssembly.instantiate(e[0],e[1])})):"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(c,s):c.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,s)})),n.push(f[r]=i.then((function(e){return g.w[r]=(e.instance||e).exports})))}}))},g(398)})();