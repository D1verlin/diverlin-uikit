var $ = Object.defineProperty;
var A = (n, t, e) => t in n ? $(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var d = (n, t, e) => A(n, typeof t != "symbol" ? t + "" : t, e);
import { d as v, a as u, e as o, D as c } from "./icons-D-sxLAgG.js";
class f extends u {
  static get componentStyles() {
    return `
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
    `;
  }
  getItems() {
    const t = this.attr("items");
    if (!t) return [];
    try {
      const e = JSON.parse(t);
      return Array.isArray(e) ? e : [];
    } catch {
      return [];
    }
  }
  attributeChangedCallback(t, e, i) {
    if (t === "value" && this.root.querySelector(".tablist")) {
      const r = i ?? "";
      this.root.querySelectorAll('button[role="tab"]').forEach((a) => {
        a.setAttribute("aria-selected", String(a.getAttribute("data-id") === r));
      });
      return;
    }
    super.attributeChangedCallback(t, e, i);
  }
  render() {
    var r;
    const t = this.getItems(), e = this.attr("value", ((r = t[0]) == null ? void 0 : r.id) ?? ""), i = this.attr("variant", "segmented");
    this.root.innerHTML = `
      <div class="tablist ${i === "underline" ? "underline" : ""}" role="tablist">
        ${t.map(
      (a) => `
          <button
            type="button"
            role="tab"
            data-id="${o(a.id)}"
            aria-selected="${a.id === e}"
            ${a.disabled ? "disabled" : ""}
          >${o(a.label)}</button>
        `
    ).join("")}
      </div>
    `, this.root.querySelectorAll('button[role="tab"]').forEach((a) => {
      a.addEventListener("click", () => {
        if (a.disabled) return;
        const l = a.getAttribute("data-id") ?? "";
        this.setAttribute("value", l), this.emit("dv-change", { value: l });
      });
    });
  }
}
d(f, "observedAttributes", ["value", "items", "variant"]);
v("dv-tabs", f);
class m extends u {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    let t = [];
    try {
      const e = JSON.parse(this.attr("items", "[]"));
      Array.isArray(e) && (t = e);
    } catch {
      t = [];
    }
    this.root.innerHTML = `
      <nav aria-label="Breadcrumb">
        <ol>
          ${t.map((e, i) => {
      const r = i === t.length - 1, a = i > 0 ? `<li class="sep" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${c["chevron-right"]}</svg></li>` : "", l = r || !e.href ? `<span class="${r ? "current" : ""}" ${r ? 'aria-current="page"' : ""}>${o(e.label)}</span>` : `<a href="${o(e.href)}">${o(e.label)}</a>`;
      return `${a}<li>${l}</li>`;
    }).join("")}
        </ol>
      </nav>
    `;
  }
}
d(m, "observedAttributes", ["items"]);
v("dv-breadcrumbs", m);
class x extends u {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const t = Math.max(1, this.numAttr("total", 1)), e = Math.min(t, Math.max(1, this.numAttr("page", 1))), i = [];
    for (let r = 1; r <= t; r++)
      (r === 1 || r === t || Math.abs(r - e) <= 1) && i.push(r);
    this.root.innerHTML = `
      <nav aria-label="Pagination">
        <button type="button" data-page="${e - 1}" ${e <= 1 ? "disabled" : ""} aria-label="Previous page">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${c["chevron-left"]}</svg>
        </button>
        ${i.map(
      (r) => `<button type="button" data-page="${r}" class="${r === e ? "active" : ""}" aria-current="${r === e ? "page" : "false"}">${r}</button>`
    ).join("")}
        <button type="button" data-page="${e + 1}" ${e >= t ? "disabled" : ""} aria-label="Next page">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${c["chevron-right"]}</svg>
        </button>
      </nav>
    `, this.root.querySelectorAll("button[data-page]").forEach((r) => {
      r.addEventListener("click", () => {
        const a = Number(r.getAttribute("data-page"));
        a >= 1 && a <= t && a !== e && (this.setAttribute("page", String(a)), this.emit("dv-change", { page: a }));
      });
    });
  }
}
d(x, "observedAttributes", ["page", "total"]);
v("dv-pagination", x);
class y extends u {
  static get componentStyles() {
    return `
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
  updatePill() {
    const t = this.root.querySelector('button[aria-pressed="true"]'), e = this.root.querySelector(".pill");
    t && e && (e.style.width = `${t.offsetWidth}px`, e.style.transform = `translateX(${t.offsetLeft}px)`);
  }
  attributeChangedCallback(t, e, i) {
    if (t === "value" && this.root.querySelector(".track")) {
      const r = i ?? "";
      this.root.querySelectorAll("button").forEach((a) => {
        a.setAttribute("aria-pressed", String(a.getAttribute("data-id") === r));
      }), this.updatePill();
      return;
    }
    super.attributeChangedCallback(t, e, i);
  }
  render() {
    var i;
    const t = this.getItems(), e = this.attr("value", ((i = t[0]) == null ? void 0 : i.id) ?? "");
    this.root.innerHTML = `
      <div class="track" role="group">
        <div class="pill" aria-hidden="true"></div>
        ${t.map(
      (r) => `<button type="button" data-id="${o(r.id)}" aria-pressed="${r.id === e}">${o(r.label)}</button>`
    ).join("")}
      </div>
    `, requestAnimationFrame(() => this.updatePill()), this.root.querySelectorAll("button").forEach((r) => {
      r.addEventListener("click", () => {
        const a = r.getAttribute("data-id") ?? "";
        this.setAttribute("value", a), this.emit("dv-change", { value: a });
      });
    });
  }
}
d(y, "observedAttributes", ["value", "items"]);
v("dv-segmented", y);
class k extends u {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    let t = [];
    try {
      const i = JSON.parse(this.attr("steps", "[]"));
      Array.isArray(i) && (t = i.map(String));
    } catch {
      t = [];
    }
    const e = this.numAttr("current", 0);
    this.root.innerHTML = `
      <ol>
        ${t.map((i, r) => {
      const a = r < e ? "done" : r === e ? "active" : "";
      return `
              ${r > 0 ? '<div class="sep" aria-hidden="true"></div>' : ""}
              <li class="${a}">
                <span class="num">${r < e ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">${c.check}</svg>` : r + 1}</span>
                <span>${o(i)}</span>
              </li>
            `;
    }).join("")}
      </ol>
    `;
  }
}
d(k, "observedAttributes", ["steps", "current"]);
v("dv-steps", k);
class w extends u {
  static get componentStyles() {
    return `
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
  attributeChangedCallback(t, e, i) {
    if (t === "value" && this.root.querySelector(".rail")) {
      const r = i ?? "";
      this.root.querySelectorAll(".item").forEach((a) => {
        a.setAttribute("aria-current", a.dataset.id === r ? "page" : "false");
      });
      return;
    }
    super.attributeChangedCallback(t, e, i);
  }
  renderItems(t, e) {
    return t.map((i) => {
      const r = c[i.icon] ?? c.layers;
      return `
          <button
            type="button"
            class="item"
            data-id="${o(i.id)}"
            aria-current="${i.id === e ? "page" : "false"}"
            aria-label="${o(i.label)}"
          >
            <span class="icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${r}</svg>
            </span>
            <span class="label">${o(i.label)}</span>
            <span class="tooltip" role="tooltip">${o(i.label)}</span>
          </button>
        `;
    }).join("");
  }
  render() {
    var h;
    const t = this.getItems(), e = this.attr("value", ((h = t[0]) == null ? void 0 : h.id) ?? ""), i = this.boolAttr("expanded"), r = this.attr("justify", "top"), a = t.some((s) => s.align), l = a ? t.filter((s) => !s.align || s.align === "top") : t, p = a ? t.filter((s) => s.align === "center") : [], b = a ? t.filter((s) => s.align === "bottom") : [];
    this.root.innerHTML = `
      <nav class="rail ${i ? "expanded" : ""} ${a ? "" : `justify-${r}`}" aria-label="Navigation rail">
        <div class="section section-top">
          ${this.renderItems(l, e)}
        </div>
        ${p.length ? `<div class="section section-center">${this.renderItems(p, e)}</div>` : ""}
        ${b.length ? `<div class="section section-bottom">${this.renderItems(b, e)}</div>` : ""}
        <slot name="footer"></slot>
      </nav>
    `, this.root.querySelectorAll(".item").forEach((s) => {
      s.addEventListener("click", () => {
        const g = s.dataset.id ?? "";
        this.setAttribute("value", g), this.emit("dv-change", { value: g });
      });
    });
  }
}
d(w, "observedAttributes", ["items", "value", "expanded", "justify"]);
v("dv-nav-rail", w);
export {
  m as DvBreadcrumbs,
  w as DvNavRail,
  x as DvPagination,
  y as DvSegmented,
  k as DvSteps,
  f as DvTabs
};
//# sourceMappingURL=navigation.js.map
