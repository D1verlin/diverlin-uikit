import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export interface DvSliderMark {
  value: number;
  label?: string;
}

export class DvSlider extends DvBaseElement {
  static observedAttributes = ['min', 'max', 'step', 'value', 'disabled', 'label', 'show-value', 'stepped', 'marks'];

  private _dragging = false;

  protected static get componentStyles(): string {
    return `
      :host { display: block; width: 100%; user-select: none; }
      .wrap { display: flex; flex-direction: column; gap: var(--dv-space-2); }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        font-size: var(--dv-text-sm);
        color: var(--dv-text-secondary);
      }
      .val {
        font-variant-numeric: tabular-nums;
        color: var(--dv-text-primary);
        font-weight: 600;
      }
      .slider-area {
        position: relative;
        height: 24px;
        display: flex;
        align-items: center;
        cursor: pointer;
        touch-action: none;
      }
      .slider-area.disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }
      .track {
        position: relative;
        width: 100%;
        height: 6px;
        border-radius: 999px;
        background: var(--dv-surface-active);
      }
      .fill {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: var(--_pct, 50%);
        border-radius: 999px;
        background: var(--dv-accent);
        transition: width 110ms cubic-bezier(0.22, 1, 0.36, 1);
      }
      .slider-area.dragging .fill {
        transition: none;
      }
      .thumb {
        position: absolute;
        top: 50%;
        left: var(--_pct, 50%);
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--dv-accent);
        border: none;
        box-shadow: var(--dv-shadow-sm);
        transform: translate(-50%, -50%) scale(1);
        transition:
          left 110ms cubic-bezier(0.22, 1, 0.36, 1),
          transform 180ms cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .slider-area:hover:not(.disabled) .thumb {
        transform: translate(-50%, -50%) scale(1.1);
      }
      .slider-area.dragging .thumb {
        transition: transform 160ms cubic-bezier(0.34, 1.56, 0.64, 1);
        transform: translate(-50%, -50%) scale(1.22);
      }
      .slider-area:focus-visible { outline: none; }
      .slider-area:focus-visible .thumb {
        box-shadow: var(--dv-focus-ring);
      }
      .ticks {
        position: relative;
        width: 100%;
        height: 18px;
        margin-top: 2px;
      }
      .tick {
        position: absolute;
        top: 0;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        font-size: 11px;
        font-variant-numeric: tabular-nums;
        color: var(--dv-text-muted);
      }
      .tick-mark {
        width: 2px;
        height: 5px;
        border-radius: 1px;
        background: var(--dv-border-hover);
      }
      .tick.active .tick-mark {
        background: var(--dv-accent);
      }
      .tick.active {
        color: var(--dv-text-primary);
        font-weight: 500;
      }
    `;
  }

  get value(): number {
    return this.numAttr('value', 50);
  }

  set value(v: number) {
    this.setAttribute('value', String(v));
  }

  private getMarks(min: number, max: number, step: number): DvSliderMark[] {
    const raw = this.attr('marks');
    if (raw && raw !== 'true' && raw !== '') {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      } catch {
        // fallback to stepped
      }
    }
    if (this.boolAttr('stepped') || this.hasAttribute('marks')) {
      const list: DvSliderMark[] = [];
      const count = Math.floor((max - min) / step);
      if (count > 0 && count <= 20) {
        for (let i = 0; i <= count; i++) {
          const val = Number((min + i * step).toFixed(4));
          list.push({ value: val, label: String(val) });
        }
      }
      return list;
    }
    return [];
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === 'value' && this.root.querySelector('.track')) {
      this.syncVisual(Number(newValue ?? 0));
      return;
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  private syncVisual(val: number): void {
    const min = this.numAttr('min', 0);
    const max = Math.max(min + 0.001, this.numAttr('max', 100));
    const pct = Math.min(100, Math.max(0, ((val - min) / (max - min)) * 100));
    const area = this.root.querySelector<HTMLElement>('.slider-area');
    if (area) {
      area.style.setProperty('--_pct', `${pct}%`);
      area.setAttribute('aria-valuenow', String(val));
    }
    const valEl = this.root.querySelector('.val');
    if (valEl) valEl.textContent = String(val);

    this.root.querySelectorAll<HTMLElement>('.tick').forEach((t) => {
      const tv = Number(t.dataset.value);
      t.classList.toggle('active', tv <= val);
    });
  }

  protected render(): void {
    const min = this.numAttr('min', 0);
    const max = Math.max(min + 0.001, this.numAttr('max', 100));
    const step = Math.max(0.001, this.numAttr('step', 1));
    const value = Math.min(max, Math.max(min, this.numAttr('value', 50)));
    const disabled = this.boolAttr('disabled');
    const label = this.attr('label');
    const showValue = this.boolAttr('show-value');
    const marks = this.getMarks(min, max, step);
    const pct = ((value - min) / (max - min)) * 100;

    this.root.innerHTML = `
      <div class="wrap">
        ${
          label || showValue
            ? `<div class="header"><span>${escapeHtml(label)}</span>${showValue ? `<span class="val">${value}</span>` : ''}</div>`
            : ''
        }
        <div
          class="slider-area ${disabled ? 'disabled' : ''}"
          style="--_pct:${pct}%"
          tabindex="${disabled ? -1 : 0}"
          role="slider"
          aria-label="${escapeHtml(label || 'Slider')}"
          aria-valuemin="${min}"
          aria-valuemax="${max}"
          aria-valuenow="${value}"
        >
          <div class="track">
            <div class="fill"></div>
            <div class="thumb"></div>
          </div>
        </div>
        ${
          marks.length > 0
            ? `<div class="ticks">
                ${marks
                  .map((m) => {
                    const mp = ((m.value - min) / (max - min)) * 100;
                    return `<div class="tick ${m.value <= value ? 'active' : ''}" data-value="${m.value}" style="left:${mp}%">
                      <span class="tick-mark"></span>
                      ${m.label ? `<span>${escapeHtml(m.label)}</span>` : ''}
                    </div>`;
                  })
                  .join('')}
              </div>`
            : ''
        }
      </div>
    `;

    const area = this.root.querySelector<HTMLElement>('.slider-area')!;
    if (disabled) return;

    const updateFromClientX = (clientX: number, snap: boolean) => {
      const rect = area.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      const rawVal = min + ratio * (max - min);
      const steppedVal = Math.min(max, Math.max(min, Math.round((rawVal - min) / step) * step + min));
      const nextVal = snap || this.boolAttr('stepped') ? Number(steppedVal.toFixed(4)) : Number(rawVal.toFixed(2));
      this.setAttribute('value', String(nextVal));
      this.syncVisual(nextVal);
      this.emit('dv-input', { value: nextVal });
      return nextVal;
    };

    area.addEventListener('pointerdown', (e: PointerEvent) => {
      this._dragging = true;
      area.classList.add('dragging');
      area.setPointerCapture(e.pointerId);
      updateFromClientX(e.clientX, false);
    });

    area.addEventListener('pointermove', (e: PointerEvent) => {
      if (!this._dragging) return;
      updateFromClientX(e.clientX, false);
    });

    const finishDrag = (e: PointerEvent) => {
      if (!this._dragging) return;
      this._dragging = false;
      area.classList.remove('dragging');
      const finalVal = updateFromClientX(e.clientX, true);
      this.emit('dv-change', { value: finalVal });
    };

    area.addEventListener('pointerup', finishDrag);
    area.addEventListener('pointercancel', finishDrag);

    area.addEventListener('keydown', (e: KeyboardEvent) => {
      const cur = this.value;
      let next = cur;
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') next = Math.min(max, cur + step);
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next = Math.max(min, cur - step);
      else return;
      e.preventDefault();
      next = Number(next.toFixed(4));
      this.setAttribute('value', String(next));
      this.emit('dv-input', { value: next });
      this.emit('dv-change', { value: next });
    });
  }
}

defineElement('dv-slider', DvSlider);
