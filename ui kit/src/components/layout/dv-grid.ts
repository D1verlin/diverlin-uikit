import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvGrid extends DvBaseElement {
  static observedAttributes = ['cols', 'min-width', 'gap'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; }
      .grid { display: grid; width: 100%; }
    `;
  }

  protected render(): void {
    const cols = this.attr('cols', 'auto-fit');
    const minWidth = this.attr('min-width', '260px');
    const gapRaw = this.attr('gap', '4');
    const gap = /^\d+$/.test(gapRaw) ? `var(--dv-space-${gapRaw})` : gapRaw;

    const template =
      cols === 'auto-fit'
        ? `repeat(auto-fit, minmax(min(${minWidth}, 100%), 1fr))`
        : `repeat(${cols}, minmax(0, 1fr))`;

    this.root.innerHTML = `
      <div class="grid" style="grid-template-columns:${template};gap:${gap}">
        <slot></slot>
      </div>
    `;
  }
}

defineElement('dv-grid', DvGrid);
