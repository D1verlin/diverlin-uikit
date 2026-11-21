var Z = Object.defineProperty;
var K = (p, i, r) => i in p ? Z(p, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : p[i] = r;
var d = (p, i, r) => K(p, typeof i != "symbol" ? i + "" : i, r);
import { d as v, a as h, e as l, D as x } from "./icons-D-sxLAgG.js";
class w extends h {
  static get componentStyles() {
    return `
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
    `;
  }
  replay() {
    this.render();
  }
  render() {
    var s;
    const i = this.attr("text", ((s = this.textContent) == null ? void 0 : s.trim()) || "Diverlin UI Kit"), r = this.attr("by", "words"), t = this.numAttr("delay", 55), a = this.attr("direction", "bottom"), e = r === "chars" ? Array.from(i) : i.split(/\s+/);
    this.root.innerHTML = `
      <span class="wrap by-${r} dir-${a}">
        ${e.map((n, o) => {
      const c = n === " " ? "&nbsp;" : l(n);
      return `<span class="unit" style="--_d:${o * t}ms">${c}</span>`;
    }).join("")}
      </span>
    `;
  }
}
d(w, "observedAttributes", ["text", "by", "delay", "direction"]);
v("dv-blur-text", w);
class k extends h {
  static get componentStyles() {
    return `
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
    `;
  }
  replay() {
    this.render();
  }
  render() {
    var e;
    const i = this.attr("text", ((e = this.textContent) == null ? void 0 : e.trim()) || "Чистая типографика"), r = this.attr("by", "chars"), t = this.numAttr("stagger", 28), a = r === "words" ? i.split(/\s+/) : Array.from(i);
    this.root.innerHTML = `
      <span class="wrap by-${r}">
        ${a.map((s, n) => {
      const o = s === " " ? "&nbsp;" : l(s);
      return `<span class="mask"><span class="unit" style="--_d:${n * t}ms">${o}</span></span>`;
    }).join("")}
      </span>
    `;
  }
}
d(k, "observedAttributes", ["text", "by", "stagger"]);
v("dv-split-text", k);
const y = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#*+=";
class _ extends h {
  constructor() {
    super(...arguments);
    d(this, "_timer", null);
  }
  static get componentStyles() {
    return `
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
    `;
  }
  onUnmount() {
    this._timer && window.clearInterval(this._timer);
  }
  scramble() {
    const r = this.attr("text", "DIVERLIN_SYSTEM_READY"), t = Math.max(15, this.numAttr("speed", 35)), a = this.root.querySelector(".txt");
    if (!a) return;
    this._timer && window.clearInterval(this._timer);
    let e = 0;
    this._timer = window.setInterval(() => {
      const s = Array.from(r).map((n, o) => {
        if (n === " ") return " ";
        if (o < Math.floor(e)) return l(n);
        const c = y[Math.floor(Math.random() * y.length)];
        return `<span class="cipher">${l(c)}</span>`;
      }).join("");
      a.innerHTML = s, e += 0.5, e >= r.length && (this._timer && window.clearInterval(this._timer), a.textContent = r);
    }, t);
  }
  render() {
    const r = this.attr("text", "DIVERLIN_SYSTEM_READY"), t = this.attr("trigger", "hover");
    this.root.innerHTML = `<span class="txt">${l(r)}</span>`;
    const a = this.root.querySelector(".txt");
    a.addEventListener("mouseenter", () => {
      (t === "hover" || t === "both") && this.scramble();
    }), a.addEventListener("click", () => this.scramble()), (t === "mount" || t === "both") && this.scramble();
  }
}
d(_, "observedAttributes", ["text", "trigger", "speed"]);
v("dv-decrypted-text", _);
class $ extends h {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const i = this.attr("text", "Наведите курсор"), r = this.numAttr("stagger", 16);
    this.root.innerHTML = `
      <span class="roll" aria-label="${l(i)}">
        ${Array.from(i).map((t, a) => {
      const e = t === " " ? "&nbsp;" : l(t);
      return `
            <span class="cell" aria-hidden="true">
              <span class="track" style="--_d:${a * r}ms">
                <span class="ch">${e}</span>
                <span class="ch">${e}</span>
              </span>
            </span>
          `;
    }).join("")}
      </span>
    `;
  }
}
d($, "observedAttributes", ["text", "stagger"]);
v("dv-rolling-text", $);
class A extends h {
  constructor() {
    super(...arguments);
    d(this, "_idx", 0);
    d(this, "_timer", null);
  }
  static get componentStyles() {
    return `
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
    `;
  }
  onUnmount() {
    this._timer && window.clearInterval(this._timer);
  }
  getWords() {
    try {
      const r = JSON.parse(this.attr("words", '["Быстрый","Чистый","Точный"]'));
      return Array.isArray(r) && r.length ? r.map(String) : ["Быстрый"];
    } catch {
      return ["Быстрый", "Чистый", "Точный"];
    }
  }
  render() {
    this._timer && window.clearInterval(this._timer);
    const r = this.attr("prefix", "Интерфейс:"), t = this.getWords(), a = Math.max(800, this.numAttr("interval", 2200));
    this._idx = 0, this.root.innerHTML = `
      <span class="row">
        ${r ? `<span>${l(r)}</span>` : ""}
        <span class="pill"><span class="word">${l(t[0])}</span></span>
      </span>
    `;
    const e = this.root.querySelector(".pill");
    this._timer = window.setInterval(() => {
      this._idx = (this._idx + 1) % t.length, e.innerHTML = `<span class="word">${l(t[this._idx])}</span>`;
    }, a);
  }
}
d(A, "observedAttributes", ["prefix", "words", "interval"]);
v("dv-rotating-text", A);
class S extends h {
  constructor() {
    super(...arguments);
    d(this, "_raf", null);
  }
  static get componentStyles() {
    return `
      :host { display: inline-block; }
      .num {
        font-family: var(--dv-font-display);
        font-size: var(--dv-text-display);
        font-variant-numeric: tabular-nums;
        color: var(--dv-text-primary);
      }
    `;
  }
  onUnmount() {
    this._raf && cancelAnimationFrame(this._raf);
  }
  replay() {
    this.startCount();
  }
  formatNum(r) {
    return Math.round(r).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  startCount() {
    this._raf && cancelAnimationFrame(this._raf);
    const r = this.numAttr("from", 0), t = this.numAttr("to", 1280), a = Math.max(200, this.numAttr("duration", 1200)), e = this.attr("prefix", ""), s = this.attr("suffix", ""), n = this.root.querySelector(".val");
    if (!n) return;
    const o = performance.now(), c = (m) => {
      const u = Math.min(1, (m - o) / a), f = 1 - Math.pow(1 - u, 3), g = r + (t - r) * f;
      n.textContent = `${e}${this.formatNum(g)}${s}`, u < 1 && (this._raf = requestAnimationFrame(c));
    };
    this._raf = requestAnimationFrame(c);
  }
  render() {
    const r = this.attr("prefix", ""), t = this.attr("suffix", ""), a = this.numAttr("from", 0);
    this.root.innerHTML = `<span class="num"><span class="val">${l(r + this.formatNum(a) + t)}</span></span>`, this.startCount();
  }
}
d(S, "observedAttributes", ["from", "to", "duration", "prefix", "suffix"]);
v("dv-count-up", S);
class M extends h {
  constructor() {
    super(...arguments);
    d(this, "_activeIdx", 0);
    d(this, "_timer", null);
  }
  static get componentStyles() {
    return `
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
    `;
  }
  onUnmount() {
    this._timer && window.clearInterval(this._timer);
  }
  syncBox() {
    const r = this.root.querySelectorAll(".word"), t = this.root.querySelector(".box");
    r.forEach((e, s) => e.classList.toggle("active", s === this._activeIdx));
    const a = r[this._activeIdx];
    a && t && (t.style.width = `${a.offsetWidth}px`, t.style.height = `${a.offsetHeight}px`, t.style.transform = `translate(${a.offsetLeft}px, ${a.offsetTop}px)`);
  }
  render() {
    this._timer && window.clearInterval(this._timer);
    const r = this.attr("text", "Фокус На Важном Слове"), t = this.attr("mode", "hover"), a = Math.max(900, this.numAttr("interval", 1600)), e = r.split(/\s+/).filter(Boolean);
    this._activeIdx = 0, this.root.innerHTML = `
      <div class="stage">
        <div class="box" aria-hidden="true"></div>
        ${e.map((s, n) => `<span class="word ${n === 0 ? "active" : ""}" data-idx="${n}">${l(s)}</span>`).join("")}
      </div>
    `, requestAnimationFrame(() => this.syncBox()), this.root.querySelectorAll(".word").forEach((s) => {
      s.addEventListener("mouseenter", () => {
        this._activeIdx = Number(s.dataset.idx ?? 0), this.syncBox();
      });
    }), t === "auto" && (this._timer = window.setInterval(() => {
      this._activeIdx = (this._activeIdx + 1) % e.length, this.syncBox();
    }, a));
  }
}
d(M, "observedAttributes", ["text", "mode", "interval"]);
v("dv-true-focus", M);
class E extends h {
  constructor() {
    super(...arguments);
    d(this, "_timer", null);
  }
  static get componentStyles() {
    return `
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
    `;
  }
  onUnmount() {
    this._timer && window.clearTimeout(this._timer);
  }
  getWords() {
    try {
      const r = JSON.parse(this.attr("words", '["Web Components","Pure CSS Tokens","Zero Dependencies"]'));
      return Array.isArray(r) && r.length ? r.map(String) : ["Diverlin UI"];
    } catch {
      return ["Diverlin UI"];
    }
  }
  render() {
    this._timer && window.clearTimeout(this._timer);
    const r = this.getWords(), t = Math.max(25, this.numAttr("speed", 70)), a = this.hasAttribute("loop") ? this.boolAttr("loop") : !0;
    this.root.innerHTML = `<span class="wrap"><span class="txt">${l(r[0])}</span><span class="cursor" aria-hidden="true"></span></span>`;
    const e = this.root.querySelector(".txt");
    let s = 0, n = 0, o = !1;
    const c = () => {
      const m = r[s];
      if (o)
        n--, e.textContent = m.slice(0, n), n <= 0 && (o = !1, s = (s + 1) % r.length);
      else if (n++, e.textContent = m.slice(0, n), n >= m.length) {
        if (!a && s === r.length - 1) return;
        o = !0, this._timer = window.setTimeout(c, 1100);
        return;
      }
      this._timer = window.setTimeout(c, o ? t / 2 : t);
    };
    e.textContent = "", this._timer = window.setTimeout(c, t);
  }
}
d(E, "observedAttributes", ["words", "speed", "loop"]);
v("dv-typewriter", E);
class L extends h {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const i = this.attr("text", "DIVERLIN UI KIT • WEB COMPONENTS • "), r = i.endsWith(" ") ? i : `${i} • `, t = this.numAttr("radius", 62), a = Math.max(4, this.numAttr("speed", 14)), e = Array.from(r), s = 360 / Math.max(1, e.length);
    this.root.innerHTML = `
      <div class="ring" style="--_r:${t}px;--_spd:${a}s" aria-label="${l(i)}">
        ${e.map((n, o) => `<span class="ch" style="transform: rotate(${(o * s).toFixed(2)}deg) translateY(-${t}px) translateX(-50%)" aria-hidden="true">${l(n)}</span>`).join("")}
      </div>
    `;
  }
}
d(L, "observedAttributes", ["text", "radius", "speed"]);
v("dv-circular-text", L);
class z extends h {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const i = this.attr("text", "Наведите курсор на буквы"), r = Math.max(40, this.numAttr("radius", 110));
    this.root.innerHTML = `
      <div class="wrap" aria-label="${l(i)}">
        ${Array.from(i).map((e) => `<span class="ch" aria-hidden="true">${e === " " ? "&nbsp;" : l(e)}</span>`).join("")}
      </div>
    `;
    const t = this.root.querySelector(".wrap"), a = Array.from(this.root.querySelectorAll(".ch"));
    t.addEventListener("pointermove", (e) => {
      a.forEach((s) => {
        const n = s.getBoundingClientRect(), o = n.left + n.width / 2, c = n.top + n.height / 2, m = Math.hypot(e.clientX - o, e.clientY - c), u = Math.max(0, 1 - m / r), f = Math.round(400 + u * 300), g = (1 + u * 0.24).toFixed(3), G = (0.72 + u * 0.28).toFixed(2);
        s.style.fontWeight = String(f), s.style.transform = `translateY(${(-u * 4).toFixed(1)}px) scale(${g})`, s.style.opacity = G;
      });
    }), t.addEventListener("pointerleave", () => {
      a.forEach((e) => {
        e.style.fontWeight = "400", e.style.transform = "scale(1)", e.style.opacity = "0.72";
      });
    });
  }
}
d(z, "observedAttributes", ["text", "radius"]);
v("dv-variable-proximity", z);
class I extends h {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const i = this.attr("text", "PRESSURE WAVE"), r = Math.max(50, this.numAttr("radius", 130));
    this.root.innerHTML = `
      <div class="wrap" aria-label="${l(i)}">
        ${Array.from(i).map((e) => `<span class="ch" aria-hidden="true">${e === " " ? "&nbsp;" : l(e)}</span>`).join("")}
      </div>
    `;
    const t = this.root.querySelector(".wrap"), a = Array.from(this.root.querySelectorAll(".ch"));
    t.addEventListener("pointermove", (e) => {
      a.forEach((s) => {
        const n = s.getBoundingClientRect(), o = n.left + n.width / 2, c = Math.abs(e.clientX - o), m = Math.max(0, 1 - c / r), u = (1 + m * 0.42).toFixed(3), f = (1 - m * 0.14).toFixed(3);
        s.style.transform = `scale(${f}, ${u})`;
      });
    }), t.addEventListener("pointerleave", () => {
      a.forEach((e) => {
        e.style.transform = "scale(1, 1)";
      });
    });
  }
}
d(I, "observedAttributes", ["text", "radius"]);
v("dv-text-pressure", I);
const b = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";
class C extends h {
  constructor() {
    super(...arguments);
    d(this, "_timer", null);
  }
  static get componentStyles() {
    return `
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
    `;
  }
  onUnmount() {
    this._timer && window.clearInterval(this._timer);
  }
  flip() {
    const r = this.attr("text", "DEPARTURE 24").toUpperCase(), t = Math.max(20, this.numAttr("speed", 40)), a = Array.from(this.root.querySelectorAll(".tile"));
    if (!a.length) return;
    this._timer && window.clearInterval(this._timer);
    let e = 0;
    this._timer = window.setInterval(() => {
      e++;
      let s = !0;
      a.forEach((n, o) => {
        const c = r[o] ?? " ";
        e >= o * 2 + 6 ? n.textContent = c : (s = !1, n.textContent = b[Math.floor(Math.random() * b.length)]);
      }), s && this._timer && window.clearInterval(this._timer);
    }, t);
  }
  render() {
    const r = this.attr("text", "DEPARTURE 24").toUpperCase();
    this.root.innerHTML = `
      <div class="board" role="button" tabindex="0" aria-label="${l(r)}">
        ${Array.from(r).map((a) => `<span class="tile" aria-hidden="true">${l(a)}</span>`).join("")}
      </div>
    `;
    const t = this.root.querySelector(".board");
    t.addEventListener("click", () => this.flip()), t.addEventListener("mouseenter", () => this.flip()), this.flip();
  }
}
d(C, "observedAttributes", ["text", "speed"]);
v("dv-split-flap", C);
class T extends h {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const i = this.attr("text", "Хромированный тональный блик"), r = Math.max(1, this.numAttr("speed", 3));
    this.root.innerHTML = `<span class="shiny" style="--_spd:${r}s">${l(i)}</span>`;
  }
}
d(T, "observedAttributes", ["text", "speed"]);
v("dv-shiny-text", T);
class q extends h {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const i = this.attr("text", "ECHO DEPTH"), r = Math.min(6, Math.max(2, this.numAttr("layers", 4)));
    this.root.innerHTML = `
      <div class="stage">
        ${Array.from({ length: r }, (e, s) => {
      const n = s + 1, o = Math.max(0.12, 0.45 - s * 0.1).toFixed(2);
      return `<span class="layer" data-depth="${n}" style="opacity:${o};transform:translate(${n * 3}px, ${n * 3}px)" aria-hidden="true">${l(i)}</span>`;
    }).join("")}
        <span class="front">${l(i)}</span>
      </div>
    `;
    const t = this.root.querySelector(".stage"), a = Array.from(this.root.querySelectorAll(".layer"));
    t.addEventListener("pointermove", (e) => {
      const s = t.getBoundingClientRect(), n = (e.clientX - s.left) / s.width - 0.5, o = (e.clientY - s.top) / s.height - 0.5;
      a.forEach((c) => {
        const m = Number(c.dataset.depth ?? 1);
        c.style.transform = `translate(${(n * m * 18).toFixed(1)}px, ${(o * m * 18).toFixed(1)}px)`;
      });
    }), t.addEventListener("pointerleave", () => {
      a.forEach((e) => {
        const s = Number(e.dataset.depth ?? 1);
        e.style.transform = `translate(${s * 3}px, ${s * 3}px)`;
      });
    });
  }
}
d(q, "observedAttributes", ["text", "layers"]);
v("dv-echo-text", q);
class Y extends h {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const i = this.attr("text", "DIVERLIN DESIGN SYSTEM • ZERO RUNTIME •"), r = Math.max(4, this.numAttr("speed", 16)), t = `<span>${l(i)}</span><span>${l(i)}</span>`;
    this.root.innerHTML = `
      <div class="stack" style="--_spd:${r}s">
        <div class="row">
          <div class="track">${t}</div>
          <div class="track" aria-hidden="true">${t}</div>
        </div>
        <div class="row reverse">
          <div class="track">${t}</div>
          <div class="track" aria-hidden="true">${t}</div>
        </div>
      </div>
    `;
  }
}
d(Y, "observedAttributes", ["text", "speed"]);
v("dv-scroll-velocity", Y);
class H extends h {
  static get componentStyles() {
    return `
      :host { display: inline-block; }
      .mag {
        display: inline-block;
        transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
        will-change: transform;
      }
      .mag.tracking {
        transition: transform 60ms linear;
      }
    `;
  }
  render() {
    const i = this.numAttr("strength", 0.35), r = this.boolAttr("disabled");
    if (this.root.innerHTML = '<div class="mag"><slot></slot></div>', r) return;
    const t = this.root.querySelector(".mag");
    this.addEventListener("pointermove", (a) => {
      const e = this.getBoundingClientRect(), s = e.left + e.width / 2, n = e.top + e.height / 2, o = (a.clientX - s) * i, c = (a.clientY - n) * i;
      t.classList.add("tracking"), t.style.transform = `translate3d(${o.toFixed(1)}px, ${c.toFixed(1)}px, 0)`;
    }), this.addEventListener("pointerleave", () => {
      t.classList.remove("tracking"), t.style.transform = "translate3d(0, 0, 0)";
    });
  }
}
d(H, "observedAttributes", ["strength", "disabled"]);
v("dv-magnetic", H);
class X extends h {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const i = this.numAttr("size", 240), r = this.attr("padding", "lg");
    this.root.innerHTML = `
      <div class="card pad-${r}" style="--_size:${i}px">
        <div class="spot" aria-hidden="true"></div>
        <div class="body"><slot></slot></div>
      </div>
    `;
    const t = this.root.querySelector(".card");
    t.addEventListener("pointermove", (a) => {
      const e = t.getBoundingClientRect();
      t.style.setProperty("--_x", `${a.clientX - e.left}px`), t.style.setProperty("--_y", `${a.clientY - e.top}px`);
    });
  }
}
d(X, "observedAttributes", ["size", "padding"]);
v("dv-spotlight-card", X);
class j extends h {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const i = this.numAttr("max-tilt", 10), r = this.attr("padding", "lg");
    this.root.innerHTML = `<div class="tilt pad-${r}"><slot></slot></div>`;
    const t = this.root.querySelector(".tilt");
    t.addEventListener("pointermove", (a) => {
      const e = t.getBoundingClientRect(), s = (a.clientX - e.left) / e.width - 0.5, o = (-((a.clientY - e.top) / e.height - 0.5) * i * 2).toFixed(2), c = (s * i * 2).toFixed(2);
      t.classList.add("active"), t.style.transform = `rotateX(${o}deg) rotateY(${c}deg)`;
    }), t.addEventListener("pointerleave", () => {
      t.classList.remove("active"), t.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  }
}
d(j, "observedAttributes", ["max-tilt", "padding"]);
v("dv-tilt-card", j);
class D extends h {
  static get componentStyles() {
    return `
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
    `;
  }
  getItems() {
    try {
      const i = JSON.parse(this.attr("items", '["Web Components","Pure CSS","Onest","Dela Gothic One","Zero Runtime Deps","Borderless UI"]'));
      return Array.isArray(i) && i.length ? i.map(String) : ["Diverlin UI"];
    } catch {
      return ["Diverlin UI"];
    }
  }
  render() {
    const i = this.getItems(), r = Math.max(5, this.numAttr("speed", 16)), t = this.attr("direction", "left"), a = this.hasAttribute("pause-on-hover") ? this.boolAttr("pause-on-hover") : !0, e = i.map((s) => `<span class="pill">${l(s)}</span>`).join("");
    this.root.innerHTML = `
      <div class="marquee dir-${t} ${a ? "pause" : ""}" style="--_dur:${r}s">
        <div class="track">${e}</div>
        <div class="track" aria-hidden="true">${e}</div>
      </div>
    `;
  }
}
d(D, "observedAttributes", ["items", "speed", "direction", "pause-on-hover"]);
v("dv-marquee", D);
class R extends h {
  static get componentStyles() {
    return `
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
    `;
  }
  getItems() {
    try {
      const i = JSON.parse(
        this.attr(
          "items",
          '[{"id":"home","label":"Главная","icon":"home"},{"id":"search","label":"Поиск","icon":"search"},{"id":"layers","label":"Слои","icon":"layers"},{"id":"code","label":"Код","icon":"code"},{"id":"settings","label":"Настройки","icon":"settings"}]'
        )
      );
      return Array.isArray(i) ? i : [];
    } catch {
      return [];
    }
  }
  render() {
    const i = this.getItems(), r = this.numAttr("base-size", 42), t = this.numAttr("max-size", 58);
    this.root.innerHTML = `
      <div class="dock" role="toolbar" aria-label="Dock">
        ${i.map((s) => {
      const n = x[s.icon] ?? x.layers;
      return `
            <button type="button" class="item" data-id="${l(s.id)}" style="--_sz:${r}px" aria-label="${l(s.label)}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${n}</svg>
              <span class="tip" role="tooltip">${l(s.label)}</span>
            </button>
          `;
    }).join("")}
      </div>
    `;
    const a = this.root.querySelector(".dock"), e = Array.from(this.root.querySelectorAll(".item"));
    a.addEventListener("pointermove", (s) => {
      e.forEach((n) => {
        const o = n.getBoundingClientRect(), c = o.left + o.width / 2, m = Math.abs(s.clientX - c), u = Math.max(0, 1 - m / 110), f = r + (t - r) * u;
        n.style.setProperty("--_sz", `${f.toFixed(1)}px`);
      });
    }), a.addEventListener("pointerleave", () => {
      e.forEach((s) => s.style.setProperty("--_sz", `${r}px`));
    }), e.forEach((s) => {
      s.addEventListener("click", () => {
        this.emit("dv-select", { id: s.dataset.id ?? "" });
      });
    });
  }
}
d(R, "observedAttributes", ["items", "base-size", "max-size"]);
v("dv-dock", R);
class N extends h {
  constructor() {
    super(...arguments);
    d(this, "_order", []);
  }
  static get componentStyles() {
    return `
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
    `;
  }
  getItems() {
    try {
      const r = JSON.parse(
        this.attr(
          "items",
          '[{"title":"Релиз v2.4","subtitle":"Нажмите на стопку для перелистывания","meta":"01 / 03"},{"title":"Токены поверхности","subtitle":"Безрамочный дизайн на полутонах","meta":"02 / 03"},{"title":"Локальные шрифты","subtitle":"Onest, Dela Gothic One и Montserrat","meta":"03 / 03"}]'
        )
      );
      return Array.isArray(r) ? r : [];
    } catch {
      return [];
    }
  }
  syncPositions() {
    const r = this.root.querySelectorAll(".card");
    r.forEach((t, a) => {
      const e = this._order.indexOf(a);
      t.dataset.pos = String(e), t.style.zIndex = String(r.length - e), t.style.transform = `translateY(${e * 12}px) scale(${1 - e * 0.045})`, t.style.opacity = String(Math.max(0.4, 1 - e * 0.2));
    });
  }
  render() {
    const r = this.getItems(), t = this.hasAttribute("fan-on-hover") ? this.boolAttr("fan-on-hover") : !0;
    this._order = r.map((s, n) => n), this.root.innerHTML = `
      <div class="deck ${t ? "fan" : ""}" role="button" tabindex="0" aria-label="Стопка карточек, нажмите для смены">
        ${r.map(
      (s) => `
          <div class="card">
            <div class="top-row">
              <span class="title">${l(s.title)}</span>
              ${s.meta ? `<span class="meta">${l(s.meta)}</span>` : ""}
            </div>
            ${s.subtitle ? `<div class="sub">${l(s.subtitle)}</div>` : ""}
          </div>
        `
    ).join("")}
      </div>
    `, this.syncPositions();
    const a = this.root.querySelector(".deck"), e = () => {
      if (this._order.length <= 1) return;
      const s = this._order.shift();
      this._order.push(s), this.syncPositions(), this.emit("dv-change", { activeIndex: this._order[0] });
    };
    a.addEventListener("click", e), a.addEventListener("keydown", (s) => {
      (s.key === "Enter" || s.key === " ") && (s.preventDefault(), e());
    });
  }
}
d(N, "observedAttributes", ["items", "fan-on-hover"]);
v("dv-card-stack", N);
class P extends h {
  static get componentStyles() {
    return `
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
    `;
  }
  getItems() {
    try {
      const i = JSON.parse(
        this.attr(
          "items",
          '[{"id":"home","label":"Обзор","icon":"home"},{"id":"layers","label":"Компоненты","icon":"layers"},{"id":"code","label":"Сниппеты","icon":"code"},{"id":"settings","label":"Настройки","icon":"settings"}]'
        )
      );
      return Array.isArray(i) ? i : [];
    } catch {
      return [];
    }
  }
  attributeChangedCallback(i, r, t) {
    if (i === "value" && this.root.querySelector(".bar")) {
      const a = t ?? "";
      this.root.querySelectorAll(".tab").forEach((e) => {
        e.setAttribute("aria-selected", String(e.dataset.id === a));
      });
      return;
    }
    super.attributeChangedCallback(i, r, t);
  }
  render() {
    var t;
    const i = this.getItems(), r = this.attr("value", ((t = i[0]) == null ? void 0 : t.id) ?? "");
    this.root.innerHTML = `
      <div class="bar" role="tablist">
        ${i.map((a) => {
      const e = x[a.icon] ?? x.layers;
      return `
            <button
              type="button"
              class="tab"
              role="tab"
              data-id="${l(a.id)}"
              aria-selected="${a.id === r}"
              aria-label="${l(a.label)}"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${e}</svg>
              <span class="label">${l(a.label)}</span>
            </button>
          `;
    }).join("")}
      </div>
    `, this.root.querySelectorAll(".tab").forEach((a) => {
      a.addEventListener("click", () => {
        const e = a.dataset.id ?? "";
        this.setAttribute("value", e), this.emit("dv-change", { value: e });
      });
    });
  }
}
d(P, "observedAttributes", ["items", "value"]);
v("dv-expandable-tabs", P);
class B extends h {
  constructor() {
    super(...arguments);
    d(this, "_dragging", !1);
    d(this, "_syncing", !1);
  }
  static get componentStyles() {
    return `
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
    `;
  }
  attributeChangedCallback(r, t, a) {
    var e;
    if (r === "value" && this.root.querySelector(".compare")) {
      if (this._syncing) return;
      const s = Math.min(100, Math.max(0, Number(a ?? 50)));
      (e = this.root.querySelector(".compare")) == null || e.style.setProperty("--_pos", `${s}%`);
      return;
    }
    super.attributeChangedCallback(r, t, a);
  }
  render() {
    const r = Math.min(100, Math.max(0, this.numAttr("value", 50)));
    this.root.innerHTML = `
      <div class="compare" style="--_pos:${r}%" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${r}" aria-label="Сравнение до и после">
        <div class="layer before"><slot name="before"></slot></div>
        <div class="layer after"><slot name="after"></slot></div>
        <div class="handle" aria-hidden="true"><div class="knob">↔</div></div>
      </div>
    `;
    const t = this.root.querySelector(".compare"), a = (s) => {
      const n = t.getBoundingClientRect();
      if (n.width <= 0) return;
      const o = Math.round(Math.min(100, Math.max(0, (s - n.left) / n.width * 100)));
      t.style.setProperty("--_pos", `${o}%`), t.setAttribute("aria-valuenow", String(o)), this._syncing = !0, this.setAttribute("value", String(o)), this._syncing = !1, this.emit("dv-change", { value: o });
    };
    t.addEventListener("pointerdown", (s) => {
      this._dragging = !0, t.setPointerCapture(s.pointerId), a(s.clientX);
    }), t.addEventListener("pointermove", (s) => {
      this._dragging && a(s.clientX);
    });
    const e = (s) => {
      this._dragging = !1, t.hasPointerCapture(s.pointerId) && t.releasePointerCapture(s.pointerId);
    };
    t.addEventListener("pointerup", e), t.addEventListener("pointercancel", e);
  }
}
d(B, "observedAttributes", ["value"]);
v("dv-compare-slider", B);
class F extends h {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const i = Math.min(16, Math.max(4, this.numAttr("count", 8))), r = Math.max(14, this.numAttr("radius", 28));
    this.root.innerHTML = '<div class="area"><slot></slot></div>';
    const t = this.root.querySelector(".area");
    t.addEventListener("pointerdown", (a) => {
      const e = t.getBoundingClientRect(), s = a.clientX - e.left, n = a.clientY - e.top, o = document.createElement("div");
      o.className = "burst", o.style.left = `${s}px`, o.style.top = `${n}px`;
      const c = 360 / i;
      for (let m = 0; m < i; m++) {
        const u = document.createElement("span");
        u.className = "ray", u.style.setProperty("--_ang", `${m * c}deg`), u.style.setProperty("--_rad", `-${r}px`), o.appendChild(u);
      }
      t.appendChild(o), window.setTimeout(() => o.remove(), 450);
    });
  }
}
d(F, "observedAttributes", ["count", "radius"]);
v("dv-click-spark", F);
class U extends h {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const i = this.attr("title", "Pixel Transition"), r = this.attr("subtitle", "Наведите курсор для волнового заполнения сетки"), t = Math.min(16, Math.max(6, this.numAttr("cols", 10))), e = t * 6, s = Array.from({ length: e }, (n, o) => {
      const c = Math.floor(o / t), m = o % t;
      return `<span class="px" style="--_d:${(c + m) * 18}ms"></span>`;
    }).join("");
    this.root.innerHTML = `
      <div class="card" style="--_cols:${t}">
        <div class="grid" aria-hidden="true">${s}</div>
        <div class="content">
          <div class="title">${l(i)}</div>
          ${r ? `<div class="sub">${l(r)}</div>` : ""}
        </div>
      </div>
    `;
  }
}
d(U, "observedAttributes", ["title", "subtitle", "cols"]);
v("dv-pixel-card", U);
class O extends h {
  static get componentStyles() {
    return `
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
    `;
  }
  getItems() {
    try {
      const i = JSON.parse(
        this.attr("items", '["Архитектура токенов","Локальные шрифты woff2","Нативные Web Components","Безрамочные поверхности"]')
      );
      return Array.isArray(i) ? i.map(String) : [];
    } catch {
      return [];
    }
  }
  render() {
    const i = this.getItems(), r = this.attr("selected", i[0] ?? "");
    this.root.innerHTML = `
      <ul role="listbox">
        ${i.map(
      (t, a) => `
          <li>
            <button
              type="button"
              class="item"
              role="option"
              data-val="${l(t)}"
              aria-selected="${t === r}"
              style="--_d:${a * 55}ms"
            >
              <span>${l(t)}</span>
              <span class="idx">0${a + 1}</span>
            </button>
          </li>
        `
    ).join("")}
      </ul>
    `, this.root.querySelectorAll(".item").forEach((t) => {
      t.addEventListener("click", () => {
        const a = t.dataset.val ?? "";
        this.root.querySelectorAll(".item").forEach((e) => {
          e.setAttribute("aria-selected", String(e === t));
        }), this.emit("dv-select", { value: a });
      });
    });
  }
}
d(O, "observedAttributes", ["items", "selected"]);
v("dv-animated-list", O);
class W extends h {
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const i = this.attr("label", "Проект Diverlin"), r = this.boolAttr("open");
    this.root.innerHTML = `
      <div class="wrap ${r ? "open" : ""}" role="button" tabindex="0" aria-expanded="${r}">
        <div class="folder">
          <div class="tab"></div>
          <div class="back"></div>
          <div class="sheet s1"></div>
          <div class="sheet s2"></div>
          <div class="sheet s3"></div>
          <div class="front"></div>
        </div>
        <span class="label">${l(i)}</span>
      </div>
    `, this.root.querySelector(".wrap").addEventListener("click", () => {
      const a = !this.boolAttr("open");
      a ? this.setAttribute("open", "") : this.removeAttribute("open"), this.emit("dv-toggle", { open: a });
    });
  }
}
d(W, "observedAttributes", ["label", "open"]);
v("dv-folder", W);
class J extends h {
  constructor() {
    super(...arguments);
    d(this, "_dragging", !1);
    d(this, "_done", !1);
  }
  static get componentStyles() {
    return `
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
    `;
  }
  reset() {
    this._done = !1, this.render();
  }
  render() {
    const r = this.attr("label", "Проведите для отправки"), t = this.attr("success-label", "Отправлено");
    this.root.innerHTML = `
      <div class="track ${this._done ? "done" : ""}">
        <span class="text">${l(this._done ? t : r)}</span>
        <div class="thumb" role="slider" tabindex="0" aria-label="${l(r)}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${this._done ? x.check : x["arrow-right"]}</svg>
        </div>
      </div>
    `;
    const a = this.root.querySelector(".track"), e = this.root.querySelector(".thumb");
    let s = 0;
    e.addEventListener("pointerdown", (o) => {
      if (this._done) {
        this.reset();
        return;
      }
      this._dragging = !0, s = o.clientX, e.classList.add("dragging"), e.setPointerCapture(o.pointerId);
    }), e.addEventListener("pointermove", (o) => {
      if (!this._dragging) return;
      const c = Math.max(0, a.clientWidth - 46), m = Math.min(c, Math.max(0, o.clientX - s));
      e.style.setProperty("--_x", `${m}px`), m >= c * 0.92 && (this._dragging = !1, this._done = !0, e.classList.remove("dragging"), e.style.setProperty("--_x", `${c}px`), this.root.querySelector(".text").textContent = t, e.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${x.check}</svg>`, a.classList.add("done"), this.emit("dv-confirm"));
    });
    const n = () => {
      this._dragging && (this._dragging = !1, e.classList.remove("dragging"), this._done || e.style.setProperty("--_x", "0px"));
    };
    e.addEventListener("pointerup", n), e.addEventListener("pointercancel", n);
  }
}
d(J, "observedAttributes", ["label", "success-label"]);
v("dv-slide-button", J);
class V extends h {
  constructor() {
    super(...arguments);
    d(this, "_lastX", 0);
    d(this, "_lastY", 0);
  }
  static get componentStyles() {
    return `
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
    `;
  }
  render() {
    const r = this.attr("label", "DIVERLIN");
    this.root.innerHTML = `
      <div class="canvas">
        <span class="hint">Поводите курсором внутри области</span>
      </div>
    `;
    const t = this.root.querySelector(".canvas");
    let a = 1;
    t.addEventListener("pointermove", (e) => {
      const s = t.getBoundingClientRect(), n = e.clientX - s.left, o = e.clientY - s.top;
      if (Math.hypot(n - this._lastX, o - this._lastY) < 28) return;
      this._lastX = n, this._lastY = o;
      const c = document.createElement("span");
      c.className = "stamp", c.style.left = `${n}px`, c.style.top = `${o}px`, c.textContent = `${r} #${String(a++).padStart(2, "0")}`, t.appendChild(c), window.setTimeout(() => c.remove(), 520);
    });
  }
}
d(V, "observedAttributes", ["label"]);
v("dv-cursor-trail", V);
export {
  O as DvAnimatedList,
  w as DvBlurText,
  N as DvCardStack,
  L as DvCircularText,
  F as DvClickSpark,
  B as DvCompareSlider,
  S as DvCountUp,
  V as DvCursorTrail,
  _ as DvDecryptedText,
  R as DvDock,
  q as DvEchoText,
  P as DvExpandableTabs,
  W as DvFolder,
  H as DvMagnetic,
  D as DvMarquee,
  U as DvPixelCard,
  $ as DvRollingText,
  A as DvRotatingText,
  Y as DvScrollVelocity,
  T as DvShinyText,
  J as DvSlideButton,
  C as DvSplitFlap,
  k as DvSplitText,
  X as DvSpotlightCard,
  I as DvTextPressure,
  j as DvTiltCard,
  M as DvTrueFocus,
  E as DvTypewriter,
  z as DvVariableProximity
};
//# sourceMappingURL=effects.js.map
