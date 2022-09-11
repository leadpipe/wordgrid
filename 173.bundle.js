"use strict";(self.webpackChunkleadpipe_wordgrid=self.webpackChunkleadpipe_wordgrid||[]).push([[173],{975:(e,t,i)=>{i.d(t,{Or:()=>w,h4:()=>f,t$:()=>v,tb:()=>m,yG:()=>g});var s=i(401);e=i.hmd(e);let o=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});o.decode();let r=new Uint8Array;function n(){return 0===r.byteLength&&(r=new Uint8Array(s.memory.buffer)),r}function a(e,t){return o.decode(n().subarray(e,e+t))}const d=new Array(32).fill(void 0);d.push(void 0,null,!0,!1);let l=d.length;function h(e){l===d.length&&d.push(d.length+1);const t=l;return l=d[t],d[t]=e,t}let c=0,u=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const p="function"==typeof u.encodeInto?function(e,t){return u.encodeInto(e,t)}:function(e,t){const i=u.encode(e);return t.set(i),{read:e.length,written:i.length}};new Int32Array;const m=Object.freeze({Level1:0,0:"Level1",Level2:1,1:"Level2",Level3:2,2:"Level3",Level4:3,3:"Level4",Level5:4,4:"Level5",Level6:5,5:"Level6",Level7:6,6:"Level7",Level8:7,7:"Level8",Hacker:8,8:"Hacker",Offensive:9,9:"Offensive",Profane:10,10:"Profane"});class g{static __wrap(e){const t=Object.create(g.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();s.__wbg_jsrandom_free(e)}constructor(e){const t=function(e,t,i){if(void 0===i){const i=u.encode(e),s=t(i.length);return n().subarray(s,s+i.length).set(i),c=i.length,s}let s=e.length,o=t(s);const r=n();let a=0;for(;a<s;a++){const t=e.charCodeAt(a);if(t>127)break;r[o+a]=t}if(a!==s){0!==a&&(e=e.slice(a)),o=i(o,s,s=a+3*e.length);const t=n().subarray(o+a,o+s);a+=p(e,t).written}return c=a,o}(e,s.__wbindgen_malloc,s.__wbindgen_realloc),i=c,o=s.jsrandom_new(t,i);return g.__wrap(o)}next(){return s.jsrandom_next(this.ptr)}choice(e){return 0!==s.jsrandom_choice(this.ptr,e)}range(e,t){return s.jsrandom_range(this.ptr,e,t)}normal(e,t){return s.jsrandom_normal(this.ptr,e,t)}}function v(e,t){return h(JSON.parse(a(e,t)))}function f(e,t){return h(a(e,t))}function w(e,t){throw new Error(a(e,t))}},914:(e,t,i)=>{i.d(t,{Z:()=>I});var s=i(81),o=i.n(s),r=i(645),n=i.n(r),a=i(667),d=i.n(a),l=new URL(i(435),i.b),h=new URL(i(675),i.b),c=new URL(i(44),i.b),u=new URL(i(635),i.b),p=new URL(i(298),i.b),m=new URL(i(353),i.b),g=new URL(i(573),i.b),v=new URL(i(860),i.b),f=n()(o()),w=d()(l),y=d()(h),b=d()(c),z=d()(u),P=d()(p),x=d()(m),$=d()(g),T=d()(v);f.push([e.id,'.material-icons{font-family:"Material Icons";font-weight:normal;font-style:normal;font-size:24px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}@font-face{font-family:"Material Icons";font-style:normal;font-display:block;font-weight:400;src:url('+w+') format("woff2"),url('+y+') format("woff")}@font-face{font-family:"Merriweather Sans";font-style:normal;font-display:block;font-weight:800;src:url('+b+') format("woff2"),url('+z+') format("woff")}@font-face{font-family:"Prompt";font-style:normal;font-display:block;font-weight:400;src:url('+P+') format("woff2"),url('+x+') format("woff")}@font-face{font-family:"Prompt";font-style:normal;font-display:block;font-weight:700;src:url('+$+') format("woff2"),url('+T+') format("woff")}',""]);const I=f},173:(e,t,i)=>{i.r(t);class s extends EventTarget{addEventListener(e,t,i){super.addEventListener(e,t,i)}removeEventListener(e,t,i){super.removeEventListener(e,t,i)}}var o=i(392),r=i(408),n=function(e,t,i,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let a=class extends o.oi{constructor(){super(...arguments),this.name="",this.size=""}render(){return o.dy`<span class="material-icons ${this.size}">${this.name}</span>`}};a.styles=o.iv`
    :host {
      display: inline-block;
    }

    .material-icons {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      font-size: 24px; /* Preferred icon size */
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      -moz-osx-font-smoothing: grayscale;
      vertical-align: bottom;
    }

    .material-icons.large {
      font-size: 48px;
    }
  `,n([(0,r.Cb)()],a.prototype,"name",void 0),n([(0,r.Cb)()],a.prototype,"size",void 0),a=n([(0,r.Mo)("mat-icon")],a);const d=new s;let l="light",h="auto";{const e=window.localStorage.getItem("preferredTheme");switch(e){case"dark":case"light":h=e}}function c(){return"auto"===h?l:h}function u(e){if(e!==h){const t=c();h=e,window.localStorage.setItem("preferredTheme",e),p(t)}}function p(e){const t=c();t!==e&&d.dispatchEvent(new CustomEvent("current-theme",{detail:t}))}const m=window.matchMedia("(prefers-color-scheme: dark)");function g(e){const t=c();l=e.matches?"dark":"light",p(t)}g(m),m.addEventListener("change",g);let v=!0;function f(){return v}function w(e){v=e,window.localStorage.setItem("showTimer",String(e)),d.dispatchEvent(new CustomEvent("show-timer",{detail:e}))}"false"===window.localStorage.getItem("showTimer")&&(v=!1);var y=function(e,t,i,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let b=class extends o.oi{constructor(){super(...arguments),this.gameState=null,this.timerRunning=!1}render(){const{gameState:e}=this;return e?f()?o.dy`
      ${this.remainingTime()}<br />
      <a @click=${this.hideTimer} title="Hide timer">
        <mat-icon name="visibility_off"></mat-icon>
      </a>
    `:o.dy`
        <a @click=${this.showTimer} title="Show timer">
          <mat-icon name="visibility"></mat-icon>
        </a>
      `:""}updated(e){var t,i;const s=null!==(i=null===(t=this.gameState)||void 0===t?void 0:t.msRemaining)&&void 0!==i?i:0;s>0?(window.setTimeout((()=>this.requestUpdate()),(s-1)%1e3+1),this.timerRunning=!0):this.timerRunning&&(this.timerRunning=!1,this.dispatchEvent(new CustomEvent("timer-expired",{detail:f(),bubbles:!0,composed:!0})))}remainingTime(){var e,t;const i=null!==(t=null===(e=this.gameState)||void 0===e?void 0:e.msRemaining)&&void 0!==t?t:0,s=Math.ceil(i/1e3);return`${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`}showTimer(){w(!0),this.requestUpdate()}hideTimer(){w(!1),this.requestUpdate()}};b.styles=o.iv`
    :host {
      display: block;
    }

    a {
      cursor: pointer;
    }
  `,y([(0,r.Cb)()],b.prototype,"gameState",void 0),b=y([(0,r.Mo)("game-timer")],b);var z=i(338);class P{constructor(e,t){this.row=e,this.col=t}isAdjacentTo(e){return this!==e&&Math.abs(this.row-e.row)<=1&&Math.abs(this.col-e.col)<=1}}const x=(()=>{const e=[0,1,2,3,4,5];return e.map((t=>e.map((e=>new P(t,e)))))})();function $(e,t){return x[e][t]}function T(e){const t=[];for(let i=0;i<e;++i)for(let s=0;s<e;++s)t.push($(i,s));return t}var I=i(975);function k(e){let t=I.tb[e];return t.startsWith("Level")&&(t="Level "+t.substring(5)),t}function S(e,t){return 1===t?e:`${e}s`}function C(e,t){return o.dy`${e} ${S(t,e)}`}function L(e,t){return e?o.dy`${e.found} / ${e.total}
  ${S(t,e.total)}
  (${Math.round(e.found/e.total*100)}%)`:""}function E(e){return new Promise((t=>setTimeout(t,e)))}const R=o.iv`#444`,W=o.iv`#ccc`,O=o.iv`white`,_=o.iv`darkslategray`,M=o.iv`#aecbfa`,D=o.iv`
  ${M}cc
`,B=o.iv`#337`,j=o.iv`
  ${B}c
`,H=o.iv`#808080`,A=o.iv`
  :host(.may-scroll),
  .may-scroll {
    overflow: auto;
    /* for Firefox: */
    scrollbar-width: thin;
    scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color);
  }

  :host(.may-scroll)::-webkit-scrollbar,
  .may-scroll::-webkit-scrollbar {
    height: 4px;
    width: 8px;
  }

  :host(.may-scroll)::-webkit-scrollbar-thumb,
  .may-scroll::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-thumb-color);
    border-radius: 2px;
  }

  :host(.may-scroll)::-webkit-scrollbar-corner,
  .may-scroll::-webkit-scrollbar-corner {
    background-color: var(--scrollbar-track-color);
  }

  :host(.may-scroll)::-webkit-scrollbar-track,
  .may-scroll::-webkit-scrollbar-track {
    background-color: var(--scrollbar-track-color);
  }
`;var U=function(e,t,i,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const N="Merriweather Sans";let F=class extends o.oi{constructor(){super(...arguments),this.theme="light",this.padding=20,this.puzzleId=null,this.puzzle=null,this.isPaused=!0,this.isInteractive=!1,this.keyHandler=e=>this.handleKeyDown(e),this.resizeObserver=new ResizeObserver((async()=>{this.canvas&&(this.calcMetrics(),await E(0),this.draw())})),this.trail=[],this.prefixes=[],this.pendingKeyboardInput="",this.pendingInputTimeoutId=0,this.sideSpan=0,this._cellSpan=0,this.centers=[],this.cellCenter=e=>{const{centers:t}=this;return[t[e.col],t[e.row]]},this.font=N,this.textOffset=0}render(){const{sideSpan:e}=this,t=e/devicePixelRatio;return o.dy`
      <canvas
        ${(0,z.i)(this.canvasChanged)}
        width=${e}
        height=${e}
        style="width: ${t}px; height: ${t}px;"
        @pointerenter=${this.handlePointerEnter}
        @pointermove=${this.handlePointerHovering}
        @pointerleave=${this.handlePointerLeave}
        @pointercancel=${this.handlePointerCancel}
        @pointerdown=${this.handlePointerDown}
        @pointerup=${this.handlePointerUp}
      ></canvas>
    `}set externalPath(e){this.trail.length=0,this.trail.push(...e.locs),this.requestUpdate("externalPath",{locs:[]})}get externalPath(){return{locs:this.trail}}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this),this.isInteractive&&window.addEventListener("keydown",this.keyHandler)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this),window.removeEventListener("keydown",this.keyHandler)}canvasChanged(e){e instanceof HTMLCanvasElement&&(this.canvas=e,this.ctx=e.getContext("2d"),this.calcMetrics(),this.draw())}shouldInteract(){return this.isInteractive&&!this.isPaused}convertCoordinateToCellNumber(e){const{sideSpan:t,puzzleId:i}=this;if(!(e<0||e>=t)&&i)return Math.floor(e/(t/i.spec.size))}convertPointToLoc(e){const t=this.canvas.getBoundingClientRect(),i=(e.x-t.x)*devicePixelRatio,s=(e.y-t.y)*devicePixelRatio,o=this.convertCoordinateToCellNumber(i),r=this.convertCoordinateToCellNumber(s);if(void 0===o||void 0===r)return;const n=$(r,o),[a,d]=this.cellCenter(n);return Math.hypot(i-a,s-d)<=this.cellSpan/2*.9?n:void 0}pushLoc(e){const{puzzle:t,trail:i,prefixes:s}=this;if(!t||!e)return;const o=this.trail.indexOf(e);if(o>=0){if(o===i.length-2){i.pop(),s[0].endsWith("Q")&&(s.length/=2);for(let e=0;e<s.length;++e)s[e]=s[e].substring(0,s[e].length-1)}return void this.dispatchEvent(new CustomEvent("words-traced",{detail:{words:[...s]}}))}if(i.length&&!e.isAdjacentTo(i[i.length-1]))return;i.push(e);const r=t.grid[e.row].charAt(e.col);if(s.length)for(let e=0;e<s.length;++e)s[e]+=r;else s.push(r);"Q"===r&&s.forEach((e=>s.push(e+"U"))),this.dispatchEvent(new CustomEvent("words-traced",{detail:{words:[...s]}}))}handlePointerHovering(e){if(!this.shouldInteract())return;const t=this.convertPointToLoc(e);this.trail.length?this.pushLoc(t):t&&this.puzzle?this.hoverLoc=t:this.hoverLoc=void 0,this.draw()}handlePointerEnter(e){this.handlePointerHovering(e)}handlePointerLeave(e){this.hoverLoc=void 0,this.draw()}handlePointerCancel(e){var t;null===(t=this.canvas)||void 0===t||t.releasePointerCapture(e.pointerId),this.dispatchEvent(new CustomEvent("words-selected",{detail:{words:[]}})),this.resetPointerInput(),this.draw()}handlePointerDown(e){if(!this.shouldInteract())return;const t=this.convertPointToLoc(e);t&&this.puzzle&&(this.resetPointerInput(),this.pendingKeyboardInput="",this.pushLoc(t),this.hoverLoc=void 0,this.canvas.setPointerCapture(e.pointerId),this.draw())}handlePointerUp(e){var t;this.shouldInteract()&&(null===(t=this.canvas)||void 0===t||t.releasePointerCapture(e.pointerId),this.puzzle&&this.dispatchEvent(new CustomEvent("words-selected",{detail:{words:[...this.prefixes]}})),this.resetPointerInput(),this.draw())}resetPointerInput(){this.trail.length=0,this.prefixes.length=0,this.hoverLoc=void 0}clearPendingInputTimeout(){this.pendingInputTimeoutId&&(window.clearTimeout(this.pendingInputTimeoutId),this.pendingInputTimeoutId=0)}handleKeyDown(e){if(!this.shouldInteract())return;this.clearPendingInputTimeout(),this.resetPointerInput();let t=!1;switch(e.key){case"Enter":this.pendingKeyboardInput.length&&(this.dispatchEvent(new CustomEvent("words-selected",{detail:{words:[this.pendingKeyboardInput],checkPossible:!0}})),this.pendingKeyboardInput="");break;case"Esc":case"Escape":case"Clear":this.pendingKeyboardInput="",t=!0;break;case"Backspace":case"Del":case"Delete":this.pendingKeyboardInput.length&&(this.pendingKeyboardInput=this.pendingKeyboardInput.substring(0,this.pendingKeyboardInput.length-1),t=!0);break;default:if(1===e.key.length){const i=e.key.toUpperCase();i>="A"&&i<="Z"&&(this.pendingKeyboardInput+=i,t=!0)}}if(t){const e={words:this.pendingKeyboardInput?[this.pendingKeyboardInput]:[],checkPossible:!0};this.dispatchEvent(new CustomEvent("words-traced",{detail:e}))}this.pendingKeyboardInput&&(this.pendingInputTimeoutId=window.setTimeout((()=>{this.pendingKeyboardInput="",this.dispatchEvent(new CustomEvent("words-selected",{detail:{words:[]}}))}),2500))}updated(e){let t=!1;e.has("puzzleId")&&(t=!0,this.resetPointerInput(),this.calcMetrics()),e.has("externalPath")&&(t=!0),(e.has("puzzle")||e.has("isPaused"))&&(t=!0,this.resetPointerInput()),e.has("theme")&&this.canvas&&(this.updateBackground(),t=!0),t&&this.ctx&&this.draw()}updateBackground(){}get cellSpan(){return this._cellSpan}calcMetrics(){const e=this.getBoundingClientRect(),{padding:t,puzzleId:i}=this;if(!i)return;const s=i.spec.size;let o=Math.min(e.width,e.height);o-=2*t;let r=devicePixelRatio*o;const n=this._cellSpan=Math.floor((r-s)/s);this.sideSpan=s*n;const a=[],d=n/2;for(let e=0;e<s;++e)a[e]=n*e+d;this.centers=a,this.ctx&&this.setUpFonts()}setUpFonts(){const e=Math.round(.65*this.cellSpan);this.font=`800 ${e}px ${N}`,this.textOffset=this.calcTextOffset(this.font)}calcTextOffset(e){const{ctx:t}=this;t.font=e,t.textBaseline="middle";const i=t.measureText("AZ");return Math.round((i.actualBoundingBoxAscent-i.actualBoundingBoxDescent)/2)}pausedGrid(e){switch(e){case 4:default:return["LEAD","PIPE","WORD","GRID"];case 5:return["LEAD "," PIPE","     ","WORD "," GRID"];case 6:return["  LEAD","  PIPE","      ","      ","WORD  ","GRID  "]}}draw(){const{ctx:e}=this;e.setTransform({});const{width:t,height:i}=e.canvas;e.clearRect(0,0,t,i),this.drawGrid(),this.drawLetters(),this.drawTrail()}drawGrid(){const{cellSpan:e,hoverLoc:t,trail:i,ctx:s,theme:o,puzzleId:r,cellCenter:n}=this;if(!r)return;const a=e/2;if(t||i.length){s.fillStyle="light"===o?M.cssText:B.cssText,s.beginPath();const[e,r]=n(t||i[0]);s.arc(e,r,a,0,2*Math.PI),s.fill()}s.strokeStyle=H.cssText,s.lineWidth=1,s.beginPath();for(const e of r.spec.locs){const[t,i]=n(e);s.moveTo(t+a,i),s.arc(t,i,a,0,2*Math.PI)}s.stroke()}drawLetters(){const{isPaused:e,puzzle:t,puzzleId:i,ctx:s,theme:o,cellCenter:r,textOffset:n}=this;if(!i)return;const a=e||!t?this.pausedGrid(i.spec.size):t.grid;a===(null==t?void 0:t.grid)?s.fillStyle="light"===o?R.cssText:W.cssText:s.fillStyle="orange",s.textAlign="center",s.textBaseline="middle",s.font=this.font;for(const e of i.spec.locs){let t=a[e.row].charAt(e.col);"Q"===t&&(t="Qu");const[i,o]=r(e);s.fillText(String(t),i,o+n)}}drawTrail(){const{trail:e}=this;if(!e.length)return;const{ctx:t,theme:i,cellSpan:s,cellCenter:o}=this;t.strokeStyle="light"===i?D.cssText:j.cssText,t.lineCap="round",t.lineJoin="round",t.lineWidth=s/6,t.beginPath(),t.moveTo(...o(e[0]));for(const i of e)t.lineTo(...o(i));t.stroke()}};F.styles=[o.iv`
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--gf);
      }

      canvas {
        overflow: hidden;
        touch-action: none;
      }
    `],U([(0,r.Cb)({reflect:!0})],F.prototype,"theme",void 0),U([(0,r.Cb)({type:Number})],F.prototype,"padding",void 0),U([(0,r.Cb)({hasChanged:(e,t)=>!(e===t||e&&t&&e.seed===t.seed)})],F.prototype,"puzzleId",void 0),U([(0,r.Cb)()],F.prototype,"puzzle",void 0),U([(0,r.Cb)()],F.prototype,"isPaused",void 0),U([(0,r.Cb)({type:Boolean,reflect:!0})],F.prototype,"isInteractive",void 0),U([(0,r.Cb)()],F.prototype,"externalPath",null),U([(0,r.SB)()],F.prototype,"sideSpan",void 0),F=U([(0,r.Mo)("grid-view")],F);class G{constructor(e,t){this.last=e;const i=new Set(null==t?void 0:t.locs);i.add(e),this.locs=i}}class K{constructor(e){this.letter=e,this.paths=[]}}class q{constructor(e,t){this.spec=e,this.grid=t,this.letterLocs=new Map,this.wordPaths=[];const{letterLocs:i}=this;for(const s of e.locs){const e=t[s.row].charAt(s.col);i.has(e)?i.get(e).push(s):i.set(e,[s])}}findPaths(e){var t,i,s,o;const{letterLocs:r,wordPaths:n}=this;n.length>e.length&&(n.length=e.length);for(let s=0;s<e.length;++s){const o=e.charAt(s);if(s<n.length&&n[s].letter!==o&&(n.length=s),s===n.length){const a=new K(o);if(n.push(a),0===s)for(const e of null!==(t=r.get(o))&&void 0!==t?t:[])a.paths.push(new G(e));else{const t=n[s-1].paths;for(const e of null!==(i=r.get(o))&&void 0!==i?i:[])for(const i of t)!i.locs.has(e)&&i.last.isAdjacentTo(e)&&a.paths.push(new G(e,i));"U"===o&&"Q"===e.charAt(s-1)&&a.paths.push(...t)}}}return null!==(o=null===(s=n[e.length-1])||void 0===s?void 0:s.paths)&&void 0!==o?o:[]}}var J,Z;!function(e){e.MAKE_GRID="MAKE_GRID"}(J||(J={})),function(e){e.GRID="GRID",e.UNKNOWN_VERSION="UNKNOWN_VERSION"}(Z||(Z={}));const Q=[{name:"Small",size:4,minLength:3,timerMinutes:3,locs:T(4)},{name:"Medium",size:5,minLength:4,timerMinutes:3,locs:T(5)},{name:"Large",size:6,minLength:5,timerMinutes:4,locs:T(6)}],V=new Map(Q.map((e=>[e.size,e]))),X=new Map(Q.map((e=>[e.name.toLowerCase(),e])));class Y{constructor(e,t,i,s){this.version=e,this.spec=i,this.counter=s,this.dateTimestamp=t.getTime()}get date(){return new Date(this.dateTimestamp)}get dateString(){return ee(this.date)}get seed(){return`${this.version}:${this.dateString}:${this.spec.size}:${this.counter}`}next(){return new Y(this.version,this.date,this.spec,1+this.counter)}toMakeGridMessage(){return{type:J.MAKE_GRID,version:this.version,seed:this.seed,size:this.spec.size,minLength:this.spec.minLength}}static daily(e=new Date){const t=new I.yG(ee(e)),i=function(e){return Q[Math.floor(e.range(0,Q.length))]}(t);return t.free(),Y.forSpec(i,e)}static forSpec(e,t=new Date,i=1){return new Y(1,t,e,i)}static fromSeed(e){const t=e.split(":");if(4===t.length){const e=Number(t[0]),i=t[1].split("-").map(Number),s=Number(t[2]),o=Number(t[3]);if(!isNaN(e)&&3===i.length&&!i.some(isNaN)&&function(e){return V.has(e)}(s)&&!isNaN(o))return new Y(e,new Date(i[0],i[1]-1,i[2]),function(e){const t=V.get(e);if(!t)throw new Error(`Invalid grid size ${e}`);return t}(s),o)}throw new Error(`Seed string does not appear to be from PuzzleId: ${e}`)}}function ee(e){return`${String(e.getFullYear()).padStart(4,"0")}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}var te;!function(e){e[e.TOO_SHORT=0]="TOO_SHORT",e[e.NOT_A_WORD=1]="NOT_A_WORD",e[e.WORD=2]="WORD",e[e.DUPLICATE=3]="DUPLICATE",e[e.IMPOSSIBLE=4]="IMPOSSIBLE"}(te||(te={}));var ie=i(998);function se(){return(0,ie.X3)("wordgrid",1,{upgrade(e){e.createObjectStore("games",{keyPath:"puzzleId"}).createIndex("by-last-played","lastPlayed");const t=e.createObjectStore("shares",{autoIncrement:!0});t.createIndex("by-person","person"),t.createIndex("by-puzzle-id","puzzleId")}})}class oe{constructor(e,t,i=0,s=0,o=[],r=!1,n=null){this.puzzleId=e,this.puzzle=t,this.found=new Set,this.reverseFound=[],this.earnedPointsCache=0,this.priorElapsedMs=0,this.resumedTimestamp=0,this.numFoundWithinTimeLimit=0,this.complete=!1,this.lastPlayedTimestamp=0,this.pathFinder=null;const a=new Map;let d=0;const l=new Map;for(const[e,i]of t.words.entries()){let t=a.get(i);void 0===t&&(t={found:0,total:0},a.set(i,t)),++t.total;const s=oe.scoreWord(e);d+=s;let o=l.get(i);void 0===o&&(o={found:0,total:0},l.set(i,o)),o.total+=s}this.countsByCategory=a,this.points={found:0,total:d},this.pointsByCategory=l,this.categories=[...a.keys()].sort(((e,t)=>e-t)),this.priorElapsedMs=i,this.numFoundWithinTimeLimit=s;for(const e of o)this.addPreviouslyFoundWord(e),this.found.size<=s&&(this.earnedPointsCache+=oe.scoreWord(e));this.complete=r,this.lastPlayedTimestamp=n?n.getTime():0}static scoreWord(e){switch(e.length){case 3:case 4:return 1;case 5:return 2;case 6:return 3;case 7:return 5;case 8:return 11;default:return 2*e.length}}judgeWord(e,t){return this.found.has(e)?te.DUPLICATE:this.puzzle.words.has(e)?te.WORD:t&&!this.isPossible(e)?te.IMPOSSIBLE:e.length<this.puzzleId.spec.minLength?te.TOO_SHORT:te.NOT_A_WORD}isPossible(e){return this.findPaths(e).length>0}findPaths(e){let{pathFinder:t}=this;return t||(this.pathFinder=t=new q(this.puzzleId.spec,this.puzzle.grid)),t.findPaths(e)}addFoundWord(e,t){if(this.isPaused)throw new Error("This game is paused");const i=this.judgeWord(e,t);return i===te.WORD&&(this.addPreviouslyFoundWord(e),this.timeExpired||(++this.numFoundWithinTimeLimit,this.earnedPointsCache+=oe.scoreWord(e)),this.lastPlayedTimestamp=Date.now()),i}addPreviouslyFoundWord(e){this.found.add(e),this.reverseFound.unshift(e);const t=this.puzzle.words.get(e);this.countsByCategory.get(t).found++;const i=oe.scoreWord(e);this.points.found+=i,this.pointsByCategory.get(t).found+=i,this.found.size===this.puzzle.words.size&&this.markComplete()}getWordCounts(e){var t;return void 0===e?{found:this.found.size,total:this.puzzle.words.size}:null!==(t=this.countsByCategory.get(e))&&void 0!==t?t:{found:0,total:0}}getWordPoints(e){var t;return void 0===e?{...this.points}:null!==(t=this.pointsByCategory.get(e))&&void 0!==t?t:{found:0,total:0}}get earnedPoints(){return this.earnedPointsCache}getWordCategories(){return this.categories}getFoundWords(e){return void 0===e?this.reverseFound:this.reverseFound.filter((t=>this.puzzle.words.get(t)===e))}getFoundWordsSets(){const e=[...this.found],t=e.splice(this.numFoundWithinTimeLimit);return[new Set(e),new Set(t)]}getWords(e){return void 0===e?[...this.puzzle.words.keys()]:[...this.puzzle.words.keys()].filter((t=>this.puzzle.words.get(t)===e))}get numWordsFoundBeforeTimeLimit(){return this.numFoundWithinTimeLimit}get isStarted(){return this.lastPlayedTimestamp>0}get isPaused(){return 0===this.resumedTimestamp}get elapsedMs(){let e=this.priorElapsedMs;return 0!==this.resumedTimestamp&&(e+=Date.now()-this.resumedTimestamp),e}get timeExpired(){return 0===this.msRemaining}get msRemaining(){return Math.max(0,6e4*this.puzzleId.spec.timerMinutes-this.elapsedMs)}get lastPlayed(){return this.lastPlayedTimestamp?new Date(this.lastPlayedTimestamp):null}resume(){if(this.complete)throw new Error("Can't resume a complete game");this.isPaused&&(this.resumedTimestamp=Date.now(),this.lastPlayedTimestamp=this.resumedTimestamp)}pause(){this.isPaused||(this.priorElapsedMs=this.elapsedMs,this.resumedTimestamp=0,this.lastPlayedTimestamp=Date.now())}markComplete(){this.pause(),this.complete=!0}get isComplete(){return this.complete}get wordsToStore(){if(!this.complete)return{words:[...this.found],cutoff:this.numFoundWithinTimeLimit};const e=[...this.found],t=e.splice(this.numFoundWithinTimeLimit),i={firstBits:re(e,function(e){const t=new Map;let i=0;for(const s of e)t.set(s,i++);return t}(this.puzzle.words.keys()))};if(t.length){const s=new Map,o=new Set(e);let r=0;for(const e of this.puzzle.words.keys())o.has(e)||s.set(e,r++);i.secondBits=re(t,s)}return i}static reconstructWords(e,t){const i=[...e.words.keys()],s=ne(i,t.firstBits),o=s.length;if(t.secondBits){const e=new Set(i);for(const t of s)e.delete(t);s.push(...ne([...e],t.secondBits))}return{words:s,cutoff:o}}static fromDbRecord(e,t){let i=e.wordsFound,s=!1;return function(e){return"object"==typeof e.firstBits}(i)&&(i=oe.reconstructWords(t,i),s=!0),new oe(Y.fromSeed(t.message.seed),t,e.elapsedMs,i.cutoff,i.words,s,e.lastPlayed)}}function re(e,t){const i=new Uint8Array(Math.ceil(t.size/8));for(const s of e){const e=t.get(s),o=7&e;i[Math.floor(e/8)]|=1<<o}return i}function ne(e,t){const i=[];for(let s=0;s<t.length;++s){const o=t[s];if(o)for(let t=0;t<8;++t)o&1<<t&&i.push(e[8*s+t])}return i}var ae=function(e,t,i,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let de=class extends o.oi{constructor(){super(...arguments),this.word="",this.category=null,this.theme="light",this.open=!1,this.timeoutId=0}render(){const{category:e}=this,t=oe.scoreWord(this.word);return o.dy`
      <a @click=${this.toggle}>${this.word}</a>
      ${this.open?o.dy`
            <span class="more">
              [${e?`${k(e)} —`:""}${t}
              point${t>1?"s":""} —
              <a
                href="https://www.google.com/search?q=define+%2B${this.word}"
                target="_blank"
                >look up</a
              >]
            </span>
          `:""}
    `}toggle(e){this.open=!this.open,this.dispatchEvent(new CustomEvent("word-expanded",{detail:this.open?this.word:"",bubbles:!0,composed:!0})),this.timeoutId&&(window.clearTimeout(this.timeoutId),this.timeoutId=0),this.open&&(this.timeoutId=window.setTimeout((()=>{this.open&&this.toggle(),this.timeoutId=0}),2500))}};de.styles=o.iv`
    :host {
      display: inline;
      cursor: pointer;
    }

    :host([theme='dark']) a[href] {
      color: lightblue;
    }

    .more {
      font-size: 80%;
    }
  `,ae([(0,r.Cb)()],de.prototype,"word",void 0),ae([(0,r.Cb)()],de.prototype,"category",void 0),ae([(0,r.Cb)()],de.prototype,"theme",void 0),ae([(0,r.SB)()],de.prototype,"open",void 0),de=ae([(0,r.Mo)("solution-word")],de);var le=i(36);const he=new Worker(new URL(i.p+i.u(975),i.b),{name:"words"});he.onerror=e=>{console.log("Error on the words worker:",e)};const ce=[];function ue(e){return new Promise(((t,i)=>{ce.push({message:e.toMakeGridMessage(),resolve:t,reject:i}),1===ce.length&&pe()}))}function pe(){ce.length&&he.postMessage(ce[0].message)}he.onmessage=e=>{if(!ce.length)return void console.log("Unexpected message from the words worker");const t=ce.shift();if(pe(),e.data.message.seed===(null==t?void 0:t.message.seed))switch(e.data.type){case Z.GRID:t.resolve(e.data);break;case Z.UNKNOWN_VERSION:t.reject(`The words worker can't honor the version we asked for, ${e.data.message.version}`)}else console.log(`Expected to hear about ${null==t?void 0:t.message.seed}, instead got`,e.data)};let me=Date.now();function ge(){me=Date.now()}var ve=function(e,t,i,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let fe=!0,we=class extends o.oi{constructor(){super(...arguments),this.theme="light",this.puzzleId=Y.daily(),this.resumeImmediately=!1,this.puzzle=null,this.gameState=null,this.db=se(),this.foregroundnessHandler=()=>{"visible"!==document.visibilityState&&this.pausePlay()},this.windowBlurHandler=()=>{this.pausePlay()},this.spacebarHandler=e=>{var t;" "===e.key&&((null===(t=this.gameState)||void 0===t?void 0:t.isPaused)?this.resumePlay():this.pausePlay())},this.showTimerHandler=()=>{this.requestUpdate()},this.pendingWords=[],this.pendingWordsJudgements=[],this.pendingWordsTimeoutId=0}render(){var e,t,i;const{theme:s,gameState:r}=this,n=s===l?"light"===s?"dark":"light":"auto";return o.dy`
      <div id="controls">
        <div>
          <a @click=${this.goToHistory} title="Go to the history page">
            <mat-icon name="arrow_back"></mat-icon>
          </a>
        </div>
        <div>
          <a @click=${this.setTheme} title="Switch to ${n} theme">
            <mat-icon
              name=${"auto"===n?"contrast":`${n}_mode`}
              data-theme=${n}
            ></mat-icon>
          </a>
          ${r&&!r.isPaused?o.dy`
                <a @click=${this.rotatePuzzle} title="Rotate puzzle">
                  <mat-icon name="rotate_90_degrees_cw"></mat-icon>
                </a>
                <a @click=${this.flipPuzzle} title="Flip puzzle">
                  <mat-icon name="flip"></mat-icon>
                </a>
              `:""}
        </div>
        <div>
          <a
            href="https://github.com/leadpipe/wordgrid/issues/new"
            target="_blank"
            title="File a bug report"
            ><mat-icon name="bug_report"></mat-icon></a
          ><a
            href="https://github.com/leadpipe/wordgrid/#readme"
            target="_blank"
            title="Help"
            ><mat-icon name="help"></mat-icon
          ></a>
        </div>
      </div>
      <div id="summary">
        ${r?o.dy`
              <div>
                <b>${r.puzzleId.spec.minLength}</b> or more letters.
                <br class="opt-break" />
                ${f()?o.dy`
                      Earned ${C(r.earnedPoints,"point")}.
                    `:""}
              </div>
              <div>
                ${L(r.getWordCounts(),"word")},
                <br class="opt-break" />
                ${L(null==r?void 0:r.getWordPoints(),"point")}.
              </div>
            `:""}
      </div>
      <div id="grid">
        <grid-view
          theme=${this.theme}
          padding="${10}"
          isInteractive
          .isPaused=${null===(e=null==r?void 0:r.isPaused)||void 0===e||e}
          .puzzleId=${this.puzzleId}
          .puzzle=${this.puzzle}
          @words-traced=${this.wordsTraced}
          @words-selected=${this.wordsSelected}
        ></grid-view>
        <div id="below-grid">
          ${fe?o.dy`
                <div></div>
                <div>Loading words...</div>
                <div></div>
              `:r?o.dy`
                <game-timer
                  .gameState=${r}
                  @timer-expired=${this.timerExpired}
                ></game-timer>
                ${this.pendingWords.length?o.dy`
                      <div>
                        ${this.pendingWords.map(((e,t)=>o.dy`<span
                              class=${this.judgementClass(this.pendingWordsJudgements[t])}
                            >
                              ${e}
                            </span>`))}
                      </div>
                      <div></div>
                    `:r.isPaused?o.dy`
                      <div>
                        ${r.isStarted?o.dy`
                              <a @click=${this.resumePlay} title="Resume play">
                                <mat-icon
                                  name="play_circle"
                                  size="large"
                                ></mat-icon>
                              </a>
                            `:o.dy`
                              <a @click=${this.resumePlay} title="Start play">
                                <mat-icon
                                  name="not_started"
                                  size="large"
                                ></mat-icon>
                              </a>
                            `}
                      </div>
                      <div>
                        <a @click=${this.quit} title="Quit" class="right">
                          <mat-icon name="stop_circle" size="small"></mat-icon>
                        </a>
                      </div>
                    `:o.dy`
                      <div>
                        <a @click=${this.pausePlay} title="Pause play">
                          <mat-icon name="pause_circle" size="large"></mat-icon>
                        </a>
                      </div>
                      <div></div>
                    `}
              `:""}
        </div>
      </div>
      <div id="found" class="may-scroll">
        ${(0,le.r)(null!==(i=null===(t=this.gameState)||void 0===t?void 0:t.getFoundWords())&&void 0!==i?i:[],(e=>e),(e=>o.dy`
            <div>
              <solution-word
                word=${e}
                .category=${this.puzzle.words.get(e)}
                theme=${this.theme}
              ></solution-word>
            </div>
          `))}
      </div>
    `}connectedCallback(){super.connectedCallback(),document.addEventListener("visibilitychange",this.foregroundnessHandler),window.addEventListener("blur",this.windowBlurHandler),window.addEventListener("keydown",this.spacebarHandler),d.addEventListener("show-timer",this.showTimerHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.foregroundnessHandler),window.removeEventListener("blur",this.windowBlurHandler),window.removeEventListener("keydown",this.spacebarHandler),d.removeEventListener("show-timer",this.showTimerHandler)}updated(e){e.has("puzzleId")&&this.requestAndLoadPuzzle()}setTheme(e){u(e.target.dataset.theme)}async requestAndLoadPuzzle(){const{puzzleId:e}=this;this.puzzle=null,this.gameState=null,this.style.setProperty("--grid-spec-size",e.spec.size.toString());const t=await ue(e);if(0===t.words.size){const{resumeImmediately:t}=this;this.dispatchEvent(new CustomEvent("play-puzzle",{detail:{puzzleId:e.next(),resumeImmediately:t},bubbles:!0,composed:!0}))}else this.loadPuzzle(t)}async loadPuzzle(e){const t=await this.db,i=await t.get("games",this.puzzleId.seed);this.gameState=i?oe.fromDbRecord(i,e):new oe(this.puzzleId,e),this.puzzle=e,fe=!1,this.gameState.isComplete?this.redirectToHistory():this.resumeImmediately&&this.gameState.resume()}async saveGame(){const{gameState:e}=this;if(!e)return;const{lastPlayed:t}=e;if(!t)return;ge();const i=await this.db;await i.put("games",{puzzleId:e.puzzleId.seed,lastPlayed:t,elapsedMs:e.elapsedMs,wordsFound:e.wordsToStore})}async timerExpired(e){e.detail&&(await this.pausePlayAsync(),window.confirm("Time's up!\n\nKeep looking for words?\n\nCancel to quit.")?(await E(0),this.resumePlay()):await this.quit())}async goToHistory(){await this.saveGame(),this.redirectToHistory()}resumePlay(){var e;null===(e=this.gameState)||void 0===e||e.resume(),this.requestUpdate()}async pausePlayAsync(){var e;null===(e=this.gameState)||void 0===e||e.pause(),this.requestUpdate(),await this.saveGame()}pausePlay(){this.pausePlayAsync()}async quit(){var e;null===(e=this.gameState)||void 0===e||e.markComplete(),await this.saveGame(),this.redirectToHistory()}rotatePuzzle(e){const{puzzle:t}=this;if(t){const e=[...t.grid].reverse(),i=[];for(let t=0;t<e.length;++t)i.push(e.map((e=>e.charAt(t))).join(""));this.puzzle={...t,grid:i}}}flipPuzzle(e){const{puzzle:t}=this;if(t){const e=t.grid.map((e=>e.split("").reverse().join("")));this.puzzle={...t,grid:e}}}clearPendingWordsTimeout(){this.pendingWordsTimeoutId&&(window.clearTimeout(this.pendingWordsTimeoutId),this.pendingWordsTimeoutId=0)}wordsTraced(e){this.pendingWords=e.detail.words,this.pendingWordsJudgements=e.detail.words.map((t=>{var i,s;return null!==(s=null===(i=this.gameState)||void 0===i?void 0:i.judgeWord(t,e.detail.checkPossible))&&void 0!==s?s:te.NOT_A_WORD})),this.clearPendingWordsTimeout()}wordsSelected(e){var t;this.pendingWords=e.detail.words,this.pendingWordsJudgements=e.detail.words.map((t=>{var i,s;return null!==(s=null===(i=this.gameState)||void 0===i?void 0:i.addFoundWord(t,e.detail.checkPossible))&&void 0!==s?s:te.NOT_A_WORD})),this.clearPendingWordsTimeout(),this.pendingWordsJudgements.some((e=>e===te.WORD))&&(this.saveGame(),(null===(t=this.gameState)||void 0===t?void 0:t.isComplete)&&this.redirectToHistory()),this.pendingWordsTimeoutId=window.setTimeout((()=>{this.pendingWords=[]}),1e3)}judgementClass(e){switch(e){case te.TOO_SHORT:return"too-short-word";case te.NOT_A_WORD:default:return"not-a-word";case te.DUPLICATE:return"duplicate-word";case te.WORD:return"found-new-word";case te.IMPOSSIBLE:return"impossible-word"}}redirectToHistory(){this.dispatchEvent(new CustomEvent("show-history",{detail:this.puzzleId,bubbles:!0,composed:!0}))}};we.styles=[A,o.iv`
      :host {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding-top: 8px;
        display: grid;
        grid-template-columns: 1fr var(--grid-side-extent) 1fr;
        grid-template-rows: min-content auto;
        gap: var(--page-grid-gap);
        --page-grid-gap: 8px;
        --grid-view-padding: ${10}px;
        --grid-spec-size: 6;
        --grid-optimal-cell-side-extent: 80px;
        --below-grid-height: 80px;
        --grid-optimal-width: calc(
          var(--grid-spec-size) * var(--grid-optimal-cell-side-extent) + 2 *
            var(--grid-view-padding)
        );
        --grid-optimal-height: calc(
          var(--grid-optimal-width) + var(--below-grid-height)
        );
        --base-grid-side-extent: var(--grid-optimal-width);
        --grid-side-extent: min(
          var(--base-grid-side-extent),
          100vh - var(--below-grid-height)
        );
      }

      a {
        text-decoration: none;
        cursor: pointer;
      }

      :host a {
        color: var(--text-color);
      }

      #controls {
        grid-column: 2;
        margin-bottom: 16px;
        display: flex;
        justify-content: center;
      }

      #controls > div {
        flex: 1 1 0;
        display: flex;
        justify-content: center;
        align-items: baseline;
        gap: 4px 16px;
      }

      #controls > div:nth-child(1) {
        justify-content: left;
      }

      #controls > div:nth-child(2) {
        flex: 3 1 0;
      }

      #controls > div:nth-child(3) {
        justify-content: right;
      }

      #summary,
      #found {
        flex: 1 1 50%;
        padding: 24px 16px 0;
      }

      #summary {
        grid-column: 1;
        text-align: right;
      }

      .opt-break {
      }

      #found {
        min-height: 100px;
        column-width: 6em;
        column-fill: auto;
        overflow-wrap: break-word;
        padding-left: 24px;
        text-indent: -8px;
      }

      #found div {
        line-height: 90%;
        padding: 4px 0;
      }

      grid-view {
        width: var(--grid-side-extent);
        height: var(--grid-side-extent);
      }

      #grid {
        grid-column: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 20px;
        flex: 0 0 0;
      }

      #below-grid {
        height: var(--below-grid-height);
        width: 100%;
        display: flex;
        align-items: center;
      }

      #below-grid > * {
        text-align: center;
        flex: 3 1 0;
      }

      #below-grid > *:nth-child(odd) {
        flex: 1 1 0;
      }

      @media (max-width: 700px) {
        :host {
          --grid-side-extent: min(
            var(--base-grid-side-extent),
            100vw - 2 * var(--page-grid-gap)
          );
          grid-template-rows: min-content min-content min-content auto;
        }

        #summary,
        #found {
          grid-column: 2;
          padding-top: 0;
        }

        .opt-break {
          display: none;
        }
      }

      .not-a-word {
      }

      .impossible-word {
        color: orange;
      }

      .too-short-word {
        font-style: italic;
      }

      .duplicate-word {
        color: #777;
      }

      .found-new-word {
        color: green;
      }

      .duplicate-word,
      .found-new-word {
        font-weight: bold;
        font-size: 24px;
      }
    `],ve([(0,r.Cb)({reflect:!0})],we.prototype,"theme",void 0),ve([(0,r.Cb)()],we.prototype,"puzzleId",void 0),ve([(0,r.Cb)()],we.prototype,"resumeImmediately",void 0),ve([(0,r.SB)()],we.prototype,"puzzle",void 0),ve([(0,r.SB)()],we.prototype,"pendingWords",void 0),we=ve([(0,r.Mo)("game-view")],we);var ye=function(e,t,i,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let be=class extends o.oi{constructor(){super(...arguments),this.theme="light",this.expanded=!1,this.record=null,this.game=null,this.prevShownWord="",this.shownWordCount=0,this.shownPath={locs:[]}}render(){var e;const{record:t,game:i,expanded:s}=this;if(!t)return"";const r=Y.fromSeed(t.puzzleId),n=null!==(e=null==i?void 0:i.getWordCategories())&&void 0!==e?e:[];return o.dy`
      <div>
        ${r.spec.name} puzzle #${r.counter} of
        ${r.dateString}
      </div>
      ${i?o.dy`
            <div>
              Earned ${C(i.earnedPoints,"point")} for finding
              ${C(i.numWordsFoundBeforeTimeLimit,"word")} within
              ${i.puzzleId.spec.timerMinutes} minutes.
            </div>
            <div>
              Found ${L(i.getWordCounts(),"word")},
              ${L(i.getWordPoints(),"point")}.
            </div>
            <div>
              ${i.isComplete?"Complete":o.dy`
                    Ongoing
                    <a @click=${this.resumeGame} title="Resume play">
                      <mat-icon name="play_circle"></mat-icon>
                    </a>
                  `}
              <a
                @click=${this.toggleExpansion}
                title=${s?"Collapse":"Expand"}
              >
                <mat-icon
                  name="expand_${s?"less":"more"}"
                ></mat-icon>
              </a>
            </div>
            ${s?o.dy`
                  ${i.isComplete?o.dy`
                        <div id="complete">
                          <grid-view
                            theme=${this.theme}
                            padding="10"
                            .isPaused=${!1}
                            .puzzleId=${r}
                            .puzzle=${i.puzzle}
                            .externalPath=${this.shownPath}
                          ></grid-view>
                          <div id="all-words" class="may-scroll">
                            <table>
                              ${n.map((e=>{const t=i.getWordCounts(e),[s,r]=i.getFoundWordsSets();return o.dy`
                                  <tr>
                                    <th>${k(e)}</th>
                                    <th>${n=t,`${n.found}/${n.total}`} words</th>
                                  </tr>
                                  ${i.getWords(e).map((e=>o.dy`
                                      <tr>
                                        <td>
                                          <solution-word
                                            word=${e}
                                            theme=${this.theme}
                                            @word-expanded=${this.showWord}
                                          ></solution-word>
                                        </td>
                                        <td>
                                          ${s.has(e)?o.dy`
                                                <mat-icon
                                                  name="check_circle_outline"
                                                ></mat-icon>
                                                +${oe.scoreWord(e)}
                                              `:r.has(e)?o.dy`
                                                <mat-icon
                                                  name="check"
                                                ></mat-icon>
                                              `:""}
                                        </td>
                                      </tr>
                                    `))}
                                `;var n}))}
                            </table>
                          </div>
                        </div>
                      `:o.dy`
                        <div id="ongoing">
                          ${n.map((e=>o.dy`
                              <div class="cat">${k(e)}</div>
                              ${[...i.getFoundWords(e)].sort().map((e=>o.dy`
                                    <div>
                                      <solution-word word=${e}
                                      theme=${this.theme}
                                    </div>
                                  `))}
                            `))}
                        </div>
                      `}
                `:""}
          `:o.dy` Loading... `}
    `}updated(e){e.has("record")&&this.loadGame()}showWord(e){const{game:t}=this;if(!t)return;const i=e.detail;if(i){i===this.prevShownWord?++this.shownWordCount:(this.shownWordCount=0,this.prevShownWord=i);const e=t.findPaths(i);this.shownPath=e[this.shownWordCount%e.length]}else this.shownPath={locs:[]}}async loadGame(){const{record:e}=this;if(!e)return;const t=await ue(Y.fromSeed(e.puzzleId));this.game=oe.fromDbRecord(e,t)}resumeGame(){this.game&&this.dispatchEvent(new CustomEvent("play-puzzle",{detail:{puzzleId:this.game.puzzleId,resume:!0},bubbles:!0,composed:!0}))}toggleExpansion(){var e;const t=this.expanded||null===(e=this.game)||void 0===e?void 0:e.puzzleId;this.dispatchEvent(new CustomEvent("show-history",{detail:t,bubbles:!0,composed:!0}))}};be.styles=[A,o.iv`
      :host {
        display: block;
      }

      a {
        cursor: pointer;
      }

      grid-view {
        width: 300px;
        height: 300px;
      }

      #complete {
        display: flex;
      }

      #all-words {
        height: 300px;
        margin: 0 8px;
      }

      th {
        position: sticky;
        top: 0;
        background: var(--background);
        text-align: center;
      }

      #ongoing {
        column-width: 6em;
        column-fill: auto;
        overflow-wrap: break-word;
        padding-left: 24px;
        text-indent: -8px;
      }

      div.cat {
        font-weight: bold;
        font-style: italic;
        text-indent: -16px;
      }

      #ongoing div {
        line-height: 90%;
        padding: 4px 0;
      }
    `],ye([(0,r.Cb)({reflect:!0})],be.prototype,"theme",void 0),ye([(0,r.Cb)({type:Boolean,reflect:!0})],be.prototype,"expanded",void 0),ye([(0,r.Cb)()],be.prototype,"record",void 0),ye([(0,r.SB)()],be.prototype,"game",void 0),ye([(0,r.SB)()],be.prototype,"shownPath",void 0),be=ye([(0,r.Mo)("game-summary")],be);var ze=function(e,t,i,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Pe=class extends o.oi{constructor(){super(...arguments),this.theme="light",this.preferredTheme=h,this.showTimer=f(),this.expandedPuzzle="",this.gameRecordsByDate=null,this.db=se()}render(){const{gameRecordsByDate:e,expandedPuzzle:t}=this;return e?o.dy` <div id="actions">
        <div id="new-puzzle">
          New puzzle: <br />
          ${this.renderNewPuzzleButton("Small")}
          ${this.renderNewPuzzleButton("Medium")}
          ${this.renderNewPuzzleButton("Large")}
        </div>
        <div id="preferred-theme">
          Theme: ${this.renderThemeChoice("Light","light_mode")}
          ${this.renderThemeChoice("Dark","dark_mode")}
          ${this.renderThemeChoice("Auto","contrast")}
        </div>
        <div id="preferred-timer">
          Timer: ${this.renderTimerChoice(!0,"visibility")}
          ${this.renderTimerChoice(!1,"visibility_off")}
        </div>
        <div>
          Meta:
          <div>
            <a
              href="https://github.com/leadpipe/wordgrid/issues/new"
              target="_blank"
              title="File a bug report"
              ><mat-icon name="bug_report"></mat-icon
            ></a>
            Report a bug
          </div>
          <div>
            <a
              href="https://github.com/leadpipe/wordgrid/#readme"
              target="_blank"
              title="Help"
              ><mat-icon name="help"></mat-icon
            ></a>
            Read help
          </div>
        </div>
      </div>
      ${[...e.entries()].map((([e,i])=>o.dy`
          <div>
            <span class="date">${e}</span>
            <ul>
              ${i.map((e=>o.dy`
                  <li id=${e.puzzleId}>
                    <game-summary
                      theme=${this.theme}
                      .expanded=${t===e.puzzleId}
                      .record=${e}
                    ></game-summary>
                  </li>
                `))}
            </ul>
          </div>
        `))}`:"Loading games..."}renderNewPuzzleButton(e){return o.dy`
      <button @click=${this.newPuzzle} data-name="${e}">${e}</button>
    `}renderThemeChoice(e,t){const i=e.toLowerCase(),s=this.preferredTheme===i?"selected":"";return o.dy`
      <div class=${s}>
        <a @click=${this.setPreferredTheme}>
          <mat-icon name=${t} data-theme=${i}></mat-icon>
        </a>
        ${e}
      </div>
    `}renderTimerChoice(e,t){const i=this.showTimer===e?"selected":"";return o.dy`
      <div class=${i}>
        <a @click=${this.setShowTimer}>
          <mat-icon name=${t} data-show=${e}></mat-icon>
        </a>
        ${e?"Show":"Don't show"} the timer
      </div>
    `}connectedCallback(){super.connectedCallback(),this.loadGames()}disconnectedCallback(){super.disconnectedCallback(),this.gameRecordsByDate=null}updated(e){e.has("expandedPuzzle")&&window.setTimeout((()=>{var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("game-summary[expanded]");t&&t.scrollIntoView({behavior:"smooth"})}))}async newPuzzle(e){const t=function(e){const t=X.get(e.toLowerCase());if(!t)throw new Error(`Invalid game spec name '${e}'`);return t}(e.target.dataset.name),i=new Date,s=await this.db;for(let e=1;;++e){const o=Y.forSpec(t,i,e);if(!await s.transaction("games").store.openCursor(o.seed))return void this.dispatchEvent(new CustomEvent("play-puzzle",{detail:{puzzleId:o},bubbles:!0,composed:!0}))}}setPreferredTheme(e){const t=e.target.dataset.theme;this.preferredTheme=t,u(t)}setShowTimer(e){const t="true"===e.target.dataset.show;this.showTimer=t,w(t)}async loadGames(){const e=(await this.db).transaction("games").store.index("by-last-played"),t=new Map;for await(const i of e.iterate(null,"prev")){const e=i.key.toDateString(),s=i.value,o=t.get(e);o?o.push(s):t.set(e,[s])}this.gameRecordsByDate=t,ge()}};Pe.styles=[A,o.iv`
      :host {
        display: block;
        padding: 8px;
        height: 100%;
      }

      a {
        cursor: pointer;
      }

      :host a {
        color: var(--text-color);
      }

      #actions {
        float: right;
      }

      .date {
        margin: 8px 0;
        font-size: 24px;
        font-weight: bold;
      }

      .selected {
        background: var(--highlight-background);
      }

      li {
        margin: 16px 0;
      }
    `],ze([(0,r.Cb)({reflect:!0})],Pe.prototype,"theme",void 0),ze([(0,r.SB)()],Pe.prototype,"preferredTheme",void 0),ze([(0,r.SB)()],Pe.prototype,"showTimer",void 0),ze([(0,r.Cb)()],Pe.prototype,"expandedPuzzle",void 0),ze([(0,r.SB)()],Pe.prototype,"gameRecordsByDate",void 0),Pe=ze([(0,r.Mo)("history-view")],Pe);var xe=function(e,t,i,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let $e,Te=Y.daily().seed;function Ie(e){window.clearTimeout($e);const t=Y.daily();t.seed>Te&&t.date>new Date(me+3e5)&&(Te=t.seed,e.dispatchEvent(new CustomEvent("play-puzzle",{detail:{puzzleId:t},bubbles:!0,composed:!0}))),$e=window.setTimeout((()=>Ie(e)),36e5)}let ke=class extends o.oi{constructor(){super(),this.theme=c(),this.page="play",this.puzzleSeed="",this.resumeImmediately=!1,this.themeHandler=e=>{this.theme=e.detail},this.popstateHandler=()=>{this.interpretHash()},this.dailyPuzzleUpdater=()=>{Ie(this)},this.interpretHash(),this.addEventListener("play-puzzle",(e=>this.handlePlayPuzzle(e))),this.addEventListener("show-history",(e=>this.handleShowHistory(e))),Ie(this)}render(){switch(this.page){case"play":return o.dy`
          <game-view
            theme=${this.theme}
            class="may-scroll"
            .puzzleId=${Y.fromSeed(this.puzzleSeed)}
            .resumeImmediately=${this.resumeImmediately}
          ></game-view>
        `;case"history":return o.dy`
          <history-view
            theme=${this.theme}
            class="may-scroll"
            expandedPuzzle=${this.puzzleSeed}
          ></history-view>
        `}}connectedCallback(){super.connectedCallback(),d.addEventListener("current-theme",this.themeHandler),window.addEventListener("popstate",this.popstateHandler),window.addEventListener("focus",this.dailyPuzzleUpdater),window.addEventListener("blur",this.dailyPuzzleUpdater),document.addEventListener("visibilitychange",this.dailyPuzzleUpdater)}disconnectedCallback(){super.disconnectedCallback(),d.removeEventListener("current-theme",this.themeHandler),window.removeEventListener("popstate",this.popstateHandler),window.removeEventListener("focus",this.dailyPuzzleUpdater),window.removeEventListener("blur",this.dailyPuzzleUpdater),document.removeEventListener("visibilitychange",this.dailyPuzzleUpdater)}interpretHash(){var e;const{hash:t}=location;let i="",s="";if(t.startsWith("#")){const{pathname:o}=new URL(`${location.origin}/${t.substring(1)}`),r=o.substring(1).split("/");i=r[0],s=null!==(e=r[1])&&void 0!==e?e:""}"history"!==i&&(i="play"),"play"!==i||s||(s=Y.daily().seed),this.page=i,this.puzzleSeed=s,this.resumeImmediately=!1,this.updateLocation()}updateLocation(){const{page:e,puzzleSeed:t}=this,i=t?`#${e}/${t}`:`#${e}`;i!==location.hash&&history.replaceState(null,"",i)}handlePlayPuzzle(e){var t;this.page="play",this.puzzleSeed=e.detail.puzzleId.seed,this.resumeImmediately=null!==(t=e.detail.resume)&&void 0!==t&&t,this.updateLocation()}handleShowHistory(e){var t,i;this.page="history",this.puzzleSeed=null!==(i=null===(t=e.detail)||void 0===t?void 0:t.seed)&&void 0!==i?i:"",this.updateLocation()}};ke.styles=[A,o.iv`
    :host {
      display: block;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      --background: ${O};
      --text-color: ${R};
      --highlight-background: ${M};
      --scrollbar-thumb-color: #bbb;
      --scrollbar-track-color: #eee;
      background: var(--background);
      color: var(--text-color);
    }

    :host([theme='dark']) {
      --background: ${_};
      --text-color: ${W};
      --highlight-background: ${B};
      --scrollbar-thumb-color: #555;
      --scrollbar-track-color: #333;
    }
  `],xe([(0,r.Cb)({reflect:!0})],ke.prototype,"theme",void 0),xe([(0,r.SB)()],ke.prototype,"page",void 0),xe([(0,r.SB)()],ke.prototype,"puzzleSeed",void 0),xe([(0,r.SB)()],ke.prototype,"resumeImmediately",void 0),ke=xe([(0,r.Mo)("leadpipe-wordgrid")],ke);var Se=i(379),Ce=i.n(Se),Le=i(795),Ee=i.n(Le),Re=i(569),We=i.n(Re),Oe=i(565),_e=i.n(Oe),Me=i(216),De=i.n(Me),Be=i(589),je=i.n(Be),He=i(914),Ae={};Ae.styleTagTransform=je(),Ae.setAttributes=_e(),Ae.insert=We().bind(null,"head"),Ae.domAPI=Ee(),Ae.insertStyleElement=De(),Ce()(He.Z,Ae),He.Z&&He.Z.locals&&He.Z.locals},401:(e,t,i)=>{var s=i.w[e.id];e.exports=s,i(975),s[""]()}}]);