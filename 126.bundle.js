"use strict";(self.webpackChunkleadpipe_wordgrid=self.webpackChunkleadpipe_wordgrid||[]).push([[126],{975:(e,t,i)=>{i.d(t,{Ad:()=>L,EW:()=>W,H6:()=>z,Or:()=>O,Wl:()=>C,eY:()=>E,fY:()=>R,h4:()=>k,hd:()=>T,m_:()=>I,p4:()=>x,tb:()=>$,uB:()=>_,ug:()=>S,yG:()=>P});var s=i(401);e=i.hmd(e);const o=new Array(32).fill(void 0);function r(e){return o[e]}o.push(void 0,null,!0,!1);let n=o.length;function a(e){const t=r(e);return function(e){e<36||(o[e]=n,n=e)}(e),t}let d=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});d.decode();let l=new Uint8Array;function c(){return 0===l.byteLength&&(l=new Uint8Array(s.memory.buffer)),l}function h(e,t){return d.decode(c().subarray(e,e+t))}function u(e){n===o.length&&o.push(o.length+1);const t=n;return n=o[t],o[t]=e,t}function p(e){const t=typeof e;if("number"==t||"boolean"==t||null==e)return`${e}`;if("string"==t)return`"${e}"`;if("symbol"==t){const t=e.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==t){const t=e.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(e)){const t=e.length;let i="[";t>0&&(i+=p(e[0]));for(let s=1;s<t;s++)i+=", "+p(e[s]);return i+="]",i}const i=/\[object ([^\]]+)\]/.exec(toString.call(e));let s;if(!(i.length>1))return toString.call(e);if(s=i[1],"Object"==s)try{return"Object("+JSON.stringify(e)+")"}catch(e){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:s}let m=0,g=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const f="function"==typeof g.encodeInto?function(e,t){return g.encodeInto(e,t)}:function(e,t){const i=g.encode(e);return t.set(i),{read:e.length,written:i.length}};function w(e,t,i){if(void 0===i){const i=g.encode(e),s=t(i.length);return c().subarray(s,s+i.length).set(i),m=i.length,s}let s=e.length,o=t(s);const r=c();let n=0;for(;n<s;n++){const t=e.charCodeAt(n);if(t>127)break;r[o+n]=t}if(n!==s){0!==n&&(e=e.slice(n)),o=i(o,s,s=n+3*e.length);const t=c().subarray(o+n,o+s);n+=f(e,t).written}return m=n,o}let v=new Int32Array;function y(){return 0===v.byteLength&&(v=new Int32Array(s.memory.buffer)),v}function b(e,t){if(!(e instanceof t))throw new Error(`expected instance of ${t.name}`);return e.ptr}function z(e,t){try{const r=s.__wbindgen_add_to_stack_pointer(-16),n=function(e,t){const i=t(1*e.length);return c().set(e,i/1),m=e.length,i}(e,s.__wbindgen_malloc),a=m;b(t,P),s.obfuscate(r,n,a,t.ptr);var i=y()[r/4+0],o=y()[r/4+1];return h(i,o)}finally{s.__wbindgen_add_to_stack_pointer(16),s.__wbindgen_free(i,o)}}function x(e,t){try{const h=s.__wbindgen_add_to_stack_pointer(-16),u=w(e,s.__wbindgen_malloc,s.__wbindgen_realloc),p=m;b(t,P),s.deobfuscate(h,u,p,t.ptr);var i=y()[h/4+0],o=y()[h/4+1],r=y()[h/4+2];if(y()[h/4+3])throw a(r);var n=(d=i,l=o,c().subarray(d/1,d/1+l)).slice();return s.__wbindgen_free(i,1*o),n}finally{s.__wbindgen_add_to_stack_pointer(16)}var d,l}const $=Object.freeze({Level1:0,0:"Level1",Level2:1,1:"Level2",Level3:2,2:"Level3",Level4:3,3:"Level4",Level5:4,4:"Level5",Level6:5,5:"Level6",Level7:6,6:"Level7",Level8:7,7:"Level8",Hacker:8,8:"Hacker",Offensive:9,9:"Offensive",Profane:10,10:"Profane"});class P{static __wrap(e){const t=Object.create(P.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();s.__wbg_jsrandom_free(e)}constructor(e){const t=w(e,s.__wbindgen_malloc,s.__wbindgen_realloc),i=m,o=s.jsrandom_new(t,i);return P.__wrap(o)}next(){return s.jsrandom_next(this.ptr)}nextByte(){return s.jsrandom_nextByte(this.ptr)}choice(e){return 0!==s.jsrandom_choice(this.ptr,e)}range(e,t){return s.jsrandom_range(this.ptr,e,t)}normal(e,t){return s.jsrandom_normal(this.ptr,e,t)}}function S(e){a(e)}function k(e,t){return u(h(e,t))}function T(e,t){return u(new Error(h(e,t)))}function I(e){return u(r(e))}function C(e,t,i){r(e)[a(t)]=a(i)}function E(e){return"string"==typeof r(e)}function L(){return u(new Map)}function _(){return u(new Object)}function W(e,t,i){return u(r(e).set(r(t),r(i)))}function R(e,t){const i=w(p(r(t)),s.__wbindgen_malloc,s.__wbindgen_realloc),o=m;y()[e/4+1]=o,y()[e/4+0]=i}function O(e,t){throw new Error(h(e,t))}},914:(e,t,i)=>{i.d(t,{Z:()=>k});var s=i(81),o=i.n(s),r=i(645),n=i.n(r),a=i(667),d=i.n(a),l=new URL(i(435),i.b),c=new URL(i(675),i.b),h=new URL(i(44),i.b),u=new URL(i(635),i.b),p=new URL(i(298),i.b),m=new URL(i(353),i.b),g=new URL(i(573),i.b),f=new URL(i(860),i.b),w=n()(o()),v=d()(l),y=d()(c),b=d()(h),z=d()(u),x=d()(p),$=d()(m),P=d()(g),S=d()(f);w.push([e.id,'.material-icons{font-family:"Material Icons";font-weight:normal;font-style:normal;font-size:24px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}@font-face{font-family:"Material Icons";font-style:normal;font-display:block;font-weight:400;src:url('+v+') format("woff2"),url('+y+') format("woff")}@font-face{font-family:"Merriweather Sans";font-style:normal;font-display:block;font-weight:800;src:url('+b+') format("woff2"),url('+z+') format("woff")}@font-face{font-family:"Prompt";font-style:normal;font-display:block;font-weight:400;src:url('+x+') format("woff2"),url('+$+') format("woff")}@font-face{font-family:"Prompt";font-style:normal;font-display:block;font-weight:700;src:url('+P+') format("woff2"),url('+S+') format("woff")}',""]);const k=w},126:(e,t,i)=>{i.r(t);class s extends EventTarget{addEventListener(e,t,i){super.addEventListener(e,t,i)}removeEventListener(e,t,i){super.removeEventListener(e,t,i)}}var o=i(392),r=i(685),n=function(e,t,i,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let a=class extends o.oi{constructor(){super(...arguments),this.name="",this.size=""}render(){return o.dy`<span class="material-icons ${this.size}">${this.name}</span>`}};a.styles=o.iv`
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
  `,n([(0,r.Cb)()],a.prototype,"name",void 0),n([(0,r.Cb)()],a.prototype,"size",void 0),a=n([(0,r.Mo)("mat-icon")],a);const d=new s;let l="light",c="auto";{const e=window.localStorage.getItem("preferredTheme");switch(e){case"dark":case"light":c=e}}function h(){return"auto"===c?l:c}function u(e){if(e!==c){const t=h();c=e,window.localStorage.setItem("preferredTheme",e),p(t)}}function p(e){const t=h();t!==e&&d.dispatchEvent(new CustomEvent("current-theme",{detail:t}))}const m=window.matchMedia("(prefers-color-scheme: dark)");function g(e){const t=h();l=e.matches?"dark":"light",p(t)}g(m),m.addEventListener("change",g);let f=!0;function w(){return f}function v(e){f=e,window.localStorage.setItem("showTimer",String(e)),d.dispatchEvent(new CustomEvent("show-timer",{detail:e}))}"false"===window.localStorage.getItem("showTimer")&&(f=!1);var y=function(e,t,i,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let b=class extends o.oi{constructor(){super(...arguments),this.gameState=null,this.timerRunning=!1}render(){const{gameState:e}=this;return e?w()?o.dy`
      ${this.remainingTime()}<br />
      <a @click=${this.hideTimer} title="Hide timer">
        <mat-icon name="visibility_off"></mat-icon>
      </a>
    `:o.dy`
        <a @click=${this.showTimer} title="Show timer">
          <mat-icon name="visibility"></mat-icon>
        </a>
      `:""}updated(e){var t,i;const s=null!==(i=null===(t=this.gameState)||void 0===t?void 0:t.msRemaining)&&void 0!==i?i:0;s>0?(window.setTimeout((()=>this.requestUpdate()),(s-1)%1e3+1),this.timerRunning=!0):this.timerRunning&&(this.timerRunning=!1,this.dispatchEvent(new CustomEvent("timer-expired",{detail:w(),bubbles:!0,composed:!0})))}remainingTime(){var e,t;const i=null!==(t=null===(e=this.gameState)||void 0===e?void 0:e.msRemaining)&&void 0!==t?t:0,s=Math.ceil(i/1e3);return`${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`}showTimer(){v(!0),this.requestUpdate()}hideTimer(){v(!1),this.requestUpdate()}};b.styles=o.iv`
    :host {
      display: block;
    }

    a {
      cursor: pointer;
    }
  `,y([(0,r.Cb)()],b.prototype,"gameState",void 0),b=y([(0,r.Mo)("game-timer")],b);var z=i(338);class x{constructor(e,t){this.row=e,this.col=t}isAdjacentTo(e){return this!==e&&Math.abs(this.row-e.row)<=1&&Math.abs(this.col-e.col)<=1}}const $=(()=>{const e=[0,1,2,3,4,5];return e.map((t=>e.map((e=>new x(t,e)))))})();function P(e,t){return $[e][t]}function S(e){const t=[];for(let i=0;i<e;++i)for(let s=0;s<e;++s)t.push(P(i,s));return t}var k=i(975);let T=Date.now();function I(){T=Date.now()}function C(e){let t=k.tb[e];return t.startsWith("Level")&&(t="Level "+t.substring(5)),t}function E(e,t){return 1===t?e:`${e}s`}function L(e,t){return`${e} ${E(t,e)}`}function _(e,t){return e?`${e.found} / ${e.total}\n  ${E(t,e.total)}\n  (${Math.round(e.found/e.total*100)}%)`:""}function W(e){return new Promise((t=>setTimeout(t,e)))}async function R(e,t){const i=t.lastPlayed||new Date;I(),await e.put("games",{puzzleId:t.puzzleId.seed,lastPlayed:i,elapsedMs:t.elapsedMs,wordsFound:t.wordsToStore})}const O=o.iv`#444`,D=o.iv`#ccc`,M=o.iv`white`,B=o.iv`darkslategray`,j=o.iv`#aecbfa`,A=o.iv`
  ${j}cc
`,U=o.iv`#337`,H=o.iv`
  ${U}c
`,F=o.iv`#808080`,G=o.iv`
  .icon-button {
    color: inherit;
    background: inherit;
    border: inherit;
    padding: 0;
    cursor: pointer;
  }
`,N=o.iv`
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
`;var q=function(e,t,i,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const K="Merriweather Sans";let Q=class extends o.oi{constructor(){super(...arguments),this.theme="light",this.padding=20,this.puzzleId=null,this.puzzle=null,this.isPaused=!0,this.isInteractive=!1,this.keyHandler=e=>this.handleKeyDown(e),this.resizeObserver=new ResizeObserver((async()=>{this.canvas&&(this.calcMetrics(),await W(0),this.draw())})),this.trail=[],this.prefixes=[],this.pendingKeyboardInput="",this.pendingInputTimeoutId=0,this.sideSpan=0,this._cellSpan=0,this.centers=[],this.cellCenter=e=>{const{centers:t}=this;return[t[e.col],t[e.row]]},this.font=K,this.textOffset=0}render(){const{sideSpan:e}=this,t=e/devicePixelRatio;return o.dy`
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
    `}set externalPath(e){this.trail.length=0,this.trail.push(...e.locs),this.requestUpdate("externalPath",{locs:[]})}get externalPath(){return{locs:this.trail}}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this),this.isInteractive&&window.addEventListener("keydown",this.keyHandler)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this),window.removeEventListener("keydown",this.keyHandler)}canvasChanged(e){e instanceof HTMLCanvasElement&&(this.canvas=e,this.ctx=e.getContext("2d"),this.calcMetrics(),this.draw())}shouldInteract(){return this.isInteractive&&!this.isPaused}convertCoordinateToCellNumber(e){const{sideSpan:t,puzzleId:i}=this;if(!(e<0||e>=t)&&i)return Math.floor(e/(t/i.spec.size))}convertPointToLoc(e){const t=this.canvas.getBoundingClientRect(),i=(e.x-t.x)*devicePixelRatio,s=(e.y-t.y)*devicePixelRatio,o=this.convertCoordinateToCellNumber(i),r=this.convertCoordinateToCellNumber(s);if(void 0===o||void 0===r)return;const n=P(r,o),[a,d]=this.cellCenter(n);return Math.hypot(i-a,s-d)<=this.cellSpan/2*.9?n:void 0}pushLoc(e){const{puzzle:t,trail:i,prefixes:s}=this;if(!t||!e)return;const o=this.trail.indexOf(e);if(o>=0){if(o===i.length-2){i.pop(),s[0].endsWith("Q")&&(s.length/=2);for(let e=0;e<s.length;++e)s[e]=s[e].substring(0,s[e].length-1)}return void this.dispatchEvent(new CustomEvent("words-traced",{detail:{words:[...s]}}))}if(i.length&&!e.isAdjacentTo(i[i.length-1]))return;i.push(e);const r=t.grid[e.row].charAt(e.col);if(s.length)for(let e=0;e<s.length;++e)s[e]+=r;else s.push(r);"Q"===r&&s.forEach((e=>s.push(e+"U"))),this.dispatchEvent(new CustomEvent("words-traced",{detail:{words:[...s]}}))}handlePointerHovering(e){if(!this.shouldInteract())return;const t=this.convertPointToLoc(e);this.trail.length?this.pushLoc(t):t&&this.puzzle?this.hoverLoc=t:this.hoverLoc=void 0,this.draw()}handlePointerEnter(e){this.handlePointerHovering(e)}handlePointerLeave(e){this.hoverLoc=void 0,this.draw()}handlePointerCancel(e){var t;null===(t=this.canvas)||void 0===t||t.releasePointerCapture(e.pointerId),this.dispatchEvent(new CustomEvent("words-selected",{detail:{words:[]}})),this.resetPointerInput(),this.draw()}handlePointerDown(e){if(!this.shouldInteract())return;const t=this.convertPointToLoc(e);t&&this.puzzle&&(this.resetPointerInput(),this.pendingKeyboardInput="",this.pushLoc(t),this.hoverLoc=void 0,this.canvas.setPointerCapture(e.pointerId),this.draw())}handlePointerUp(e){var t;this.shouldInteract()&&(null===(t=this.canvas)||void 0===t||t.releasePointerCapture(e.pointerId),this.puzzle&&this.dispatchEvent(new CustomEvent("words-selected",{detail:{words:[...this.prefixes]}})),this.resetPointerInput(),this.draw())}resetPointerInput(){this.trail.length=0,this.prefixes.length=0,this.hoverLoc=void 0}clearPendingInputTimeout(){this.pendingInputTimeoutId&&(window.clearTimeout(this.pendingInputTimeoutId),this.pendingInputTimeoutId=0)}handleKeyDown(e){if(!this.shouldInteract())return;this.clearPendingInputTimeout(),this.resetPointerInput();let t=!1;switch(e.key){case"Enter":this.pendingKeyboardInput.length&&(this.dispatchEvent(new CustomEvent("words-selected",{detail:{words:[this.pendingKeyboardInput],checkPossible:!0}})),this.pendingKeyboardInput="");break;case"Esc":case"Escape":case"Clear":this.pendingKeyboardInput="",t=!0;break;case"Backspace":case"Del":case"Delete":this.pendingKeyboardInput.length&&(this.pendingKeyboardInput=this.pendingKeyboardInput.substring(0,this.pendingKeyboardInput.length-1),t=!0);break;default:if(1===e.key.length){const i=e.key.toUpperCase();i>="A"&&i<="Z"&&(this.pendingKeyboardInput+=i,t=!0)}}if(t){const e={words:this.pendingKeyboardInput?[this.pendingKeyboardInput]:[],checkPossible:!0};this.dispatchEvent(new CustomEvent("words-traced",{detail:e}))}this.pendingKeyboardInput&&(this.pendingInputTimeoutId=window.setTimeout((()=>{this.pendingKeyboardInput="",this.dispatchEvent(new CustomEvent("words-selected",{detail:{words:[]}}))}),2500))}updated(e){let t=!1;e.has("puzzleId")&&(t=!0,this.resetPointerInput(),this.calcMetrics()),e.has("externalPath")&&(t=!0),(e.has("puzzle")||e.has("isPaused"))&&(t=!0,this.resetPointerInput()),e.has("theme")&&this.canvas&&(this.updateBackground(),t=!0),t&&this.ctx&&this.draw()}updateBackground(){}get cellSpan(){return this._cellSpan}calcMetrics(){const e=this.getBoundingClientRect(),{padding:t,puzzleId:i}=this;if(!i)return;const s=i.spec.size;let o=Math.min(e.width,e.height);o-=2*t;let r=devicePixelRatio*o;const n=this._cellSpan=Math.max(0,Math.floor((r-s)/s));this.sideSpan=s*n;const a=[],d=n/2;for(let e=0;e<s;++e)a[e]=n*e+d;this.centers=a,this.ctx&&this.setUpFonts()}setUpFonts(){const e=Math.round(.65*this.cellSpan);this.font=`800 ${e}px ${K}`,this.textOffset=this.calcTextOffset(this.font)}calcTextOffset(e){const{ctx:t}=this;t.font=e,t.textBaseline="middle";const i=t.measureText("AZ");return Math.round((i.actualBoundingBoxAscent-i.actualBoundingBoxDescent)/2)}pausedGrid(e){switch(e){case 4:default:return["LEAD","PIPE","WORD","GRID"];case 5:return["LEAD "," PIPE","     ","WORD "," GRID"];case 6:return["  LEAD","  PIPE","      ","      ","WORD  ","GRID  "]}}draw(){const{ctx:e}=this;e.setTransform({});const{width:t,height:i}=e.canvas;e.clearRect(0,0,t,i),this.drawGrid(),this.drawLetters(),this.drawTrail()}drawGrid(){const{cellSpan:e,hoverLoc:t,trail:i,ctx:s,theme:o,puzzleId:r,cellCenter:n}=this;if(!r)return;const a=e/2;if(t||i.length){s.fillStyle="light"===o?j.cssText:U.cssText,s.beginPath();const[e,r]=n(t||i[0]);s.arc(e,r,a,0,2*Math.PI),s.fill()}s.strokeStyle=F.cssText,s.lineWidth=1,s.beginPath();for(const e of r.spec.locs){const[t,i]=n(e);s.moveTo(t+a,i),s.arc(t,i,a,0,2*Math.PI)}s.stroke()}drawLetters(){const{isPaused:e,puzzle:t,puzzleId:i,ctx:s,theme:o,cellCenter:r,textOffset:n}=this;if(!i)return;const a=e||!t?this.pausedGrid(i.spec.size):t.grid;a===(null==t?void 0:t.grid)?s.fillStyle="light"===o?O.cssText:D.cssText:s.fillStyle="orange",s.textAlign="center",s.textBaseline="middle",s.font=this.font;for(const e of i.spec.locs){let t=a[e.row].charAt(e.col);"Q"===t&&(t="Qu");const[i,o]=r(e);s.fillText(String(t),i,o+n)}}drawTrail(){const{trail:e}=this;if(!e.length)return;const{ctx:t,theme:i,cellSpan:s,cellCenter:o}=this;t.strokeStyle="light"===i?A.cssText:H.cssText,t.lineCap="round",t.lineJoin="round",t.lineWidth=s/6,t.beginPath(),t.moveTo(...o(e[0]));for(const i of e)t.lineTo(...o(i));t.stroke()}};Q.styles=[o.iv`
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
    `],q([(0,r.Cb)({reflect:!0})],Q.prototype,"theme",void 0),q([(0,r.Cb)({type:Number})],Q.prototype,"padding",void 0),q([(0,r.Cb)({hasChanged:(e,t)=>!(e===t||e&&t&&e.seed===t.seed)})],Q.prototype,"puzzleId",void 0),q([(0,r.Cb)()],Q.prototype,"puzzle",void 0),q([(0,r.Cb)()],Q.prototype,"isPaused",void 0),q([(0,r.Cb)({type:Boolean,reflect:!0})],Q.prototype,"isInteractive",void 0),q([(0,r.Cb)()],Q.prototype,"externalPath",null),q([(0,r.SB)()],Q.prototype,"sideSpan",void 0),Q=q([(0,r.Mo)("grid-view")],Q);let J=class extends o.oi{render(){return o.dy`
      <a
        href="https://github.com/leadpipe/wordgrid/issues/new"
        target="_blank"
        title="File a bug report"
        ><mat-icon name="bug_report"></mat-icon></a
      ><a
        href="https://github.com/leadpipe/wordgrid/#readme"
        target="_blank"
        title="Help"
        ><mat-icon name="help"></mat-icon></a
      ><a @click=${this.openSettings} title="Settings"
        ><mat-icon name="settings"></mat-icon
      ></a>
    `}openSettings(){this.dispatchEvent(new CustomEvent("show-settings",{bubbles:!0,composed:!0}))}};J.styles=o.iv`
    :host {
      display: block;
    }

    a {
      cursor: pointer;
    }

    :host a {
      color: var(--text-color);
    }
`,J=function(e,t,i,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}([(0,r.Mo)("meta-panel")],J);class Z{constructor(e,t){this.last=e;const i=new Set(null==t?void 0:t.locs);i.add(e),this.locs=i}}class Y{constructor(e){this.letter=e,this.paths=[]}}class V{constructor(e,t){this.spec=e,this.grid=t,this.letterLocs=new Map,this.wordPaths=[];const{letterLocs:i}=this;for(const s of e.locs){const e=t[s.row].charAt(s.col);i.has(e)?i.get(e).push(s):i.set(e,[s])}}findPaths(e){var t,i,s,o;const{letterLocs:r,wordPaths:n}=this;n.length>e.length&&(n.length=e.length);for(let s=0;s<e.length;++s){const o=e.charAt(s);if(s<n.length&&n[s].letter!==o&&(n.length=s),s===n.length){const a=new Y(o);if(n.push(a),0===s)for(const e of null!==(t=r.get(o))&&void 0!==t?t:[])a.paths.push(new Z(e));else{const t=n[s-1].paths;for(const e of null!==(i=r.get(o))&&void 0!==i?i:[])for(const i of t)!i.locs.has(e)&&i.last.isAdjacentTo(e)&&a.paths.push(new Z(e,i));"U"===o&&"Q"===e.charAt(s-1)&&a.paths.push(...t)}}}return null!==(o=null===(s=n[e.length-1])||void 0===s?void 0:s.paths)&&void 0!==o?o:[]}}var X,ee;!function(e){e.MAKE_GRID="MAKE_GRID"}(X||(X={})),function(e){e.GRID="GRID",e.UNKNOWN_VERSION="UNKNOWN_VERSION"}(ee||(ee={}));const te=[{name:"Small",size:4,minLength:3,timerMinutes:3,locs:S(4)},{name:"Medium",size:5,minLength:4,timerMinutes:3,locs:S(5)},{name:"Large",size:6,minLength:5,timerMinutes:4,locs:S(6)}],ie=new Map(te.map((e=>[e.size,e]))),se=new Map(te.map((e=>[e.name.toLowerCase(),e])));class oe{constructor(e,t,i,s){if(this.version=e,this.dateString=t,this.spec=i,this.counter=s,!ne(t))throw new Error(`Invalid date string '${t}'`)}get seed(){return`${this.version}:${this.dateString}:${this.spec.size}:${this.counter}`}next(){return new oe(this.version,this.dateString,this.spec,1+this.counter)}toMakeGridMessage(){return{type:X.MAKE_GRID,version:this.version,seed:this.seed,size:this.spec.size,minLength:this.spec.minLength}}static daily(e=new Date){const t=new k.yG(re(e)),i=function(e){return te[Math.floor(e.range(0,te.length))]}(t);return t.free(),oe.forSpec(i,e)}static forSpec(e,t=new Date,i=1){return new oe(1,re(t),e,i)}static fromSeed(e){const t=e.split(":");if(4===t.length){const e=Number(t[0]),i=t[1],s=Number(t[2]),o=Number(t[3]);if(!isNaN(e)&&ne(i)&&function(e){return ie.has(e)}(s)&&!isNaN(o))return new oe(e,i,function(e){const t=ie.get(e);if(!t)throw new Error(`Invalid grid size ${e}`);return t}(s),o)}throw new Error(`Seed string does not appear to be from PuzzleId: ${e}`)}}function re(e){return`${String(e.getFullYear()).padStart(4,"0")}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function ne(e){const t=e.split("-").map(Number);return 3===t.length&&!t.some(isNaN)&&re(new Date(t[0],t[1]-1,t[2]))===e}class ae{constructor(e,t,i,s){this.game=e,this.person=t,this.before=i,this.after=s}setUniqueWords(e){const t={kept:{words:0,points:0},lost:{words:0,points:0}};for(const i of this.before){const s=e.has(i)?t.kept:t.lost;++s.words,s.points+=ge.scoreWord(i)}this.result=t}getWordCounts(e){var t;const i=null!==(t=this.game.wordsByCategory.get(e))&&void 0!==t?t:new Set;return{total:i.size,found:de(i,this.before)+de(i,this.after)}}}function de(e,t){e.size>t.size&&([e,t]=[t,e]);let i=0;for(const s of e)t.has(s)&&++i;return i}var le;!function(e){e[e.TOO_SHORT=0]="TOO_SHORT",e[e.NOT_A_WORD=1]="NOT_A_WORD",e[e.WORD=2]="WORD",e[e.DUPLICATE=3]="DUPLICATE",e[e.IMPOSSIBLE=4]="IMPOSSIBLE"}(le||(le={}));var ce=i(998);function he(e){return"object"==typeof e.firstBits}function ue(){return(0,ce.X3)("wordgrid",1,{upgrade(e){e.createObjectStore("games",{keyPath:"puzzleId"}).createIndex("by-last-played","lastPlayed");const t=e.createObjectStore("shares",{autoIncrement:!0});t.createIndex("by-person","person"),t.createIndex("by-puzzle-id","puzzleId")}})}function pe(e,t){if(e===t)return!0;if(!e||!t)return!1;if(e.length!==t.length)return!1;for(let i=0,s=e.length;i<s;++i)if(e[i]!==t[i])return!1;return!0}function me(e,t){return!!he(e)&&pe(e.firstBits,t.firstBits)&&pe(e.secondBits,t.secondBits)}class ge{constructor(e,t,i=0,s=0,o=[],r=!1,n=null){this.puzzleId=e,this.puzzle=t,this.found=new Set,this.reverseFound=[],this.earnedPointsCache=0,this.priorElapsedMs=0,this.resumedTimestamp=0,this.numFoundWithinTimeLimit=0,this.complete=!1,this.lastPlayedTimestamp=0,this.pathFinder=null;const a=new Map;let d=0;for(const[e,i]of t.words.entries()){let t=a.get(i);void 0===t&&(t=new Set,a.set(i,t)),t.add(e),d+=ge.scoreWord(e)}this.wordsByCategory=a,this.points={found:0,total:d},this.categories=[...a.keys()].sort(((e,t)=>e-t)),this.priorElapsedMs=i,this.numFoundWithinTimeLimit=s;for(const e of o)this.addPreviouslyFoundWord(e),this.found.size<=s&&(this.earnedPointsCache+=ge.scoreWord(e));this.complete=r,this.lastPlayedTimestamp=n?n.getTime():0}static scoreWord(e){switch(e.length){case 3:case 4:return 1;case 5:return 2;case 6:return 3;case 7:return 5;case 8:return 11;default:return 2*e.length}}judgeWord(e,t){return this.found.has(e)?le.DUPLICATE:this.puzzle.words.has(e)?le.WORD:t&&!this.isPossible(e)?le.IMPOSSIBLE:e.length<this.puzzleId.spec.minLength?le.TOO_SHORT:le.NOT_A_WORD}isPossible(e){return this.findPaths(e).length>0}findPaths(e){let{pathFinder:t}=this;return t||(this.pathFinder=t=new V(this.puzzleId.spec,this.puzzle.grid)),t.findPaths(e)}addFoundWord(e,t){if(this.isPaused)throw new Error("This game is paused");const i=this.judgeWord(e,t);return i===le.WORD&&(this.addPreviouslyFoundWord(e),this.timeExpired||(++this.numFoundWithinTimeLimit,this.earnedPointsCache+=ge.scoreWord(e)),this.lastPlayedTimestamp=Date.now()),i}addPreviouslyFoundWord(e){this.found.add(e),this.reverseFound.unshift(e);const t=ge.scoreWord(e);this.points.found+=t,this.found.size===this.puzzle.words.size&&this.markComplete()}getWordCounts(){return{found:this.found.size,total:this.puzzle.words.size}}getWordPoints(){return{...this.points}}get earnedPoints(){return this.earnedPointsCache}getWordCategories(){return this.categories}getFoundWords(e){return void 0===e?this.reverseFound:this.reverseFound.filter((t=>this.puzzle.words.get(t)===e))}asSharedGameState(e){return this.convertToSharedGamesState(e,this.getWordsInProgress())}toSharedGameState(e){if(e.puzzleId!==this.puzzle.message.seed)throw new Error(`Wrong shared game: ${e.puzzleId} instead of ${this.puzzle.message.seed}`);return this.convertToSharedGamesState(e.person,ge.reconstructWords(this.puzzle,e.wordsFound))}getWordsInProgress(){return{words:[...this.found],cutoff:this.numFoundWithinTimeLimit}}convertToSharedGamesState(e,t){const i=t.words,s=i.splice(t.cutoff);return new ae(this,e,new Set(i),new Set(s))}getWords(e){return void 0===e?[...this.puzzle.words.keys()]:[...this.puzzle.words.keys()].filter((t=>this.puzzle.words.get(t)===e))}get numWordsFoundBeforeTimeLimit(){return this.numFoundWithinTimeLimit}get isStarted(){return this.lastPlayedTimestamp>0}get isPaused(){return 0===this.resumedTimestamp}get elapsedMs(){let e=this.priorElapsedMs;return 0!==this.resumedTimestamp&&(e+=Date.now()-this.resumedTimestamp),e}get timeExpired(){return 0===this.msRemaining}get msRemaining(){return Math.max(0,6e4*this.puzzleId.spec.timerMinutes-this.elapsedMs)}get lastPlayed(){return this.lastPlayedTimestamp?new Date(this.lastPlayedTimestamp):null}resume(){if(this.complete)throw new Error("Can't resume a complete game");this.lastPlayedTimestamp=Date.now(),this.isPaused&&(this.resumedTimestamp=this.lastPlayedTimestamp)}pause(){this.lastPlayedTimestamp=Date.now(),this.isPaused||(this.priorElapsedMs=this.elapsedMs,this.resumedTimestamp=0)}markComplete(){this.pause(),this.complete=!0}get isComplete(){return this.complete}get wordsToStore(){if(!this.complete)return this.getWordsInProgress();const e=[...this.found],t=e.splice(this.numFoundWithinTimeLimit),i={firstBits:fe(e,function(e){const t=new Map;let i=0;for(const s of e)t.set(s,i++);return t}(this.puzzle.words.keys()))};if(t.length){const s=new Map,o=new Set(e);let r=0;for(const e of this.puzzle.words.keys())o.has(e)||s.set(e,r++);i.secondBits=fe(t,s)}return i}static reconstructWords(e,t){const i=[...e.words.keys()],s=we(i,t.firstBits),o=s.length;if(t.secondBits){const e=new Set(i);for(const t of s)e.delete(t);s.push(...we([...e],t.secondBits))}return{words:s,cutoff:o}}static fromDbRecord(e,t){let i=e.wordsFound,s=!1;return he(i)&&(i=ge.reconstructWords(t,i),s=!0),new ge(oe.fromSeed(t.message.seed),t,e.elapsedMs,i.cutoff,i.words,s,e.lastPlayed)}}function fe(e,t){const i=new Uint8Array(Math.ceil(t.size/8));for(const s of e){const e=t.get(s),o=7&e;i[Math.floor(e/8)]|=1<<o}return i}function we(e,t){const i=[];for(let s=0;s<t.length;++s){const o=t[s];if(o)for(let t=0;t<8;++t)o&1<<t&&i.push(e[8*s+t])}return i}var ve=function(e,t,i,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ye=class extends o.oi{constructor(){super(...arguments),this.word="",this.category=null,this.theme="light",this.open=!1,this.timeoutId=0}render(){const{category:e}=this,t=ge.scoreWord(this.word);return o.dy`
      <a @click=${this.toggle}>${this.word}</a>
      ${this.open?o.dy`
            <span class="more">
              [${e?`${C(e)} —`:""}${t}
              point${t>1?"s":""} —
              <a
                href="https://www.google.com/search?q=define+%2B${this.word}+OR+${this.word}"
                target="_blank"
                >look up</a
              >]
            </span>
          `:""}
    `}toggle(e){this.open=!this.open,this.dispatchEvent(new CustomEvent("word-expanded",{detail:this.open?this.word:"",bubbles:!0,composed:!0})),this.timeoutId&&(window.clearTimeout(this.timeoutId),this.timeoutId=0),this.open&&(this.timeoutId=window.setTimeout((()=>{this.open&&this.toggle(),this.timeoutId=0}),2500))}};ye.styles=o.iv`
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
  `,ve([(0,r.Cb)()],ye.prototype,"word",void 0),ve([(0,r.Cb)()],ye.prototype,"category",void 0),ve([(0,r.Cb)()],ye.prototype,"theme",void 0),ve([(0,r.SB)()],ye.prototype,"open",void 0),ye=ve([(0,r.Mo)("solution-word")],ye);var be=i(36);const ze=new Worker(new URL(i.p+i.u(975),i.b),{name:"words"});ze.onerror=e=>{console.log("Error on the words worker:",e)};const xe=[];function $e(e){return new Promise(((t,i)=>{xe.push({message:e.toMakeGridMessage(),resolve:t,reject:i}),1===xe.length&&Pe()}))}function Pe(){xe.length&&ze.postMessage(xe[0].message)}ze.onmessage=e=>{if(!xe.length)return void console.log("Unexpected message from the words worker");const t=xe.shift();if(Pe(),e.data.message.seed===(null==t?void 0:t.message.seed))switch(e.data.type){case ee.GRID:t.resolve(e.data);break;case ee.UNKNOWN_VERSION:t.reject(`The words worker can't honor the version we asked for, ${e.data.message.version}`)}else console.log(`Expected to hear about ${null==t?void 0:t.message.seed}, instead got`,e.data)};var Se=function(e,t,i,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ke=class extends o.oi{constructor(){super(...arguments),this.theme="light",this.puzzleId=oe.daily(),this.resumeImmediately=!1,this.dialogShowing=!1,this.loadingWords=!0,this.puzzle=null,this.gameState=null,this.db=ue(),this.foregroundnessHandler=()=>{"visible"!==document.visibilityState&&this.pausePlay()},this.windowBlurHandler=()=>{this.pausePlay()},this.spacebarHandler=e=>{var t;" "===e.key&&((null===(t=this.gameState)||void 0===t?void 0:t.isPaused)?this.resumePlay():this.pausePlay())},this.showTimerHandler=()=>{this.requestUpdate()},this.pendingWords=[],this.pendingWordsJudgements=[],this.pendingWordsTimeoutId=0}render(){var e,t,i;const{theme:s,gameState:r}=this,n=s===l?"light"===s?"dark":"light":"auto";return o.dy`
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
        <div><meta-panel></meta-panel></div>
      </div>
      <div id="summary">
        ${r?o.dy`
              <div>
                <b>${r.puzzleId.spec.minLength}</b> or more letters.
                <br class="opt-break" />
                ${w()?o.dy`
                      Earned ${L(r.earnedPoints,"point")}.
                    `:""}
              </div>
              <div>
                ${_(r.getWordCounts(),"word")},
                <br />
                ${_(null==r?void 0:r.getWordPoints(),"point")}.
              </div>
            `:""}
      </div>
      <div id="grid">
        <grid-view
          theme=${s}
          padding="${10}"
          isInteractive
          .isPaused=${null===(e=null==r?void 0:r.isPaused)||void 0===e||e}
          .puzzleId=${this.puzzleId}
          .puzzle=${this.puzzle}
          @words-traced=${this.wordsTraced}
          @words-selected=${this.wordsSelected}
        ></grid-view>
        <div id="below-grid">
          ${this.loadingWords?o.dy`
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
        ${(0,be.r)(null!==(i=null===(t=this.gameState)||void 0===t?void 0:t.getFoundWords())&&void 0!==i?i:[],(e=>e),(e=>o.dy`
            <div>
              <solution-word
                word=${e}
                theme=${this.theme}
                .category=${this.puzzle.words.get(e)}
              ></solution-word>
            </div>
          `))}
      </div>
    `}connectedCallback(){super.connectedCallback(),document.addEventListener("visibilitychange",this.foregroundnessHandler),window.addEventListener("blur",this.windowBlurHandler),window.addEventListener("keydown",this.spacebarHandler),d.addEventListener("show-timer",this.showTimerHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.foregroundnessHandler),window.removeEventListener("blur",this.windowBlurHandler),window.removeEventListener("keydown",this.spacebarHandler),d.removeEventListener("show-timer",this.showTimerHandler)}updated(e){e.has("puzzleId")&&this.requestAndLoadPuzzle(),e.has("dialogShowing")&&this.dialogShowing&&this.pausePlay()}setTheme(e){u(e.target.dataset.theme)}async requestAndLoadPuzzle(){const{puzzleId:e}=this;this.puzzle=null,this.gameState=null,this.style.setProperty("--grid-spec-size",e.spec.size.toString());const t=await $e(e);if(this.puzzleId.seed===e.seed)if(0===t.words.size){const{resumeImmediately:t}=this;this.dispatchEvent(new CustomEvent("play-puzzle",{detail:{puzzleId:e.next(),resumeImmediately:t},bubbles:!0,composed:!0}))}else this.loadPuzzle(t,e)}async loadPuzzle(e,t){const i=await this.db,s=await i.get("games",e.message.seed);this.gameState=s?ge.fromDbRecord(s,e):new ge(t,e),this.puzzle=e,this.gameState.isComplete?this.redirectToHistory():this.resumeImmediately&&this.gameState.resume()}async saveGame(){const{gameState:e}=this;e&&e.lastPlayed&&await R(await this.db,e)}async timerExpired(e){e.detail&&(await this.pausePlayAsync(),window.confirm("Time's up!\n\nKeep looking for words?\n\nCancel to quit.")?(await W(0),this.resumePlay()):await this.quit())}async goToHistory(){await this.saveGame(),this.redirectToHistory()}resumePlay(){var e;null===(e=this.gameState)||void 0===e||e.resume(),this.requestUpdate()}async pausePlayAsync(){var e;null===(e=this.gameState)||void 0===e||e.pause(),this.requestUpdate(),await this.saveGame()}pausePlay(){this.pausePlayAsync()}async quit(){var e;null===(e=this.gameState)||void 0===e||e.markComplete(),await this.saveGame(),this.redirectToHistory()}rotatePuzzle(e){const{puzzle:t}=this;if(t){const e=[...t.grid].reverse(),i=[];for(let t=0;t<e.length;++t)i.push(e.map((e=>e.charAt(t))).join(""));this.puzzle={...t,grid:i}}}flipPuzzle(e){const{puzzle:t}=this;if(t){const e=t.grid.map((e=>e.split("").reverse().join("")));this.puzzle={...t,grid:e}}}clearPendingWordsTimeout(){this.pendingWordsTimeoutId&&(window.clearTimeout(this.pendingWordsTimeoutId),this.pendingWordsTimeoutId=0)}wordsTraced(e){this.pendingWords=e.detail.words,this.pendingWordsJudgements=e.detail.words.map((t=>{var i,s;return null!==(s=null===(i=this.gameState)||void 0===i?void 0:i.judgeWord(t,e.detail.checkPossible))&&void 0!==s?s:le.NOT_A_WORD})),this.clearPendingWordsTimeout()}wordsSelected(e){var t;this.pendingWords=e.detail.words,this.pendingWordsJudgements=e.detail.words.map((t=>{var i,s;return null!==(s=null===(i=this.gameState)||void 0===i?void 0:i.addFoundWord(t,e.detail.checkPossible))&&void 0!==s?s:le.NOT_A_WORD})),this.clearPendingWordsTimeout(),this.pendingWordsJudgements.some((e=>e===le.WORD))&&(this.saveGame(),(null===(t=this.gameState)||void 0===t?void 0:t.isComplete)&&this.redirectToHistory()),this.pendingWordsTimeoutId=window.setTimeout((()=>{this.pendingWords=[]}),1e3)}judgementClass(e){switch(e){case le.TOO_SHORT:return"too-short-word";case le.NOT_A_WORD:default:return"not-a-word";case le.DUPLICATE:return"duplicate-word";case le.WORD:return"found-new-word";case le.IMPOSSIBLE:return"impossible-word"}}redirectToHistory(){this.dispatchEvent(new CustomEvent("show-history",{detail:this.puzzleId,bubbles:!0,composed:!0}))}};ke.styles=[N,o.iv`
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
    `],Se([(0,r.Cb)({reflect:!0})],ke.prototype,"theme",void 0),Se([(0,r.Cb)()],ke.prototype,"puzzleId",void 0),Se([(0,r.Cb)()],ke.prototype,"resumeImmediately",void 0),Se([(0,r.Cb)()],ke.prototype,"dialogShowing",void 0),Se([(0,r.Cb)()],ke.prototype,"loadingWords",void 0),Se([(0,r.SB)()],ke.prototype,"puzzle",void 0),Se([(0,r.SB)()],ke.prototype,"pendingWords",void 0),ke=Se([(0,r.Mo)("game-view")],ke);var Te=function(e,t,i,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ie=class extends o.oi{constructor(){super(...arguments),this.theme="light",this.expanded=!1,this.record=null,this.game=null,this.shares=[],this.uniqueWords=new Set,this.shareAs="",this.shareClipboardText="",this.copyToClipboardFailed=!1,this.db=ue(),this.prevShownWord="",this.shownWordCount=0,this.shownPath={locs:[]}}render(){var e;const{record:t,game:i,expanded:s,offsetLeft:r,shares:n}=this;if(!t)return"";this.style.setProperty("--left-inset",`${r}px`);const a=oe.fromSeed(t.puzzleId),d=null!==(e=null==i?void 0:i.getWordCategories())&&void 0!==e?e:[];return o.dy`
      <div>
        ${a.spec.name} puzzle #${a.counter} of
        ${a.dateString}
      </div>
      ${i?o.dy`
            <div>
              Earned ${L(i.earnedPoints,"point")} for finding
              ${L(i.numWordsFoundBeforeTimeLimit,"word")} within
              ${i.puzzleId.spec.timerMinutes} minutes.
            </div>
            <div>
              Found ${_(i.getWordCounts(),"word")},
              ${_(i.getWordPoints(),"point")}.
            </div>
            <div>
              ${i.isComplete?o.dy`
                    Complete
                    ${n.length>1?o.dy`
                          (${L(n.length-1,"other player")})
                        `:""}
                    ${s?this.renderShareForm():o.dy`&mdash; expand to share`}
                  `:o.dy`
                    Ongoing
                    <a @click=${this.resumeGame} title="Resume play">
                      <mat-icon name="play_circle"></mat-icon>
                    </a>
                    ${n.length>1?o.dy`
                          (${L(n.length-1,"other player")}
                          &mdash;
                          ${i.timeExpired?o.dy`quit
                                <a @click=${this.quitGame} title="Quit">
                                  <mat-icon name="stop_circle"></mat-icon>
                                </a>`:"finish game"}
                          to compare)
                        `:o.dy`&mdash;
                        ${i.timeExpired?o.dy`quit
                              <a @click=${this.quitGame} title="Quit">
                                <mat-icon name="stop_circle"></mat-icon>
                              </a>`:"finish game"}
                        to share `}
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
                            .puzzleId=${a}
                            .puzzle=${i.puzzle}
                            .externalPath=${this.shownPath}
                          ></grid-view>
                          <div id="all-words" class="may-scroll">
                            ${this.renderAllWords(i,d)}
                          </div>
                        </div>
                      `:o.dy`
                        <div id="ongoing">
                          ${d.map((e=>o.dy`
                              <div class="cat">${C(e)}</div>
                              ${[...i.getFoundWords(e)].sort().map((e=>o.dy`
                                  <div>
                                    <solution-word
                                      word=${e}
                                      theme=${this.theme}
                                    >
                                    </solution-word>
                                  </div>
                                `))}
                            `))}
                        </div>
                      `}
                `:""}
          `:o.dy` Loading... `}
    `}renderShareForm(){return o.dy`<form @submit=${this.shareGame}>
      Share as
      <input
        id="share-as"
        type="text"
        value=${this.shareAs}
        maxlength="50"
        placeholder="Name/nickname"
        @input=${this.handleShareAsUpdated}
      />
      ${this.shareAs?o.dy`<button
              id="share-button"
              type="submit"
              class="icon-button"
              title="Share"
              tabindex="0"
            >
              <mat-icon name="share"></mat-icon>
            </button>
            <input
              id="share-text-input"
              readonly
              value=${this.shareClipboardText}
              style="display: ${this.copyToClipboardFailed?"inline-block":"none"}"
            />
            ${this.shareClipboardText?this.copyToClipboardFailed?"Copy to clipboard to share":"Copied to clipboard":""}`:""}
    </form>`}renderAllWords(e,t){const{shares:i,uniqueWords:s}=this,r=Math.max(...i.map((e=>e.result.kept.points)));return this.style.setProperty("--names-appear",""+(i.length>1?1:0)),this.style.setProperty("--num-shares",`${i.length}`),o.dy`
      <table>
        <colgroup>
          <col class="word-column" />
          <col class="person-column" span=${i.length} />
        </colgroup>
        ${i.length>1?o.dy`
              <tr class="names-row">
                <th class="word-column"></th>
                ${i.map((e=>o.dy`<th
                      title=${e.person}
                      class=${e.result.kept.points===r?"winner":""}
                    >
                      ${e.person}
                    </th>`))}
              </tr>
              <tr>
                <td class="word-column"></td>
                ${i.map((e=>{const{result:t}=e;return o.dy`<td>
                    Kept ${L(t.kept.points,"point")}, lost
                    ${t.lost.points}.
                  </td>`}))}
              </tr>
            `:""}
        ${t.map((t=>o.dy`
            <tr class="cat-row">
              <th class="word-column">${C(t)}</th>
              ${i.map((e=>{return o.dy`
                  <th>${i=e.getWordCounts(t),`${i.found}/${i.total}`} words</th>
                `;var i}))}
            </tr>
            ${e.getWords(t).map((e=>o.dy`
                <tr>
                  <td class="word-column">
                    <solution-word
                      word=${e}
                      theme=${this.theme}
                      @word-expanded=${this.showWord}
                    ></solution-word>
                  </td>
                  ${i.map((t=>o.dy`
                      <td>
                        ${t.before.has(e)?o.dy`
                              <mat-icon name="check_circle_outline"></mat-icon>
                              ${s.has(e)?o.dy`<span class="unique"
                                    >+${ge.scoreWord(e)}</span
                                  >`:o.dy`<span class="duplicate">+0</span>`}
                            `:t.after.has(e)?o.dy` <mat-icon name="check"></mat-icon> `:""}
                      </td>
                    `))}
                </tr>
              `))}
          `))}
      </table>
    `}updated(e){e.has("record")&&this.loadGame()}showWord(e){const{game:t}=this;if(!t)return;const i=e.detail;if(i){i===this.prevShownWord?++this.shownWordCount:(this.shownWordCount=0,this.prevShownWord=i);const e=t.findPaths(i);this.shownPath=e[this.shownWordCount%e.length]}else this.shownPath={locs:[]}}async loadGame(){const{record:e}=this;if(!e)return;const t=await $e(oe.fromSeed(e.puzzleId)),i=ge.fromDbRecord(e,t),s=(await this.db).transaction("shares").store.index("by-puzzle-id"),o=[i.asSharedGameState("You")],r=new Set(o[0].before),n=new Set;for await(const t of s.iterate(e.puzzleId)){const e=i.toSharedGameState(t.value);o.push(e);for(const t of e.before)r.has(t)?(r.delete(t),n.add(t)):n.has(t)||r.add(t)}for(const e of o)e.setUniqueWords(r);this.shares=o,this.uniqueWords=r,this.game=i}handleShareAsUpdated(e){this.shareAs=e.target.value,this.shareClipboardText="",this.copyToClipboardFailed=!1}async shareGame(e){e.preventDefault(),e.stopPropagation(),this.shareClipboardText="",this.copyToClipboardFailed=!1;const{game:t,shareAs:i}=this;if(t){const{wordsToStore:e}=t;if(!he(e))return;const s=new k.yG(`${t.puzzleId.seed}:${i}`),o=k.H6(e.firstBits,s);let r=`${location.origin}${location.pathname}#share/${t.puzzleId.seed}/${encodeURIComponent(i)}/${o}`;e.secondBits&&(r+=`/${k.H6(e.secondBits,s)}`),s.free();const n="Leadpipe Wordgrid",a=`${i} earned ${L(t.earnedPoints,"point")}.  How will you do?`;let d=!1;if("share"in navigator)try{await navigator.share({title:n,text:a,url:r}),d=!0}catch(e){console.log("Unable to share",e)}let l=!1;if(!d){this.shareClipboardText=`${a}  ${r}`;try{await navigator.clipboard.writeText(this.shareClipboardText),l=!0}catch(e){console.log("Unable to write text to clipboard",e)}}this.copyToClipboardFailed=!d&&!l,this.copyToClipboardFailed&&(await 0,this.shareTextInput&&this.shareTextInput.select())}}resumeGame(){this.game&&this.dispatchEvent(new CustomEvent("play-puzzle",{detail:{puzzleId:this.game.puzzleId,resume:!0},bubbles:!0,composed:!0}))}async quitGame(){this.game&&(this.game.markComplete(),await R(await this.db,this.game),this.dispatchEvent(new CustomEvent("show-history",{detail:this.game.puzzleId,bubbles:!0,composed:!0})),this.requestUpdate())}toggleExpansion(){var e;const t=this.expanded||null===(e=this.game)||void 0===e?void 0:e.puzzleId;this.dispatchEvent(new CustomEvent("show-history",{detail:t,bubbles:!0,composed:!0}))}};Ie.styles=[G,N,o.iv`
      :host {
        display: block;
        --left-inset: 0px;
        --names-appear: 0;
        --num-shares: 1;
      }

      a {
        cursor: pointer;
      }

      #share-button {
        position: relative;
        top: 4px;
      }

      grid-view {
        width: 300px;
        height: 300px;
        flex: 0 0 auto;
      }

      #complete {
        display: flex;
        margin-left: calc(-1 * var(--left-inset) + ${8}px);
      }

      #all-words {
        height: 100vh;
        margin: 0 8px;
      }

      @media (min-height: 700px) and (max-width: 550px) {
        #complete {
          flex-direction: column;
        }

        grid-view {
          align-self: center;
        }

        #all-words {
          height: calc(100vh - 300px);
        }
      }

      #all-words > table {
        table-layout: fixed;
        border-collapse: collapse;
        width: calc(6em + var(--num-shares) * 130px);
      }

      .word-column {
        width: 6em;
        position: sticky;
        left: 0;
        background: var(--background);
      }

      .person-column {
        width: 130px;
      }

      .winner {
        text-decoration: green underline;
      }

      th {
        position: sticky;
        top: 0;
        background: var(--background);
        text-align: center;
        height: 24px;
        z-index: 1;
      }

      th.word-column {
        z-index: 2;
      }

      td {
        vertical-align: baseline;
      }

      tr.cat-row > th {
        top: calc(var(--names-appear) * 24px);
      }

      .duplicate {
        text-decoration: red line-through;
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
    `],Te([(0,r.Cb)({reflect:!0})],Ie.prototype,"theme",void 0),Te([(0,r.Cb)({type:Boolean,reflect:!0})],Ie.prototype,"expanded",void 0),Te([(0,r.Cb)()],Ie.prototype,"record",void 0),Te([(0,r.SB)()],Ie.prototype,"game",void 0),Te([(0,r.SB)()],Ie.prototype,"shareAs",void 0),Te([(0,r.SB)()],Ie.prototype,"shareClipboardText",void 0),Te([(0,r.SB)()],Ie.prototype,"copyToClipboardFailed",void 0),Te([(0,r.IO)("#share-text-input")],Ie.prototype,"shareTextInput",void 0),Te([(0,r.SB)()],Ie.prototype,"shownPath",void 0),Ie=Te([(0,r.Mo)("game-summary")],Ie);var Ce=function(e,t,i,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ee=class extends o.oi{constructor(){super(...arguments),this.theme="light",this.expandedPuzzle="",this.gameRecordsByDate=null,this.db=ue()}render(){const{gameRecordsByDate:e,expandedPuzzle:t}=this;return e?o.dy` <meta-panel></meta-panel>
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
        `))}`:"Loading games..."}connectedCallback(){super.connectedCallback(),this.loadGames()}disconnectedCallback(){this.gameRecordsByDate=null,super.disconnectedCallback()}updated(e){e.has("expandedPuzzle")&&window.setTimeout((()=>{var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("game-summary[expanded]");t&&t.scrollIntoView({behavior:"smooth"})}))}async loadGames(){const e=(await this.db).transaction("games").store.index("by-last-played"),t=new Map;for await(const i of e.iterate(null,"prev")){const e=i.key.toDateString(),s=i.value,o=t.get(e);o?o.push(s):t.set(e,[s])}this.gameRecordsByDate=t,I()}};Ee.styles=[N,o.iv`
      :host {
        display: block;
        padding: ${8}px;
        height: 100%;
      }

      meta-panel {
        float: right;
      }

      .date {
        margin: 8px 0;
        font-size: 24px;
        font-weight: bold;
      }

      li {
        margin: 16px 0;
      }
    `],Ce([(0,r.Cb)({reflect:!0})],Ee.prototype,"theme",void 0),Ce([(0,r.Cb)()],Ee.prototype,"expandedPuzzle",void 0),Ce([(0,r.SB)()],Ee.prototype,"gameRecordsByDate",void 0),Ee=Ce([(0,r.Mo)("history-view")],Ee);var Le=function(e,t,i,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const _e=Date.now();let We,Re=oe.daily();async function Oe(e){window.clearTimeout(We);const t=Date.now(),i=oe.daily();i.seed>Re.seed&&t>T+3e5&&(Re=i,await e.cleanDb(),e.dispatchEvent(new CustomEvent("play-puzzle",{detail:{puzzleId:i},bubbles:!0,composed:!0})),Date.now()-_e>6048e5&&location.replace(location.pathname)),We=window.setTimeout((()=>Oe(e)),36e5)}let De=class extends o.oi{constructor(){super(),this.theme=h(),this.page="play",this.puzzleSeed=Re.seed,this.resumeImmediately=!1,this.preferredTheme=c,this.showTimer=w(),this.dialogShowing=!1,this.loadingWords=!0,this.db=ue(),this.themeHandler=e=>{this.theme=e.detail},this.popstateHandler=()=>{this.interpretHash()},this.dailyPuzzleUpdater=()=>{Oe(this)},this.addEventListener("play-puzzle",(e=>this.handlePlayPuzzle(e))),this.addEventListener("show-history",(e=>this.handleShowHistory(e))),this.addEventListener("show-settings",(()=>this.handleShowSettings())),this.trackWordsLoading(),this.startApp(),Oe(this)}render(){return[o.dy`
        <dialog
          id="settings"
          @cancel=${this.settingsCanceled}
          @keydown=${this.handleSettingsKey}
        >
          <a id="close-settings" @click=${this.closeSettings} title="Close"
            ><mat-icon name="clear"></mat-icon
          ></a>
          <div class="settings-header">New puzzle</div>
          <div>
            ${this.renderNewPuzzleButton("Small")}
            ${this.renderNewPuzzleButton("Medium")}
            ${this.renderNewPuzzleButton("Large")}
          </div>
          <div class="settings-header">Theme</div>
          ${this.renderThemeChoice("Light","light_mode")}
          ${this.renderThemeChoice("Dark","dark_mode")}
          ${this.renderThemeChoice("Auto","contrast")}
          <div class="settings-header">Timer</div>
          ${this.renderTimerChoice(!0,"visibility")}
          ${this.renderTimerChoice(!1,"visibility_off")}
          <div class="settings-header">Meta</div>
          <div>
            <a
              href="https://github.com/leadpipe/wordgrid/issues/new"
              target="_blank"
              title="File a bug report"
              ><mat-icon name="bug_report"></mat-icon> Report a bug</a
            >
          </div>
          <div>
            <a
              href="https://github.com/leadpipe/wordgrid/#readme"
              target="_blank"
              title="Help"
              ><mat-icon name="help"></mat-icon> Read help</a
            >
          </div>
        </dialog>
      `,this.renderPage()]}renderPage(){switch(this.page){case"play":return o.dy`
          <game-view
            theme=${this.theme}
            class="may-scroll"
            .puzzleId=${oe.fromSeed(this.puzzleSeed)}
            .resumeImmediately=${this.resumeImmediately}
            .dialogShowing=${this.dialogShowing}
            .loadingWords=${this.loadingWords}
          ></game-view>
        `;case"history":return o.dy`
          <history-view
            theme=${this.theme}
            class="may-scroll"
            expandedPuzzle=${this.puzzleSeed}
          ></history-view>
        `;default:!function(e){throw new Error(e)}(this.page)}}renderThemeChoice(e,t){const i=e.toLowerCase(),s=this.preferredTheme===i?"selected":"";return o.dy`
      <div class=${s}>
        <a @click=${this.setPreferredTheme} data-theme=${i} tabindex="0">
          <mat-icon name=${t}></mat-icon>
          ${e}
        </a>
      </div>
    `}renderTimerChoice(e,t){const i=this.showTimer===e?"selected":"";return o.dy`
      <div class=${i}>
        <a @click=${this.setShowTimer} data-show=${e} tabindex="0">
          <mat-icon name=${t}></mat-icon>
          ${e?"Show":"Don't show"} the timer
        </a>
      </div>
    `}renderNewPuzzleButton(e){return o.dy`
      <button @click=${this.newPuzzle} data-name="${e}">${e}</button>
    `}connectedCallback(){super.connectedCallback(),d.addEventListener("current-theme",this.themeHandler),window.addEventListener("popstate",this.popstateHandler),window.addEventListener("focus",this.dailyPuzzleUpdater),window.addEventListener("blur",this.dailyPuzzleUpdater),document.addEventListener("visibilitychange",this.dailyPuzzleUpdater)}disconnectedCallback(){super.disconnectedCallback(),d.removeEventListener("current-theme",this.themeHandler),window.removeEventListener("popstate",this.popstateHandler),window.removeEventListener("focus",this.dailyPuzzleUpdater),window.removeEventListener("blur",this.dailyPuzzleUpdater),document.removeEventListener("visibilitychange",this.dailyPuzzleUpdater)}parseHash(){var e;const{hash:t}=location;if(t.startsWith("#")){const{pathname:i,searchParams:s}=new URL(`${location.origin}/${t.substring(1)}`),o=i.substring(1).split("/");return[null!==(e=o.shift())&&void 0!==e?e:"",o,s]}return["",[],new URLSearchParams]}interpretHash(){var e;let[t,i,s]=this.parseHash(),o=null!==(e=i[0])&&void 0!==e?e:"";"history"!==t&&(t="play"),"play"!==t||o||(o=oe.daily().seed),this.page=t,this.puzzleSeed=o,this.resumeImmediately=!1,this.updateLocation()}updateLocation(){const{page:e,puzzleSeed:t}=this,i=t?`#${e}/${t}`:`#${e}`;i!==location.hash&&history.replaceState(null,"",i)}handlePlayPuzzle(e){var t;this.page="play",this.puzzleSeed=e.detail.puzzleId.seed,this.resumeImmediately=null!==(t=e.detail.resume)&&void 0!==t&&t,this.updateLocation()}handleShowHistory(e){var t,i;this.page="history",this.puzzleSeed=null!==(i=null===(t=e.detail)||void 0===t?void 0:t.seed)&&void 0!==i?i:"",this.updateLocation()}handleShowSettings(){this.dialogShowing=!0,this.settingsDialog.showModal()}settingsCanceled(){this.dialogShowing=!1}handleSettingsKey(e){var t;switch(e.key){case"Tab":case"Escape":return;case"Enter":case" ":null===(t=e.target)||void 0===t||t.click()}e.preventDefault(),e.stopImmediatePropagation()}closeSettings(){this.dialogShowing=!1,this.settingsDialog.close()}setPreferredTheme(e){const t=this.findData(e,"theme");this.preferredTheme=t,u(t)}setShowTimer(e){const t="true"===this.findData(e,"show");this.showTimer=t,v(t)}findData(e,t){let i=e.target;for(;i;){if(t in i.dataset)return i.dataset[t];i=i.parentElement}return""}async newPuzzle(e){this.closeSettings();const t=function(e){const t=se.get(e.toLowerCase());if(!t)throw new Error(`Invalid game spec name '${e}'`);return t}(e.target.dataset.name),i=new Date,s=await this.db;for(let e=1;;++e){const o=oe.forSpec(t,i,e);if(!await s.transaction("games").store.openCursor(o.seed))return void this.dispatchEvent(new CustomEvent("play-puzzle",{detail:{puzzleId:o},bubbles:!0,composed:!0}))}}async trackWordsLoading(){await $e(Re),this.loadingWords=!1}async startApp(){var e;await this.cleanDb();let[t,i,s]=this.parseHash();const o=null!==(e=i[0])&&void 0!==e?e:"",r=oe.daily(),n=r.seed;if("history"===t||"play"===t&&o)return this.page=t,this.puzzleSeed=o,void this.updateLocation();if("share"===t){this.puzzleSeed=o;const e=decodeURIComponent(i[1]);await this.importShare(o,e,i[2],i[3])}else{const e=await this.db,t=await e.get("games",n),i=await e.transaction("games").store.index("by-last-played").openCursor(null,"prev"),s=null==i?void 0:i.value.puzzleId;s&&((a=t)&&he(a.wordsFound)||re(i.key)===r.dateString)?this.puzzleSeed=s:this.puzzleSeed=n}var a;this.page="play",this.updateLocation()}async importShare(e,t,i,s){const o=await this.db;let r;const n=new k.yG(`${e}:${t}`);try{r={firstBits:k.p4(i,n),secondBits:s?k.p4(s,n):void 0}}catch(i){return console.log("Bad share URL",location,i),void alert(`Unable to import ${t}'s share of ${e}.  Did it get truncated?`)}finally{n.free()}const a=await o.get("games",e);if(a&&me(a.wordsFound,r))return void alert(`${t}'s share of ${e} is identical to your game.`);const d=o.transaction("shares").store.index("by-puzzle-id");let l=null;for await(const t of d.iterate(e))if(me(t.value.wordsFound,r)){l=t.value.person;break}l===t?alert(`You've already imported ${t}'s share of ${e}.`):null!==l?alert(`You've already imported ${t}'s share of ${e}, under the name '${l}'.`):(await o.put("shares",{person:t,puzzleId:e,wordsFound:r}),alert(`Successfully imported ${t}'s share of ${e}.`))}async cleanDb(){const e=await this.db,t=e.transaction("games").store.index("by-last-played");let i=0;const s=re(new Date(Date.now()-2592e6)),o=[];for await(const e of t.iterate(null,"prev"))++i,i<=10||i<=100&&re(e.key)>=s||o.push(e.value.puzzleId);for(const t of o){await e.delete("games",t);const i=await e.getAllKeysFromIndex("shares","by-puzzle-id",t);for(const t of i)await e.delete("shares",t)}}};De.styles=[N,o.iv`
      :host {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        --background: ${M};
        --text-color: ${O};
        --highlight-background: ${j};
        --scrollbar-thumb-color: #bbb;
        --scrollbar-track-color: #eee;
        background: var(--background);
        color: var(--text-color);
      }

      :host([theme='dark']) {
        --background: ${B};
        --text-color: ${D};
        --highlight-background: ${U};
        --scrollbar-thumb-color: #555;
        --scrollbar-track-color: #333;
      }

      dialog {
        background: var(--background);
        color: var(--text-color);
        padding: 4px 4px 12px;
      }

      dialog > * {
        padding-left: 8px;
        padding-right: 8px;
      }

      a {
        cursor: pointer;
        text-decoration: none;
      }

      :host a {
        color: var(--text-color);
      }

      #close-settings {
        display: block;
        text-align: right;
        padding-right: 0;
      }

      .settings-header {
        margin: 8px 0px 4px;
        padding-left: 8px;
        border-bottom: 1px solid gray;
        font-size: 90%;
      }

      .selected {
        background: var(--highlight-background);
      }
    `],Le([(0,r.Cb)({reflect:!0})],De.prototype,"theme",void 0),Le([(0,r.SB)()],De.prototype,"page",void 0),Le([(0,r.SB)()],De.prototype,"puzzleSeed",void 0),Le([(0,r.SB)()],De.prototype,"resumeImmediately",void 0),Le([(0,r.SB)()],De.prototype,"preferredTheme",void 0),Le([(0,r.SB)()],De.prototype,"showTimer",void 0),Le([(0,r.SB)()],De.prototype,"dialogShowing",void 0),Le([(0,r.SB)()],De.prototype,"loadingWords",void 0),Le([(0,r.IO)("#settings")],De.prototype,"settingsDialog",void 0),De=Le([(0,r.Mo)("leadpipe-wordgrid")],De);var Me=i(379),Be=i.n(Me),je=i(795),Ae=i.n(je),Ue=i(569),He=i.n(Ue),Fe=i(565),Ge=i.n(Fe),Ne=i(216),qe=i.n(Ne),Ke=i(589),Qe=i.n(Ke),Je=i(914),Ze={};Ze.styleTagTransform=Qe(),Ze.setAttributes=Ge(),Ze.insert=He().bind(null,"head"),Ze.domAPI=Ae(),Ze.insertStyleElement=qe(),Be()(Je.Z,Ze),Je.Z&&Je.Z.locals&&Je.Z.locals},401:(e,t,i)=>{var s=i.w[e.id];e.exports=s,i(975),s[""]()}}]);