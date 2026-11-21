import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvVariableProximity extends DvBaseElement {
  static observedAttributes = ['text', 'radius'];

  protected static get componentStyles(): string {
    return `
      :host { display: inline-block; }
      .wrap {
        display: inline-flex;
        flex-wrap: wrap;
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-h1);
        line-height: 1.2;
        color: var(--dv-text-primary);
        cursor: default;
        user-select: none;
      }
      .ch {
        display: inline-block;
        font-weight: 400;
        transform: scale(1);
        transition: transform 90ms linear, opacity 90ms linear;
        opacity: 0.72;
      }
    `;
  }

  protected render(): void {
    const text = this.attr('text', 'Наведите курсор на буквы');
    const radius = Math.max(40, this.numAttr('radius', 110));

    this.root.innerHTML = `
      <div class="wrap" aria-label="${escapeHtml(text)}">
        ${Array.from(text)
          .map((ch) => `<span class="ch" aria-hidden="true">${ch === ' ' ? '&nbsp;' : escapeHtml(ch)}</span>`)
          .join('')}
      </div>
    `;

    const wrap = this.root.querySelector<HTMLElement>('.wrap')!;
    const chars = Array.from(this.root.querySelectorAll<HTMLElement>('.ch'));

    wrap.addEventListener('pointermove', (e: PointerEvent) => {
      chars.forEach((span) => {
        const rect = span.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
        const factor = Math.max(0, 1 - dist / radius);
        const weight = Math.round(400 + factor * 300);
        const scale = (1 + factor * 0.24).toFixed(3);
        const opacity = (0.72 + factor * 0.28).toFixed(2);
        span.style.fontWeight = String(weight);
        span.style.transform = `translateY(${(-factor * 4).toFixed(1)}px) scale(${scale})`;
        span.style.opacity = opacity;
      });
    });

    wrap.addEventListener('pointerleave', () => {
      chars.forEach((span) => {
        span.style.fontWeight = '400';
        span.style.transform = 'scale(1)';
        span.style.opacity = '0.72';
      });
    });
  }
}

defineElement('dv-variable-proximity', DvVariableProximity);
