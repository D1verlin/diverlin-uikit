import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvStack extends DvBaseElement {
  static observedAttributes = ['direction', 'gap', 'align', 'justify', 'wrap'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; }
      .stack { display: flex; }
    `;
  }

  protected render(): void {
    const direction = this.attr('direction', 'vertical') === 'horizontal' ? 'row' : 'column';
    const gapRaw = this.attr('gap', '4');
    const gap = /^\d+$/.test(gapRaw) ? `var(--dv-space-${gapRaw})` : gapRaw;
    const align = this.attr('align', direction === 'row' ? 'center' : 'stretch');
    const justify = this.attr('justify', 'flex-start');
    const wrap = this.boolAttr('wrap') ? 'wrap' : 'nowrap';

    this.root.innerHTML = `
      <div class="stack" style="flex-direction:${direction};gap:${gap};align-items:${align};justify-content:${justify};flex-wrap:${wrap}">
        <slot></slot>
      </div>
    `;
  }
}

defineElement('dv-stack', DvStack);
