import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvSplitText extends DvBaseElement {
  static observedAttributes = ['text', 'by', 'stagger'];

  protected static get componentStyles(): string {
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

  public replay(): void {
    this.render();
  }

  protected render(): void {
    const text = this.attr('text', this.textContent?.trim() || 'Чистая типографика');
    const by = this.attr('by', 'chars');
    const stagger = this.numAttr('stagger', 28);
    const units = by === 'words' ? text.split(/\s+/) : Array.from(text);

    this.root.innerHTML = `
      <span class="wrap by-${by}">
        ${units
          .map((u, idx) => {
            const content = u === ' ' ? '&nbsp;' : escapeHtml(u);
            return `<span class="mask"><span class="unit" style="--_d:${idx * stagger}ms">${content}</span></span>`;
          })
          .join('')}
      </span>
    `;
  }
}

defineElement('dv-split-text', DvSplitText);
