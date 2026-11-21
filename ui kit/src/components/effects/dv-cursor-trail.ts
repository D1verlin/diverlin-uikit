import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvCursorTrail extends DvBaseElement {
  static observedAttributes = ['label'];

  private _lastX = 0;
  private _lastY = 0;

  protected static get componentStyles(): string {
    return `
      :host { display: block; width: 100%; }
      .canvas {
        position: relative;
        overflow: hidden;
        min-height: 180px;
        border-radius: var(--dv-radius-lg);
        background: var(--dv-card-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        cursor: crosshair;
      }
      .hint {
        font-size: var(--dv-text-sm);
        color: var(--dv-text-muted);
        pointer-events: none;
      }
      .stamp {
        position: absolute;
        padding: 4px 10px;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-surface-elevated);
        color: var(--dv-text-primary);
        box-shadow: var(--dv-shadow-sm);
        font-family: var(--dv-font-mono);
        font-size: 11px;
        pointer-events: none;
        transform: translate(-50%, -50%) scale(1);
        animation: dv-trail-fade 520ms var(--dv-ease) forwards;
      }
      @keyframes dv-trail-fade {
        to {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.75) translateY(8px);
        }
      }
    `;
  }

  protected render(): void {
    const label = this.attr('label', 'DIVERLIN');

    this.root.innerHTML = `
      <div class="canvas">
        <span class="hint">Поводите курсором внутри области</span>
      </div>
    `;

    const canvas = this.root.querySelector<HTMLElement>('.canvas')!;
    let counter = 1;

    canvas.addEventListener('pointermove', (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (Math.hypot(x - this._lastX, y - this._lastY) < 28) return;
      this._lastX = x;
      this._lastY = y;

      const stamp = document.createElement('span');
      stamp.className = 'stamp';
      stamp.style.left = `${x}px`;
      stamp.style.top = `${y}px`;
      stamp.textContent = `${label} #${String(counter++).padStart(2, '0')}`;
      canvas.appendChild(stamp);
      window.setTimeout(() => stamp.remove(), 520);
    });
  }
}

defineElement('dv-cursor-trail', DvCursorTrail);
