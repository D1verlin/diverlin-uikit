import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvBlurText extends DvBaseElement {
  static observedAttributes = ['text', 'by', 'delay', 'direction'];

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

  public replay(): void {
    this.render();
  }

  protected render(): void {
    const text = this.attr('text', this.textContent?.trim() || 'Diverlin UI Kit');
    const by = this.attr('by', 'words');
    const delay = this.numAttr('delay', 55);
    const direction = this.attr('direction', 'bottom');
    const units = by === 'chars' ? Array.from(text) : text.split(/\s+/);

    this.root.innerHTML = `
      <span class="wrap by-${by} dir-${direction}">
        ${units
          .map((u, idx) => {
            const content = u === ' ' ? '&nbsp;' : escapeHtml(u);
            return `<span class="unit" style="--_d:${idx * delay}ms">${content}</span>`;
          })
          .join('')}
      </span>
    `;
  }
}

defineElement('dv-blur-text', DvBlurText);
