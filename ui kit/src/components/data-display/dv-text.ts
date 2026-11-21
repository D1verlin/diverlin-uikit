import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvText extends DvBaseElement {
  static observedAttributes = ['variant', 'font', 'tabular', 'pretty', 'align'];

  protected static get componentStyles(): string {
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

  protected render(): void {
    const variant = this.attr('variant', 'body');
    const font = this.attr('font', variant === 'mono' ? 'mono' : 'sans');
    const tabular = this.boolAttr('tabular');
    const pretty = this.hasAttribute('pretty') ? this.boolAttr('pretty') : true;
    const align = this.attr('align', '');
    const tag = this.hasAttribute('inline') ? 'span' : 'p';

    const cls = [
      'text',
      `variant-${variant}`,
      `font-${font}`,
      tabular ? 'tabular' : '',
      pretty ? 'pretty' : '',
    ]
      .filter(Boolean)
      .join(' ');

    const style = align ? ` style="text-align:${align}"` : '';
    this.root.innerHTML = `<${tag} class="${cls}"${style}><slot></slot></${tag}>`;
  }
}

defineElement('dv-text', DvText);
