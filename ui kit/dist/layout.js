var _ = Object.defineProperty;
var z = (n, a, t) => a in n ? _(n, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[a] = t;
var o = (n, a, t) => z(n, typeof a != "symbol" ? a + "" : a, t);
import { d as l, a as c, D as g } from "./icons-D-sxLAgG.js";
class b extends c {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const a = this.attr("size", "lg"), t = this.attr("padding", "md");
    this.root.innerHTML = `<div class="container size-${a} pad-${t}"><slot></slot></div>`;
  }
}
o(b, "observedAttributes", ["size", "padding"]);
l("dv-container", b);
class f extends c {
  static get componentStyles() {
    return `
      :host { display: block; }
      .stack { display: flex; }
    `;
  }
  render() {
    const a = this.attr("direction", "vertical") === "horizontal" ? "row" : "column", t = this.attr("gap", "4"), e = /^\d+$/.test(t) ? `var(--dv-space-${t})` : t, i = this.attr("align", a === "row" ? "center" : "stretch"), d = this.attr("justify", "flex-start"), r = this.boolAttr("wrap") ? "wrap" : "nowrap";
    this.root.innerHTML = `
      <div class="stack" style="flex-direction:${a};gap:${e};align-items:${i};justify-content:${d};flex-wrap:${r}">
        <slot></slot>
      </div>
    `;
  }
}
o(f, "observedAttributes", ["direction", "gap", "align", "justify", "wrap"]);
l("dv-stack", f);
class x extends c {
  static get componentStyles() {
    return `
      :host { display: block; }
      .grid { display: grid; width: 100%; }
    `;
  }
  render() {
    const a = this.attr("cols", "auto-fit"), t = this.attr("min-width", "260px"), e = this.attr("gap", "4"), i = /^\d+$/.test(e) ? `var(--dv-space-${e})` : e, d = a === "auto-fit" ? `repeat(auto-fit, minmax(min(${t}, 100%), 1fr))` : `repeat(${a}, minmax(0, 1fr))`;
    this.root.innerHTML = `
      <div class="grid" style="grid-template-columns:${d};gap:${i}">
        <slot></slot>
      </div>
    `;
  }
}
o(x, "observedAttributes", ["cols", "min-width", "gap"]);
l("dv-grid", x);
class y extends c {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const a = this.attr("padding", "md"), t = this.attr("variant", "elevated"), e = this.boolAttr("interactive"), i = this.boolAttr("horizontal");
    this.root.innerHTML = `
      <div class="card variant-${t} pad-${a} ${e ? "interactive" : ""} ${i ? "horizontal" : ""}">
        <div class="media"><slot name="media"></slot></div>
        <div class="content">
          <div class="header"><slot name="header"></slot></div>
          <slot></slot>
          <div class="footer"><slot name="footer"></slot></div>
        </div>
      </div>
    `;
  }
}
o(y, "observedAttributes", ["padding", "variant", "interactive", "horizontal"]);
l("dv-card", y);
class w extends c {
  constructor() {
    super(...arguments);
    o(this, "_mobileOpen", !1);
  }
  static get componentStyles() {
    return `
      :host { display: block; min-height: 100dvh; background: var(--dv-bg); color: var(--dv-text-primary); overflow-x: clip; }
      .shell { display: flex; flex-direction: column; min-height: 100dvh; width: 100%; }
      .header {
        position: sticky;
        top: 0;
        z-index: var(--dv-z-sticky);
        background: var(--dv-bg);
        min-height: 56px;
        display: flex;
        align-items: center;
        padding: var(--dv-space-2) var(--dv-space-3);
        gap: var(--dv-space-2);
      }
      .menu-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        flex-shrink: 0;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        cursor: pointer;
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) var(--dv-ease);
      }
      .menu-btn:active { transform: scale(0.96); }
      .header-content { flex: 1; min-width: 0; display: flex; align-items: center; justify-content: space-between; gap: var(--dv-space-2); }
      .body { display: flex; flex: 1; position: relative; min-width: 0; }
      .sidebar {
        position: fixed;
        top: 56px;
        left: 0;
        bottom: 0;
        width: min(84vw, var(--_sidebar-w, 260px));
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-shadow-lg);
        padding: var(--dv-space-4) var(--dv-space-3) var(--dv-space-8);
        overflow-y: auto;
        overscroll-behavior: contain;
        -webkit-overflow-scrolling: touch;
        z-index: var(--dv-z-overlay);
        transform: translateX(-105%);
        transition: transform var(--dv-duration-base) var(--dv-ease);
      }
      .sidebar.open { transform: translateX(0); }
      .backdrop {
        display: none;
        position: fixed;
        inset: 56px 0 0 0;
        background: rgba(0, 0, 0, 0.42);
        z-index: calc(var(--dv-z-overlay) - 1);
      }
      .backdrop.open { display: block; }
      .main {
        flex: 1;
        min-width: 0;
        max-width: 100%;
        padding: var(--dv-space-5) var(--dv-space-3) var(--dv-space-10);
      }
      @media (min-width: 640px) {
        .header { padding-inline: var(--dv-space-4); gap: var(--dv-space-3); }
        .main { padding: var(--dv-space-6) var(--dv-space-5) var(--dv-space-10); }
      }
      @media (min-width: 960px) {
        .header { padding-inline: var(--dv-space-6); }
        .menu-btn { display: none; }
        .backdrop { display: none !important; }
        .sidebar {
          position: sticky;
          top: 56px;
          width: var(--_sidebar-w, 240px);
          height: calc(100dvh - 56px);
          background: transparent;
          box-shadow: none;
          padding: var(--dv-space-6) var(--dv-space-4) var(--dv-space-6) var(--dv-space-6);
          transform: translateX(0);
          flex-shrink: 0;
        }
        .main { padding: var(--dv-space-8) var(--dv-space-8) var(--dv-space-12); }
      }
    `;
  }
  closeSidebar() {
    this._mobileOpen = !1, this.syncOpen();
  }
  syncOpen() {
    var t, e;
    (t = this.root.querySelector(".sidebar")) == null || t.classList.toggle("open", this._mobileOpen), (e = this.root.querySelector(".backdrop")) == null || e.classList.toggle("open", this._mobileOpen);
  }
  render() {
    var e, i;
    const t = this.attr("sidebar-width", "250px");
    this.root.innerHTML = `
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
    `, (e = this.root.querySelector(".menu-btn")) == null || e.addEventListener("click", () => {
      this._mobileOpen = !this._mobileOpen, this.syncOpen();
    }), (i = this.root.querySelector(".backdrop")) == null || i.addEventListener("click", () => {
      this.closeSidebar();
    });
  }
}
o(w, "observedAttributes", ["sidebar-width"]);
l("dv-app-shell", w);
class k extends c {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const a = this.attr("ratio", "16/9"), t = this.attr("radius", "md"), e = this.attr("fit", "cover");
    this.root.innerHTML = `
      <div class="frame rad-${t}" style="aspect-ratio:${a};--_fit:${e}">
        <slot></slot>
      </div>
    `;
  }
}
o(k, "observedAttributes", ["ratio", "radius", "fit"]);
l("dv-aspect-ratio", k);
class $ extends c {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    var d, r;
    const a = this.attr("gap", "4"), t = /^\d+$/.test(a) ? `var(--dv-space-${a})` : a, e = this.numAttr("step", 280);
    this.root.innerHTML = `
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
    `;
    const i = this.root.querySelector(".viewport");
    (d = this.root.querySelector(".prev")) == null || d.addEventListener("click", () => {
      i.scrollBy({ left: -e, behavior: "smooth" });
    }), (r = this.root.querySelector(".next")) == null || r.addEventListener("click", () => {
      i.scrollBy({ left: e, behavior: "smooth" });
    });
  }
}
o($, "observedAttributes", ["gap", "step"]);
l("dv-carousel", $);
class S extends c {
  constructor() {
    super(...arguments);
    o(this, "_dragging", !1);
    o(this, "_syncing", !1);
  }
  static get componentStyles() {
    return `
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
    `;
  }
  attributeChangedCallback(t, e, i) {
    if (t === "value" && this.root.querySelector(".split")) {
      if (this._syncing) return;
      const d = this.numAttr("min", 20), r = this.numAttr("max", 80), h = Math.round(Math.min(r, Math.max(d, Number(i ?? 50))));
      this.syncVisual(h);
      return;
    }
    super.attributeChangedCallback(t, e, i);
  }
  syncVisual(t) {
    const e = this.root.querySelector(".split"), i = this.root.querySelector(".divider");
    e && e.style.setProperty("--_split", `${t}%`), i && i.setAttribute("aria-valuenow", String(t));
  }
  render() {
    const t = this.numAttr("min", 20), e = this.numAttr("max", 80), i = Math.min(e, Math.max(t, this.numAttr("value", 50)));
    this.root.innerHTML = `
      <div class="split" style="--_split:${i}%">
        <div class="pane left"><slot name="left"></slot></div>
        <div class="divider" role="separator" aria-orientation="vertical" aria-valuemin="${t}" aria-valuemax="${e}" aria-valuenow="${i}" tabindex="0">
          <div class="grip"></div>
        </div>
        <div class="pane right"><slot name="right"></slot></div>
      </div>
    `;
    const d = this.root.querySelector(".split"), r = this.root.querySelector(".divider"), h = (s) => {
      const v = d.getBoundingClientRect();
      if (v.width <= 0) return;
      const p = (s - v.left) / v.width * 100, u = Math.round(Math.min(e, Math.max(t, p)));
      this.syncVisual(u), this._syncing = !0, this.setAttribute("value", String(u)), this._syncing = !1, this.emit("dv-resize", { value: u });
    };
    r.addEventListener("pointerdown", (s) => {
      s.preventDefault(), this._dragging = !0, d.classList.add("dragging"), r.classList.add("dragging"), r.setPointerCapture(s.pointerId), h(s.clientX);
    }), r.addEventListener("pointermove", (s) => {
      this._dragging && h(s.clientX);
    });
    const m = (s) => {
      this._dragging && (this._dragging = !1, d.classList.remove("dragging"), r.classList.remove("dragging"), r.hasPointerCapture(s.pointerId) && r.releasePointerCapture(s.pointerId));
    };
    r.addEventListener("pointerup", m), r.addEventListener("pointercancel", m), r.addEventListener("keydown", (s) => {
      const v = this.numAttr("value", 50);
      let p = v;
      if (s.key === "ArrowRight") p = Math.min(e, v + 5);
      else if (s.key === "ArrowLeft") p = Math.max(t, v - 5);
      else return;
      s.preventDefault(), this.syncVisual(p), this._syncing = !0, this.setAttribute("value", String(p)), this._syncing = !1, this.emit("dv-resize", { value: p });
    });
  }
}
o(S, "observedAttributes", ["value", "min", "max"]);
l("dv-split-pane", S);
export {
  w as DvAppShell,
  k as DvAspectRatio,
  y as DvCard,
  $ as DvCarousel,
  b as DvContainer,
  x as DvGrid,
  S as DvSplitPane,
  f as DvStack
};
//# sourceMappingURL=layout.js.map
