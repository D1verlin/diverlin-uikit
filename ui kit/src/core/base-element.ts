const BASE_SHADOW_CSS = `
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
`;

const GRADIENT_SHADOW_CSS = `
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
`;

const sheetCache = new Map<string, CSSStyleSheet>();

function getStyleSheet(css: string): CSSStyleSheet | null {
  if (typeof CSSStyleSheet === 'undefined' || !('replaceSync' in CSSStyleSheet.prototype)) {
    return null;
  }
  let sheet = sheetCache.get(css);
  if (!sheet) {
    sheet = new CSSStyleSheet();
    sheet.replaceSync(css);
    sheetCache.set(css, sheet);
  }
  return sheet;
}

export abstract class DvBaseElement extends HTMLElement {
  protected root: ShadowRoot;
  private _initialized = false;

  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }

  protected static get componentStyles(): string {
    return '';
  }

  connectedCallback(): void {
    if (!this._initialized) {
      this._initialized = true;
      const ctor = this.constructor as typeof DvBaseElement;
      const css = `${BASE_SHADOW_CSS}\n${ctor.componentStyles}\n${GRADIENT_SHADOW_CSS}`;
      const sheet = getStyleSheet(css);
      if (sheet && 'adoptedStyleSheets' in this.root) {
        this.root.adoptedStyleSheets = [sheet];
      } else {
        const styleEl = document.createElement('style');
        styleEl.textContent = css;
        this.root.appendChild(styleEl);
      }
      this.onMount();
    }
    this.render();
  }

  disconnectedCallback(): void {
    this.onUnmount();
  }

  attributeChangedCallback(_name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue !== newValue && this._initialized) {
      this.render();
    }
  }

  protected onMount(): void {}
  protected onUnmount(): void {}
  protected abstract render(): void;

  protected attr(name: string, fallback = ''): string {
    return this.getAttribute(name) ?? fallback;
  }

  protected boolAttr(name: string): boolean {
    return this.hasAttribute(name) && this.getAttribute(name) !== 'false';
  }

  protected numAttr(name: string, fallback = 0): number {
    const raw = this.getAttribute(name);
    if (raw === null) return fallback;
    const n = Number(raw);
    return Number.isFinite(n) ? n : fallback;
  }

  protected emit<T = unknown>(name: string, detail?: T): boolean {
    return this.dispatchEvent(
      new CustomEvent(name, {
        detail,
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    );
  }
}

export function defineElement(tagName: string, ctor: CustomElementConstructor): void {
  if (typeof customElements !== 'undefined' && !customElements.get(tagName)) {
    customElements.define(tagName, ctor);
  }
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
