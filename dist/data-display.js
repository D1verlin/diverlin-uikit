var N = Object.defineProperty;
var I = (o, e, t) => e in o ? N(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var d = (o, e, t) => I(o, typeof e != "symbol" ? e + "" : e, t);
import { d as c, a as v, D as p, e as l } from "./icons-D-sxLAgG.js";
class w extends v {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const e = this.attr("level", "2"), t = this.attr("font", e === "display" || e === "1" || e === "2" ? "display" : "sans"), i = this.attr("align", "left"), a = this.hasAttribute("balance") ? this.boolAttr("balance") : !0, r = e === "display" || e === "1" ? "h1" : e === "3" ? "h3" : e === "4" ? "h4" : "h2", s = `heading level-${e} font-${t} ${a ? "balance" : ""}`;
    this.root.innerHTML = `<${r} class="${s}" style="text-align:${i}"><slot></slot></${r}>`;
  }
}
d(w, "observedAttributes", ["level", "font", "align", "balance"]);
c("dv-heading", w);
class $ extends v {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const e = this.attr("variant", "body"), t = this.attr("font", e === "mono" ? "mono" : "sans"), i = this.boolAttr("tabular"), a = this.hasAttribute("pretty") ? this.boolAttr("pretty") : !0, r = this.attr("align", ""), s = this.hasAttribute("inline") ? "span" : "p", n = [
      "text",
      `variant-${e}`,
      `font-${t}`,
      i ? "tabular" : "",
      a ? "pretty" : ""
    ].filter(Boolean).join(" "), h = r ? ` style="text-align:${r}"` : "";
    this.root.innerHTML = `<${s} class="${n}"${h}><slot></slot></${s}>`;
  }
}
d($, "observedAttributes", ["variant", "font", "tabular", "pretty", "align"]);
c("dv-text", $);
class z extends v {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const e = this.attr("name"), t = this.numAttr("size", 18), i = this.attr("stroke-width", "1.75"), a = p[e];
    if (!a) {
      this.root.innerHTML = "<slot></slot>";
      return;
    }
    this.root.innerHTML = `
      <svg
        width="${t}"
        height="${t}"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="${i}"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >${a}</svg>
    `;
  }
}
d(z, "observedAttributes", ["name", "size", "stroke-width"]);
c("dv-icon", z);
class A extends v {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const e = this.attr("variant", "neutral"), t = this.attr("size", "sm");
    this.root.innerHTML = `<span class="badge variant-${e} size-${t}"><slot></slot></span>`;
  }
}
d(A, "observedAttributes", ["variant", "size"]);
c("dv-badge", A);
class S extends v {
  static get componentStyles() {
    return `
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
    `;
  }
  getInitials(e) {
    const t = e.trim().split(/\s+/).filter(Boolean);
    return t.length === 0 ? "?" : t.length === 1 ? t[0].slice(0, 2).toUpperCase() : (t[0][0] + t[1][0]).toUpperCase();
  }
  render() {
    const e = this.attr("src"), t = this.attr("alt", this.attr("name", "Avatar")), i = this.attr("name", ""), a = this.attr("size", "md");
    if (e)
      this.root.innerHTML = `<div class="avatar size-${a}"><img src="${l(e)}" alt="${l(t)}" /></div>`;
    else {
      const r = this.getInitials(i);
      this.root.innerHTML = `<div class="avatar size-${a}" aria-label="${l(t)}">${l(r)}</div>`;
    }
  }
}
d(S, "observedAttributes", ["src", "alt", "name", "size"]);
c("dv-avatar", S);
class C extends v {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const e = this.attr("orientation", "horizontal"), t = this.attr("spacing", "md");
    this.root.innerHTML = `<div class="line ${e} sp-${t}" role="separator" aria-orientation="${e}"></div>`;
  }
}
d(C, "observedAttributes", ["orientation", "spacing"]);
c("dv-divider", C);
class L extends v {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const e = this.attr("preset");
    if (e === "profile") {
      this.root.innerHTML = `
        <div class="row" aria-hidden="true">
          <div class="skeleton variant-circle" style="width:40px;height:40px;"></div>
          <div class="stack" style="flex:1">
            <div class="skeleton variant-text" style="width:45%;"></div>
            <div class="skeleton variant-text" style="width:70%;"></div>
          </div>
        </div>
      `;
      return;
    }
    if (e === "card") {
      this.root.innerHTML = `
        <div class="card-box" aria-hidden="true">
          <div class="skeleton variant-rect" style="width:100%;height:120px;"></div>
          <div class="skeleton variant-text" style="width:60%;"></div>
          <div class="skeleton variant-text" style="width:90%;"></div>
          <div class="skeleton variant-text" style="width:40%;"></div>
        </div>
      `;
      return;
    }
    if (e === "article") {
      this.root.innerHTML = `
        <div class="stack" aria-hidden="true">
          <div class="skeleton variant-text" style="width:55%;height:20px;"></div>
          <div class="skeleton variant-text" style="width:100%;"></div>
          <div class="skeleton variant-text" style="width:94%;"></div>
          <div class="skeleton variant-text" style="width:72%;"></div>
        </div>
      `;
      return;
    }
    const t = this.numAttr("lines", 0);
    if (t > 1) {
      const s = Array.from({ length: t }, (n, h) => h === t - 1 ? "65%" : h % 2 === 1 ? "92%" : "100%");
      this.root.innerHTML = `
        <div class="stack" aria-hidden="true">
          ${s.map((n) => `<div class="skeleton variant-text" style="width:${n};"></div>`).join("")}
        </div>
      `;
      return;
    }
    const i = this.attr("variant", "text"), a = this.attr("width", "100%"), r = this.attr("height", i === "circle" ? a : i === "rect" ? "80px" : "14px");
    this.root.innerHTML = `<div class="skeleton variant-${i}" style="width:${a};height:${r}" aria-hidden="true"></div>`;
  }
}
d(L, "observedAttributes", ["variant", "width", "height", "lines", "preset"]);
c("dv-skeleton", L);
class T extends v {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const e = Math.max(1, this.numAttr("max", 100)), t = Math.min(e, Math.max(0, this.numAttr("value", 0))), i = Math.round(t / e * 100), a = this.attr("label"), r = this.boolAttr("show-value");
    this.root.innerHTML = `
      <div class="wrap">
        ${a || r ? `<div class="header">
                <span>${l(a)}</span>
                ${r ? `<span class="pct">${i}%</span>` : ""}
              </div>` : ""}
        <div class="track" role="progressbar" aria-valuenow="${t}" aria-valuemin="0" aria-valuemax="${e}">
          <div class="fill" style="transform: scaleX(${t / e})"></div>
        </div>
      </div>
    `;
  }
}
d(T, "observedAttributes", ["value", "max", "label", "show-value"]);
c("dv-progress", T);
class M extends v {
  constructor() {
    super(...arguments);
    d(this, "_sortCol", -1);
    d(this, "_sortAsc", !0);
  }
  static get componentStyles() {
    return `
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
    `;
  }
  onMount() {
    this.syncTableStyles();
  }
  sortByColumn(t) {
    const i = this.querySelector("table"), a = i == null ? void 0 : i.querySelector("tbody");
    if (!a) return;
    this._sortCol === t ? this._sortAsc = !this._sortAsc : (this._sortCol = t, this._sortAsc = !0);
    const r = Array.from(a.querySelectorAll("tr"));
    r.sort((s, n) => {
      var m, b, y, k;
      const h = ((b = (m = s.children[t]) == null ? void 0 : m.textContent) == null ? void 0 : b.trim()) ?? "", u = ((k = (y = n.children[t]) == null ? void 0 : y.textContent) == null ? void 0 : k.trim()) ?? "", f = Number(h.replace(/[^\d.-]/g, "")), x = Number(u.replace(/[^\d.-]/g, "")), g = h !== "" && u !== "" && Number.isFinite(f) && Number.isFinite(x) && /\d/.test(h) && /\d/.test(u) ? f - x : h.localeCompare(u, "ru");
      return this._sortAsc ? g : -g;
    }), r.forEach((s) => a.appendChild(s)), this.syncTableStyles(), this.emit("dv-sort", { column: t, ascending: this._sortAsc });
  }
  syncTableStyles() {
    const t = this.querySelector("table");
    if (!t) return;
    const i = this.boolAttr("dense"), a = this.boolAttr("sortable"), r = i ? "8px 12px" : "12px 16px";
    t.style.width = "100%", t.style.borderCollapse = "collapse", t.style.fontVariantNumeric = "tabular-nums", t.querySelectorAll("th").forEach((s, n) => {
      s.style.padding = r, s.style.fontWeight = "600", s.style.fontSize = "var(--dv-text-xs)", s.style.color = n === this._sortCol ? "var(--dv-text-primary)" : "var(--dv-text-muted)", s.style.background = "var(--dv-surface-hover)", s.style.whiteSpace = "nowrap", a && (s.style.cursor = "pointer", s.style.userSelect = "none", s.dataset.bound || (s.dataset.bound = "1", s.addEventListener("click", () => this.sortByColumn(n))));
    }), t.querySelectorAll("td").forEach((s) => {
      s.style.padding = r, s.style.color = "var(--dv-text-primary)";
    }), t.querySelectorAll("tbody tr").forEach((s, n) => {
      s.style.background = n % 2 === 1 ? "var(--dv-surface-elevated)" : "transparent";
    });
  }
  render() {
    this.root.innerHTML = "<slot></slot>", this.syncTableStyles();
  }
}
d(M, "observedAttributes", ["dense", "sortable"]);
c("dv-table", M);
class _ extends v {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const e = this.attr("size", "md"), t = this.attr("label");
    this.root.innerHTML = `
      <span class="spinner size-${e}" role="status" aria-label="${l(t || "Loading")}"></span>
      ${t ? `<span class="label">${l(t)}</span>` : ""}
    `;
  }
}
d(_, "observedAttributes", ["size", "label"]);
c("dv-spinner", _);
class D extends v {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    this.root.innerHTML = "<kbd><slot></slot></kbd>";
  }
}
c("dv-kbd", D);
class H extends v {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    var a, r;
    const e = this.boolAttr("selected"), t = this.boolAttr("removable"), i = this.boolAttr("disabled");
    this.root.innerHTML = `
      <span class="tag ${e ? "selected" : ""} ${i ? "disabled" : ""}">
        <slot></slot>
        ${t ? `<button type="button" class="remove" aria-label="Удалить тег" ${i ? "disabled" : ""}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${p.x}</svg>
              </button>` : ""}
      </span>
    `, (a = this.root.querySelector(".tag")) == null || a.addEventListener("click", (s) => {
      if (i || s.target.closest(".remove")) return;
      const n = !this.boolAttr("selected");
      n ? this.setAttribute("selected", "") : this.removeAttribute("selected"), this.emit("dv-change", { selected: n });
    }), (r = this.root.querySelector(".remove")) == null || r.addEventListener("click", (s) => {
      s.stopPropagation(), !i && (this.emit("dv-remove"), this.remove());
    });
  }
}
d(H, "observedAttributes", ["selected", "removable", "disabled"]);
c("dv-tag", H);
class E extends v {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    var a;
    const e = this.attr("lang", "html"), t = this.attr("code") || ((a = this.textContent) == null ? void 0 : a.trim()) || "";
    this.root.innerHTML = `
      <div class="box">
        <div class="head">
          <span class="lang">${l(e)}</span>
          <button type="button" class="copy">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${p.copy}</svg>
            <span>Копировать</span>
          </button>
        </div>
        <pre><code>${l(t)}</code></pre>
      </div>
    `;
    const i = this.root.querySelector(".copy");
    i.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(t);
        const r = i.querySelector("span");
        r && (r.textContent = "Скопировано", setTimeout(() => {
          r.textContent = "Копировать";
        }, 1500)), this.emit("dv-copy", { code: t });
      } catch {
      }
    });
  }
}
d(E, "observedAttributes", ["lang", "code"]);
c("dv-code", E);
class j extends v {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const e = this.attr("label", ""), t = this.attr("value", "0"), i = this.attr("delta", ""), a = this.attr("trend", "neutral"), r = this.attr("hint", "");
    this.root.innerHTML = `
      <div class="stat">
        ${e ? `<div class="label">${l(e)}</div>` : ""}
        <div class="row">
          <span class="value">${l(t)}</span>
          ${i ? `<span class="delta trend-${a}">${l(i)}</span>` : ""}
        </div>
        ${r ? `<div class="hint">${l(r)}</div>` : ""}
      </div>
    `;
  }
}
d(j, "observedAttributes", ["label", "value", "delta", "trend", "hint"]);
c("dv-stat", j);
class q extends v {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    let e = [];
    try {
      const a = JSON.parse(this.attr("items", "[]"));
      Array.isArray(a) && (e = a);
    } catch {
      e = [];
    }
    const t = this.attr("variant", "icons"), i = this.boolAttr("dense");
    this.root.innerHTML = `
      <ol class="variant-${t} ${i ? "dense" : ""}">
        ${e.map((a, r) => {
      const s = a.icon && p[a.icon] ? p[a.icon] : p["check-circle"];
      return `
            <li>
              <div class="rail-col">
                <span class="marker" aria-hidden="true">${t === "numbered" || t === "minimal" ? String(r + 1) : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${s}</svg>`}</span>
                <span class="line" aria-hidden="true"></span>
              </div>
              <div class="content">
                <div class="top">
                  <span class="title">${l(a.title)}</span>
                  ${a.time ? `<span class="time">${l(a.time)}</span>` : ""}
                </div>
                ${a.description ? `<div class="desc">${l(a.description)}</div>` : ""}
              </div>
            </li>
          `;
    }).join("")}
      </ol>
    `;
  }
}
d(q, "observedAttributes", ["items", "variant", "dense"]);
c("dv-timeline", q);
class B extends v {
  constructor() {
    super(...arguments);
    d(this, "_expanded", /* @__PURE__ */ new Set());
    d(this, "_didInitExpand", !1);
  }
  static get componentStyles() {
    return `
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
    `;
  }
  getItems() {
    try {
      const t = JSON.parse(this.attr("items", "[]"));
      return Array.isArray(t) ? t : [];
    } catch {
      return [];
    }
  }
  collectAllIds(t, i) {
    var a;
    for (const r of t)
      (a = r.children) != null && a.length && (i.add(r.id), this.collectAllIds(r.children, i));
  }
  attributeChangedCallback(t, i, a) {
    if (t === "expand-all" && (this._didInitExpand = !1), t === "selected" && this.root.querySelector("ul")) {
      const r = a ?? "";
      this.root.querySelectorAll(".node-btn").forEach((s) => {
        s.classList.toggle("selected", s.dataset.id === r);
      });
      return;
    }
    super.attributeChangedCallback(t, i, a);
  }
  renderNodes(t, i, a) {
    return `
      <ul>
        ${t.map((r) => {
      const s = !!(r.children && r.children.length > 0), n = this._expanded.has(r.id), h = a && r.icon && p[r.icon] ? p[r.icon] : null;
      return `
            <li>
              <button
                type="button"
                class="node-btn ${r.id === i ? "selected" : ""}"
                data-id="${l(r.id)}"
                data-has-children="${s}"
                aria-expanded="${s ? String(n) : "false"}"
              >
                ${s ? `<span class="chev ${n ? "open" : ""}" aria-hidden="true">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${p["chevron-right"]}</svg>
                      </span>` : '<span class="chev-spacer"></span>'}
                ${h ? `<span class="icon" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${h}</svg></span>` : ""}
                <span>${l(r.label)}</span>
              </button>
              ${s && n ? `<div class="children">${this.renderNodes(r.children, i, a)}</div>` : ""}
            </li>
          `;
    }).join("")}
      </ul>
    `;
  }
  render() {
    var r;
    const t = this.getItems(), i = this.attr("selected", ""), a = this.hasAttribute("show-icons") ? this.boolAttr("show-icons") : !0;
    this._didInitExpand || (this._didInitExpand = !0, this._expanded.clear(), this.boolAttr("expand-all") ? this.collectAllIds(t, this._expanded) : (r = t[0]) != null && r.id && this._expanded.add(t[0].id)), this.root.innerHTML = this.renderNodes(t, i, a), this.root.querySelectorAll(".node-btn").forEach((s) => {
      s.addEventListener("click", () => {
        const n = s.dataset.id ?? "";
        s.dataset.hasChildren === "true" ? (this._expanded.has(n) ? this._expanded.delete(n) : this._expanded.add(n), this.setAttribute("selected", n), this.render()) : this.setAttribute("selected", n), this.emit("dv-select", { id: n });
      });
    });
  }
}
d(B, "observedAttributes", ["items", "selected", "expand-all", "show-icons"]);
c("dv-tree", B);
export {
  S as DvAvatar,
  A as DvBadge,
  E as DvCode,
  C as DvDivider,
  w as DvHeading,
  z as DvIcon,
  D as DvKbd,
  T as DvProgress,
  L as DvSkeleton,
  _ as DvSpinner,
  j as DvStat,
  M as DvTable,
  H as DvTag,
  $ as DvText,
  q as DvTimeline,
  B as DvTree
};
//# sourceMappingURL=data-display.js.map
