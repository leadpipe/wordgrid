"use strict";(self.webpackChunkleadpipe_wordgrid=self.webpackChunkleadpipe_wordgrid||[]).push([[808],{975:(e,t,i)=>{let s;function r(e){s=e}i.d(t,{AA:()=>D,H6:()=>$,Or:()=>W,Tc:()=>L,aV:()=>E,eY:()=>_,fY:()=>R,h4:()=>k,hd:()=>P,m_:()=>C,oT:()=>r,p4:()=>S,tb:()=>x,tq:()=>O,ug:()=>I,yG:()=>T}),e=i.hmd(e);let o=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});o.decode();let n=null;function a(){return null!==n&&0!==n.byteLength||(n=new Uint8Array(s.memory.buffer)),n}function d(e,t){return e>>>=0,o.decode(a().subarray(e,e+t))}const l=new Array(128).fill(void 0);l.push(void 0,null,!0,!1);let h=l.length;function c(e){h===l.length&&l.push(l.length+1);const t=h;return h=l[t],l[t]=e,t}function p(e){return l[e]}function u(e){const t=p(e);return function(e){e<132||(l[e]=h,h=e)}(e),t}function m(e){const t=typeof e;if("number"==t||"boolean"==t||null==e)return`${e}`;if("string"==t)return`"${e}"`;if("symbol"==t){const t=e.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==t){const t=e.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(e)){const t=e.length;let i="[";t>0&&(i+=m(e[0]));for(let s=1;s<t;s++)i+=", "+m(e[s]);return i+="]",i}const i=/\[object ([^\]]+)\]/.exec(toString.call(e));let s;if(!(i.length>1))return toString.call(e);if(s=i[1],"Object"==s)try{return"Object("+JSON.stringify(e)+")"}catch(e){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:s}let g=0,f=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const w="function"==typeof f.encodeInto?function(e,t){return f.encodeInto(e,t)}:function(e,t){const i=f.encode(e);return t.set(i),{read:e.length,written:i.length}};function y(e,t,i){if(void 0===i){const i=f.encode(e),s=t(i.length,1)>>>0;return a().subarray(s,s+i.length).set(i),g=i.length,s}let s=e.length,r=t(s,1)>>>0;const o=a();let n=0;for(;n<s;n++){const t=e.charCodeAt(n);if(t>127)break;o[r+n]=t}if(n!==s){0!==n&&(e=e.slice(n)),r=i(r,s,s=n+3*e.length,1)>>>0;const t=a().subarray(r+n,r+s);n+=w(e,t).written}return g=n,r}let v=null;function b(){return null!==v&&0!==v.byteLength||(v=new Int32Array(s.memory.buffer)),v}function z(e,t){if(!(e instanceof t))throw new Error(`expected instance of ${t.name}`);return e.ptr}function $(e,t){let i,r;try{const l=s.__wbindgen_add_to_stack_pointer(-16),h=function(e,t){const i=t(1*e.length,1)>>>0;return a().set(e,i/1),g=e.length,i}(e,s.__wbindgen_malloc),c=g;z(t,T),s.obfuscate(l,h,c,t.__wbg_ptr);var o=b()[l/4+0],n=b()[l/4+1];return i=o,r=n,d(o,n)}finally{s.__wbindgen_add_to_stack_pointer(16),s.__wbindgen_free(i,r,1)}}function S(e,t){try{const h=s.__wbindgen_add_to_stack_pointer(-16),c=y(e,s.__wbindgen_malloc,s.__wbindgen_realloc),p=g;z(t,T),s.deobfuscate(h,c,p,t.__wbg_ptr);var i=b()[h/4+0],r=b()[h/4+1],o=b()[h/4+2];if(b()[h/4+3])throw u(o);var n=(d=i,l=r,d>>>=0,a().subarray(d/1,d/1+l)).slice();return s.__wbindgen_free(i,1*r),n}finally{s.__wbindgen_add_to_stack_pointer(16)}var d,l}const x=Object.freeze({Level1:0,0:"Level1",Level2:1,1:"Level2",Level3:2,2:"Level3",Level4:3,3:"Level4",Level5:4,4:"Level5",Level6:5,5:"Level6",Level7:6,6:"Level7",Level8:7,7:"Level8",Hacker:8,8:"Hacker",Offensive:9,9:"Offensive",Profane:10,10:"Profane"});class T{static __wrap(e){e>>>=0;const t=Object.create(T.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();s.__wbg_jsrandom_free(e)}constructor(e){const t=y(e,s.__wbindgen_malloc,s.__wbindgen_realloc),i=g,r=s.jsrandom_new(t,i);return T.__wrap(r)}next(){return s.jsrandom_next(this.__wbg_ptr)}nextByte(){return s.jsrandom_nextByte(this.__wbg_ptr)}choice(e){return 0!==s.jsrandom_choice(this.__wbg_ptr,e)}range(e,t){return s.jsrandom_range(this.__wbg_ptr,e,t)}normal(e,t){return s.jsrandom_normal(this.__wbg_ptr,e,t)}}function P(e,t){return c(new Error(d(e,t)))}function I(e){u(e)}function k(e,t){return c(d(e,t))}function C(e){return c(p(e))}function E(e,t,i){p(e)[u(t)]=u(i)}function _(e){return"string"==typeof p(e)}function O(){return c(new Map)}function L(){return c(new Object)}function D(e,t,i){return c(p(e).set(p(t),p(i)))}function R(e,t){const i=y(m(p(t)),s.__wbindgen_malloc,s.__wbindgen_realloc),r=g;b()[e/4+1]=r,b()[e/4+0]=i}function W(e,t){throw new Error(d(e,t))}},914:(e,t,i)=>{i.d(t,{Z:()=>P});var s=i(81),r=i.n(s),o=i(645),n=i.n(o),a=i(667),d=i.n(a),l=new URL(i(426),i.b),h=new URL(i(101),i.b),c=new URL(i(44),i.b),p=new URL(i(635),i.b),u=new URL(i(298),i.b),m=new URL(i(353),i.b),g=new URL(i(573),i.b),f=new URL(i(860),i.b),w=n()(r()),y=d()(l),v=d()(h),b=d()(c),z=d()(p),$=d()(u),S=d()(m),x=d()(g),T=d()(f);w.push([e.id,`@font-face{font-family:"Material Icons";font-style:normal;font-display:block;font-weight:400;src:url(${y}) format("woff2"),url(${v}) format("woff")}@font-face{font-family:"Merriweather Sans";font-style:normal;font-display:block;font-weight:800;unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;src:url(${b}) format("woff2"),url(${z}) format("woff")}@font-face{font-family:"Prompt";font-style:normal;font-display:block;font-weight:400;unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;src:url(${$}) format("woff2"),url(${S}) format("woff")}@font-face{font-family:"Prompt";font-style:normal;font-display:block;font-weight:700;unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;src:url(${x}) format("woff2"),url(${T}) format("woff")}`,""]);const P=w},808:(e,t,i)=>{i.r(t);var s=i(392),r=i(685),o=function(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let n=class extends s.oi{constructor(){super(...arguments),this.name="",this.size=""}static{this.styles=s.iv`
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
  `}render(){return s.dy`<span class="material-icons ${this.size}">${this.name}</span>`}};o([(0,r.Cb)()],n.prototype,"name",void 0),o([(0,r.Cb)()],n.prototype,"size",void 0),n=o([(0,r.Mo)("mat-icon")],n);class a extends EventTarget{addEventListener(e,t,i){super.addEventListener(e,t,i)}removeEventListener(e,t,i){super.removeEventListener(e,t,i)}}const d=new a;let l="light",h="auto";{const e=window.localStorage.getItem("preferredTheme");switch(e){case"dark":case"light":h=e}}function c(){return"auto"===h?l:h}function p(e){if(e!==h){const t=c();h=e,window.localStorage.setItem("preferredTheme",e),u(t)}}function u(e){const t=c();t!==e&&d.dispatchEvent(new CustomEvent("current-theme",{detail:t}))}const m=window.matchMedia("(prefers-color-scheme: dark)");function g(e){const t=c();l=e.matches?"dark":"light",u(t)}g(m),m.addEventListener("change",g);let f=!0;function w(){return f}function y(e){f=e,window.localStorage.setItem("showTimer",String(e)),d.dispatchEvent(new CustomEvent("show-timer",{detail:e}))}"false"===window.localStorage.getItem("showTimer")&&(f=!1);let v=[];{const e=window.localStorage.getItem("monikers");if(e)try{const t=JSON.parse(e);t instanceof Array&&(v=t)}catch(t){console.log("Bad data in local storage",e,t)}}let b=!1;"true"===window.localStorage.getItem("seenHelp")&&(b=!0);var z=function(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let $=class extends s.oi{constructor(){super(...arguments),this.gameState=null,this.timerRunning=!1}static{this.styles=s.iv`
    :host {
      display: block;
      user-select: none;
      -webkit-user-select: none;
    }

    a {
      cursor: pointer;
    }
  `}render(){const{gameState:e}=this;return e?w()?s.dy`
      ${this.remainingTime()}<br />
      <a @click=${this.hideTimer} title="Hide timer">
        <mat-icon name="visibility_off"></mat-icon>
      </a>
    `:s.dy`
        <a @click=${this.showTimer} title="Show timer">
          <mat-icon name="visibility"></mat-icon>
        </a>
      `:""}updated(e){const t=this.gameState?.msRemaining??0;t>0?(window.setTimeout((()=>this.requestUpdate()),(t-1)%1e3+1),this.timerRunning=!0):this.timerRunning&&(this.timerRunning=!1,this.dispatchEvent(new CustomEvent("timer-expired",{detail:w(),bubbles:!0,composed:!0})))}remainingTime(){const e=this.gameState?.msRemaining??0,t=Math.ceil(e/1e3);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}showTimer(){y(!0),this.requestUpdate()}hideTimer(){y(!1),this.requestUpdate()}};z([(0,r.Cb)({attribute:!1})],$.prototype,"gameState",void 0),$=z([(0,r.Mo)("game-timer")],$);var S=i(338);class x{constructor(e,t){this.row=e,this.col=t}isAdjacentTo(e){return this!==e&&Math.abs(this.row-e.row)<=1&&Math.abs(this.col-e.col)<=1}}const T=(()=>{const e=[0,1,2,3,4,5];return e.map((t=>e.map((e=>new x(t,e)))))})();function P(e,t){return T[e][t]}function I(e){const t=[];for(let i=0;i<e;++i)for(let s=0;s<e;++s)t.push(P(i,s));return t}const k=s.iv`#444`,C=s.iv`#ccc`,E=s.iv`white`,_=s.iv`darkslategray`,O=s.iv`#aecbfa`,L=s.iv`
  ${O}cc
`,D=s.iv`#337`,R=s.iv`
  ${D}c
`,W=s.iv`#2a6914`,B=s.iv`
  ${W}22
`,U=s.iv`#4dbc24`,A=s.iv`
  ${U}22
`,M=s.iv`#e3280b`,F=s.iv`
  ${M}44
`,G=s.iv`#971e0b`,N=s.iv`
  ${G}44
`,H=s.iv`#808080`,j=s.iv`200ms`,q=s.iv`
  .icon-button {
    color: inherit;
    background: inherit;
    border: inherit;
    padding: 0;
    cursor: pointer;
  }
`,K=s.iv`
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
`;var Y=function(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Q=class extends s.oi{constructor(){super(...arguments),this.theme="light",this.puzzleId=null,this.puzzle=null,this.isPaused=!0,this.isInteractive=!1,this.keyHandler=e=>this.handleKeyDown(e),this.resizeObserver=new ResizeObserver((async()=>{this.calcMetrics()})),this.trail=[],this.outOfBounds=!1,this.prefixes=[],this.pendingKeyboardInput="",this.pendingInputTimeoutId=0,this.cellSpan=0,this.sidePixels=0}static{this.styles=[s.iv`
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
        --add: ${B};
        --del: ${F};
        --path: ${L};
        --path-start: ${O};
        --text-fill: ${k};
      }

      :host([theme='dark']) {
        --add: ${A};
        --del: ${N};
        --path: ${R};
        --path-start: ${D};
        --text-fill: ${C};
      }

      svg {
        overflow: hidden;
        touch-action: none;
      }

      svg * {
        pointer-events: none;
      }

      circle {
        fill: none;
        stroke: ${H};
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
        transition: transform ${j};
      }

      :host(.flip) g {
        transform-origin: center;
        transform: scale(-1, 1);
        transition: transform ${j};
      }

      @media (prefers-reduced-motion) {
        :host(.rotate) g,
        :host(.flip) g {
          transition: transform 1ms;
        }
      }

      .path-start {
        fill: var(--path-start);
      }

      .path {
        fill: none;
        stroke: var(--path);
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .del {
        fill: none;
        stroke: var(--del);
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .add {
        fill: none;
        stroke: var(--add);
        stroke-linecap: round;
        stroke-linejoin: round;
      }
    `]}render(){const{cellSpan:e,hoverLoc:t,isPaused:i,puzzle:r,puzzleId:o,sidePixels:n,trail:a}=this;if(!e||!o)return;const d=o.spec.size,l=n/d,h=i||!r?this.pausedGrid(d):r.grid,c=t??a[0],p=l/e,u=l/2,m=(l-p)/2;return s.dy`
      <svg
        ${(0,S.i)(this.svgChanged)}
        viewBox="0 0 ${n} ${n}"
        width=${n}
        height=${n}
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
        ${o.spec.locs.map((e=>{const{row:t,col:i}=e;let r=h[t].charAt(i);"Q"===r&&(r="Qu");const o=e===c?"path-start":"";return s.YP`
            <svg viewBox="0 0 ${l} ${l}" x=${i*l} y=${t*l} width=${l} height=${l}>
              <circle cx=${u} cy=${u} r=${m} class=${o} />
              <g>
                <text x=${u} y=${u}>${r}</text>
              </g>
            </svg>
          `}))}
        ${this.renderTrail(a,o.spec.locs,l,u)}
      </svg>
    `}renderTrail(e,t,i,r){if(!e.length)return s.Ld;const o=[s.YP`
      <path
        class="path"
        d="M ${e[0].col*i+r},${e[0].row*i+r}
           ${e.map((({row:e,col:t})=>`L ${t*i+r},${e*i+r}`)).join(" ")}
        " />
    `];if(this.isInteractive){if(e.length>1){const{row:t,col:n}=e[e.length-2];o.push(s.YP`
          <path
            class="del"
            d="M ${n*i+.6*r},${t*i+.6*r}
              l ${.4*i},${.4*i}
              m -${.4*i},0
              l ${.4*i},-${.4*i}
            "/>
        `)}if(this.outOfBounds){const n=new Set(e),a=e[e.length-1];for(const e of t)!n.has(e)&&e.isAdjacentTo(a)&&o.push(s.YP`
            <circle cx=${e.col*i+r}
                    cy=${e.row*i+r}
                    r=${.4*i}
                    class="add"
              />
          `)}}return o}set externalPath(e){this.trail.length=0,this.trail.push(...e.locs),this.requestUpdate("externalPath",{locs:[]})}get externalPath(){return{locs:this.trail}}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this),this.isInteractive&&window.addEventListener("keydown",this.keyHandler)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this),window.removeEventListener("keydown",this.keyHandler)}svgChanged(e){e instanceof SVGElement&&(this.svg=e,this.calcMetrics())}shouldInteract(){return this.isInteractive&&!this.isPaused}convertCoordinateToCellNumber(e){const{cellSpan:t,puzzleId:i}=this;if(!(e<0||!i||e>=t*i.spec.size))return Math.floor(e/t)}cellCenter(e){return(e+.5)*this.cellSpan}convertPointToLoc(e){const t=this.svg.getBoundingClientRect(),i=(e.x-t.x)*devicePixelRatio,s=(e.y-t.y)*devicePixelRatio,r=this.convertCoordinateToCellNumber(i),o=this.convertCoordinateToCellNumber(s);if(void 0===r||void 0===o)return;const n=P(o,r);return Math.hypot(i-this.cellCenter(r),s-this.cellCenter(o))<=this.cellSpan/2*.9?n:void 0}pushLoc(e){const{puzzle:t,trail:i,prefixes:s}=this;if(this.outOfBounds=!1,!t||!e)return;const r=i.indexOf(e);if(r>=0){if(r===i.length-2){i.pop(),this.trail=[...i],s[0].endsWith("Q")&&(s.length/=2);for(let e=0;e<s.length;++e)s[e]=s[e].substring(0,s[e].length-1);this.dispatchEvent(new CustomEvent("words-traced",{detail:{words:[...s]}}))}return void(this.outOfBounds=r<i.length-2)}if(i.length&&!e.isAdjacentTo(i[i.length-1]))return void(this.outOfBounds=!0);this.trail=[...i,e];const o=t.grid[e.row].charAt(e.col);if(s.length)for(let e=0;e<s.length;++e)s[e]+=o;else s.push(o);"Q"===o&&s.forEach((e=>s.push(e+"U"))),this.dispatchEvent(new CustomEvent("words-traced",{detail:{words:[...s]}}))}handlePointerHovering(e){if(!this.shouldInteract())return;const t=this.convertPointToLoc(e);this.trail.length?this.pushLoc(t):t&&this.puzzle?this.hoverLoc=t:this.hoverLoc=void 0}handlePointerEnter(e){this.handlePointerHovering(e)}handlePointerLeave(e){this.hoverLoc=void 0}handlePointerCancel(e){this.dispatchEvent(new CustomEvent("words-selected",{detail:{words:[]}})),this.resetPointerInput()}handlePointerDown(e){if(!this.shouldInteract())return;e.target.hasPointerCapture(e.pointerId)&&e.target.releasePointerCapture(e.pointerId);const t=this.convertPointToLoc(e);t&&this.puzzle&&(this.resetPointerInput(),this.pendingKeyboardInput="",this.pushLoc(t),this.hoverLoc=void 0,this.svg.setPointerCapture(e.pointerId))}handlePointerUp(e){this.shouldInteract()&&(this.svg?.releasePointerCapture(e.pointerId),this.puzzle&&this.dispatchEvent(new CustomEvent("words-selected",{detail:{words:[...this.prefixes]}})),this.resetPointerInput())}resetPointerInput(){this.trail=[],this.prefixes.length=0,this.hoverLoc=void 0}clearPendingInputTimeout(){this.pendingInputTimeoutId&&(window.clearTimeout(this.pendingInputTimeoutId),this.pendingInputTimeoutId=0)}handleKeyDown(e){if(!this.shouldInteract())return;this.clearPendingInputTimeout(),this.resetPointerInput();let t=!1;switch(e.key){case"Enter":this.pendingKeyboardInput.length&&(this.dispatchEvent(new CustomEvent("words-selected",{detail:{words:[this.pendingKeyboardInput],checkPossible:!0}})),this.pendingKeyboardInput="");break;case"Esc":case"Escape":case"Clear":this.pendingKeyboardInput="",t=!0;break;case"Backspace":case"Del":case"Delete":this.pendingKeyboardInput.length&&(this.pendingKeyboardInput=this.pendingKeyboardInput.substring(0,this.pendingKeyboardInput.length-1),t=!0);break;default:if(1===e.key.length){const i=e.key.toUpperCase();i>="A"&&i<="Z"&&(this.pendingKeyboardInput+=i,t=!0)}}if(t){const e={words:this.pendingKeyboardInput?[this.pendingKeyboardInput]:[],checkPossible:!0};this.dispatchEvent(new CustomEvent("words-traced",{detail:e}))}this.pendingKeyboardInput&&(this.pendingInputTimeoutId=window.setTimeout((()=>{this.pendingKeyboardInput="",this.dispatchEvent(new CustomEvent("words-selected",{detail:{words:[]}}))}),2500))}updated(e){let t=!1;e.has("puzzleId")&&(t=!0,this.calcMetrics()),(e.has("puzzle")||e.has("isPaused"))&&(t=!0),e.has("externalPath")&&(t=!1),t&&this.resetPointerInput()}calcMetrics(){const e=this.getBoundingClientRect(),{puzzleId:t}=this;if(!t)return;const i=Math.min(e.width,e.height),s=t.spec.size;this.cellSpan=devicePixelRatio*i/s,this.sidePixels=i}pausedGrid(e){switch(e){case 4:default:return["LEAD","PIPE","WORD","GRID"];case 5:return["LEAD "," PIPE","     ","WORD "," GRID"];case 6:return["  LEAD","  PIPE","      ","      ","WORD  ","GRID  "]}}};Y([(0,r.Cb)({reflect:!0})],Q.prototype,"theme",void 0),Y([(0,r.Cb)({attribute:!1,hasChanged:(e,t)=>!(e===t||e&&t&&e.seed===t.seed)})],Q.prototype,"puzzleId",void 0),Y([(0,r.Cb)({attribute:!1})],Q.prototype,"puzzle",void 0),Y([(0,r.Cb)({type:Boolean,reflect:!0})],Q.prototype,"isPaused",void 0),Y([(0,r.Cb)({type:Boolean,reflect:!0})],Q.prototype,"isInteractive",void 0),Y([(0,r.Cb)({attribute:!1})],Q.prototype,"externalPath",null),Y([(0,r.SB)()],Q.prototype,"hoverLoc",void 0),Y([(0,r.SB)()],Q.prototype,"trail",void 0),Y([(0,r.SB)()],Q.prototype,"outOfBounds",void 0),Y([(0,r.SB)()],Q.prototype,"cellSpan",void 0),Y([(0,r.SB)()],Q.prototype,"sidePixels",void 0),Q=Y([(0,r.Mo)("grid-view")],Q);let J=class extends s.oi{static{this.styles=s.iv`
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
    `}openHelp(){this.dispatchEvent(new CustomEvent("show-help",{bubbles:!0,composed:!0}))}openSettings(){this.dispatchEvent(new CustomEvent("show-settings",{bubbles:!0,composed:!0}))}};var V;function Z(e){return 3&e}function X(e){return Boolean(4&e)}J=function(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n}([(0,r.Mo)("meta-panel")],J),function(e){e[e.E=0]="E",e[e.R=1]="R",e[e.R2=2]="R2",e[e.R3=3]="R3",e[e.F=4]="F",e[e.RF=5]="RF",e[e.R2F=6]="R2F",e[e.R3F=7]="R3F"}(V||(V={}));class ee{constructor(e,t){this.last=e;const i=new Set(t?.locs);i.add(e),this.locs=i}}class te{constructor(e){this.letter=e,this.paths=[]}}class ie{constructor(e,t){this.spec=e,this.grid=t,this.letterLocs=new Map,this.wordPaths=[];const{letterLocs:i}=this;for(const s of e.locs){const e=t[s.row].charAt(s.col);i.has(e)?i.get(e).push(s):i.set(e,[s])}}findPaths(e){const{letterLocs:t,wordPaths:i}=this;i.length>e.length&&(i.length=e.length);for(let s=0;s<e.length;++s){const r=e.charAt(s);if(s<i.length&&i[s].letter!==r&&(i.length=s),s===i.length){const o=new te(r);if(i.push(o),0===s)for(const e of t.get(r)??[])o.paths.push(new ee(e));else{const n=i[s-1].paths;for(const e of t.get(r)??[])for(const t of n)!t.locs.has(e)&&t.last.isAdjacentTo(e)&&o.paths.push(new ee(e,t));"U"===r&&"Q"===e.charAt(s-1)&&o.paths.push(...n)}}}return i[e.length-1]?.paths??[]}}var se,re,oe=i(401),ne=i(975);(0,ne.oT)(oe),function(e){e.MAKE_GRID="MAKE_GRID"}(se||(se={})),function(e){e.GRID="GRID",e.UNKNOWN_VERSION="UNKNOWN_VERSION"}(re||(re={}));const ae=[{name:"Small",size:4,minLength:3,timerMinutes:3,locs:I(4)},{name:"Medium",size:5,minLength:4,timerMinutes:3,locs:I(5)},{name:"Large",size:6,minLength:5,timerMinutes:4,locs:I(6)}],de=new Map(ae.map((e=>[e.size,e]))),le=new Map(ae.map((e=>[e.name.toLowerCase(),e])));class he{constructor(e,t,i,s){if(this.version=e,this.dateString=t,this.spec=i,this.counter=s,!pe(t))throw new Error(`Invalid date string '${t}'`)}get seed(){return`${this.version}:${this.dateString}:${this.spec.size}:${this.counter}`}toDbRange(){return IDBKeyRange.bound(`${this.version}:${this.dateString}:${this.spec.size}`,`${this.version}:${this.dateString}:${this.spec.size+1}`,!1,!0)}next(){return new he(this.version,this.dateString,this.spec,1+this.counter)}compareTo(e){return this.version!==e.version?this.version-e.version:this.dateString!==e.dateString?this.dateString<e.dateString?-1:1:this.spec.size!==e.spec.size?this.spec.size-e.spec.size:this.counter-e.counter}toMakeGridMessage(){return{type:se.MAKE_GRID,version:this.version,seed:this.seed,size:this.spec.size,minLength:this.spec.minLength}}static daily(e=new Date){const t=new ne.yG(ce(e)),i=function(e){return ae[Math.floor(e.range(0,ae.length))]}(t);return t.free(),he.forSpec(i,e)}static forSpec(e,t=new Date,i=1){return new he(1,ce(t),e,i)}static fromSeed(e){const t=e.split(":");if(4===t.length){const e=Number(t[0]),i=t[1],s=Number(t[2]),r=Number(t[3]);if(!isNaN(e)&&pe(i)&&function(e){return de.has(e)}(s)&&!isNaN(r))return new he(e,i,function(e){const t=de.get(e);if(!t)throw new Error(`Invalid grid size ${e}`);return t}(s),r)}throw new Error(`Seed string does not appear to be from PuzzleId: ${e}`)}}function ce(e){return`${String(e.getFullYear()).padStart(4,"0")}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function pe(e){const t=e.split("-").map(Number);return 3===t.length&&!t.some(isNaN)&&ce(new Date(t[0],t[1]-1,t[2]))===e}class ue{constructor(e,t,i,s){this.game=e,this.person=t,this.before=i,this.after=s}setUniqueWords(e){const t={kept:{words:0,points:0},lost:{words:0,points:0}};for(const i of this.before){const s=e.has(i)?t.kept:t.lost;++s.words,s.points+=$e.scoreWord(i)}this.result=t}getWordCounts(e){const t=this.game.wordsByCategory.get(e)??new Set;return{total:t.size,found:me(t,this.before)+me(t,this.after)}}}function me(e,t){e.size>t.size&&([e,t]=[t,e]);let i=0;for(const s of e)t.has(s)&&++i;return i}var ge;!function(e){e[e.TOO_SHORT=0]="TOO_SHORT",e[e.NOT_A_WORD=1]="NOT_A_WORD",e[e.WORD=2]="WORD",e[e.DUPLICATE=3]="DUPLICATE",e[e.IMPOSSIBLE=4]="IMPOSSIBLE"}(ge||(ge={}));var fe=i(998);function we(e){return"object"==typeof e.firstBits}function ye(){return(0,fe.X3)("wordgrid",1,{upgrade(e){e.createObjectStore("games",{keyPath:"puzzleId"}).createIndex("by-last-played","lastPlayed");const t=e.createObjectStore("shares",{autoIncrement:!0});t.createIndex("by-person","person"),t.createIndex("by-puzzle-id","puzzleId")}})}function ve(e,t){if(e===t)return!0;if(!e||!t)return!1;if(e.length!==t.length)return!1;for(let i=0,s=e.length;i<s;++i)if(e[i]!==t[i])return!1;return!0}function be(e,t){return!!we(e)&&ve(e.firstBits,t.firstBits)&&ve(e.secondBits,t.secondBits)}function ze(e){const t=[...e].reverse(),i=[];for(let e=0;e<t.length;++e)i.push(t.map((t=>t.charAt(e))).join(""));return i}class $e{constructor(e,t,i=0,s=0,r=[],o=!1,n=null,a=V.E){this.puzzleId=e,this.currentPuzzle=t,this.priorElapsedMs=i,this.numFoundWithinTimeLimit=s,this.complete=o,this.found=new Set,this.reverseFound=[],this.earnedPointsCache=0,this.resumedTimestamp=0,this.lastPlayedTimestamp=0,this.currentD4=V.E,this.pathFinder=null;const d=new Map;let l=0;for(const[e,i]of t.words.entries()){let t=d.get(i);void 0===t&&(t=new Set,d.set(i,t)),t.add(e),l+=$e.scoreWord(e)}this.wordsByCategory=d,this.points={found:0,total:l},this.categories=[...d.keys()].sort(((e,t)=>e-t));for(const e of r)this.addPreviouslyFoundWord(e),this.found.size<=s&&(this.earnedPointsCache+=$e.scoreWord(e));this.lastPlayedTimestamp=n?n.getTime():0,this.applyD4(a)}get d4(){return this.currentD4}applyD4(e){let t=this.currentPuzzle.grid;for(let i=Z(e);i>0;--i)t=ze(t);return X(e)&&(t=function(e){return e.map((e=>e.split("").reverse().join("")))}(t)),this.currentD4=function(e,t){return 3&(4&e?e-t:e+t)|4&e^4&t}(this.currentD4,e),this.pathFinder=null,this.currentPuzzle={...this.currentPuzzle,grid:t}}get puzzle(){return this.currentPuzzle}static scoreWord(e){switch(e.length){case 3:case 4:return 1;case 5:return 2;case 6:return 3;case 7:return 5;case 8:return 11;default:return 2*e.length}}judgeWord(e,t){return this.found.has(e)?ge.DUPLICATE:this.currentPuzzle.words.has(e)?ge.WORD:t&&!this.isPossible(e)?ge.IMPOSSIBLE:e.length<this.puzzleId.spec.minLength?ge.TOO_SHORT:ge.NOT_A_WORD}isPossible(e){return this.findPaths(e).length>0}findPaths(e){let{pathFinder:t}=this;return t||(this.pathFinder=t=new ie(this.puzzleId.spec,this.currentPuzzle.grid)),t.findPaths(e)}addFoundWord(e,t){if(this.isPaused)throw new Error("This game is paused");const i=this.judgeWord(e,t);return i===ge.WORD&&(this.addPreviouslyFoundWord(e),this.timeExpired||(++this.numFoundWithinTimeLimit,this.earnedPointsCache+=$e.scoreWord(e)),this.lastPlayedTimestamp=Date.now()),i}addPreviouslyFoundWord(e){this.found.add(e),this.reverseFound.unshift(e);const t=$e.scoreWord(e);this.points.found+=t,this.found.size===this.currentPuzzle.words.size&&this.markComplete()}getWordCounts(){return{found:this.found.size,total:this.currentPuzzle.words.size}}getWordPoints(){return{...this.points}}get earnedPoints(){return this.earnedPointsCache}getWordCategories(){return this.categories}getFoundWords(e){return void 0===e?this.reverseFound:this.reverseFound.filter((t=>this.currentPuzzle.words.get(t)===e))}asSharedGameState(e){return this.convertToSharedGamesState(e,this.getWordsInProgress())}toSharedGameState(e){if(e.puzzleId!==this.currentPuzzle.message.seed)throw new Error(`Wrong shared game: ${e.puzzleId} instead of ${this.currentPuzzle.message.seed}`);return this.convertToSharedGamesState(e.person,$e.reconstructWords(this.currentPuzzle,e.wordsFound))}getWordsInProgress(){return{words:[...this.found],cutoff:this.numFoundWithinTimeLimit}}convertToSharedGamesState(e,t){const i=t.words,s=i.splice(t.cutoff);return new ue(this,e,new Set(i),new Set(s))}getWords(e){return void 0===e?[...this.currentPuzzle.words.keys()]:[...this.currentPuzzle.words.keys()].filter((t=>this.currentPuzzle.words.get(t)===e))}get numWordsFoundBeforeTimeLimit(){return this.numFoundWithinTimeLimit}get isStarted(){return this.lastPlayedTimestamp>0}get isPaused(){return 0===this.resumedTimestamp}get elapsedMs(){let e=this.priorElapsedMs;return 0!==this.resumedTimestamp&&(e+=Date.now()-this.resumedTimestamp),e}get timeExpired(){return 0===this.msRemaining}get msRemaining(){return Math.max(0,6e4*this.puzzleId.spec.timerMinutes-this.elapsedMs)}get lastPlayed(){return this.lastPlayedTimestamp?new Date(this.lastPlayedTimestamp):null}resume(){if(this.complete)throw new Error("Can't resume a complete game");this.lastPlayedTimestamp=Date.now(),this.isPaused&&(this.resumedTimestamp=this.lastPlayedTimestamp)}pause(e){this.isStarted&&(this.lastPlayedTimestamp=e??Date.now()),this.isPaused||(this.priorElapsedMs=this.elapsedMs,this.resumedTimestamp=0)}markComplete(){this.pause(),this.complete=!0}get isComplete(){return this.complete}get wordsToStore(){if(!this.complete)return this.getWordsInProgress();const e=[...this.found],t=e.splice(this.numFoundWithinTimeLimit),i={firstBits:Se(e,function(e){const t=new Map;let i=0;for(const s of e)t.set(s,i++);return t}(this.currentPuzzle.words.keys()))};if(t.length){const s=new Map,r=new Set(e);let o=0;for(const e of this.currentPuzzle.words.keys())r.has(e)||s.set(e,o++);i.secondBits=Se(t,s)}return i}static reconstructWords(e,t){const i=[...e.words.keys()],s=xe(i,t.firstBits),r=s.length;if(t.secondBits){const e=new Set(i);for(const t of s)e.delete(t);s.push(...xe([...e],t.secondBits))}return{words:s,cutoff:r}}static fromDbRecord(e,t){let i=e.wordsFound,s=!1;return we(i)&&(i=$e.reconstructWords(t,i),s=!0),new $e(he.fromSeed(t.message.seed),t,e.elapsedMs,i.cutoff,i.words,s,e.lastPlayed,e.d4)}}function Se(e,t){const i=new Uint8Array(Math.ceil(t.size/8));for(const s of e){const e=t.get(s),r=7&e;i[Math.floor(e/8)]|=1<<r}return i}function xe(e,t){const i=[];for(let s=0;s<t.length;++s){const r=t[s];if(r)for(let t=0;t<8;++t)r&1<<t&&i.push(e[8*s+t])}return i}let Te=Date.now();function Pe(){Te=Date.now()}function Ie(e){let t=ne.tb[e];return t.startsWith("Level")&&(t="Level "+t.substring(5)),t}function ke(e,t){return 1===t?e:`${e}s`}function Ce(e,t){return`${e} ${ke(t,e)}`}function Ee(e,t){return e?`${e.found} / ${e.total}\n  ${ke(t,e.total)}\n  (${Math.round(e.found/e.total*100)}%)`:""}async function _e(e,t){const i=t.lastPlayed||new Date;Pe(),await e.put("games",{puzzleId:t.puzzleId.seed,lastPlayed:i,elapsedMs:t.elapsedMs,wordsFound:t.wordsToStore,d4:t.d4})}var Oe=function(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Le=class extends s.oi{constructor(){super(...arguments),this.word="",this.category=null,this.theme="light",this.expand=!1,this.open=!1,this.timeoutId=0}static{this.styles=s.iv`
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
  `}render(){const{category:e}=this,t=$e.scoreWord(this.word);return s.dy`
      <a @click=${this.toggle}>${this.word}</a>
      ${this.open?s.dy`
            <span class="more">
              [${e?`${Ie(e)} —`:""}${t}
              point${t>1?"s":""} —
              <a
                href="https://www.google.com/search?q=define+%2B${this.word}+OR+${this.word}"
                target="_blank"
                >look up</a
              >]
            </span>
          `:""}
    `}shouldUpdate(e){return e.has("expand")&&this.expand!==this.open&&(this.open=this.expand),!0}toggle(e){this.open=!this.open,this.dispatchEvent(new CustomEvent("word-expanded",{detail:this.open?this.word:"",bubbles:!0,composed:!0})),this.timeoutId&&(window.clearTimeout(this.timeoutId),this.timeoutId=0),this.open&&(this.timeoutId=window.setTimeout((()=>{this.open&&this.toggle(),this.timeoutId=0}),2500))}};Oe([(0,r.Cb)()],Le.prototype,"word",void 0),Oe([(0,r.Cb)({type:Number})],Le.prototype,"category",void 0),Oe([(0,r.Cb)()],Le.prototype,"theme",void 0),Oe([(0,r.Cb)({type:Boolean})],Le.prototype,"expand",void 0),Oe([(0,r.SB)()],Le.prototype,"open",void 0),Le=Oe([(0,r.Mo)("solution-word")],Le);var De,Re=i(455),We=i(36);function Be(e,t={}){gtag("event",e,t)}!function(e){e.ACTION="wg_action",e.SYSTEM="wg_system"}(De||(De={}));const Ue=new Worker(new URL(i.p+i.u(975),i.b),{name:"words"});Ue.onerror=e=>{Be(De.SYSTEM,{category:"words worker error",detail:String(e)})};const Ae=[];function Me(e){return new Promise(((t,i)=>{Ae.push({message:e.toMakeGridMessage(),resolve:t,reject:i}),1===Ae.length&&Fe()}))}function Fe(){Ae.length&&Ue.postMessage(Ae[0].message)}Ue.onmessage=e=>{if(!Ae.length)return void Be(De.SYSTEM,{category:"words worker unexpected message",detail:JSON.stringify(e)});const t=Ae.shift();if(Fe(),e.data.message.seed===t?.message.seed)switch(e.data.type){case re.GRID:void 0!==e.data.wordsLoadMs&&Be(De.SYSTEM,{category:"words worker load-words time",elapsedMs:e.data.wordsLoadMs}),void 0!==e.data.elapsedMs&&Be(De.SYSTEM,{category:"words worker make-grid time",detail:e.data.message.seed,elapsedMs:e.data.elapsedMs}),t.resolve(e.data);break;case re.UNKNOWN_VERSION:Be(De.SYSTEM,{category:"words worker unknown version",detail:`${e.data.message.version} vs ${e.data.versions}`}),t.reject(`The words worker can't honor the version we asked for, ${e.data.message.version}`)}else Be(De.SYSTEM,{category:"words worker wrong puzzle received",detail:`${JSON.stringify(e.data.message)} instead of ${JSON.stringify(t?.message)}`})};var Ge=function(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Ne=class extends s.oi{constructor(){super(...arguments),this.theme="light",this.puzzleId=he.daily(),this.resumeImmediately=!1,this.loadingWords=!0,this.puzzle=null,this.gameState=null,this.db=ye(),this.foregroundnessHandler=()=>{"visible"!==document.visibilityState&&this.pauseGame("foregroundness")},this.windowBlurHandler=()=>{this.pauseGame("window blur")},this.lastInteraction=new Date,this.spacebarHandler=e=>{this.noteInteraction()," "===e.key&&(this.gameState?.isPaused?this.resumePlay():this.pauseGame("spacebar"))},this.showTimerHandler=()=>{this.requestUpdate()},this.gridTransitionQueue=[],this.gridTransitionClasses={},this.pendingWords=[],this.pendingWordsJudgements=[],this.pendingWordsTimeoutId=0,this.latestWord=""}static{this.styles=[K,s.iv`
      :host {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding-top: var(--page-grid-gap);
        display: grid;
        grid-template-columns: 1fr var(--grid-side-extent) 1fr;
        grid-template-rows: min-content auto;
        gap: var(--page-grid-gap);
        --page-grid-gap: 8px;
        --grid-spec-size: 6;
        --grid-optimal-cell-side-extent: 250px;
        --below-grid-height: 80px;
        --controls-height: calc(25px + 16px);
        --summary-height: 74px;
        --found-height: 100px;
        --found-width: 6em;
        --grid-optimal-width: calc(
          var(--grid-spec-size) * var(--grid-optimal-cell-side-extent)
        );
        --base-grid-side-extent: var(--grid-optimal-width);
        /* Horizontal layout */
        --grid-side-extent: min(
          var(--base-grid-side-extent),
          100vh - var(--below-grid-height) - var(--controls-height) - 2 *
            var(--page-grid-gap),
          100vw - 2 * var(--page-grid-gap) - 2 * var(--found-width)
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

      .d4-control {
        position: relative;
      }

      .d4-state {
        position: absolute;
        right: -5px;
        bottom: -5px;
        font-size: 30%;
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
        min-height: var(--found-height);
        column-width: var(--found-width);
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
        transition: transform ${j};
      }

      grid-view.flip {
        transform: scale(-1, 1);
        transition: transform ${j};
      }

      grid-view.pause-changing {
        transform: scaleY(0);
        transition: transform 80ms;
      }

      grid-view.pause-changed {
        transform: scaleY(1);
        transition: transform 80ms;
      }

      @media (prefers-reduced-motion) {
        grid-view.rotate,
        grid-view.flip,
        grid-view.pause-changing,
        grid-view.pause-changed {
          transition: transform 1ms;
        }
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

      /* Vertical layout */
      @media (max-aspect-ratio: 7/8) {
        :host {
          --grid-side-extent: min(
            var(--base-grid-side-extent),
            100vw - 2 * var(--page-grid-gap),
            100vh - var(--below-grid-height) - var(--found-height) -
              var(--controls-height) - var(--summary-height) - 4 *
              var(--page-grid-gap)
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
                <a
                  @click=${this.rotatePuzzle}
                  title="Rotate puzzle"
                  class="d4-control"
                >
                  <mat-icon name="rotate_90_degrees_cw"></mat-icon>
                  <div class="d4-state">${Z(t.d4)}</div>
                </a>
                <a
                  @click=${this.flipPuzzle}
                  title="Flip puzzle"
                  class="d4-control"
                >
                  <mat-icon name="flip"></mat-icon>
                  <div class="d4-state">${Number(X(t.d4))}</div>
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
                ${w()?s.dy`
                      Earned ${Ce(t.earnedPoints,"point")}.
                    `:""}
              </div>
              <div>
                ${Ee(t.getWordCounts(),"word")},
                <br />
                ${Ee(t?.getWordPoints(),"point")}.
              </div>
            `:""}
      </div>
      <div id="grid">
        <grid-view
          theme=${e}
          class=${(0,Re.$)(this.gridTransitionClasses)}
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
        ${(0,We.r)(this.gameState?.getFoundWords()??[],(e=>e),(e=>s.dy`
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
    `}noteInteraction(){this.lastInteraction=new Date}handleGridTransition(e){const{pendingGridTransition:t}=this;if(t){const e={...this.gridTransitionClasses};delete e[t.className],this.gridTransitionClasses=e,this.pendingGridTransition=void 0,t.updateGrid()}setTimeout((()=>this.runGridTransition()))}runGridTransition(){this.pendingGridTransition||this.gridTransitionQueue.length&&(this.pendingGridTransition=this.gridTransitionQueue.shift(),this.gridTransitionClasses={...this.gridTransitionClasses},this.gridTransitionClasses[this.pendingGridTransition?.className]=!0)}connectedCallback(){super.connectedCallback(),document.addEventListener("visibilitychange",this.foregroundnessHandler),window.addEventListener("blur",this.windowBlurHandler),window.addEventListener("keydown",this.spacebarHandler),d.addEventListener("show-timer",this.showTimerHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.foregroundnessHandler),window.removeEventListener("blur",this.windowBlurHandler),window.removeEventListener("keydown",this.spacebarHandler),d.removeEventListener("show-timer",this.showTimerHandler)}updated(e){e.has("puzzleId")&&this.requestAndLoadPuzzle()}setTheme(e){p(e.target.dataset.theme)}async requestAndLoadPuzzle(){const{puzzleId:e}=this;this.puzzle=null,this.gameState=null,this.style.setProperty("--grid-spec-size",e.spec.size.toString());const t=await Me(e);if(this.puzzleId.seed===e.seed)if(t.words.size<50){const{resumeImmediately:t}=this;this.dispatchEvent(new CustomEvent("play-puzzle",{detail:{puzzleId:e.next(),resumeImmediately:t},bubbles:!0,composed:!0}))}else this.loadPuzzle(t,e)}async loadPuzzle(e,t){const i=await this.db,s=await i.get("games",e.message.seed);this.gameState=s?$e.fromDbRecord(s,e):new $e(t,e),this.puzzle=this.gameState.puzzle,this.gameState.isComplete?this.redirectToHistory():this.resumeImmediately&&this.gameState.resume()}async saveGame(){const{gameState:e}=this;e&&e.lastPlayed&&await _e(await this.db,e)}async timerExpired(e){e.detail&&(this.pendingWords.length&&this.addWords(this.pendingWords,!0),await this.pauseGameAsync(),window.confirm("Time's up!\n\nKeep looking for words?\n\nCancel to quit.")?(await(0,new Promise((e=>setTimeout(e,0)))),this.resumePlay()):await this.quit())}async goToHistory(){await this.saveGame(),this.redirectToHistory(),Be(De.ACTION,{category:"go to history"})}resumePlay(){this.noteInteraction(),this.gridTransitionQueue.push({className:"pause-changing",updateGrid:()=>{const{gameState:e}=this;e&&(e.resume(),Be(De.ACTION,{category:"resume"})),this.gridTransitionQueue.push({className:"pause-changed",updateGrid:()=>{}})}}),this.runGridTransition()}pausePlay(){this.noteInteraction(),this.pauseGame("button")}async pauseGameAsync(e,t=!0){this.gameState?.pause(e),t&&this.requestUpdate(),await this.saveGame(),Be(De.ACTION,{category:"pause"})}pauseGame(e){if(this.gameState?.isPaused||this.classList.contains("pause-changing"))return;const t=new Date,i=ce(t),s=ce(this.lastInteraction);let r=t.getTime();i!==s&&(r=this.lastInteraction.getTime(),Be(De.ACTION,{category:"pause-next-day",detail:e})),this.gridTransitionQueue.push({className:"pause-changing",updateGrid:()=>{this.pauseGameAsync(r,!1),this.gridTransitionQueue.push({className:"pause-changed",updateGrid:()=>{}})}}),this.runGridTransition()}async quit(){this.gameState?.markComplete(),await this.saveGame(),this.redirectToHistory(),Be(De.ACTION,{category:"quit"})}rotatePuzzle(e){this.noteInteraction(),this.gridTransitionQueue.push({className:"rotate",updateGrid:()=>{const{gameState:e}=this;e&&(this.puzzle=e.applyD4(V.R),Be(De.ACTION,{category:"rotate"}))}}),this.runGridTransition()}flipPuzzle(e){this.noteInteraction(),this.gridTransitionQueue.push({className:"flip",updateGrid:()=>{const{gameState:e}=this;e&&(this.puzzle=e.applyD4(V.F),Be(De.ACTION,{category:"flip"}))}}),this.runGridTransition()}clearPendingWordsTimeout(){this.pendingWordsTimeoutId&&(window.clearTimeout(this.pendingWordsTimeoutId),this.pendingWordsTimeoutId=0)}wordsTraced(e){this.noteInteraction(),this.pendingWords=e.detail.words,this.pendingWordsJudgements=e.detail.words.map((t=>this.gameState?.judgeWord(t,e.detail.checkPossible)??ge.NOT_A_WORD)),this.clearPendingWordsTimeout()}wordsSelected(e){this.addWords(e.detail.words,e.detail.checkPossible??!1)}addWords(e,t){this.noteInteraction(),this.pendingWords=e,this.pendingWordsJudgements=e.map((e=>this.gameState?.addFoundWord(e,t)??ge.NOT_A_WORD)),this.clearPendingWordsTimeout();const i=this.pendingWordsJudgements.findIndex((e=>e===ge.WORD));if(i>=0)this.latestWord=e[i],this.found?.scrollTo({left:0,behavior:"smooth"}),this.saveGame(),this.gameState?.isComplete&&this.redirectToHistory();else{const t=this.pendingWordsJudgements.findIndex((e=>e===ge.DUPLICATE));if(t>=0){this.latestWord=e[t];const i=this.shadowRoot?.querySelector(`solution-word[word=${this.latestWord}]`);window.setTimeout((()=>{i?.scrollIntoView({behavior:"smooth"})}))}}this.pendingWordsTimeoutId=window.setTimeout((()=>{this.pendingWords=[]}),1e3)}judgementClass(e){switch(e){case ge.TOO_SHORT:return"too-short-word";case ge.NOT_A_WORD:default:return"not-a-word";case ge.DUPLICATE:return"duplicate-word";case ge.WORD:return"found-new-word";case ge.IMPOSSIBLE:return"impossible-word"}}redirectToHistory(){this.dispatchEvent(new CustomEvent("show-history",{detail:{puzzleId:this.puzzleId},bubbles:!0,composed:!0}))}};function He(e,t){return new ne.yG(`${e}:${t}`)}Ge([(0,r.Cb)({reflect:!0})],Ne.prototype,"theme",void 0),Ge([(0,r.Cb)({attribute:!1,hasChanged:(e,t)=>e?.seed!==t?.seed})],Ne.prototype,"puzzleId",void 0),Ge([(0,r.Cb)({type:Boolean})],Ne.prototype,"resumeImmediately",void 0),Ge([(0,r.Cb)({type:Boolean})],Ne.prototype,"loadingWords",void 0),Ge([(0,r.IO)("#found")],Ne.prototype,"found",void 0),Ge([(0,r.SB)()],Ne.prototype,"puzzle",void 0),Ge([(0,r.SB)()],Ne.prototype,"gridTransitionClasses",void 0),Ge([(0,r.SB)()],Ne.prototype,"pendingWords",void 0),Ge([(0,r.SB)()],Ne.prototype,"latestWord",void 0),Ne=Ge([(0,r.Mo)("game-view")],Ne);var je=function(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let qe=class extends s.oi{constructor(){super(...arguments),this.theme="light",this.expanded=!1,this.selectShareAs=!1,this.record=null,this.game=null,this.shares=[],this.uniqueWords=new Set,this.shareAs="",this.shareClipboardText="",this.copyToClipboardFailed=!1,this.shareBack=!1,this.db=ye(),this.prevShownWord="",this.shownWordCount=0,this.shownPath={locs:[]}}static{this.styles=[q,K,s.iv`
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
    `]}render(){const{record:e,game:t,expanded:i,offsetLeft:r,shares:o}=this;if(!e)return"";this.style.setProperty("--left-inset",`${r}px`);const n=he.fromSeed(e.puzzleId),a=t?.getWordCategories()??[];return s.dy`
      <div>
        ${n.spec.name} puzzle #${n.counter} of
        ${n.dateString}
      </div>
      ${t?s.dy`
            <div>
              Earned ${Ce(t.earnedPoints,"point")} for finding
              ${Ce(t.numWordsFoundBeforeTimeLimit,"word")} within
              ${t.puzzleId.spec.timerMinutes} minutes.
            </div>
            <div>
              Found ${Ee(t.getWordCounts(),"word")},
              ${Ee(t.getWordPoints(),"point")}.
            </div>
            <div>
              ${t.isComplete?s.dy`
                    Complete
                    ${o.length>1?s.dy`
                          (${Ce(o.length-1,"other player")})
                        `:""}
                    ${i?this.renderShareForm():s.dy`&mdash; expand to share`}
                  `:s.dy`
                    Ongoing
                    <a @click=${this.resumeGame} title="Resume play">
                      <mat-icon name="play_circle"></mat-icon>
                    </a>
                    ${o.length>1?s.dy`
                          (${Ce(o.length-1,"other player")}
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
                            .puzzleId=${n}
                            .puzzle=${t.puzzle}
                            .externalPath=${this.shownPath}
                          ></grid-view>
                          <div id="all-words" class="may-scroll">
                            ${this.renderAllWords(t,a)}
                          </div>
                        </div>
                      `:s.dy`
                        <div id="ongoing">
                          ${a.map((e=>s.dy`
                              <div class="cat">${Ie(e)}</div>
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
    </form>`}renderAllWords(e,t){const{shares:i,uniqueWords:r}=this,o=Math.max(...i.map((e=>e.result.kept.points)));return this.style.setProperty("--names-appear",""+(i.length>1?1:0)),this.style.setProperty("--num-shares",`${i.length}`),s.dy`
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
                      class=${e.result.kept.points===o?"winner":""}
                    >
                      <div class="person-name">${e.person}</div>
                    </th>`))}
              </tr>
              <tr>
                <td class="word-column"></td>
                ${i.map((e=>{const{result:t}=e;return s.dy`<td>
                    Kept ${Ce(t.kept.points,"point")}, lost
                    ${t.lost.points}.
                  </td>`}))}
              </tr>
            `:""}
        ${t.map((t=>s.dy`
            <tr class="cat-row">
              <th class="word-column">${Ie(t)}</th>
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
                              ${r.has(e)?s.dy`<span class="unique"
                                    >+${$e.scoreWord(e)}</span
                                  >`:s.dy`<span class="duplicate">+0</span>`}
                            `:t.after.has(e)?s.dy` <mat-icon name="check"></mat-icon> `:""}
                      </td>
                    `))}
                </tr>
              `))}
          `))}
      </table>
    `}async updated(e){e.has("record")&&this.loadGame(),this.expanded&&this.selectShareAs&&!this.shareAs&&!e.has("shownPath")&&(await 0,this.shareAsInput&&this.shareAsInput.select())}showWord(e){const{game:t}=this;if(!t)return;const i=e.detail;if(i){i===this.prevShownWord?++this.shownWordCount:(this.shownWordCount=0,this.prevShownWord=i);const e=t.findPaths(i);this.shownPath=e[this.shownWordCount%e.length]}else this.shownPath={locs:[]}}async loadGame(){const{record:e}=this;if(!e)return;const t=await Me(he.fromSeed(e.puzzleId)),i=$e.fromDbRecord(e,t),s=(await this.db).transaction("shares").store.index("by-puzzle-id"),r=[i.asSharedGameState("You")],o=new Set(r[0].before),n=new Set;for await(const t of s.iterate(e.puzzleId)){const e=i.toSharedGameState(t.value);r.push(e);for(const t of e.before)o.has(t)?(o.delete(t),n.add(t)):n.has(t)||o.add(t)}for(const e of r)e.setUniqueWords(o);this.shares=r,this.uniqueWords=o,this.shareBack=r.length>1,this.game=i,this.dispatchEvent(new CustomEvent("game-loaded",{detail:i.puzzleId,bubbles:!0,composed:!0}))}handleShareAsUpdated(e){this.shareAs=e.target.value,this.shareClipboardText="",this.copyToClipboardFailed=!1}handleShareBackChanged(e){this.shareBack=e.target.checked}async shareGame(e){e.preventDefault(),e.stopPropagation(),this.shareClipboardText="",this.copyToClipboardFailed=!1;const{game:t,shareAs:i,shares:s,shareBack:r}=this;if(t){const e=function(e,t){const{wordsToStore:i}=e;if(!we(i))return;const s=He(e.puzzleId.seed,t),r=ne.H6(i.firstBits,s);let o=`${location.origin}${location.pathname}#share/${e.puzzleId.seed}/${encodeURIComponent(t)}/${r}`;return i.secondBits&&(o+=`/${ne.H6(i.secondBits,s)}`),s.free(),o}(t,i);if(!e)return;const o="Leadpipe Wordgrid",n=function(e,t,i,s){const r=`${t} earned ${Ce(e.earnedPoints,"point")}`;if(s){const e=i.length-1;let t=[];for(let s=1;s<=e;++s){const r=i[s],o=`${r.person} (${r.result.kept.points})`;1===s&&e<=2?t.push(o):s===e?t.push(`and ${o}`):t.push(`${o},`)}return`${r}, kept ${i[0].result.kept.points} versus ${t.join(" ")}.`}return`${r}.  Share back when you've finished!`}(t,i,s,r);!function(e){const t=new Set([e]);for(const e of v)if(t.add(e),t.size>=10)break;v=[...t],window.localStorage.setItem("monikers",JSON.stringify(v))}(i);let a=!1;if("share"in navigator)try{await navigator.share({title:o,text:n,url:e}),a=!0}catch(e){Be(De.SYSTEM,{category:"navigator.share failed",detail:`${e}`})}let d=!1;if(!a){this.shareClipboardText=`${n}  ${e}`;try{await navigator.clipboard.writeText(this.shareClipboardText),d=!0}catch(e){Be(De.SYSTEM,{category:"navigator.clipboard.writeText failed",detail:`${e}`})}}this.copyToClipboardFailed=!a&&!d,this.copyToClipboardFailed&&(await 0,this.shareTextInput&&this.shareTextInput.select()),Be(De.ACTION,{category:r?"share back":"share",detail:a?"system":d?"clipboard":"manual"})}}resumeGame(){this.game&&(this.dispatchEvent(new CustomEvent("play-puzzle",{detail:{puzzleId:this.game.puzzleId,resume:!0},bubbles:!0,composed:!0})),Be(De.ACTION,{category:"resume from history"}))}async quitGame(){this.game&&(this.game.markComplete(),await _e(await this.db,this.game),this.dispatchEvent(new CustomEvent("show-history",{detail:{puzzleId:this.game.puzzleId,selectShareAs:!1},bubbles:!0,composed:!0})),this.requestUpdate(),Be(De.ACTION,{category:"quit from history"}))}toggleExpansion(){const e=this.expanded?void 0:this.game?.puzzleId;this.dispatchEvent(new CustomEvent("show-history",{detail:{puzzleId:e,selectShareAs:!0},bubbles:!0,composed:!0})),Be(De.ACTION,{category:"expand history"})}};je([(0,r.Cb)({reflect:!0})],qe.prototype,"theme",void 0),je([(0,r.Cb)({type:Boolean,reflect:!0})],qe.prototype,"expanded",void 0),je([(0,r.Cb)({type:Boolean})],qe.prototype,"selectShareAs",void 0),je([(0,r.Cb)({attribute:!1})],qe.prototype,"record",void 0),je([(0,r.SB)()],qe.prototype,"game",void 0),je([(0,r.SB)()],qe.prototype,"shareAs",void 0),je([(0,r.SB)()],qe.prototype,"shareClipboardText",void 0),je([(0,r.SB)()],qe.prototype,"copyToClipboardFailed",void 0),je([(0,r.SB)()],qe.prototype,"shareBack",void 0),je([(0,r.IO)("#share-text-input")],qe.prototype,"shareTextInput",void 0),je([(0,r.IO)("#share-as")],qe.prototype,"shareAsInput",void 0),je([(0,r.IO)("#complete")],qe.prototype,"completeBlock",void 0),je([(0,r.SB)()],qe.prototype,"shownPath",void 0),qe=je([(0,r.Mo)("game-summary")],qe);var Ke=function(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Ye=class extends s.oi{constructor(){super(...arguments),this.theme="light",this.expandedPuzzle="",this.selectShareAs=!1,this.gameRecordsByDate=null,this.db=ye()}static{this.styles=[K,s.iv`
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
      ${[...e.entries()].map((([e,r])=>s.dy`
          <div>
            <span class="date">${e}</span>
            <ul>
              ${r.map((e=>s.dy`
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
        `))}`:"Loading games..."}connectedCallback(){super.connectedCallback(),this.loadGames()}disconnectedCallback(){this.gameRecordsByDate=null,super.disconnectedCallback()}updated(e){e.has("expandedPuzzle")&&this.scrollToExpandedSummary()}async scrollToExpandedSummary(){await 0;const e=!this.gameRecordsByDate||!this.expandedPuzzle,t=this.gameRecordsByDate?.values().next()?.value[0].puzzleId===this.expandedPuzzle,i=this.shadowRoot?.querySelector("game-summary[expanded]"),s=i instanceof qe?i.completeBlock:void 0;s?s.scrollIntoView({behavior:"smooth"}):i&&!t?i.scrollIntoView({behavior:"smooth"}):e||this.scrollTo(0,0)}async loadGames(){const e=(await this.db).transaction("games").store.index("by-last-played"),t=new Map;for await(const i of e.iterate(null,"prev")){const e=i.key.toDateString(),s=i.value,r=t.get(e);r?r.push(s):t.set(e,[s])}this.gameRecordsByDate=t,Pe()}handleGameLoaded(e){this.scrollToExpandedSummary()}};Ke([(0,r.Cb)({reflect:!0})],Ye.prototype,"theme",void 0),Ke([(0,r.Cb)()],Ye.prototype,"expandedPuzzle",void 0),Ke([(0,r.Cb)({type:Boolean})],Ye.prototype,"selectShareAs",void 0),Ke([(0,r.SB)()],Ye.prototype,"gameRecordsByDate",void 0),Ye=Ke([(0,r.Mo)("history-view")],Ye);var Qe=function(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};const Je=Date.now();let Ve,Ze=he.daily();async function Xe(e){window.clearTimeout(Ve);const t=Date.now(),i=he.daily();i.seed>Ze.seed&&t>Te+3e5&&(Be(De.SYSTEM,{category:"made daily puzzle"}),Ze=i,await e.cleanDb(),e.dispatchEvent(new CustomEvent("play-puzzle",{detail:{puzzleId:i},bubbles:!0,composed:!0})),Date.now()-Je>6048e5&&location.replace(location.pathname)),Ve=window.setTimeout((()=>Xe(e)),36e5)}Be(De.SYSTEM,{category:"page loaded"});const et="1:1776-07-04:4:1",tt=he.fromSeed(et),it={type:re.GRID,message:{type:se.MAKE_GRID,version:1,seed:et,size:4,minLength:3},grid:["TLHS","GTTS","AEOE","CSPB"],words:new Map},st={locs:[P(0,3),P(1,2),P(2,2),P(3,2),P(3,1)]},rt={locs:[P(1,0),P(2,0),P(1,1),P(2,1),P(3,2),P(2,2),P(1,3),P(1,2)]};let ot=class extends s.oi{static{this.styles=[K,s.iv`
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
        --background: ${_};
        --text-color: ${C};
        --highlight-background: ${D};
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
              .puzzleId=${tt}
              .puzzle=${it}
              .externalPath=${0===this.helpOption?st:rt}
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
            .puzzleId=${he.fromSeed(this.puzzleSeed)}
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
    `}renderThemeChoice(e,t){const i=e.toLowerCase(),r=this.preferredTheme===i?"selected":"";return s.dy`
      <div class=${r}>
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
    `}constructor(){super(),this.theme=c(),this.page="play",this.puzzleSeed=Ze.seed,this.selectShareAs=!1,this.resumeImmediately=!1,this.preferredTheme=h,this.showTimer=w(),this.loadingWords=!0,this.helpOption=0,this.db=ye(),this.themeHandler=e=>{this.theme=e.detail},this.popstateHandler=()=>{this.interpretHash()},this.dailyPuzzleUpdater=()=>{Xe(this)},this.addEventListener("play-puzzle",(e=>this.handlePlayPuzzle(e))),this.addEventListener("show-help",(()=>this.handleShowHelp())),this.addEventListener("show-history",(e=>this.handleShowHistory(e))),this.addEventListener("show-settings",(()=>this.handleShowSettings())),this.trackWordsLoading(),this.startApp(),Xe(this),b||window.setTimeout((()=>{this.handleShowHelp()}))}connectedCallback(){super.connectedCallback(),d.addEventListener("current-theme",this.themeHandler),window.addEventListener("popstate",this.popstateHandler),window.addEventListener("focus",this.dailyPuzzleUpdater),window.addEventListener("blur",this.dailyPuzzleUpdater),document.addEventListener("visibilitychange",this.dailyPuzzleUpdater)}disconnectedCallback(){super.disconnectedCallback(),d.removeEventListener("current-theme",this.themeHandler),window.removeEventListener("popstate",this.popstateHandler),window.removeEventListener("focus",this.dailyPuzzleUpdater),window.removeEventListener("blur",this.dailyPuzzleUpdater),document.removeEventListener("visibilitychange",this.dailyPuzzleUpdater)}parseHash(){const{hash:e}=location;if(e.startsWith("#")){const{pathname:t,searchParams:i}=new URL(`${location.origin}/${e.substring(1)}`),s=t.substring(1).split("/");return[s.shift()??"",s,i]}return["",[],new URLSearchParams]}interpretHash(){let[e,t,i]=this.parseHash(),s=t[0]??"";"history"!==e&&(e="play"),"play"!==e||s||(s=he.daily().seed),this.page=e,this.puzzleSeed=s,this.resumeImmediately=!1,this.updateLocation()}updateLocation(){const{page:e,puzzleSeed:t}=this,i=t?`#${e}/${t}`:`#${e}`;i!==location.hash&&history.replaceState(null,"",i)}pauseGame(e){this.gameView?.pauseGame(e)}handlePlayPuzzle(e){this.pauseGame("play event"),this.page="play",this.puzzleSeed=e.detail.puzzleId.seed,this.resumeImmediately=e.detail.resume??!1,this.updateLocation()}handleShowHistory(e){this.pauseGame("history event"),this.page="history",this.puzzleSeed=e.detail?.puzzleId?.seed??"",this.selectShareAs=Boolean(e.detail?.selectShareAs),this.updateLocation()}async showDialog(e){this.pauseGame("show dialog"),this.dialogRenderer=e,await 0,this.dialog?.showModal()}hideDialog(){this.dialogRenderer=void 0}closeDialog(){this.dialog?.close()}handleShowHelp(){this.showDialog(this.renderHelpDialog),Be(De.ACTION,{category:"help opened"})}helpClosed(){this.hideDialog(),Be(De.ACTION,{category:"help closed"}),b=!0,window.localStorage.setItem("seenHelp","true")}handleShowSettings(){this.showDialog(this.renderSettingsDialog),Be(De.ACTION,{category:"settings opened"})}settingsClosed(){this.hideDialog(),Be(De.ACTION,{category:"settings closed"})}handleDialogKey(e){switch(e.key){case"Tab":case"Escape":return;case"Enter":case" ":e.target?.click()}e.preventDefault(),e.stopImmediatePropagation()}setHelpOption(e){this.helpOption=Number(this.findData(e,"option"))}setPreferredTheme(e){const t=this.findData(e,"theme");this.preferredTheme=t,p(t),Be(De.ACTION,{category:"theme set",detail:t})}setShowTimer(e){const t="true"===this.findData(e,"show");this.showTimer=t,y(t),Be(De.ACTION,{category:"show-timer set",detail:String(t)})}findData(e,t){let i=e.target;for(;i;){if(t in i.dataset)return i.dataset[t];i=i.parentElement}return""}async newPuzzle(e){this.closeDialog();const t=e.target.dataset.name,i=function(e){const t=le.get(e.toLowerCase());if(!t)throw new Error(`Invalid game spec name '${e}'`);return t}(t);let s=he.forSpec(i);const r=await this.db;for(const e of await r.getAllKeys("games",s.toDbRange())){const t=he.fromSeed(e);s.compareTo(t)<=0&&(s=t.next())}this.dispatchEvent(new CustomEvent("play-puzzle",{detail:{puzzleId:s},bubbles:!0,composed:!0})),Be(De.ACTION,{category:"new puzzle",detail:t})}async trackWordsLoading(){await Me(Ze),this.loadingWords=!1}async startApp(){await this.cleanDb();let[e,t,i]=this.parseHash();const s=t.shift()??"",r=he.daily(),o=r.seed;if("history"===e||"play"===e&&s)return this.page=e,this.puzzleSeed=s,void this.updateLocation();if("share"===e)this.puzzleSeed=s,await this.importShare(s,t);else{const e=await this.db,t=await e.transaction("games").store.index("by-last-played").openCursor(null,"prev");t&&ce(t.key)===r.dateString&&!we(t.value.wordsFound)?this.puzzleSeed=t.value.puzzleId:this.puzzleSeed=o}this.page="play",this.updateLocation()}async importShare(e,t){const i=await this.db,s=function(e){return decodeURIComponent(e[0]??"")}(t);let r;try{r=function(e,t,i){let s;const r=He(e,t);try{s={firstBits:ne.p4(i[1],r),secondBits:i[2]?ne.p4(i[2],r):void 0}}finally{r.free()}return s}(e,s,t)}catch(t){return console.log("Bad share URL",location,t),Be(De.SYSTEM,{category:"bad share url",detail:`${t}`}),void alert(`Unable to import ${s}'s share of ${e}.  Did it get truncated?`)}const o=await i.get("games",e);if(o&&be(o.wordsFound,r))return Be(De.SYSTEM,{category:"self import"}),void alert(`${s}'s share of ${e} is identical to your game.`);const n=i.transaction("shares").store.index("by-puzzle-id");let a=null;for await(const t of n.iterate(e))if(be(t.value.wordsFound,r)){a=t.value.person;break}a===s?(Be(De.SYSTEM,{category:"duplicate import"}),alert(`You've already imported ${s}'s share of ${e}.`)):null!==a?(Be(De.SYSTEM,{category:"duplicate import different name"}),alert(`You've already imported ${s}'s share of ${e}, under the name '${a}'.`)):(await i.put("shares",{person:s,puzzleId:e,wordsFound:r}),Be(De.SYSTEM,{category:"import",detail:e}),alert(`Successfully imported ${s}'s share of ${e}.`))}async cleanDb(){const e=await this.db,t=e.transaction("games").store.index("by-last-played");let i=0;const s=ce(new Date(Date.now()-2592e6)),r=[];for await(const e of t.iterate(null,"prev"))++i,i<=10||i<=100&&ce(e.key)>=s||r.push(e.value.puzzleId);for(const t of r){await e.delete("games",t);const i=await e.getAllKeysFromIndex("shares","by-puzzle-id",t);for(const t of i)await e.delete("shares",t)}}};Qe([(0,r.Cb)({reflect:!0})],ot.prototype,"theme",void 0),Qe([(0,r.SB)()],ot.prototype,"page",void 0),Qe([(0,r.SB)()],ot.prototype,"puzzleSeed",void 0),Qe([(0,r.SB)()],ot.prototype,"selectShareAs",void 0),Qe([(0,r.SB)()],ot.prototype,"resumeImmediately",void 0),Qe([(0,r.SB)()],ot.prototype,"preferredTheme",void 0),Qe([(0,r.SB)()],ot.prototype,"showTimer",void 0),Qe([(0,r.SB)()],ot.prototype,"loadingWords",void 0),Qe([(0,r.SB)()],ot.prototype,"dialogRenderer",void 0),Qe([(0,r.SB)()],ot.prototype,"helpOption",void 0),Qe([(0,r.IO)("game-view")],ot.prototype,"gameView",void 0),Qe([(0,r.IO)("dialog")],ot.prototype,"dialog",void 0),ot=Qe([(0,r.Mo)("leadpipe-wordgrid")],ot);var nt=i(379),at=i.n(nt),dt=i(795),lt=i.n(dt),ht=i(569),ct=i.n(ht),pt=i(565),ut=i.n(pt),mt=i(216),gt=i.n(mt),ft=i(589),wt=i.n(ft),yt=i(914),vt={};vt.styleTagTransform=wt(),vt.setAttributes=ut(),vt.insert=ct().bind(null,"head"),vt.domAPI=lt(),vt.insertStyleElement=gt(),at()(yt.Z,vt),yt.Z&&yt.Z.locals&&yt.Z.locals},401:(e,t,i)=>{var s=i.w[e.id];for(var r in i.r(t),s)r&&(t[r]=s[r]);i(975),s[""]()}}]);