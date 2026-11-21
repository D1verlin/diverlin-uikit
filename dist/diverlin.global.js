var DiverlinUI=(function(p){"use strict";var Ie=Object.defineProperty;var He=(p,$,A)=>$ in p?Ie(p,$,{enumerable:!0,configurable:!0,writable:!0,value:A}):p[$]=A;var d=(p,$,A)=>He(p,typeof $!="symbol"?$+"":$,A);const $=`
  *, *::before, *::after {
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: var(--dv-scrollbar-thumb) transparent;
  }
  *::-webkit-scrollbar { width: 6px; height: 6px; }
  *::-webkit-scrollbar-track { background: transparent; }
  *::-webkit-scrollbar-thumb { background: var(--dv-scrollbar-thumb); border-radius: 999px; }
  *::-webkit-scrollbar-thumb:hover { background: var(--dv-scrollbar-thumb-hover); }
  :host {
    font-family: var(--dv-font-sans);
    color: var(--dv-text-primary);
  }
  :host([hidden]) {
    display: none !important;
  }
  :host([accent='cobalt']) {
    --dv-accent: #2563eb; --dv-accent-hover: #1d4ed8; --dv-accent-fg: #ffffff;
    --dv-gradient-accent: linear-gradient(135deg in oklch, #2563eb 0%, #0ea5e9 100%);
    --dv-gradient-surface: radial-gradient(125% 110% at 0% 0%, color-mix(in oklch, #3b82f6 24%, var(--dv-card-bg)) 0%, var(--dv-card-bg) 75%);
    --dv-gradient-text: linear-gradient(135deg in oklch, #2563eb 0%, #0ea5e9 100%);
  }
  :host([accent='emerald']) {
    --dv-accent: #059669; --dv-accent-hover: #047857; --dv-accent-fg: #ffffff;
    --dv-gradient-accent: linear-gradient(135deg in oklch, #059669 0%, #14b8a6 100%);
    --dv-gradient-surface: radial-gradient(125% 110% at 0% 0%, color-mix(in oklch, #10b981 24%, var(--dv-card-bg)) 0%, var(--dv-card-bg) 75%);
    --dv-gradient-text: linear-gradient(135deg in oklch, #059669 0%, #14b8a6 100%);
  }
  :host([accent='amber']) {
    --dv-accent: #d97706; --dv-accent-hover: #b45309; --dv-accent-fg: #ffffff;
    --dv-gradient-accent: linear-gradient(135deg in oklch, #ea580c 0%, #f59e0b 100%);
    --dv-gradient-surface: radial-gradient(125% 110% at 0% 0%, color-mix(in oklch, #f59e0b 24%, var(--dv-card-bg)) 0%, var(--dv-card-bg) 75%);
    --dv-gradient-text: linear-gradient(135deg in oklch, #ea580c 0%, #f59e0b 100%);
  }
  :host([accent='rose']) {
    --dv-accent: #e11d48; --dv-accent-hover: #be123c; --dv-accent-fg: #ffffff;
    --dv-gradient-accent: linear-gradient(135deg in oklch, #e11d48 0%, #ec4899 100%);
    --dv-gradient-surface: radial-gradient(125% 110% at 0% 0%, color-mix(in oklch, #f43f5e 24%, var(--dv-card-bg)) 0%, var(--dv-card-bg) 75%);
    --dv-gradient-text: linear-gradient(135deg in oklch, #e11d48 0%, #ec4899 100%);
  }
  :host([accent='violet']) {
    --dv-accent: #7c3aed; --dv-accent-hover: #6d28d9; --dv-accent-fg: #ffffff;
    --dv-gradient-accent: linear-gradient(135deg in oklch, #6d28d9 0%, #a855f7 100%);
    --dv-gradient-surface: radial-gradient(125% 110% at 0% 0%, color-mix(in oklch, #8b5cf6 24%, var(--dv-card-bg)) 0%, var(--dv-card-bg) 75%);
    --dv-gradient-text: linear-gradient(135deg in oklch, #6d28d9 0%, #a855f7 100%);
  }
  :host([accent='sunset']) {
    --dv-accent: #ea580c; --dv-accent-hover: #c2410c; --dv-accent-fg: #ffffff;
    --dv-gradient-accent: linear-gradient(135deg in oklch, #e11d48 0%, #f97316 100%);
    --dv-gradient-surface: radial-gradient(125% 110% at 0% 0%, color-mix(in oklch, #f97316 24%, var(--dv-card-bg)) 0%, var(--dv-card-bg) 75%);
    --dv-gradient-text: linear-gradient(135deg in oklch, #e11d48 0%, #f97316 100%);
  }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`,A=`
  :host([accent]) .tablist:not(.underline) button[aria-selected='true'],
  :host([accent]) .track > .pill,
  :host([accent]) .row .pill,
  :host([accent]) .badge {
    background: var(--dv-accent);
    color: var(--dv-accent-fg);
  }
  :host([accent]) .track > button[aria-pressed='true'] {
    color: var(--dv-accent-fg);
  }
  :host([accent]) .heading,
  :host([accent]) .value,
  :host([accent]) .num .val,
  :host([accent]) .stage > .front,
  :host([accent]) .unit,
  :host([accent]) .ch,
  :host([accent]) .txt,
  :host([accent]) .word.active {
    color: var(--dv-accent);
  }
  :host([accent]) .card,
  :host([accent]) .tilt {
    background: var(--dv-gradient-surface);
  }
  :host([accent]) .spot,
  :host([gradient]) .spot {
    background: radial-gradient(
      var(--_size, 240px) circle at var(--_x, 50%) var(--_y, 50%),
      color-mix(in oklch, var(--dv-accent) 28%, transparent),
      transparent 75%
    ) !important;
  }
  :host([accent]) .px,
  :host([gradient]) .px {
    background: color-mix(in oklch, var(--dv-accent) 42%, var(--dv-surface-active)) !important;
  }
  :host([accent]) .shiny,
  :host([gradient]) .shiny {
    background: linear-gradient(
      110deg in oklch,
      var(--dv-accent) 20%,
      var(--dv-text-primary) 50%,
      var(--dv-accent) 80%
    ) !important;
    background-size: 200% 100% !important;
    -webkit-background-clip: text !important;
    background-clip: text !important;
    color: transparent !important;
  }

  :host([gradient]) .variant-primary,
  :host([gradient]) .fill,
  :host([gradient]) .track.checked,
  :host([gradient]) input:checked + .box,
  :host([gradient]) input:checked + .circle,
  :host([gradient]) .badge,
  :host([gradient]) .tag.selected,
  :host([gradient]) .row .pill,
  :host([gradient]) .track > .pill,
  :host([gradient]) .tablist:not(.underline) button[aria-selected='true'],
  :host([gradient]) li.active .num,
  :host([gradient]) nav button.active,
  :host([gradient]) .item[aria-selected='true'],
  :host([gradient]) .folder .front,
  :host([gradient]) .slider-area .thumb,
  :host([gradient]) .thumb[role='slider'] {
    background: var(--dv-gradient-accent) !important;
    color: var(--dv-accent-fg) !important;
  }
  :host([gradient]) .track > button[aria-pressed='true'] {
    color: var(--dv-accent-fg) !important;
  }
  :host([gradient]) .card,
  :host([gradient]) .tilt,
  :host([gradient]) .stat,
  :host([gradient]) .alert {
    background: var(--dv-gradient-surface) !important;
  }
  :host([gradient]) .heading,
  :host([gradient]) .value,
  :host([gradient]) .num .val,
  :host([gradient]) .stage > .front {
    background: var(--dv-gradient-text) !important;
    -webkit-background-clip: text !important;
    background-clip: text !important;
    color: transparent !important;
  }
`,me=new Map;function we(l){if(typeof CSSStyleSheet>"u"||!("replaceSync"in CSSStyleSheet.prototype))return null;let i=me.get(l);return i||(i=new CSSStyleSheet,i.replaceSync(l),me.set(l,i)),i}class h extends HTMLElement{constructor(){super();d(this,"root");d(this,"_initialized",!1);this.root=this.attachShadow({mode:"open"})}static get componentStyles(){return""}connectedCallback(){if(!this._initialized){this._initialized=!0;const t=this.constructor,e=`${$}
${t.componentStyles}
${A}`,r=we(e);if(r&&"adoptedStyleSheets"in this.root)this.root.adoptedStyleSheets=[r];else{const a=document.createElement("style");a.textContent=e,this.root.appendChild(a)}this.onMount()}this.render()}disconnectedCallback(){this.onUnmount()}attributeChangedCallback(t,e,r){e!==r&&this._initialized&&this.render()}onMount(){}onUnmount(){}attr(t,e=""){return this.getAttribute(t)??e}boolAttr(t){return this.hasAttribute(t)&&this.getAttribute(t)!=="false"}numAttr(t,e=0){const r=this.getAttribute(t);if(r===null)return e;const a=Number(r);return Number.isFinite(a)?a:e}emit(t,e){return this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0,cancelable:!0}))}}function m(l,i){typeof customElements<"u"&&!customElements.get(l)&&customElements.define(l,i)}function c(l){return l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const E="dv-theme",fe="dv-accent",$e=new Set(["light","dark"]),Ae=new Set(["mono","cobalt","emerald","amber","rose","violet","sunset"]);function _(l){return typeof l=="string"&&$e.has(l)}function z(l){return typeof l=="string"&&Ae.has(l)}function C(){if(typeof document>"u")return"light";const l=document.documentElement.getAttribute("data-theme");return _(l)?l:"light"}function S(l,i=!0){const t=_(l)?l:"light";if(typeof document<"u"&&(document.documentElement.setAttribute("data-theme",t),document.documentElement.dispatchEvent(new CustomEvent("dv-theme-change",{detail:{theme:t}}))),i&&typeof localStorage<"u")try{localStorage.setItem(E,t)}catch{}return t}function Se(){if(typeof document>"u")return"mono";const l=document.documentElement.getAttribute("data-accent");return z(l)?l:"mono"}function M(l,i=!0){const t=z(l)?l:"mono";if(typeof document<"u"&&(t==="mono"?document.documentElement.removeAttribute("data-accent"):document.documentElement.setAttribute("data-accent",t),document.documentElement.dispatchEvent(new CustomEvent("dv-accent-change",{detail:{accent:t}}))),i&&typeof localStorage<"u")try{localStorage.setItem(fe,t)}catch{}return t}function _e(l="mono"){if(typeof localStorage<"u")try{const i=localStorage.getItem(fe);if(z(i))return M(i,!1)}catch{}return M(l,!1)}function ze(l="light"){var i;if(typeof localStorage<"u")try{const t=localStorage.getItem(E);if(_(t))return S(t,!1)}catch{}return typeof window<"u"&&((i=window.matchMedia)!=null&&i.call(window,"(prefers-color-scheme: dark)").matches)?S("dark",!1):S(l,!1)}function Le(){if(typeof window>"u"||!window.matchMedia)return()=>{};const l=window.matchMedia("(prefers-color-scheme: dark)"),i=t=>{try{if(localStorage.getItem(E))return}catch{}S(t.matches?"dark":"light",!1)};return l.addEventListener("change",i),()=>l.removeEventListener("change",i)}const g={check:'<polyline points="20 6 9 17 4 12"/>',x:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',"chevron-down":'<polyline points="6 9 12 15 18 9"/>',"chevron-up":'<polyline points="18 15 12 9 6 15"/>',"chevron-left":'<polyline points="15 18 9 12 15 6"/>',"chevron-right":'<polyline points="9 18 15 12 9 6"/>',search:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',moon:'<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',palette:'<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',menu:'<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>',plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',minus:'<line x1="5" y1="12" x2="19" y2="12"/>',info:'<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',"alert-triangle":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',"alert-circle":'<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',"check-circle":'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',"eye-off":'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>',sliders:'<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',trash:'<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',"arrow-right":'<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',"arrow-left":'<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',code:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',layout:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>'};class D extends h{static get componentStyles(){return`
      :host { display: inline-flex; }
      :host([full]) { display: flex; width: 100%; }

      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--dv-space-2);
        width: 100%;
        font-family: var(--dv-font-sans);
        font-weight: 500;
        border-radius: var(--dv-radius-sm);
        border: none;
        cursor: pointer;
        user-select: none;
        white-space: nowrap;
        transition: transform var(--dv-duration-fast) var(--dv-ease), opacity var(--dv-duration-fast) var(--dv-ease);
      }

      button:focus-visible {
        outline: none;
        box-shadow: var(--dv-focus-ring);
      }

      button:active:not(:disabled) {
        transform: translateY(1px);
      }

      button:disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }

      .size-sm { height: 32px; padding: 0 12px; font-size: var(--dv-text-sm); }
      .size-md { height: 38px; padding: 0 16px; font-size: var(--dv-text-body); }
      .size-lg { height: 44px; padding: 0 20px; font-size: var(--dv-text-body); }

      .variant-primary {
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
      }
      .variant-primary:hover:not(:disabled) {
        background: var(--dv-accent-hover);
      }

      .variant-secondary {
        background: var(--dv-surface);
        color: var(--dv-text-primary);
      }
      .variant-secondary:hover:not(:disabled) {
        background: var(--dv-surface-hover);
      }

      .variant-ghost {
        background: transparent;
        color: var(--dv-text-secondary);
      }
      .variant-ghost:hover:not(:disabled) {
        background: var(--dv-surface);
        color: var(--dv-text-primary);
      }

      .variant-danger {
        background: var(--dv-surface);
        color: var(--dv-danger);
      }
      .variant-danger:hover:not(:disabled) {
        background: var(--dv-surface-hover);
      }

      .spinner {
        width: 14px;
        height: 14px;
        border: 2px solid currentColor;
        border-right-color: transparent;
        border-radius: 50%;
        animation: dv-spin 0.65s linear infinite;
      }

      @keyframes dv-spin {
        to { transform: rotate(360deg); }
      }
    `}render(){const i=this.attr("variant","primary"),t=this.attr("size","md"),e=this.boolAttr("disabled")||this.boolAttr("loading"),r=this.boolAttr("loading"),a=this.attr("type","button");this.root.innerHTML=`
      <button
        type="${a}"
        class="size-${t} variant-${i}"
        ${e?"disabled":""}
        aria-busy="${r}"
      >
        ${r?'<span class="spinner" aria-hidden="true"></span>':""}
        <slot></slot>
      </button>
    `}}d(D,"observedAttributes",["variant","size","disabled","loading","full","type"]),m("dv-button",D);class T extends h{static get componentStyles(){return`
      :host { display: inline-flex; }
      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--dv-radius-sm);
        border: none;
        cursor: pointer;
        background: transparent;
        color: var(--dv-text-secondary);
        transition: transform var(--dv-duration-fast) var(--dv-ease), opacity var(--dv-duration-fast) var(--dv-ease);
      }
      button:focus-visible {
        outline: none;
        box-shadow: var(--dv-focus-ring);
      }
      button:active:not(:disabled) {
        transform: translateY(1px);
      }
      button:disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }
      .size-sm { width: 30px; height: 30px; }
      .size-md { width: 36px; height: 36px; }
      .size-lg { width: 42px; height: 42px; }

      .variant-secondary {
        background: var(--dv-surface);
        color: var(--dv-text-primary);
      }
      .variant-secondary:hover:not(:disabled) {
        background: var(--dv-surface-hover);
      }
      .variant-ghost:hover:not(:disabled) {
        background: var(--dv-surface);
        color: var(--dv-text-primary);
      }
      .variant-primary {
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
      }
      .variant-primary:hover:not(:disabled) {
        background: var(--dv-accent-hover);
      }
    `}render(){const i=this.attr("icon"),t=this.attr("label",i||"Action"),e=this.attr("variant","secondary"),r=this.attr("size","md"),a=this.boolAttr("disabled"),n=r==="sm"?15:r==="lg"?20:17,s=g[i];this.root.innerHTML=`
      <button
        type="button"
        class="size-${r} variant-${e}"
        aria-label="${c(t)}"
        title="${c(t)}"
        ${a?"disabled":""}
      >
        ${s?`<svg width="${n}" height="${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${s}</svg>`:"<slot></slot>"}
      </button>
    `}}d(T,"observedAttributes",["icon","label","variant","size","disabled"]),m("dv-icon-button",T);class q extends h{static get componentStyles(){return`
      :host {
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--dv-space-2);
      }
    `}render(){const i=this.attr("gap");i&&(this.style.gap=i),this.root.innerHTML="<slot></slot>"}}d(q,"observedAttributes",["gap"]),m("dv-button-group",q);class j extends h{constructor(){super(...arguments);d(this,"_onThemeChange",()=>{this.render()})}static get componentStyles(){return`
      :host { display: inline-flex; }
      button {
        display: inline-flex;
        align-items: center;
        gap: var(--dv-space-2);
        border: none;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        font-weight: 500;
        cursor: pointer;
        transition: transform var(--dv-duration-fast) var(--dv-ease), opacity var(--dv-duration-fast) var(--dv-ease);
      }
      button:hover { background: var(--dv-surface-hover); }
      button:active { transform: scale(0.95); }
      button:focus-visible { outline: none; box-shadow: var(--dv-focus-ring); }
      .size-sm { height: 32px; padding: 0 9px; }
      .size-md { height: 38px; padding: 0 12px; }
      .size-lg { height: 44px; padding: 0 14px; }
    `}onMount(){document.documentElement.addEventListener("dv-theme-change",this._onThemeChange)}onUnmount(){document.documentElement.removeEventListener("dv-theme-change",this._onThemeChange)}render(){var o;const t=C(),e=this.attr("size","md"),r=this.boolAttr("show-label"),a=t==="dark",n=a?g.sun:g.moon,s=a?"Светлая тема":"Тёмная тема";this.root.innerHTML=`
      <button type="button" class="size-${e}" aria-label="${s}" title="${s}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${n}</svg>
        ${r?`<span>${a?"Светлая":"Тёмная"}</span>`:""}
      </button>
    `,(o=this.root.querySelector("button"))==null||o.addEventListener("click",()=>{const v=C()==="dark"?"light":"dark";S(v),this.emit("dv-change",{theme:v})})}}d(j,"observedAttributes",["size","show-label"]),m("dv-theme-toggle",j);class I extends h{constructor(){super(...arguments);d(this,"_copied",!1);d(this,"_timer",null)}static get componentStyles(){return`
      :host { display: inline-flex; }
      button {
        display: inline-flex;
        align-items: center;
        gap: var(--dv-space-2);
        border: none;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        font-weight: 500;
        cursor: pointer;
        transition: transform var(--dv-duration-fast) var(--dv-ease), opacity var(--dv-duration-fast) var(--dv-ease);
      }
      button:hover { background: var(--dv-surface-hover); }
      button:active { transform: scale(0.95); }
      button:focus-visible { outline: none; box-shadow: var(--dv-focus-ring); }
      .variant-ghost { background: transparent; color: var(--dv-text-secondary); }
      .variant-ghost:hover { background: var(--dv-surface); color: var(--dv-text-primary); }
      .size-sm { height: 32px; padding: 0 10px; }
      .size-md { height: 38px; padding: 0 14px; }
      .size-lg { height: 44px; padding: 0 16px; }
      .copied-icon { color: var(--dv-success); }
    `}onUnmount(){this._timer&&window.clearTimeout(this._timer)}render(){var n;const t=this.attr("label",""),e=this.attr("size","md"),r=this.attr("variant","secondary"),a=this._copied?g.check:g.copy;this.root.innerHTML=`
      <button type="button" class="size-${e} variant-${r}" aria-label="${c(t||"Копировать")}">
        <svg class="${this._copied?"copied-icon":""}" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${a}</svg>
        ${t?`<span>${c(this._copied?"Скопировано":t)}</span>`:""}
      </button>
    `,(n=this.root.querySelector("button"))==null||n.addEventListener("click",async()=>{var o;const s=this.attr("value","");try{await((o=navigator.clipboard)==null?void 0:o.writeText(s))}catch{}this._copied=!0,this.render(),this.emit("dv-copy",{value:s}),this._timer&&window.clearTimeout(this._timer),this._timer=window.setTimeout(()=>{this._copied=!1,this.render()},1500)})}}d(I,"observedAttributes",["value","label","size","variant"]),m("dv-copy-button",I);class H extends h{static get componentStyles(){return`
      :host { display: block; }
      .field {
        display: flex;
        flex-direction: column;
        gap: var(--dv-space-2);
      }
      .label {
        font-size: var(--dv-text-sm);
        font-weight: 500;
        color: var(--dv-text-primary);
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }
      .req { color: var(--dv-danger); }
      .hint {
        font-size: var(--dv-text-xs);
        color: var(--dv-text-muted);
      }
      .error {
        font-size: var(--dv-text-xs);
        color: var(--dv-danger);
      }
    `}render(){const i=this.attr("label"),t=this.attr("hint"),e=this.attr("error"),r=this.boolAttr("required");this.root.innerHTML=`
      <div class="field">
        ${i?`<label class="label">${c(i)}${r?'<span class="req" aria-hidden="true">*</span>':""}</label>`:""}
        <slot></slot>
        ${e?`<div class="error" role="alert">${c(e)}</div>`:t?`<div class="hint">${c(t)}</div>`:""}
      </div>
    `}}d(H,"observedAttributes",["label","hint","error","required"]),m("dv-field",H);class B extends h{constructor(){super(...arguments);d(this,"_syncing",!1)}static get componentStyles(){return`
      :host { display: block; width: 100%; }
      input {
        width: 100%;
        font-family: var(--dv-font-sans);
        color: var(--dv-text-primary);
        background: var(--dv-surface);
        border: none;
        border-radius: var(--dv-radius-sm);
        outline: none;
        transition: opacity var(--dv-duration-fast) var(--dv-ease);
      }
      input::placeholder { color: var(--dv-text-muted); }
      input:hover:not(:disabled):not(:focus) { background: var(--dv-surface-hover); }
      input:focus {
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-focus-ring);
      }
      input:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      input.has-error {
        box-shadow: 0 0 0 2px var(--dv-danger);
      }
      .size-sm { height: 32px; padding: 0 10px; font-size: var(--dv-text-sm); }
      .size-md { height: 38px; padding: 0 12px; font-size: var(--dv-text-body); }
      .size-lg { height: 44px; padding: 0 14px; font-size: var(--dv-text-body); }
    `}get value(){var t;return((t=this.root.querySelector("input"))==null?void 0:t.value)??this.attr("value")}set value(t){this.setAttribute("value",t);const e=this.root.querySelector("input");e&&e.value!==t&&(e.value=t)}attributeChangedCallback(t,e,r){if(t==="value"){if(this._syncing)return;const a=this.root.querySelector("input");if(a){a.value!==(r??"")&&(a.value=r??"");return}}super.attributeChangedCallback(t,e,r)}render(){const t=this.attr("type","text"),e=this.attr("value",""),r=this.attr("placeholder",""),a=this.boolAttr("disabled"),n=this.boolAttr("readonly"),s=this.boolAttr("error"),o=this.attr("size","md"),v=this.attr("name","");this.root.innerHTML=`
      <input
        type="${c(t)}"
        class="size-${o} ${s?"has-error":""}"
        value="${c(e)}"
        placeholder="${c(r)}"
        ${v?`name="${c(v)}"`:""}
        ${a?"disabled":""}
        ${n?"readonly":""}
      />
    `;const u=this.root.querySelector("input");u.addEventListener("input",()=>{this._syncing=!0,this.setAttribute("value",u.value),this._syncing=!1,this.emit("dv-input",{value:u.value})}),u.addEventListener("change",()=>{this.emit("dv-change",{value:u.value})})}}d(B,"observedAttributes",["type","value","placeholder","disabled","readonly","error","size","name"]),m("dv-input",B);class Y extends h{constructor(){super(...arguments);d(this,"_syncing",!1)}static get componentStyles(){return`
      :host { display: block; width: 100%; }
      textarea {
        width: 100%;
        min-height: 88px;
        padding: 10px 12px;
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-body);
        line-height: var(--dv-leading-body);
        color: var(--dv-text-primary);
        background: var(--dv-surface);
        border: none;
        border-radius: var(--dv-radius-sm);
        outline: none;
        resize: vertical;
      }
      textarea::placeholder { color: var(--dv-text-muted); }
      textarea:hover:not(:disabled):not(:focus) { background: var(--dv-surface-hover); }
      textarea:focus {
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-focus-ring);
      }
      textarea:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      textarea.has-error { box-shadow: 0 0 0 2px var(--dv-danger); }
    `}get value(){var t;return((t=this.root.querySelector("textarea"))==null?void 0:t.value)??this.attr("value")}set value(t){this.setAttribute("value",t);const e=this.root.querySelector("textarea");e&&e.value!==t&&(e.value=t)}attributeChangedCallback(t,e,r){if(t==="value"){if(this._syncing)return;const a=this.root.querySelector("textarea");if(a){a.value!==(r??"")&&(a.value=r??"");return}}super.attributeChangedCallback(t,e,r)}render(){const t=this.attr("value",""),e=this.attr("placeholder",""),r=this.numAttr("rows",3),a=this.boolAttr("disabled"),n=this.boolAttr("readonly"),s=this.boolAttr("error");this.root.innerHTML=`
      <textarea
        rows="${r}"
        class="${s?"has-error":""}"
        placeholder="${c(e)}"
        ${a?"disabled":""}
        ${n?"readonly":""}
      >${c(t)}</textarea>
    `;const o=this.root.querySelector("textarea");o.addEventListener("input",()=>{this._syncing=!0,this.setAttribute("value",o.value),this._syncing=!1,this.emit("dv-input",{value:o.value})}),o.addEventListener("change",()=>{this.emit("dv-change",{value:o.value})})}}d(Y,"observedAttributes",["value","placeholder","rows","disabled","readonly","error"]),m("dv-textarea",Y);class N extends h{constructor(){super(...arguments);d(this,"_open",!1);d(this,"_onDocClick",t=>{this._open&&!t.composedPath().includes(this)&&this.setOpen(!1)});d(this,"_onKeyDown",t=>{var e;this._open&&t.key==="Escape"&&(this.setOpen(!1),(e=this.root.querySelector(".trigger"))==null||e.focus())})}static get componentStyles(){return`
      :host { display: block; width: 100%; position: relative; }
      .wrap { position: relative; width: 100%; }
      .trigger {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--dv-space-2);
        font-family: var(--dv-font-sans);
        color: var(--dv-text-primary);
        background: var(--dv-surface);
        border: none;
        border-radius: var(--dv-radius-sm);
        cursor: pointer;
        text-align: left;
        outline: none;
        transition: opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .trigger:hover:not(:disabled) { background: var(--dv-surface-hover); }
      .trigger:focus-visible,
      .trigger.open {
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-focus-ring);
      }
      .trigger:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .trigger.has-error { box-shadow: 0 0 0 2px var(--dv-danger); }
      .placeholder { color: var(--dv-text-muted); }

      .size-sm { height: 32px; padding: 0 10px; font-size: var(--dv-text-sm); }
      .size-md { height: 38px; padding: 0 12px; font-size: var(--dv-text-body); }
      .size-lg { height: 44px; padding: 0 14px; font-size: var(--dv-text-body); }

      .chevron {
        color: var(--dv-text-muted);
        display: inline-flex;
        flex-shrink: 0;
        transition: transform var(--dv-duration-fast) var(--dv-ease);
      }
      .trigger.open .chevron { transform: rotate(180deg); }

      .menu {
        position: absolute;
        top: calc(100% + 6px);
        left: 0;
        right: 0;
        z-index: var(--dv-z-dropdown);
        background: var(--dv-surface-elevated);
        border: none;
        border-radius: var(--dv-radius-md);
        box-shadow: var(--dv-shadow-md);
        padding: 4px;
        max-height: 240px;
        overflow-y: auto;
        display: none;
        flex-direction: column;
        gap: 2px;
      }
      .menu.open {
        display: flex;
        animation: dv-select-in var(--dv-duration-fast) var(--dv-ease);
      }
      @keyframes dv-select-in {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--dv-space-2);
        width: 100%;
        padding: 8px 10px;
        border: none;
        background: transparent;
        color: var(--dv-text-primary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        border-radius: var(--dv-radius-xs);
        cursor: pointer;
        text-align: left;
      }
      .option:hover:not(:disabled) {
        background: var(--dv-surface-hover);
      }
      .option[aria-selected='true'] {
        background: var(--dv-surface);
        font-weight: 600;
      }
      .option:disabled { opacity: 0.45; cursor: not-allowed; }
    `}onMount(){document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onKeyDown)}onUnmount(){document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onKeyDown)}get value(){return this.attr("value","")}set value(t){this.setAttribute("value",t)}getItems(){const t=this.attr("options","");if(t)try{const e=JSON.parse(t);if(Array.isArray(e))return e.map(r=>typeof r=="string"?{label:r,value:r}:{label:String(r.label??r.value),value:String(r.value),disabled:!!r.disabled})}catch{return[]}return Array.from(this.querySelectorAll("option")).map(e=>({label:e.textContent??e.value,value:e.value,disabled:e.disabled}))}setOpen(t){var e,r,a;this._open=t,(e=this.root.querySelector(".trigger"))==null||e.classList.toggle("open",t),(r=this.root.querySelector(".trigger"))==null||r.setAttribute("aria-expanded",String(t)),(a=this.root.querySelector(".menu"))==null||a.classList.toggle("open",t)}render(){var v;const t=this.attr("value",""),e=this.boolAttr("disabled"),r=this.boolAttr("error"),a=this.attr("size","md"),n=this.attr("placeholder","Выберите значение"),s=this.getItems(),o=s.find(u=>u.value===t);this.root.innerHTML=`
      <div class="wrap">
        <button
          type="button"
          class="trigger size-${a} ${r?"has-error":""} ${this._open?"open":""}"
          aria-haspopup="listbox"
          aria-expanded="${this._open}"
          ${e?"disabled":""}
        >
          <span class="${o?"":"placeholder"}">${c(o?o.label:n)}</span>
          <span class="chevron" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${g["chevron-down"]}</svg>
          </span>
        </button>
        <div class="menu ${this._open?"open":""}" role="listbox">
          ${s.map(u=>`
            <button
              type="button"
              class="option"
              role="option"
              data-value="${c(u.value)}"
              aria-selected="${u.value===t}"
              ${u.disabled?"disabled":""}
            >
              <span>${c(u.label)}</span>
              ${u.value===t?`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${g.check}</svg>`:""}
            </button>
          `).join("")}
        </div>
      </div>
    `,(v=this.root.querySelector(".trigger"))==null||v.addEventListener("click",()=>{e||this.setOpen(!this._open)}),this.root.querySelectorAll(".option").forEach(u=>{u.addEventListener("click",()=>{if(u.disabled)return;const f=u.getAttribute("data-value")??"";this._open=!1,this.setAttribute("value",f),this.emit("dv-change",{value:f})})})}}d(N,"observedAttributes",["value","disabled","error","size","options","placeholder"]),m("dv-select",N);class O extends h{static get componentStyles(){return`
      :host { display: inline-flex; }
      label {
        display: inline-flex;
        align-items: center;
        gap: var(--dv-space-2);
        cursor: pointer;
        user-select: none;
        font-size: var(--dv-text-body);
        color: var(--dv-text-primary);
      }
      label.disabled { opacity: 0.45; cursor: not-allowed; }
      input {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
      }
      .box {
        width: 18px;
        height: 18px;
        border-radius: var(--dv-radius-xs);
        border: none;
        background: var(--dv-surface-active);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--dv-accent-fg);
        flex-shrink: 0;
        transition: transform var(--dv-duration-fast) var(--dv-ease);
      }
      .check-icon {
        opacity: 0;
        transform: scale(0.6);
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      input:checked + .box {
        background: var(--dv-accent);
      }
      input:checked + .box .check-icon {
        opacity: 1;
        transform: scale(1);
      }
      label:active:not(.disabled) .box {
        transform: scale(0.92);
      }
      input:focus-visible + .box {
        box-shadow: var(--dv-focus-ring);
      }
    `}get checked(){return this.boolAttr("checked")}set checked(i){i?this.setAttribute("checked",""):this.removeAttribute("checked")}attributeChangedCallback(i,t,e){if(i==="checked"){const r=this.root.querySelector("input");if(r){r.checked=this.boolAttr("checked");return}}super.attributeChangedCallback(i,t,e)}render(){const i=this.boolAttr("checked"),t=this.boolAttr("disabled"),e=this.attr("label");this.root.innerHTML=`
      <label class="${t?"disabled":""}">
        <input type="checkbox" ${i?"checked":""} ${t?"disabled":""} />
        <span class="box" aria-hidden="true">
          <svg class="check-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${g.check}</svg>
        </span>
        ${e?`<span>${c(e)}</span>`:"<slot></slot>"}
      </label>
    `;const r=this.root.querySelector("input");r.addEventListener("change",()=>{this.checked=r.checked,this.emit("dv-change",{checked:r.checked,value:this.attr("value","on")})})}}d(O,"observedAttributes",["checked","disabled","label","name","value"]),m("dv-checkbox",O);class P extends h{static get componentStyles(){return`
      :host { display: inline-flex; }
      label {
        display: inline-flex;
        align-items: center;
        gap: var(--dv-space-2);
        cursor: pointer;
        user-select: none;
        font-size: var(--dv-text-body);
        color: var(--dv-text-primary);
      }
      label.disabled { opacity: 0.45; cursor: not-allowed; }
      input {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
      }
      .circle {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: none;
        background: var(--dv-surface-active);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        transition: transform var(--dv-duration-fast) var(--dv-ease);
      }
      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--dv-accent-fg);
        transform: scale(0);
        opacity: 0;
        transition: transform var(--dv-duration-fast) cubic-bezier(0.34, 1.56, 0.64, 1), opacity var(--dv-duration-fast) var(--dv-ease);
      }
      input:checked + .circle {
        background: var(--dv-accent);
      }
      input:checked + .circle .dot {
        transform: scale(1);
        opacity: 1;
      }
      label:active:not(.disabled) .circle {
        transform: scale(0.92);
      }
      input:focus-visible + .circle {
        box-shadow: var(--dv-focus-ring);
      }
    `}get checked(){return this.boolAttr("checked")}set checked(i){i?this.setAttribute("checked",""):this.removeAttribute("checked")}attributeChangedCallback(i,t,e){if(i==="checked"){const r=this.root.querySelector("input");if(r){r.checked=this.boolAttr("checked");return}}super.attributeChangedCallback(i,t,e)}render(){const i=this.boolAttr("checked"),t=this.boolAttr("disabled"),e=this.attr("label"),r=this.attr("name");this.root.innerHTML=`
      <label class="${t?"disabled":""}">
        <input type="radio" ${r?`name="${c(r)}"`:""} ${i?"checked":""} ${t?"disabled":""} />
        <span class="circle" aria-hidden="true"><span class="dot"></span></span>
        ${e?`<span>${c(e)}</span>`:"<slot></slot>"}
      </label>
    `;const a=this.root.querySelector("input");a.addEventListener("change",()=>{a.checked&&r&&document.querySelectorAll(`dv-radio[name="${r}"]`).forEach(n=>{n!==this&&n.removeAttribute("checked")}),this.checked=a.checked,this.emit("dv-change",{checked:a.checked,value:this.attr("value")})})}}d(P,"observedAttributes",["checked","disabled","label","name","value"]),m("dv-radio",P);class X extends h{static get componentStyles(){return`
      :host { display: inline-flex; }
      .wrap {
        display: inline-flex;
        align-items: center;
        gap: var(--dv-space-3);
        cursor: pointer;
        user-select: none;
        font-size: var(--dv-text-body);
        color: var(--dv-text-primary);
        background: none;
        border: none;
        padding: 0;
      }
      .wrap:disabled { opacity: 0.45; cursor: not-allowed; }
      .wrap:focus-visible { outline: none; }
      .wrap:focus-visible .track { box-shadow: var(--dv-focus-ring); }

      .track {
        position: relative;
        width: 40px;
        height: 22px;
        border-radius: 11px;
        background: var(--dv-surface-active);
        border: none;
        flex-shrink: 0;
        transition: opacity var(--dv-duration-base) var(--dv-ease);
      }
      .track.checked {
        background: var(--dv-accent);
      }
      .thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: var(--dv-text-primary);
        transition: transform var(--dv-duration-base) cubic-bezier(0.34, 1.45, 0.64, 1);
      }
      .track.checked .thumb {
        background: var(--dv-accent-fg);
        transform: translateX(18px);
      }
      .wrap:active:not(:disabled) .thumb {
        transform: scale(0.92);
      }
      .wrap:active:not(:disabled) .track.checked .thumb {
        transform: translateX(18px) scale(0.92);
      }
    `}get checked(){return this.boolAttr("checked")}set checked(i){i?this.setAttribute("checked",""):this.removeAttribute("checked")}attributeChangedCallback(i,t,e){if(i==="checked"){const r=this.root.querySelector("button"),a=this.root.querySelector(".track");if(r&&a){const n=this.boolAttr("checked");r.setAttribute("aria-checked",String(n)),a.classList.toggle("checked",n);return}}super.attributeChangedCallback(i,t,e)}render(){const i=this.boolAttr("checked"),t=this.boolAttr("disabled"),e=this.attr("label");this.root.innerHTML=`
      <button
        type="button"
        class="wrap"
        role="switch"
        aria-checked="${i}"
        ${t?"disabled":""}
      >
        <span class="track ${i?"checked":""}" aria-hidden="true">
          <span class="thumb"></span>
        </span>
        ${e?`<span>${c(e)}</span>`:"<slot></slot>"}
      </button>
    `,this.root.querySelector("button").addEventListener("click",()=>{this.boolAttr("disabled")||(this.checked=!this.checked,this.emit("dv-change",{checked:this.checked}))})}}d(X,"observedAttributes",["checked","disabled","label"]),m("dv-toggle",X);class F extends h{constructor(){super(...arguments);d(this,"_dragging",!1)}static get componentStyles(){return`
      :host { display: block; width: 100%; user-select: none; }
      .wrap { display: flex; flex-direction: column; gap: var(--dv-space-2); }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        font-size: var(--dv-text-sm);
        color: var(--dv-text-secondary);
      }
      .val {
        font-variant-numeric: tabular-nums;
        color: var(--dv-text-primary);
        font-weight: 600;
      }
      .slider-area {
        position: relative;
        height: 24px;
        display: flex;
        align-items: center;
        cursor: pointer;
        touch-action: none;
      }
      .slider-area.disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }
      .track {
        position: relative;
        width: 100%;
        height: 6px;
        border-radius: 999px;
        background: var(--dv-surface-active);
      }
      .fill {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: var(--_pct, 50%);
        border-radius: 999px;
        background: var(--dv-accent);
        transition: width 110ms cubic-bezier(0.22, 1, 0.36, 1);
      }
      .slider-area.dragging .fill {
        transition: none;
      }
      .thumb {
        position: absolute;
        top: 50%;
        left: var(--_pct, 50%);
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--dv-accent);
        border: none;
        box-shadow: var(--dv-shadow-sm);
        transform: translate(-50%, -50%) scale(1);
        transition:
          left 110ms cubic-bezier(0.22, 1, 0.36, 1),
          transform 180ms cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .slider-area:hover:not(.disabled) .thumb {
        transform: translate(-50%, -50%) scale(1.1);
      }
      .slider-area.dragging .thumb {
        transition: transform 160ms cubic-bezier(0.34, 1.56, 0.64, 1);
        transform: translate(-50%, -50%) scale(1.22);
      }
      .slider-area:focus-visible { outline: none; }
      .slider-area:focus-visible .thumb {
        box-shadow: var(--dv-focus-ring);
      }
      .ticks {
        position: relative;
        width: 100%;
        height: 18px;
        margin-top: 2px;
      }
      .tick {
        position: absolute;
        top: 0;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        font-size: 11px;
        font-variant-numeric: tabular-nums;
        color: var(--dv-text-muted);
      }
      .tick-mark {
        width: 2px;
        height: 5px;
        border-radius: 1px;
        background: var(--dv-border-hover);
      }
      .tick.active .tick-mark {
        background: var(--dv-accent);
      }
      .tick.active {
        color: var(--dv-text-primary);
        font-weight: 500;
      }
    `}get value(){return this.numAttr("value",50)}set value(t){this.setAttribute("value",String(t))}getMarks(t,e,r){const a=this.attr("marks");if(a&&a!=="true"&&a!=="")try{const n=JSON.parse(a);if(Array.isArray(n))return n}catch{}if(this.boolAttr("stepped")||this.hasAttribute("marks")){const n=[],s=Math.floor((e-t)/r);if(s>0&&s<=20)for(let o=0;o<=s;o++){const v=Number((t+o*r).toFixed(4));n.push({value:v,label:String(v)})}return n}return[]}attributeChangedCallback(t,e,r){if(t==="value"&&this.root.querySelector(".track")){this.syncVisual(Number(r??0));return}super.attributeChangedCallback(t,e,r)}syncVisual(t){const e=this.numAttr("min",0),r=Math.max(e+.001,this.numAttr("max",100)),a=Math.min(100,Math.max(0,(t-e)/(r-e)*100)),n=this.root.querySelector(".slider-area");n&&(n.style.setProperty("--_pct",`${a}%`),n.setAttribute("aria-valuenow",String(t)));const s=this.root.querySelector(".val");s&&(s.textContent=String(t)),this.root.querySelectorAll(".tick").forEach(o=>{const v=Number(o.dataset.value);o.classList.toggle("active",v<=t)})}render(){const t=this.numAttr("min",0),e=Math.max(t+.001,this.numAttr("max",100)),r=Math.max(.001,this.numAttr("step",1)),a=Math.min(e,Math.max(t,this.numAttr("value",50))),n=this.boolAttr("disabled"),s=this.attr("label"),o=this.boolAttr("show-value"),v=this.getMarks(t,e,r),u=(a-t)/(e-t)*100;this.root.innerHTML=`
      <div class="wrap">
        ${s||o?`<div class="header"><span>${c(s)}</span>${o?`<span class="val">${a}</span>`:""}</div>`:""}
        <div
          class="slider-area ${n?"disabled":""}"
          style="--_pct:${u}%"
          tabindex="${n?-1:0}"
          role="slider"
          aria-label="${c(s||"Slider")}"
          aria-valuemin="${t}"
          aria-valuemax="${e}"
          aria-valuenow="${a}"
        >
          <div class="track">
            <div class="fill"></div>
            <div class="thumb"></div>
          </div>
        </div>
        ${v.length>0?`<div class="ticks">
                ${v.map(x=>{const w=(x.value-t)/(e-t)*100;return`<div class="tick ${x.value<=a?"active":""}" data-value="${x.value}" style="left:${w}%">
                      <span class="tick-mark"></span>
                      ${x.label?`<span>${c(x.label)}</span>`:""}
                    </div>`}).join("")}
              </div>`:""}
      </div>
    `;const f=this.root.querySelector(".slider-area");if(n)return;const b=(x,w)=>{const k=f.getBoundingClientRect(),ke=Math.min(1,Math.max(0,(x-k.left)/k.width)),he=t+ke*(e-t),je=Math.min(e,Math.max(t,Math.round((he-t)/r)*r+t)),L=w||this.boolAttr("stepped")?Number(je.toFixed(4)):Number(he.toFixed(2));return this.setAttribute("value",String(L)),this.syncVisual(L),this.emit("dv-input",{value:L}),L};f.addEventListener("pointerdown",x=>{this._dragging=!0,f.classList.add("dragging"),f.setPointerCapture(x.pointerId),b(x.clientX,!1)}),f.addEventListener("pointermove",x=>{this._dragging&&b(x.clientX,!1)});const y=x=>{if(!this._dragging)return;this._dragging=!1,f.classList.remove("dragging");const w=b(x.clientX,!0);this.emit("dv-change",{value:w})};f.addEventListener("pointerup",y),f.addEventListener("pointercancel",y),f.addEventListener("keydown",x=>{const w=this.value;let k=w;if(x.key==="ArrowRight"||x.key==="ArrowUp")k=Math.min(e,w+r);else if(x.key==="ArrowLeft"||x.key==="ArrowDown")k=Math.max(t,w-r);else return;x.preventDefault(),k=Number(k.toFixed(4)),this.setAttribute("value",String(k)),this.emit("dv-input",{value:k}),this.emit("dv-change",{value:k})})}}d(F,"observedAttributes",["min","max","step","value","disabled","label","show-value","stepped","marks"]),m("dv-slider",F);class R extends h{static get componentStyles(){return`
      :host { display: inline-flex; }
      .wrap {
        display: inline-flex;
        align-items: center;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        overflow: hidden;
      }
      .wrap:focus-within {
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-focus-ring);
      }
      .wrap.disabled { opacity: 0.45; pointer-events: none; }
      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        background: transparent;
        border: none;
        color: var(--dv-text-secondary);
        cursor: pointer;
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) var(--dv-ease);
      }
      button:hover:not(:disabled) { background: var(--dv-surface-hover); color: var(--dv-text-primary); }
      button:active:not(:disabled) { transform: scale(0.9); }
      button:disabled { opacity: 0.35; cursor: not-allowed; }
      input {
        width: 56px;
        border: none;
        background: transparent;
        text-align: center;
        font-family: var(--dv-font-sans);
        font-variant-numeric: tabular-nums;
        font-weight: 500;
        color: var(--dv-text-primary);
        outline: none;
      }
      .size-sm { height: 32px; font-size: var(--dv-text-sm); }
      .size-sm button { height: 30px; width: 28px; }
      .size-md { height: 38px; font-size: var(--dv-text-body); }
      .size-md button { height: 36px; width: 34px; }
      .size-lg { height: 44px; font-size: var(--dv-text-body); }
      .size-lg button { height: 42px; width: 38px; }
    `}get value(){return this.numAttr("value",0)}set value(i){this.setAttribute("value",String(i))}attributeChangedCallback(i,t,e){if(i==="value"){const r=this.root.querySelector("input");if(r){r.value=String(this.numAttr("value",0));return}}super.attributeChangedCallback(i,t,e)}render(){const i=this.hasAttribute("min")?this.numAttr("min",-1/0):-1/0,t=this.hasAttribute("max")?this.numAttr("max",1/0):1/0,e=this.numAttr("step",1),r=Math.min(t,Math.max(i,this.numAttr("value",0))),a=this.boolAttr("disabled"),n=this.attr("size","md");this.root.innerHTML=`
      <div class="wrap size-${n} ${a?"disabled":""}">
        <button type="button" class="dec" aria-label="Уменьшить" ${r<=i?"disabled":""}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${g.minus}</svg>
        </button>
        <input type="text" inputmode="numeric" value="${r}" ${a?"disabled":""} />
        <button type="button" class="inc" aria-label="Увеличить" ${r>=t?"disabled":""}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${g.plus}</svg>
        </button>
      </div>
    `;const s=this.root.querySelector("input"),o=this.root.querySelector(".dec"),v=this.root.querySelector(".inc"),u=f=>{const b=Math.min(t,Math.max(i,Number(f.toFixed(4))));this.setAttribute("value",String(b)),s.value=String(b),o.disabled=b<=i,v.disabled=b>=t,this.emit("dv-change",{value:b})};o.addEventListener("click",()=>u(this.value-e)),v.addEventListener("click",()=>u(this.value+e)),s.addEventListener("change",()=>{const f=Number(s.value);u(Number.isFinite(f)?f:this.value)})}}d(R,"observedAttributes",["value","min","max","step","disabled","size"]),m("dv-number-input",R);class K extends h{constructor(){super(...arguments);d(this,"_syncing",!1)}static get componentStyles(){return`
      :host { display: block; width: 100%; }
      .wrap {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        background: var(--dv-surface);
        border-radius: var(--dv-radius-sm);
        transition: opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .wrap:hover:not(.disabled):not(.focused) {
        background: var(--dv-surface-hover);
      }
      .wrap.focused {
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-focus-ring);
      }
      .wrap.disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }

      .size-sm { height: 32px; padding-inline: 10px; gap: 8px; font-size: var(--dv-text-sm); }
      .size-md { height: 38px; padding-inline: 12px; gap: 10px; font-size: var(--dv-text-body); }
      .size-lg { height: 44px; padding-inline: 14px; gap: 10px; font-size: var(--dv-text-body); }

      .lead-icon {
        display: inline-flex;
        color: var(--dv-text-muted);
        flex-shrink: 0;
      }

      input {
        flex: 1;
        min-width: 0;
        border: none;
        background: transparent;
        outline: none;
        font-family: var(--dv-font-sans);
        font-size: inherit;
        color: var(--dv-text-primary);
      }
      input::placeholder { color: var(--dv-text-muted); }
      input:disabled { cursor: not-allowed; }
      input::-webkit-search-cancel-button { -webkit-appearance: none; appearance: none; }

      .clear-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 22px;
        height: 22px;
        border: none;
        border-radius: var(--dv-radius-xs);
        background: transparent;
        color: var(--dv-text-muted);
        cursor: pointer;
        opacity: 0;
        transform: scale(0.8);
        pointer-events: none;
        transition:
          opacity var(--dv-duration-fast) var(--dv-ease),
          transform var(--dv-duration-fast) cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .clear-btn.visible {
        opacity: 1;
        transform: scale(1);
        pointer-events: auto;
      }
      .clear-btn:hover {
        background: var(--dv-surface-hover);
        color: var(--dv-text-primary);
      }

      .kbd {
        display: inline-flex;
        align-items: center;
        height: 20px;
        padding: 0 6px;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-surface-elevated);
        color: var(--dv-text-muted);
        font-family: var(--dv-font-mono);
        font-size: 11px;
        flex-shrink: 0;
        transition: opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .wrap.focused .kbd,
      .wrap.has-value .kbd {
        opacity: 0;
        pointer-events: none;
        position: absolute;
        right: 10px;
      }

      .spinner {
        width: 14px;
        height: 14px;
        border: 2px solid var(--dv-surface-active);
        border-top-color: var(--dv-text-primary);
        border-radius: 50%;
        animation: dv-spin 0.65s linear infinite;
        flex-shrink: 0;
      }
      @keyframes dv-spin {
        to { transform: rotate(360deg); }
      }
    `}get value(){var t;return((t=this.root.querySelector("input"))==null?void 0:t.value)??this.attr("value")}set value(t){this.setAttribute("value",t);const e=this.root.querySelector("input");e&&e.value!==t&&(e.value=t,this.syncState(t))}attributeChangedCallback(t,e,r){if(t==="value"){if(this._syncing)return;const a=this.root.querySelector("input");if(a){const n=r??"";a.value!==n&&(a.value=n),this.syncState(n);return}}super.attributeChangedCallback(t,e,r)}syncState(t){var r,a;const e=t.length>0;(r=this.root.querySelector(".wrap"))==null||r.classList.toggle("has-value",e),(a=this.root.querySelector(".clear-btn"))==null||a.classList.toggle("visible",e)}render(){const t=this.attr("value",""),e=this.attr("placeholder","Поиск..."),r=this.attr("size","md"),a=this.boolAttr("disabled"),n=this.attr("shortcut",""),s=this.boolAttr("loading"),o=t.length>0;this.root.innerHTML=`
      <div class="wrap size-${r} ${a?"disabled":""} ${o?"has-value":""}">
        <span class="lead-icon" aria-hidden="true">
          ${s?'<span class="spinner"></span>':`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${g.search}</svg>`}
        </span>
        <input
          type="text"
          role="searchbox"
          value="${c(t)}"
          placeholder="${c(e)}"
          ${a?"disabled":""}
        />
        <button type="button" class="clear-btn ${o?"visible":""}" aria-label="Очистить поиск" tabindex="-1">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${g.x}</svg>
        </button>
        ${n?`<span class="kbd">${c(n)}</span>`:""}
      </div>
    `;const v=this.root.querySelector(".wrap"),u=this.root.querySelector("input"),f=this.root.querySelector(".clear-btn");u.addEventListener("focus",()=>v.classList.add("focused")),u.addEventListener("blur",()=>v.classList.remove("focused")),u.addEventListener("input",()=>{this._syncing=!0,this.setAttribute("value",u.value),this._syncing=!1,this.syncState(u.value),this.emit("dv-input",{value:u.value})}),u.addEventListener("change",()=>{this.emit("dv-change",{value:u.value})}),u.addEventListener("keydown",b=>{b.key==="Enter"?this.emit("dv-submit",{value:u.value}):b.key==="Escape"&&u.value&&(b.stopPropagation(),this.clear())}),f.addEventListener("click",()=>{this.clear(),u.focus()})}clear(){const t=this.root.querySelector("input");this._syncing=!0,this.setAttribute("value",""),this._syncing=!1,t&&(t.value=""),this.syncState(""),this.emit("dv-input",{value:""}),this.emit("dv-clear")}}d(K,"observedAttributes",["value","placeholder","size","disabled","shortcut","loading"]),m("dv-search",K);class U extends h{constructor(){super(...arguments);d(this,"_files",[])}static get componentStyles(){return`
      :host { display: block; width: 100%; }
      .wrap { display: flex; flex-direction: column; gap: var(--dv-space-3); }
      .dropzone {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--dv-space-2);
        padding: var(--dv-space-6) var(--dv-space-4);
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface);
        text-align: center;
        cursor: pointer;
        transition:
          transform var(--dv-duration-fast) var(--dv-ease),
          opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .dropzone:hover:not(.disabled) {
        background: var(--dv-surface-hover);
      }
      .dropzone.dragover:not(.disabled) {
        background: var(--dv-surface-active);
        transform: scale(0.992);
      }
      .dropzone.disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }
      .dropzone:focus-visible {
        outline: none;
        box-shadow: var(--dv-focus-ring);
      }
      .icon {
        color: var(--dv-text-muted);
        display: inline-flex;
      }
      .title {
        font-size: var(--dv-text-sm);
        font-weight: 500;
        color: var(--dv-text-primary);
      }
      .hint {
        font-size: var(--dv-text-xs);
        color: var(--dv-text-muted);
      }
      input[type='file'] {
        display: none;
      }
      .list {
        display: flex;
        flex-direction: column;
        gap: var(--dv-space-2);
      }
      .file-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--dv-space-3);
        padding: var(--dv-space-2) var(--dv-space-3);
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        animation: dv-file-in var(--dv-duration-base) var(--dv-ease);
      }
      .file-meta {
        display: flex;
        align-items: baseline;
        gap: var(--dv-space-2);
        min-width: 0;
      }
      .file-name {
        font-size: var(--dv-text-sm);
        color: var(--dv-text-primary);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .file-size {
        font-size: var(--dv-text-xs);
        font-variant-numeric: tabular-nums;
        color: var(--dv-text-muted);
        flex-shrink: 0;
      }
      .remove-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border: none;
        border-radius: var(--dv-radius-xs);
        background: transparent;
        color: var(--dv-text-muted);
        cursor: pointer;
        flex-shrink: 0;
      }
      .remove-btn:hover {
        background: var(--dv-surface-hover);
        color: var(--dv-text-primary);
      }
      @keyframes dv-file-in {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}get files(){return[...this._files]}formatSize(t){return t<1024?`${t} B`:t<1048576?`${(t/1024).toFixed(1)} KB`:`${(t/1048576).toFixed(1)} MB`}addFiles(t){if(!t||t.length===0)return;const e=Array.from(t);this._files=this.boolAttr("multiple")?[...this._files,...e]:[e[0]],this.renderFileList(),this.emit("dv-change",{files:this.files})}renderFileList(){const t=this.root.querySelector(".list");t&&(t.innerHTML=this._files.map((e,r)=>`
      <div class="file-item">
        <div class="file-meta">
          <span class="file-name">${c(e.name)}</span>
          <span class="file-size">${this.formatSize(e.size)}</span>
        </div>
        <button type="button" class="remove-btn" data-idx="${r}" aria-label="Удалить файл">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${g.x}</svg>
        </button>
      </div>
    `).join(""),t.querySelectorAll(".remove-btn").forEach(e=>{e.addEventListener("click",()=>{const r=Number(e.dataset.idx);this._files.splice(r,1),this.renderFileList(),this.emit("dv-change",{files:this.files})})}))}render(){const t=this.attr("label","Перетащите файлы сюда или выберите на устройстве"),e=this.attr("hint",""),r=this.attr("accept",""),a=this.boolAttr("multiple"),n=this.boolAttr("disabled");if(this.root.innerHTML=`
      <div class="wrap">
        <div class="dropzone ${n?"disabled":""}" tabindex="${n?-1:0}" role="button" aria-label="${c(t)}">
          <span class="icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${g.plus}</svg>
          </span>
          <span class="title">${c(t)}</span>
          ${e?`<span class="hint">${c(e)}</span>`:""}
          <input type="file" ${r?`accept="${c(r)}"`:""} ${a?"multiple":""} ${n?"disabled":""} />
        </div>
        <div class="list"></div>
      </div>
    `,this.renderFileList(),n)return;const s=this.root.querySelector(".dropzone"),o=this.root.querySelector('input[type="file"]');s.addEventListener("click",()=>o.click()),s.addEventListener("keydown",v=>{(v.key==="Enter"||v.key===" ")&&(v.preventDefault(),o.click())}),o.addEventListener("change",()=>{this.addFiles(o.files),o.value=""}),s.addEventListener("dragover",v=>{v.preventDefault(),s.classList.add("dragover")}),s.addEventListener("dragleave",()=>{s.classList.remove("dragover")}),s.addEventListener("drop",v=>{var u;v.preventDefault(),s.classList.remove("dragover"),this.addFiles(((u=v.dataTransfer)==null?void 0:u.files)??null)})}}d(U,"observedAttributes",["label","hint","accept","multiple","disabled"]),m("dv-file-picker",U);const Ee=["#18181b","#52525b","#dc2626","#ea580c","#ca8a04","#16a34a","#0d9488","#2563eb","#4f46e5","#9333ea","#db2777","#f4f4f6"];class V extends h{constructor(){super(...arguments);d(this,"_open",!1);d(this,"_onDocClick",t=>{this._open&&!t.composedPath().includes(this)&&this.setOpen(!1)});d(this,"_onKeyDown",t=>{var e;t.key==="Escape"&&this._open&&(this.setOpen(!1),(e=this.root.querySelector(".trigger"))==null||e.focus())});d(this,"_syncing",!1)}static get componentStyles(){return`
      :host { display: inline-block; position: relative; }
      .trigger {
        display: inline-flex;
        align-items: center;
        gap: var(--dv-space-2);
        height: 38px;
        padding: 0 12px;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        font-family: var(--dv-font-mono);
        font-size: var(--dv-text-sm);
        cursor: pointer;
        transition: opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .trigger:hover:not(:disabled) { background: var(--dv-surface-hover); }
      .trigger:focus-visible,
      .trigger.open {
        outline: none;
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-focus-ring);
      }
      .trigger:disabled { opacity: 0.45; cursor: not-allowed; }
      .preview-dot {
        width: 16px;
        height: 16px;
        border-radius: var(--dv-radius-xs);
        flex-shrink: 0;
      }
      .popover {
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        width: 224px;
        padding: var(--dv-space-3);
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-shadow-lg);
        z-index: var(--dv-z-dropdown);
        display: none;
        flex-direction: column;
        gap: var(--dv-space-3);
      }
      .popover.open {
        display: flex;
        animation: dv-cp-in var(--dv-duration-fast) var(--dv-ease);
      }
      @keyframes dv-cp-in {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .swatches {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 6px;
      }
      .swatch {
        width: 26px;
        height: 26px;
        border: none;
        border-radius: var(--dv-radius-xs);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: transform var(--dv-duration-fast) cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .swatch:hover { transform: scale(1.12); }
      .swatch.active { transform: scale(1.08); box-shadow: var(--dv-focus-ring); }
      .custom-row {
        display: flex;
        align-items: center;
        gap: var(--dv-space-2);
      }
      input[type='color'] {
        width: 34px;
        height: 32px;
        padding: 0;
        border: none;
        border-radius: var(--dv-radius-xs);
        background: transparent;
        cursor: pointer;
      }
      .hex-input {
        flex: 1;
        min-width: 0;
        height: 32px;
        padding: 0 8px;
        border: none;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        font-family: var(--dv-font-mono);
        font-size: var(--dv-text-sm);
        outline: none;
      }
      .hex-input:focus { box-shadow: var(--dv-focus-ring); }
    `}onMount(){document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onKeyDown)}onUnmount(){document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onKeyDown)}get value(){return this.attr("value","#18181b")}set value(t){this.setAttribute("value",t)}attributeChangedCallback(t,e,r){if(t==="value"&&this.root.querySelector(".trigger")){if(this._syncing)return;this.syncVisual(r??"#18181b");return}super.attributeChangedCallback(t,e,r)}syncVisual(t){const e=this.root.querySelector(".preview-dot"),r=this.root.querySelector(".hex-label"),a=this.root.querySelector(".hex-input"),n=this.root.querySelector('input[type="color"]');e&&(e.style.background=t),r&&(r.textContent=t),a&&a.value!==t&&(a.value=t),n&&/^#[0-9a-fA-F]{6}$/.test(t)&&(n.value=t),this.root.querySelectorAll(".swatch").forEach(s=>{var o;s.classList.toggle("active",((o=s.dataset.color)==null?void 0:o.toLowerCase())===t.toLowerCase())})}setOpen(t){var e,r;this._open=t,(e=this.root.querySelector(".trigger"))==null||e.classList.toggle("open",t),(r=this.root.querySelector(".popover"))==null||r.classList.toggle("open",t)}getSwatches(){const t=this.attr("swatches");if(t)try{const e=JSON.parse(t);if(Array.isArray(e))return e.map(String)}catch{}return Ee}applyColor(t,e){this._syncing=!0,this.setAttribute("value",t),this._syncing=!1,this.syncVisual(t),this.emit("dv-input",{value:t}),e&&this.emit("dv-change",{value:t})}render(){var s;const t=this.attr("value","#18181b"),e=this.boolAttr("disabled"),r=this.getSwatches();this.root.innerHTML=`
      <button type="button" class="trigger ${this._open?"open":""}" ${e?"disabled":""}>
        <span class="preview-dot" style="background:${c(t)}"></span>
        <span class="hex-label">${c(t)}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${g["chevron-down"]}</svg>
      </button>
      <div class="popover ${this._open?"open":""}">
        <div class="swatches">
          ${r.map(o=>`<button type="button" class="swatch ${o.toLowerCase()===t.toLowerCase()?"active":""}" data-color="${c(o)}" style="background:${c(o)}" aria-label="${c(o)}"></button>`).join("")}
        </div>
        <div class="custom-row">
          <input type="color" value="${/^#[0-9a-fA-F]{6}$/.test(t)?t:"#18181b"}" aria-label="Выбор цвета" />
          <input type="text" class="hex-input" value="${c(t)}" maxlength="7" aria-label="Hex код" />
        </div>
      </div>
    `,(s=this.root.querySelector(".trigger"))==null||s.addEventListener("click",()=>{e||this.setOpen(!this._open)}),this.root.querySelectorAll(".swatch").forEach(o=>{o.addEventListener("click",()=>{const v=o.dataset.color??"#18181b";this.applyColor(v,!0)})});const a=this.root.querySelector('input[type="color"]');a.addEventListener("input",()=>this.applyColor(a.value,!1)),a.addEventListener("change",()=>this.applyColor(a.value,!0));const n=this.root.querySelector(".hex-input");n.addEventListener("change",()=>{const o=n.value.trim();/^#[0-9a-fA-F]{6}$/.test(o)&&this.applyColor(o,!0)})}}d(V,"observedAttributes",["value","disabled","swatches"]),m("dv-color-picker",V);class W extends h{constructor(){super(...arguments);d(this,"_open",!1);d(this,"_query","");d(this,"_onDocClick",t=>{this._open&&!t.composedPath().includes(this)&&this.setOpen(!1)});d(this,"_onKeyDown",t=>{var e;t.key==="Escape"&&this._open&&(this.setOpen(!1),(e=this.root.querySelector(".search-input"))==null||e.blur())})}static get componentStyles(){return`
      :host { display: block; width: 100%; position: relative; }
      .control {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        width: 100%;
        min-height: 38px;
        padding: 5px 10px;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        cursor: text;
        transition: opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .control:hover:not(.disabled):not(.open) { background: var(--dv-surface-hover); }
      .control.open {
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-focus-ring);
      }
      .control.disabled { opacity: 0.45; cursor: not-allowed; }
      .size-sm { min-height: 32px; padding: 3px 8px; }
      .size-lg { min-height: 44px; padding: 7px 12px; }

      .chips {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        align-items: center;
      }
      .chip {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        height: 24px;
        padding: 0 8px;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-surface-elevated);
        color: var(--dv-text-primary);
        font-size: var(--dv-text-xs);
        font-weight: 500;
      }
      .chip-rm {
        display: inline-flex;
        border: none;
        background: transparent;
        color: var(--dv-text-muted);
        cursor: pointer;
        padding: 1px;
      }
      .chip-rm:hover { color: var(--dv-text-primary); }

      .search-input {
        flex: 1;
        min-width: 80px;
        border: none;
        background: transparent;
        outline: none;
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-body);
        color: var(--dv-text-primary);
      }
      .search-input::placeholder { color: var(--dv-text-muted); }

      .chevron {
        color: var(--dv-text-muted);
        display: inline-flex;
        margin-left: auto;
        transition: transform var(--dv-duration-fast) var(--dv-ease);
      }
      .control.open .chevron { transform: rotate(180deg); }

      .menu {
        position: absolute;
        top: calc(100% + 6px);
        left: 0;
        right: 0;
        z-index: var(--dv-z-dropdown);
        background: var(--dv-surface-elevated);
        border-radius: var(--dv-radius-md);
        box-shadow: var(--dv-shadow-md);
        padding: 4px;
        max-height: 220px;
        overflow-y: auto;
        display: none;
        flex-direction: column;
        gap: 2px;
      }
      .menu.open {
        display: flex;
        animation: dv-cb-in var(--dv-duration-fast) var(--dv-ease);
      }
      @keyframes dv-cb-in {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 8px 10px;
        border: none;
        border-radius: var(--dv-radius-xs);
        background: transparent;
        color: var(--dv-text-primary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        cursor: pointer;
        text-align: left;
      }
      .option:hover { background: var(--dv-surface-hover); }
      .option[aria-selected='true'] { background: var(--dv-surface); font-weight: 600; }
      .empty {
        padding: 12px;
        text-align: center;
        font-size: var(--dv-text-sm);
        color: var(--dv-text-muted);
      }
    `}onMount(){document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onKeyDown)}onUnmount(){document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onKeyDown)}getOptions(){try{const t=JSON.parse(this.attr("options","[]"));return Array.isArray(t)?t.map(e=>typeof e=="string"?{label:e,value:e}:{label:String(e.label??e.value),value:String(e.value)}):[]}catch{return[]}}getSelectedValues(){const t=this.attr("value","");return t?this.boolAttr("multiple")?t.split(",").map(e=>e.trim()).filter(Boolean):[t]:[]}setOpen(t){var e,r;this._open=t,(e=this.root.querySelector(".control"))==null||e.classList.toggle("open",t),(r=this.root.querySelector(".menu"))==null||r.classList.toggle("open",t)}renderMenu(){const t=this.root.querySelector(".menu");if(!t)return;const e=this.getOptions(),r=new Set(this.getSelectedValues()),a=this._query.trim().toLowerCase(),n=a?e.filter(s=>s.label.toLowerCase().includes(a)):e;if(n.length===0){t.innerHTML='<div class="empty">Ничего не найдено</div>';return}t.innerHTML=n.map(s=>`
      <button type="button" class="option" data-val="${c(s.value)}" aria-selected="${r.has(s.value)}">
        <span>${c(s.label)}</span>
        ${r.has(s.value)?`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">${g.check}</svg>`:""}
      </button>
    `).join(""),t.querySelectorAll(".option").forEach(s=>{s.addEventListener("click",o=>{o.stopPropagation();const v=s.dataset.val??"";if(this.boolAttr("multiple")){const f=new Set(this.getSelectedValues());f.has(v)?f.delete(v):f.add(v);const b=Array.from(f).join(",");this.setAttribute("value",b),this._query="",this.emit("dv-change",{value:Array.from(f)})}else this._open=!1,this._query="",this.setAttribute("value",v),this.emit("dv-change",{value:v})})})}render(){const t=this.boolAttr("multiple"),e=this.boolAttr("disabled"),r=this.attr("size","md"),a=this.attr("placeholder","Выберите или найдите..."),n=this.getOptions(),o=this.getSelectedValues().map(b=>n.find(y=>y.value===b)).filter(b=>!!b),v=!t&&o[0]?o[0].label:"";if(this.root.innerHTML=`
      <div class="control size-${r} ${e?"disabled":""} ${this._open?"open":""}">
        ${t&&o.length?`<div class="chips">
                ${o.map(b=>`
                  <span class="chip">
                    <span>${c(b.label)}</span>
                    <button type="button" class="chip-rm" data-rm="${c(b.value)}" aria-label="Удалить">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">${g.x}</svg>
                    </button>
                  </span>
                `).join("")}
              </div>`:""}
        <input
          type="text"
          class="search-input"
          value="${c(this._query||v)}"
          placeholder="${c(t&&o.length?"":a)}"
          ${e?"disabled":""}
        />
        <span class="chevron" aria-hidden="true">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${g["chevron-down"]}</svg>
        </span>
      </div>
      <div class="menu ${this._open?"open":""}" role="listbox"></div>
    `,this.renderMenu(),e)return;const u=this.root.querySelector(".control"),f=this.root.querySelector(".search-input");u.addEventListener("click",b=>{b.target.closest(".chip-rm")||(this.setOpen(!0),f.focus())}),f.addEventListener("focus",()=>{!t&&v&&!this._query&&f.select(),this.setOpen(!0)}),f.addEventListener("input",()=>{this._query=f.value,this.setOpen(!0),this.renderMenu()}),this.root.querySelectorAll(".chip-rm").forEach(b=>{b.addEventListener("click",y=>{y.stopPropagation();const x=b.dataset.rm??"",w=this.getSelectedValues().filter(k=>k!==x);this.setAttribute("value",w.join(",")),this.emit("dv-change",{value:w})})})}}d(W,"observedAttributes",["value","options","placeholder","multiple","disabled","size"]),m("dv-combobox",W);const Ce=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],Me=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"];class J extends h{constructor(){super(...arguments);d(this,"_open",!1);d(this,"_viewYear",new Date().getFullYear());d(this,"_viewMonth",new Date().getMonth());d(this,"_onDocClick",t=>{this._open&&!t.composedPath().includes(this)&&this.setOpen(!1)});d(this,"_onKeyDown",t=>{t.key==="Escape"&&this._open&&this.setOpen(!1)})}static get componentStyles(){return`
      :host { display: inline-block; position: relative; width: 100%; max-width: 280px; }
      .trigger {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--dv-space-2);
        border: none;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        font-family: var(--dv-font-sans);
        font-variant-numeric: tabular-nums;
        cursor: pointer;
        outline: none;
        transition: opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .trigger:hover:not(:disabled) { background: var(--dv-surface-hover); }
      .trigger:focus-visible,
      .trigger.open {
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-focus-ring);
      }
      .trigger:disabled { opacity: 0.45; cursor: not-allowed; }
      .size-sm { height: 32px; padding: 0 10px; font-size: var(--dv-text-sm); }
      .size-md { height: 38px; padding: 0 12px; font-size: var(--dv-text-body); }
      .size-lg { height: 44px; padding: 0 14px; font-size: var(--dv-text-body); }
      .placeholder { color: var(--dv-text-muted); }

      .popover {
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        width: 280px;
        padding: var(--dv-space-3);
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-shadow-lg);
        z-index: var(--dv-z-dropdown);
        display: none;
        flex-direction: column;
        gap: var(--dv-space-3);
      }
      .popover.open {
        display: flex;
        animation: dv-cal-in var(--dv-duration-fast) var(--dv-ease);
      }
      @keyframes dv-cal-in {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .cal-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .month-label {
        font-size: var(--dv-text-sm);
        font-weight: 600;
        color: var(--dv-text-primary);
      }
      .nav-btn {
        width: 28px;
        height: 28px;
        border: none;
        border-radius: var(--dv-radius-xs);
        background: transparent;
        color: var(--dv-text-secondary);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .nav-btn:hover { background: var(--dv-surface-hover); color: var(--dv-text-primary); }

      .grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 2px;
        text-align: center;
      }
      .wd {
        font-size: 11px;
        color: var(--dv-text-muted);
        padding-bottom: 4px;
      }
      .day {
        height: 32px;
        border: none;
        border-radius: var(--dv-radius-xs);
        background: transparent;
        color: var(--dv-text-primary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-xs);
        font-variant-numeric: tabular-nums;
        cursor: pointer;
      }
      .day:hover { background: var(--dv-surface-hover); }
      .day.today { background: var(--dv-surface); font-weight: 600; }
      .day.selected {
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
        font-weight: 600;
      }
    `}onMount(){document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onKeyDown)}onUnmount(){document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onKeyDown)}setOpen(t){var e,r;this._open=t,(e=this.root.querySelector(".trigger"))==null||e.classList.toggle("open",t),(r=this.root.querySelector(".popover"))==null||r.classList.toggle("open",t)}formatIso(t,e,r){return`${t}-${String(e+1).padStart(2,"0")}-${String(r).padStart(2,"0")}`}renderCalendar(){var f,b;const t=this.root.querySelector(".popover");if(!t)return;const e=this.attr("value",""),r=new Date,a=this.formatIso(r.getFullYear(),r.getMonth(),r.getDate()),s=(new Date(this._viewYear,this._viewMonth,1).getDay()+6)%7,o=new Date(this._viewYear,this._viewMonth+1,0).getDate(),v=Array.from({length:s},()=>"<div></div>").join(""),u=Array.from({length:o},(y,x)=>{const w=x+1,k=this.formatIso(this._viewYear,this._viewMonth,w);return`<button type="button" class="day ${k===a?"today":""} ${k===e?"selected":""}" data-iso="${k}">${w}</button>`}).join("");t.innerHTML=`
      <div class="cal-head">
        <button type="button" class="nav-btn prev" aria-label="Предыдущий месяц">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${g["chevron-left"]}</svg>
        </button>
        <span class="month-label">${Ce[this._viewMonth]} ${this._viewYear}</span>
        <button type="button" class="nav-btn next" aria-label="Следующий месяц">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${g["chevron-right"]}</svg>
        </button>
      </div>
      <div class="grid">
        ${Me.map(y=>`<div class="wd">${y}</div>`).join("")}
        ${v}
        ${u}
      </div>
    `,(f=t.querySelector(".prev"))==null||f.addEventListener("click",y=>{y.stopPropagation(),this._viewMonth===0?(this._viewMonth=11,this._viewYear--):this._viewMonth--,this.renderCalendar()}),(b=t.querySelector(".next"))==null||b.addEventListener("click",y=>{y.stopPropagation(),this._viewMonth===11?(this._viewMonth=0,this._viewYear++):this._viewMonth++,this.renderCalendar()}),t.querySelectorAll(".day").forEach(y=>{y.addEventListener("click",()=>{const x=y.dataset.iso??"";this._open=!1,this.setAttribute("value",x),this.emit("dv-change",{value:x})})})}render(){var n;const t=this.attr("value",""),e=this.attr("placeholder","Выберите дату"),r=this.boolAttr("disabled"),a=this.attr("size","md");if(t&&/^\d{4}-\d{2}-\d{2}$/.test(t)){const[s,o]=t.split("-").map(Number);this._viewYear=s,this._viewMonth=o-1}this.root.innerHTML=`
      <button type="button" class="trigger size-${a} ${this._open?"open":""}" ${r?"disabled":""}>
        <span class="${t?"":"placeholder"}">${c(t||e)}</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${g["chevron-down"]}</svg>
      </button>
      <div class="popover ${this._open?"open":""}"></div>
    `,this.renderCalendar(),(n=this.root.querySelector(".trigger"))==null||n.addEventListener("click",()=>{r||this.setOpen(!this._open)})}}d(J,"observedAttributes",["value","placeholder","disabled","size"]),m("dv-date-picker",J);class G extends h{constructor(){super(...arguments);d(this,"_syncing",!1)}static get componentStyles(){return`
      :host { display: inline-flex; }
      .row {
        display: inline-flex;
        align-items: center;
        gap: var(--dv-space-2);
      }
      input {
        width: 42px;
        height: 46px;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        font-family: var(--dv-font-mono);
        font-size: 1.125rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        text-align: center;
        outline: none;
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) var(--dv-ease);
      }
      .size-sm input { width: 34px; height: 38px; font-size: 0.95rem; }
      .size-lg input { width: 50px; height: 54px; font-size: 1.25rem; }
      input:hover:not(:disabled):not(:focus) { background: var(--dv-surface-hover); }
      input:focus {
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-focus-ring);
        transform: translateY(-1px);
      }
      input:disabled { opacity: 0.45; cursor: not-allowed; }
    `}get value(){return Array.from(this.root.querySelectorAll("input")).map(t=>t.value).join("")}attributeChangedCallback(t,e,r){t==="value"&&this._syncing||super.attributeChangedCallback(t,e,r)}render(){const t=Math.min(8,Math.max(2,this.numAttr("length",6))),e=this.boolAttr("disabled"),r=this.attr("size","md"),a=this.attr("value","");this.root.innerHTML=`
      <div class="row size-${r}">
        ${Array.from({length:t},(o,v)=>`<input type="text" inputmode="numeric" maxlength="1" value="${(a[v]??"").replace(/"/g,"&quot;")}" aria-label="Цифра ${v+1}" ${e?"disabled":""} />`).join("")}
      </div>
    `;const n=Array.from(this.root.querySelectorAll("input")),s=()=>{const o=this.value;this._syncing=!0,this.setAttribute("value",o),this._syncing=!1,this.emit("dv-input",{value:o}),o.length===t&&this.emit("dv-complete",{value:o})};n.forEach((o,v)=>{o.addEventListener("input",()=>{const u=o.value.replace(/\D/g,"").slice(-1);o.value=u,u&&v<n.length-1&&n[v+1].focus(),s()}),o.addEventListener("keydown",u=>{u.key==="Backspace"&&!o.value&&v>0?(n[v-1].focus(),n[v-1].value="",s()):u.key==="ArrowLeft"&&v>0?n[v-1].focus():u.key==="ArrowRight"&&v<n.length-1&&n[v+1].focus()}),o.addEventListener("paste",u=>{var y;u.preventDefault();const f=(((y=u.clipboardData)==null?void 0:y.getData("text"))??"").replace(/\D/g,"");if(!f)return;for(let x=0;x<n.length;x++)n[x].value=f[x]??"";const b=Math.min(f.length,n.length-1);n[b].focus(),s()})})}}d(G,"observedAttributes",["length","value","disabled","size"]),m("dv-otp-input",G);class Z extends h{static get componentStyles(){return`
      :host { display: block; width: 100%; }
      .container {
        width: 100%;
        margin-inline: auto;
      }
      .size-sm { max-width: var(--dv-container-sm); }
      .size-md { max-width: var(--dv-container-md); }
      .size-lg { max-width: var(--dv-container-lg); }
      .size-xl { max-width: var(--dv-container-xl); }

      .pad-none { padding-inline: 0; }
      .pad-sm { padding-inline: var(--dv-space-3); }
      .pad-md { padding-inline: var(--dv-space-4); }
      .pad-lg { padding-inline: var(--dv-space-6); }
      @media (min-width: 768px) {
        .pad-md { padding-inline: var(--dv-space-6); }
        .pad-lg { padding-inline: var(--dv-space-8); }
      }
    `}render(){const i=this.attr("size","lg"),t=this.attr("padding","md");this.root.innerHTML=`<div class="container size-${i} pad-${t}"><slot></slot></div>`}}d(Z,"observedAttributes",["size","padding"]),m("dv-container",Z);class Q extends h{static get componentStyles(){return`
      :host { display: block; }
      .stack { display: flex; }
    `}render(){const i=this.attr("direction","vertical")==="horizontal"?"row":"column",t=this.attr("gap","4"),e=/^\d+$/.test(t)?`var(--dv-space-${t})`:t,r=this.attr("align",i==="row"?"center":"stretch"),a=this.attr("justify","flex-start"),n=this.boolAttr("wrap")?"wrap":"nowrap";this.root.innerHTML=`
      <div class="stack" style="flex-direction:${i};gap:${e};align-items:${r};justify-content:${a};flex-wrap:${n}">
        <slot></slot>
      </div>
    `}}d(Q,"observedAttributes",["direction","gap","align","justify","wrap"]),m("dv-stack",Q);class tt extends h{static get componentStyles(){return`
      :host { display: block; }
      .grid { display: grid; width: 100%; }
    `}render(){const i=this.attr("cols","auto-fit"),t=this.attr("min-width","260px"),e=this.attr("gap","4"),r=/^\d+$/.test(e)?`var(--dv-space-${e})`:e,a=i==="auto-fit"?`repeat(auto-fit, minmax(min(${t}, 100%), 1fr))`:`repeat(${i}, minmax(0, 1fr))`;this.root.innerHTML=`
      <div class="grid" style="grid-template-columns:${a};gap:${r}">
        <slot></slot>
      </div>
    `}}d(tt,"observedAttributes",["cols","min-width","gap"]),m("dv-grid",tt);class et extends h{static get componentStyles(){return`
      :host { display: block; }
      :host([variant='surface']),
      :host([variant='outline']) {
        --dv-surface: var(--dv-surface-elevated);
      }
      .card {
        display: flex;
        flex-direction: column;
        border-radius: var(--dv-radius-lg);
        border: none;
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        overflow: hidden;
        transition: transform var(--dv-duration-base) var(--dv-ease), opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .card.horizontal {
        flex-direction: row;
        align-items: stretch;
      }

      /* Surface card: soft tonal container; inner controls step up to elevated */
      .variant-surface {
        background: var(--dv-card-bg);
      }

      /* Elevated card: raised above page canvas with soft shadow; inner controls use recessed surface */
      .variant-elevated {
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-shadow-md);
      }

      /* Recessed / subtle card */
      .variant-outline {
        background: var(--dv-surface-hover);
        --dv-surface: var(--dv-surface-elevated);
      }

      .interactive { cursor: pointer; }
      .interactive:hover {
        transform: translateY(-2px);
      }

      .media:empty, .header:empty, .footer:empty { display: none; }
      .header { padding-bottom: var(--dv-space-3); margin-bottom: var(--dv-space-3); }
      .footer { padding-top: var(--dv-space-3); margin-top: var(--dv-space-3); }

      .pad-none .content { padding: 0; }
      .pad-sm .content { padding: var(--dv-space-3); }
      .pad-md .content { padding: var(--dv-space-5); }
      .pad-lg .content { padding: var(--dv-space-6); }
      .content { flex: 1; min-width: 0; display: flex; flex-direction: column; }
    `}render(){const i=this.attr("padding","md"),t=this.attr("variant","elevated"),e=this.boolAttr("interactive"),r=this.boolAttr("horizontal");this.root.innerHTML=`
      <div class="card variant-${t} pad-${i} ${e?"interactive":""} ${r?"horizontal":""}">
        <div class="media"><slot name="media"></slot></div>
        <div class="content">
          <div class="header"><slot name="header"></slot></div>
          <slot></slot>
          <div class="footer"><slot name="footer"></slot></div>
        </div>
      </div>
    `}}d(et,"observedAttributes",["padding","variant","interactive","horizontal"]),m("dv-card",et);class rt extends h{constructor(){super(...arguments);d(this,"_mobileOpen",!1)}static get componentStyles(){return`
      :host { display: block; min-height: 100dvh; background: var(--dv-bg); color: var(--dv-text-primary); }
      .shell { display: flex; flex-direction: column; min-height: 100dvh; }
      .header {
        position: sticky;
        top: 0;
        z-index: var(--dv-z-sticky);
        background: var(--dv-bg);
        min-height: 56px;
        display: flex;
        align-items: center;
        padding-inline: var(--dv-space-4);
        gap: var(--dv-space-3);
      }
      .menu-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        cursor: pointer;
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) var(--dv-ease);
      }
      .menu-btn:active { transform: scale(0.96); }
      .header-content { flex: 1; display: flex; align-items: center; justify-content: space-between; gap: var(--dv-space-4); }
      .body { display: flex; flex: 1; position: relative; }
      .sidebar {
        position: fixed;
        top: 56px;
        left: 0;
        bottom: 0;
        width: var(--_sidebar-w, 240px);
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-shadow-lg);
        padding: var(--dv-space-5) var(--dv-space-4);
        overflow-y: auto;
        z-index: var(--dv-z-overlay);
        transform: translateX(-100%);
        transition: transform var(--dv-duration-base) var(--dv-ease);
      }
      .sidebar.open { transform: translateX(0); }
      .backdrop {
        display: none;
        position: fixed;
        inset: 56px 0 0 0;
        background: rgba(0, 0, 0, 0.35);
        z-index: calc(var(--dv-z-overlay) - 1);
      }
      .backdrop.open { display: block; }
      .main {
        flex: 1;
        min-width: 0;
        padding: var(--dv-space-6) var(--dv-space-4);
      }
      @media (min-width: 960px) {
        .header { padding-inline: var(--dv-space-6); }
        .menu-btn { display: none; }
        .backdrop { display: none !important; }
        .sidebar {
          position: sticky;
          top: 56px;
          height: calc(100dvh - 56px);
          background: transparent;
          box-shadow: none;
          padding: var(--dv-space-6) var(--dv-space-4) var(--dv-space-6) var(--dv-space-6);
          transform: translateX(0);
          flex-shrink: 0;
        }
        .main { padding: var(--dv-space-8) var(--dv-space-8) var(--dv-space-12); }
      }
    `}closeSidebar(){this._mobileOpen=!1,this.syncOpen()}syncOpen(){var t,e;(t=this.root.querySelector(".sidebar"))==null||t.classList.toggle("open",this._mobileOpen),(e=this.root.querySelector(".backdrop"))==null||e.classList.toggle("open",this._mobileOpen)}render(){var e,r;const t=this.attr("sidebar-width","250px");this.root.innerHTML=`
      <div class="shell" style="--_sidebar-w:${t}">
        <header class="header">
          <button type="button" class="menu-btn" aria-label="Toggle navigation">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${g.menu}</svg>
          </button>
          <div class="header-content"><slot name="header"></slot></div>
        </header>
        <div class="body">
          <div class="backdrop"></div>
          <aside class="sidebar"><slot name="sidebar"></slot></aside>
          <main class="main"><slot></slot></main>
        </div>
      </div>
    `,(e=this.root.querySelector(".menu-btn"))==null||e.addEventListener("click",()=>{this._mobileOpen=!this._mobileOpen,this.syncOpen()}),(r=this.root.querySelector(".backdrop"))==null||r.addEventListener("click",()=>{this.closeSidebar()})}}d(rt,"observedAttributes",["sidebar-width"]),m("dv-app-shell",rt);class at extends h{static get componentStyles(){return`
      :host { display: block; width: 100%; }
      .frame {
        position: relative;
        width: 100%;
        overflow: hidden;
        background: var(--dv-surface);
      }
      .rad-none { border-radius: 0; }
      .rad-sm { border-radius: var(--dv-radius-sm); }
      .rad-md { border-radius: var(--dv-radius-md); }
      .rad-lg { border-radius: var(--dv-radius-lg); }
      ::slotted(*) {
        width: 100%;
        height: 100%;
        display: block;
      }
    `}render(){const i=this.attr("ratio","16/9"),t=this.attr("radius","md"),e=this.attr("fit","cover");this.root.innerHTML=`
      <div class="frame rad-${t}" style="aspect-ratio:${i};--_fit:${e}">
        <slot></slot>
      </div>
    `}}d(at,"observedAttributes",["ratio","radius","fit"]),m("dv-aspect-ratio",at);class it extends h{static get componentStyles(){return`
      :host { display: block; width: 100%; }
      .wrap { position: relative; display: flex; flex-direction: column; gap: var(--dv-space-3); }
      .viewport {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        gap: var(--_gap, 16px);
        padding-bottom: 4px;
      }
      ::slotted(*) {
        flex-shrink: 0;
        scroll-snap-align: start;
      }
      .controls {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: var(--dv-space-2);
      }
      .nav-btn {
        width: 32px;
        height: 32px;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: transform var(--dv-duration-fast) var(--dv-ease), opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .nav-btn:hover { background: var(--dv-surface-hover); }
      .nav-btn:active { transform: scale(0.94); }
      .nav-btn:focus-visible { outline: none; box-shadow: var(--dv-focus-ring); }
    `}render(){var a,n;const i=this.attr("gap","4"),t=/^\d+$/.test(i)?`var(--dv-space-${i})`:i,e=this.numAttr("step",280);this.root.innerHTML=`
      <div class="wrap" style="--_gap:${t}">
        <div class="viewport"><slot></slot></div>
        <div class="controls">
          <button type="button" class="nav-btn prev" aria-label="Назад">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${g["chevron-left"]}</svg>
          </button>
          <button type="button" class="nav-btn next" aria-label="Вперёд">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${g["chevron-right"]}</svg>
          </button>
        </div>
      </div>
    `;const r=this.root.querySelector(".viewport");(a=this.root.querySelector(".prev"))==null||a.addEventListener("click",()=>{r.scrollBy({left:-e,behavior:"smooth"})}),(n=this.root.querySelector(".next"))==null||n.addEventListener("click",()=>{r.scrollBy({left:e,behavior:"smooth"})})}}d(it,"observedAttributes",["gap","step"]),m("dv-carousel",it);class nt extends h{constructor(){super(...arguments);d(this,"_dragging",!1);d(this,"_syncing",!1)}static get componentStyles(){return`
      :host { display: block; width: 100%; height: 100%; }
      .split {
        display: flex;
        width: 100%;
        height: 100%;
        min-height: 180px;
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface);
        overflow: hidden;
      }
      .split.dragging {
        user-select: none;
        cursor: col-resize;
      }
      .pane {
        min-width: 0;
        overflow: auto;
        padding: var(--dv-space-4);
      }
      .left { flex: 0 0 var(--_split, 50%); }
      .right { flex: 1; }
      .divider {
        width: 12px;
        flex-shrink: 0;
        cursor: col-resize;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        touch-action: none;
        outline: none;
      }
      .grip {
        width: 3px;
        height: 32px;
        border-radius: 999px;
        background: var(--dv-surface-active);
        transition: transform var(--dv-duration-fast) var(--dv-ease), opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .divider:hover .grip,
      .divider.dragging .grip,
      .divider:focus-visible .grip {
        transform: scaleY(1.25);
        background: var(--dv-text-muted);
      }
    `}attributeChangedCallback(t,e,r){if(t==="value"&&this.root.querySelector(".split")){if(this._syncing)return;const a=this.numAttr("min",20),n=this.numAttr("max",80),s=Math.round(Math.min(n,Math.max(a,Number(r??50))));this.syncVisual(s);return}super.attributeChangedCallback(t,e,r)}syncVisual(t){const e=this.root.querySelector(".split"),r=this.root.querySelector(".divider");e&&e.style.setProperty("--_split",`${t}%`),r&&r.setAttribute("aria-valuenow",String(t))}render(){const t=this.numAttr("min",20),e=this.numAttr("max",80),r=Math.min(e,Math.max(t,this.numAttr("value",50)));this.root.innerHTML=`
      <div class="split" style="--_split:${r}%">
        <div class="pane left"><slot name="left"></slot></div>
        <div class="divider" role="separator" aria-orientation="vertical" aria-valuemin="${t}" aria-valuemax="${e}" aria-valuenow="${r}" tabindex="0">
          <div class="grip"></div>
        </div>
        <div class="pane right"><slot name="right"></slot></div>
      </div>
    `;const a=this.root.querySelector(".split"),n=this.root.querySelector(".divider"),s=v=>{const u=a.getBoundingClientRect();if(u.width<=0)return;const f=(v-u.left)/u.width*100,b=Math.round(Math.min(e,Math.max(t,f)));this.syncVisual(b),this._syncing=!0,this.setAttribute("value",String(b)),this._syncing=!1,this.emit("dv-resize",{value:b})};n.addEventListener("pointerdown",v=>{v.preventDefault(),this._dragging=!0,a.classList.add("dragging"),n.classList.add("dragging"),n.setPointerCapture(v.pointerId),s(v.clientX)}),n.addEventListener("pointermove",v=>{this._dragging&&s(v.clientX)});const o=v=>{this._dragging&&(this._dragging=!1,a.classList.remove("dragging"),n.classList.remove("dragging"),n.hasPointerCapture(v.pointerId)&&n.releasePointerCapture(v.pointerId))};n.addEventListener("pointerup",o),n.addEventListener("pointercancel",o),n.addEventListener("keydown",v=>{const u=this.numAttr("value",50);let f=u;if(v.key==="ArrowRight")f=Math.min(e,u+5);else if(v.key==="ArrowLeft")f=Math.max(t,u-5);else return;v.preventDefault(),this.syncVisual(f),this._syncing=!0,this.setAttribute("value",String(f)),this._syncing=!1,this.emit("dv-resize",{value:f})})}}d(nt,"observedAttributes",["value","min","max"]),m("dv-split-pane",nt);class st extends h{static get componentStyles(){return`
      :host { display: block; }
      .tablist {
        position: relative;
        display: inline-flex;
        flex-wrap: wrap;
        gap: var(--dv-space-1);
        padding: 3px;
        background: var(--dv-surface);
        border: none;
        border-radius: var(--dv-radius-sm);
      }
      .tablist.underline {
        display: flex;
        background: transparent;
        border: none;
        border-radius: 0;
        padding: 0;
        gap: var(--dv-space-4);
      }
      button {
        position: relative;
        background: transparent;
        border: none;
        padding: 6px 12px;
        border-radius: var(--dv-radius-xs);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        font-weight: 500;
        color: var(--dv-text-secondary);
        cursor: pointer;
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) var(--dv-ease);
      }
      button:hover:not(:disabled) {
        color: var(--dv-text-primary);
      }
      button:active:not(:disabled) {
        transform: scale(0.97);
      }
      button:focus-visible {
        outline: none;
        box-shadow: var(--dv-focus-ring);
      }
      button[aria-selected='true'] {
        background: var(--dv-surface-elevated);
        color: var(--dv-text-primary);
        box-shadow: var(--dv-shadow-sm);
      }
      .underline button {
        border-radius: 0;
        padding: 8px 2px;
        margin-bottom: -1px;
        border-bottom: 2px solid transparent;
      }
      .underline button[aria-selected='true'] {
        background: transparent;
        box-shadow: none;
        border-bottom-color: var(--dv-accent);
        color: var(--dv-text-primary);
      }
      button:disabled { opacity: 0.45; cursor: not-allowed; }
    `}getItems(){const i=this.attr("items");if(!i)return[];try{const t=JSON.parse(i);return Array.isArray(t)?t:[]}catch{return[]}}attributeChangedCallback(i,t,e){if(i==="value"&&this.root.querySelector(".tablist")){const r=e??"";this.root.querySelectorAll('button[role="tab"]').forEach(a=>{a.setAttribute("aria-selected",String(a.getAttribute("data-id")===r))});return}super.attributeChangedCallback(i,t,e)}render(){var r;const i=this.getItems(),t=this.attr("value",((r=i[0])==null?void 0:r.id)??""),e=this.attr("variant","segmented");this.root.innerHTML=`
      <div class="tablist ${e==="underline"?"underline":""}" role="tablist">
        ${i.map(a=>`
          <button
            type="button"
            role="tab"
            data-id="${c(a.id)}"
            aria-selected="${a.id===t}"
            ${a.disabled?"disabled":""}
          >${c(a.label)}</button>
        `).join("")}
      </div>
    `,this.root.querySelectorAll('button[role="tab"]').forEach(a=>{a.addEventListener("click",()=>{if(a.disabled)return;const n=a.getAttribute("data-id")??"";this.setAttribute("value",n),this.emit("dv-change",{value:n})})})}}d(st,"observedAttributes",["value","items","variant"]),m("dv-tabs",st);class ot extends h{static get componentStyles(){return`
      :host { display: block; }
      nav ol {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--dv-space-2);
        font-size: var(--dv-text-sm);
        color: var(--dv-text-muted);
      }
      a {
        color: var(--dv-text-secondary);
        text-decoration: none;
      }
      a:hover { color: var(--dv-text-primary); }
      .current { color: var(--dv-text-primary); font-weight: 500; }
      .sep { display: inline-flex; color: var(--dv-text-muted); }
    `}render(){let i=[];try{const t=JSON.parse(this.attr("items","[]"));Array.isArray(t)&&(i=t)}catch{i=[]}this.root.innerHTML=`
      <nav aria-label="Breadcrumb">
        <ol>
          ${i.map((t,e)=>{const r=e===i.length-1,a=e>0?`<li class="sep" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${g["chevron-right"]}</svg></li>`:"",n=r||!t.href?`<span class="${r?"current":""}" ${r?'aria-current="page"':""}>${c(t.label)}</span>`:`<a href="${c(t.href)}">${c(t.label)}</a>`;return`${a}<li>${n}</li>`}).join("")}
        </ol>
      </nav>
    `}}d(ot,"observedAttributes",["items"]),m("dv-breadcrumbs",ot);class dt extends h{static get componentStyles(){return`
      :host { display: inline-flex; }
      nav {
        display: inline-flex;
        align-items: center;
        gap: var(--dv-space-1);
        font-variant-numeric: tabular-nums;
      }
      button {
        min-width: 34px;
        height: 34px;
        padding: 0 8px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        color: var(--dv-text-secondary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        cursor: pointer;
      }
      button:hover:not(:disabled) {
        background: var(--dv-surface-hover);
        color: var(--dv-text-primary);
      }
      button.active {
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
        font-weight: 600;
      }
      button:disabled { opacity: 0.45; cursor: not-allowed; }
      button:focus-visible { outline: none; box-shadow: var(--dv-focus-ring); }
    `}render(){const i=Math.max(1,this.numAttr("total",1)),t=Math.min(i,Math.max(1,this.numAttr("page",1))),e=[];for(let r=1;r<=i;r++)(r===1||r===i||Math.abs(r-t)<=1)&&e.push(r);this.root.innerHTML=`
      <nav aria-label="Pagination">
        <button type="button" data-page="${t-1}" ${t<=1?"disabled":""} aria-label="Previous page">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${g["chevron-left"]}</svg>
        </button>
        ${e.map(r=>`<button type="button" data-page="${r}" class="${r===t?"active":""}" aria-current="${r===t?"page":"false"}">${r}</button>`).join("")}
        <button type="button" data-page="${t+1}" ${t>=i?"disabled":""} aria-label="Next page">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${g["chevron-right"]}</svg>
        </button>
      </nav>
    `,this.root.querySelectorAll("button[data-page]").forEach(r=>{r.addEventListener("click",()=>{const a=Number(r.getAttribute("data-page"));a>=1&&a<=i&&a!==t&&(this.setAttribute("page",String(a)),this.emit("dv-change",{page:a}))})})}}d(dt,"observedAttributes",["page","total"]),m("dv-pagination",dt);class lt extends h{static get componentStyles(){return`
      :host { display: inline-flex; }
      .track {
        position: relative;
        display: inline-flex;
        padding: 3px;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        border: none;
      }
      .pill {
        position: absolute;
        top: 3px;
        bottom: 3px;
        left: 0;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-shadow-sm);
        transition: transform var(--dv-duration-base) cubic-bezier(0.22, 1, 0.36, 1), width var(--dv-duration-base) cubic-bezier(0.22, 1, 0.36, 1);
        pointer-events: none;
      }
      button {
        position: relative;
        z-index: 1;
        border: none;
        background: transparent;
        padding: 6px 14px;
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        font-weight: 500;
        color: var(--dv-text-secondary);
        cursor: pointer;
        border-radius: var(--dv-radius-xs);
      }
      button[aria-pressed='true'] {
        color: var(--dv-text-primary);
      }
      button:focus-visible { outline: none; box-shadow: var(--dv-focus-ring); }
    `}getItems(){try{const i=JSON.parse(this.attr("items","[]"));return Array.isArray(i)?i:[]}catch{return[]}}updatePill(){const i=this.root.querySelector('button[aria-pressed="true"]'),t=this.root.querySelector(".pill");i&&t&&(t.style.width=`${i.offsetWidth}px`,t.style.transform=`translateX(${i.offsetLeft}px)`)}attributeChangedCallback(i,t,e){if(i==="value"&&this.root.querySelector(".track")){const r=e??"";this.root.querySelectorAll("button").forEach(a=>{a.setAttribute("aria-pressed",String(a.getAttribute("data-id")===r))}),this.updatePill();return}super.attributeChangedCallback(i,t,e)}render(){var e;const i=this.getItems(),t=this.attr("value",((e=i[0])==null?void 0:e.id)??"");this.root.innerHTML=`
      <div class="track" role="group">
        <div class="pill" aria-hidden="true"></div>
        ${i.map(r=>`<button type="button" data-id="${c(r.id)}" aria-pressed="${r.id===t}">${c(r.label)}</button>`).join("")}
      </div>
    `,requestAnimationFrame(()=>this.updatePill()),this.root.querySelectorAll("button").forEach(r=>{r.addEventListener("click",()=>{const a=r.getAttribute("data-id")??"";this.setAttribute("value",a),this.emit("dv-change",{value:a})})})}}d(lt,"observedAttributes",["value","items"]),m("dv-segmented",lt);class ct extends h{static get componentStyles(){return`
      :host { display: block; width: 100%; }
      ol {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--dv-space-4);
      }
      li {
        display: flex;
        align-items: center;
        gap: var(--dv-space-2);
        font-size: var(--dv-text-sm);
        color: var(--dv-text-muted);
      }
      .num {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
        color: var(--dv-text-secondary);
        background: var(--dv-surface);
      }
      li.active { color: var(--dv-text-primary); font-weight: 600; }
      li.active .num {
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
      }
      li.done { color: var(--dv-text-secondary); }
      li.done .num {
        background: var(--dv-surface-hover);
        color: var(--dv-text-primary);
      }
      .sep {
        width: 24px;
        height: 1px;
        background: var(--dv-border);
      }
    `}render(){let i=[];try{const e=JSON.parse(this.attr("steps","[]"));Array.isArray(e)&&(i=e.map(String))}catch{i=[]}const t=this.numAttr("current",0);this.root.innerHTML=`
      <ol>
        ${i.map((e,r)=>{const a=r<t?"done":r===t?"active":"";return`
              ${r>0?'<div class="sep" aria-hidden="true"></div>':""}
              <li class="${a}">
                <span class="num">${r<t?`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">${g.check}</svg>`:r+1}</span>
                <span>${c(e)}</span>
              </li>
            `}).join("")}
      </ol>
    `}}d(ct,"observedAttributes",["steps","current"]),m("dv-steps",ct);class vt extends h{static get componentStyles(){return`
      :host { display: inline-flex; height: 100%; }
      .rail {
        display: flex;
        flex-direction: column;
        gap: var(--dv-space-3);
        width: 56px;
        height: 100%;
        padding: var(--dv-space-3) var(--dv-space-2);
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface);
        transition: width var(--dv-duration-base) var(--dv-ease);
      }
      .rail.expanded {
        width: 204px;
        padding: var(--dv-space-3);
      }
      .section {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .section:empty { display: none; }
      .section-center {
        margin-block: auto;
      }
      .section-bottom {
        margin-top: auto;
      }
      .section-center + .section-bottom {
        margin-top: 0;
      }

      .rail.justify-center { justify-content: center; }
      .rail.justify-bottom { justify-content: flex-end; }
      .rail.justify-between { justify-content: space-between; }

      .item {
        position: relative;
        display: flex;
        align-items: center;
        gap: var(--dv-space-3);
        height: 38px;
        padding: 0 11px;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: transparent;
        color: var(--dv-text-secondary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        font-weight: 500;
        cursor: pointer;
        white-space: nowrap;
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) var(--dv-ease);
      }
      .item:hover {
        background: var(--dv-surface-hover);
        color: var(--dv-text-primary);
      }
      .item:active { transform: scale(0.96); }
      .item[aria-current='page'] {
        background: var(--dv-surface-elevated);
        color: var(--dv-text-primary);
        box-shadow: var(--dv-shadow-sm);
      }
      .item:focus-visible { outline: none; box-shadow: var(--dv-focus-ring); }
      .icon { display: inline-flex; flex-shrink: 0; }
      .label { overflow: hidden; text-overflow: ellipsis; }
      .rail:not(.expanded) .label { display: none; }

      .rail:not(.expanded) .item .tooltip {
        position: absolute;
        left: calc(100% + 10px);
        top: 50%;
        transform: translateY(-50%) translateX(-4px);
        padding: 5px 9px;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
        font-size: var(--dv-text-xs);
        pointer-events: none;
        opacity: 0;
        z-index: var(--dv-z-tooltip);
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) var(--dv-ease);
      }
      .rail:not(.expanded) .item:hover .tooltip {
        opacity: 1;
        transform: translateY(-50%) translateX(0);
      }
      .rail.expanded .tooltip { display: none; }
      .slot-wrap:empty { display: none; }
    `}getItems(){try{const i=JSON.parse(this.attr("items","[]"));return Array.isArray(i)?i:[]}catch{return[]}}attributeChangedCallback(i,t,e){if(i==="value"&&this.root.querySelector(".rail")){const r=e??"";this.root.querySelectorAll(".item").forEach(a=>{a.setAttribute("aria-current",a.dataset.id===r?"page":"false")});return}super.attributeChangedCallback(i,t,e)}renderItems(i,t){return i.map(e=>{const r=g[e.icon]??g.layers;return`
          <button
            type="button"
            class="item"
            data-id="${c(e.id)}"
            aria-current="${e.id===t?"page":"false"}"
            aria-label="${c(e.label)}"
          >
            <span class="icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${r}</svg>
            </span>
            <span class="label">${c(e.label)}</span>
            <span class="tooltip" role="tooltip">${c(e.label)}</span>
          </button>
        `}).join("")}render(){var v;const i=this.getItems(),t=this.attr("value",((v=i[0])==null?void 0:v.id)??""),e=this.boolAttr("expanded"),r=this.attr("justify","top"),a=i.some(u=>u.align),n=a?i.filter(u=>!u.align||u.align==="top"):i,s=a?i.filter(u=>u.align==="center"):[],o=a?i.filter(u=>u.align==="bottom"):[];this.root.innerHTML=`
      <nav class="rail ${e?"expanded":""} ${a?"":`justify-${r}`}" aria-label="Navigation rail">
        <div class="section section-top">
          ${this.renderItems(n,t)}
        </div>
        ${s.length?`<div class="section section-center">${this.renderItems(s,t)}</div>`:""}
        ${o.length?`<div class="section section-bottom">${this.renderItems(o,t)}</div>`:""}
        <slot name="footer"></slot>
      </nav>
    `,this.root.querySelectorAll(".item").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.id??"";this.setAttribute("value",f),this.emit("dv-change",{value:f})})})}}d(vt,"observedAttributes",["items","value","expanded","justify"]),m("dv-nav-rail",vt);class pt extends h{static get componentStyles(){return`
      :host { display: block; }
      .alert {
        display: flex;
        align-items: flex-start;
        gap: var(--dv-space-3);
        padding: var(--dv-space-4);
        border-radius: var(--dv-radius-md);
        border: none;
        background: var(--dv-surface);
        color: var(--dv-text-primary);
      }

      .icon { flex-shrink: 0; margin-top: 2px; display: inline-flex; }
      .variant-info .icon { color: var(--dv-info); }
      .variant-success .icon { color: var(--dv-success); }
      .variant-warning .icon { color: var(--dv-warning); }
      .variant-danger .icon { color: var(--dv-danger); }

      .body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 4px; }
      .title { font-weight: 600; font-size: var(--dv-text-sm); color: var(--dv-text-primary); }
      .desc { font-size: var(--dv-text-sm); color: var(--dv-text-secondary); line-height: var(--dv-leading-sm); }
      .close {
        background: none;
        border: none;
        padding: 4px;
        color: var(--dv-text-muted);
        cursor: pointer;
        border-radius: var(--dv-radius-xs);
        display: inline-flex;
      }
      .close:hover { color: var(--dv-text-primary); }
    `}render(){var a;const i=this.attr("variant","info"),t=this.attr("title"),e=this.boolAttr("dismissible"),r=i==="success"?"check-circle":i==="warning"?"alert-triangle":i==="danger"?"alert-circle":"info";this.root.innerHTML=`
      <div class="alert variant-${i}" role="alert">
        <span class="icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${g[r]}</svg>
        </span>
        <div class="body">
          ${t?`<div class="title">${c(t)}</div>`:""}
          <div class="desc"><slot></slot></div>
        </div>
        ${e?`<button type="button" class="close" aria-label="Dismiss">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${g.x}</svg>
              </button>`:""}
      </div>
    `,(a=this.root.querySelector(".close"))==null||a.addEventListener("click",()=>{this.emit("dv-dismiss"),this.remove()})}}d(pt,"observedAttributes",["variant","title","dismissible"]),m("dv-alert",pt);class ge extends h{static get componentStyles(){return`
      :host {
        position: fixed;
        bottom: var(--dv-space-5);
        right: var(--dv-space-5);
        z-index: var(--dv-z-toast);
        display: flex;
        flex-direction: column;
        gap: var(--dv-space-2);
        max-width: min(380px, calc(100vw - 32px));
        pointer-events: none;
      }
      .toast {
        pointer-events: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--dv-space-3);
        padding: 12px 14px;
        border-radius: var(--dv-radius-md);
        border: none;
        background: var(--dv-surface-elevated);
        color: var(--dv-text-primary);
        box-shadow: var(--dv-shadow-md);
        font-size: var(--dv-text-sm);
        animation: dv-toast-in var(--dv-duration-base) var(--dv-ease);
      }
      .variant-success .msg-dot { color: var(--dv-success); }
      .variant-warning .msg-dot { color: var(--dv-warning); }
      .variant-danger .msg-dot { color: var(--dv-danger); }
      .variant-info .msg-dot { color: var(--dv-info); }
      button {
        background: none;
        border: none;
        color: var(--dv-text-muted);
        cursor: pointer;
        padding: 2px;
        display: inline-flex;
      }
      button:hover { color: var(--dv-text-primary); }
      @keyframes dv-toast-in {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}addToast(i){var o;const{message:t,variant:e="neutral",duration:r=3500}=i,a=this.root.querySelector(".list");if(!a)return;const n=document.createElement("div");n.className=`toast variant-${e}`,n.setAttribute("role","status"),n.innerHTML=`
      <span>${c(t)}</span>
      <button type="button" aria-label="Close">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${g.x}</svg>
      </button>
    `;const s=()=>n.remove();(o=n.querySelector("button"))==null||o.addEventListener("click",s),a.appendChild(n),r>0&&window.setTimeout(s,r)}render(){this.root.querySelector(".list")||(this.root.innerHTML='<div class="list" style="display:flex;flex-direction:column;gap:8px;"></div>')}}m("dv-toast-container",ge);function De(l){if(typeof document>"u")return;let i=document.querySelector("dv-toast-container");i||(i=document.createElement("dv-toast-container"),document.body.appendChild(i)),i.addToast(l)}class ut extends h{constructor(){super(...arguments);d(this,"_onKeyDown",t=>{t.key==="Escape"&&this.boolAttr("open")&&this.close()})}static get componentStyles(){return`
      :host { display: contents; }
      .backdrop {
        position: fixed;
        inset: 0;
        z-index: var(--dv-z-modal);
        background: rgba(0, 0, 0, 0.55);
        display: none;
        align-items: center;
        justify-content: center;
        padding: var(--dv-space-4);
      }
      .backdrop.open { display: flex; }
      .dialog {
        width: 100%;
        background: var(--dv-surface-elevated);
        border: none;
        border-radius: var(--dv-radius-lg);
        box-shadow: var(--dv-shadow-lg);
        display: flex;
        flex-direction: column;
        max-height: 90dvh;
        animation: dv-modal-in var(--dv-duration-base) var(--dv-ease);
      }
      .size-sm { max-width: 400px; }
      .size-md { max-width: 540px; }
      .size-lg { max-width: 720px; }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--dv-space-3);
        padding: var(--dv-space-5) var(--dv-space-5) var(--dv-space-2);
      }
      .title {
        font-size: var(--dv-text-h4);
        font-weight: 600;
        color: var(--dv-text-primary);
        margin: 0;
      }
      .close {
        background: transparent;
        border: none;
        border-radius: var(--dv-radius-xs);
        color: var(--dv-text-muted);
        cursor: pointer;
        padding: 4px;
        display: inline-flex;
      }
      .close:hover { color: var(--dv-text-primary); background: var(--dv-surface-hover); }
      .close:focus-visible { outline: none; box-shadow: var(--dv-focus-ring); }
      .body {
        padding: var(--dv-space-3) var(--dv-space-5) var(--dv-space-5);
        overflow-y: auto;
      }
      .footer {
        padding: 0 var(--dv-space-5) var(--dv-space-5);
        display: flex;
        justify-content: flex-end;
        gap: var(--dv-space-2);
      }
      .footer:empty { display: none; }
      @keyframes dv-modal-in {
        from { opacity: 0; transform: translateY(6px) scale(0.985); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
    `}onMount(){document.addEventListener("keydown",this._onKeyDown)}onUnmount(){document.removeEventListener("keydown",this._onKeyDown)}show(){this.setAttribute("open","")}close(){this.removeAttribute("open"),this.emit("dv-close")}render(){var a,n;const t=this.boolAttr("open"),e=this.attr("title"),r=this.attr("size","md");this.root.innerHTML=`
      <div class="backdrop ${t?"open":""}">
        <div class="dialog size-${r}" role="dialog" aria-modal="true" aria-label="${c(e||"Dialog")}">
          <div class="header">
            <h2 class="title">${c(e)}</h2>
            <button type="button" class="close" aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${g.x}</svg>
            </button>
          </div>
          <div class="body"><slot></slot></div>
          <div class="footer"><slot name="footer"></slot></div>
        </div>
      </div>
    `,(a=this.root.querySelector(".close"))==null||a.addEventListener("click",()=>this.close()),(n=this.root.querySelector(".backdrop"))==null||n.addEventListener("click",s=>{s.target===s.currentTarget&&this.close()})}}d(ut,"observedAttributes",["open","title","size"]),m("dv-modal",ut);class ht extends h{constructor(){super(...arguments);d(this,"_onKeyDown",t=>{t.key==="Escape"&&this.boolAttr("open")&&this.close()})}static get componentStyles(){return`
      :host { display: contents; }
      .backdrop {
        position: fixed;
        inset: 0;
        z-index: var(--dv-z-modal);
        background: rgba(0, 0, 0, 0.55);
        display: none;
      }
      .backdrop.open { display: block; }
      .panel {
        position: fixed;
        top: 0;
        bottom: 0;
        width: min(380px, 90vw);
        background: var(--dv-surface-elevated);
        border: none;
        box-shadow: var(--dv-shadow-lg);
        display: flex;
        flex-direction: column;
      }
      .side-right { right: 0; animation: dv-drawer-right var(--dv-duration-base) var(--dv-ease); }
      .side-left { left: 0; animation: dv-drawer-left var(--dv-duration-base) var(--dv-ease); }
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--dv-space-5) var(--dv-space-5) var(--dv-space-3);
      }
      .title { font-size: var(--dv-text-h4); font-weight: 600; margin: 0; }
      .close {
        background: transparent;
        border: none;
        color: var(--dv-text-muted);
        cursor: pointer;
        padding: 4px;
        display: inline-flex;
      }
      .close:hover { color: var(--dv-text-primary); }
      .body { padding: var(--dv-space-5); overflow-y: auto; flex: 1; }
      @keyframes dv-drawer-right {
        from { opacity: 0; transform: translateX(20px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes dv-drawer-left {
        from { opacity: 0; transform: translateX(-20px); }
        to { opacity: 1; transform: translateX(0); }
      }
    `}onMount(){document.addEventListener("keydown",this._onKeyDown)}onUnmount(){document.removeEventListener("keydown",this._onKeyDown)}show(){this.setAttribute("open","")}close(){this.removeAttribute("open"),this.emit("dv-close")}render(){var a,n;const t=this.boolAttr("open"),e=this.attr("title"),r=this.attr("side","right");this.root.innerHTML=`
      <div class="backdrop ${t?"open":""}">
        <div class="panel side-${r}" role="dialog" aria-modal="true" aria-label="${c(e||"Drawer")}">
          <div class="header">
            <h2 class="title">${c(e)}</h2>
            <button type="button" class="close" aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${g.x}</svg>
            </button>
          </div>
          <div class="body"><slot></slot></div>
        </div>
      </div>
    `,(a=this.root.querySelector(".close"))==null||a.addEventListener("click",()=>this.close()),(n=this.root.querySelector(".backdrop"))==null||n.addEventListener("click",s=>{s.target===s.currentTarget&&this.close()})}}d(ht,"observedAttributes",["open","title","side"]),m("dv-drawer",ht);class mt extends h{constructor(){super(...arguments);d(this,"_onDocClick",t=>{this.boolAttr("open")&&!t.composedPath().includes(this)&&this.removeAttribute("open")});d(this,"_onKeyDown",t=>{t.key==="Escape"&&this.boolAttr("open")&&this.removeAttribute("open")})}static get componentStyles(){return`
      :host { position: relative; display: inline-block; }
      .menu {
        position: absolute;
        top: calc(100% + 6px);
        min-width: 190px;
        z-index: var(--dv-z-dropdown);
        background: var(--dv-surface-elevated);
        border: none;
        border-radius: var(--dv-radius-md);
        box-shadow: var(--dv-shadow-md);
        padding: var(--dv-space-1);
        display: none;
        flex-direction: column;
        gap: 2px;
      }
      .menu.open {
        display: flex;
        animation: dv-dropdown-in var(--dv-duration-fast) var(--dv-ease);
      }
      @keyframes dv-dropdown-in {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .align-left { left: 0; }
      .align-right { right: 0; }
    `}onMount(){document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onKeyDown)}onUnmount(){document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onKeyDown)}render(){var r;const t=this.boolAttr("open"),e=this.attr("align","left");this.root.innerHTML=`
      <div class="trigger"><slot name="trigger"></slot></div>
      <div class="menu align-${e} ${t?"open":""}" role="menu">
        <slot></slot>
      </div>
    `,(r=this.root.querySelector(".trigger"))==null||r.addEventListener("click",()=>{this.boolAttr("open")?this.removeAttribute("open"):this.setAttribute("open","")})}}d(mt,"observedAttributes",["open","align"]),m("dv-dropdown",mt);class ft extends h{static get componentStyles(){return`
      :host { position: relative; display: inline-flex; }
      .tip {
        position: absolute;
        left: 50%;
        z-index: var(--dv-z-tooltip);
        padding: 5px 9px;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
        font-size: var(--dv-text-xs);
        font-weight: 500;
        white-space: nowrap;
        pointer-events: none;
        opacity: 0;
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) var(--dv-ease);
      }
      .pos-top {
        bottom: calc(100% + 6px);
        transform: translateX(-50%) translateY(3px);
      }
      .pos-bottom {
        top: calc(100% + 6px);
        transform: translateX(-50%) translateY(-3px);
      }
      :host(:hover) .tip,
      :host(:focus-within) .tip {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
    `}render(){const i=this.attr("text"),t=this.attr("position","top");this.root.innerHTML=`
      <slot></slot>
      ${i?`<span class="tip pos-${t}" role="tooltip">${c(i)}</span>`:""}
    `}}d(ft,"observedAttributes",["text","position"]),m("dv-tooltip",ft);class gt extends h{static get componentStyles(){return`
      :host { display: block; }
      .item {
        border: none;
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface);
      }
      button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--dv-space-3);
        padding: var(--dv-space-4);
        background: transparent;
        border: none;
        text-align: left;
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-body);
        font-weight: 500;
        color: var(--dv-text-primary);
        cursor: pointer;
      }
      button:focus-visible { outline: none; box-shadow: var(--dv-focus-ring); border-radius: var(--dv-radius-md); }
      .chevron {
        color: var(--dv-text-muted);
        transition: transform var(--dv-duration-fast) var(--dv-ease);
        display: inline-flex;
      }
      button[aria-expanded='true'] .chevron { transform: rotate(180deg); }
      .panel {
        display: none;
        padding: 0 var(--dv-space-4) var(--dv-space-4);
        font-size: var(--dv-text-sm);
        color: var(--dv-text-secondary);
        line-height: var(--dv-leading-sm);
      }
      .panel.open {
        display: block;
        animation: dv-accordion-in var(--dv-duration-base) var(--dv-ease);
      }
      @keyframes dv-accordion-in {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}render(){var e;const i=this.attr("title"),t=this.boolAttr("open");this.root.innerHTML=`
      <div class="item">
        <button type="button" aria-expanded="${t}">
          <span>${c(i)}</span>
          <span class="chevron" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${g["chevron-down"]}</svg>
          </span>
        </button>
        <div class="panel ${t?"open":""}">
          <slot></slot>
        </div>
      </div>
    `,(e=this.root.querySelector("button"))==null||e.addEventListener("click",()=>{this.boolAttr("open")?this.removeAttribute("open"):this.setAttribute("open",""),this.emit("dv-toggle",{open:this.boolAttr("open")})})}}d(gt,"observedAttributes",["title","open"]),m("dv-accordion",gt);class bt extends h{static get componentStyles(){return`
      :host { display: block; }
      .empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: var(--dv-space-3);
        padding: var(--dv-space-8) var(--dv-space-4);
      }
      .icon {
        color: var(--dv-text-muted);
        display: inline-flex;
      }
      .title {
        font-size: var(--dv-text-h4);
        font-weight: 600;
        color: var(--dv-text-primary);
      }
      .desc {
        max-width: 360px;
        font-size: var(--dv-text-sm);
        color: var(--dv-text-secondary);
        line-height: var(--dv-leading-sm);
      }
      .actions:empty { display: none; }
    `}render(){const i=this.attr("icon","layers"),t=this.attr("title","Нет данных"),e=this.attr("description"),r=g[i]??g.layers;this.root.innerHTML=`
      <div class="empty">
        <span class="icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${r}</svg>
        </span>
        <div class="title">${c(t)}</div>
        ${e?`<div class="desc">${c(e)}</div>`:""}
        <div class="actions"><slot></slot></div>
      </div>
    `}}d(bt,"observedAttributes",["icon","title","description"]),m("dv-empty",bt);class xt extends h{constructor(){super(...arguments);d(this,"_onDocClick",t=>{this.boolAttr("open")&&!t.composedPath().includes(this)&&this.removeAttribute("open")});d(this,"_onKeyDown",t=>{t.key==="Escape"&&this.boolAttr("open")&&this.removeAttribute("open")})}static get componentStyles(){return`
      :host { position: relative; display: inline-block; }
      .panel {
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        min-width: 240px;
        padding: var(--dv-space-4);
        border-radius: var(--dv-radius-md);
        border: none;
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-shadow-md);
        z-index: var(--dv-z-dropdown);
        display: none;
      }
      .panel.open {
        display: block;
        animation: dv-pop-in var(--dv-duration-fast) var(--dv-ease);
      }
      @keyframes dv-pop-in {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}onMount(){document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onKeyDown)}onUnmount(){document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onKeyDown)}render(){var e;const t=this.boolAttr("open");this.root.innerHTML=`
      <div class="trigger"><slot name="trigger"></slot></div>
      <div class="panel ${t?"open":""}"><slot></slot></div>
    `,(e=this.root.querySelector(".trigger"))==null||e.addEventListener("click",()=>{this.boolAttr("open")?this.removeAttribute("open"):this.setAttribute("open","")})}}d(xt,"observedAttributes",["open"]),m("dv-popover",xt);class yt extends h{constructor(){super(...arguments);d(this,"_onKeyDown",t=>{t.key==="Escape"&&this.boolAttr("open")&&this.resolveCancel()})}static get componentStyles(){return`
      :host { display: contents; }
      .backdrop {
        position: fixed;
        inset: 0;
        z-index: var(--dv-z-modal);
        background: rgba(0, 0, 0, 0.52);
        display: none;
        align-items: center;
        justify-content: center;
        padding: var(--dv-space-4);
      }
      .backdrop.open { display: flex; }
      .dialog {
        width: 100%;
        max-width: 400px;
        background: var(--dv-surface-elevated);
        border: none;
        border-radius: var(--dv-radius-lg);
        box-shadow: var(--dv-shadow-lg);
        padding: var(--dv-space-5);
        display: flex;
        flex-direction: column;
        gap: var(--dv-space-4);
        animation: dv-confirm-in var(--dv-duration-base) var(--dv-ease);
      }
      .head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: var(--dv-space-3);
      }
      .title {
        margin: 0;
        font-size: var(--dv-text-h4);
        font-weight: 600;
        color: var(--dv-text-primary);
      }
      .desc {
        margin: 0;
        font-size: var(--dv-text-sm);
        line-height: var(--dv-leading-sm);
        color: var(--dv-text-secondary);
      }
      .close {
        background: transparent;
        border: none;
        color: var(--dv-text-muted);
        cursor: pointer;
        padding: 4px;
        border-radius: var(--dv-radius-xs);
        display: inline-flex;
      }
      .close:hover { background: var(--dv-surface-hover); color: var(--dv-text-primary); }
      .prompt-input {
        width: 100%;
        height: 38px;
        padding: 0 12px;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-body);
        outline: none;
      }
      .prompt-input:focus {
        box-shadow: var(--dv-focus-ring);
      }
      .actions {
        display: flex;
        justify-content: flex-end;
        gap: var(--dv-space-2);
      }
      .btn {
        height: 36px;
        padding: 0 14px;
        border: none;
        border-radius: var(--dv-radius-sm);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        font-weight: 500;
        cursor: pointer;
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) var(--dv-ease);
      }
      .btn:active { transform: translateY(1px); }
      .btn-cancel {
        background: var(--dv-surface);
        color: var(--dv-text-primary);
      }
      .btn-cancel:hover { background: var(--dv-surface-hover); }
      .btn-primary {
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
      }
      .btn-primary:hover { background: var(--dv-accent-hover); }
      .btn-danger {
        background: var(--dv-surface);
        color: var(--dv-danger);
      }
      .btn-danger:hover { background: var(--dv-surface-hover); }
      @keyframes dv-confirm-in {
        from { opacity: 0; transform: translateY(6px) scale(0.985); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
    `}onMount(){document.addEventListener("keydown",this._onKeyDown)}onUnmount(){document.removeEventListener("keydown",this._onKeyDown)}resolveCancel(){this.removeAttribute("open"),this.emit("dv-cancel")}resolveConfirm(){const t=this.root.querySelector(".prompt-input"),e=t?t.value:void 0;this.removeAttribute("open"),this.emit("dv-confirm",{value:e})}render(){var b,y,x,w;const t=this.boolAttr("open"),e=this.attr("title","Подтверждение"),r=this.attr("description",""),a=this.attr("confirm-text","Подтвердить"),n=this.attr("cancel-text","Отмена"),s=this.attr("variant","primary"),o=this.boolAttr("prompt"),v=this.attr("placeholder",""),u=this.attr("value","");this.root.innerHTML=`
      <div class="backdrop ${t?"open":""}">
        <div class="dialog" role="alertdialog" aria-modal="true" aria-label="${c(e)}">
          <div class="head">
            <h2 class="title">${c(e)}</h2>
            <button type="button" class="close" aria-label="Закрыть">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${g.x}</svg>
            </button>
          </div>
          ${r?`<p class="desc">${c(r)}</p>`:""}
          ${o?`<input type="text" class="prompt-input" placeholder="${c(v)}" value="${c(u)}" />`:""}
          <div class="actions">
            <button type="button" class="btn btn-cancel">${c(n)}</button>
            <button type="button" class="btn btn-${s==="danger"?"danger":"primary"} btn-ok">${c(a)}</button>
          </div>
        </div>
      </div>
    `,(b=this.root.querySelector(".close"))==null||b.addEventListener("click",()=>this.resolveCancel()),(y=this.root.querySelector(".btn-cancel"))==null||y.addEventListener("click",()=>this.resolveCancel()),(x=this.root.querySelector(".btn-ok"))==null||x.addEventListener("click",()=>this.resolveConfirm()),(w=this.root.querySelector(".backdrop"))==null||w.addEventListener("click",k=>{k.target===k.currentTarget&&this.resolveCancel()});const f=this.root.querySelector(".prompt-input");t&&f&&(requestAnimationFrame(()=>f.focus()),f.addEventListener("keydown",k=>{k.key==="Enter"&&this.resolveConfirm()}))}}d(yt,"observedAttributes",["open","title","description","confirm-text","cancel-text","variant","prompt","placeholder","value"]),m("dv-confirm",yt);function Te(l){return new Promise(i=>{const t=document.createElement("dv-confirm");t.setAttribute("title",l.title),l.description&&t.setAttribute("description",l.description),l.confirmText&&t.setAttribute("confirm-text",l.confirmText),l.cancelText&&t.setAttribute("cancel-text",l.cancelText),l.variant&&t.setAttribute("variant",l.variant),t.setAttribute("open","");const e=r=>{t.remove(),i(r)};t.addEventListener("dv-confirm",()=>e(!0),{once:!0}),t.addEventListener("dv-cancel",()=>e(!1),{once:!0}),document.body.appendChild(t)})}function qe(l){return new Promise(i=>{const t=document.createElement("dv-confirm");t.setAttribute("title",l.title),t.setAttribute("prompt",""),l.description&&t.setAttribute("description",l.description),l.confirmText&&t.setAttribute("confirm-text",l.confirmText),l.cancelText&&t.setAttribute("cancel-text",l.cancelText),l.placeholder&&t.setAttribute("placeholder",l.placeholder),l.defaultValue&&t.setAttribute("value",l.defaultValue),t.setAttribute("open",""),t.addEventListener("dv-confirm",e=>{var a;const r=((a=e.detail)==null?void 0:a.value)??"";t.remove(),i(r)},{once:!0}),t.addEventListener("dv-cancel",()=>{t.remove(),i(null)},{once:!0}),document.body.appendChild(t)})}class kt extends h{constructor(){super(...arguments);d(this,"_query","");d(this,"_activeIdx",0);d(this,"_onKeyDown",t=>{t.key==="Escape"&&this.boolAttr("open")&&this.close()})}static get componentStyles(){return`
      :host { display: contents; }
      .backdrop {
        position: fixed;
        inset: 0;
        z-index: var(--dv-z-modal);
        background: rgba(0, 0, 0, 0.5);
        display: none;
        align-items: flex-start;
        justify-content: center;
        padding: min(14vh, 120px) var(--dv-space-4) var(--dv-space-4);
      }
      .backdrop.open { display: flex; }
      .dialog {
        width: 100%;
        max-width: 520px;
        border-radius: var(--dv-radius-lg);
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-shadow-lg);
        overflow: hidden;
        animation: dv-cmd-in var(--dv-duration-base) var(--dv-ease);
      }
      @keyframes dv-cmd-in {
        from { opacity: 0; transform: translateY(-6px) scale(0.985); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      .search-row {
        display: flex;
        align-items: center;
        gap: var(--dv-space-3);
        padding: 12px 16px;
        background: var(--dv-surface);
      }
      .search-row input {
        flex: 1;
        border: none;
        background: transparent;
        outline: none;
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-body);
        color: var(--dv-text-primary);
      }
      .search-row input::placeholder { color: var(--dv-text-muted); }
      .list {
        max-height: 300px;
        overflow-y: auto;
        padding: var(--dv-space-2);
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--dv-space-3);
        width: 100%;
        padding: 9px 12px;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: transparent;
        color: var(--dv-text-primary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        cursor: pointer;
        text-align: left;
      }
      .item:hover,
      .item.active {
        background: var(--dv-surface-hover);
      }
      .left { display: flex; align-items: center; gap: var(--dv-space-2); }
      .icon { color: var(--dv-text-muted); display: inline-flex; }
      .kbd {
        font-family: var(--dv-font-mono);
        font-size: 11px;
        color: var(--dv-text-muted);
        background: var(--dv-surface);
        padding: 2px 6px;
        border-radius: var(--dv-radius-xs);
      }
      .empty {
        padding: 20px;
        text-align: center;
        font-size: var(--dv-text-sm);
        color: var(--dv-text-muted);
      }
    `}onMount(){document.addEventListener("keydown",this._onKeyDown)}onUnmount(){document.removeEventListener("keydown",this._onKeyDown)}show(){this._query="",this._activeIdx=0,this.setAttribute("open","")}close(){this.removeAttribute("open"),this.emit("dv-close")}getItems(){try{const t=JSON.parse(this.attr("items","[]"));return Array.isArray(t)?t:[]}catch{return[]}}renderList(){const t=this.root.querySelector(".list");if(!t)return;const e=this.getItems(),r=this._query.trim().toLowerCase(),a=r?e.filter(n=>n.label.toLowerCase().includes(r)):e;if(a.length===0){t.innerHTML='<div class="empty">Команды не найдены</div>';return}this._activeIdx=Math.min(this._activeIdx,a.length-1),t.innerHTML=a.map((n,s)=>{const o=n.icon&&g[n.icon]?g[n.icon]:g["arrow-right"];return`
        <button type="button" class="item ${s===this._activeIdx?"active":""}" data-id="${c(n.id)}">
          <span class="left">
            <span class="icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${o}</svg>
            </span>
            <span>${c(n.label)}</span>
          </span>
          ${n.shortcut?`<span class="kbd">${c(n.shortcut)}</span>`:""}
        </button>
      `}).join(""),t.querySelectorAll(".item").forEach(n=>{n.addEventListener("click",()=>{const s=n.dataset.id??"",o=e.find(v=>v.id===s);this.close(),this.emit("dv-select",{id:s,item:o})})})}render(){var a;const t=this.boolAttr("open"),e=this.attr("placeholder","Введите команду или поиск...");this.root.innerHTML=`
      <div class="backdrop ${t?"open":""}">
        <div class="dialog" role="dialog" aria-modal="true" aria-label="Палитра команд">
          <div class="search-row">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" style="color:var(--dv-text-muted)">${g.search}</svg>
            <input type="text" placeholder="${c(e)}" value="${c(this._query)}" />
            <span class="kbd">Esc</span>
          </div>
          <div class="list"></div>
        </div>
      </div>
    `,this.renderList(),(a=this.root.querySelector(".backdrop"))==null||a.addEventListener("click",n=>{n.target===n.currentTarget&&this.close()});const r=this.root.querySelector("input");t&&r&&(requestAnimationFrame(()=>r.focus()),r.addEventListener("input",()=>{this._query=r.value,this._activeIdx=0,this.renderList()}),r.addEventListener("keydown",n=>{var o;const s=this.root.querySelectorAll(".item");s.length&&(n.key==="ArrowDown"?(n.preventDefault(),this._activeIdx=(this._activeIdx+1)%s.length,this.renderList()):n.key==="ArrowUp"?(n.preventDefault(),this._activeIdx=(this._activeIdx-1+s.length)%s.length,this.renderList()):n.key==="Enter"&&(n.preventDefault(),(o=s[this._activeIdx])==null||o.click()))}))}}d(kt,"observedAttributes",["open","items","placeholder"]),m("dv-command",kt);class wt extends h{constructor(){super(...arguments);d(this,"_open",!1);d(this,"_onDocClick",t=>{this._open&&!t.composedPath().includes(this)&&this.close()});d(this,"_onKeyDown",t=>{t.key==="Escape"&&this._open&&this.close()})}static get componentStyles(){return`
      :host { display: block; }
      .menu {
        position: fixed;
        min-width: 180px;
        padding: 4px;
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-shadow-lg);
        z-index: var(--dv-z-dropdown);
        display: none;
        flex-direction: column;
        gap: 2px;
      }
      .menu.open {
        display: flex;
        animation: dv-ctx-in var(--dv-duration-fast) var(--dv-ease);
      }
      @keyframes dv-ctx-in {
        from { opacity: 0; transform: scale(0.97); }
        to { opacity: 1; transform: scale(1); }
      }
      .item {
        width: 100%;
        padding: 7px 10px;
        border: none;
        border-radius: var(--dv-radius-xs);
        background: transparent;
        color: var(--dv-text-primary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        text-align: left;
        cursor: pointer;
      }
      .item:hover { background: var(--dv-surface-hover); }
      .item.danger { color: var(--dv-danger); }
    `}onMount(){document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onKeyDown)}onUnmount(){document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onKeyDown)}getItems(){try{const t=JSON.parse(this.attr("items","[]"));return Array.isArray(t)?t:[]}catch{return[]}}close(){var t;this._open=!1,(t=this.root.querySelector(".menu"))==null||t.classList.remove("open")}render(){const t=this.getItems();this.root.innerHTML=`
      <div class="target"><slot></slot></div>
      <div class="menu" role="menu">
        ${t.map(a=>`<button type="button" class="item ${a.danger?"danger":""}" role="menuitem" data-id="${c(a.id)}">${c(a.label)}</button>`).join("")}
      </div>
    `;const e=this.root.querySelector(".target"),r=this.root.querySelector(".menu");e.addEventListener("contextmenu",a=>{const n=a;n.preventDefault(),this._open=!0,r.classList.add("open");const s=Math.min(n.clientX,window.innerWidth-200),o=Math.min(n.clientY,window.innerHeight-200);r.style.left=`${Math.max(8,s)}px`,r.style.top=`${Math.max(8,o)}px`}),r.querySelectorAll(".item").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.id??"";this.close(),this.emit("dv-select",{id:n})})})}}d(wt,"observedAttributes",["items"]),m("dv-context-menu",wt);class $t extends h{constructor(){super(...arguments);d(this,"_onKeyDown",t=>{t.key==="Escape"&&this.boolAttr("open")&&this.close()})}static get componentStyles(){return`
      :host { display: contents; }
      .backdrop {
        position: fixed;
        inset: 0;
        z-index: var(--dv-z-modal);
        background: rgba(0, 0, 0, 0.5);
        display: none;
        align-items: flex-end;
        justify-content: center;
      }
      .backdrop.open { display: flex; }
      .sheet {
        width: 100%;
        max-width: 640px;
        max-height: 85dvh;
        background: var(--dv-surface-elevated);
        border-radius: var(--dv-radius-lg) var(--dv-radius-lg) 0 0;
        box-shadow: var(--dv-shadow-lg);
        display: flex;
        flex-direction: column;
        animation: dv-sheet-up var(--dv-duration-base) var(--dv-ease);
      }
      @keyframes dv-sheet-up {
        from { opacity: 0; transform: translateY(24px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .handle-wrap {
        display: flex;
        justify-content: center;
        padding-top: 10px;
      }
      .handle {
        width: 36px;
        height: 4px;
        border-radius: 999px;
        background: var(--dv-surface-active);
      }
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--dv-space-3) var(--dv-space-5);
      }
      .title {
        margin: 0;
        font-size: var(--dv-text-h4);
        font-weight: 600;
        color: var(--dv-text-primary);
      }
      .close {
        background: transparent;
        border: none;
        color: var(--dv-text-muted);
        cursor: pointer;
        padding: 4px;
        border-radius: var(--dv-radius-xs);
        display: inline-flex;
      }
      .close:hover { background: var(--dv-surface-hover); color: var(--dv-text-primary); }
      .body {
        padding: 0 var(--dv-space-5) var(--dv-space-6);
        overflow-y: auto;
      }
    `}onMount(){document.addEventListener("keydown",this._onKeyDown)}onUnmount(){document.removeEventListener("keydown",this._onKeyDown)}show(){this.setAttribute("open","")}close(){this.removeAttribute("open"),this.emit("dv-close")}render(){var r,a;const t=this.boolAttr("open"),e=this.attr("title","");this.root.innerHTML=`
      <div class="backdrop ${t?"open":""}">
        <div class="sheet" role="dialog" aria-modal="true" aria-label="${c(e||"Bottom sheet")}">
          <div class="handle-wrap"><div class="handle" aria-hidden="true"></div></div>
          <div class="header">
            <h2 class="title">${c(e)}</h2>
            <button type="button" class="close" aria-label="Закрыть">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${g.x}</svg>
            </button>
          </div>
          <div class="body"><slot></slot></div>
        </div>
      </div>
    `,(r=this.root.querySelector(".close"))==null||r.addEventListener("click",()=>this.close()),(a=this.root.querySelector(".backdrop"))==null||a.addEventListener("click",n=>{n.target===n.currentTarget&&this.close()})}}d($t,"observedAttributes",["open","title"]),m("dv-bottom-sheet",$t);class At extends h{static get componentStyles(){return`
      :host { display: block; }
      .heading {
        margin: 0;
        color: var(--dv-text-primary);
        font-family: var(--dv-font-display);
        font-weight: 400;
        letter-spacing: -0.015em;
      }
      .font-sans { font-family: var(--dv-font-sans); font-weight: 700; letter-spacing: -0.02em; }
      .font-alt { font-family: var(--dv-font-alt); font-weight: 700; letter-spacing: -0.015em; }
      .font-display { font-family: var(--dv-font-display); font-weight: 400; letter-spacing: -0.01em; }

      .level-display { font-size: var(--dv-text-display); line-height: var(--dv-leading-display); }
      .level-1 { font-size: var(--dv-text-h1); line-height: var(--dv-leading-h1); }
      .level-2 { font-size: var(--dv-text-h2); line-height: var(--dv-leading-h2); }
      .level-3 { font-size: var(--dv-text-h3); line-height: var(--dv-leading-h3); }
      .level-4 { font-size: var(--dv-text-h4); line-height: var(--dv-leading-h4); }

      .balance { text-wrap: balance; }
    `}render(){const i=this.attr("level","2"),t=this.attr("font",i==="display"||i==="1"||i==="2"?"display":"sans"),e=this.attr("align","left"),r=this.hasAttribute("balance")?this.boolAttr("balance"):!0,a=i==="display"||i==="1"?"h1":i==="3"?"h3":i==="4"?"h4":"h2",n=`heading level-${i} font-${t} ${r?"balance":""}`;this.root.innerHTML=`<${a} class="${n}" style="text-align:${e}"><slot></slot></${a}>`}}d(At,"observedAttributes",["level","font","align","balance"]),m("dv-heading",At);class St extends h{static get componentStyles(){return`
      :host { display: block; }
      :host([inline]) { display: inline; }
      .text {
        margin: 0;
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-body);
        line-height: var(--dv-leading-body);
        color: var(--dv-text-primary);
      }
      .variant-body { color: var(--dv-text-primary); }
      .variant-secondary { color: var(--dv-text-secondary); }
      .variant-muted { color: var(--dv-text-muted); }
      .variant-sm { font-size: var(--dv-text-sm); line-height: var(--dv-leading-sm); color: var(--dv-text-secondary); }
      .variant-xs { font-size: var(--dv-text-xs); line-height: var(--dv-leading-xs); color: var(--dv-text-muted); }
      .variant-mono { font-family: var(--dv-font-mono); font-size: var(--dv-text-sm); }

      .font-sans { font-family: var(--dv-font-sans); }
      .font-alt { font-family: var(--dv-font-alt); }
      .font-mono { font-family: var(--dv-font-mono); }

      .tabular { font-variant-numeric: tabular-nums; }
      .pretty { text-wrap: pretty; }
    `}render(){const i=this.attr("variant","body"),t=this.attr("font",i==="mono"?"mono":"sans"),e=this.boolAttr("tabular"),r=this.hasAttribute("pretty")?this.boolAttr("pretty"):!0,a=this.attr("align",""),n=this.hasAttribute("inline")?"span":"p",s=["text",`variant-${i}`,`font-${t}`,e?"tabular":"",r?"pretty":""].filter(Boolean).join(" "),o=a?` style="text-align:${a}"`:"";this.root.innerHTML=`<${n} class="${s}"${o}><slot></slot></${n}>`}}d(St,"observedAttributes",["variant","font","tabular","pretty","align"]),m("dv-text",St);class _t extends h{static get componentStyles(){return`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        color: currentColor;
      }
      svg {
        display: block;
      }
    `}render(){const i=this.attr("name"),t=this.numAttr("size",18),e=this.attr("stroke-width","1.75"),r=g[i];if(!r){this.root.innerHTML="<slot></slot>";return}this.root.innerHTML=`
      <svg
        width="${t}"
        height="${t}"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="${e}"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >${r}</svg>
    `}}d(_t,"observedAttributes",["name","size","stroke-width"]),m("dv-icon",_t);class zt extends h{static get componentStyles(){return`
      :host { display: inline-flex; }
      .badge {
        display: inline-flex;
        align-items: center;
        gap: var(--dv-space-1);
        font-family: var(--dv-font-sans);
        font-weight: 500;
        font-variant-numeric: tabular-nums;
        border-radius: var(--dv-radius-xs);
        border: none;
        background: var(--dv-surface);
        color: var(--dv-text-secondary);
        white-space: nowrap;
        line-height: 1;
      }
      .size-sm { padding: 4px 8px; font-size: var(--dv-text-xs); }
      .size-md { padding: 6px 11px; font-size: var(--dv-text-sm); }

      .variant-accent {
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
      }
      .variant-success { color: var(--dv-success); }
      .variant-warning { color: var(--dv-warning); }
      .variant-danger { color: var(--dv-danger); }
      .variant-info { color: var(--dv-info); }
    `}render(){const i=this.attr("variant","neutral"),t=this.attr("size","sm");this.root.innerHTML=`<span class="badge variant-${i} size-${t}"><slot></slot></span>`}}d(zt,"observedAttributes",["variant","size"]),m("dv-badge",zt);class Lt extends h{static get componentStyles(){return`
      :host { display: inline-flex; flex-shrink: 0; }
      .avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface);
        border: none;
        color: var(--dv-text-primary);
        font-family: var(--dv-font-sans);
        font-weight: 600;
        user-select: none;
      }
      .size-sm { width: 28px; height: 28px; font-size: 11px; border-radius: var(--dv-radius-xs); }
      .size-md { width: 36px; height: 36px; font-size: 13px; border-radius: var(--dv-radius-sm); }
      .size-lg { width: 44px; height: 44px; font-size: 15px; border-radius: var(--dv-radius-md); }
      .size-xl { width: 56px; height: 56px; font-size: 18px; border-radius: var(--dv-radius-md); }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    `}getInitials(i){const t=i.trim().split(/\s+/).filter(Boolean);return t.length===0?"?":t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+t[1][0]).toUpperCase()}render(){const i=this.attr("src"),t=this.attr("alt",this.attr("name","Avatar")),e=this.attr("name",""),r=this.attr("size","md");if(i)this.root.innerHTML=`<div class="avatar size-${r}"><img src="${c(i)}" alt="${c(t)}" /></div>`;else{const a=this.getInitials(e);this.root.innerHTML=`<div class="avatar size-${r}" aria-label="${c(t)}">${c(a)}</div>`}}}d(Lt,"observedAttributes",["src","alt","name","size"]),m("dv-avatar",Lt);class Et extends h{static get componentStyles(){return`
      :host { display: block; }
      :host([orientation='vertical']) { display: inline-block; align-self: stretch; }
      .line {
        background: var(--dv-border);
      }
      .horizontal {
        width: 100%;
        height: 1px;
      }
      .vertical {
        width: 1px;
        height: 100%;
        min-height: 16px;
      }
      .sp-none.horizontal { margin-block: 0; }
      .sp-sm.horizontal { margin-block: var(--dv-space-2); }
      .sp-md.horizontal { margin-block: var(--dv-space-4); }
      .sp-lg.horizontal { margin-block: var(--dv-space-6); }

      .sp-none.vertical { margin-inline: 0; }
      .sp-sm.vertical { margin-inline: var(--dv-space-2); }
      .sp-md.vertical { margin-inline: var(--dv-space-4); }
      .sp-lg.vertical { margin-inline: var(--dv-space-6); }
    `}render(){const i=this.attr("orientation","horizontal"),t=this.attr("spacing","md");this.root.innerHTML=`<div class="line ${i} sp-${t}" role="separator" aria-orientation="${i}"></div>`}}d(Et,"observedAttributes",["orientation","spacing"]),m("dv-divider",Et);class Ct extends h{static get componentStyles(){return`
      :host { display: block; }
      .stack { display: flex; flex-direction: column; gap: var(--dv-space-2); }
      .row { display: flex; align-items: center; gap: var(--dv-space-3); }
      .card-box {
        display: flex;
        flex-direction: column;
        gap: var(--dv-space-3);
        padding: var(--dv-space-4);
        background: var(--dv-surface);
        border: none;
        border-radius: var(--dv-radius-md);
      }
      .skeleton {
        background: var(--dv-skeleton-base);
        border-radius: var(--dv-radius-sm);
        animation: dv-pulse 1.4s ease-in-out infinite;
      }
      .variant-text { height: 14px; border-radius: var(--dv-radius-xs); }
      .variant-rect { border-radius: var(--dv-radius-md); }
      .variant-circle { border-radius: 50%; flex-shrink: 0; }

      @keyframes dv-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.45; }
      }
    `}render(){const i=this.attr("preset");if(i==="profile"){this.root.innerHTML=`
        <div class="row" aria-hidden="true">
          <div class="skeleton variant-circle" style="width:40px;height:40px;"></div>
          <div class="stack" style="flex:1">
            <div class="skeleton variant-text" style="width:45%;"></div>
            <div class="skeleton variant-text" style="width:70%;"></div>
          </div>
        </div>
      `;return}if(i==="card"){this.root.innerHTML=`
        <div class="card-box" aria-hidden="true">
          <div class="skeleton variant-rect" style="width:100%;height:120px;"></div>
          <div class="skeleton variant-text" style="width:60%;"></div>
          <div class="skeleton variant-text" style="width:90%;"></div>
          <div class="skeleton variant-text" style="width:40%;"></div>
        </div>
      `;return}if(i==="article"){this.root.innerHTML=`
        <div class="stack" aria-hidden="true">
          <div class="skeleton variant-text" style="width:55%;height:20px;"></div>
          <div class="skeleton variant-text" style="width:100%;"></div>
          <div class="skeleton variant-text" style="width:94%;"></div>
          <div class="skeleton variant-text" style="width:72%;"></div>
        </div>
      `;return}const t=this.numAttr("lines",0);if(t>1){const n=Array.from({length:t},(s,o)=>o===t-1?"65%":o%2===1?"92%":"100%");this.root.innerHTML=`
        <div class="stack" aria-hidden="true">
          ${n.map(s=>`<div class="skeleton variant-text" style="width:${s};"></div>`).join("")}
        </div>
      `;return}const e=this.attr("variant","text"),r=this.attr("width","100%"),a=this.attr("height",e==="circle"?r:e==="rect"?"80px":"14px");this.root.innerHTML=`<div class="skeleton variant-${e}" style="width:${r};height:${a}" aria-hidden="true"></div>`}}d(Ct,"observedAttributes",["variant","width","height","lines","preset"]),m("dv-skeleton",Ct);class Mt extends h{static get componentStyles(){return`
      :host { display: block; }
      .wrap {
        display: flex;
        flex-direction: column;
        gap: var(--dv-space-2);
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        font-size: var(--dv-text-sm);
        color: var(--dv-text-secondary);
      }
      .pct {
        font-variant-numeric: tabular-nums;
        color: var(--dv-text-primary);
        font-weight: 500;
      }
      .track {
        width: 100%;
        height: 8px;
        background: var(--dv-surface);
        border: none;
        border-radius: var(--dv-radius-xs);
        overflow: hidden;
      }
      .fill {
        height: 100%;
        background: var(--dv-accent);
        transform-origin: left center;
        transition: transform var(--dv-duration-base) var(--dv-ease);
      }
    `}render(){const i=Math.max(1,this.numAttr("max",100)),t=Math.min(i,Math.max(0,this.numAttr("value",0))),e=Math.round(t/i*100),r=this.attr("label"),a=this.boolAttr("show-value");this.root.innerHTML=`
      <div class="wrap">
        ${r||a?`<div class="header">
                <span>${c(r)}</span>
                ${a?`<span class="pct">${e}%</span>`:""}
              </div>`:""}
        <div class="track" role="progressbar" aria-valuenow="${t}" aria-valuemin="0" aria-valuemax="${i}">
          <div class="fill" style="transform: scaleX(${t/i})"></div>
        </div>
      </div>
    `}}d(Mt,"observedAttributes",["value","max","label","show-value"]),m("dv-progress",Mt);class Dt extends h{constructor(){super(...arguments);d(this,"_sortCol",-1);d(this,"_sortAsc",!0)}static get componentStyles(){return`
      :host {
        display: block;
        width: 100%;
        overflow-x: auto;
        border: none;
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface);
      }
      ::slotted(table) {
        width: 100%;
        border-collapse: collapse;
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        text-align: left;
        font-variant-numeric: tabular-nums;
      }
    `}onMount(){this.syncTableStyles()}sortByColumn(t){const e=this.querySelector("table"),r=e==null?void 0:e.querySelector("tbody");if(!r)return;this._sortCol===t?this._sortAsc=!this._sortAsc:(this._sortCol=t,this._sortAsc=!0);const a=Array.from(r.querySelectorAll("tr"));a.sort((n,s)=>{var y,x,w,k;const o=((x=(y=n.children[t])==null?void 0:y.textContent)==null?void 0:x.trim())??"",v=((k=(w=s.children[t])==null?void 0:w.textContent)==null?void 0:k.trim())??"",u=Number(o.replace(/[^\d.-]/g,"")),f=Number(v.replace(/[^\d.-]/g,"")),b=o!==""&&v!==""&&Number.isFinite(u)&&Number.isFinite(f)&&/\d/.test(o)&&/\d/.test(v)?u-f:o.localeCompare(v,"ru");return this._sortAsc?b:-b}),a.forEach(n=>r.appendChild(n)),this.syncTableStyles(),this.emit("dv-sort",{column:t,ascending:this._sortAsc})}syncTableStyles(){const t=this.querySelector("table");if(!t)return;const e=this.boolAttr("dense"),r=this.boolAttr("sortable"),a=e?"8px 12px":"12px 16px";t.style.width="100%",t.style.borderCollapse="collapse",t.style.fontVariantNumeric="tabular-nums",t.querySelectorAll("th").forEach((n,s)=>{n.style.padding=a,n.style.fontWeight="600",n.style.fontSize="var(--dv-text-xs)",n.style.color=s===this._sortCol?"var(--dv-text-primary)":"var(--dv-text-muted)",n.style.background="var(--dv-surface-hover)",n.style.whiteSpace="nowrap",r&&(n.style.cursor="pointer",n.style.userSelect="none",n.dataset.bound||(n.dataset.bound="1",n.addEventListener("click",()=>this.sortByColumn(s))))}),t.querySelectorAll("td").forEach(n=>{n.style.padding=a,n.style.color="var(--dv-text-primary)"}),t.querySelectorAll("tbody tr").forEach((n,s)=>{n.style.background=s%2===1?"var(--dv-surface-elevated)":"transparent"})}render(){this.root.innerHTML="<slot></slot>",this.syncTableStyles()}}d(Dt,"observedAttributes",["dense","sortable"]),m("dv-table",Dt);class Tt extends h{static get componentStyles(){return`
      :host { display: inline-flex; align-items: center; gap: var(--dv-space-2); }
      .spinner {
        border-radius: 50%;
        border: 2px solid var(--dv-border);
        border-top-color: var(--dv-text-primary);
        animation: dv-spin 0.65s linear infinite;
        flex-shrink: 0;
      }
      .size-sm { width: 14px; height: 14px; }
      .size-md { width: 20px; height: 20px; }
      .size-lg { width: 28px; height: 28px; border-width: 2.5px; }
      .label { font-size: var(--dv-text-sm); color: var(--dv-text-secondary); }
      @keyframes dv-spin {
        to { transform: rotate(360deg); }
      }
    `}render(){const i=this.attr("size","md"),t=this.attr("label");this.root.innerHTML=`
      <span class="spinner size-${i}" role="status" aria-label="${c(t||"Loading")}"></span>
      ${t?`<span class="label">${c(t)}</span>`:""}
    `}}d(Tt,"observedAttributes",["size","label"]),m("dv-spinner",Tt);class be extends h{static get componentStyles(){return`
      :host { display: inline-flex; }
      kbd {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 22px;
        height: 22px;
        padding: 0 6px;
        font-family: var(--dv-font-mono);
        font-size: 11px;
        font-weight: 500;
        line-height: 1;
        color: var(--dv-text-secondary);
        background: var(--dv-surface);
        border: none;
        border-radius: var(--dv-radius-xs);
      }
    `}render(){this.root.innerHTML="<kbd><slot></slot></kbd>"}}m("dv-kbd",be);class qt extends h{static get componentStyles(){return`
      :host { display: inline-flex; }
      .tag {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        height: 28px;
        padding: 0 10px;
        border-radius: var(--dv-radius-sm);
        border: none;
        background: var(--dv-surface);
        color: var(--dv-text-secondary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-xs);
        font-weight: 500;
        cursor: pointer;
        user-select: none;
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) var(--dv-ease);
      }
      .tag:hover:not(.disabled) { background: var(--dv-surface-hover); color: var(--dv-text-primary); }
      .tag.selected {
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
      }
      .tag.disabled { opacity: 0.45; cursor: not-allowed; }
      .remove {
        display: inline-flex;
        padding: 2px;
        margin-right: -4px;
        border: none;
        background: transparent;
        color: currentColor;
        opacity: 0.7;
        cursor: pointer;
        border-radius: 3px;
      }
      .remove:hover { opacity: 1; }
    `}render(){var r,a;const i=this.boolAttr("selected"),t=this.boolAttr("removable"),e=this.boolAttr("disabled");this.root.innerHTML=`
      <span class="tag ${i?"selected":""} ${e?"disabled":""}">
        <slot></slot>
        ${t?`<button type="button" class="remove" aria-label="Удалить тег" ${e?"disabled":""}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${g.x}</svg>
              </button>`:""}
      </span>
    `,(r=this.root.querySelector(".tag"))==null||r.addEventListener("click",n=>{if(e||n.target.closest(".remove"))return;const s=!this.boolAttr("selected");s?this.setAttribute("selected",""):this.removeAttribute("selected"),this.emit("dv-change",{selected:s})}),(a=this.root.querySelector(".remove"))==null||a.addEventListener("click",n=>{n.stopPropagation(),!e&&(this.emit("dv-remove"),this.remove())})}}d(qt,"observedAttributes",["selected","removable","disabled"]),m("dv-tag",qt);class jt extends h{static get componentStyles(){return`
      :host { display: block; }
      .box {
        position: relative;
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface);
        padding: var(--dv-space-4);
        overflow-x: auto;
      }
      .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: var(--dv-space-2);
      }
      .lang {
        font-family: var(--dv-font-mono);
        font-size: 11px;
        color: var(--dv-text-muted);
      }
      .copy {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 4px 8px;
        border: none;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-surface-elevated);
        color: var(--dv-text-secondary);
        font-family: var(--dv-font-sans);
        font-size: 12px;
        cursor: pointer;
      }
      .copy:hover { color: var(--dv-text-primary); background: var(--dv-surface-hover); }
      pre {
        margin: 0;
        font-family: var(--dv-font-mono);
        font-size: 13px;
        line-height: 1.55;
        color: var(--dv-text-primary);
        white-space: pre;
      }
    `}render(){var r;const i=this.attr("lang","html"),t=this.attr("code")||((r=this.textContent)==null?void 0:r.trim())||"";this.root.innerHTML=`
      <div class="box">
        <div class="head">
          <span class="lang">${c(i)}</span>
          <button type="button" class="copy">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${g.copy}</svg>
            <span>Копировать</span>
          </button>
        </div>
        <pre><code>${c(t)}</code></pre>
      </div>
    `;const e=this.root.querySelector(".copy");e.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(t);const a=e.querySelector("span");a&&(a.textContent="Скопировано",setTimeout(()=>{a.textContent="Копировать"},1500)),this.emit("dv-copy",{code:t})}catch{}})}}d(jt,"observedAttributes",["lang","code"]),m("dv-code",jt);class It extends h{static get componentStyles(){return`
      :host { display: block; }
      .stat {
        display: flex;
        flex-direction: column;
        gap: var(--dv-space-1);
        padding: var(--dv-space-4);
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface);
      }
      .label {
        font-size: var(--dv-text-xs);
        font-weight: 500;
        color: var(--dv-text-muted);
      }
      .row {
        display: flex;
        align-items: baseline;
        gap: var(--dv-space-3);
        flex-wrap: wrap;
      }
      .value {
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-h2);
        font-weight: 700;
        line-height: 1.15;
        font-variant-numeric: tabular-nums;
        color: var(--dv-text-primary);
      }
      .delta {
        font-size: var(--dv-text-xs);
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
      .trend-up { color: var(--dv-success); }
      .trend-down { color: var(--dv-danger); }
      .trend-neutral { color: var(--dv-text-muted); }
      .hint {
        font-size: var(--dv-text-xs);
        color: var(--dv-text-secondary);
      }
    `}render(){const i=this.attr("label",""),t=this.attr("value","0"),e=this.attr("delta",""),r=this.attr("trend","neutral"),a=this.attr("hint","");this.root.innerHTML=`
      <div class="stat">
        ${i?`<div class="label">${c(i)}</div>`:""}
        <div class="row">
          <span class="value">${c(t)}</span>
          ${e?`<span class="delta trend-${r}">${c(e)}</span>`:""}
        </div>
        ${a?`<div class="hint">${c(a)}</div>`:""}
      </div>
    `}}d(It,"observedAttributes",["label","value","delta","trend","hint"]),m("dv-stat",It);class Ht extends h{static get componentStyles(){return`
      :host { display: block; width: 100%; }
      ol {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
      }
      li {
        position: relative;
        display: grid;
        grid-template-columns: 32px 1fr;
        gap: var(--dv-space-3);
        padding-bottom: var(--dv-space-6);
      }
      .dense li {
        padding-bottom: var(--dv-space-4);
      }
      li:last-child {
        padding-bottom: 0;
      }
      .rail-col {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .marker {
        position: relative;
        z-index: 1;
        width: 32px;
        height: 32px;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: var(--dv-text-xs);
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        flex-shrink: 0;
      }
      .variant-minimal .marker {
        width: 24px;
        height: 24px;
        margin-top: 2px;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-surface-active);
      }
      .line {
        position: absolute;
        top: 38px;
        bottom: calc(var(--dv-space-6) * -1 + 6px);
        left: 50%;
        width: 2px;
        transform: translateX(-50%);
        background: var(--dv-surface-active);
        border-radius: 1px;
      }
      .dense .line {
        bottom: calc(var(--dv-space-4) * -1 + 6px);
      }
      .variant-minimal .line {
        top: 30px;
      }
      li:last-child .line {
        display: none;
      }

      .content {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding-top: 4px;
      }
      .top {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        justify-content: space-between;
        gap: var(--dv-space-2);
      }
      .title {
        font-size: var(--dv-text-sm);
        font-weight: 600;
        color: var(--dv-text-primary);
      }
      .time {
        font-size: var(--dv-text-xs);
        font-variant-numeric: tabular-nums;
        color: var(--dv-text-muted);
      }
      .desc {
        font-size: var(--dv-text-sm);
        line-height: var(--dv-leading-sm);
        color: var(--dv-text-secondary);
      }
    `}render(){let i=[];try{const r=JSON.parse(this.attr("items","[]"));Array.isArray(r)&&(i=r)}catch{i=[]}const t=this.attr("variant","icons"),e=this.boolAttr("dense");this.root.innerHTML=`
      <ol class="variant-${t} ${e?"dense":""}">
        ${i.map((r,a)=>{const n=r.icon&&g[r.icon]?g[r.icon]:g["check-circle"];return`
            <li>
              <div class="rail-col">
                <span class="marker" aria-hidden="true">${t==="numbered"||t==="minimal"?String(a+1):`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${n}</svg>`}</span>
                <span class="line" aria-hidden="true"></span>
              </div>
              <div class="content">
                <div class="top">
                  <span class="title">${c(r.title)}</span>
                  ${r.time?`<span class="time">${c(r.time)}</span>`:""}
                </div>
                ${r.description?`<div class="desc">${c(r.description)}</div>`:""}
              </div>
            </li>
          `}).join("")}
      </ol>
    `}}d(Ht,"observedAttributes",["items","variant","dense"]),m("dv-timeline",Ht);class Bt extends h{constructor(){super(...arguments);d(this,"_expanded",new Set);d(this,"_didInitExpand",!1)}static get componentStyles(){return`
      :host { display: block; width: 100%; }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .children {
        padding-left: 18px;
        margin-top: 2px;
        animation: dv-tree-in var(--dv-duration-fast) var(--dv-ease);
      }
      @keyframes dv-tree-in {
        from { opacity: 0; transform: translateY(-3px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .node-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        padding: 6px 10px;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: transparent;
        color: var(--dv-text-secondary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        cursor: pointer;
        text-align: left;
        transition: opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .node-btn:hover {
        background: var(--dv-surface);
        color: var(--dv-text-primary);
      }
      .node-btn.selected {
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        font-weight: 600;
      }
      .node-btn:focus-visible {
        outline: none;
        box-shadow: var(--dv-focus-ring);
      }
      .chev {
        width: 14px;
        height: 14px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--dv-text-muted);
        flex-shrink: 0;
        transition: transform var(--dv-duration-fast) var(--dv-ease);
      }
      .chev.open { transform: rotate(90deg); }
      .chev-spacer { width: 14px; flex-shrink: 0; }
      .icon { display: inline-flex; color: var(--dv-text-muted); flex-shrink: 0; }
    `}getItems(){try{const t=JSON.parse(this.attr("items","[]"));return Array.isArray(t)?t:[]}catch{return[]}}collectAllIds(t,e){var r;for(const a of t)(r=a.children)!=null&&r.length&&(e.add(a.id),this.collectAllIds(a.children,e))}attributeChangedCallback(t,e,r){if(t==="expand-all"&&(this._didInitExpand=!1),t==="selected"&&this.root.querySelector("ul")){const a=r??"";this.root.querySelectorAll(".node-btn").forEach(n=>{n.classList.toggle("selected",n.dataset.id===a)});return}super.attributeChangedCallback(t,e,r)}renderNodes(t,e,r){return`
      <ul>
        ${t.map(a=>{const n=!!(a.children&&a.children.length>0),s=this._expanded.has(a.id),o=r&&a.icon&&g[a.icon]?g[a.icon]:null;return`
            <li>
              <button
                type="button"
                class="node-btn ${a.id===e?"selected":""}"
                data-id="${c(a.id)}"
                data-has-children="${n}"
                aria-expanded="${n?String(s):"false"}"
              >
                ${n?`<span class="chev ${s?"open":""}" aria-hidden="true">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${g["chevron-right"]}</svg>
                      </span>`:'<span class="chev-spacer"></span>'}
                ${o?`<span class="icon" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${o}</svg></span>`:""}
                <span>${c(a.label)}</span>
              </button>
              ${n&&s?`<div class="children">${this.renderNodes(a.children,e,r)}</div>`:""}
            </li>
          `}).join("")}
      </ul>
    `}render(){var a;const t=this.getItems(),e=this.attr("selected",""),r=this.hasAttribute("show-icons")?this.boolAttr("show-icons"):!0;this._didInitExpand||(this._didInitExpand=!0,this._expanded.clear(),this.boolAttr("expand-all")?this.collectAllIds(t,this._expanded):(a=t[0])!=null&&a.id&&this._expanded.add(t[0].id)),this.root.innerHTML=this.renderNodes(t,e,r),this.root.querySelectorAll(".node-btn").forEach(n=>{n.addEventListener("click",()=>{const s=n.dataset.id??"";n.dataset.hasChildren==="true"?(this._expanded.has(s)?this._expanded.delete(s):this._expanded.add(s),this.setAttribute("selected",s),this.render()):this.setAttribute("selected",s),this.emit("dv-select",{id:s})})})}}d(Bt,"observedAttributes",["items","selected","expand-all","show-icons"]),m("dv-tree",Bt);class Yt extends h{static get componentStyles(){return`
      :host { display: inline-block; }
      .wrap {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 0.28em;
        font-family: var(--dv-font-display);
        font-size: var(--dv-text-h2);
        line-height: var(--dv-leading-h2);
        color: var(--dv-text-primary);
      }
      .wrap.by-chars { gap: 0; }
      .unit {
        display: inline-block;
        opacity: 0;
        filter: blur(8px);
        animation: dv-blur-in 420ms var(--dv-ease) forwards;
        animation-delay: var(--_d, 0ms);
      }
      .dir-top .unit { transform: translateY(-10px); }
      .dir-bottom .unit { transform: translateY(10px); }
      @keyframes dv-blur-in {
        to {
          opacity: 1;
          filter: blur(0px);
          transform: translateY(0);
        }
      }
    `}replay(){this.render()}render(){var n;const i=this.attr("text",((n=this.textContent)==null?void 0:n.trim())||"Diverlin UI Kit"),t=this.attr("by","words"),e=this.numAttr("delay",55),r=this.attr("direction","bottom"),a=t==="chars"?Array.from(i):i.split(/\s+/);this.root.innerHTML=`
      <span class="wrap by-${t} dir-${r}">
        ${a.map((s,o)=>{const v=s===" "?"&nbsp;":c(s);return`<span class="unit" style="--_d:${o*e}ms">${v}</span>`}).join("")}
      </span>
    `}}d(Yt,"observedAttributes",["text","by","delay","direction"]),m("dv-blur-text",Yt);class Nt extends h{static get componentStyles(){return`
      :host { display: inline-block; }
      .wrap {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 0.28em;
        font-family: var(--dv-font-display);
        font-size: var(--dv-text-h2);
        line-height: var(--dv-leading-h2);
        color: var(--dv-text-primary);
      }
      .wrap.by-chars { gap: 0; }
      .mask {
        display: inline-block;
        overflow: hidden;
        vertical-align: bottom;
      }
      .unit {
        display: inline-block;
        opacity: 0;
        transform: translateY(105%);
        animation: dv-split-up 380ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        animation-delay: var(--_d, 0ms);
      }
      @keyframes dv-split-up {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}replay(){this.render()}render(){var a;const i=this.attr("text",((a=this.textContent)==null?void 0:a.trim())||"Чистая типографика"),t=this.attr("by","chars"),e=this.numAttr("stagger",28),r=t==="words"?i.split(/\s+/):Array.from(i);this.root.innerHTML=`
      <span class="wrap by-${t}">
        ${r.map((n,s)=>{const o=n===" "?"&nbsp;":c(n);return`<span class="mask"><span class="unit" style="--_d:${s*e}ms">${o}</span></span>`}).join("")}
      </span>
    `}}d(Nt,"observedAttributes",["text","by","stagger"]),m("dv-split-text",Nt);const xe="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#*+=";class Ot extends h{constructor(){super(...arguments);d(this,"_timer",null)}static get componentStyles(){return`
      :host { display: inline-block; }
      .txt {
        font-family: var(--dv-font-mono);
        font-size: var(--dv-text-h3);
        font-weight: 600;
        color: var(--dv-text-primary);
        cursor: pointer;
        user-select: none;
      }
      .cipher {
        color: var(--dv-text-muted);
      }
    `}onUnmount(){this._timer&&window.clearInterval(this._timer)}scramble(){const t=this.attr("text","DIVERLIN_SYSTEM_READY"),e=Math.max(15,this.numAttr("speed",35)),r=this.root.querySelector(".txt");if(!r)return;this._timer&&window.clearInterval(this._timer);let a=0;this._timer=window.setInterval(()=>{const n=Array.from(t).map((s,o)=>{if(s===" ")return" ";if(o<Math.floor(a))return c(s);const v=xe[Math.floor(Math.random()*xe.length)];return`<span class="cipher">${c(v)}</span>`}).join("");r.innerHTML=n,a+=.5,a>=t.length&&(this._timer&&window.clearInterval(this._timer),r.textContent=t)},e)}render(){const t=this.attr("text","DIVERLIN_SYSTEM_READY"),e=this.attr("trigger","hover");this.root.innerHTML=`<span class="txt">${c(t)}</span>`;const r=this.root.querySelector(".txt");r.addEventListener("mouseenter",()=>{(e==="hover"||e==="both")&&this.scramble()}),r.addEventListener("click",()=>this.scramble()),(e==="mount"||e==="both")&&this.scramble()}}d(Ot,"observedAttributes",["text","trigger","speed"]),m("dv-decrypted-text",Ot);class Pt extends h{static get componentStyles(){return`
      :host { display: inline-block; }
      .roll {
        display: inline-flex;
        overflow: hidden;
        font-family: var(--dv-font-display);
        font-size: var(--dv-text-h2);
        line-height: 1.15;
        color: var(--dv-text-primary);
        cursor: pointer;
        user-select: none;
      }
      .cell {
        position: relative;
        display: inline-block;
        overflow: hidden;
        height: 1.15em;
      }
      .track {
        display: flex;
        flex-direction: column;
        transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
        transition-delay: var(--_d, 0ms);
      }
      .roll:hover .track {
        transform: translateY(-50%);
      }
      .ch {
        display: block;
        height: 1.15em;
        line-height: 1.15;
      }
    `}render(){const i=this.attr("text","Наведите курсор"),t=this.numAttr("stagger",16);this.root.innerHTML=`
      <span class="roll" aria-label="${c(i)}">
        ${Array.from(i).map((e,r)=>{const a=e===" "?"&nbsp;":c(e);return`
            <span class="cell" aria-hidden="true">
              <span class="track" style="--_d:${r*t}ms">
                <span class="ch">${a}</span>
                <span class="ch">${a}</span>
              </span>
            </span>
          `}).join("")}
      </span>
    `}}d(Pt,"observedAttributes",["text","stagger"]),m("dv-rolling-text",Pt);class Xt extends h{constructor(){super(...arguments);d(this,"_idx",0);d(this,"_timer",null)}static get componentStyles(){return`
      :host { display: inline-block; }
      .row {
        display: inline-flex;
        align-items: center;
        gap: 0.35em;
        font-family: var(--dv-font-display);
        font-size: var(--dv-text-h2);
        color: var(--dv-text-primary);
      }
      .pill {
        display: inline-flex;
        align-items: center;
        padding: 4px 14px;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        overflow: hidden;
      }
      .word {
        display: inline-block;
        animation: dv-rot-in 260ms cubic-bezier(0.22, 1, 0.36, 1);
      }
      @keyframes dv-rot-in {
        from { opacity: 0; transform: translateY(65%); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}onUnmount(){this._timer&&window.clearInterval(this._timer)}getWords(){try{const t=JSON.parse(this.attr("words",'["Быстрый","Чистый","Точный"]'));return Array.isArray(t)&&t.length?t.map(String):["Быстрый"]}catch{return["Быстрый","Чистый","Точный"]}}render(){this._timer&&window.clearInterval(this._timer);const t=this.attr("prefix","Интерфейс:"),e=this.getWords(),r=Math.max(800,this.numAttr("interval",2200));this._idx=0,this.root.innerHTML=`
      <span class="row">
        ${t?`<span>${c(t)}</span>`:""}
        <span class="pill"><span class="word">${c(e[0])}</span></span>
      </span>
    `;const a=this.root.querySelector(".pill");this._timer=window.setInterval(()=>{this._idx=(this._idx+1)%e.length,a.innerHTML=`<span class="word">${c(e[this._idx])}</span>`},r)}}d(Xt,"observedAttributes",["prefix","words","interval"]),m("dv-rotating-text",Xt);class Ft extends h{constructor(){super(...arguments);d(this,"_raf",null)}static get componentStyles(){return`
      :host { display: inline-block; }
      .num {
        font-family: var(--dv-font-display);
        font-size: var(--dv-text-display);
        font-variant-numeric: tabular-nums;
        color: var(--dv-text-primary);
      }
    `}onUnmount(){this._raf&&cancelAnimationFrame(this._raf)}replay(){this.startCount()}formatNum(t){return Math.round(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}startCount(){this._raf&&cancelAnimationFrame(this._raf);const t=this.numAttr("from",0),e=this.numAttr("to",1280),r=Math.max(200,this.numAttr("duration",1200)),a=this.attr("prefix",""),n=this.attr("suffix",""),s=this.root.querySelector(".val");if(!s)return;const o=performance.now(),v=u=>{const f=Math.min(1,(u-o)/r),b=1-Math.pow(1-f,3),y=t+(e-t)*b;s.textContent=`${a}${this.formatNum(y)}${n}`,f<1&&(this._raf=requestAnimationFrame(v))};this._raf=requestAnimationFrame(v)}render(){const t=this.attr("prefix",""),e=this.attr("suffix",""),r=this.numAttr("from",0);this.root.innerHTML=`<span class="num"><span class="val">${c(t+this.formatNum(r)+e)}</span></span>`,this.startCount()}}d(Ft,"observedAttributes",["from","to","duration","prefix","suffix"]),m("dv-count-up",Ft);class Rt extends h{constructor(){super(...arguments);d(this,"_activeIdx",0);d(this,"_timer",null)}static get componentStyles(){return`
      :host { display: inline-block; }
      .stage {
        position: relative;
        display: inline-flex;
        flex-wrap: wrap;
        gap: 0.45em;
        padding: 8px 12px;
        font-family: var(--dv-font-display);
        font-size: var(--dv-text-h2);
        color: var(--dv-text-primary);
      }
      .word {
        position: relative;
        z-index: 1;
        padding: 2px 6px;
        cursor: pointer;
        filter: blur(3.5px);
        opacity: 0.42;
        transition: filter 220ms var(--dv-ease), opacity 220ms var(--dv-ease);
      }
      .word.active {
        filter: blur(0px);
        opacity: 1;
      }
      .box {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-surface);
        pointer-events: none;
        transition:
          transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
          width 220ms cubic-bezier(0.22, 1, 0.36, 1),
          height 220ms cubic-bezier(0.22, 1, 0.36, 1);
      }
    `}onUnmount(){this._timer&&window.clearInterval(this._timer)}syncBox(){const t=this.root.querySelectorAll(".word"),e=this.root.querySelector(".box");t.forEach((a,n)=>a.classList.toggle("active",n===this._activeIdx));const r=t[this._activeIdx];r&&e&&(e.style.width=`${r.offsetWidth}px`,e.style.height=`${r.offsetHeight}px`,e.style.transform=`translate(${r.offsetLeft}px, ${r.offsetTop}px)`)}render(){this._timer&&window.clearInterval(this._timer);const t=this.attr("text","Фокус На Важном Слове"),e=this.attr("mode","hover"),r=Math.max(900,this.numAttr("interval",1600)),a=t.split(/\s+/).filter(Boolean);this._activeIdx=0,this.root.innerHTML=`
      <div class="stage">
        <div class="box" aria-hidden="true"></div>
        ${a.map((n,s)=>`<span class="word ${s===0?"active":""}" data-idx="${s}">${c(n)}</span>`).join("")}
      </div>
    `,requestAnimationFrame(()=>this.syncBox()),this.root.querySelectorAll(".word").forEach(n=>{n.addEventListener("mouseenter",()=>{this._activeIdx=Number(n.dataset.idx??0),this.syncBox()})}),e==="auto"&&(this._timer=window.setInterval(()=>{this._activeIdx=(this._activeIdx+1)%a.length,this.syncBox()},r))}}d(Rt,"observedAttributes",["text","mode","interval"]),m("dv-true-focus",Rt);class Kt extends h{constructor(){super(...arguments);d(this,"_timer",null)}static get componentStyles(){return`
      :host { display: inline-block; }
      .wrap {
        display: inline-flex;
        align-items: center;
        font-family: var(--dv-font-mono);
        font-size: var(--dv-text-h3);
        font-weight: 600;
        color: var(--dv-text-primary);
      }
      .cursor {
        display: inline-block;
        width: 2px;
        height: 1.15em;
        margin-left: 3px;
        background: var(--dv-accent);
        animation: dv-blink 0.9s steps(2, start) infinite;
      }
      @keyframes dv-blink {
        to { opacity: 0; }
      }
    `}onUnmount(){this._timer&&window.clearTimeout(this._timer)}getWords(){try{const t=JSON.parse(this.attr("words",'["Web Components","Pure CSS Tokens","Zero Dependencies"]'));return Array.isArray(t)&&t.length?t.map(String):["Diverlin UI"]}catch{return["Diverlin UI"]}}render(){this._timer&&window.clearTimeout(this._timer);const t=this.getWords(),e=Math.max(25,this.numAttr("speed",70)),r=this.hasAttribute("loop")?this.boolAttr("loop"):!0;this.root.innerHTML=`<span class="wrap"><span class="txt">${c(t[0])}</span><span class="cursor" aria-hidden="true"></span></span>`;const a=this.root.querySelector(".txt");let n=0,s=0,o=!1;const v=()=>{const u=t[n];if(o)s--,a.textContent=u.slice(0,s),s<=0&&(o=!1,n=(n+1)%t.length);else if(s++,a.textContent=u.slice(0,s),s>=u.length){if(!r&&n===t.length-1)return;o=!0,this._timer=window.setTimeout(v,1100);return}this._timer=window.setTimeout(v,o?e/2:e)};a.textContent="",this._timer=window.setTimeout(v,e)}}d(Kt,"observedAttributes",["words","speed","loop"]),m("dv-typewriter",Kt);class Ut extends h{static get componentStyles(){return`
      :host { display: inline-flex; align-items: center; justify-content: center; }
      .ring {
        position: relative;
        width: calc(var(--_r, 64px) * 2 + 28px);
        height: calc(var(--_r, 64px) * 2 + 28px);
        border-radius: 50%;
        animation: dv-ring-spin var(--_spd, 14s) linear infinite;
        cursor: pointer;
        user-select: none;
      }
      .ring:hover {
        animation-duration: calc(var(--_spd, 14s) * 0.45);
      }
      .ch {
        position: absolute;
        left: 50%;
        top: 50%;
        font-family: var(--dv-font-mono);
        font-size: 12px;
        font-weight: 600;
        color: var(--dv-text-primary);
        transform-origin: 0 0;
      }
      @keyframes dv-ring-spin {
        to { transform: rotate(360deg); }
      }
    `}render(){const i=this.attr("text","DIVERLIN UI KIT • WEB COMPONENTS • "),t=i.endsWith(" ")?i:`${i} • `,e=this.numAttr("radius",62),r=Math.max(4,this.numAttr("speed",14)),a=Array.from(t),n=360/Math.max(1,a.length);this.root.innerHTML=`
      <div class="ring" style="--_r:${e}px;--_spd:${r}s" aria-label="${c(i)}">
        ${a.map((s,o)=>`<span class="ch" style="transform: rotate(${(o*n).toFixed(2)}deg) translateY(-${e}px) translateX(-50%)" aria-hidden="true">${c(s)}</span>`).join("")}
      </div>
    `}}d(Ut,"observedAttributes",["text","radius","speed"]),m("dv-circular-text",Ut);class Vt extends h{static get componentStyles(){return`
      :host { display: inline-block; }
      .wrap {
        display: inline-flex;
        flex-wrap: wrap;
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-h1);
        line-height: 1.2;
        color: var(--dv-text-primary);
        cursor: default;
        user-select: none;
      }
      .ch {
        display: inline-block;
        font-weight: 400;
        transform: scale(1);
        transition: transform 90ms linear, opacity 90ms linear;
        opacity: 0.72;
      }
    `}render(){const i=this.attr("text","Наведите курсор на буквы"),t=Math.max(40,this.numAttr("radius",110));this.root.innerHTML=`
      <div class="wrap" aria-label="${c(i)}">
        ${Array.from(i).map(a=>`<span class="ch" aria-hidden="true">${a===" "?"&nbsp;":c(a)}</span>`).join("")}
      </div>
    `;const e=this.root.querySelector(".wrap"),r=Array.from(this.root.querySelectorAll(".ch"));e.addEventListener("pointermove",a=>{r.forEach(n=>{const s=n.getBoundingClientRect(),o=s.left+s.width/2,v=s.top+s.height/2,u=Math.hypot(a.clientX-o,a.clientY-v),f=Math.max(0,1-u/t),b=Math.round(400+f*300),y=(1+f*.24).toFixed(3),x=(.72+f*.28).toFixed(2);n.style.fontWeight=String(b),n.style.transform=`translateY(${(-f*4).toFixed(1)}px) scale(${y})`,n.style.opacity=x})}),e.addEventListener("pointerleave",()=>{r.forEach(a=>{a.style.fontWeight="400",a.style.transform="scale(1)",a.style.opacity="0.72"})})}}d(Vt,"observedAttributes",["text","radius"]),m("dv-variable-proximity",Vt);class Wt extends h{static get componentStyles(){return`
      :host { display: inline-block; }
      .wrap {
        display: inline-flex;
        align-items: baseline;
        font-family: var(--dv-font-display);
        font-size: var(--dv-text-h1);
        line-height: 1.2;
        color: var(--dv-text-primary);
        user-select: none;
        cursor: pointer;
      }
      .ch {
        display: inline-block;
        transform-origin: bottom center;
        transition: transform 80ms linear;
      }
    `}render(){const i=this.attr("text","PRESSURE WAVE"),t=Math.max(50,this.numAttr("radius",130));this.root.innerHTML=`
      <div class="wrap" aria-label="${c(i)}">
        ${Array.from(i).map(a=>`<span class="ch" aria-hidden="true">${a===" "?"&nbsp;":c(a)}</span>`).join("")}
      </div>
    `;const e=this.root.querySelector(".wrap"),r=Array.from(this.root.querySelectorAll(".ch"));e.addEventListener("pointermove",a=>{r.forEach(n=>{const s=n.getBoundingClientRect(),o=s.left+s.width/2,v=Math.abs(a.clientX-o),u=Math.max(0,1-v/t),f=(1+u*.42).toFixed(3),b=(1-u*.14).toFixed(3);n.style.transform=`scale(${b}, ${f})`})}),e.addEventListener("pointerleave",()=>{r.forEach(a=>{a.style.transform="scale(1, 1)"})})}}d(Wt,"observedAttributes",["text","radius"]),m("dv-text-pressure",Wt);const ye="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";class Jt extends h{constructor(){super(...arguments);d(this,"_timer",null)}static get componentStyles(){return`
      :host { display: inline-block; }
      .board {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 4px;
        cursor: pointer;
        user-select: none;
      }
      .tile {
        position: relative;
        width: 32px;
        height: 42px;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        font-family: var(--dv-font-mono);
        font-size: 1.1rem;
        font-weight: 700;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-shadow: var(--dv-shadow-sm);
      }
      .tile::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        height: 1px;
        background: var(--dv-bg);
        opacity: 0.55;
      }
    `}onUnmount(){this._timer&&window.clearInterval(this._timer)}flip(){const t=this.attr("text","DEPARTURE 24").toUpperCase(),e=Math.max(20,this.numAttr("speed",40)),r=Array.from(this.root.querySelectorAll(".tile"));if(!r.length)return;this._timer&&window.clearInterval(this._timer);let a=0;this._timer=window.setInterval(()=>{a++;let n=!0;r.forEach((s,o)=>{const v=t[o]??" ";a>=o*2+6?s.textContent=v:(n=!1,s.textContent=ye[Math.floor(Math.random()*ye.length)])}),n&&this._timer&&window.clearInterval(this._timer)},e)}render(){const t=this.attr("text","DEPARTURE 24").toUpperCase();this.root.innerHTML=`
      <div class="board" role="button" tabindex="0" aria-label="${c(t)}">
        ${Array.from(t).map(r=>`<span class="tile" aria-hidden="true">${c(r)}</span>`).join("")}
      </div>
    `;const e=this.root.querySelector(".board");e.addEventListener("click",()=>this.flip()),e.addEventListener("mouseenter",()=>this.flip()),this.flip()}}d(Jt,"observedAttributes",["text","speed"]),m("dv-split-flap",Jt);class Gt extends h{static get componentStyles(){return`
      :host { display: inline-block; }
      .shiny {
        font-family: var(--dv-font-display);
        font-size: var(--dv-text-h2);
        background: linear-gradient(
          110deg,
          var(--dv-text-muted) 25%,
          var(--dv-text-primary) 50%,
          var(--dv-text-muted) 75%
        );
        background-size: 200% 100%;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: dv-shine var(--_spd, 3s) linear infinite;
      }
      @keyframes dv-shine {
        from { background-position: 100% 0; }
        to { background-position: -100% 0; }
      }
    `}render(){const i=this.attr("text","Хромированный тональный блик"),t=Math.max(1,this.numAttr("speed",3));this.root.innerHTML=`<span class="shiny" style="--_spd:${t}s">${c(i)}</span>`}}d(Gt,"observedAttributes",["text","speed"]),m("dv-shiny-text",Gt);class Zt extends h{static get componentStyles(){return`
      :host { display: inline-block; }
      .stage {
        position: relative;
        display: inline-block;
        padding: 16px 24px;
        font-family: var(--dv-font-display);
        font-size: var(--dv-text-h1);
        color: var(--dv-text-primary);
        cursor: pointer;
        user-select: none;
      }
      .layer {
        position: absolute;
        inset: 16px 24px;
        pointer-events: none;
        color: var(--dv-text-muted);
        transition: transform 120ms cubic-bezier(0.22, 1, 0.36, 1);
      }
      .front {
        position: relative;
        z-index: 10;
      }
    `}render(){const i=this.attr("text","ECHO DEPTH"),t=Math.min(6,Math.max(2,this.numAttr("layers",4)));this.root.innerHTML=`
      <div class="stage">
        ${Array.from({length:t},(a,n)=>{const s=n+1,o=Math.max(.12,.45-n*.1).toFixed(2);return`<span class="layer" data-depth="${s}" style="opacity:${o};transform:translate(${s*3}px, ${s*3}px)" aria-hidden="true">${c(i)}</span>`}).join("")}
        <span class="front">${c(i)}</span>
      </div>
    `;const e=this.root.querySelector(".stage"),r=Array.from(this.root.querySelectorAll(".layer"));e.addEventListener("pointermove",a=>{const n=e.getBoundingClientRect(),s=(a.clientX-n.left)/n.width-.5,o=(a.clientY-n.top)/n.height-.5;r.forEach(v=>{const u=Number(v.dataset.depth??1);v.style.transform=`translate(${(s*u*18).toFixed(1)}px, ${(o*u*18).toFixed(1)}px)`})}),e.addEventListener("pointerleave",()=>{r.forEach(a=>{const n=Number(a.dataset.depth??1);a.style.transform=`translate(${n*3}px, ${n*3}px)`})})}}d(Zt,"observedAttributes",["text","layers"]),m("dv-echo-text",Zt);class Qt extends h{static get componentStyles(){return`
      :host { display: block; width: 100%; overflow: hidden; }
      .stack {
        display: flex;
        flex-direction: column;
        gap: var(--dv-space-2);
        user-select: none;
      }
      .row {
        display: flex;
        overflow: hidden;
        gap: var(--dv-space-6);
      }
      .track {
        display: flex;
        gap: var(--dv-space-6);
        flex-shrink: 0;
        min-width: 100%;
        font-family: var(--dv-font-display);
        font-size: var(--dv-text-h2);
        color: var(--dv-text-primary);
        white-space: nowrap;
        animation: dv-vel-scroll var(--_spd, 16s) linear infinite;
      }
      .row.reverse .track {
        animation-direction: reverse;
        color: var(--dv-text-muted);
      }
      .stack:hover .track {
        animation-duration: calc(var(--_spd, 16s) * 0.45);
      }
      @keyframes dv-vel-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(calc(-100% - var(--dv-space-6))); }
      }
    `}render(){const i=this.attr("text","DIVERLIN DESIGN SYSTEM • ZERO RUNTIME •"),t=Math.max(4,this.numAttr("speed",16)),e=`<span>${c(i)}</span><span>${c(i)}</span>`;this.root.innerHTML=`
      <div class="stack" style="--_spd:${t}s">
        <div class="row">
          <div class="track">${e}</div>
          <div class="track" aria-hidden="true">${e}</div>
        </div>
        <div class="row reverse">
          <div class="track">${e}</div>
          <div class="track" aria-hidden="true">${e}</div>
        </div>
      </div>
    `}}d(Qt,"observedAttributes",["text","speed"]),m("dv-scroll-velocity",Qt);class te extends h{static get componentStyles(){return`
      :host { display: inline-block; }
      .mag {
        display: inline-block;
        transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
        will-change: transform;
      }
      .mag.tracking {
        transition: transform 60ms linear;
      }
    `}render(){const i=this.numAttr("strength",.35),t=this.boolAttr("disabled");if(this.root.innerHTML='<div class="mag"><slot></slot></div>',t)return;const e=this.root.querySelector(".mag");this.addEventListener("pointermove",r=>{const a=this.getBoundingClientRect(),n=a.left+a.width/2,s=a.top+a.height/2,o=(r.clientX-n)*i,v=(r.clientY-s)*i;e.classList.add("tracking"),e.style.transform=`translate3d(${o.toFixed(1)}px, ${v.toFixed(1)}px, 0)`}),this.addEventListener("pointerleave",()=>{e.classList.remove("tracking"),e.style.transform="translate3d(0, 0, 0)"})}}d(te,"observedAttributes",["strength","disabled"]),m("dv-magnetic",te);class ee extends h{static get componentStyles(){return`
      :host {
        display: block;
        --dv-surface: var(--dv-surface-elevated);
      }
      .card {
        position: relative;
        overflow: hidden;
        border-radius: var(--dv-radius-lg);
        background: var(--dv-card-bg);
        color: var(--dv-text-primary);
      }
      .pad-sm { padding: var(--dv-space-3); }
      .pad-md { padding: var(--dv-space-5); }
      .pad-lg { padding: var(--dv-space-6); }
      .spot {
        position: absolute;
        inset: 0;
        pointer-events: none;
        opacity: 0;
        transition: opacity var(--dv-duration-base) var(--dv-ease);
        background: radial-gradient(
          var(--_size, 240px) circle at var(--_x, 50%) var(--_y, 50%),
          var(--dv-surface-active),
          transparent 75%
        );
      }
      .card:hover .spot {
        opacity: 0.55;
      }
      .body {
        position: relative;
        z-index: 1;
      }
    `}render(){const i=this.numAttr("size",240),t=this.attr("padding","lg");this.root.innerHTML=`
      <div class="card pad-${t}" style="--_size:${i}px">
        <div class="spot" aria-hidden="true"></div>
        <div class="body"><slot></slot></div>
      </div>
    `;const e=this.root.querySelector(".card");e.addEventListener("pointermove",r=>{const a=e.getBoundingClientRect();e.style.setProperty("--_x",`${r.clientX-a.left}px`),e.style.setProperty("--_y",`${r.clientY-a.top}px`)})}}d(ee,"observedAttributes",["size","padding"]),m("dv-spotlight-card",ee);class re extends h{static get componentStyles(){return`
      :host {
        display: block;
        perspective: 900px;
        --dv-surface: var(--dv-surface-elevated);
      }
      .tilt {
        border-radius: var(--dv-radius-lg);
        background: var(--dv-card-bg);
        color: var(--dv-text-primary);
        transform-style: preserve-3d;
        transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
        will-change: transform;
      }
      .tilt.active {
        transition: transform 60ms linear;
      }
      .pad-sm { padding: var(--dv-space-3); }
      .pad-md { padding: var(--dv-space-5); }
      .pad-lg { padding: var(--dv-space-6); }
    `}render(){const i=this.numAttr("max-tilt",10),t=this.attr("padding","lg");this.root.innerHTML=`<div class="tilt pad-${t}"><slot></slot></div>`;const e=this.root.querySelector(".tilt");e.addEventListener("pointermove",r=>{const a=e.getBoundingClientRect(),n=(r.clientX-a.left)/a.width-.5,o=(-((r.clientY-a.top)/a.height-.5)*i*2).toFixed(2),v=(n*i*2).toFixed(2);e.classList.add("active"),e.style.transform=`rotateX(${o}deg) rotateY(${v}deg)`}),e.addEventListener("pointerleave",()=>{e.classList.remove("active"),e.style.transform="rotateX(0deg) rotateY(0deg)"})}}d(re,"observedAttributes",["max-tilt","padding"]),m("dv-tilt-card",re);class ae extends h{static get componentStyles(){return`
      :host { display: block; width: 100%; overflow: hidden; }
      .marquee {
        display: flex;
        overflow: hidden;
        width: 100%;
        gap: var(--dv-space-3);
      }
      .track {
        display: flex;
        align-items: center;
        gap: var(--dv-space-3);
        flex-shrink: 0;
        min-width: 100%;
        animation: dv-marquee-scroll var(--_dur, 18s) linear infinite;
      }
      .dir-right .track {
        animation-direction: reverse;
      }
      .pause:hover .track {
        animation-play-state: paused;
      }
      .pill {
        display: inline-flex;
        align-items: center;
        padding: 8px 16px;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        font-size: var(--dv-text-sm);
        font-weight: 500;
        white-space: nowrap;
      }
      @keyframes dv-marquee-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(calc(-100% - var(--dv-space-3))); }
      }
    `}getItems(){try{const i=JSON.parse(this.attr("items",'["Web Components","Pure CSS","Onest","Dela Gothic One","Zero Runtime Deps","Borderless UI"]'));return Array.isArray(i)&&i.length?i.map(String):["Diverlin UI"]}catch{return["Diverlin UI"]}}render(){const i=this.getItems(),t=Math.max(5,this.numAttr("speed",16)),e=this.attr("direction","left"),r=this.hasAttribute("pause-on-hover")?this.boolAttr("pause-on-hover"):!0,a=i.map(n=>`<span class="pill">${c(n)}</span>`).join("");this.root.innerHTML=`
      <div class="marquee dir-${e} ${r?"pause":""}" style="--_dur:${t}s">
        <div class="track">${a}</div>
        <div class="track" aria-hidden="true">${a}</div>
      </div>
    `}}d(ae,"observedAttributes",["items","speed","direction","pause-on-hover"]),m("dv-marquee",ae);class ie extends h{static get componentStyles(){return`
      :host { display: inline-flex; }
      .dock {
        display: inline-flex;
        align-items: flex-end;
        gap: 8px;
        height: 62px;
        padding: 8px 12px;
        border-radius: var(--dv-radius-lg);
        background: var(--dv-surface);
      }
      .item {
        position: relative;
        width: var(--_sz, 42px);
        height: var(--_sz, 42px);
        border: none;
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface-elevated);
        color: var(--dv-text-primary);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: var(--dv-shadow-sm);
        transition: width 110ms cubic-bezier(0.22, 1, 0.36, 1), height 110ms cubic-bezier(0.22, 1, 0.36, 1), transform 110ms var(--dv-ease);
      }
      .item:active { transform: scale(0.94); }
      .tip {
        position: absolute;
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%) translateY(4px);
        padding: 4px 8px;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
        font-family: var(--dv-font-sans);
        font-size: 11px;
        font-weight: 500;
        white-space: nowrap;
        pointer-events: none;
        opacity: 0;
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) var(--dv-ease);
      }
      .item:hover .tip {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
    `}getItems(){try{const i=JSON.parse(this.attr("items",'[{"id":"home","label":"Главная","icon":"home"},{"id":"search","label":"Поиск","icon":"search"},{"id":"layers","label":"Слои","icon":"layers"},{"id":"code","label":"Код","icon":"code"},{"id":"settings","label":"Настройки","icon":"settings"}]'));return Array.isArray(i)?i:[]}catch{return[]}}render(){const i=this.getItems(),t=this.numAttr("base-size",42),e=this.numAttr("max-size",58);this.root.innerHTML=`
      <div class="dock" role="toolbar" aria-label="Dock">
        ${i.map(n=>{const s=g[n.icon]??g.layers;return`
            <button type="button" class="item" data-id="${c(n.id)}" style="--_sz:${t}px" aria-label="${c(n.label)}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${s}</svg>
              <span class="tip" role="tooltip">${c(n.label)}</span>
            </button>
          `}).join("")}
      </div>
    `;const r=this.root.querySelector(".dock"),a=Array.from(this.root.querySelectorAll(".item"));r.addEventListener("pointermove",n=>{a.forEach(s=>{const o=s.getBoundingClientRect(),v=o.left+o.width/2,u=Math.abs(n.clientX-v),f=Math.max(0,1-u/110),b=t+(e-t)*f;s.style.setProperty("--_sz",`${b.toFixed(1)}px`)})}),r.addEventListener("pointerleave",()=>{a.forEach(n=>n.style.setProperty("--_sz",`${t}px`))}),a.forEach(n=>{n.addEventListener("click",()=>{this.emit("dv-select",{id:n.dataset.id??""})})})}}d(ie,"observedAttributes",["items","base-size","max-size"]),m("dv-dock",ie);class ne extends h{constructor(){super(...arguments);d(this,"_order",[])}static get componentStyles(){return`
      :host { display: block; width: 100%; max-width: 360px; }
      .deck {
        position: relative;
        height: 170px;
        width: 100%;
        cursor: pointer;
        user-select: none;
      }
      .card {
        position: absolute;
        inset: 0;
        height: 132px;
        padding: var(--dv-space-5);
        border-radius: var(--dv-radius-lg);
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-shadow-md);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition:
          transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
          opacity 260ms var(--dv-ease);
      }
      .top-row {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: var(--dv-space-2);
      }
      .title {
        font-size: var(--dv-text-h4);
        font-weight: 600;
        color: var(--dv-text-primary);
      }
      .meta {
        font-size: var(--dv-text-xs);
        font-variant-numeric: tabular-nums;
        color: var(--dv-text-muted);
      }
      .sub {
        font-size: var(--dv-text-sm);
        color: var(--dv-text-secondary);
      }
      .deck.fan:hover .card[data-pos='1'] {
        transform: translateY(22px) scale(0.96) rotate(-1.5deg) !important;
      }
      .deck.fan:hover .card[data-pos='2'] {
        transform: translateY(44px) scale(0.92) rotate(1.5deg) !important;
      }
    `}getItems(){try{const t=JSON.parse(this.attr("items",'[{"title":"Релиз v2.4","subtitle":"Нажмите на стопку для перелистывания","meta":"01 / 03"},{"title":"Токены поверхности","subtitle":"Безрамочный дизайн на полутонах","meta":"02 / 03"},{"title":"Локальные шрифты","subtitle":"Onest, Dela Gothic One и Montserrat","meta":"03 / 03"}]'));return Array.isArray(t)?t:[]}catch{return[]}}syncPositions(){const t=this.root.querySelectorAll(".card");t.forEach((e,r)=>{const a=this._order.indexOf(r);e.dataset.pos=String(a),e.style.zIndex=String(t.length-a),e.style.transform=`translateY(${a*12}px) scale(${1-a*.045})`,e.style.opacity=String(Math.max(.4,1-a*.2))})}render(){const t=this.getItems(),e=this.hasAttribute("fan-on-hover")?this.boolAttr("fan-on-hover"):!0;this._order=t.map((n,s)=>s),this.root.innerHTML=`
      <div class="deck ${e?"fan":""}" role="button" tabindex="0" aria-label="Стопка карточек, нажмите для смены">
        ${t.map(n=>`
          <div class="card">
            <div class="top-row">
              <span class="title">${c(n.title)}</span>
              ${n.meta?`<span class="meta">${c(n.meta)}</span>`:""}
            </div>
            ${n.subtitle?`<div class="sub">${c(n.subtitle)}</div>`:""}
          </div>
        `).join("")}
      </div>
    `,this.syncPositions();const r=this.root.querySelector(".deck"),a=()=>{if(this._order.length<=1)return;const n=this._order.shift();this._order.push(n),this.syncPositions(),this.emit("dv-change",{activeIndex:this._order[0]})};r.addEventListener("click",a),r.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),a())})}}d(ne,"observedAttributes",["items","fan-on-hover"]),m("dv-card-stack",ne);class se extends h{static get componentStyles(){return`
      :host { display: inline-flex; }
      .bar {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 5px;
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface);
      }
      .tab {
        display: inline-flex;
        align-items: center;
        gap: 0;
        height: 36px;
        padding: 0 10px;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: transparent;
        color: var(--dv-text-secondary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        font-weight: 500;
        cursor: pointer;
        overflow: hidden;
        transition:
          gap 200ms cubic-bezier(0.22, 1, 0.36, 1),
          padding 200ms cubic-bezier(0.22, 1, 0.36, 1),
          opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .tab:hover { color: var(--dv-text-primary); background: var(--dv-surface-hover); }
      .tab[aria-selected='true'] {
        gap: 8px;
        padding: 0 14px;
        background: var(--dv-surface-elevated);
        color: var(--dv-text-primary);
        box-shadow: var(--dv-shadow-sm);
      }
      .label {
        max-width: 0;
        opacity: 0;
        white-space: nowrap;
        overflow: hidden;
        transition:
          max-width 220ms cubic-bezier(0.22, 1, 0.36, 1),
          opacity 180ms var(--dv-ease);
      }
      .tab[aria-selected='true'] .label {
        max-width: 140px;
        opacity: 1;
      }
    `}getItems(){try{const i=JSON.parse(this.attr("items",'[{"id":"home","label":"Обзор","icon":"home"},{"id":"layers","label":"Компоненты","icon":"layers"},{"id":"code","label":"Сниппеты","icon":"code"},{"id":"settings","label":"Настройки","icon":"settings"}]'));return Array.isArray(i)?i:[]}catch{return[]}}attributeChangedCallback(i,t,e){if(i==="value"&&this.root.querySelector(".bar")){const r=e??"";this.root.querySelectorAll(".tab").forEach(a=>{a.setAttribute("aria-selected",String(a.dataset.id===r))});return}super.attributeChangedCallback(i,t,e)}render(){var e;const i=this.getItems(),t=this.attr("value",((e=i[0])==null?void 0:e.id)??"");this.root.innerHTML=`
      <div class="bar" role="tablist">
        ${i.map(r=>{const a=g[r.icon]??g.layers;return`
            <button
              type="button"
              class="tab"
              role="tab"
              data-id="${c(r.id)}"
              aria-selected="${r.id===t}"
              aria-label="${c(r.label)}"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${a}</svg>
              <span class="label">${c(r.label)}</span>
            </button>
          `}).join("")}
      </div>
    `,this.root.querySelectorAll(".tab").forEach(r=>{r.addEventListener("click",()=>{const a=r.dataset.id??"";this.setAttribute("value",a),this.emit("dv-change",{value:a})})})}}d(se,"observedAttributes",["items","value"]),m("dv-expandable-tabs",se);class oe extends h{constructor(){super(...arguments);d(this,"_dragging",!1);d(this,"_syncing",!1)}static get componentStyles(){return`
      :host { display: block; width: 100%; }
      .compare {
        position: relative;
        width: 100%;
        min-height: 200px;
        border-radius: var(--dv-radius-lg);
        overflow: hidden;
        user-select: none;
        touch-action: none;
        cursor: ew-resize;
        background: var(--dv-surface);
      }
      .layer {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .before {
        z-index: 2;
        background: var(--dv-surface-active);
        clip-path: inset(0 calc(100% - var(--_pos, 50%)) 0 0);
      }
      .after {
        z-index: 1;
        background: var(--dv-surface);
      }
      .handle {
        position: absolute;
        top: 0;
        bottom: 0;
        left: var(--_pos, 50%);
        z-index: 3;
        width: 2px;
        background: var(--dv-accent);
        transform: translateX(-50%);
        pointer-events: none;
      }
      .knob {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
        box-shadow: var(--dv-shadow-md);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        font-weight: 700;
      }
    `}attributeChangedCallback(t,e,r){var a;if(t==="value"&&this.root.querySelector(".compare")){if(this._syncing)return;const n=Math.min(100,Math.max(0,Number(r??50)));(a=this.root.querySelector(".compare"))==null||a.style.setProperty("--_pos",`${n}%`);return}super.attributeChangedCallback(t,e,r)}render(){const t=Math.min(100,Math.max(0,this.numAttr("value",50)));this.root.innerHTML=`
      <div class="compare" style="--_pos:${t}%" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${t}" aria-label="Сравнение до и после">
        <div class="layer before"><slot name="before"></slot></div>
        <div class="layer after"><slot name="after"></slot></div>
        <div class="handle" aria-hidden="true"><div class="knob">↔</div></div>
      </div>
    `;const e=this.root.querySelector(".compare"),r=n=>{const s=e.getBoundingClientRect();if(s.width<=0)return;const o=Math.round(Math.min(100,Math.max(0,(n-s.left)/s.width*100)));e.style.setProperty("--_pos",`${o}%`),e.setAttribute("aria-valuenow",String(o)),this._syncing=!0,this.setAttribute("value",String(o)),this._syncing=!1,this.emit("dv-change",{value:o})};e.addEventListener("pointerdown",n=>{this._dragging=!0,e.setPointerCapture(n.pointerId),r(n.clientX)}),e.addEventListener("pointermove",n=>{this._dragging&&r(n.clientX)});const a=n=>{this._dragging=!1,e.hasPointerCapture(n.pointerId)&&e.releasePointerCapture(n.pointerId)};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a)}}d(oe,"observedAttributes",["value"]),m("dv-compare-slider",oe);class de extends h{static get componentStyles(){return`
      :host { display: block; width: 100%; }
      .area {
        position: relative;
        overflow: hidden;
        min-height: 150px;
        padding: var(--dv-space-5);
        border-radius: var(--dv-radius-lg);
        background: var(--dv-card-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        user-select: none;
      }
      .burst {
        position: absolute;
        pointer-events: none;
        width: 0;
        height: 0;
      }
      .ray {
        position: absolute;
        left: -1px;
        top: -5px;
        width: 2px;
        height: 10px;
        border-radius: 1px;
        background: var(--dv-text-primary);
        transform: rotate(var(--_ang)) translateY(0);
        animation: dv-spark-out 420ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }
      @keyframes dv-spark-out {
        0% {
          opacity: 1;
          transform: rotate(var(--_ang)) translateY(-4px) scaleY(1);
        }
        100% {
          opacity: 0;
          transform: rotate(var(--_ang)) translateY(var(--_rad, -28px)) scaleY(0.2);
        }
      }
    `}render(){const i=Math.min(16,Math.max(4,this.numAttr("count",8))),t=Math.max(14,this.numAttr("radius",28));this.root.innerHTML='<div class="area"><slot></slot></div>';const e=this.root.querySelector(".area");e.addEventListener("pointerdown",r=>{const a=e.getBoundingClientRect(),n=r.clientX-a.left,s=r.clientY-a.top,o=document.createElement("div");o.className="burst",o.style.left=`${n}px`,o.style.top=`${s}px`;const v=360/i;for(let u=0;u<i;u++){const f=document.createElement("span");f.className="ray",f.style.setProperty("--_ang",`${u*v}deg`),f.style.setProperty("--_rad",`-${t}px`),o.appendChild(f)}e.appendChild(o),window.setTimeout(()=>o.remove(),450)})}}d(de,"observedAttributes",["count","radius"]),m("dv-click-spark",de);class le extends h{static get componentStyles(){return`
      :host { display: block; width: 100%; max-width: 340px; }
      .card {
        position: relative;
        overflow: hidden;
        min-height: 160px;
        padding: var(--dv-space-5);
        border-radius: var(--dv-radius-lg);
        background: var(--dv-card-bg);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 4px;
        cursor: pointer;
      }
      .grid {
        position: absolute;
        inset: 0;
        display: grid;
        grid-template-columns: repeat(var(--_cols, 10), 1fr);
        pointer-events: none;
      }
      .px {
        background: var(--dv-surface-active);
        opacity: 0;
        transition: opacity 220ms var(--dv-ease);
        transition-delay: var(--_d, 0ms);
      }
      .card:hover .px {
        opacity: 0.42;
      }
      .content {
        position: relative;
        z-index: 2;
      }
      .title {
        font-size: var(--dv-text-h4);
        font-weight: 600;
        color: var(--dv-text-primary);
      }
      .sub {
        font-size: var(--dv-text-sm);
        color: var(--dv-text-secondary);
      }
    `}render(){const i=this.attr("title","Pixel Transition"),t=this.attr("subtitle","Наведите курсор для волнового заполнения сетки"),e=Math.min(16,Math.max(6,this.numAttr("cols",10))),a=e*6,n=Array.from({length:a},(s,o)=>{const v=Math.floor(o/e),u=o%e;return`<span class="px" style="--_d:${(v+u)*18}ms"></span>`}).join("");this.root.innerHTML=`
      <div class="card" style="--_cols:${e}">
        <div class="grid" aria-hidden="true">${n}</div>
        <div class="content">
          <div class="title">${c(i)}</div>
          ${t?`<div class="sub">${c(t)}</div>`:""}
        </div>
      </div>
    `}}d(le,"observedAttributes",["title","subtitle","cols"]),m("dv-pixel-card",le);class ce extends h{static get componentStyles(){return`
      :host { display: block; width: 100%; max-width: 380px; }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        border: none;
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        font-weight: 500;
        cursor: pointer;
        text-align: left;
        opacity: 0;
        transform: translateY(8px);
        animation: dv-alist-in 260ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        animation-delay: var(--_d, 0ms);
        transition: transform var(--dv-duration-fast) var(--dv-ease);
      }
      .item:hover {
        background: var(--dv-surface-hover);
        transform: translateX(4px);
      }
      .item[aria-selected='true'] {
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
      }
      .idx {
        font-family: var(--dv-font-mono);
        font-size: 11px;
        opacity: 0.65;
      }
      @keyframes dv-alist-in {
        to { opacity: 1; transform: translateY(0); }
      }
    `}getItems(){try{const i=JSON.parse(this.attr("items",'["Архитектура токенов","Локальные шрифты woff2","Нативные Web Components","Безрамочные поверхности"]'));return Array.isArray(i)?i.map(String):[]}catch{return[]}}render(){const i=this.getItems(),t=this.attr("selected",i[0]??"");this.root.innerHTML=`
      <ul role="listbox">
        ${i.map((e,r)=>`
          <li>
            <button
              type="button"
              class="item"
              role="option"
              data-val="${c(e)}"
              aria-selected="${e===t}"
              style="--_d:${r*55}ms"
            >
              <span>${c(e)}</span>
              <span class="idx">0${r+1}</span>
            </button>
          </li>
        `).join("")}
      </ul>
    `,this.root.querySelectorAll(".item").forEach(e=>{e.addEventListener("click",()=>{const r=e.dataset.val??"";this.root.querySelectorAll(".item").forEach(a=>{a.setAttribute("aria-selected",String(a===e))}),this.emit("dv-select",{value:r})})})}}d(ce,"observedAttributes",["items","selected"]),m("dv-animated-list",ce);class ve extends h{static get componentStyles(){return`
      :host { display: inline-block; }
      .wrap {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        gap: var(--dv-space-3);
        cursor: pointer;
        user-select: none;
        padding-top: 24px;
      }
      .folder {
        position: relative;
        width: 118px;
        height: 86px;
      }
      .back {
        position: absolute;
        inset: 0;
        border-radius: 10px;
        background: var(--dv-surface-active);
      }
      .tab {
        position: absolute;
        top: -10px;
        left: 0;
        width: 44px;
        height: 16px;
        border-radius: 6px 6px 0 0;
        background: var(--dv-surface-active);
      }
      .sheet {
        position: absolute;
        left: 12px;
        right: 12px;
        bottom: 10px;
        height: 64px;
        border-radius: 6px;
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-shadow-sm);
        transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
      }
      .s1 { z-index: 1; }
      .s2 { z-index: 2; }
      .s3 { z-index: 3; }
      .front {
        position: absolute;
        inset: 14px 0 0 0;
        z-index: 4;
        border-radius: 10px;
        background: var(--dv-accent);
        transform-origin: bottom center;
        transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
      }
      .wrap:hover .s1,
      .wrap.open .s1 {
        transform: translate(-18px, -28px) rotate(-10deg);
      }
      .wrap:hover .s2,
      .wrap.open .s2 {
        transform: translate(0px, -34px) rotate(0deg);
      }
      .wrap:hover .s3,
      .wrap.open .s3 {
        transform: translate(18px, -28px) rotate(10deg);
      }
      .wrap:hover .front,
      .wrap.open .front {
        transform: scaleY(0.86);
      }
      .label {
        font-size: var(--dv-text-sm);
        font-weight: 500;
        color: var(--dv-text-primary);
      }
    `}render(){const i=this.attr("label","Проект Diverlin"),t=this.boolAttr("open");this.root.innerHTML=`
      <div class="wrap ${t?"open":""}" role="button" tabindex="0" aria-expanded="${t}">
        <div class="folder">
          <div class="tab"></div>
          <div class="back"></div>
          <div class="sheet s1"></div>
          <div class="sheet s2"></div>
          <div class="sheet s3"></div>
          <div class="front"></div>
        </div>
        <span class="label">${c(i)}</span>
      </div>
    `,this.root.querySelector(".wrap").addEventListener("click",()=>{const r=!this.boolAttr("open");r?this.setAttribute("open",""):this.removeAttribute("open"),this.emit("dv-toggle",{open:r})})}}d(ve,"observedAttributes",["label","open"]),m("dv-folder",ve);class pe extends h{constructor(){super(...arguments);d(this,"_dragging",!1);d(this,"_done",!1)}static get componentStyles(){return`
      :host { display: inline-block; width: 100%; max-width: 280px; }
      .track {
        position: relative;
        height: 46px;
        width: 100%;
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        user-select: none;
        touch-action: none;
      }
      .text {
        font-size: var(--dv-text-sm);
        font-weight: 500;
        color: var(--dv-text-secondary);
        pointer-events: none;
      }
      .track.done .text {
        color: var(--dv-text-primary);
        font-weight: 600;
      }
      .thumb {
        position: absolute;
        top: 4px;
        left: 4px;
        width: 38px;
        height: 38px;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: grab;
        transform: translateX(var(--_x, 0px));
        transition: transform 200ms cubic-bezier(0.22, 1, 0.36, 1);
      }
      .thumb.dragging {
        transition: none;
        cursor: grabbing;
      }
    `}reset(){this._done=!1,this.render()}render(){const t=this.attr("label","Проведите для отправки"),e=this.attr("success-label","Отправлено");this.root.innerHTML=`
      <div class="track ${this._done?"done":""}">
        <span class="text">${c(this._done?e:t)}</span>
        <div class="thumb" role="slider" tabindex="0" aria-label="${c(t)}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${this._done?g.check:g["arrow-right"]}</svg>
        </div>
      </div>
    `;const r=this.root.querySelector(".track"),a=this.root.querySelector(".thumb");let n=0;a.addEventListener("pointerdown",o=>{if(this._done){this.reset();return}this._dragging=!0,n=o.clientX,a.classList.add("dragging"),a.setPointerCapture(o.pointerId)}),a.addEventListener("pointermove",o=>{if(!this._dragging)return;const v=Math.max(0,r.clientWidth-46),u=Math.min(v,Math.max(0,o.clientX-n));a.style.setProperty("--_x",`${u}px`),u>=v*.92&&(this._dragging=!1,this._done=!0,a.classList.remove("dragging"),a.style.setProperty("--_x",`${v}px`),this.root.querySelector(".text").textContent=e,a.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${g.check}</svg>`,r.classList.add("done"),this.emit("dv-confirm"))});const s=()=>{this._dragging&&(this._dragging=!1,a.classList.remove("dragging"),this._done||a.style.setProperty("--_x","0px"))};a.addEventListener("pointerup",s),a.addEventListener("pointercancel",s)}}d(pe,"observedAttributes",["label","success-label"]),m("dv-slide-button",pe);class ue extends h{constructor(){super(...arguments);d(this,"_lastX",0);d(this,"_lastY",0)}static get componentStyles(){return`
      :host { display: block; width: 100%; }
      .canvas {
        position: relative;
        overflow: hidden;
        min-height: 180px;
        border-radius: var(--dv-radius-lg);
        background: var(--dv-card-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        cursor: crosshair;
      }
      .hint {
        font-size: var(--dv-text-sm);
        color: var(--dv-text-muted);
        pointer-events: none;
      }
      .stamp {
        position: absolute;
        padding: 4px 10px;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-surface-elevated);
        color: var(--dv-text-primary);
        box-shadow: var(--dv-shadow-sm);
        font-family: var(--dv-font-mono);
        font-size: 11px;
        pointer-events: none;
        transform: translate(-50%, -50%) scale(1);
        animation: dv-trail-fade 520ms var(--dv-ease) forwards;
      }
      @keyframes dv-trail-fade {
        to {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.75) translateY(8px);
        }
      }
    `}render(){const t=this.attr("label","DIVERLIN");this.root.innerHTML=`
      <div class="canvas">
        <span class="hint">Поводите курсором внутри области</span>
      </div>
    `;const e=this.root.querySelector(".canvas");let r=1;e.addEventListener("pointermove",a=>{const n=e.getBoundingClientRect(),s=a.clientX-n.left,o=a.clientY-n.top;if(Math.hypot(s-this._lastX,o-this._lastY)<28)return;this._lastX=s,this._lastY=o;const v=document.createElement("span");v.className="stamp",v.style.left=`${s}px`,v.style.top=`${o}px`,v.textContent=`${t} #${String(r++).padStart(2,"0")}`,e.appendChild(v),window.setTimeout(()=>v.remove(),520)})}}return d(ue,"observedAttributes",["label"]),m("dv-cursor-trail",ue),p.DV_ICONS=g,p.DvAccordion=gt,p.DvAlert=pt,p.DvAnimatedList=ce,p.DvAppShell=rt,p.DvAspectRatio=at,p.DvAvatar=Lt,p.DvBadge=zt,p.DvBaseElement=h,p.DvBlurText=Yt,p.DvBottomSheet=$t,p.DvBreadcrumbs=ot,p.DvButton=D,p.DvButtonGroup=q,p.DvCard=et,p.DvCardStack=ne,p.DvCarousel=it,p.DvCheckbox=O,p.DvCircularText=Ut,p.DvClickSpark=de,p.DvCode=jt,p.DvColorPicker=V,p.DvCombobox=W,p.DvCommand=kt,p.DvCompareSlider=oe,p.DvConfirm=yt,p.DvContainer=Z,p.DvContextMenu=wt,p.DvCopyButton=I,p.DvCountUp=Ft,p.DvCursorTrail=ue,p.DvDatePicker=J,p.DvDecryptedText=Ot,p.DvDivider=Et,p.DvDock=ie,p.DvDrawer=ht,p.DvDropdown=mt,p.DvEchoText=Zt,p.DvEmpty=bt,p.DvExpandableTabs=se,p.DvField=H,p.DvFilePicker=U,p.DvFolder=ve,p.DvGrid=tt,p.DvHeading=At,p.DvIcon=_t,p.DvIconButton=T,p.DvInput=B,p.DvKbd=be,p.DvMagnetic=te,p.DvMarquee=ae,p.DvModal=ut,p.DvNavRail=vt,p.DvNumberInput=R,p.DvOtpInput=G,p.DvPagination=dt,p.DvPixelCard=le,p.DvPopover=xt,p.DvProgress=Mt,p.DvRadio=P,p.DvRollingText=Pt,p.DvRotatingText=Xt,p.DvScrollVelocity=Qt,p.DvSearch=K,p.DvSegmented=lt,p.DvSelect=N,p.DvShinyText=Gt,p.DvSkeleton=Ct,p.DvSlideButton=pe,p.DvSlider=F,p.DvSpinner=Tt,p.DvSplitFlap=Jt,p.DvSplitPane=nt,p.DvSplitText=Nt,p.DvSpotlightCard=ee,p.DvStack=Q,p.DvStat=It,p.DvSteps=ct,p.DvTable=Dt,p.DvTabs=st,p.DvTag=qt,p.DvText=St,p.DvTextPressure=Wt,p.DvTextarea=Y,p.DvThemeToggle=j,p.DvTiltCard=re,p.DvTimeline=Ht,p.DvToastContainer=ge,p.DvToggle=X,p.DvTooltip=ft,p.DvTree=Bt,p.DvTrueFocus=Rt,p.DvTypewriter=Kt,p.DvVariableProximity=Vt,p.confirmDialog=Te,p.defineElement=m,p.escapeHtml=c,p.getAccent=Se,p.getTheme=C,p.initAccent=_e,p.initTheme=ze,p.isDvAccent=z,p.isDvTheme=_,p.promptDialog=qe,p.setAccent=M,p.setTheme=S,p.showToast=De,p.watchSystemTheme=Le,Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}),p})({});
