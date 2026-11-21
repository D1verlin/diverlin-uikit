import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvCompareSlider extends DvBaseElement {
  static observedAttributes = ['value'];

  private _dragging = false;
  private _syncing = false;

  protected static get componentStyles(): string {
    return `
      :host { display: block; width: 100%; }
      .compare {
        position: relative;
        width: 100%;
        min-height: 200px;
        border-radius: var(--dv-radius-lg);
        overflow: hidden;
        user-select: none;
        touch-action: none;
        cursor: ew-resize;
        background: var(--dv-surface);
      }
      .layer {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .before {
        z-index: 2;
        background: var(--dv-surface-active);
        clip-path: inset(0 calc(100% - var(--_pos, 50%)) 0 0);
      }
      .after {
        z-index: 1;
        background: var(--dv-surface);
      }
      .handle {
        position: absolute;
        top: 0;
        bottom: 0;
        left: var(--_pos, 50%);
        z-index: 3;
        width: 2px;
        background: var(--dv-accent);
        transform: translateX(-50%);
        pointer-events: none;
      }
      .knob {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
        box-shadow: var(--dv-shadow-md);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        font-weight: 700;
      }
    `;
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === 'value' && this.root.querySelector('.compare')) {
      if (this._syncing) return;
      const clamped = Math.min(100, Math.max(0, Number(newValue ?? 50)));
      this.root.querySelector<HTMLElement>('.compare')?.style.setProperty('--_pos', `${clamped}%`);
      return;
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  protected render(): void {
    const val = Math.min(100, Math.max(0, this.numAttr('value', 50)));

    this.root.innerHTML = `
      <div class="compare" style="--_pos:${val}%" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${val}" aria-label="Сравнение до и после">
        <div class="layer before"><slot name="before"></slot></div>
        <div class="layer after"><slot name="after"></slot></div>
        <div class="handle" aria-hidden="true"><div class="knob">↔</div></div>
      </div>
    `;

    const cmp = this.root.querySelector<HTMLElement>('.compare')!;

    const updateFromX = (clientX: number) => {
      const rect = cmp.getBoundingClientRect();
      if (rect.width <= 0) return;
      const pct = Math.round(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
      cmp.style.setProperty('--_pos', `${pct}%`);
      cmp.setAttribute('aria-valuenow', String(pct));
      this._syncing = true;
      this.setAttribute('value', String(pct));
      this._syncing = false;
      this.emit('dv-change', { value: pct });
    };

    cmp.addEventListener('pointerdown', (e: PointerEvent) => {
      this._dragging = true;
      cmp.setPointerCapture(e.pointerId);
      updateFromX(e.clientX);
    });
    cmp.addEventListener('pointermove', (e: PointerEvent) => {
      if (this._dragging) updateFromX(e.clientX);
    });
    const stop = (e: PointerEvent) => {
      this._dragging = false;
      if (cmp.hasPointerCapture(e.pointerId)) cmp.releasePointerCapture(e.pointerId);
    };
    cmp.addEventListener('pointerup', stop);
    cmp.addEventListener('pointercancel', stop);
  }
}

defineElement('dv-compare-slider', DvCompareSlider);
