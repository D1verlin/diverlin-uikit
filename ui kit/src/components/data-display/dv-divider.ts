import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvDivider extends DvBaseElement {
  static observedAttributes = ['orientation', 'spacing'];

  protected static get componentStyles(): string {
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

  protected render(): void {
    const orientation = this.attr('orientation', 'horizontal');
    const spacing = this.attr('spacing', 'md');
    this.root.innerHTML = `<div class="line ${orientation} sp-${spacing}" role="separator" aria-orientation="${orientation}"></div>`;
  }
}

defineElement('dv-divider', DvDivider);
