import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvCountUp extends DvBaseElement {
  static observedAttributes = ['from', 'to', 'duration', 'prefix', 'suffix'];

  private _raf: number | null = null;

  protected static get componentStyles(): string {
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

  protected onUnmount(): void {
    if (this._raf) cancelAnimationFrame(this._raf);
  }

  public replay(): void {
    this.startCount();
  }

  private formatNum(n: number): string {
    return Math.round(n)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  private startCount(): void {
    if (this._raf) cancelAnimationFrame(this._raf);
    const from = this.numAttr('from', 0);
    const to = this.numAttr('to', 1280);
    const duration = Math.max(200, this.numAttr('duration', 1200));
    const prefix = this.attr('prefix', '');
    const suffix = this.attr('suffix', '');
    const el = this.root.querySelector('.val');
    if (!el) return;

    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = from + (to - from) * eased;
      el.textContent = `${prefix}${this.formatNum(current)}${suffix}`;
      if (t < 1) {
        this._raf = requestAnimationFrame(step);
      }
    };
    this._raf = requestAnimationFrame(step);
  }

  protected render(): void {
    const prefix = this.attr('prefix', '');
    const suffix = this.attr('suffix', '');
    const from = this.numAttr('from', 0);
    this.root.innerHTML = `<span class="num"><span class="val">${escapeHtml(prefix + this.formatNum(from) + suffix)}</span></span>`;
    this.startCount();
  }
}

defineElement('dv-count-up', DvCountUp);
