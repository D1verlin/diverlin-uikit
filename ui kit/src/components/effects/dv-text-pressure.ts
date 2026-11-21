import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvTextPressure extends DvBaseElement {
  static observedAttributes = ['text', 'radius'];

  protected static get componentStyles(): string {
    return `
      :host { display: inline-block; }
      .wrap {
        display: inline-flex;
        align-items: baseline;
        font-family: var(--dv-font-display);
        font-size: var(--dv-text-h1);
        line-height: 1.2;
        color: var(--dv-text-primary);
        user-select: none;
        cursor: pointer;
      }
      .ch {
        display: inline-block;
        transform-origin: bottom center;
        transition: transform 80ms linear;
      }
    `;
  }

  protected render(): void {
    const text = this.attr('text', 'PRESSURE WAVE');
    const radius = Math.max(50, this.numAttr('radius', 130));

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
        const dist = Math.abs(e.clientX - cx);
        const f = Math.max(0, 1 - dist / radius);
        const sy = (1 + f * 0.42).toFixed(3);
        const sx = (1 - f * 0.14).toFixed(3);
        span.style.transform = `scale(${sx}, ${sy})`;
      });
    });

    wrap.addEventListener('pointerleave', () => {
      chars.forEach((span) => {
        span.style.transform = 'scale(1, 1)';
      });
    });
  }
}

defineElement('dv-text-pressure', DvTextPressure);
