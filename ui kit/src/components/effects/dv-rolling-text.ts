import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvRollingText extends DvBaseElement {
  static observedAttributes = ['text', 'stagger'];

  protected static get componentStyles(): string {
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

  protected render(): void {
    const text = this.attr('text', 'Наведите курсор');
    const stagger = this.numAttr('stagger', 16);

    this.root.innerHTML = `
      <span class="roll" aria-label="${escapeHtml(text)}">
        ${Array.from(text)
          .map((ch, idx) => {
            const safe = ch === ' ' ? '&nbsp;' : escapeHtml(ch);
            return `
            <span class="cell" aria-hidden="true">
              <span class="track" style="--_d:${idx * stagger}ms">
                <span class="ch">${safe}</span>
                <span class="ch">${safe}</span>
              </span>
            </span>
          `;
          })
          .join('')}
      </span>
    `;
  }
}

defineElement('dv-rolling-text', DvRollingText);
