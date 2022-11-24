"use strict";(self.webpackChunkleadpipe_wordgrid=self.webpackChunkleadpipe_wordgrid||[]).push([[74],{914:(e,t,i)=>{i.d(t,{Z:()=>P});var s=i(81),o=i.n(s),r=i(645),a=i.n(r),n=i(667),d=i.n(n),l=new URL(i(435),i.b),h=new URL(i(675),i.b),c=new URL(i(44),i.b),p=new URL(i(635),i.b),u=new URL(i(298),i.b),m=new URL(i(353),i.b),g=new URL(i(573),i.b),w=new URL(i(860),i.b),v=a()(o()),f=d()(l),y=d()(h),b=d()(c),z=d()(p),$=d()(u),x=d()(m),S=d()(g),T=d()(w);v.push([e.id,'.material-icons{font-family:"Material Icons";font-weight:normal;font-style:normal;font-size:24px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}@font-face{font-family:"Material Icons";font-style:normal;font-display:block;font-weight:400;src:url('+f+') format("woff2"),url('+y+') format("woff")}@font-face{font-family:"Merriweather Sans";font-style:normal;font-display:block;font-weight:800;src:url('+b+') format("woff2"),url('+z+') format("woff")}@font-face{font-family:"Prompt";font-style:normal;font-display:block;font-weight:400;src:url('+$+') format("woff2"),url('+x+') format("woff")}@font-face{font-family:"Prompt";font-style:normal;font-display:block;font-weight:700;src:url('+S+') format("woff2"),url('+T+') format("woff")}',""]);const P=v},74:(e,t,i)=>{i.r(t);class s extends EventTarget{addEventListener(e,t,i){super.addEventListener(e,t,i)}removeEventListener(e,t,i){super.removeEventListener(e,t,i)}}var o=i(392),r=i(685),a=function(e,t,i,s){var o,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let n=class extends o.oi{constructor(){super(...arguments),this.name="",this.size=""}render(){return o.dy`<span class="material-icons ${this.size}">${this.name}</span>`}};n.styles=o.iv`
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
  `,a([(0,r.Cb)()],n.prototype,"name",void 0),a([(0,r.Cb)()],n.prototype,"size",void 0),n=a([(0,r.Mo)("mat-icon")],n);const d=new s;let l="light",h="auto";{const e=window.localStorage.getItem("preferredTheme");switch(e){case"dark":case"light":h=e}}function c(){return"auto"===h?l:h}function p(e){if(e!==h){const t=c();h=e,window.localStorage.setItem("preferredTheme",e),u(t)}}function u(e){const t=c();t!==e&&d.dispatchEvent(new CustomEvent("current-theme",{detail:t}))}const m=window.matchMedia("(prefers-color-scheme: dark)");function g(e){const t=c();l=e.matches?"dark":"light",u(t)}g(m),m.addEventListener("change",g);let w=!0;function v(){return w}function f(e){w=e,window.localStorage.setItem("showTimer",String(e)),d.dispatchEvent(new CustomEvent("show-timer",{detail:e}))}"false"===window.localStorage.getItem("showTimer")&&(w=!1);let y=[];{const e=window.localStorage.getItem("monikers");if(e)try{const t=JSON.parse(e);t instanceof Array&&(y=t)}catch(t){console.log("Bad data in local storage",e,t)}}let b=!1;"true"===window.localStorage.getItem("seenHelp")&&(b=!0);var z=function(e,t,i,s){var o,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let $=class extends o.oi{constructor(){super(...arguments),this.gameState=null,this.timerRunning=!1}render(){const{gameState:e}=this;return e?v()?o.dy`
      ${this.remainingTime()}<br />
      <a @click=${this.hideTimer} title="Hide timer">
        <mat-icon name="visibility_off"></mat-icon>
      </a>
    `:o.dy`
        <a @click=${this.showTimer} title="Show timer">
          <mat-icon name="visibility"></mat-icon>
        </a>
      `:""}updated(e){var t,i;const s=null!==(i=null===(t=this.gameState)||void 0===t?void 0:t.msRemaining)&&void 0!==i?i:0;s>0?(window.setTimeout((()=>this.requestUpdate()),(s-1)%1e3+1),this.timerRunning=!0):this.timerRunning&&(this.timerRunning=!1,this.dispatchEvent(new CustomEvent("timer-expired",{detail:v(),bubbles:!0,composed:!0})))}remainingTime(){var e,t;const i=null!==(t=null===(e=this.gameState)||void 0===e?void 0:e.msRemaining)&&void 0!==t?t:0,s=Math.ceil(i/1e3);return`${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`}showTimer(){f(!0),this.requestUpdate()}hideTimer(){f(!1),this.requestUpdate()}};$.styles=o.iv`
    :host {
      display: block;
    }

    a {
      cursor: pointer;
    }
  `,z([(0,r.Cb)()],$.prototype,"gameState",void 0),$=z([(0,r.Mo)("game-timer")],$);var x=i(338);class S{constructor(e,t){this.row=e,this.col=t}isAdjacentTo(e){return this!==e&&Math.abs(this.row-e.row)<=1&&Math.abs(this.col-e.col)<=1}}const T=(()=>{const e=[0,1,2,3,4,5];return e.map((t=>e.map((e=>new S(t,e)))))})();function P(e,t){return T[e][t]}function k(e){const t=[];for(let i=0;i<e;++i)for(let s=0;s<e;++s)t.push(P(i,s));return t}var I=i(513);let C=Date.now();function E(){C=Date.now()}function O(e){let t=I.tb[e];return t.startsWith("Level")&&(t="Level "+t.substring(5)),t}function L(e,t){return 1===t?e:`${e}s`}function W(e,t){return`${e} ${L(t,e)}`}function R(e,t){return e?`${e.found} / ${e.total}\n  ${L(t,e.total)}\n  (${Math.round(e.found/e.total*100)}%)`:""}function D(e){return new Promise((t=>setTimeout(t,e)))}async function M(e,t){const i=t.lastPlayed||new Date;E(),await e.put("games",{puzzleId:t.puzzleId.seed,lastPlayed:i,elapsedMs:t.elapsedMs,wordsFound:t.wordsToStore})}const B=o.iv`#444`,A=o.iv`#ccc`,H=o.iv`white`,N=o.iv`darkslategray`,_=o.iv`#aecbfa`,G=o.iv`
  ${_}cc
`,F=o.iv`#337`,U=o.iv`
  ${F}c
`,j=o.iv`#808080`,K=o.iv`
  .icon-button {
    color: inherit;
    background: inherit;
    border: inherit;
    padding: 0;
    cursor: pointer;
  }
`,q=o.iv`
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
`;var Y=function(e,t,i,s){var o,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const J="Merriweather Sans";let Q=class extends o.oi{constructor(){super(...arguments),this.theme="light",this.padding=20,this.puzzleId=null,this.puzzle=null,this.isPaused=!0,this.isInteractive=!1,this.keyHandler=e=>this.handleKeyDown(e),this.resizeObserver=new ResizeObserver((async()=>{this.canvas&&(this.calcMetrics(),await D(0),this.draw())})),this.trail=[],this.prefixes=[],this.pendingKeyboardInput="",this.pendingInputTimeoutId=0,this.sideSpan=0,this._cellSpan=0,this.centers=[],this.cellCenter=e=>{const{centers:t}=this;return[t[e.col],t[e.row]]},this.font=J,this.textOffset=0}render(){const{sideSpan:e}=this,t=e/devicePixelRatio;return o.dy`
      <canvas
        ${(0,x.i)(this.canvasChanged)}
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
    `}set externalPath(e){this.trail.length=0,this.trail.push(...e.locs),this.requestUpdate("externalPath",{locs:[]})}get externalPath(){return{locs:this.trail}}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this),this.isInteractive&&window.addEventListener("keydown",this.keyHandler)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this),window.removeEventListener("keydown",this.keyHandler)}canvasChanged(e){e instanceof HTMLCanvasElement&&(this.canvas=e,this.ctx=e.getContext("2d"),this.calcMetrics(),this.draw())}shouldInteract(){return this.isInteractive&&!this.isPaused}convertCoordinateToCellNumber(e){const{sideSpan:t,puzzleId:i}=this;if(!(e<0||e>=t)&&i)return Math.floor(e/(t/i.spec.size))}convertPointToLoc(e){const t=this.canvas.getBoundingClientRect(),i=(e.x-t.x)*devicePixelRatio,s=(e.y-t.y)*devicePixelRatio,o=this.convertCoordinateToCellNumber(i),r=this.convertCoordinateToCellNumber(s);if(void 0===o||void 0===r)return;const a=P(r,o),[n,d]=this.cellCenter(a);return Math.hypot(i-n,s-d)<=this.cellSpan/2*.9?a:void 0}pushLoc(e){const{puzzle:t,trail:i,prefixes:s}=this;if(!t||!e)return;const o=this.trail.indexOf(e);if(o>=0){if(o===i.length-2){i.pop(),s[0].endsWith("Q")&&(s.length/=2);for(let e=0;e<s.length;++e)s[e]=s[e].substring(0,s[e].length-1)}return void this.dispatchEvent(new CustomEvent("words-traced",{detail:{words:[...s]}}))}if(i.length&&!e.isAdjacentTo(i[i.length-1]))return;i.push(e);const r=t.grid[e.row].charAt(e.col);if(s.length)for(let e=0;e<s.length;++e)s[e]+=r;else s.push(r);"Q"===r&&s.forEach((e=>s.push(e+"U"))),this.dispatchEvent(new CustomEvent("words-traced",{detail:{words:[...s]}}))}handlePointerHovering(e){if(!this.shouldInteract())return;const t=this.convertPointToLoc(e);this.trail.length?this.pushLoc(t):t&&this.puzzle?this.hoverLoc=t:this.hoverLoc=void 0,this.draw()}handlePointerEnter(e){this.handlePointerHovering(e)}handlePointerLeave(e){this.hoverLoc=void 0,this.draw()}handlePointerCancel(e){var t;null===(t=this.canvas)||void 0===t||t.releasePointerCapture(e.pointerId),this.dispatchEvent(new CustomEvent("words-selected",{detail:{words:[]}})),this.resetPointerInput(),this.draw()}handlePointerDown(e){if(!this.shouldInteract())return;const t=this.convertPointToLoc(e);t&&this.puzzle&&(this.resetPointerInput(),this.pendingKeyboardInput="",this.pushLoc(t),this.hoverLoc=void 0,this.canvas.setPointerCapture(e.pointerId),this.draw())}handlePointerUp(e){var t;this.shouldInteract()&&(null===(t=this.canvas)||void 0===t||t.releasePointerCapture(e.pointerId),this.puzzle&&this.dispatchEvent(new CustomEvent("words-selected",{detail:{words:[...this.prefixes]}})),this.resetPointerInput(),this.draw())}resetPointerInput(){this.trail.length=0,this.prefixes.length=0,this.hoverLoc=void 0}clearPendingInputTimeout(){this.pendingInputTimeoutId&&(window.clearTimeout(this.pendingInputTimeoutId),this.pendingInputTimeoutId=0)}handleKeyDown(e){if(!this.shouldInteract())return;this.clearPendingInputTimeout(),this.resetPointerInput();let t=!1;switch(e.key){case"Enter":this.pendingKeyboardInput.length&&(this.dispatchEvent(new CustomEvent("words-selected",{detail:{words:[this.pendingKeyboardInput],checkPossible:!0}})),this.pendingKeyboardInput="");break;case"Esc":case"Escape":case"Clear":this.pendingKeyboardInput="",t=!0;break;case"Backspace":case"Del":case"Delete":this.pendingKeyboardInput.length&&(this.pendingKeyboardInput=this.pendingKeyboardInput.substring(0,this.pendingKeyboardInput.length-1),t=!0);break;default:if(1===e.key.length){const i=e.key.toUpperCase();i>="A"&&i<="Z"&&(this.pendingKeyboardInput+=i,t=!0)}}if(t){const e={words:this.pendingKeyboardInput?[this.pendingKeyboardInput]:[],checkPossible:!0};this.dispatchEvent(new CustomEvent("words-traced",{detail:e}))}this.pendingKeyboardInput&&(this.pendingInputTimeoutId=window.setTimeout((()=>{this.pendingKeyboardInput="",this.dispatchEvent(new CustomEvent("words-selected",{detail:{words:[]}}))}),2500))}updated(e){let t=!1,i=!1;e.has("puzzleId")&&(t=!0,i=!0,this.calcMetrics()),(e.has("puzzle")||e.has("isPaused"))&&(t=!0,i=!0),e.has("externalPath")&&(t=!1,i=!0),e.has("theme")&&this.canvas&&(this.updateBackground(),i=!0),t&&this.resetPointerInput(),i&&this.ctx&&this.draw()}updateBackground(){}get cellSpan(){return this._cellSpan}calcMetrics(){const e=this.getBoundingClientRect(),{padding:t,puzzleId:i}=this;if(!i)return;const s=i.spec.size;let o=Math.min(e.width,e.height);o-=2*t;let r=devicePixelRatio*o;const a=this._cellSpan=Math.max(0,Math.floor((r-s)/s));this.sideSpan=s*a;const n=[],d=a/2;for(let e=0;e<s;++e)n[e]=a*e+d;this.centers=n,this.ctx&&this.setUpFonts()}setUpFonts(){const e=Math.round(.65*this.cellSpan);this.font=`800 ${e}px ${J}`,this.textOffset=this.calcTextOffset(this.font)}calcTextOffset(e){const{ctx:t}=this;t.font=e,t.textBaseline="middle";const i=t.measureText("AZ");return Math.round((i.actualBoundingBoxAscent-i.actualBoundingBoxDescent)/2)}pausedGrid(e){switch(e){case 4:default:return["LEAD","PIPE","WORD","GRID"];case 5:return["LEAD "," PIPE","     ","WORD "," GRID"];case 6:return["  LEAD","  PIPE","      ","      ","WORD  ","GRID  "]}}draw(){const{ctx:e}=this;e.setTransform({});const{width:t,height:i}=e.canvas;e.clearRect(0,0,t,i),this.drawGrid(),this.drawLetters(),this.drawTrail()}drawGrid(){const{cellSpan:e,hoverLoc:t,trail:i,ctx:s,theme:o,puzzleId:r,cellCenter:a}=this;if(!r)return;const n=e/2;if(t||i.length){s.fillStyle="light"===o?_.cssText:F.cssText,s.beginPath();const[e,r]=a(t||i[0]);s.arc(e,r,n,0,2*Math.PI),s.fill()}s.strokeStyle=j.cssText,s.lineWidth=1,s.beginPath();for(const e of r.spec.locs){const[t,i]=a(e);s.moveTo(t+n,i),s.arc(t,i,n,0,2*Math.PI)}s.stroke()}drawLetters(){const{isPaused:e,puzzle:t,puzzleId:i,ctx:s,theme:o,cellCenter:r,textOffset:a}=this;if(!i)return;const n=e||!t?this.pausedGrid(i.spec.size):t.grid;n===(null==t?void 0:t.grid)?s.fillStyle="light"===o?B.cssText:A.cssText:s.fillStyle="orange",s.textAlign="center",s.textBaseline="middle",s.font=this.font;for(const e of i.spec.locs){let t=n[e.row].charAt(e.col);"Q"===t&&(t="Qu");const[i,o]=r(e);s.fillText(String(t),i,o+a)}}drawTrail(){const{trail:e}=this;if(!e.length)return;const{ctx:t,theme:i,cellSpan:s,cellCenter:o}=this;t.strokeStyle="light"===i?G.cssText:U.cssText,t.lineCap="round",t.lineJoin="round",t.lineWidth=s/6,t.beginPath(),t.moveTo(...o(e[0]));for(const i of e)t.lineTo(...o(i));t.stroke()}};Q.styles=[o.iv`
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
    `],Y([(0,r.Cb)({reflect:!0})],Q.prototype,"theme",void 0),Y([(0,r.Cb)({type:Number})],Q.prototype,"padding",void 0),Y([(0,r.Cb)({hasChanged:(e,t)=>!(e===t||e&&t&&e.seed===t.seed)})],Q.prototype,"puzzleId",void 0),Y([(0,r.Cb)()],Q.prototype,"puzzle",void 0),Y([(0,r.Cb)()],Q.prototype,"isPaused",void 0),Y([(0,r.Cb)({type:Boolean,reflect:!0})],Q.prototype,"isInteractive",void 0),Y([(0,r.Cb)()],Q.prototype,"externalPath",null),Y([(0,r.SB)()],Q.prototype,"sideSpan",void 0),Q=Y([(0,r.Mo)("grid-view")],Q);let Z=class extends o.oi{render(){return o.dy`
      <a @click=${this.openHelp} title="Help"
        ><mat-icon name="help"></mat-icon></a
      ><a @click=${this.openSettings} title="Settings"
        ><mat-icon name="settings"></mat-icon
      ></a>
    `}openHelp(){this.dispatchEvent(new CustomEvent("show-help",{bubbles:!0,composed:!0}))}openSettings(){this.dispatchEvent(new CustomEvent("show-settings",{bubbles:!0,composed:!0}))}};Z.styles=o.iv`
    :host {
      display: block;
    }

    a {
      cursor: pointer;
    }

    :host a {
      color: var(--text-color);
    }
  `,Z=function(e,t,i,s){var o,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([(0,r.Mo)("meta-panel")],Z);class V{constructor(e,t){this.last=e;const i=new Set(null==t?void 0:t.locs);i.add(e),this.locs=i}}class X{constructor(e){this.letter=e,this.paths=[]}}class ee{constructor(e,t){this.spec=e,this.grid=t,this.letterLocs=new Map,this.wordPaths=[];const{letterLocs:i}=this;for(const s of e.locs){const e=t[s.row].charAt(s.col);i.has(e)?i.get(e).push(s):i.set(e,[s])}}findPaths(e){var t,i,s,o;const{letterLocs:r,wordPaths:a}=this;a.length>e.length&&(a.length=e.length);for(let s=0;s<e.length;++s){const o=e.charAt(s);if(s<a.length&&a[s].letter!==o&&(a.length=s),s===a.length){const n=new X(o);if(a.push(n),0===s)for(const e of null!==(t=r.get(o))&&void 0!==t?t:[])n.paths.push(new V(e));else{const t=a[s-1].paths;for(const e of null!==(i=r.get(o))&&void 0!==i?i:[])for(const i of t)!i.locs.has(e)&&i.last.isAdjacentTo(e)&&n.paths.push(new V(e,i));"U"===o&&"Q"===e.charAt(s-1)&&n.paths.push(...t)}}}return null!==(o=null===(s=a[e.length-1])||void 0===s?void 0:s.paths)&&void 0!==o?o:[]}}var te,ie;!function(e){e.MAKE_GRID="MAKE_GRID"}(te||(te={})),function(e){e.GRID="GRID",e.UNKNOWN_VERSION="UNKNOWN_VERSION"}(ie||(ie={}));const se=[{name:"Small",size:4,minLength:3,timerMinutes:3,locs:k(4)},{name:"Medium",size:5,minLength:4,timerMinutes:3,locs:k(5)},{name:"Large",size:6,minLength:5,timerMinutes:4,locs:k(6)}],oe=new Map(se.map((e=>[e.size,e]))),re=new Map(se.map((e=>[e.name.toLowerCase(),e])));class ae{constructor(e,t,i,s){if(this.version=e,this.dateString=t,this.spec=i,this.counter=s,!de(t))throw new Error(`Invalid date string '${t}'`)}get seed(){return`${this.version}:${this.dateString}:${this.spec.size}:${this.counter}`}toDbRange(){return IDBKeyRange.bound(`${this.version}:${this.dateString}:${this.spec.size}`,`${this.version}:${this.dateString}:${this.spec.size+1}`,!1,!0)}next(){return new ae(this.version,this.dateString,this.spec,1+this.counter)}compareTo(e){return this.version!==e.version?this.version-e.version:this.dateString!==e.dateString?this.dateString<e.dateString?-1:1:this.spec.size!==e.spec.size?this.spec.size-e.spec.size:this.counter-e.counter}toMakeGridMessage(){return{type:te.MAKE_GRID,version:this.version,seed:this.seed,size:this.spec.size,minLength:this.spec.minLength}}static daily(e=new Date){const t=new I.yG(ne(e)),i=function(e){return se[Math.floor(e.range(0,se.length))]}(t);return t.free(),ae.forSpec(i,e)}static forSpec(e,t=new Date,i=1){return new ae(1,ne(t),e,i)}static fromSeed(e){const t=e.split(":");if(4===t.length){const e=Number(t[0]),i=t[1],s=Number(t[2]),o=Number(t[3]);if(!isNaN(e)&&de(i)&&function(e){return oe.has(e)}(s)&&!isNaN(o))return new ae(e,i,function(e){const t=oe.get(e);if(!t)throw new Error(`Invalid grid size ${e}`);return t}(s),o)}throw new Error(`Seed string does not appear to be from PuzzleId: ${e}`)}}function ne(e){return`${String(e.getFullYear()).padStart(4,"0")}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function de(e){const t=e.split("-").map(Number);return 3===t.length&&!t.some(isNaN)&&ne(new Date(t[0],t[1]-1,t[2]))===e}class le{constructor(e,t,i,s){this.game=e,this.person=t,this.before=i,this.after=s}setUniqueWords(e){const t={kept:{words:0,points:0},lost:{words:0,points:0}};for(const i of this.before){const s=e.has(i)?t.kept:t.lost;++s.words,s.points+=ve.scoreWord(i)}this.result=t}getWordCounts(e){var t;const i=null!==(t=this.game.wordsByCategory.get(e))&&void 0!==t?t:new Set;return{total:i.size,found:he(i,this.before)+he(i,this.after)}}}function he(e,t){e.size>t.size&&([e,t]=[t,e]);let i=0;for(const s of e)t.has(s)&&++i;return i}var ce;!function(e){e[e.TOO_SHORT=0]="TOO_SHORT",e[e.NOT_A_WORD=1]="NOT_A_WORD",e[e.WORD=2]="WORD",e[e.DUPLICATE=3]="DUPLICATE",e[e.IMPOSSIBLE=4]="IMPOSSIBLE"}(ce||(ce={}));var pe=i(998);function ue(e){return"object"==typeof e.firstBits}function me(){return(0,pe.X3)("wordgrid",1,{upgrade(e){e.createObjectStore("games",{keyPath:"puzzleId"}).createIndex("by-last-played","lastPlayed");const t=e.createObjectStore("shares",{autoIncrement:!0});t.createIndex("by-person","person"),t.createIndex("by-puzzle-id","puzzleId")}})}function ge(e,t){if(e===t)return!0;if(!e||!t)return!1;if(e.length!==t.length)return!1;for(let i=0,s=e.length;i<s;++i)if(e[i]!==t[i])return!1;return!0}function we(e,t){return!!ue(e)&&ge(e.firstBits,t.firstBits)&&ge(e.secondBits,t.secondBits)}class ve{constructor(e,t,i=0,s=0,o=[],r=!1,a=null){this.puzzleId=e,this.puzzle=t,this.found=new Set,this.reverseFound=[],this.earnedPointsCache=0,this.priorElapsedMs=0,this.resumedTimestamp=0,this.numFoundWithinTimeLimit=0,this.complete=!1,this.lastPlayedTimestamp=0,this.pathFinder=null;const n=new Map;let d=0;for(const[e,i]of t.words.entries()){let t=n.get(i);void 0===t&&(t=new Set,n.set(i,t)),t.add(e),d+=ve.scoreWord(e)}this.wordsByCategory=n,this.points={found:0,total:d},this.categories=[...n.keys()].sort(((e,t)=>e-t)),this.priorElapsedMs=i,this.numFoundWithinTimeLimit=s;for(const e of o)this.addPreviouslyFoundWord(e),this.found.size<=s&&(this.earnedPointsCache+=ve.scoreWord(e));this.complete=r,this.lastPlayedTimestamp=a?a.getTime():0}static scoreWord(e){switch(e.length){case 3:case 4:return 1;case 5:return 2;case 6:return 3;case 7:return 5;case 8:return 11;default:return 2*e.length}}judgeWord(e,t){return this.found.has(e)?ce.DUPLICATE:this.puzzle.words.has(e)?ce.WORD:t&&!this.isPossible(e)?ce.IMPOSSIBLE:e.length<this.puzzleId.spec.minLength?ce.TOO_SHORT:ce.NOT_A_WORD}isPossible(e){return this.findPaths(e).length>0}findPaths(e){let{pathFinder:t}=this;return t||(this.pathFinder=t=new ee(this.puzzleId.spec,this.puzzle.grid)),t.findPaths(e)}addFoundWord(e,t){if(this.isPaused)throw new Error("This game is paused");const i=this.judgeWord(e,t);return i===ce.WORD&&(this.addPreviouslyFoundWord(e),this.timeExpired||(++this.numFoundWithinTimeLimit,this.earnedPointsCache+=ve.scoreWord(e)),this.lastPlayedTimestamp=Date.now()),i}addPreviouslyFoundWord(e){this.found.add(e),this.reverseFound.unshift(e);const t=ve.scoreWord(e);this.points.found+=t,this.found.size===this.puzzle.words.size&&this.markComplete()}getWordCounts(){return{found:this.found.size,total:this.puzzle.words.size}}getWordPoints(){return{...this.points}}get earnedPoints(){return this.earnedPointsCache}getWordCategories(){return this.categories}getFoundWords(e){return void 0===e?this.reverseFound:this.reverseFound.filter((t=>this.puzzle.words.get(t)===e))}asSharedGameState(e){return this.convertToSharedGamesState(e,this.getWordsInProgress())}toSharedGameState(e){if(e.puzzleId!==this.puzzle.message.seed)throw new Error(`Wrong shared game: ${e.puzzleId} instead of ${this.puzzle.message.seed}`);return this.convertToSharedGamesState(e.person,ve.reconstructWords(this.puzzle,e.wordsFound))}getWordsInProgress(){return{words:[...this.found],cutoff:this.numFoundWithinTimeLimit}}convertToSharedGamesState(e,t){const i=t.words,s=i.splice(t.cutoff);return new le(this,e,new Set(i),new Set(s))}getWords(e){return void 0===e?[...this.puzzle.words.keys()]:[...this.puzzle.words.keys()].filter((t=>this.puzzle.words.get(t)===e))}get numWordsFoundBeforeTimeLimit(){return this.numFoundWithinTimeLimit}get isStarted(){return this.lastPlayedTimestamp>0}get isPaused(){return 0===this.resumedTimestamp}get elapsedMs(){let e=this.priorElapsedMs;return 0!==this.resumedTimestamp&&(e+=Date.now()-this.resumedTimestamp),e}get timeExpired(){return 0===this.msRemaining}get msRemaining(){return Math.max(0,6e4*this.puzzleId.spec.timerMinutes-this.elapsedMs)}get lastPlayed(){return this.lastPlayedTimestamp?new Date(this.lastPlayedTimestamp):null}resume(){if(this.complete)throw new Error("Can't resume a complete game");this.lastPlayedTimestamp=Date.now(),this.isPaused&&(this.resumedTimestamp=this.lastPlayedTimestamp)}pause(){this.isStarted&&(this.lastPlayedTimestamp=Date.now()),this.isPaused||(this.priorElapsedMs=this.elapsedMs,this.resumedTimestamp=0)}markComplete(){this.pause(),this.complete=!0}get isComplete(){return this.complete}get wordsToStore(){if(!this.complete)return this.getWordsInProgress();const e=[...this.found],t=e.splice(this.numFoundWithinTimeLimit),i={firstBits:fe(e,function(e){const t=new Map;let i=0;for(const s of e)t.set(s,i++);return t}(this.puzzle.words.keys()))};if(t.length){const s=new Map,o=new Set(e);let r=0;for(const e of this.puzzle.words.keys())o.has(e)||s.set(e,r++);i.secondBits=fe(t,s)}return i}static reconstructWords(e,t){const i=[...e.words.keys()],s=ye(i,t.firstBits),o=s.length;if(t.secondBits){const e=new Set(i);for(const t of s)e.delete(t);s.push(...ye([...e],t.secondBits))}return{words:s,cutoff:o}}static fromDbRecord(e,t){let i=e.wordsFound,s=!1;return ue(i)&&(i=ve.reconstructWords(t,i),s=!0),new ve(ae.fromSeed(t.message.seed),t,e.elapsedMs,i.cutoff,i.words,s,e.lastPlayed)}}function fe(e,t){const i=new Uint8Array(Math.ceil(t.size/8));for(const s of e){const e=t.get(s),o=7&e;i[Math.floor(e/8)]|=1<<o}return i}function ye(e,t){const i=[];for(let s=0;s<t.length;++s){const o=t[s];if(o)for(let t=0;t<8;++t)o&1<<t&&i.push(e[8*s+t])}return i}var be=function(e,t,i,s){var o,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ze=class extends o.oi{constructor(){super(...arguments),this.word="",this.category=null,this.theme="light",this.open=!1,this.timeoutId=0}render(){const{category:e}=this,t=ve.scoreWord(this.word);return o.dy`
      <a @click=${this.toggle}>${this.word}</a>
      ${this.open?o.dy`
            <span class="more">
              [${e?`${O(e)} —`:""}${t}
              point${t>1?"s":""} —
              <a
                href="https://www.google.com/search?q=define+%2B${this.word}+OR+${this.word}"
                target="_blank"
                >look up</a
              >]
            </span>
          `:""}
    `}toggle(e){this.open=!this.open,this.dispatchEvent(new CustomEvent("word-expanded",{detail:this.open?this.word:"",bubbles:!0,composed:!0})),this.timeoutId&&(window.clearTimeout(this.timeoutId),this.timeoutId=0),this.open&&(this.timeoutId=window.setTimeout((()=>{this.open&&this.toggle(),this.timeoutId=0}),2500))}};ze.styles=o.iv`
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
  `,be([(0,r.Cb)()],ze.prototype,"word",void 0),be([(0,r.Cb)()],ze.prototype,"category",void 0),be([(0,r.Cb)()],ze.prototype,"theme",void 0),be([(0,r.SB)()],ze.prototype,"open",void 0),ze=be([(0,r.Mo)("solution-word")],ze);var $e,xe=i(36);function Se(e,t={}){gtag("event",e,t)}!function(e){e.ACTION="wg_action",e.SYSTEM="wg_system"}($e||($e={}));const Te=new Worker(new URL(i.p+i.u(975),i.b),{name:"words"});Te.onerror=e=>{Se($e.SYSTEM,{category:"words worker error",detail:String(e)})};const Pe=[];function ke(e){return new Promise(((t,i)=>{Pe.push({message:e.toMakeGridMessage(),resolve:t,reject:i}),1===Pe.length&&Ie()}))}function Ie(){Pe.length&&Te.postMessage(Pe[0].message)}Te.onmessage=e=>{if(!Pe.length)return void Se($e.SYSTEM,{category:"words worker unexpected message",detail:JSON.stringify(e)});const t=Pe.shift();if(Ie(),e.data.message.seed===(null==t?void 0:t.message.seed))switch(e.data.type){case ie.GRID:void 0!==e.data.wordsLoadMs&&Se($e.SYSTEM,{category:"words worker load-words time",elapsedMs:e.data.wordsLoadMs}),void 0!==e.data.elapsedMs&&Se($e.SYSTEM,{category:"words worker make-grid time",detail:e.data.message.seed,elapsedMs:e.data.elapsedMs}),t.resolve(e.data);break;case ie.UNKNOWN_VERSION:Se($e.SYSTEM,{category:"words worker unknown version",detail:`${e.data.message.version} vs ${e.data.versions}`}),t.reject(`The words worker can't honor the version we asked for, ${e.data.message.version}`)}else Se($e.SYSTEM,{category:"words worker wrong puzzle received",detail:`${JSON.stringify(e.data.message)} instead of ${JSON.stringify(null==t?void 0:t.message)}`})};var Ce=function(e,t,i,s){var o,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ee=class extends o.oi{constructor(){super(...arguments),this.theme="light",this.puzzleId=ae.daily(),this.resumeImmediately=!1,this.loadingWords=!0,this.puzzle=null,this.gameState=null,this.db=me(),this.foregroundnessHandler=()=>{"visible"!==document.visibilityState&&this.pausePlay()},this.windowBlurHandler=()=>{this.pausePlay()},this.spacebarHandler=e=>{var t;" "===e.key&&((null===(t=this.gameState)||void 0===t?void 0:t.isPaused)?this.resumePlay():this.pausePlay())},this.showTimerHandler=()=>{this.requestUpdate()},this.pendingWords=[],this.pendingWordsJudgements=[],this.pendingWordsTimeoutId=0}render(){var e,t,i;const{theme:s,gameState:r}=this,a=s===l?"light"===s?"dark":"light":"auto";return o.dy`
      <div id="controls">
        <div>
          <a @click=${this.goToHistory} title="Go to the history page">
            <mat-icon name="arrow_back"></mat-icon>
          </a>
        </div>
        <div>
          <a @click=${this.setTheme} title="Switch to ${a} theme">
            <mat-icon
              name=${"auto"===a?"contrast":`${a}_mode`}
              data-theme=${a}
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
                <b>${r.puzzleId.spec.minLength}</b> or more letters per word.
                <br class="opt-break" />
                ${v()?o.dy`
                      Earned ${W(r.earnedPoints,"point")}.
                    `:""}
              </div>
              <div>
                ${R(r.getWordCounts(),"word")},
                <br />
                ${R(null==r?void 0:r.getWordPoints(),"point")}.
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
        ${(0,xe.r)(null!==(i=null===(t=this.gameState)||void 0===t?void 0:t.getFoundWords())&&void 0!==i?i:[],(e=>e),(e=>o.dy`
            <div>
              <solution-word
                word=${e}
                theme=${this.theme}
                .category=${this.puzzle.words.get(e)}
              ></solution-word>
            </div>
          `))}
      </div>
    `}connectedCallback(){super.connectedCallback(),document.addEventListener("visibilitychange",this.foregroundnessHandler),window.addEventListener("blur",this.windowBlurHandler),window.addEventListener("keydown",this.spacebarHandler),d.addEventListener("show-timer",this.showTimerHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.foregroundnessHandler),window.removeEventListener("blur",this.windowBlurHandler),window.removeEventListener("keydown",this.spacebarHandler),d.removeEventListener("show-timer",this.showTimerHandler)}updated(e){e.has("puzzleId")&&this.requestAndLoadPuzzle()}setTheme(e){p(e.target.dataset.theme)}async requestAndLoadPuzzle(){const{puzzleId:e}=this;this.puzzle=null,this.gameState=null,this.style.setProperty("--grid-spec-size",e.spec.size.toString());const t=await ke(e);if(this.puzzleId.seed===e.seed)if(t.words.size<50){const{resumeImmediately:t}=this;this.dispatchEvent(new CustomEvent("play-puzzle",{detail:{puzzleId:e.next(),resumeImmediately:t},bubbles:!0,composed:!0}))}else this.loadPuzzle(t,e)}async loadPuzzle(e,t){const i=await this.db,s=await i.get("games",e.message.seed);this.gameState=s?ve.fromDbRecord(s,e):new ve(t,e),this.puzzle=e,this.gameState.isComplete?this.redirectToHistory():this.resumeImmediately&&this.gameState.resume()}async saveGame(){const{gameState:e}=this;e&&e.lastPlayed&&await M(await this.db,e)}async timerExpired(e){e.detail&&(await this.pausePlayAsync(),window.confirm("Time's up!\n\nKeep looking for words?\n\nCancel to quit.")?(await D(0),this.resumePlay()):await this.quit())}async goToHistory(){await this.saveGame(),this.redirectToHistory(),Se($e.ACTION,{category:"go to history"})}resumePlay(){var e;null===(e=this.gameState)||void 0===e||e.resume(),this.requestUpdate(),Se($e.ACTION,{category:"resume"})}async pausePlayAsync(){var e;null===(e=this.gameState)||void 0===e||e.pause(),this.requestUpdate(),await this.saveGame(),Se($e.ACTION,{category:"pause"})}pausePlay(){this.pausePlayAsync()}async quit(){var e;null===(e=this.gameState)||void 0===e||e.markComplete(),await this.saveGame(),this.redirectToHistory(),Se($e.ACTION,{category:"quit"})}rotatePuzzle(e){const{puzzle:t}=this;if(t){const e=[...t.grid].reverse(),i=[];for(let t=0;t<e.length;++t)i.push(e.map((e=>e.charAt(t))).join(""));this.puzzle={...t,grid:i},Se($e.ACTION,{category:"rotate"})}}flipPuzzle(e){const{puzzle:t}=this;if(t){const e=t.grid.map((e=>e.split("").reverse().join("")));this.puzzle={...t,grid:e},Se($e.ACTION,{category:"flip"})}}clearPendingWordsTimeout(){this.pendingWordsTimeoutId&&(window.clearTimeout(this.pendingWordsTimeoutId),this.pendingWordsTimeoutId=0)}wordsTraced(e){this.pendingWords=e.detail.words,this.pendingWordsJudgements=e.detail.words.map((t=>{var i,s;return null!==(s=null===(i=this.gameState)||void 0===i?void 0:i.judgeWord(t,e.detail.checkPossible))&&void 0!==s?s:ce.NOT_A_WORD})),this.clearPendingWordsTimeout()}wordsSelected(e){var t;this.pendingWords=e.detail.words,this.pendingWordsJudgements=e.detail.words.map((t=>{var i,s;return null!==(s=null===(i=this.gameState)||void 0===i?void 0:i.addFoundWord(t,e.detail.checkPossible))&&void 0!==s?s:ce.NOT_A_WORD})),this.clearPendingWordsTimeout(),this.pendingWordsJudgements.some((e=>e===ce.WORD))&&(this.saveGame(),(null===(t=this.gameState)||void 0===t?void 0:t.isComplete)&&this.redirectToHistory()),this.pendingWordsTimeoutId=window.setTimeout((()=>{this.pendingWords=[]}),1e3)}judgementClass(e){switch(e){case ce.TOO_SHORT:return"too-short-word";case ce.NOT_A_WORD:default:return"not-a-word";case ce.DUPLICATE:return"duplicate-word";case ce.WORD:return"found-new-word";case ce.IMPOSSIBLE:return"impossible-word"}}redirectToHistory(){this.dispatchEvent(new CustomEvent("show-history",{detail:this.puzzleId,bubbles:!0,composed:!0}))}};function Oe(e,t){return new I.yG(`${e}:${t}`)}Ee.styles=[q,o.iv`
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
        flex: 2 1 0;
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
    `],Ce([(0,r.Cb)({reflect:!0})],Ee.prototype,"theme",void 0),Ce([(0,r.Cb)()],Ee.prototype,"puzzleId",void 0),Ce([(0,r.Cb)()],Ee.prototype,"resumeImmediately",void 0),Ce([(0,r.Cb)()],Ee.prototype,"loadingWords",void 0),Ce([(0,r.SB)()],Ee.prototype,"puzzle",void 0),Ce([(0,r.SB)()],Ee.prototype,"pendingWords",void 0),Ee=Ce([(0,r.Mo)("game-view")],Ee);var Le=function(e,t,i,s){var o,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let We=class extends o.oi{constructor(){super(...arguments),this.theme="light",this.expanded=!1,this.record=null,this.game=null,this.shares=[],this.uniqueWords=new Set,this.shareAs="",this.shareClipboardText="",this.copyToClipboardFailed=!1,this.shareBack=!1,this.db=me(),this.prevShownWord="",this.shownWordCount=0,this.shownPath={locs:[]}}render(){var e;const{record:t,game:i,expanded:s,offsetLeft:r,shares:a}=this;if(!t)return"";this.style.setProperty("--left-inset",`${r}px`);const n=ae.fromSeed(t.puzzleId),d=null!==(e=null==i?void 0:i.getWordCategories())&&void 0!==e?e:[];return o.dy`
      <div>
        ${n.spec.name} puzzle #${n.counter} of
        ${n.dateString}
      </div>
      ${i?o.dy`
            <div>
              Earned ${W(i.earnedPoints,"point")} for finding
              ${W(i.numWordsFoundBeforeTimeLimit,"word")} within
              ${i.puzzleId.spec.timerMinutes} minutes.
            </div>
            <div>
              Found ${R(i.getWordCounts(),"word")},
              ${R(i.getWordPoints(),"point")}.
            </div>
            <div>
              ${i.isComplete?o.dy`
                    Complete
                    ${a.length>1?o.dy`
                          (${W(a.length-1,"other player")})
                        `:""}
                    ${s?this.renderShareForm():o.dy`&mdash; expand to share`}
                  `:o.dy`
                    Ongoing
                    <a @click=${this.resumeGame} title="Resume play">
                      <mat-icon name="play_circle"></mat-icon>
                    </a>
                    ${a.length>1?o.dy`
                          (${W(a.length-1,"other player")}
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
                            .puzzleId=${n}
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
                              <div class="cat">${O(e)}</div>
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
        list="monikers"
        value=${this.shareAs}
        maxlength="50"
        placeholder="Name/nickname"
        @input=${this.handleShareAsUpdated}
      />
      <datalist id="monikers">
        ${y.slice().map((e=>o.dy`<option value=${e}></option>`))}
      </datalist>
      ${this.shareAs?o.dy`<button
              id="share-button"
              type="submit"
              class="icon-button"
              title="Share"
              tabindex="0"
            >
              <mat-icon name="share"></mat-icon>
            </button>
            ${this.shares.length>1?o.dy`
                  <label>
                    <input
                      type="checkbox"
                      ?checked=${this.shareBack}
                      @change=${this.handleShareBackChanged}
                    />
                    Share back
                  </label>
                `:""}
            <input
              id="share-text-input"
              type="text"
              readonly
              value=${this.shareClipboardText}
              style="display: ${this.copyToClipboardFailed?"inline-block":"none"}"
            />
            ${this.shareClipboardText?this.copyToClipboardFailed?"— Copy to clipboard to share":"— Copied to clipboard":""}`:""}
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
                      <div class="person-name">${e.person}</div>
                    </th>`))}
              </tr>
              <tr>
                <td class="word-column"></td>
                ${i.map((e=>{const{result:t}=e;return o.dy`<td>
                    Kept ${W(t.kept.points,"point")}, lost
                    ${t.lost.points}.
                  </td>`}))}
              </tr>
            `:""}
        ${t.map((t=>o.dy`
            <tr class="cat-row">
              <th class="word-column">${O(t)}</th>
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
                                    >+${ve.scoreWord(e)}</span
                                  >`:o.dy`<span class="duplicate">+0</span>`}
                            `:t.after.has(e)?o.dy` <mat-icon name="check"></mat-icon> `:""}
                      </td>
                    `))}
                </tr>
              `))}
          `))}
      </table>
    `}async updated(e){e.has("record")&&this.loadGame(),!this.expanded||this.shareAs||e.has("shownPath")||(await 0,this.shareAsInput&&this.shareAsInput.select())}showWord(e){const{game:t}=this;if(!t)return;const i=e.detail;if(i){i===this.prevShownWord?++this.shownWordCount:(this.shownWordCount=0,this.prevShownWord=i);const e=t.findPaths(i);this.shownPath=e[this.shownWordCount%e.length]}else this.shownPath={locs:[]}}async loadGame(){const{record:e}=this;if(!e)return;const t=await ke(ae.fromSeed(e.puzzleId)),i=ve.fromDbRecord(e,t),s=(await this.db).transaction("shares").store.index("by-puzzle-id"),o=[i.asSharedGameState("You")],r=new Set(o[0].before),a=new Set;for await(const t of s.iterate(e.puzzleId)){const e=i.toSharedGameState(t.value);o.push(e);for(const t of e.before)r.has(t)?(r.delete(t),a.add(t)):a.has(t)||r.add(t)}for(const e of o)e.setUniqueWords(r);this.shares=o,this.uniqueWords=r,this.shareBack=o.length>1,this.game=i,this.dispatchEvent(new CustomEvent("game-loaded",{detail:i.puzzleId,bubbles:!0,composed:!0}))}handleShareAsUpdated(e){this.shareAs=e.target.value,this.shareClipboardText="",this.copyToClipboardFailed=!1}handleShareBackChanged(e){this.shareBack=e.target.checked}async shareGame(e){e.preventDefault(),e.stopPropagation(),this.shareClipboardText="",this.copyToClipboardFailed=!1;const{game:t,shareAs:i,shares:s,shareBack:o}=this;if(t){const e=function(e,t){const{wordsToStore:i}=e;if(!ue(i))return;const s=Oe(e.puzzleId.seed,t),o=I.H6(i.firstBits,s);let r=`${location.origin}${location.pathname}#share/${e.puzzleId.seed}/${encodeURIComponent(t)}/${o}`;return i.secondBits&&(r+=`/${I.H6(i.secondBits,s)}`),s.free(),r}(t,i);if(!e)return;const r="Leadpipe Wordgrid",a=function(e,t,i,s){const o=`${t} earned ${W(e.earnedPoints,"point")}`;if(s){const e=i.length-1;let t=[];for(let s=1;s<=e;++s){const o=i[s],r=`${o.person} (${o.result.kept.points})`;1===s&&e<=2?t.push(r):s===e?t.push(`and ${r}`):t.push(`${r},`)}return`${o}, kept ${i[0].result.kept.points} versus ${t.join(" ")}.`}return`${o}.  Share back when you've finished!`}(t,i,s,o);!function(e){const t=new Set([e]);for(const e of y)if(t.add(e),t.size>=10)break;y=[...t],window.localStorage.setItem("monikers",JSON.stringify(y))}(i);let n=!1;if("share"in navigator)try{await navigator.share({title:r,text:a,url:e}),n=!0}catch(e){Se($e.SYSTEM,{category:"navigator.share failed",detail:`${e}`})}let d=!1;if(!n){this.shareClipboardText=`${a}  ${e}`;try{await navigator.clipboard.writeText(this.shareClipboardText),d=!0}catch(e){Se($e.SYSTEM,{category:"navigator.clipboard.writeText failed",detail:`${e}`})}}this.copyToClipboardFailed=!n&&!d,this.copyToClipboardFailed&&(await 0,this.shareTextInput&&this.shareTextInput.select()),Se($e.ACTION,{category:o?"share back":"share",detail:n?"system":d?"clipboard":"manual"})}}resumeGame(){this.game&&(this.dispatchEvent(new CustomEvent("play-puzzle",{detail:{puzzleId:this.game.puzzleId,resume:!0},bubbles:!0,composed:!0})),Se($e.ACTION,{category:"resume from history"}))}async quitGame(){this.game&&(this.game.markComplete(),await M(await this.db,this.game),this.dispatchEvent(new CustomEvent("show-history",{detail:this.game.puzzleId,bubbles:!0,composed:!0})),this.requestUpdate(),Se($e.ACTION,{category:"quit from history"}))}toggleExpansion(){var e;const t=this.expanded||null===(e=this.game)||void 0===e?void 0:e.puzzleId;this.dispatchEvent(new CustomEvent("show-history",{detail:t,bubbles:!0,composed:!0})),Se($e.ACTION,{category:"expand history"})}};We.styles=[K,q,o.iv`
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

      @media (max-width: 550px) {
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

      .person-name {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        max-height: 24px;
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
    `],Le([(0,r.Cb)({reflect:!0})],We.prototype,"theme",void 0),Le([(0,r.Cb)({type:Boolean,reflect:!0})],We.prototype,"expanded",void 0),Le([(0,r.Cb)()],We.prototype,"record",void 0),Le([(0,r.SB)()],We.prototype,"game",void 0),Le([(0,r.SB)()],We.prototype,"shareAs",void 0),Le([(0,r.SB)()],We.prototype,"shareClipboardText",void 0),Le([(0,r.SB)()],We.prototype,"copyToClipboardFailed",void 0),Le([(0,r.SB)()],We.prototype,"shareBack",void 0),Le([(0,r.IO)("#share-text-input")],We.prototype,"shareTextInput",void 0),Le([(0,r.IO)("#share-as")],We.prototype,"shareAsInput",void 0),Le([(0,r.SB)()],We.prototype,"shownPath",void 0),We=Le([(0,r.Mo)("game-summary")],We);var Re=function(e,t,i,s){var o,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let De=class extends o.oi{constructor(){super(...arguments),this.theme="light",this.expandedPuzzle="",this.gameRecordsByDate=null,this.db=me()}render(){const{gameRecordsByDate:e,expandedPuzzle:t}=this;return e?o.dy` <meta-panel></meta-panel>
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
                      @game-loaded=${this.handleGameLoaded}
                    ></game-summary>
                  </li>
                `))}
            </ul>
          </div>
        `))}`:"Loading games..."}connectedCallback(){super.connectedCallback(),this.loadGames()}disconnectedCallback(){this.gameRecordsByDate=null,super.disconnectedCallback()}updated(e){e.has("expandedPuzzle")&&this.scrollToExpandedSummary()}async scrollToExpandedSummary(){var e,t,i;await 0;const s=!this.gameRecordsByDate||!this.expandedPuzzle,o=(null===(t=null===(e=this.gameRecordsByDate)||void 0===e?void 0:e.values().next())||void 0===t?void 0:t.value[0].puzzleId)===this.expandedPuzzle,r=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector("game-summary[expanded]");r&&!o?r.scrollIntoView({behavior:"smooth"}):s||this.scrollTo(0,0)}async loadGames(){const e=(await this.db).transaction("games").store.index("by-last-played"),t=new Map;for await(const i of e.iterate(null,"prev")){const e=i.key.toDateString(),s=i.value,o=t.get(e);o?o.push(s):t.set(e,[s])}this.gameRecordsByDate=t,E()}handleGameLoaded(e){this.scrollToExpandedSummary()}};De.styles=[q,o.iv`
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
    `],Re([(0,r.Cb)({reflect:!0})],De.prototype,"theme",void 0),Re([(0,r.Cb)()],De.prototype,"expandedPuzzle",void 0),Re([(0,r.SB)()],De.prototype,"gameRecordsByDate",void 0),De=Re([(0,r.Mo)("history-view")],De);var Me=function(e,t,i,s){var o,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const Be=Date.now();let Ae,He=ae.daily();async function Ne(e){window.clearTimeout(Ae);const t=Date.now(),i=ae.daily();i.seed>He.seed&&t>C+3e5&&(Se($e.SYSTEM,{category:"made daily puzzle"}),He=i,await e.cleanDb(),e.dispatchEvent(new CustomEvent("play-puzzle",{detail:{puzzleId:i},bubbles:!0,composed:!0})),Date.now()-Be>6048e5&&location.replace(location.pathname)),Ae=window.setTimeout((()=>Ne(e)),36e5)}Se($e.SYSTEM,{category:"page loaded"});const _e="1:1776-07-04:4:1",Ge=ae.fromSeed(_e),Fe={type:ie.GRID,message:{type:te.MAKE_GRID,version:1,seed:_e,size:4,minLength:3},grid:["TLHS","GTTS","AEOE","CSPB"],words:new Map},Ue={locs:[P(0,3),P(1,2),P(2,2),P(3,2),P(3,1)]},je={locs:[P(1,0),P(2,0),P(1,1),P(2,1),P(3,2),P(2,2),P(1,3),P(1,2)]};let Ke=class extends o.oi{constructor(){super(),this.theme=c(),this.page="play",this.puzzleSeed=He.seed,this.resumeImmediately=!1,this.preferredTheme=h,this.showTimer=v(),this.loadingWords=!0,this.helpOption=0,this.db=me(),this.themeHandler=e=>{this.theme=e.detail},this.popstateHandler=()=>{this.interpretHash()},this.dailyPuzzleUpdater=()=>{Ne(this)},this.addEventListener("play-puzzle",(e=>this.handlePlayPuzzle(e))),this.addEventListener("show-help",(()=>this.handleShowHelp())),this.addEventListener("show-history",(e=>this.handleShowHistory(e))),this.addEventListener("show-settings",(()=>this.handleShowSettings())),this.trackWordsLoading(),this.startApp(),Ne(this),b||window.setTimeout((()=>{this.handleShowHelp()}))}render(){var e;return[null===(e=this.dialogRenderer)||void 0===e?void 0:e.call(this),this.renderPage()]}renderHelpDialog(){return o.dy`
      <dialog
        id="help"
        @close=${this.helpClosed}
        @keydown=${this.handleDialogKey}
      >
        <a class="close" @click=${this.closeDialog} title="Close"
          ><mat-icon name="clear"></mat-icon
        ></a>
        <div class="dialog-header">How to play Wordgrid</div>
        <div class="may-scroll">
          <ul>
            <li>Find as many words as you can before the timer runs out.</li>
            <li>
              Trace letters through the grid, and lift your finger to mark a
              word.
            </li>
            <li>Or type, and hit Enter to mark a word.</li>
          </ul>
          <div class="examples">
            Example words: ${this.renderHelpOption("STOPS",0)}
            ${this.renderHelpOption("GATEPOST",1)}
            <grid-view
              theme=${this.theme}
              padding="10"
              .isPaused=${!1}
              .puzzleId=${Ge}
              .puzzle=${Fe}
              .externalPath=${0===this.helpOption?Ue:je}
            ></grid-view>
          </div>
        </div>
        <div class="dialog-header">For more information</div>
        <div>
          <a href="https://github.com/leadpipe/wordgrid/#readme" target="_blank"
            ><mat-icon name="info"></mat-icon> Read site overview</a
          >
        </div>
      </dialog>
    `}renderSettingsDialog(){return o.dy`
      <dialog
        id="settings"
        @close=${this.settingsClosed}
        @keydown=${this.handleDialogKey}
      >
        <a class="close" @click=${this.closeDialog} title="Close"
          ><mat-icon name="clear"></mat-icon
        ></a>
        <div class="dialog-header">New puzzle</div>
        <div>
          ${this.renderNewPuzzleButton("Small")}
          ${this.renderNewPuzzleButton("Medium")}
          ${this.renderNewPuzzleButton("Large")}
        </div>
        <div class="dialog-header">Theme</div>
        ${this.renderThemeChoice("Light","light_mode")}
        ${this.renderThemeChoice("Dark","dark_mode")}
        ${this.renderThemeChoice("Auto","contrast")}
        <div class="dialog-header">Timer</div>
        ${this.renderTimerChoice(!0,"visibility")}
        ${this.renderTimerChoice(!1,"visibility_off")}
        <div class="dialog-header">Meta</div>
        <div>
          <a @click=${this.handleShowHelp} title="Help"
            ><mat-icon name="help"></mat-icon> How to play</a
          >
        </div>
        <div>
          <a
            href="https://github.com/leadpipe/wordgrid/#readme"
            target="_blank"
            title="Overview"
            ><mat-icon name="info"></mat-icon> Read site overview</a
          >
        </div>
        <div>
          <a
            href="https://github.com/leadpipe/wordgrid/issues/new"
            target="_blank"
            title="File a bug report"
            ><mat-icon name="bug_report"></mat-icon> Report a bug</a
          >
        </div>
      </dialog>
    `}renderPage(){switch(this.page){case"play":return o.dy`
          <game-view
            theme=${this.theme}
            class="may-scroll"
            .puzzleId=${ae.fromSeed(this.puzzleSeed)}
            .resumeImmediately=${this.resumeImmediately}
            .loadingWords=${this.loadingWords}
          ></game-view>
        `;case"history":return o.dy`
          <history-view
            theme=${this.theme}
            class="may-scroll"
            expandedPuzzle=${this.puzzleSeed}
          ></history-view>
        `;default:!function(e){throw new Error(e)}(this.page)}}renderHelpOption(e,t){const i=this.helpOption===t?"selected":"";return o.dy`
      <span class=${i}
        ><a @click=${this.setHelpOption} data-option=${t} tabindex="0"
          >${e}</a
        ></span
      >
    `}renderThemeChoice(e,t){const i=e.toLowerCase(),s=this.preferredTheme===i?"selected":"";return o.dy`
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
    `}connectedCallback(){super.connectedCallback(),d.addEventListener("current-theme",this.themeHandler),window.addEventListener("popstate",this.popstateHandler),window.addEventListener("focus",this.dailyPuzzleUpdater),window.addEventListener("blur",this.dailyPuzzleUpdater),document.addEventListener("visibilitychange",this.dailyPuzzleUpdater)}disconnectedCallback(){super.disconnectedCallback(),d.removeEventListener("current-theme",this.themeHandler),window.removeEventListener("popstate",this.popstateHandler),window.removeEventListener("focus",this.dailyPuzzleUpdater),window.removeEventListener("blur",this.dailyPuzzleUpdater),document.removeEventListener("visibilitychange",this.dailyPuzzleUpdater)}parseHash(){var e;const{hash:t}=location;if(t.startsWith("#")){const{pathname:i,searchParams:s}=new URL(`${location.origin}/${t.substring(1)}`),o=i.substring(1).split("/");return[null!==(e=o.shift())&&void 0!==e?e:"",o,s]}return["",[],new URLSearchParams]}interpretHash(){var e;let[t,i,s]=this.parseHash(),o=null!==(e=i[0])&&void 0!==e?e:"";"history"!==t&&(t="play"),"play"!==t||o||(o=ae.daily().seed),this.page=t,this.puzzleSeed=o,this.resumeImmediately=!1,this.updateLocation()}updateLocation(){const{page:e,puzzleSeed:t}=this,i=t?`#${e}/${t}`:`#${e}`;i!==location.hash&&history.replaceState(null,"",i)}pauseGame(){var e;null===(e=this.gameView)||void 0===e||e.pausePlay()}handlePlayPuzzle(e){var t;this.pauseGame(),this.page="play",this.puzzleSeed=e.detail.puzzleId.seed,this.resumeImmediately=null!==(t=e.detail.resume)&&void 0!==t&&t,this.updateLocation()}handleShowHistory(e){var t,i;this.pauseGame(),this.page="history",this.puzzleSeed=null!==(i=null===(t=e.detail)||void 0===t?void 0:t.seed)&&void 0!==i?i:"",this.updateLocation()}async showDialog(e){var t;this.pauseGame(),this.dialogRenderer=e,await 0,null===(t=this.dialog)||void 0===t||t.showModal()}hideDialog(){this.dialogRenderer=void 0}closeDialog(){var e;null===(e=this.dialog)||void 0===e||e.close()}handleShowHelp(){this.showDialog(this.renderHelpDialog),Se($e.ACTION,{category:"help opened"})}helpClosed(){this.hideDialog(),Se($e.ACTION,{category:"help closed"}),b=!0,window.localStorage.setItem("seenHelp","true")}handleShowSettings(){this.showDialog(this.renderSettingsDialog),Se($e.ACTION,{category:"settings opened"})}settingsClosed(){this.hideDialog(),Se($e.ACTION,{category:"settings closed"})}handleDialogKey(e){var t;switch(e.key){case"Tab":case"Escape":return;case"Enter":case" ":null===(t=e.target)||void 0===t||t.click()}e.preventDefault(),e.stopImmediatePropagation()}setHelpOption(e){this.helpOption=Number(this.findData(e,"option"))}setPreferredTheme(e){const t=this.findData(e,"theme");this.preferredTheme=t,p(t),Se($e.ACTION,{category:"theme set",detail:t})}setShowTimer(e){const t="true"===this.findData(e,"show");this.showTimer=t,f(t),Se($e.ACTION,{category:"show-timer set",detail:String(t)})}findData(e,t){let i=e.target;for(;i;){if(t in i.dataset)return i.dataset[t];i=i.parentElement}return""}async newPuzzle(e){this.closeDialog();const t=e.target.dataset.name,i=function(e){const t=re.get(e.toLowerCase());if(!t)throw new Error(`Invalid game spec name '${e}'`);return t}(t);let s=ae.forSpec(i);const o=await this.db;for(const e of await o.getAllKeys("games",s.toDbRange())){const t=ae.fromSeed(e);s.compareTo(t)<=0&&(s=t.next())}this.dispatchEvent(new CustomEvent("play-puzzle",{detail:{puzzleId:s},bubbles:!0,composed:!0})),Se($e.ACTION,{category:"new puzzle",detail:t})}async trackWordsLoading(){await ke(He),this.loadingWords=!1}async startApp(){var e;await this.cleanDb();let[t,i,s]=this.parseHash();const o=null!==(e=i.shift())&&void 0!==e?e:"",r=ae.daily(),a=r.seed;if("history"===t||"play"===t&&o)return this.page=t,this.puzzleSeed=o,void this.updateLocation();if("share"===t)this.puzzleSeed=o,await this.importShare(o,i);else{const e=await this.db,t=await e.get("games",a),i=await e.transaction("games").store.index("by-last-played").openCursor(null,"prev"),s=null==i?void 0:i.value.puzzleId;s&&((n=t)&&ue(n.wordsFound)||ne(i.key)===r.dateString)?this.puzzleSeed=s:this.puzzleSeed=a}var n;this.page="play",this.updateLocation()}async importShare(e,t){const i=await this.db,s=function(e){var t;return decodeURIComponent(null!==(t=e[0])&&void 0!==t?t:"")}(t);let o;try{o=function(e,t,i){let s;const o=Oe(e,t);try{s={firstBits:I.p4(i[1],o),secondBits:i[2]?I.p4(i[2],o):void 0}}finally{o.free()}return s}(e,s,t)}catch(t){return console.log("Bad share URL",location,t),Se($e.SYSTEM,{category:"bad share url",detail:`${t}`}),void alert(`Unable to import ${s}'s share of ${e}.  Did it get truncated?`)}const r=await i.get("games",e);if(r&&we(r.wordsFound,o))return Se($e.SYSTEM,{category:"self import"}),void alert(`${s}'s share of ${e} is identical to your game.`);const a=i.transaction("shares").store.index("by-puzzle-id");let n=null;for await(const t of a.iterate(e))if(we(t.value.wordsFound,o)){n=t.value.person;break}n===s?(Se($e.SYSTEM,{category:"duplicate import"}),alert(`You've already imported ${s}'s share of ${e}.`)):null!==n?(Se($e.SYSTEM,{category:"duplicate import different name"}),alert(`You've already imported ${s}'s share of ${e}, under the name '${n}'.`)):(await i.put("shares",{person:s,puzzleId:e,wordsFound:o}),Se($e.SYSTEM,{category:"import",detail:e}),alert(`Successfully imported ${s}'s share of ${e}.`))}async cleanDb(){const e=await this.db,t=e.transaction("games").store.index("by-last-played");let i=0;const s=ne(new Date(Date.now()-2592e6)),o=[];for await(const e of t.iterate(null,"prev"))++i,i<=10||i<=100&&ne(e.key)>=s||o.push(e.value.puzzleId);for(const t of o){await e.delete("games",t);const i=await e.getAllKeysFromIndex("shares","by-puzzle-id",t);for(const t of i)await e.delete("shares",t)}}};Ke.styles=[q,o.iv`
      :host {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        --background: ${H};
        --text-color: ${B};
        --highlight-background: ${_};
        --scrollbar-thumb-color: #bbb;
        --scrollbar-track-color: #eee;
        background: var(--background);
        color: var(--text-color);
      }

      :host([theme='dark']) {
        --background: ${N};
        --text-color: ${A};
        --highlight-background: ${F};
        --scrollbar-thumb-color: #555;
        --scrollbar-track-color: #333;
      }

      dialog {
        background: var(--background);
        color: var(--text-color);
        padding: 4px 4px 12px;
        margin-top: 64px;
        max-width: 360px;
        max-height: calc(95vh - 64px);
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

      .close {
        display: block;
        text-align: right;
        padding-right: 0;
      }

      .dialog-header {
        margin: 8px 0px 4px;
        padding-left: 8px;
        border-bottom: 1px solid gray;
        font-size: 90%;
      }

      .selected {
        background: var(--highlight-background);
      }

      .examples {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      #help grid-view {
        width: 200px;
        height: 200px;
        flex: 0 0 auto;
      }
    `],Me([(0,r.Cb)({reflect:!0})],Ke.prototype,"theme",void 0),Me([(0,r.SB)()],Ke.prototype,"page",void 0),Me([(0,r.SB)()],Ke.prototype,"puzzleSeed",void 0),Me([(0,r.SB)()],Ke.prototype,"resumeImmediately",void 0),Me([(0,r.SB)()],Ke.prototype,"preferredTheme",void 0),Me([(0,r.SB)()],Ke.prototype,"showTimer",void 0),Me([(0,r.SB)()],Ke.prototype,"loadingWords",void 0),Me([(0,r.SB)()],Ke.prototype,"dialogRenderer",void 0),Me([(0,r.SB)()],Ke.prototype,"helpOption",void 0),Me([(0,r.IO)("game-view")],Ke.prototype,"gameView",void 0),Me([(0,r.IO)("dialog")],Ke.prototype,"dialog",void 0),Ke=Me([(0,r.Mo)("leadpipe-wordgrid")],Ke);var qe=i(379),Ye=i.n(qe),Je=i(795),Qe=i.n(Je),Ze=i(569),Ve=i.n(Ze),Xe=i(565),et=i.n(Xe),tt=i(216),it=i.n(tt),st=i(589),ot=i.n(st),rt=i(914),at={};at.styleTagTransform=ot(),at.setAttributes=et(),at.insert=Ve().bind(null,"head"),at.domAPI=Qe(),at.insertStyleElement=it(),Ye()(rt.Z,at),rt.Z&&rt.Z.locals&&rt.Z.locals}}]);