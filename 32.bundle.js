"use strict";(self.webpackChunkleadpipe_wordgrid=self.webpackChunkleadpipe_wordgrid||[]).push([[32],{914:(e,t,i)=>{i.d(t,{Z:()=>P});var s=i(81),o=i.n(s),r=i(645),a=i.n(r),n=i(667),d=i.n(n),l=new URL(i(426),i.b),h=new URL(i(101),i.b),c=new URL(i(44),i.b),p=new URL(i(635),i.b),u=new URL(i(298),i.b),m=new URL(i(353),i.b),g=new URL(i(573),i.b),w=new URL(i(860),i.b),f=a()(o()),y=d()(l),v=d()(h),b=d()(c),z=d()(p),$=d()(u),S=d()(m),x=d()(g),T=d()(w);f.push([e.id,`@font-face{font-family:"Material Icons";font-style:normal;font-display:block;font-weight:400;src:url(${y}) format("woff2"),url(${v}) format("woff")}@font-face{font-family:"Merriweather Sans";font-style:normal;font-display:block;font-weight:800;unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;src:url(${b}) format("woff2"),url(${z}) format("woff")}@font-face{font-family:"Prompt";font-style:normal;font-display:block;font-weight:400;unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;src:url(${$}) format("woff2"),url(${S}) format("woff")}@font-face{font-family:"Prompt";font-style:normal;font-display:block;font-weight:700;unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;src:url(${x}) format("woff2"),url(${T}) format("woff")}`,""]);const P=f},32:(e,t,i)=>{i.r(t);var s=i(392),o=i(685),r=function(e,t,i,s){var o,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let a=class extends s.oi{constructor(){super(...arguments),this.name="",this.size=""}static{this.styles=s.iv`
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
  `}render(){return s.dy`<span class="material-icons ${this.size}">${this.name}</span>`}};r([(0,o.Cb)()],a.prototype,"name",void 0),r([(0,o.Cb)()],a.prototype,"size",void 0),a=r([(0,o.Mo)("mat-icon")],a);class n extends EventTarget{addEventListener(e,t,i){super.addEventListener(e,t,i)}removeEventListener(e,t,i){super.removeEventListener(e,t,i)}}const d=new n;let l="light",h="auto";{const e=window.localStorage.getItem("preferredTheme");switch(e){case"dark":case"light":h=e}}function c(){return"auto"===h?l:h}function p(e){if(e!==h){const t=c();h=e,window.localStorage.setItem("preferredTheme",e),u(t)}}function u(e){const t=c();t!==e&&d.dispatchEvent(new CustomEvent("current-theme",{detail:t}))}const m=window.matchMedia("(prefers-color-scheme: dark)");function g(e){const t=c();l=e.matches?"dark":"light",u(t)}g(m),m.addEventListener("change",g);let w=!0;function f(){return w}function y(e){w=e,window.localStorage.setItem("showTimer",String(e)),d.dispatchEvent(new CustomEvent("show-timer",{detail:e}))}"false"===window.localStorage.getItem("showTimer")&&(w=!1);let v=[];{const e=window.localStorage.getItem("monikers");if(e)try{const t=JSON.parse(e);t instanceof Array&&(v=t)}catch(t){console.log("Bad data in local storage",e,t)}}let b=!1;"true"===window.localStorage.getItem("seenHelp")&&(b=!0);var z=function(e,t,i,s){var o,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let $=class extends s.oi{constructor(){super(...arguments),this.gameState=null,this.timerRunning=!1}static{this.styles=s.iv`
    :host {
      display: block;
      user-select: none;
      -webkit-user-select: none;
    }

    a {
      cursor: pointer;
    }
  `}render(){const{gameState:e}=this;return e?f()?s.dy`
      ${this.remainingTime()}<br />
      <a @click=${this.hideTimer} title="Hide timer">
        <mat-icon name="visibility_off"></mat-icon>
      </a>
    `:s.dy`
        <a @click=${this.showTimer} title="Show timer">
          <mat-icon name="visibility"></mat-icon>
        </a>
      `:""}updated(e){const t=this.gameState?.msRemaining??0;t>0?(window.setTimeout((()=>this.requestUpdate()),(t-1)%1e3+1),this.timerRunning=!0):this.timerRunning&&(this.timerRunning=!1,this.dispatchEvent(new CustomEvent("timer-expired",{detail:f(),bubbles:!0,composed:!0})))}remainingTime(){const e=this.gameState?.msRemaining??0,t=Math.ceil(e/1e3);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}showTimer(){y(!0),this.requestUpdate()}hideTimer(){y(!1),this.requestUpdate()}};z([(0,o.Cb)({attribute:!1})],$.prototype,"gameState",void 0),$=z([(0,o.Mo)("game-timer")],$);var S=i(338);class x{constructor(e,t){this.row=e,this.col=t}isAdjacentTo(e){return this!==e&&Math.abs(this.row-e.row)<=1&&Math.abs(this.col-e.col)<=1}}const T=(()=>{const e=[0,1,2,3,4,5];return e.map((t=>e.map((e=>new x(t,e)))))})();function P(e,t){return T[e][t]}function I(e){const t=[];for(let i=0;i<e;++i)for(let s=0;s<e;++s)t.push(P(i,s));return t}const k=s.iv`#444`,C=s.iv`#ccc`,E=s.iv`white`,D=s.iv`darkslategray`,O=s.iv`#aecbfa`,R=s.iv`
  ${O}cc
`,W=s.iv`#337`,L=s.iv`
  ${W}c
`,U=s.iv`#2a6914`,B=s.iv`
  ${U}22
`,A=s.iv`#4dbc24`,M=s.iv`
  ${A}22
`,F=s.iv`#e3280b`,G=s.iv`
  ${F}44
`,N=s.iv`#971e0b`,H=s.iv`
  ${N}44
`,j=s.iv`#808080`,_=s.iv`200ms`,K=s.iv`
  .icon-button {
    color: inherit;
    background: inherit;
    border: inherit;
    padding: 0;
    cursor: pointer;
  }
`,q=s.iv`
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
`;var Y=function(e,t,i,s){var o,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Q=class extends s.oi{constructor(){super(...arguments),this.theme="light",this.puzzleId=null,this.puzzle=null,this.isPaused=!0,this.isInteractive=!1,this.keyHandler=e=>this.handleKeyDown(e),this.resizeObserver=new ResizeObserver((async()=>{this.calcMetrics()})),this.trail=[],this.prefixes=[],this.pendingKeyboardInput="",this.pendingInputTimeoutId=0,this.cellSpan=0,this.sidePixels=0}static{this.styles=[s.iv`
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
        --add: ${B};
        --del: ${G};
        --path: ${R};
        --path-start: ${O};
        --text-fill: ${k};
      }

      :host([theme='dark']) {
        --add: ${M};
        --del: ${H};
        --path: ${L};
        --path-start: ${W};
        --text-fill: ${C};
      }

      svg {
        overflow: hidden;
        touch-action: none;
      }

      circle {
        fill: none;
        stroke: ${j};
      }

      text {
        font-weight: 800;
        font-family: 'Merriweather Sans';
        dominant-baseline: central;
        text-anchor: middle;
        user-select: none;
        -webkit-user-select: none;
      }

      :host([isPaused]) text {
        fill: orange;
      }

      :host(:not([isPaused])) text {
        fill: var(--text-fill);
      }

      :host(.rotate) g {
        transform-origin: center;
        transform: rotate(-90deg);
        transition: transform ${_};
      }

      :host(.flip) g {
        transform-origin: center;
        transform: scale(-1, 1);
        transition: transform ${_};
      }

      .path-start {
        fill: var(--path-start);
      }

      .path {
        pointer-events: none;
        fill: none;
        stroke: var(--path);
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .del {
        pointer-events: none;
        fill: none;
        stroke: var(--del);
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .add {
        pointer-events: none;
        fill: none;
        stroke: var(--add);
        stroke-linecap: round;
        stroke-linejoin: round;
      }
    `]}render(){const{cellSpan:e,hoverLoc:t,isPaused:i,puzzle:o,puzzleId:r,sidePixels:a,trail:n}=this;if(!e||!r)return;const d=r.spec.size,l=a/d,h=i||!o?this.pausedGrid(d):o.grid,c=t??n[0],p=l/e,u=l/2,m=(l-p)/2;return s.dy`
      <svg
        ${(0,S.i)(this.svgChanged)}
        viewBox="0 0 ${a} ${a}"
        width=${a}
        height=${a}
        @pointerenter=${this.handlePointerEnter}
        @pointermove=${this.handlePointerHovering}
        @pointerleave=${this.handlePointerLeave}
        @pointercancel=${this.handlePointerCancel}
        @pointerdown=${this.handlePointerDown}
        @pointerup=${this.handlePointerUp}
      >
        <style>
          circle {
            stroke-width: ${p}px;
          }
          text {
            font-size: ${.65*l}px;
          }
          .path {
            stroke-width: ${.2*l}px;
          }

          .del {
            stroke-width: ${.1*l}px;
          }

          .add {
            stroke-width: ${.1*l}px;
          }
        </style>
        ${r.spec.locs.map((e=>{const{row:t,col:i}=e;let o=h[t].charAt(i);"Q"===o&&(o="Qu");const r=e===c?"path-start":"";return s.YP`
            <svg viewBox="0 0 ${l} ${l}" x=${i*l} y=${t*l} width=${l} height=${l}>
              <circle cx=${u} cy=${u} r=${m} class=${r} />
              <g>
                <text x=${u} y=${u} data-row=${t} data-col=${i}>${o}</text>
              </g>
            </svg>
          `}))}
        ${this.renderTrail(n,r.spec.locs,l,u)}
      </svg>
    `}renderTrail(e,t,i,o){if(!e.length)return s.Ld;const r=[s.YP`
      <path
        class="path"
        d="M ${e[0].col*i+o},${e[0].row*i+o}
           ${e.map((({row:e,col:t})=>`L ${t*i+o},${e*i+o}`)).join(" ")}
        " />
    `];if(this.isInteractive){if(e.length>1){const{row:t,col:a}=e[e.length-2];r.push(s.YP`
        <path
          class="del"
          d="M ${a*i+.6*o},${t*i+.6*o}
             l ${.4*i},${.4*i}
             m -${.4*i},0
             l ${.4*i},-${.4*i}
          "/>
      `)}const a=new Set(e),n=e[e.length-1];for(const e of t)!a.has(e)&&e.isAdjacentTo(n)&&r.push(s.YP`
        <path
          class="add"
          d="M ${e.col*i+o},${e.row*i+.4*o}
             l 0,${.6*i}
             m -${.3*i},-${.3*i}
             l ${.6*i},0
          "/>
      `)}return r}set externalPath(e){this.trail.length=0,this.trail.push(...e.locs),this.requestUpdate("externalPath",{locs:[]})}get externalPath(){return{locs:this.trail}}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this),this.isInteractive&&window.addEventListener("keydown",this.keyHandler)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this),window.removeEventListener("keydown",this.keyHandler)}svgChanged(e){e instanceof SVGElement&&this.calcMetrics()}shouldInteract(){return this.isInteractive&&!this.isPaused}convertPointToLoc(e){const t=e.target?.dataset;if(t&&"row"in t){const{row:e,col:i}=t;return P(Number(e),Number(i))}}pushLoc(e){const{puzzle:t,trail:i,prefixes:s}=this;if(!t||!e)return;const o=i.indexOf(e);if(o>=0){if(o===i.length-2){i.pop(),this.trail=[...i],s[0].endsWith("Q")&&(s.length/=2);for(let e=0;e<s.length;++e)s[e]=s[e].substring(0,s[e].length-1)}return void this.dispatchEvent(new CustomEvent("words-traced",{detail:{words:[...s]}}))}if(i.length&&!e.isAdjacentTo(i[i.length-1]))return;this.trail=[...i,e];const r=t.grid[e.row].charAt(e.col);if(s.length)for(let e=0;e<s.length;++e)s[e]+=r;else s.push(r);"Q"===r&&s.forEach((e=>s.push(e+"U"))),this.dispatchEvent(new CustomEvent("words-traced",{detail:{words:[...s]}}))}handlePointerHovering(e){if(!this.shouldInteract())return;const t=this.convertPointToLoc(e);this.trail.length?this.pushLoc(t):t&&this.puzzle?this.hoverLoc=t:this.hoverLoc=void 0}handlePointerEnter(e){this.handlePointerHovering(e)}handlePointerLeave(e){this.hoverLoc=void 0}handlePointerCancel(e){this.dispatchEvent(new CustomEvent("words-selected",{detail:{words:[]}})),this.resetPointerInput()}handlePointerDown(e){if(!this.shouldInteract())return;e.target.hasPointerCapture(e.pointerId)&&e.target.releasePointerCapture(e.pointerId);const t=this.convertPointToLoc(e);t&&this.puzzle&&(this.resetPointerInput(),this.pendingKeyboardInput="",this.pushLoc(t),this.hoverLoc=void 0)}handlePointerUp(e){this.shouldInteract()&&(this.puzzle&&this.dispatchEvent(new CustomEvent("words-selected",{detail:{words:[...this.prefixes]}})),this.resetPointerInput())}resetPointerInput(){this.trail=[],this.prefixes.length=0,this.hoverLoc=void 0}clearPendingInputTimeout(){this.pendingInputTimeoutId&&(window.clearTimeout(this.pendingInputTimeoutId),this.pendingInputTimeoutId=0)}handleKeyDown(e){if(!this.shouldInteract())return;this.clearPendingInputTimeout(),this.resetPointerInput();let t=!1;switch(e.key){case"Enter":this.pendingKeyboardInput.length&&(this.dispatchEvent(new CustomEvent("words-selected",{detail:{words:[this.pendingKeyboardInput],checkPossible:!0}})),this.pendingKeyboardInput="");break;case"Esc":case"Escape":case"Clear":this.pendingKeyboardInput="",t=!0;break;case"Backspace":case"Del":case"Delete":this.pendingKeyboardInput.length&&(this.pendingKeyboardInput=this.pendingKeyboardInput.substring(0,this.pendingKeyboardInput.length-1),t=!0);break;default:if(1===e.key.length){const i=e.key.toUpperCase();i>="A"&&i<="Z"&&(this.pendingKeyboardInput+=i,t=!0)}}if(t){const e={words:this.pendingKeyboardInput?[this.pendingKeyboardInput]:[],checkPossible:!0};this.dispatchEvent(new CustomEvent("words-traced",{detail:e}))}this.pendingKeyboardInput&&(this.pendingInputTimeoutId=window.setTimeout((()=>{this.pendingKeyboardInput="",this.dispatchEvent(new CustomEvent("words-selected",{detail:{words:[]}}))}),2500))}updated(e){let t=!1;e.has("puzzleId")&&(t=!0,this.calcMetrics()),(e.has("puzzle")||e.has("isPaused"))&&(t=!0),e.has("externalPath")&&(t=!1),t&&this.resetPointerInput()}calcMetrics(){const e=this.getBoundingClientRect(),{puzzleId:t}=this;if(!t)return;const i=Math.min(e.width,e.height),s=t.spec.size;this.cellSpan=devicePixelRatio*i/s,this.sidePixels=i}pausedGrid(e){switch(e){case 4:default:return["LEAD","PIPE","WORD","GRID"];case 5:return["LEAD "," PIPE","     ","WORD "," GRID"];case 6:return["  LEAD","  PIPE","      ","      ","WORD  ","GRID  "]}}};Y([(0,o.Cb)({reflect:!0})],Q.prototype,"theme",void 0),Y([(0,o.Cb)({attribute:!1,hasChanged:(e,t)=>!(e===t||e&&t&&e.seed===t.seed)})],Q.prototype,"puzzleId",void 0),Y([(0,o.Cb)({attribute:!1})],Q.prototype,"puzzle",void 0),Y([(0,o.Cb)({type:Boolean,reflect:!0})],Q.prototype,"isPaused",void 0),Y([(0,o.Cb)({type:Boolean,reflect:!0})],Q.prototype,"isInteractive",void 0),Y([(0,o.Cb)({attribute:!1})],Q.prototype,"externalPath",null),Y([(0,o.SB)()],Q.prototype,"hoverLoc",void 0),Y([(0,o.SB)()],Q.prototype,"trail",void 0),Y([(0,o.SB)()],Q.prototype,"cellSpan",void 0),Y([(0,o.SB)()],Q.prototype,"sidePixels",void 0),Q=Y([(0,o.Mo)("grid-view")],Q);let J=class extends s.oi{static{this.styles=s.iv`
    :host {
      display: block;
    }

    a {
      cursor: pointer;
    }

    :host a {
      color: var(--text-color);
    }
  `}render(){return s.dy`
      <a @click=${this.openHelp} title="Help"
        ><mat-icon name="help"></mat-icon></a
      ><a @click=${this.openSettings} title="Settings"
        ><mat-icon name="settings"></mat-icon
      ></a>
    `}openHelp(){this.dispatchEvent(new CustomEvent("show-help",{bubbles:!0,composed:!0}))}openSettings(){this.dispatchEvent(new CustomEvent("show-settings",{bubbles:!0,composed:!0}))}};var V;J=function(e,t,i,s){var o,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([(0,o.Mo)("meta-panel")],J),function(e){e[e.E=0]="E",e[e.R=1]="R",e[e.R2=2]="R2",e[e.R3=3]="R3",e[e.F=4]="F",e[e.RF=5]="RF",e[e.R2F=6]="R2F",e[e.R3F=7]="R3F"}(V||(V={}));class Z{constructor(e,t){this.last=e;const i=new Set(t?.locs);i.add(e),this.locs=i}}class X{constructor(e){this.letter=e,this.paths=[]}}class ee{constructor(e,t){this.spec=e,this.grid=t,this.letterLocs=new Map,this.wordPaths=[];const{letterLocs:i}=this;for(const s of e.locs){const e=t[s.row].charAt(s.col);i.has(e)?i.get(e).push(s):i.set(e,[s])}}findPaths(e){const{letterLocs:t,wordPaths:i}=this;i.length>e.length&&(i.length=e.length);for(let s=0;s<e.length;++s){const o=e.charAt(s);if(s<i.length&&i[s].letter!==o&&(i.length=s),s===i.length){const r=new X(o);if(i.push(r),0===s)for(const e of t.get(o)??[])r.paths.push(new Z(e));else{const a=i[s-1].paths;for(const e of t.get(o)??[])for(const t of a)!t.locs.has(e)&&t.last.isAdjacentTo(e)&&r.paths.push(new Z(e,t));"U"===o&&"Q"===e.charAt(s-1)&&r.paths.push(...a)}}}return i[e.length-1]?.paths??[]}}var te,ie,se=i(513);!function(e){e.MAKE_GRID="MAKE_GRID"}(te||(te={})),function(e){e.GRID="GRID",e.UNKNOWN_VERSION="UNKNOWN_VERSION"}(ie||(ie={}));const oe=[{name:"Small",size:4,minLength:3,timerMinutes:3,locs:I(4)},{name:"Medium",size:5,minLength:4,timerMinutes:3,locs:I(5)},{name:"Large",size:6,minLength:5,timerMinutes:4,locs:I(6)}],re=new Map(oe.map((e=>[e.size,e]))),ae=new Map(oe.map((e=>[e.name.toLowerCase(),e])));class ne{constructor(e,t,i,s){if(this.version=e,this.dateString=t,this.spec=i,this.counter=s,!le(t))throw new Error(`Invalid date string '${t}'`)}get seed(){return`${this.version}:${this.dateString}:${this.spec.size}:${this.counter}`}toDbRange(){return IDBKeyRange.bound(`${this.version}:${this.dateString}:${this.spec.size}`,`${this.version}:${this.dateString}:${this.spec.size+1}`,!1,!0)}next(){return new ne(this.version,this.dateString,this.spec,1+this.counter)}compareTo(e){return this.version!==e.version?this.version-e.version:this.dateString!==e.dateString?this.dateString<e.dateString?-1:1:this.spec.size!==e.spec.size?this.spec.size-e.spec.size:this.counter-e.counter}toMakeGridMessage(){return{type:te.MAKE_GRID,version:this.version,seed:this.seed,size:this.spec.size,minLength:this.spec.minLength}}static daily(e=new Date){const t=new se.yG(de(e)),i=function(e){return oe[Math.floor(e.range(0,oe.length))]}(t);return t.free(),ne.forSpec(i,e)}static forSpec(e,t=new Date,i=1){return new ne(1,de(t),e,i)}static fromSeed(e){const t=e.split(":");if(4===t.length){const e=Number(t[0]),i=t[1],s=Number(t[2]),o=Number(t[3]);if(!isNaN(e)&&le(i)&&function(e){return re.has(e)}(s)&&!isNaN(o))return new ne(e,i,function(e){const t=re.get(e);if(!t)throw new Error(`Invalid grid size ${e}`);return t}(s),o)}throw new Error(`Seed string does not appear to be from PuzzleId: ${e}`)}}function de(e){return`${String(e.getFullYear()).padStart(4,"0")}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function le(e){const t=e.split("-").map(Number);return 3===t.length&&!t.some(isNaN)&&de(new Date(t[0],t[1]-1,t[2]))===e}class he{constructor(e,t,i,s){this.game=e,this.person=t,this.before=i,this.after=s}setUniqueWords(e){const t={kept:{words:0,points:0},lost:{words:0,points:0}};for(const i of this.before){const s=e.has(i)?t.kept:t.lost;++s.words,s.points+=ve.scoreWord(i)}this.result=t}getWordCounts(e){const t=this.game.wordsByCategory.get(e)??new Set;return{total:t.size,found:ce(t,this.before)+ce(t,this.after)}}}function ce(e,t){e.size>t.size&&([e,t]=[t,e]);let i=0;for(const s of e)t.has(s)&&++i;return i}var pe;!function(e){e[e.TOO_SHORT=0]="TOO_SHORT",e[e.NOT_A_WORD=1]="NOT_A_WORD",e[e.WORD=2]="WORD",e[e.DUPLICATE=3]="DUPLICATE",e[e.IMPOSSIBLE=4]="IMPOSSIBLE"}(pe||(pe={}));var ue=i(998);function me(e){return"object"==typeof e.firstBits}function ge(){return(0,ue.X3)("wordgrid",1,{upgrade(e){e.createObjectStore("games",{keyPath:"puzzleId"}).createIndex("by-last-played","lastPlayed");const t=e.createObjectStore("shares",{autoIncrement:!0});t.createIndex("by-person","person"),t.createIndex("by-puzzle-id","puzzleId")}})}function we(e,t){if(e===t)return!0;if(!e||!t)return!1;if(e.length!==t.length)return!1;for(let i=0,s=e.length;i<s;++i)if(e[i]!==t[i])return!1;return!0}function fe(e,t){return!!me(e)&&we(e.firstBits,t.firstBits)&&we(e.secondBits,t.secondBits)}function ye(e){const t=[...e].reverse(),i=[];for(let e=0;e<t.length;++e)i.push(t.map((t=>t.charAt(e))).join(""));return i}class ve{constructor(e,t,i=0,s=0,o=[],r=!1,a=null,n=V.E){this.puzzleId=e,this.currentPuzzle=t,this.priorElapsedMs=i,this.numFoundWithinTimeLimit=s,this.complete=r,this.found=new Set,this.reverseFound=[],this.earnedPointsCache=0,this.resumedTimestamp=0,this.lastPlayedTimestamp=0,this.currentD4=V.E,this.pathFinder=null;const d=new Map;let l=0;for(const[e,i]of t.words.entries()){let t=d.get(i);void 0===t&&(t=new Set,d.set(i,t)),t.add(e),l+=ve.scoreWord(e)}this.wordsByCategory=d,this.points={found:0,total:l},this.categories=[...d.keys()].sort(((e,t)=>e-t));for(const e of o)this.addPreviouslyFoundWord(e),this.found.size<=s&&(this.earnedPointsCache+=ve.scoreWord(e));this.lastPlayedTimestamp=a?a.getTime():0,this.applyD4(n)}get d4(){return this.currentD4}applyD4(e){let t=this.currentPuzzle.grid;for(let i=function(e){return 3&e}(e);i>0;--i)t=ye(t);return function(e){return Boolean(4&e)}(e)&&(t=function(e){return e.map((e=>e.split("").reverse().join("")))}(t)),this.currentD4=function(e,t){return 3&(4&e?e-t:e+t)|4&e^4&t}(this.currentD4,e),this.pathFinder=null,this.currentPuzzle={...this.currentPuzzle,grid:t}}get puzzle(){return this.currentPuzzle}static scoreWord(e){switch(e.length){case 3:case 4:return 1;case 5:return 2;case 6:return 3;case 7:return 5;case 8:return 11;default:return 2*e.length}}judgeWord(e,t){return this.found.has(e)?pe.DUPLICATE:this.currentPuzzle.words.has(e)?pe.WORD:t&&!this.isPossible(e)?pe.IMPOSSIBLE:e.length<this.puzzleId.spec.minLength?pe.TOO_SHORT:pe.NOT_A_WORD}isPossible(e){return this.findPaths(e).length>0}findPaths(e){let{pathFinder:t}=this;return t||(this.pathFinder=t=new ee(this.puzzleId.spec,this.currentPuzzle.grid)),t.findPaths(e)}addFoundWord(e,t){if(this.isPaused)throw new Error("This game is paused");const i=this.judgeWord(e,t);return i===pe.WORD&&(this.addPreviouslyFoundWord(e),this.timeExpired||(++this.numFoundWithinTimeLimit,this.earnedPointsCache+=ve.scoreWord(e)),this.lastPlayedTimestamp=Date.now()),i}addPreviouslyFoundWord(e){this.found.add(e),this.reverseFound.unshift(e);const t=ve.scoreWord(e);this.points.found+=t,this.found.size===this.currentPuzzle.words.size&&this.markComplete()}getWordCounts(){return{found:this.found.size,total:this.currentPuzzle.words.size}}getWordPoints(){return{...this.points}}get earnedPoints(){return this.earnedPointsCache}getWordCategories(){return this.categories}getFoundWords(e){return void 0===e?this.reverseFound:this.reverseFound.filter((t=>this.currentPuzzle.words.get(t)===e))}asSharedGameState(e){return this.convertToSharedGamesState(e,this.getWordsInProgress())}toSharedGameState(e){if(e.puzzleId!==this.currentPuzzle.message.seed)throw new Error(`Wrong shared game: ${e.puzzleId} instead of ${this.currentPuzzle.message.seed}`);return this.convertToSharedGamesState(e.person,ve.reconstructWords(this.currentPuzzle,e.wordsFound))}getWordsInProgress(){return{words:[...this.found],cutoff:this.numFoundWithinTimeLimit}}convertToSharedGamesState(e,t){const i=t.words,s=i.splice(t.cutoff);return new he(this,e,new Set(i),new Set(s))}getWords(e){return void 0===e?[...this.currentPuzzle.words.keys()]:[...this.currentPuzzle.words.keys()].filter((t=>this.currentPuzzle.words.get(t)===e))}get numWordsFoundBeforeTimeLimit(){return this.numFoundWithinTimeLimit}get isStarted(){return this.lastPlayedTimestamp>0}get isPaused(){return 0===this.resumedTimestamp}get elapsedMs(){let e=this.priorElapsedMs;return 0!==this.resumedTimestamp&&(e+=Date.now()-this.resumedTimestamp),e}get timeExpired(){return 0===this.msRemaining}get msRemaining(){return Math.max(0,6e4*this.puzzleId.spec.timerMinutes-this.elapsedMs)}get lastPlayed(){return this.lastPlayedTimestamp?new Date(this.lastPlayedTimestamp):null}resume(){if(this.complete)throw new Error("Can't resume a complete game");this.lastPlayedTimestamp=Date.now(),this.isPaused&&(this.resumedTimestamp=this.lastPlayedTimestamp)}pause(e){this.isStarted&&(this.lastPlayedTimestamp=e??Date.now()),this.isPaused||(this.priorElapsedMs=this.elapsedMs,this.resumedTimestamp=0)}markComplete(){this.pause(),this.complete=!0}get isComplete(){return this.complete}get wordsToStore(){if(!this.complete)return this.getWordsInProgress();const e=[...this.found],t=e.splice(this.numFoundWithinTimeLimit),i={firstBits:be(e,function(e){const t=new Map;let i=0;for(const s of e)t.set(s,i++);return t}(this.currentPuzzle.words.keys()))};if(t.length){const s=new Map,o=new Set(e);let r=0;for(const e of this.currentPuzzle.words.keys())o.has(e)||s.set(e,r++);i.secondBits=be(t,s)}return i}static reconstructWords(e,t){const i=[...e.words.keys()],s=ze(i,t.firstBits),o=s.length;if(t.secondBits){const e=new Set(i);for(const t of s)e.delete(t);s.push(...ze([...e],t.secondBits))}return{words:s,cutoff:o}}static fromDbRecord(e,t){let i=e.wordsFound,s=!1;return me(i)&&(i=ve.reconstructWords(t,i),s=!0),new ve(ne.fromSeed(t.message.seed),t,e.elapsedMs,i.cutoff,i.words,s,e.lastPlayed,e.d4)}}function be(e,t){const i=new Uint8Array(Math.ceil(t.size/8));for(const s of e){const e=t.get(s),o=7&e;i[Math.floor(e/8)]|=1<<o}return i}function ze(e,t){const i=[];for(let s=0;s<t.length;++s){const o=t[s];if(o)for(let t=0;t<8;++t)o&1<<t&&i.push(e[8*s+t])}return i}let $e=Date.now();function Se(){$e=Date.now()}function xe(e){let t=se.tb[e];return t.startsWith("Level")&&(t="Level "+t.substring(5)),t}function Te(e,t){return 1===t?e:`${e}s`}function Pe(e,t){return`${e} ${Te(t,e)}`}function Ie(e,t){return e?`${e.found} / ${e.total}\n  ${Te(t,e.total)}\n  (${Math.round(e.found/e.total*100)}%)`:""}async function ke(e,t){const i=t.lastPlayed||new Date;Se(),await e.put("games",{puzzleId:t.puzzleId.seed,lastPlayed:i,elapsedMs:t.elapsedMs,wordsFound:t.wordsToStore,d4:t.d4})}var Ce=function(e,t,i,s){var o,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ee=class extends s.oi{constructor(){super(...arguments),this.word="",this.category=null,this.theme="light",this.expand=!1,this.open=!1,this.timeoutId=0}static{this.styles=s.iv`
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
  `}render(){const{category:e}=this,t=ve.scoreWord(this.word);return s.dy`
      <a @click=${this.toggle}>${this.word}</a>
      ${this.open?s.dy`
            <span class="more">
              [${e?`${xe(e)} —`:""}${t}
              point${t>1?"s":""} —
              <a
                href="https://www.google.com/search?q=define+%2B${this.word}+OR+${this.word}"
                target="_blank"
                >look up</a
              >]
            </span>
          `:""}
    `}updated(e){e.has("expand")&&this.expand!==this.open&&this.toggle()}toggle(e){this.open=!this.open,this.dispatchEvent(new CustomEvent("word-expanded",{detail:this.open?this.word:"",bubbles:!0,composed:!0})),this.timeoutId&&(window.clearTimeout(this.timeoutId),this.timeoutId=0),this.open&&(this.timeoutId=window.setTimeout((()=>{this.open&&this.toggle(),this.timeoutId=0}),2500))}};Ce([(0,o.Cb)()],Ee.prototype,"word",void 0),Ce([(0,o.Cb)({type:Number})],Ee.prototype,"category",void 0),Ce([(0,o.Cb)()],Ee.prototype,"theme",void 0),Ce([(0,o.Cb)({type:Boolean})],Ee.prototype,"expand",void 0),Ce([(0,o.SB)()],Ee.prototype,"open",void 0),Ee=Ce([(0,o.Mo)("solution-word")],Ee);var De,Oe=i(455),Re=i(36);function We(e,t={}){gtag("event",e,t)}!function(e){e.ACTION="wg_action",e.SYSTEM="wg_system"}(De||(De={}));const Le=new Worker(new URL(i.p+i.u(975),i.b),{name:"words"});Le.onerror=e=>{We(De.SYSTEM,{category:"words worker error",detail:String(e)})};const Ue=[];function Be(e){return new Promise(((t,i)=>{Ue.push({message:e.toMakeGridMessage(),resolve:t,reject:i}),1===Ue.length&&Ae()}))}function Ae(){Ue.length&&Le.postMessage(Ue[0].message)}Le.onmessage=e=>{if(!Ue.length)return void We(De.SYSTEM,{category:"words worker unexpected message",detail:JSON.stringify(e)});const t=Ue.shift();if(Ae(),e.data.message.seed===t?.message.seed)switch(e.data.type){case ie.GRID:void 0!==e.data.wordsLoadMs&&We(De.SYSTEM,{category:"words worker load-words time",elapsedMs:e.data.wordsLoadMs}),void 0!==e.data.elapsedMs&&We(De.SYSTEM,{category:"words worker make-grid time",detail:e.data.message.seed,elapsedMs:e.data.elapsedMs}),t.resolve(e.data);break;case ie.UNKNOWN_VERSION:We(De.SYSTEM,{category:"words worker unknown version",detail:`${e.data.message.version} vs ${e.data.versions}`}),t.reject(`The words worker can't honor the version we asked for, ${e.data.message.version}`)}else We(De.SYSTEM,{category:"words worker wrong puzzle received",detail:`${JSON.stringify(e.data.message)} instead of ${JSON.stringify(t?.message)}`})};var Me=function(e,t,i,s){var o,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Fe=class extends s.oi{constructor(){super(...arguments),this.theme="light",this.puzzleId=ne.daily(),this.resumeImmediately=!1,this.loadingWords=!0,this.puzzle=null,this.gameState=null,this.db=ge(),this.foregroundnessHandler=()=>{"visible"!==document.visibilityState&&this.pauseGame("foregroundness")},this.windowBlurHandler=()=>{this.pauseGame("window blur")},this.lastInteraction=new Date,this.spacebarHandler=e=>{this.noteInteraction()," "===e.key&&(this.gameState?.isPaused?this.resumePlay():this.pauseGame("spacebar"))},this.showTimerHandler=()=>{this.requestUpdate()},this.gridTransitionQueue=[],this.gridTransitionClasses={},this.pendingWords=[],this.pendingWordsJudgements=[],this.pendingWordsTimeoutId=0,this.latestWord=""}static{this.styles=[q,s.iv`
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
        --grid-spec-size: 6;
        --grid-optimal-cell-side-extent: 80px;
        --below-grid-height: 80px;
        --grid-optimal-width: calc(
          var(--grid-spec-size) * var(--grid-optimal-cell-side-extent) + 40px
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
        user-select: none;
        -webkit-user-select: none;
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

      grid-view.rotate {
        transform: rotate(90deg);
        transition: transform ${_};
      }

      grid-view.flip {
        transform: scale(-1, 1);
        transition: transform ${_};
      }

      grid-view.pause-changing {
        transform: scaleY(0);
        transition: transform 80ms;
      }

      grid-view.pause-changed {
        transform: scaleY(1);
        transition: transform 80ms;
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
        user-select: none;
        -webkit-user-select: none;
      }

      #below-grid > * {
        text-align: center;
        flex: 3 1 0;
      }

      #below-grid > *:nth-child(odd) {
        flex: 1 1 0;
      }

      @media (max-width: 800px) {
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
    `]}render(){const{theme:e,gameState:t}=this,i=e===l?"light"===e?"dark":"light":"auto";return s.dy`
      <div id="controls">
        <div>
          <a @click=${this.goToHistory} title="Go to the history page">
            <mat-icon name="arrow_back"></mat-icon>
          </a>
        </div>
        <div>
          <a @click=${this.setTheme} title="Switch to ${i} theme">
            <mat-icon
              name=${"auto"===i?"contrast":`${i}_mode`}
              data-theme=${i}
            ></mat-icon>
          </a>
          ${t&&!t.isPaused?s.dy`
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
        ${t?s.dy`
              <div>
                <b>${t.puzzleId.spec.minLength}</b> or more letters per
                word.
                <br class="opt-break" />
                ${f()?s.dy`
                      Earned ${Pe(t.earnedPoints,"point")}.
                    `:""}
              </div>
              <div>
                ${Ie(t.getWordCounts(),"word")},
                <br />
                ${Ie(t?.getWordPoints(),"point")}.
              </div>
            `:""}
      </div>
      <div id="grid">
        <grid-view
          theme=${e}
          class=${(0,Oe.$)(this.gridTransitionClasses)}
          isInteractive
          .isPaused=${t?.isPaused??!0}
          .puzzleId=${this.puzzleId}
          .puzzle=${this.puzzle}
          @words-traced=${this.wordsTraced}
          @words-selected=${this.wordsSelected}
          @transitionend=${this.handleGridTransition}
        ></grid-view>
        <div id="below-grid">
          ${this.loadingWords?s.dy`
                <div></div>
                <div>Loading words...</div>
                <div></div>
              `:t?s.dy`
                <game-timer
                  .gameState=${t}
                  @timer-expired=${this.timerExpired}
                ></game-timer>
                ${this.pendingWords.length?s.dy`
                      <div>
                        ${this.pendingWords.map(((e,t)=>s.dy`<span
                              class=${this.judgementClass(this.pendingWordsJudgements[t])}
                            >
                              ${e}
                            </span>`))}
                      </div>
                      <div></div>
                    `:t.isPaused?s.dy`
                      <div>
                        ${t.isStarted?s.dy`
                              <a @click=${this.resumePlay} title="Resume play">
                                <mat-icon
                                  name="play_circle"
                                  size="large"
                                ></mat-icon>
                              </a>
                            `:s.dy`
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
                    `:s.dy`
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
        ${(0,Re.r)(this.gameState?.getFoundWords()??[],(e=>e),(e=>s.dy`
            <div>
              <solution-word
                word=${e}
                theme=${this.theme}
                .category=${this.puzzle.words.get(e)??null}
                .expand=${e===this.latestWord}
              ></solution-word>
            </div>
          `))}
      </div>
    `}noteInteraction(){this.lastInteraction=new Date}handleGridTransition(e){const{pendingGridTransition:t}=this;if(t){const e={...this.gridTransitionClasses};delete e[t.className],this.gridTransitionClasses=e,this.pendingGridTransition=void 0,t.updateGrid()}setTimeout((()=>this.runGridTransition()))}runGridTransition(){this.pendingGridTransition||this.gridTransitionQueue.length&&(this.pendingGridTransition=this.gridTransitionQueue.shift(),this.gridTransitionClasses={...this.gridTransitionClasses},this.gridTransitionClasses[this.pendingGridTransition?.className]=!0)}connectedCallback(){super.connectedCallback(),document.addEventListener("visibilitychange",this.foregroundnessHandler),window.addEventListener("blur",this.windowBlurHandler),window.addEventListener("keydown",this.spacebarHandler),d.addEventListener("show-timer",this.showTimerHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.foregroundnessHandler),window.removeEventListener("blur",this.windowBlurHandler),window.removeEventListener("keydown",this.spacebarHandler),d.removeEventListener("show-timer",this.showTimerHandler)}updated(e){e.has("puzzleId")&&this.requestAndLoadPuzzle()}setTheme(e){p(e.target.dataset.theme)}async requestAndLoadPuzzle(){const{puzzleId:e}=this;this.puzzle=null,this.gameState=null,this.style.setProperty("--grid-spec-size",e.spec.size.toString());const t=await Be(e);if(this.puzzleId.seed===e.seed)if(t.words.size<50){const{resumeImmediately:t}=this;this.dispatchEvent(new CustomEvent("play-puzzle",{detail:{puzzleId:e.next(),resumeImmediately:t},bubbles:!0,composed:!0}))}else this.loadPuzzle(t,e)}async loadPuzzle(e,t){const i=await this.db,s=await i.get("games",e.message.seed);this.gameState=s?ve.fromDbRecord(s,e):new ve(t,e),this.puzzle=this.gameState.puzzle,this.gameState.isComplete?this.redirectToHistory():this.resumeImmediately&&this.gameState.resume()}async saveGame(){const{gameState:e}=this;e&&e.lastPlayed&&await ke(await this.db,e)}async timerExpired(e){e.detail&&(await this.pauseGameAsync(),window.confirm("Time's up!\n\nKeep looking for words?\n\nCancel to quit.")?(await(0,new Promise((e=>setTimeout(e,0)))),this.resumePlay()):await this.quit())}async goToHistory(){await this.saveGame(),this.redirectToHistory(),We(De.ACTION,{category:"go to history"})}resumePlay(){this.noteInteraction(),this.gridTransitionQueue.push({className:"pause-changing",updateGrid:()=>{const{gameState:e}=this;e&&(e.resume(),We(De.ACTION,{category:"resume"})),this.gridTransitionQueue.push({className:"pause-changed",updateGrid:()=>{}})}}),this.runGridTransition()}pausePlay(){this.noteInteraction(),this.pauseGame("button")}async pauseGameAsync(e){this.gameState?.pause(e),this.requestUpdate(),await this.saveGame(),We(De.ACTION,{category:"pause"})}pauseGame(e){const t=new Date,i=de(t),s=de(this.lastInteraction);let o=t.getTime();i!==s&&(o=this.lastInteraction.getTime(),We(De.ACTION,{category:"pause-next-day",detail:e})),this.gridTransitionQueue.push({className:"pause-changing",updateGrid:()=>{this.pauseGameAsync(o),this.gridTransitionQueue.push({className:"pause-changed",updateGrid:()=>{}})}}),this.runGridTransition()}async quit(){this.gameState?.markComplete(),await this.saveGame(),this.redirectToHistory(),We(De.ACTION,{category:"quit"})}rotatePuzzle(e){this.noteInteraction(),this.gridTransitionQueue.push({className:"rotate",updateGrid:()=>{const{gameState:e}=this;e&&(this.puzzle=e.applyD4(V.R),We(De.ACTION,{category:"rotate"}))}}),this.runGridTransition()}flipPuzzle(e){this.noteInteraction(),this.gridTransitionQueue.push({className:"flip",updateGrid:()=>{const{gameState:e}=this;e&&(this.puzzle=e.applyD4(V.F),We(De.ACTION,{category:"flip"}))}}),this.runGridTransition()}clearPendingWordsTimeout(){this.pendingWordsTimeoutId&&(window.clearTimeout(this.pendingWordsTimeoutId),this.pendingWordsTimeoutId=0)}wordsTraced(e){this.noteInteraction(),this.pendingWords=e.detail.words,this.pendingWordsJudgements=e.detail.words.map((t=>this.gameState?.judgeWord(t,e.detail.checkPossible)??pe.NOT_A_WORD)),this.clearPendingWordsTimeout()}wordsSelected(e){this.noteInteraction(),this.pendingWords=e.detail.words,this.pendingWordsJudgements=e.detail.words.map((t=>this.gameState?.addFoundWord(t,e.detail.checkPossible)??pe.NOT_A_WORD)),this.clearPendingWordsTimeout();const t=this.pendingWordsJudgements.findIndex((e=>e===pe.WORD));if(t>=0)this.latestWord=e.detail.words[t],this.found?.scrollTo({left:0,behavior:"smooth"}),this.saveGame(),this.gameState?.isComplete&&this.redirectToHistory();else{const t=this.pendingWordsJudgements.findIndex((e=>e===pe.DUPLICATE));if(t>=0){this.latestWord=e.detail.words[t];const i=this.shadowRoot?.querySelector(`solution-word[word=${this.latestWord}]`);window.setTimeout((()=>{i?.scrollIntoView({behavior:"smooth"})}))}}this.pendingWordsTimeoutId=window.setTimeout((()=>{this.pendingWords=[]}),1e3)}judgementClass(e){switch(e){case pe.TOO_SHORT:return"too-short-word";case pe.NOT_A_WORD:default:return"not-a-word";case pe.DUPLICATE:return"duplicate-word";case pe.WORD:return"found-new-word";case pe.IMPOSSIBLE:return"impossible-word"}}redirectToHistory(){this.dispatchEvent(new CustomEvent("show-history",{detail:{puzzleId:this.puzzleId},bubbles:!0,composed:!0}))}};function Ge(e,t){return new se.yG(`${e}:${t}`)}Me([(0,o.Cb)({reflect:!0})],Fe.prototype,"theme",void 0),Me([(0,o.Cb)({attribute:!1,hasChanged:(e,t)=>e?.seed!==t?.seed})],Fe.prototype,"puzzleId",void 0),Me([(0,o.Cb)({type:Boolean})],Fe.prototype,"resumeImmediately",void 0),Me([(0,o.Cb)({type:Boolean})],Fe.prototype,"loadingWords",void 0),Me([(0,o.IO)("#found")],Fe.prototype,"found",void 0),Me([(0,o.SB)()],Fe.prototype,"puzzle",void 0),Me([(0,o.SB)()],Fe.prototype,"gridTransitionClasses",void 0),Me([(0,o.SB)()],Fe.prototype,"pendingWords",void 0),Me([(0,o.SB)()],Fe.prototype,"latestWord",void 0),Fe=Me([(0,o.Mo)("game-view")],Fe);var Ne=function(e,t,i,s){var o,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let He=class extends s.oi{constructor(){super(...arguments),this.theme="light",this.expanded=!1,this.selectShareAs=!1,this.record=null,this.game=null,this.shares=[],this.uniqueWords=new Set,this.shareAs="",this.shareClipboardText="",this.copyToClipboardFailed=!1,this.shareBack=!1,this.db=ge(),this.prevShownWord="",this.shownWordCount=0,this.shownPath={locs:[]}}static{this.styles=[K,q,s.iv`
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
    `]}render(){const{record:e,game:t,expanded:i,offsetLeft:o,shares:r}=this;if(!e)return"";this.style.setProperty("--left-inset",`${o}px`);const a=ne.fromSeed(e.puzzleId),n=t?.getWordCategories()??[];return s.dy`
      <div>
        ${a.spec.name} puzzle #${a.counter} of
        ${a.dateString}
      </div>
      ${t?s.dy`
            <div>
              Earned ${Pe(t.earnedPoints,"point")} for finding
              ${Pe(t.numWordsFoundBeforeTimeLimit,"word")} within
              ${t.puzzleId.spec.timerMinutes} minutes.
            </div>
            <div>
              Found ${Ie(t.getWordCounts(),"word")},
              ${Ie(t.getWordPoints(),"point")}.
            </div>
            <div>
              ${t.isComplete?s.dy`
                    Complete
                    ${r.length>1?s.dy`
                          (${Pe(r.length-1,"other player")})
                        `:""}
                    ${i?this.renderShareForm():s.dy`&mdash; expand to share`}
                  `:s.dy`
                    Ongoing
                    <a @click=${this.resumeGame} title="Resume play">
                      <mat-icon name="play_circle"></mat-icon>
                    </a>
                    ${r.length>1?s.dy`
                          (${Pe(r.length-1,"other player")}
                          &mdash;
                          ${t.timeExpired?s.dy`quit
                                <a @click=${this.quitGame} title="Quit">
                                  <mat-icon name="stop_circle"></mat-icon>
                                </a>`:"finish game"}
                          to compare)
                        `:s.dy`&mdash;
                        ${t.timeExpired?s.dy`quit
                              <a @click=${this.quitGame} title="Quit">
                                <mat-icon name="stop_circle"></mat-icon>
                              </a>`:"finish game"}
                        to share `}
                  `}
              <a
                @click=${this.toggleExpansion}
                title=${i?"Collapse":"Expand"}
              >
                <mat-icon
                  name="expand_${i?"less":"more"}"
                ></mat-icon>
              </a>
            </div>
            ${i?s.dy`
                  ${t.isComplete?s.dy`
                        <div id="complete">
                          <grid-view
                            theme=${this.theme}
                            padding="10"
                            .isPaused=${!1}
                            .puzzleId=${a}
                            .puzzle=${t.puzzle}
                            .externalPath=${this.shownPath}
                          ></grid-view>
                          <div id="all-words" class="may-scroll">
                            ${this.renderAllWords(t,n)}
                          </div>
                        </div>
                      `:s.dy`
                        <div id="ongoing">
                          ${n.map((e=>s.dy`
                              <div class="cat">${xe(e)}</div>
                              ${[...t.getFoundWords(e)].sort().map((e=>s.dy`
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
          `:s.dy` Loading... `}
    `}renderShareForm(){return s.dy`<form @submit=${this.shareGame}>
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
        ${v.slice().map((e=>s.dy`<option value=${e}></option>`))}
      </datalist>
      ${this.shareAs?s.dy`<button
              id="share-button"
              type="submit"
              class="icon-button"
              title="Share"
              tabindex="0"
            >
              <mat-icon name="share"></mat-icon>
            </button>
            ${this.shares.length>1?s.dy`
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
    </form>`}renderAllWords(e,t){const{shares:i,uniqueWords:o}=this,r=Math.max(...i.map((e=>e.result.kept.points)));return this.style.setProperty("--names-appear",""+(i.length>1?1:0)),this.style.setProperty("--num-shares",`${i.length}`),s.dy`
      <table>
        <colgroup>
          <col class="word-column" />
          <col class="person-column" span=${i.length} />
        </colgroup>
        ${i.length>1?s.dy`
              <tr class="names-row">
                <th class="word-column"></th>
                ${i.map((e=>s.dy`<th
                      title=${e.person}
                      class=${e.result.kept.points===r?"winner":""}
                    >
                      <div class="person-name">${e.person}</div>
                    </th>`))}
              </tr>
              <tr>
                <td class="word-column"></td>
                ${i.map((e=>{const{result:t}=e;return s.dy`<td>
                    Kept ${Pe(t.kept.points,"point")}, lost
                    ${t.lost.points}.
                  </td>`}))}
              </tr>
            `:""}
        ${t.map((t=>s.dy`
            <tr class="cat-row">
              <th class="word-column">${xe(t)}</th>
              ${i.map((e=>{return s.dy`
                  <th>${i=e.getWordCounts(t),`${i.found}/${i.total}`} words</th>
                `;var i}))}
            </tr>
            ${e.getWords(t).map((e=>s.dy`
                <tr>
                  <td class="word-column">
                    <solution-word
                      word=${e}
                      theme=${this.theme}
                      @word-expanded=${this.showWord}
                    ></solution-word>
                  </td>
                  ${i.map((t=>s.dy`
                      <td>
                        ${t.before.has(e)?s.dy`
                              <mat-icon name="check_circle_outline"></mat-icon>
                              ${o.has(e)?s.dy`<span class="unique"
                                    >+${ve.scoreWord(e)}</span
                                  >`:s.dy`<span class="duplicate">+0</span>`}
                            `:t.after.has(e)?s.dy` <mat-icon name="check"></mat-icon> `:""}
                      </td>
                    `))}
                </tr>
              `))}
          `))}
      </table>
    `}async updated(e){e.has("record")&&this.loadGame(),this.expanded&&this.selectShareAs&&!this.shareAs&&!e.has("shownPath")&&(await 0,this.shareAsInput&&this.shareAsInput.select())}showWord(e){const{game:t}=this;if(!t)return;const i=e.detail;if(i){i===this.prevShownWord?++this.shownWordCount:(this.shownWordCount=0,this.prevShownWord=i);const e=t.findPaths(i);this.shownPath=e[this.shownWordCount%e.length]}else this.shownPath={locs:[]}}async loadGame(){const{record:e}=this;if(!e)return;const t=await Be(ne.fromSeed(e.puzzleId)),i=ve.fromDbRecord(e,t),s=(await this.db).transaction("shares").store.index("by-puzzle-id"),o=[i.asSharedGameState("You")],r=new Set(o[0].before),a=new Set;for await(const t of s.iterate(e.puzzleId)){const e=i.toSharedGameState(t.value);o.push(e);for(const t of e.before)r.has(t)?(r.delete(t),a.add(t)):a.has(t)||r.add(t)}for(const e of o)e.setUniqueWords(r);this.shares=o,this.uniqueWords=r,this.shareBack=o.length>1,this.game=i,this.dispatchEvent(new CustomEvent("game-loaded",{detail:i.puzzleId,bubbles:!0,composed:!0}))}handleShareAsUpdated(e){this.shareAs=e.target.value,this.shareClipboardText="",this.copyToClipboardFailed=!1}handleShareBackChanged(e){this.shareBack=e.target.checked}async shareGame(e){e.preventDefault(),e.stopPropagation(),this.shareClipboardText="",this.copyToClipboardFailed=!1;const{game:t,shareAs:i,shares:s,shareBack:o}=this;if(t){const e=function(e,t){const{wordsToStore:i}=e;if(!me(i))return;const s=Ge(e.puzzleId.seed,t),o=se.H6(i.firstBits,s);let r=`${location.origin}${location.pathname}#share/${e.puzzleId.seed}/${encodeURIComponent(t)}/${o}`;return i.secondBits&&(r+=`/${se.H6(i.secondBits,s)}`),s.free(),r}(t,i);if(!e)return;const r="Leadpipe Wordgrid",a=function(e,t,i,s){const o=`${t} earned ${Pe(e.earnedPoints,"point")}`;if(s){const e=i.length-1;let t=[];for(let s=1;s<=e;++s){const o=i[s],r=`${o.person} (${o.result.kept.points})`;1===s&&e<=2?t.push(r):s===e?t.push(`and ${r}`):t.push(`${r},`)}return`${o}, kept ${i[0].result.kept.points} versus ${t.join(" ")}.`}return`${o}.  Share back when you've finished!`}(t,i,s,o);!function(e){const t=new Set([e]);for(const e of v)if(t.add(e),t.size>=10)break;v=[...t],window.localStorage.setItem("monikers",JSON.stringify(v))}(i);let n=!1;if("share"in navigator)try{await navigator.share({title:r,text:a,url:e}),n=!0}catch(e){We(De.SYSTEM,{category:"navigator.share failed",detail:`${e}`})}let d=!1;if(!n){this.shareClipboardText=`${a}  ${e}`;try{await navigator.clipboard.writeText(this.shareClipboardText),d=!0}catch(e){We(De.SYSTEM,{category:"navigator.clipboard.writeText failed",detail:`${e}`})}}this.copyToClipboardFailed=!n&&!d,this.copyToClipboardFailed&&(await 0,this.shareTextInput&&this.shareTextInput.select()),We(De.ACTION,{category:o?"share back":"share",detail:n?"system":d?"clipboard":"manual"})}}resumeGame(){this.game&&(this.dispatchEvent(new CustomEvent("play-puzzle",{detail:{puzzleId:this.game.puzzleId,resume:!0},bubbles:!0,composed:!0})),We(De.ACTION,{category:"resume from history"}))}async quitGame(){this.game&&(this.game.markComplete(),await ke(await this.db,this.game),this.dispatchEvent(new CustomEvent("show-history",{detail:{puzzleId:this.game.puzzleId,selectShareAs:!1},bubbles:!0,composed:!0})),this.requestUpdate(),We(De.ACTION,{category:"quit from history"}))}toggleExpansion(){const e=this.expanded?void 0:this.game?.puzzleId;this.dispatchEvent(new CustomEvent("show-history",{detail:{puzzleId:e,selectShareAs:!0},bubbles:!0,composed:!0})),We(De.ACTION,{category:"expand history"})}};Ne([(0,o.Cb)({reflect:!0})],He.prototype,"theme",void 0),Ne([(0,o.Cb)({type:Boolean,reflect:!0})],He.prototype,"expanded",void 0),Ne([(0,o.Cb)({type:Boolean})],He.prototype,"selectShareAs",void 0),Ne([(0,o.Cb)({attribute:!1})],He.prototype,"record",void 0),Ne([(0,o.SB)()],He.prototype,"game",void 0),Ne([(0,o.SB)()],He.prototype,"shareAs",void 0),Ne([(0,o.SB)()],He.prototype,"shareClipboardText",void 0),Ne([(0,o.SB)()],He.prototype,"copyToClipboardFailed",void 0),Ne([(0,o.SB)()],He.prototype,"shareBack",void 0),Ne([(0,o.IO)("#share-text-input")],He.prototype,"shareTextInput",void 0),Ne([(0,o.IO)("#share-as")],He.prototype,"shareAsInput",void 0),Ne([(0,o.IO)("#complete")],He.prototype,"completeBlock",void 0),Ne([(0,o.SB)()],He.prototype,"shownPath",void 0),He=Ne([(0,o.Mo)("game-summary")],He);var je=function(e,t,i,s){var o,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let _e=class extends s.oi{constructor(){super(...arguments),this.theme="light",this.expandedPuzzle="",this.selectShareAs=!1,this.gameRecordsByDate=null,this.db=ge()}static{this.styles=[q,s.iv`
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
    `]}render(){const{gameRecordsByDate:e,expandedPuzzle:t,selectShareAs:i}=this;return e?s.dy` <meta-panel></meta-panel>
      ${[...e.entries()].map((([e,o])=>s.dy`
          <div>
            <span class="date">${e}</span>
            <ul>
              ${o.map((e=>s.dy`
                  <li id=${e.puzzleId}>
                    <game-summary
                      theme=${this.theme}
                      .expanded=${t===e.puzzleId}
                      .selectShareAs=${i}
                      .record=${e}
                      @game-loaded=${this.handleGameLoaded}
                    ></game-summary>
                  </li>
                `))}
            </ul>
          </div>
        `))}`:"Loading games..."}connectedCallback(){super.connectedCallback(),this.loadGames()}disconnectedCallback(){this.gameRecordsByDate=null,super.disconnectedCallback()}updated(e){e.has("expandedPuzzle")&&this.scrollToExpandedSummary()}async scrollToExpandedSummary(){await 0;const e=!this.gameRecordsByDate||!this.expandedPuzzle,t=this.gameRecordsByDate?.values().next()?.value[0].puzzleId===this.expandedPuzzle,i=this.shadowRoot?.querySelector("game-summary[expanded]"),s=i instanceof He?i.completeBlock:void 0;s?s.scrollIntoView({behavior:"smooth"}):i&&!t?i.scrollIntoView({behavior:"smooth"}):e||this.scrollTo(0,0)}async loadGames(){const e=(await this.db).transaction("games").store.index("by-last-played"),t=new Map;for await(const i of e.iterate(null,"prev")){const e=i.key.toDateString(),s=i.value,o=t.get(e);o?o.push(s):t.set(e,[s])}this.gameRecordsByDate=t,Se()}handleGameLoaded(e){this.scrollToExpandedSummary()}};je([(0,o.Cb)({reflect:!0})],_e.prototype,"theme",void 0),je([(0,o.Cb)()],_e.prototype,"expandedPuzzle",void 0),je([(0,o.Cb)({type:Boolean})],_e.prototype,"selectShareAs",void 0),je([(0,o.SB)()],_e.prototype,"gameRecordsByDate",void 0),_e=je([(0,o.Mo)("history-view")],_e);var Ke=function(e,t,i,s){var o,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const qe=Date.now();let Ye,Qe=ne.daily();async function Je(e){window.clearTimeout(Ye);const t=Date.now(),i=ne.daily();i.seed>Qe.seed&&t>$e+3e5&&(We(De.SYSTEM,{category:"made daily puzzle"}),Qe=i,await e.cleanDb(),e.dispatchEvent(new CustomEvent("play-puzzle",{detail:{puzzleId:i},bubbles:!0,composed:!0})),Date.now()-qe>6048e5&&location.replace(location.pathname)),Ye=window.setTimeout((()=>Je(e)),36e5)}We(De.SYSTEM,{category:"page loaded"});const Ve="1:1776-07-04:4:1",Ze=ne.fromSeed(Ve),Xe={type:ie.GRID,message:{type:te.MAKE_GRID,version:1,seed:Ve,size:4,minLength:3},grid:["TLHS","GTTS","AEOE","CSPB"],words:new Map},et={locs:[P(0,3),P(1,2),P(2,2),P(3,2),P(3,1)]},tt={locs:[P(1,0),P(2,0),P(1,1),P(2,1),P(3,2),P(2,2),P(1,3),P(1,2)]};let it=class extends s.oi{static{this.styles=[q,s.iv`
      :host {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        --background: ${E};
        --text-color: ${k};
        --highlight-background: ${O};
        --scrollbar-thumb-color: #bbb;
        --scrollbar-track-color: #eee;
        background: var(--background);
        color: var(--text-color);
      }

      :host([theme='dark']) {
        --background: ${D};
        --text-color: ${C};
        --highlight-background: ${W};
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
    `]}render(){return[this.dialogRenderer?.call(this),this.renderPage()]}renderHelpDialog(){return s.dy`
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
              .puzzleId=${Ze}
              .puzzle=${Xe}
              .externalPath=${0===this.helpOption?et:tt}
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
    `}renderSettingsDialog(){return s.dy`
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
    `}renderPage(){switch(this.page){case"play":return s.dy`
          <game-view
            theme=${this.theme}
            class="may-scroll"
            .puzzleId=${ne.fromSeed(this.puzzleSeed)}
            .resumeImmediately=${this.resumeImmediately}
            .loadingWords=${this.loadingWords}
          ></game-view>
        `;case"history":return s.dy`
          <history-view
            theme=${this.theme}
            class="may-scroll"
            expandedPuzzle=${this.puzzleSeed}
            .selectShareAs=${this.selectShareAs}
          ></history-view>
        `;default:!function(e){throw new Error(e)}(this.page)}}renderHelpOption(e,t){const i=this.helpOption===t?"selected":"";return s.dy`
      <span class=${i}
        ><a @click=${this.setHelpOption} data-option=${t} tabindex="0"
          >${e}</a
        ></span
      >
    `}renderThemeChoice(e,t){const i=e.toLowerCase(),o=this.preferredTheme===i?"selected":"";return s.dy`
      <div class=${o}>
        <a @click=${this.setPreferredTheme} data-theme=${i} tabindex="0">
          <mat-icon name=${t}></mat-icon>
          ${e}
        </a>
      </div>
    `}renderTimerChoice(e,t){const i=this.showTimer===e?"selected":"";return s.dy`
      <div class=${i}>
        <a @click=${this.setShowTimer} data-show=${e} tabindex="0">
          <mat-icon name=${t}></mat-icon>
          ${e?"Show":"Don't show"} the timer
        </a>
      </div>
    `}renderNewPuzzleButton(e){return s.dy`
      <button @click=${this.newPuzzle} data-name="${e}">${e}</button>
    `}constructor(){super(),this.theme=c(),this.page="play",this.puzzleSeed=Qe.seed,this.selectShareAs=!1,this.resumeImmediately=!1,this.preferredTheme=h,this.showTimer=f(),this.loadingWords=!0,this.helpOption=0,this.db=ge(),this.themeHandler=e=>{this.theme=e.detail},this.popstateHandler=()=>{this.interpretHash()},this.dailyPuzzleUpdater=()=>{Je(this)},this.addEventListener("play-puzzle",(e=>this.handlePlayPuzzle(e))),this.addEventListener("show-help",(()=>this.handleShowHelp())),this.addEventListener("show-history",(e=>this.handleShowHistory(e))),this.addEventListener("show-settings",(()=>this.handleShowSettings())),this.trackWordsLoading(),this.startApp(),Je(this),b||window.setTimeout((()=>{this.handleShowHelp()}))}connectedCallback(){super.connectedCallback(),d.addEventListener("current-theme",this.themeHandler),window.addEventListener("popstate",this.popstateHandler),window.addEventListener("focus",this.dailyPuzzleUpdater),window.addEventListener("blur",this.dailyPuzzleUpdater),document.addEventListener("visibilitychange",this.dailyPuzzleUpdater)}disconnectedCallback(){super.disconnectedCallback(),d.removeEventListener("current-theme",this.themeHandler),window.removeEventListener("popstate",this.popstateHandler),window.removeEventListener("focus",this.dailyPuzzleUpdater),window.removeEventListener("blur",this.dailyPuzzleUpdater),document.removeEventListener("visibilitychange",this.dailyPuzzleUpdater)}parseHash(){const{hash:e}=location;if(e.startsWith("#")){const{pathname:t,searchParams:i}=new URL(`${location.origin}/${e.substring(1)}`),s=t.substring(1).split("/");return[s.shift()??"",s,i]}return["",[],new URLSearchParams]}interpretHash(){let[e,t,i]=this.parseHash(),s=t[0]??"";"history"!==e&&(e="play"),"play"!==e||s||(s=ne.daily().seed),this.page=e,this.puzzleSeed=s,this.resumeImmediately=!1,this.updateLocation()}updateLocation(){const{page:e,puzzleSeed:t}=this,i=t?`#${e}/${t}`:`#${e}`;i!==location.hash&&history.replaceState(null,"",i)}pauseGame(e){this.gameView?.pauseGame(e)}handlePlayPuzzle(e){this.pauseGame("play event"),this.page="play",this.puzzleSeed=e.detail.puzzleId.seed,this.resumeImmediately=e.detail.resume??!1,this.updateLocation()}handleShowHistory(e){this.pauseGame("history event"),this.page="history",this.puzzleSeed=e.detail?.puzzleId?.seed??"",this.selectShareAs=Boolean(e.detail?.selectShareAs),this.updateLocation()}async showDialog(e){this.pauseGame("show dialog"),this.dialogRenderer=e,await 0,this.dialog?.showModal()}hideDialog(){this.dialogRenderer=void 0}closeDialog(){this.dialog?.close()}handleShowHelp(){this.showDialog(this.renderHelpDialog),We(De.ACTION,{category:"help opened"})}helpClosed(){this.hideDialog(),We(De.ACTION,{category:"help closed"}),b=!0,window.localStorage.setItem("seenHelp","true")}handleShowSettings(){this.showDialog(this.renderSettingsDialog),We(De.ACTION,{category:"settings opened"})}settingsClosed(){this.hideDialog(),We(De.ACTION,{category:"settings closed"})}handleDialogKey(e){switch(e.key){case"Tab":case"Escape":return;case"Enter":case" ":e.target?.click()}e.preventDefault(),e.stopImmediatePropagation()}setHelpOption(e){this.helpOption=Number(this.findData(e,"option"))}setPreferredTheme(e){const t=this.findData(e,"theme");this.preferredTheme=t,p(t),We(De.ACTION,{category:"theme set",detail:t})}setShowTimer(e){const t="true"===this.findData(e,"show");this.showTimer=t,y(t),We(De.ACTION,{category:"show-timer set",detail:String(t)})}findData(e,t){let i=e.target;for(;i;){if(t in i.dataset)return i.dataset[t];i=i.parentElement}return""}async newPuzzle(e){this.closeDialog();const t=e.target.dataset.name,i=function(e){const t=ae.get(e.toLowerCase());if(!t)throw new Error(`Invalid game spec name '${e}'`);return t}(t);let s=ne.forSpec(i);const o=await this.db;for(const e of await o.getAllKeys("games",s.toDbRange())){const t=ne.fromSeed(e);s.compareTo(t)<=0&&(s=t.next())}this.dispatchEvent(new CustomEvent("play-puzzle",{detail:{puzzleId:s},bubbles:!0,composed:!0})),We(De.ACTION,{category:"new puzzle",detail:t})}async trackWordsLoading(){await Be(Qe),this.loadingWords=!1}async startApp(){await this.cleanDb();let[e,t,i]=this.parseHash();const s=t.shift()??"",o=ne.daily(),r=o.seed;if("history"===e||"play"===e&&s)return this.page=e,this.puzzleSeed=s,void this.updateLocation();if("share"===e)this.puzzleSeed=s,await this.importShare(s,t);else{const e=await this.db,t=await e.transaction("games").store.index("by-last-played").openCursor(null,"prev");t&&de(t.key)===o.dateString&&!me(t.value.wordsFound)?this.puzzleSeed=t.value.puzzleId:this.puzzleSeed=r}this.page="play",this.updateLocation()}async importShare(e,t){const i=await this.db,s=function(e){return decodeURIComponent(e[0]??"")}(t);let o;try{o=function(e,t,i){let s;const o=Ge(e,t);try{s={firstBits:se.p4(i[1],o),secondBits:i[2]?se.p4(i[2],o):void 0}}finally{o.free()}return s}(e,s,t)}catch(t){return console.log("Bad share URL",location,t),We(De.SYSTEM,{category:"bad share url",detail:`${t}`}),void alert(`Unable to import ${s}'s share of ${e}.  Did it get truncated?`)}const r=await i.get("games",e);if(r&&fe(r.wordsFound,o))return We(De.SYSTEM,{category:"self import"}),void alert(`${s}'s share of ${e} is identical to your game.`);const a=i.transaction("shares").store.index("by-puzzle-id");let n=null;for await(const t of a.iterate(e))if(fe(t.value.wordsFound,o)){n=t.value.person;break}n===s?(We(De.SYSTEM,{category:"duplicate import"}),alert(`You've already imported ${s}'s share of ${e}.`)):null!==n?(We(De.SYSTEM,{category:"duplicate import different name"}),alert(`You've already imported ${s}'s share of ${e}, under the name '${n}'.`)):(await i.put("shares",{person:s,puzzleId:e,wordsFound:o}),We(De.SYSTEM,{category:"import",detail:e}),alert(`Successfully imported ${s}'s share of ${e}.`))}async cleanDb(){const e=await this.db,t=e.transaction("games").store.index("by-last-played");let i=0;const s=de(new Date(Date.now()-2592e6)),o=[];for await(const e of t.iterate(null,"prev"))++i,i<=10||i<=100&&de(e.key)>=s||o.push(e.value.puzzleId);for(const t of o){await e.delete("games",t);const i=await e.getAllKeysFromIndex("shares","by-puzzle-id",t);for(const t of i)await e.delete("shares",t)}}};Ke([(0,o.Cb)({reflect:!0})],it.prototype,"theme",void 0),Ke([(0,o.SB)()],it.prototype,"page",void 0),Ke([(0,o.SB)()],it.prototype,"puzzleSeed",void 0),Ke([(0,o.SB)()],it.prototype,"selectShareAs",void 0),Ke([(0,o.SB)()],it.prototype,"resumeImmediately",void 0),Ke([(0,o.SB)()],it.prototype,"preferredTheme",void 0),Ke([(0,o.SB)()],it.prototype,"showTimer",void 0),Ke([(0,o.SB)()],it.prototype,"loadingWords",void 0),Ke([(0,o.SB)()],it.prototype,"dialogRenderer",void 0),Ke([(0,o.SB)()],it.prototype,"helpOption",void 0),Ke([(0,o.IO)("game-view")],it.prototype,"gameView",void 0),Ke([(0,o.IO)("dialog")],it.prototype,"dialog",void 0),it=Ke([(0,o.Mo)("leadpipe-wordgrid")],it);var st=i(379),ot=i.n(st),rt=i(795),at=i.n(rt),nt=i(569),dt=i.n(nt),lt=i(565),ht=i.n(lt),ct=i(216),pt=i.n(ct),ut=i(589),mt=i.n(ut),gt=i(914),wt={};wt.styleTagTransform=mt(),wt.setAttributes=ht(),wt.insert=dt().bind(null,"head"),wt.domAPI=at(),wt.insertStyleElement=pt(),ot()(gt.Z,wt),gt.Z&&gt.Z.locals&&gt.Z.locals}}]);