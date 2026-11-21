import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvHeading extends DvBaseElement {
  static observedAttributes = ['level', 'font', 'align', 'balance'];

  protected static get componentStyles(): string {
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

  protected render(): void {
    const level = this.attr('level', '2');
    const font = this.attr('font', level === 'display' || level === '1' || level === '2' ? 'display' : 'sans');
    const align = this.attr('align', 'left');
    const balance = this.hasAttribute('balance') ? this.boolAttr('balance') : true;
    const tag = level === 'display' || level === '1' ? 'h1' : level === '3' ? 'h3' : level === '4' ? 'h4' : 'h2';
    const cls = `heading level-${level} font-${font} ${balance ? 'balance' : ''}`;

    this.root.innerHTML = `<${tag} class="${cls}" style="text-align:${align}"><slot></slot></${tag}>`;
  }
}

defineElement('dv-heading', DvHeading);
