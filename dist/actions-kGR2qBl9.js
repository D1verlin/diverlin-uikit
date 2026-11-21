var S = Object.defineProperty;
var T = (t, n, e) => n in t ? S(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var o = (t, n, e) => T(t, typeof n != "symbol" ? n + "" : n, e);
import { d as u, a as h, D as v, e as m } from "./icons-D-sxLAgG.js";
class w extends h {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const n = this.attr("variant", "primary"), e = this.attr("size", "md"), s = this.boolAttr("disabled") || this.boolAttr("loading"), a = this.boolAttr("loading"), r = this.attr("type", "button");
    this.root.innerHTML = `
      <button
        type="${r}"
        class="size-${e} variant-${n}"
        ${s ? "disabled" : ""}
        aria-busy="${a}"
      >
        ${a ? '<span class="spinner" aria-hidden="true"></span>' : ""}
        <slot></slot>
      </button>
    `;
  }
}
o(w, "observedAttributes", ["variant", "size", "disabled", "loading", "full", "type"]);
u("dv-button", w);
class k extends h {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const n = this.attr("icon"), e = this.attr("label", n || "Action"), s = this.attr("variant", "secondary"), a = this.attr("size", "md"), r = this.boolAttr("disabled"), d = a === "sm" ? 15 : a === "lg" ? 20 : 17, i = v[n];
    this.root.innerHTML = `
      <button
        type="button"
        class="size-${a} variant-${s}"
        aria-label="${m(e)}"
        title="${m(e)}"
        ${r ? "disabled" : ""}
      >
        ${i ? `<svg width="${d}" height="${d}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i}</svg>` : "<slot></slot>"}
      </button>
    `;
  }
}
o(k, "observedAttributes", ["icon", "label", "variant", "size", "disabled"]);
u("dv-icon-button", k);
class z extends h {
  static get componentStyles() {
    return `
      :host {
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--dv-space-2);
      }
    `;
  }
  render() {
    const n = this.attr("gap");
    n && (this.style.gap = n), this.root.innerHTML = "<slot></slot>";
  }
}
o(z, "observedAttributes", ["gap"]);
u("dv-button-group", z);
const p = "dv-theme", E = "dv-accent", _ = /* @__PURE__ */ new Set(["light", "dark"]), C = /* @__PURE__ */ new Set([
  "mono",
  "cobalt",
  "emerald",
  "amber",
  "rose",
  "violet",
  "sunset"
]);
function g(t) {
  return typeof t == "string" && _.has(t);
}
function f(t) {
  return typeof t == "string" && C.has(t);
}
function y() {
  if (typeof document > "u") return "light";
  const t = document.documentElement.getAttribute("data-theme");
  return g(t) ? t : "light";
}
function l(t, n = !0) {
  const e = g(t) ? t : "light";
  if (typeof document < "u" && (document.documentElement.setAttribute("data-theme", e), document.documentElement.dispatchEvent(
    new CustomEvent("dv-theme-change", { detail: { theme: e } })
  )), n && typeof localStorage < "u")
    try {
      localStorage.setItem(p, e);
    } catch {
    }
  return e;
}
function D() {
  if (typeof document > "u") return "mono";
  const t = document.documentElement.getAttribute("data-accent");
  return f(t) ? t : "mono";
}
function x(t, n = !0) {
  const e = f(t) ? t : "mono";
  if (typeof document < "u" && (e === "mono" ? document.documentElement.removeAttribute("data-accent") : document.documentElement.setAttribute("data-accent", e), document.documentElement.dispatchEvent(
    new CustomEvent("dv-accent-change", { detail: { accent: e } })
  )), n && typeof localStorage < "u")
    try {
      localStorage.setItem(E, e);
    } catch {
    }
  return e;
}
function I(t = "mono") {
  if (typeof localStorage < "u")
    try {
      const n = localStorage.getItem(E);
      if (f(n))
        return x(n, !1);
    } catch {
    }
  return x(t, !1);
}
function H(t = "light") {
  var n;
  if (typeof localStorage < "u")
    try {
      const e = localStorage.getItem(p);
      if (g(e))
        return l(e, !1);
    } catch {
    }
  return typeof window < "u" && ((n = window.matchMedia) != null && n.call(window, "(prefers-color-scheme: dark)").matches) ? l("dark", !1) : l(t, !1);
}
function j() {
  if (typeof window > "u" || !window.matchMedia) return () => {
  };
  const t = window.matchMedia("(prefers-color-scheme: dark)"), n = (e) => {
    try {
      if (localStorage.getItem(p)) return;
    } catch {
    }
    l(e.matches ? "dark" : "light", !1);
  };
  return t.addEventListener("change", n), () => t.removeEventListener("change", n);
}
class $ extends h {
  constructor() {
    super(...arguments);
    o(this, "_onThemeChange", () => {
      this.render();
    });
  }
  static get componentStyles() {
    return `
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
    `;
  }
  onMount() {
    document.documentElement.addEventListener("dv-theme-change", this._onThemeChange);
  }
  onUnmount() {
    document.documentElement.removeEventListener("dv-theme-change", this._onThemeChange);
  }
  render() {
    var c;
    const e = y(), s = this.attr("size", "md"), a = this.boolAttr("show-label"), r = e === "dark", d = r ? v.sun : v.moon, i = r ? "Светлая тема" : "Тёмная тема";
    this.root.innerHTML = `
      <button type="button" class="size-${s}" aria-label="${i}" title="${i}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>
        ${a ? `<span>${r ? "Светлая" : "Тёмная"}</span>` : ""}
      </button>
    `, (c = this.root.querySelector("button")) == null || c.addEventListener("click", () => {
      const b = y() === "dark" ? "light" : "dark";
      l(b), this.emit("dv-change", { theme: b });
    });
  }
}
o($, "observedAttributes", ["size", "show-label"]);
u("dv-theme-toggle", $);
class A extends h {
  constructor() {
    super(...arguments);
    o(this, "_copied", !1);
    o(this, "_timer", null);
  }
  static get componentStyles() {
    return `
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
    `;
  }
  onUnmount() {
    this._timer && window.clearTimeout(this._timer);
  }
  render() {
    var d;
    const e = this.attr("label", ""), s = this.attr("size", "md"), a = this.attr("variant", "secondary"), r = this._copied ? v.check : v.copy;
    this.root.innerHTML = `
      <button type="button" class="size-${s} variant-${a}" aria-label="${m(e || "Копировать")}">
        <svg class="${this._copied ? "copied-icon" : ""}" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${r}</svg>
        ${e ? `<span>${m(this._copied ? "Скопировано" : e)}</span>` : ""}
      </button>
    `, (d = this.root.querySelector("button")) == null || d.addEventListener("click", async () => {
      var c;
      const i = this.attr("value", "");
      try {
        await ((c = navigator.clipboard) == null ? void 0 : c.writeText(i));
      } catch {
      }
      this._copied = !0, this.render(), this.emit("dv-copy", { value: i }), this._timer && window.clearTimeout(this._timer), this._timer = window.setTimeout(() => {
        this._copied = !1, this.render();
      }, 1500);
    });
  }
}
o(A, "observedAttributes", ["value", "label", "size", "variant"]);
u("dv-copy-button", A);
export {
  w as D,
  z as a,
  A as b,
  k as c,
  $ as d,
  y as e,
  H as f,
  D as g,
  f as h,
  I as i,
  g as j,
  l as k,
  x as s,
  j as w
};
//# sourceMappingURL=actions-kGR2qBl9.js.map
