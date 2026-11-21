var I = Object.defineProperty;
var N = (b, l, e) => l in b ? I(b, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : b[l] = e;
var u = (b, l, e) => N(b, typeof l != "symbol" ? l + "" : l, e);
import { d as y, a as k, e as c, D as m } from "./icons-D-sxLAgG.js";
class S extends k {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const l = this.attr("label"), e = this.attr("hint"), t = this.attr("error"), r = this.boolAttr("required");
    this.root.innerHTML = `
      <div class="field">
        ${l ? `<label class="label">${c(l)}${r ? '<span class="req" aria-hidden="true">*</span>' : ""}</label>` : ""}
        <slot></slot>
        ${t ? `<div class="error" role="alert">${c(t)}</div>` : e ? `<div class="hint">${c(e)}</div>` : ""}
      </div>
    `;
  }
}
u(S, "observedAttributes", ["label", "hint", "error", "required"]);
y("dv-field", S);
class _ extends k {
  constructor() {
    super(...arguments);
    u(this, "_syncing", !1);
  }
  static get componentStyles() {
    return `
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
    `;
  }
  get value() {
    var e;
    return ((e = this.root.querySelector("input")) == null ? void 0 : e.value) ?? this.attr("value");
  }
  set value(e) {
    this.setAttribute("value", e);
    const t = this.root.querySelector("input");
    t && t.value !== e && (t.value = e);
  }
  attributeChangedCallback(e, t, r) {
    if (e === "value") {
      if (this._syncing) return;
      const i = this.root.querySelector("input");
      if (i) {
        i.value !== (r ?? "") && (i.value = r ?? "");
        return;
      }
    }
    super.attributeChangedCallback(e, t, r);
  }
  render() {
    const e = this.attr("type", "text"), t = this.attr("value", ""), r = this.attr("placeholder", ""), i = this.boolAttr("disabled"), s = this.boolAttr("readonly"), o = this.boolAttr("error"), a = this.attr("size", "md"), d = this.attr("name", "");
    this.root.innerHTML = `
      <input
        type="${c(e)}"
        class="size-${a} ${o ? "has-error" : ""}"
        value="${c(t)}"
        placeholder="${c(r)}"
        ${d ? `name="${c(d)}"` : ""}
        ${i ? "disabled" : ""}
        ${s ? "readonly" : ""}
      />
    `;
    const n = this.root.querySelector("input");
    n.addEventListener("input", () => {
      this._syncing = !0, this.setAttribute("value", n.value), this._syncing = !1, this.emit("dv-input", { value: n.value });
    }), n.addEventListener("change", () => {
      this.emit("dv-change", { value: n.value });
    });
  }
}
u(_, "observedAttributes", ["type", "value", "placeholder", "disabled", "readonly", "error", "size", "name"]);
y("dv-input", _);
class z extends k {
  constructor() {
    super(...arguments);
    u(this, "_syncing", !1);
  }
  static get componentStyles() {
    return `
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
    `;
  }
  get value() {
    var e;
    return ((e = this.root.querySelector("textarea")) == null ? void 0 : e.value) ?? this.attr("value");
  }
  set value(e) {
    this.setAttribute("value", e);
    const t = this.root.querySelector("textarea");
    t && t.value !== e && (t.value = e);
  }
  attributeChangedCallback(e, t, r) {
    if (e === "value") {
      if (this._syncing) return;
      const i = this.root.querySelector("textarea");
      if (i) {
        i.value !== (r ?? "") && (i.value = r ?? "");
        return;
      }
    }
    super.attributeChangedCallback(e, t, r);
  }
  render() {
    const e = this.attr("value", ""), t = this.attr("placeholder", ""), r = this.numAttr("rows", 3), i = this.boolAttr("disabled"), s = this.boolAttr("readonly"), o = this.boolAttr("error");
    this.root.innerHTML = `
      <textarea
        rows="${r}"
        class="${o ? "has-error" : ""}"
        placeholder="${c(t)}"
        ${i ? "disabled" : ""}
        ${s ? "readonly" : ""}
      >${c(e)}</textarea>
    `;
    const a = this.root.querySelector("textarea");
    a.addEventListener("input", () => {
      this._syncing = !0, this.setAttribute("value", a.value), this._syncing = !1, this.emit("dv-input", { value: a.value });
    }), a.addEventListener("change", () => {
      this.emit("dv-change", { value: a.value });
    });
  }
}
u(z, "observedAttributes", ["value", "placeholder", "rows", "disabled", "readonly", "error"]);
y("dv-textarea", z);
class L extends k {
  constructor() {
    super(...arguments);
    u(this, "_open", !1);
    u(this, "_onDocClick", (e) => {
      this._open && !e.composedPath().includes(this) && this.setOpen(!1);
    });
    u(this, "_onKeyDown", (e) => {
      var t;
      this._open && e.key === "Escape" && (this.setOpen(!1), (t = this.root.querySelector(".trigger")) == null || t.focus());
    });
  }
  static get componentStyles() {
    return `
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
    `;
  }
  onMount() {
    document.addEventListener("click", this._onDocClick), document.addEventListener("keydown", this._onKeyDown);
  }
  onUnmount() {
    document.removeEventListener("click", this._onDocClick), document.removeEventListener("keydown", this._onKeyDown);
  }
  get value() {
    return this.attr("value", "");
  }
  set value(e) {
    this.setAttribute("value", e);
  }
  getItems() {
    const e = this.attr("options", "");
    if (e)
      try {
        const t = JSON.parse(e);
        if (Array.isArray(t))
          return t.map(
            (r) => typeof r == "string" ? { label: r, value: r } : { label: String(r.label ?? r.value), value: String(r.value), disabled: !!r.disabled }
          );
      } catch {
        return [];
      }
    return Array.from(this.querySelectorAll("option")).map((t) => ({
      label: t.textContent ?? t.value,
      value: t.value,
      disabled: t.disabled
    }));
  }
  setOpen(e) {
    var t, r, i;
    this._open = e, (t = this.root.querySelector(".trigger")) == null || t.classList.toggle("open", e), (r = this.root.querySelector(".trigger")) == null || r.setAttribute("aria-expanded", String(e)), (i = this.root.querySelector(".menu")) == null || i.classList.toggle("open", e);
  }
  render() {
    var d;
    const e = this.attr("value", ""), t = this.boolAttr("disabled"), r = this.boolAttr("error"), i = this.attr("size", "md"), s = this.attr("placeholder", "Выберите значение"), o = this.getItems(), a = o.find((n) => n.value === e);
    this.root.innerHTML = `
      <div class="wrap">
        <button
          type="button"
          class="trigger size-${i} ${r ? "has-error" : ""} ${this._open ? "open" : ""}"
          aria-haspopup="listbox"
          aria-expanded="${this._open}"
          ${t ? "disabled" : ""}
        >
          <span class="${a ? "" : "placeholder"}">${c(a ? a.label : s)}</span>
          <span class="chevron" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${m["chevron-down"]}</svg>
          </span>
        </button>
        <div class="menu ${this._open ? "open" : ""}" role="listbox">
          ${o.map(
      (n) => `
            <button
              type="button"
              class="option"
              role="option"
              data-value="${c(n.value)}"
              aria-selected="${n.value === e}"
              ${n.disabled ? "disabled" : ""}
            >
              <span>${c(n.label)}</span>
              ${n.value === e ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${m.check}</svg>` : ""}
            </button>
          `
    ).join("")}
        </div>
      </div>
    `, (d = this.root.querySelector(".trigger")) == null || d.addEventListener("click", () => {
      t || this.setOpen(!this._open);
    }), this.root.querySelectorAll(".option").forEach((n) => {
      n.addEventListener("click", () => {
        if (n.disabled) return;
        const v = n.getAttribute("data-value") ?? "";
        this._open = !1, this.setAttribute("value", v), this.emit("dv-change", { value: v });
      });
    });
  }
}
u(L, "observedAttributes", ["value", "disabled", "error", "size", "options", "placeholder"]);
y("dv-select", L);
class C extends k {
  static get componentStyles() {
    return `
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
    `;
  }
  get checked() {
    return this.boolAttr("checked");
  }
  set checked(l) {
    l ? this.setAttribute("checked", "") : this.removeAttribute("checked");
  }
  attributeChangedCallback(l, e, t) {
    if (l === "checked") {
      const r = this.root.querySelector("input");
      if (r) {
        r.checked = this.boolAttr("checked");
        return;
      }
    }
    super.attributeChangedCallback(l, e, t);
  }
  render() {
    const l = this.boolAttr("checked"), e = this.boolAttr("disabled"), t = this.attr("label");
    this.root.innerHTML = `
      <label class="${e ? "disabled" : ""}">
        <input type="checkbox" ${l ? "checked" : ""} ${e ? "disabled" : ""} />
        <span class="box" aria-hidden="true">
          <svg class="check-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${m.check}</svg>
        </span>
        ${t ? `<span>${c(t)}</span>` : "<slot></slot>"}
      </label>
    `;
    const r = this.root.querySelector("input");
    r.addEventListener("change", () => {
      this.checked = r.checked, this.emit("dv-change", { checked: r.checked, value: this.attr("value", "on") });
    });
  }
}
u(C, "observedAttributes", ["checked", "disabled", "label", "name", "value"]);
y("dv-checkbox", C);
class q extends k {
  static get componentStyles() {
    return `
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
    `;
  }
  get checked() {
    return this.boolAttr("checked");
  }
  set checked(l) {
    l ? this.setAttribute("checked", "") : this.removeAttribute("checked");
  }
  attributeChangedCallback(l, e, t) {
    if (l === "checked") {
      const r = this.root.querySelector("input");
      if (r) {
        r.checked = this.boolAttr("checked");
        return;
      }
    }
    super.attributeChangedCallback(l, e, t);
  }
  render() {
    const l = this.boolAttr("checked"), e = this.boolAttr("disabled"), t = this.attr("label"), r = this.attr("name");
    this.root.innerHTML = `
      <label class="${e ? "disabled" : ""}">
        <input type="radio" ${r ? `name="${c(r)}"` : ""} ${l ? "checked" : ""} ${e ? "disabled" : ""} />
        <span class="circle" aria-hidden="true"><span class="dot"></span></span>
        ${t ? `<span>${c(t)}</span>` : "<slot></slot>"}
      </label>
    `;
    const i = this.root.querySelector("input");
    i.addEventListener("change", () => {
      i.checked && r && document.querySelectorAll(`dv-radio[name="${r}"]`).forEach((s) => {
        s !== this && s.removeAttribute("checked");
      }), this.checked = i.checked, this.emit("dv-change", { checked: i.checked, value: this.attr("value") });
    });
  }
}
u(q, "observedAttributes", ["checked", "disabled", "label", "name", "value"]);
y("dv-radio", q);
class E extends k {
  static get componentStyles() {
    return `
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
    `;
  }
  get checked() {
    return this.boolAttr("checked");
  }
  set checked(l) {
    l ? this.setAttribute("checked", "") : this.removeAttribute("checked");
  }
  attributeChangedCallback(l, e, t) {
    if (l === "checked") {
      const r = this.root.querySelector("button"), i = this.root.querySelector(".track");
      if (r && i) {
        const s = this.boolAttr("checked");
        r.setAttribute("aria-checked", String(s)), i.classList.toggle("checked", s);
        return;
      }
    }
    super.attributeChangedCallback(l, e, t);
  }
  render() {
    const l = this.boolAttr("checked"), e = this.boolAttr("disabled"), t = this.attr("label");
    this.root.innerHTML = `
      <button
        type="button"
        class="wrap"
        role="switch"
        aria-checked="${l}"
        ${e ? "disabled" : ""}
      >
        <span class="track ${l ? "checked" : ""}" aria-hidden="true">
          <span class="thumb"></span>
        </span>
        ${t ? `<span>${c(t)}</span>` : "<slot></slot>"}
      </button>
    `, this.root.querySelector("button").addEventListener("click", () => {
      this.boolAttr("disabled") || (this.checked = !this.checked, this.emit("dv-change", { checked: this.checked }));
    });
  }
}
u(E, "observedAttributes", ["checked", "disabled", "label"]);
y("dv-toggle", E);
class M extends k {
  constructor() {
    super(...arguments);
    u(this, "_dragging", !1);
  }
  static get componentStyles() {
    return `
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
    `;
  }
  get value() {
    return this.numAttr("value", 50);
  }
  set value(e) {
    this.setAttribute("value", String(e));
  }
  getMarks(e, t, r) {
    const i = this.attr("marks");
    if (i && i !== "true" && i !== "")
      try {
        const s = JSON.parse(i);
        if (Array.isArray(s)) return s;
      } catch {
      }
    if (this.boolAttr("stepped") || this.hasAttribute("marks")) {
      const s = [], o = Math.floor((t - e) / r);
      if (o > 0 && o <= 20)
        for (let a = 0; a <= o; a++) {
          const d = Number((e + a * r).toFixed(4));
          s.push({ value: d, label: String(d) });
        }
      return s;
    }
    return [];
  }
  attributeChangedCallback(e, t, r) {
    if (e === "value" && this.root.querySelector(".track")) {
      this.syncVisual(Number(r ?? 0));
      return;
    }
    super.attributeChangedCallback(e, t, r);
  }
  syncVisual(e) {
    const t = this.numAttr("min", 0), r = Math.max(t + 1e-3, this.numAttr("max", 100)), i = Math.min(100, Math.max(0, (e - t) / (r - t) * 100)), s = this.root.querySelector(".slider-area");
    s && (s.style.setProperty("--_pct", `${i}%`), s.setAttribute("aria-valuenow", String(e)));
    const o = this.root.querySelector(".val");
    o && (o.textContent = String(e)), this.root.querySelectorAll(".tick").forEach((a) => {
      const d = Number(a.dataset.value);
      a.classList.toggle("active", d <= e);
    });
  }
  render() {
    const e = this.numAttr("min", 0), t = Math.max(e + 1e-3, this.numAttr("max", 100)), r = Math.max(1e-3, this.numAttr("step", 1)), i = Math.min(t, Math.max(e, this.numAttr("value", 50))), s = this.boolAttr("disabled"), o = this.attr("label"), a = this.boolAttr("show-value"), d = this.getMarks(e, t, r), n = (i - e) / (t - e) * 100;
    this.root.innerHTML = `
      <div class="wrap">
        ${o || a ? `<div class="header"><span>${c(o)}</span>${a ? `<span class="val">${i}</span>` : ""}</div>` : ""}
        <div
          class="slider-area ${s ? "disabled" : ""}"
          style="--_pct:${n}%"
          tabindex="${s ? -1 : 0}"
          role="slider"
          aria-label="${c(o || "Slider")}"
          aria-valuemin="${e}"
          aria-valuemax="${t}"
          aria-valuenow="${i}"
        >
          <div class="track">
            <div class="fill"></div>
            <div class="thumb"></div>
          </div>
        </div>
        ${d.length > 0 ? `<div class="ticks">
                ${d.map((p) => {
      const x = (p.value - e) / (t - e) * 100;
      return `<div class="tick ${p.value <= i ? "active" : ""}" data-value="${p.value}" style="left:${x}%">
                      <span class="tick-mark"></span>
                      ${p.label ? `<span>${c(p.label)}</span>` : ""}
                    </div>`;
    }).join("")}
              </div>` : ""}
      </div>
    `;
    const v = this.root.querySelector(".slider-area");
    if (s) return;
    const h = (p, x) => {
      const g = v.getBoundingClientRect(), A = Math.min(1, Math.max(0, (p - g.left) / g.width)), $ = e + A * (t - e), Y = Math.min(t, Math.max(e, Math.round(($ - e) / r) * r + e)), w = x || this.boolAttr("stepped") ? Number(Y.toFixed(4)) : Number($.toFixed(2));
      return this.setAttribute("value", String(w)), this.syncVisual(w), this.emit("dv-input", { value: w }), w;
    };
    v.addEventListener("pointerdown", (p) => {
      this._dragging = !0, v.classList.add("dragging"), v.setPointerCapture(p.pointerId), h(p.clientX, !1);
    }), v.addEventListener("pointermove", (p) => {
      this._dragging && h(p.clientX, !1);
    });
    const f = (p) => {
      if (!this._dragging) return;
      this._dragging = !1, v.classList.remove("dragging");
      const x = h(p.clientX, !0);
      this.emit("dv-change", { value: x });
    };
    v.addEventListener("pointerup", f), v.addEventListener("pointercancel", f), v.addEventListener("keydown", (p) => {
      const x = this.value;
      let g = x;
      if (p.key === "ArrowRight" || p.key === "ArrowUp") g = Math.min(t, x + r);
      else if (p.key === "ArrowLeft" || p.key === "ArrowDown") g = Math.max(e, x - r);
      else return;
      p.preventDefault(), g = Number(g.toFixed(4)), this.setAttribute("value", String(g)), this.emit("dv-input", { value: g }), this.emit("dv-change", { value: g });
    });
  }
}
u(M, "observedAttributes", ["min", "max", "step", "value", "disabled", "label", "show-value", "stepped", "marks"]);
y("dv-slider", M);
class D extends k {
  static get componentStyles() {
    return `
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
    `;
  }
  get value() {
    return this.numAttr("value", 0);
  }
  set value(l) {
    this.setAttribute("value", String(l));
  }
  attributeChangedCallback(l, e, t) {
    if (l === "value") {
      const r = this.root.querySelector("input");
      if (r) {
        r.value = String(this.numAttr("value", 0));
        return;
      }
    }
    super.attributeChangedCallback(l, e, t);
  }
  render() {
    const l = this.hasAttribute("min") ? this.numAttr("min", -1 / 0) : -1 / 0, e = this.hasAttribute("max") ? this.numAttr("max", 1 / 0) : 1 / 0, t = this.numAttr("step", 1), r = Math.min(e, Math.max(l, this.numAttr("value", 0))), i = this.boolAttr("disabled"), s = this.attr("size", "md");
    this.root.innerHTML = `
      <div class="wrap size-${s} ${i ? "disabled" : ""}">
        <button type="button" class="dec" aria-label="Уменьшить" ${r <= l ? "disabled" : ""}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${m.minus}</svg>
        </button>
        <input type="text" inputmode="numeric" value="${r}" ${i ? "disabled" : ""} />
        <button type="button" class="inc" aria-label="Увеличить" ${r >= e ? "disabled" : ""}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${m.plus}</svg>
        </button>
      </div>
    `;
    const o = this.root.querySelector("input"), a = this.root.querySelector(".dec"), d = this.root.querySelector(".inc"), n = (v) => {
      const h = Math.min(e, Math.max(l, Number(v.toFixed(4))));
      this.setAttribute("value", String(h)), o.value = String(h), a.disabled = h <= l, d.disabled = h >= e, this.emit("dv-change", { value: h });
    };
    a.addEventListener("click", () => n(this.value - t)), d.addEventListener("click", () => n(this.value + t)), o.addEventListener("change", () => {
      const v = Number(o.value);
      n(Number.isFinite(v) ? v : this.value);
    });
  }
}
u(D, "observedAttributes", ["value", "min", "max", "step", "disabled", "size"]);
y("dv-number-input", D);
class j extends k {
  constructor() {
    super(...arguments);
    u(this, "_syncing", !1);
  }
  static get componentStyles() {
    return `
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
    `;
  }
  get value() {
    var e;
    return ((e = this.root.querySelector("input")) == null ? void 0 : e.value) ?? this.attr("value");
  }
  set value(e) {
    this.setAttribute("value", e);
    const t = this.root.querySelector("input");
    t && t.value !== e && (t.value = e, this.syncState(e));
  }
  attributeChangedCallback(e, t, r) {
    if (e === "value") {
      if (this._syncing) return;
      const i = this.root.querySelector("input");
      if (i) {
        const s = r ?? "";
        i.value !== s && (i.value = s), this.syncState(s);
        return;
      }
    }
    super.attributeChangedCallback(e, t, r);
  }
  syncState(e) {
    var r, i;
    const t = e.length > 0;
    (r = this.root.querySelector(".wrap")) == null || r.classList.toggle("has-value", t), (i = this.root.querySelector(".clear-btn")) == null || i.classList.toggle("visible", t);
  }
  render() {
    const e = this.attr("value", ""), t = this.attr("placeholder", "Поиск..."), r = this.attr("size", "md"), i = this.boolAttr("disabled"), s = this.attr("shortcut", ""), o = this.boolAttr("loading"), a = e.length > 0;
    this.root.innerHTML = `
      <div class="wrap size-${r} ${i ? "disabled" : ""} ${a ? "has-value" : ""}">
        <span class="lead-icon" aria-hidden="true">
          ${o ? '<span class="spinner"></span>' : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${m.search}</svg>`}
        </span>
        <input
          type="text"
          role="searchbox"
          value="${c(e)}"
          placeholder="${c(t)}"
          ${i ? "disabled" : ""}
        />
        <button type="button" class="clear-btn ${a ? "visible" : ""}" aria-label="Очистить поиск" tabindex="-1">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${m.x}</svg>
        </button>
        ${s ? `<span class="kbd">${c(s)}</span>` : ""}
      </div>
    `;
    const d = this.root.querySelector(".wrap"), n = this.root.querySelector("input"), v = this.root.querySelector(".clear-btn");
    n.addEventListener("focus", () => d.classList.add("focused")), n.addEventListener("blur", () => d.classList.remove("focused")), n.addEventListener("input", () => {
      this._syncing = !0, this.setAttribute("value", n.value), this._syncing = !1, this.syncState(n.value), this.emit("dv-input", { value: n.value });
    }), n.addEventListener("change", () => {
      this.emit("dv-change", { value: n.value });
    }), n.addEventListener("keydown", (h) => {
      h.key === "Enter" ? this.emit("dv-submit", { value: n.value }) : h.key === "Escape" && n.value && (h.stopPropagation(), this.clear());
    }), v.addEventListener("click", () => {
      this.clear(), n.focus();
    });
  }
  clear() {
    const e = this.root.querySelector("input");
    this._syncing = !0, this.setAttribute("value", ""), this._syncing = !1, e && (e.value = ""), this.syncState(""), this.emit("dv-input", { value: "" }), this.emit("dv-clear");
  }
}
u(j, "observedAttributes", ["value", "placeholder", "size", "disabled", "shortcut", "loading"]);
y("dv-search", j);
class O extends k {
  constructor() {
    super(...arguments);
    u(this, "_files", []);
  }
  static get componentStyles() {
    return `
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
    `;
  }
  get files() {
    return [...this._files];
  }
  formatSize(e) {
    return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
  }
  addFiles(e) {
    if (!e || e.length === 0) return;
    const t = Array.from(e);
    this._files = this.boolAttr("multiple") ? [...this._files, ...t] : [t[0]], this.renderFileList(), this.emit("dv-change", { files: this.files });
  }
  renderFileList() {
    const e = this.root.querySelector(".list");
    e && (e.innerHTML = this._files.map(
      (t, r) => `
      <div class="file-item">
        <div class="file-meta">
          <span class="file-name">${c(t.name)}</span>
          <span class="file-size">${this.formatSize(t.size)}</span>
        </div>
        <button type="button" class="remove-btn" data-idx="${r}" aria-label="Удалить файл">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${m.x}</svg>
        </button>
      </div>
    `
    ).join(""), e.querySelectorAll(".remove-btn").forEach((t) => {
      t.addEventListener("click", () => {
        const r = Number(t.dataset.idx);
        this._files.splice(r, 1), this.renderFileList(), this.emit("dv-change", { files: this.files });
      });
    }));
  }
  render() {
    const e = this.attr("label", "Перетащите файлы сюда или выберите на устройстве"), t = this.attr("hint", ""), r = this.attr("accept", ""), i = this.boolAttr("multiple"), s = this.boolAttr("disabled");
    if (this.root.innerHTML = `
      <div class="wrap">
        <div class="dropzone ${s ? "disabled" : ""}" tabindex="${s ? -1 : 0}" role="button" aria-label="${c(e)}">
          <span class="icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${m.plus}</svg>
          </span>
          <span class="title">${c(e)}</span>
          ${t ? `<span class="hint">${c(t)}</span>` : ""}
          <input type="file" ${r ? `accept="${c(r)}"` : ""} ${i ? "multiple" : ""} ${s ? "disabled" : ""} />
        </div>
        <div class="list"></div>
      </div>
    `, this.renderFileList(), s) return;
    const o = this.root.querySelector(".dropzone"), a = this.root.querySelector('input[type="file"]');
    o.addEventListener("click", () => a.click()), o.addEventListener("keydown", (d) => {
      (d.key === "Enter" || d.key === " ") && (d.preventDefault(), a.click());
    }), a.addEventListener("change", () => {
      this.addFiles(a.files), a.value = "";
    }), o.addEventListener("dragover", (d) => {
      d.preventDefault(), o.classList.add("dragover");
    }), o.addEventListener("dragleave", () => {
      o.classList.remove("dragover");
    }), o.addEventListener("drop", (d) => {
      var n;
      d.preventDefault(), o.classList.remove("dragover"), this.addFiles(((n = d.dataTransfer) == null ? void 0 : n.files) ?? null);
    });
  }
}
u(O, "observedAttributes", ["label", "hint", "accept", "multiple", "disabled"]);
y("dv-file-picker", O);
const K = [
  "#18181b",
  "#52525b",
  "#dc2626",
  "#ea580c",
  "#ca8a04",
  "#16a34a",
  "#0d9488",
  "#2563eb",
  "#4f46e5",
  "#9333ea",
  "#db2777",
  "#f4f4f6"
];
class T extends k {
  constructor() {
    super(...arguments);
    u(this, "_open", !1);
    u(this, "_onDocClick", (e) => {
      this._open && !e.composedPath().includes(this) && this.setOpen(!1);
    });
    u(this, "_onKeyDown", (e) => {
      var t;
      e.key === "Escape" && this._open && (this.setOpen(!1), (t = this.root.querySelector(".trigger")) == null || t.focus());
    });
    u(this, "_syncing", !1);
  }
  static get componentStyles() {
    return `
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
    `;
  }
  onMount() {
    document.addEventListener("click", this._onDocClick), document.addEventListener("keydown", this._onKeyDown);
  }
  onUnmount() {
    document.removeEventListener("click", this._onDocClick), document.removeEventListener("keydown", this._onKeyDown);
  }
  get value() {
    return this.attr("value", "#18181b");
  }
  set value(e) {
    this.setAttribute("value", e);
  }
  attributeChangedCallback(e, t, r) {
    if (e === "value" && this.root.querySelector(".trigger")) {
      if (this._syncing) return;
      this.syncVisual(r ?? "#18181b");
      return;
    }
    super.attributeChangedCallback(e, t, r);
  }
  syncVisual(e) {
    const t = this.root.querySelector(".preview-dot"), r = this.root.querySelector(".hex-label"), i = this.root.querySelector(".hex-input"), s = this.root.querySelector('input[type="color"]');
    t && (t.style.background = e), r && (r.textContent = e), i && i.value !== e && (i.value = e), s && /^#[0-9a-fA-F]{6}$/.test(e) && (s.value = e), this.root.querySelectorAll(".swatch").forEach((o) => {
      var a;
      o.classList.toggle("active", ((a = o.dataset.color) == null ? void 0 : a.toLowerCase()) === e.toLowerCase());
    });
  }
  setOpen(e) {
    var t, r;
    this._open = e, (t = this.root.querySelector(".trigger")) == null || t.classList.toggle("open", e), (r = this.root.querySelector(".popover")) == null || r.classList.toggle("open", e);
  }
  getSwatches() {
    const e = this.attr("swatches");
    if (e)
      try {
        const t = JSON.parse(e);
        if (Array.isArray(t)) return t.map(String);
      } catch {
      }
    return K;
  }
  applyColor(e, t) {
    this._syncing = !0, this.setAttribute("value", e), this._syncing = !1, this.syncVisual(e), this.emit("dv-input", { value: e }), t && this.emit("dv-change", { value: e });
  }
  render() {
    var o;
    const e = this.attr("value", "#18181b"), t = this.boolAttr("disabled"), r = this.getSwatches();
    this.root.innerHTML = `
      <button type="button" class="trigger ${this._open ? "open" : ""}" ${t ? "disabled" : ""}>
        <span class="preview-dot" style="background:${c(e)}"></span>
        <span class="hex-label">${c(e)}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${m["chevron-down"]}</svg>
      </button>
      <div class="popover ${this._open ? "open" : ""}">
        <div class="swatches">
          ${r.map(
      (a) => `<button type="button" class="swatch ${a.toLowerCase() === e.toLowerCase() ? "active" : ""}" data-color="${c(a)}" style="background:${c(a)}" aria-label="${c(a)}"></button>`
    ).join("")}
        </div>
        <div class="custom-row">
          <input type="color" value="${/^#[0-9a-fA-F]{6}$/.test(e) ? e : "#18181b"}" aria-label="Выбор цвета" />
          <input type="text" class="hex-input" value="${c(e)}" maxlength="7" aria-label="Hex код" />
        </div>
      </div>
    `, (o = this.root.querySelector(".trigger")) == null || o.addEventListener("click", () => {
      t || this.setOpen(!this._open);
    }), this.root.querySelectorAll(".swatch").forEach((a) => {
      a.addEventListener("click", () => {
        const d = a.dataset.color ?? "#18181b";
        this.applyColor(d, !0);
      });
    });
    const i = this.root.querySelector('input[type="color"]');
    i.addEventListener("input", () => this.applyColor(i.value, !1)), i.addEventListener("change", () => this.applyColor(i.value, !0));
    const s = this.root.querySelector(".hex-input");
    s.addEventListener("change", () => {
      const a = s.value.trim();
      /^#[0-9a-fA-F]{6}$/.test(a) && this.applyColor(a, !0);
    });
  }
}
u(T, "observedAttributes", ["value", "disabled", "swatches"]);
y("dv-color-picker", T);
class B extends k {
  constructor() {
    super(...arguments);
    u(this, "_open", !1);
    u(this, "_query", "");
    u(this, "_onDocClick", (e) => {
      this._open && !e.composedPath().includes(this) && this.setOpen(!1);
    });
    u(this, "_onKeyDown", (e) => {
      var t;
      e.key === "Escape" && this._open && (this.setOpen(!1), (t = this.root.querySelector(".search-input")) == null || t.blur());
    });
  }
  static get componentStyles() {
    return `
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
    `;
  }
  onMount() {
    document.addEventListener("click", this._onDocClick), document.addEventListener("keydown", this._onKeyDown);
  }
  onUnmount() {
    document.removeEventListener("click", this._onDocClick), document.removeEventListener("keydown", this._onKeyDown);
  }
  getOptions() {
    try {
      const e = JSON.parse(this.attr("options", "[]"));
      return Array.isArray(e) ? e.map(
        (t) => typeof t == "string" ? { label: t, value: t } : { label: String(t.label ?? t.value), value: String(t.value) }
      ) : [];
    } catch {
      return [];
    }
  }
  getSelectedValues() {
    const e = this.attr("value", "");
    return e ? this.boolAttr("multiple") ? e.split(",").map((t) => t.trim()).filter(Boolean) : [e] : [];
  }
  setOpen(e) {
    var t, r;
    this._open = e, (t = this.root.querySelector(".control")) == null || t.classList.toggle("open", e), (r = this.root.querySelector(".menu")) == null || r.classList.toggle("open", e);
  }
  renderMenu() {
    const e = this.root.querySelector(".menu");
    if (!e) return;
    const t = this.getOptions(), r = new Set(this.getSelectedValues()), i = this._query.trim().toLowerCase(), s = i ? t.filter((o) => o.label.toLowerCase().includes(i)) : t;
    if (s.length === 0) {
      e.innerHTML = '<div class="empty">Ничего не найдено</div>';
      return;
    }
    e.innerHTML = s.map(
      (o) => `
      <button type="button" class="option" data-val="${c(o.value)}" aria-selected="${r.has(o.value)}">
        <span>${c(o.label)}</span>
        ${r.has(o.value) ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">${m.check}</svg>` : ""}
      </button>
    `
    ).join(""), e.querySelectorAll(".option").forEach((o) => {
      o.addEventListener("click", (a) => {
        a.stopPropagation();
        const d = o.dataset.val ?? "";
        if (this.boolAttr("multiple")) {
          const v = new Set(this.getSelectedValues());
          v.has(d) ? v.delete(d) : v.add(d);
          const h = Array.from(v).join(",");
          this.setAttribute("value", h), this._query = "", this.emit("dv-change", { value: Array.from(v) });
        } else
          this._open = !1, this._query = "", this.setAttribute("value", d), this.emit("dv-change", { value: d });
      });
    });
  }
  render() {
    const e = this.boolAttr("multiple"), t = this.boolAttr("disabled"), r = this.attr("size", "md"), i = this.attr("placeholder", "Выберите или найдите..."), s = this.getOptions(), a = this.getSelectedValues().map((h) => s.find((f) => f.value === h)).filter((h) => !!h), d = !e && a[0] ? a[0].label : "";
    if (this.root.innerHTML = `
      <div class="control size-${r} ${t ? "disabled" : ""} ${this._open ? "open" : ""}">
        ${e && a.length ? `<div class="chips">
                ${a.map(
      (h) => `
                  <span class="chip">
                    <span>${c(h.label)}</span>
                    <button type="button" class="chip-rm" data-rm="${c(h.value)}" aria-label="Удалить">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">${m.x}</svg>
                    </button>
                  </span>
                `
    ).join("")}
              </div>` : ""}
        <input
          type="text"
          class="search-input"
          value="${c(this._query || d)}"
          placeholder="${c(e && a.length ? "" : i)}"
          ${t ? "disabled" : ""}
        />
        <span class="chevron" aria-hidden="true">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${m["chevron-down"]}</svg>
        </span>
      </div>
      <div class="menu ${this._open ? "open" : ""}" role="listbox"></div>
    `, this.renderMenu(), t) return;
    const n = this.root.querySelector(".control"), v = this.root.querySelector(".search-input");
    n.addEventListener("click", (h) => {
      h.target.closest(".chip-rm") || (this.setOpen(!0), v.focus());
    }), v.addEventListener("focus", () => {
      !e && d && !this._query && v.select(), this.setOpen(!0);
    }), v.addEventListener("input", () => {
      this._query = v.value, this.setOpen(!0), this.renderMenu();
    }), this.root.querySelectorAll(".chip-rm").forEach((h) => {
      h.addEventListener("click", (f) => {
        f.stopPropagation();
        const p = h.dataset.rm ?? "", x = this.getSelectedValues().filter((g) => g !== p);
        this.setAttribute("value", x.join(",")), this.emit("dv-change", { value: x });
      });
    });
  }
}
u(B, "observedAttributes", ["value", "options", "placeholder", "multiple", "disabled", "size"]);
y("dv-combobox", B);
const V = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
], P = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
class H extends k {
  constructor() {
    super(...arguments);
    u(this, "_open", !1);
    u(this, "_viewYear", (/* @__PURE__ */ new Date()).getFullYear());
    u(this, "_viewMonth", (/* @__PURE__ */ new Date()).getMonth());
    u(this, "_onDocClick", (e) => {
      this._open && !e.composedPath().includes(this) && this.setOpen(!1);
    });
    u(this, "_onKeyDown", (e) => {
      e.key === "Escape" && this._open && this.setOpen(!1);
    });
  }
  static get componentStyles() {
    return `
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
    `;
  }
  onMount() {
    document.addEventListener("click", this._onDocClick), document.addEventListener("keydown", this._onKeyDown);
  }
  onUnmount() {
    document.removeEventListener("click", this._onDocClick), document.removeEventListener("keydown", this._onKeyDown);
  }
  setOpen(e) {
    var t, r;
    this._open = e, (t = this.root.querySelector(".trigger")) == null || t.classList.toggle("open", e), (r = this.root.querySelector(".popover")) == null || r.classList.toggle("open", e);
  }
  formatIso(e, t, r) {
    return `${e}-${String(t + 1).padStart(2, "0")}-${String(r).padStart(2, "0")}`;
  }
  renderCalendar() {
    var v, h;
    const e = this.root.querySelector(".popover");
    if (!e) return;
    const t = this.attr("value", ""), r = /* @__PURE__ */ new Date(), i = this.formatIso(r.getFullYear(), r.getMonth(), r.getDate()), o = (new Date(this._viewYear, this._viewMonth, 1).getDay() + 6) % 7, a = new Date(this._viewYear, this._viewMonth + 1, 0).getDate(), d = Array.from({ length: o }, () => "<div></div>").join(""), n = Array.from({ length: a }, (f, p) => {
      const x = p + 1, g = this.formatIso(this._viewYear, this._viewMonth, x);
      return `<button type="button" class="day ${g === i ? "today" : ""} ${g === t ? "selected" : ""}" data-iso="${g}">${x}</button>`;
    }).join("");
    e.innerHTML = `
      <div class="cal-head">
        <button type="button" class="nav-btn prev" aria-label="Предыдущий месяц">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${m["chevron-left"]}</svg>
        </button>
        <span class="month-label">${V[this._viewMonth]} ${this._viewYear}</span>
        <button type="button" class="nav-btn next" aria-label="Следующий месяц">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${m["chevron-right"]}</svg>
        </button>
      </div>
      <div class="grid">
        ${P.map((f) => `<div class="wd">${f}</div>`).join("")}
        ${d}
        ${n}
      </div>
    `, (v = e.querySelector(".prev")) == null || v.addEventListener("click", (f) => {
      f.stopPropagation(), this._viewMonth === 0 ? (this._viewMonth = 11, this._viewYear--) : this._viewMonth--, this.renderCalendar();
    }), (h = e.querySelector(".next")) == null || h.addEventListener("click", (f) => {
      f.stopPropagation(), this._viewMonth === 11 ? (this._viewMonth = 0, this._viewYear++) : this._viewMonth++, this.renderCalendar();
    }), e.querySelectorAll(".day").forEach((f) => {
      f.addEventListener("click", () => {
        const p = f.dataset.iso ?? "";
        this._open = !1, this.setAttribute("value", p), this.emit("dv-change", { value: p });
      });
    });
  }
  render() {
    var s;
    const e = this.attr("value", ""), t = this.attr("placeholder", "Выберите дату"), r = this.boolAttr("disabled"), i = this.attr("size", "md");
    if (e && /^\d{4}-\d{2}-\d{2}$/.test(e)) {
      const [o, a] = e.split("-").map(Number);
      this._viewYear = o, this._viewMonth = a - 1;
    }
    this.root.innerHTML = `
      <button type="button" class="trigger size-${i} ${this._open ? "open" : ""}" ${r ? "disabled" : ""}>
        <span class="${e ? "" : "placeholder"}">${c(e || t)}</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${m["chevron-down"]}</svg>
      </button>
      <div class="popover ${this._open ? "open" : ""}"></div>
    `, this.renderCalendar(), (s = this.root.querySelector(".trigger")) == null || s.addEventListener("click", () => {
      r || this.setOpen(!this._open);
    });
  }
}
u(H, "observedAttributes", ["value", "placeholder", "disabled", "size"]);
y("dv-date-picker", H);
class F extends k {
  constructor() {
    super(...arguments);
    u(this, "_syncing", !1);
  }
  static get componentStyles() {
    return `
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
    `;
  }
  get value() {
    return Array.from(this.root.querySelectorAll("input")).map((e) => e.value).join("");
  }
  attributeChangedCallback(e, t, r) {
    e === "value" && this._syncing || super.attributeChangedCallback(e, t, r);
  }
  render() {
    const e = Math.min(8, Math.max(2, this.numAttr("length", 6))), t = this.boolAttr("disabled"), r = this.attr("size", "md"), i = this.attr("value", "");
    this.root.innerHTML = `
      <div class="row size-${r}">
        ${Array.from({ length: e }, (a, d) => `<input type="text" inputmode="numeric" maxlength="1" value="${(i[d] ?? "").replace(/"/g, "&quot;")}" aria-label="Цифра ${d + 1}" ${t ? "disabled" : ""} />`).join("")}
      </div>
    `;
    const s = Array.from(this.root.querySelectorAll("input")), o = () => {
      const a = this.value;
      this._syncing = !0, this.setAttribute("value", a), this._syncing = !1, this.emit("dv-input", { value: a }), a.length === e && this.emit("dv-complete", { value: a });
    };
    s.forEach((a, d) => {
      a.addEventListener("input", () => {
        const n = a.value.replace(/\D/g, "").slice(-1);
        a.value = n, n && d < s.length - 1 && s[d + 1].focus(), o();
      }), a.addEventListener("keydown", (n) => {
        n.key === "Backspace" && !a.value && d > 0 ? (s[d - 1].focus(), s[d - 1].value = "", o()) : n.key === "ArrowLeft" && d > 0 ? s[d - 1].focus() : n.key === "ArrowRight" && d < s.length - 1 && s[d + 1].focus();
      }), a.addEventListener("paste", (n) => {
        var f;
        n.preventDefault();
        const v = (((f = n.clipboardData) == null ? void 0 : f.getData("text")) ?? "").replace(/\D/g, "");
        if (!v) return;
        for (let p = 0; p < s.length; p++)
          s[p].value = v[p] ?? "";
        const h = Math.min(v.length, s.length - 1);
        s[h].focus(), o();
      });
    });
  }
}
u(F, "observedAttributes", ["length", "value", "disabled", "size"]);
y("dv-otp-input", F);
export {
  C as DvCheckbox,
  T as DvColorPicker,
  B as DvCombobox,
  H as DvDatePicker,
  S as DvField,
  O as DvFilePicker,
  _ as DvInput,
  D as DvNumberInput,
  F as DvOtpInput,
  q as DvRadio,
  j as DvSearch,
  L as DvSelect,
  M as DvSlider,
  z as DvTextarea,
  E as DvToggle
};
//# sourceMappingURL=inputs.js.map
