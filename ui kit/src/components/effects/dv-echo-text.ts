import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvEchoText extends DvBaseElement {
  static observedAttributes = ['text', 'layers'];

  protected static get componentStyles(): string {
    return `
      :host { display: inline-block; }
      .stage {
        position: relative;
        display: inline-block;
        padding: 16px 24px;
        font-family: var(--dv-font-display);
        font-size: var(--dv-text-h1);
        color: var(--dv-text-primary);
        cursor: pointer;
        user-select: none;
      }
      .layer {
        position: absolute;
        inset: 16px 24px;
        pointer-events: none;
        color: var(--dv-text-muted);
        transition: transform 120ms cubic-bezier(0.22, 1, 0.36, 1);
      }
      .front {
        position: relative;
        z-index: 10;
      }
    `;
  }

  protected render(): void {
    const text = this.attr('text', 'ECHO DEPTH');
    const count = Math.min(6, Math.max(2, this.numAttr('layers', 4)));

    this.root.innerHTML = `
      <div class="stage">
        ${Array.from({ length: count }, (_, i) => {
          const depth = i + 1;
          const op = Math.max(0.12, 0.45 - i * 0.1).toFixed(2);
          return `<span class="layer" data-depth="${depth}" style="opacity:${op};transform:translate(${depth * 3}px, ${depth * 3}px)" aria-hidden="true">${escapeHtml(text)}</span>`;
        }).join('')}
        <span class="front">${escapeHtml(text)}</span>
      </div>
    `;

    const stage = this.root.querySelector<HTMLElement>('.stage')!;
    const layers = Array.from(this.root.querySelectorAll<HTMLElement>('.layer'));

    stage.addEventListener('pointermove', (e: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      layers.forEach((l) => {
        const d = Number(l.dataset.depth ?? 1);
        l.style.transform = `translate(${(nx * d * 18).toFixed(1)}px, ${(ny * d * 18).toFixed(1)}px)`;
      });
    });

    stage.addEventListener('pointerleave', () => {
      layers.forEach((l) => {
        const d = Number(l.dataset.depth ?? 1);
        l.style.transform = `translate(${d * 3}px, ${d * 3}px)`;
      });
    });
  }
}

defineElement('dv-echo-text', DvEchoText);
