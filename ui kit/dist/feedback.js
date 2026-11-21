var M = Object.defineProperty;
var K = (o, n, t) => n in o ? M(o, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[n] = t;
var s = (o, n, t) => K(o, typeof n != "symbol" ? n + "" : n, t);
import { d as p, a as u, D as l, e as d } from "./icons-D-sxLAgG.js";
class k extends u {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    var i;
    const n = this.attr("variant", "info"), t = this.attr("title"), r = this.boolAttr("dismissible"), a = n === "success" ? "check-circle" : n === "warning" ? "alert-triangle" : n === "danger" ? "alert-circle" : "info";
    this.root.innerHTML = `
      <div class="alert variant-${n}" role="alert">
        <span class="icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${l[a]}</svg>
        </span>
        <div class="body">
          ${t ? `<div class="title">${d(t)}</div>` : ""}
          <div class="desc"><slot></slot></div>
        </div>
        ${r ? `<button type="button" class="close" aria-label="Dismiss">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${l.x}</svg>
              </button>` : ""}
      </div>
    `, (i = this.root.querySelector(".close")) == null || i.addEventListener("click", () => {
      this.emit("dv-dismiss"), this.remove();
    });
  }
}
s(k, "observedAttributes", ["variant", "title", "dismissible"]);
p("dv-alert", k);
class j extends u {
  static get componentStyles() {
    return `
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
    `;
  }
  addToast(n) {
    var v;
    const { message: t, variant: r = "neutral", duration: a = 3500 } = n, i = this.root.querySelector(".list");
    if (!i) return;
    const e = document.createElement("div");
    e.className = `toast variant-${r}`, e.setAttribute("role", "status"), e.innerHTML = `
      <span>${d(t)}</span>
      <button type="button" aria-label="Close">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${l.x}</svg>
      </button>
    `;
    const c = () => e.remove();
    (v = e.querySelector("button")) == null || v.addEventListener("click", c), i.appendChild(e), a > 0 && window.setTimeout(c, a);
  }
  render() {
    this.root.querySelector(".list") || (this.root.innerHTML = '<div class="list" style="display:flex;flex-direction:column;gap:8px;"></div>');
  }
}
p("dv-toast-container", j);
function I(o) {
  if (typeof document > "u") return;
  let n = document.querySelector("dv-toast-container");
  n || (n = document.createElement("dv-toast-container"), document.body.appendChild(n)), n.addToast(o);
}
class w extends u {
  constructor() {
    super(...arguments);
    s(this, "_onKeyDown", (t) => {
      t.key === "Escape" && this.boolAttr("open") && this.close();
    });
  }
  static get componentStyles() {
    return `
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
    `;
  }
  onMount() {
    document.addEventListener("keydown", this._onKeyDown);
  }
  onUnmount() {
    document.removeEventListener("keydown", this._onKeyDown);
  }
  show() {
    this.setAttribute("open", "");
  }
  close() {
    this.removeAttribute("open"), this.emit("dv-close");
  }
  render() {
    var i, e;
    const t = this.boolAttr("open"), r = this.attr("title"), a = this.attr("size", "md");
    this.root.innerHTML = `
      <div class="backdrop ${t ? "open" : ""}">
        <div class="dialog size-${a}" role="dialog" aria-modal="true" aria-label="${d(r || "Dialog")}">
          <div class="header">
            <h2 class="title">${d(r)}</h2>
            <button type="button" class="close" aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${l.x}</svg>
            </button>
          </div>
          <div class="body"><slot></slot></div>
          <div class="footer"><slot name="footer"></slot></div>
        </div>
      </div>
    `, (i = this.root.querySelector(".close")) == null || i.addEventListener("click", () => this.close()), (e = this.root.querySelector(".backdrop")) == null || e.addEventListener("click", (c) => {
      c.target === c.currentTarget && this.close();
    });
  }
}
s(w, "observedAttributes", ["open", "title", "size"]);
p("dv-modal", w);
class A extends u {
  constructor() {
    super(...arguments);
    s(this, "_onKeyDown", (t) => {
      t.key === "Escape" && this.boolAttr("open") && this.close();
    });
  }
  static get componentStyles() {
    return `
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
    `;
  }
  onMount() {
    document.addEventListener("keydown", this._onKeyDown);
  }
  onUnmount() {
    document.removeEventListener("keydown", this._onKeyDown);
  }
  show() {
    this.setAttribute("open", "");
  }
  close() {
    this.removeAttribute("open"), this.emit("dv-close");
  }
  render() {
    var i, e;
    const t = this.boolAttr("open"), r = this.attr("title"), a = this.attr("side", "right");
    this.root.innerHTML = `
      <div class="backdrop ${t ? "open" : ""}">
        <div class="panel side-${a}" role="dialog" aria-modal="true" aria-label="${d(r || "Drawer")}">
          <div class="header">
            <h2 class="title">${d(r)}</h2>
            <button type="button" class="close" aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${l.x}</svg>
            </button>
          </div>
          <div class="body"><slot></slot></div>
        </div>
      </div>
    `, (i = this.root.querySelector(".close")) == null || i.addEventListener("click", () => this.close()), (e = this.root.querySelector(".backdrop")) == null || e.addEventListener("click", (c) => {
      c.target === c.currentTarget && this.close();
    });
  }
}
s(A, "observedAttributes", ["open", "title", "side"]);
p("dv-drawer", A);
class L extends u {
  constructor() {
    super(...arguments);
    s(this, "_onDocClick", (t) => {
      this.boolAttr("open") && !t.composedPath().includes(this) && this.removeAttribute("open");
    });
    s(this, "_onKeyDown", (t) => {
      t.key === "Escape" && this.boolAttr("open") && this.removeAttribute("open");
    });
  }
  static get componentStyles() {
    return `
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
    `;
  }
  onMount() {
    document.addEventListener("click", this._onDocClick), document.addEventListener("keydown", this._onKeyDown);
  }
  onUnmount() {
    document.removeEventListener("click", this._onDocClick), document.removeEventListener("keydown", this._onKeyDown);
  }
  render() {
    var a;
    const t = this.boolAttr("open"), r = this.attr("align", "left");
    this.root.innerHTML = `
      <div class="trigger"><slot name="trigger"></slot></div>
      <div class="menu align-${r} ${t ? "open" : ""}" role="menu">
        <slot></slot>
      </div>
    `, (a = this.root.querySelector(".trigger")) == null || a.addEventListener("click", () => {
      this.boolAttr("open") ? this.removeAttribute("open") : this.setAttribute("open", "");
    });
  }
}
s(L, "observedAttributes", ["open", "align"]);
p("dv-dropdown", L);
class E extends u {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const n = this.attr("text"), t = this.attr("position", "top");
    this.root.innerHTML = `
      <slot></slot>
      ${n ? `<span class="tip pos-${t}" role="tooltip">${d(n)}</span>` : ""}
    `;
  }
}
s(E, "observedAttributes", ["text", "position"]);
p("dv-tooltip", E);
class $ extends u {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    var r;
    const n = this.attr("title"), t = this.boolAttr("open");
    this.root.innerHTML = `
      <div class="item">
        <button type="button" aria-expanded="${t}">
          <span>${d(n)}</span>
          <span class="chevron" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${l["chevron-down"]}</svg>
          </span>
        </button>
        <div class="panel ${t ? "open" : ""}">
          <slot></slot>
        </div>
      </div>
    `, (r = this.root.querySelector("button")) == null || r.addEventListener("click", () => {
      this.boolAttr("open") ? this.removeAttribute("open") : this.setAttribute("open", ""), this.emit("dv-toggle", { open: this.boolAttr("open") });
    });
  }
}
s($, "observedAttributes", ["title", "open"]);
p("dv-accordion", $);
class _ extends u {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const n = this.attr("icon", "layers"), t = this.attr("title", "Нет данных"), r = this.attr("description"), a = l[n] ?? l.layers;
    this.root.innerHTML = `
      <div class="empty">
        <span class="icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${a}</svg>
        </span>
        <div class="title">${d(t)}</div>
        ${r ? `<div class="desc">${d(r)}</div>` : ""}
        <div class="actions"><slot></slot></div>
      </div>
    `;
  }
}
s(_, "observedAttributes", ["icon", "title", "description"]);
p("dv-empty", _);
class z extends u {
  constructor() {
    super(...arguments);
    s(this, "_onDocClick", (t) => {
      this.boolAttr("open") && !t.composedPath().includes(this) && this.removeAttribute("open");
    });
    s(this, "_onKeyDown", (t) => {
      t.key === "Escape" && this.boolAttr("open") && this.removeAttribute("open");
    });
  }
  static get componentStyles() {
    return `
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
    `;
  }
  onMount() {
    document.addEventListener("click", this._onDocClick), document.addEventListener("keydown", this._onKeyDown);
  }
  onUnmount() {
    document.removeEventListener("click", this._onDocClick), document.removeEventListener("keydown", this._onKeyDown);
  }
  render() {
    var r;
    const t = this.boolAttr("open");
    this.root.innerHTML = `
      <div class="trigger"><slot name="trigger"></slot></div>
      <div class="panel ${t ? "open" : ""}"><slot></slot></div>
    `, (r = this.root.querySelector(".trigger")) == null || r.addEventListener("click", () => {
      this.boolAttr("open") ? this.removeAttribute("open") : this.setAttribute("open", "");
    });
  }
}
s(z, "observedAttributes", ["open"]);
p("dv-popover", z);
class D extends u {
  constructor() {
    super(...arguments);
    s(this, "_onKeyDown", (t) => {
      t.key === "Escape" && this.boolAttr("open") && this.resolveCancel();
    });
  }
  static get componentStyles() {
    return `
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
    `;
  }
  onMount() {
    document.addEventListener("keydown", this._onKeyDown);
  }
  onUnmount() {
    document.removeEventListener("keydown", this._onKeyDown);
  }
  resolveCancel() {
    this.removeAttribute("open"), this.emit("dv-cancel");
  }
  resolveConfirm() {
    const t = this.root.querySelector(".prompt-input"), r = t ? t.value : void 0;
    this.removeAttribute("open"), this.emit("dv-confirm", { value: r });
  }
  render() {
    var b, x, g, y;
    const t = this.boolAttr("open"), r = this.attr("title", "Подтверждение"), a = this.attr("description", ""), i = this.attr("confirm-text", "Подтвердить"), e = this.attr("cancel-text", "Отмена"), c = this.attr("variant", "primary"), v = this.boolAttr("prompt"), m = this.attr("placeholder", ""), T = this.attr("value", "");
    this.root.innerHTML = `
      <div class="backdrop ${t ? "open" : ""}">
        <div class="dialog" role="alertdialog" aria-modal="true" aria-label="${d(r)}">
          <div class="head">
            <h2 class="title">${d(r)}</h2>
            <button type="button" class="close" aria-label="Закрыть">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${l.x}</svg>
            </button>
          </div>
          ${a ? `<p class="desc">${d(a)}</p>` : ""}
          ${v ? `<input type="text" class="prompt-input" placeholder="${d(m)}" value="${d(T)}" />` : ""}
          <div class="actions">
            <button type="button" class="btn btn-cancel">${d(e)}</button>
            <button type="button" class="btn btn-${c === "danger" ? "danger" : "primary"} btn-ok">${d(i)}</button>
          </div>
        </div>
      </div>
    `, (b = this.root.querySelector(".close")) == null || b.addEventListener("click", () => this.resolveCancel()), (x = this.root.querySelector(".btn-cancel")) == null || x.addEventListener("click", () => this.resolveCancel()), (g = this.root.querySelector(".btn-ok")) == null || g.addEventListener("click", () => this.resolveConfirm()), (y = this.root.querySelector(".backdrop")) == null || y.addEventListener("click", (h) => {
      h.target === h.currentTarget && this.resolveCancel();
    });
    const f = this.root.querySelector(".prompt-input");
    t && f && (requestAnimationFrame(() => f.focus()), f.addEventListener("keydown", (h) => {
      h.key === "Enter" && this.resolveConfirm();
    }));
  }
}
s(D, "observedAttributes", [
  "open",
  "title",
  "description",
  "confirm-text",
  "cancel-text",
  "variant",
  "prompt",
  "placeholder",
  "value"
]);
p("dv-confirm", D);
function B(o) {
  return new Promise((n) => {
    const t = document.createElement("dv-confirm");
    t.setAttribute("title", o.title), o.description && t.setAttribute("description", o.description), o.confirmText && t.setAttribute("confirm-text", o.confirmText), o.cancelText && t.setAttribute("cancel-text", o.cancelText), o.variant && t.setAttribute("variant", o.variant), t.setAttribute("open", "");
    const r = (a) => {
      t.remove(), n(a);
    };
    t.addEventListener("dv-confirm", () => r(!0), { once: !0 }), t.addEventListener("dv-cancel", () => r(!1), { once: !0 }), document.body.appendChild(t);
  });
}
function U(o) {
  return new Promise((n) => {
    const t = document.createElement("dv-confirm");
    t.setAttribute("title", o.title), t.setAttribute("prompt", ""), o.description && t.setAttribute("description", o.description), o.confirmText && t.setAttribute("confirm-text", o.confirmText), o.cancelText && t.setAttribute("cancel-text", o.cancelText), o.placeholder && t.setAttribute("placeholder", o.placeholder), o.defaultValue && t.setAttribute("value", o.defaultValue), t.setAttribute("open", ""), t.addEventListener(
      "dv-confirm",
      (r) => {
        var i;
        const a = ((i = r.detail) == null ? void 0 : i.value) ?? "";
        t.remove(), n(a);
      },
      { once: !0 }
    ), t.addEventListener(
      "dv-cancel",
      () => {
        t.remove(), n(null);
      },
      { once: !0 }
    ), document.body.appendChild(t);
  });
}
class S extends u {
  constructor() {
    super(...arguments);
    s(this, "_query", "");
    s(this, "_activeIdx", 0);
    s(this, "_onKeyDown", (t) => {
      t.key === "Escape" && this.boolAttr("open") && this.close();
    });
  }
  static get componentStyles() {
    return `
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
    `;
  }
  onMount() {
    document.addEventListener("keydown", this._onKeyDown);
  }
  onUnmount() {
    document.removeEventListener("keydown", this._onKeyDown);
  }
  show() {
    this._query = "", this._activeIdx = 0, this.setAttribute("open", "");
  }
  close() {
    this.removeAttribute("open"), this.emit("dv-close");
  }
  getItems() {
    try {
      const t = JSON.parse(this.attr("items", "[]"));
      return Array.isArray(t) ? t : [];
    } catch {
      return [];
    }
  }
  renderList() {
    const t = this.root.querySelector(".list");
    if (!t) return;
    const r = this.getItems(), a = this._query.trim().toLowerCase(), i = a ? r.filter((e) => e.label.toLowerCase().includes(a)) : r;
    if (i.length === 0) {
      t.innerHTML = '<div class="empty">Команды не найдены</div>';
      return;
    }
    this._activeIdx = Math.min(this._activeIdx, i.length - 1), t.innerHTML = i.map((e, c) => {
      const v = e.icon && l[e.icon] ? l[e.icon] : l["arrow-right"];
      return `
        <button type="button" class="item ${c === this._activeIdx ? "active" : ""}" data-id="${d(e.id)}">
          <span class="left">
            <span class="icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${v}</svg>
            </span>
            <span>${d(e.label)}</span>
          </span>
          ${e.shortcut ? `<span class="kbd">${d(e.shortcut)}</span>` : ""}
        </button>
      `;
    }).join(""), t.querySelectorAll(".item").forEach((e) => {
      e.addEventListener("click", () => {
        const c = e.dataset.id ?? "", v = r.find((m) => m.id === c);
        this.close(), this.emit("dv-select", { id: c, item: v });
      });
    });
  }
  render() {
    var i;
    const t = this.boolAttr("open"), r = this.attr("placeholder", "Введите команду или поиск...");
    this.root.innerHTML = `
      <div class="backdrop ${t ? "open" : ""}">
        <div class="dialog" role="dialog" aria-modal="true" aria-label="Палитра команд">
          <div class="search-row">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" style="color:var(--dv-text-muted)">${l.search}</svg>
            <input type="text" placeholder="${d(r)}" value="${d(this._query)}" />
            <span class="kbd">Esc</span>
          </div>
          <div class="list"></div>
        </div>
      </div>
    `, this.renderList(), (i = this.root.querySelector(".backdrop")) == null || i.addEventListener("click", (e) => {
      e.target === e.currentTarget && this.close();
    });
    const a = this.root.querySelector("input");
    t && a && (requestAnimationFrame(() => a.focus()), a.addEventListener("input", () => {
      this._query = a.value, this._activeIdx = 0, this.renderList();
    }), a.addEventListener("keydown", (e) => {
      var v;
      const c = this.root.querySelectorAll(".item");
      c.length && (e.key === "ArrowDown" ? (e.preventDefault(), this._activeIdx = (this._activeIdx + 1) % c.length, this.renderList()) : e.key === "ArrowUp" ? (e.preventDefault(), this._activeIdx = (this._activeIdx - 1 + c.length) % c.length, this.renderList()) : e.key === "Enter" && (e.preventDefault(), (v = c[this._activeIdx]) == null || v.click()));
    }));
  }
}
s(S, "observedAttributes", ["open", "items", "placeholder"]);
p("dv-command", S);
class C extends u {
  constructor() {
    super(...arguments);
    s(this, "_open", !1);
    s(this, "_onDocClick", (t) => {
      this._open && !t.composedPath().includes(this) && this.close();
    });
    s(this, "_onKeyDown", (t) => {
      t.key === "Escape" && this._open && this.close();
    });
  }
  static get componentStyles() {
    return `
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
    `;
  }
  onMount() {
    document.addEventListener("click", this._onDocClick), document.addEventListener("keydown", this._onKeyDown);
  }
  onUnmount() {
    document.removeEventListener("click", this._onDocClick), document.removeEventListener("keydown", this._onKeyDown);
  }
  getItems() {
    try {
      const t = JSON.parse(this.attr("items", "[]"));
      return Array.isArray(t) ? t : [];
    } catch {
      return [];
    }
  }
  close() {
    var t;
    this._open = !1, (t = this.root.querySelector(".menu")) == null || t.classList.remove("open");
  }
  render() {
    const t = this.getItems();
    this.root.innerHTML = `
      <div class="target"><slot></slot></div>
      <div class="menu" role="menu">
        ${t.map(
      (i) => `<button type="button" class="item ${i.danger ? "danger" : ""}" role="menuitem" data-id="${d(i.id)}">${d(i.label)}</button>`
    ).join("")}
      </div>
    `;
    const r = this.root.querySelector(".target"), a = this.root.querySelector(".menu");
    r.addEventListener("contextmenu", (i) => {
      const e = i;
      e.preventDefault(), this._open = !0, a.classList.add("open");
      const c = Math.min(e.clientX, window.innerWidth - 200), v = Math.min(e.clientY, window.innerHeight - 200);
      a.style.left = `${Math.max(8, c)}px`, a.style.top = `${Math.max(8, v)}px`;
    }), a.querySelectorAll(".item").forEach((i) => {
      i.addEventListener("click", () => {
        const e = i.dataset.id ?? "";
        this.close(), this.emit("dv-select", { id: e });
      });
    });
  }
}
s(C, "observedAttributes", ["items"]);
p("dv-context-menu", C);
class q extends u {
  constructor() {
    super(...arguments);
    s(this, "_onKeyDown", (t) => {
      t.key === "Escape" && this.boolAttr("open") && this.close();
    });
  }
  static get componentStyles() {
    return `
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
    `;
  }
  onMount() {
    document.addEventListener("keydown", this._onKeyDown);
  }
  onUnmount() {
    document.removeEventListener("keydown", this._onKeyDown);
  }
  show() {
    this.setAttribute("open", "");
  }
  close() {
    this.removeAttribute("open"), this.emit("dv-close");
  }
  render() {
    var a, i;
    const t = this.boolAttr("open"), r = this.attr("title", "");
    this.root.innerHTML = `
      <div class="backdrop ${t ? "open" : ""}">
        <div class="sheet" role="dialog" aria-modal="true" aria-label="${d(r || "Bottom sheet")}">
          <div class="handle-wrap"><div class="handle" aria-hidden="true"></div></div>
          <div class="header">
            <h2 class="title">${d(r)}</h2>
            <button type="button" class="close" aria-label="Закрыть">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${l.x}</svg>
            </button>
          </div>
          <div class="body"><slot></slot></div>
        </div>
      </div>
    `, (a = this.root.querySelector(".close")) == null || a.addEventListener("click", () => this.close()), (i = this.root.querySelector(".backdrop")) == null || i.addEventListener("click", (e) => {
      e.target === e.currentTarget && this.close();
    });
  }
}
s(q, "observedAttributes", ["open", "title"]);
p("dv-bottom-sheet", q);
export {
  $ as DvAccordion,
  k as DvAlert,
  q as DvBottomSheet,
  S as DvCommand,
  D as DvConfirm,
  C as DvContextMenu,
  A as DvDrawer,
  L as DvDropdown,
  _ as DvEmpty,
  w as DvModal,
  z as DvPopover,
  j as DvToastContainer,
  E as DvTooltip,
  B as confirmDialog,
  U as promptDialog,
  I as showToast
};
//# sourceMappingURL=feedback.js.map
