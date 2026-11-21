import { DvBaseElement, defineElement } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export class DvNumberInput extends DvBaseElement {
  static observedAttributes = ['value', 'min', 'max', 'step', 'disabled', 'size'];

  protected static get componentStyles(): string {
    return `
      :host { display: inline-flex; }
      .wrap {
        display: inline-flex;
        align-items: center;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        overflow: hidden;
      }
      .wrap:focus-within {
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-focus-ring);
      }
      .wrap.disabled { opacity: 0.45; pointer-events: none; }
      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        background: transparent;
        border: none;
        color: var(--dv-text-secondary);
        cursor: pointer;
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) var(--dv-ease);
      }
      button:hover:not(:disabled) { background: var(--dv-surface-hover); color: var(--dv-text-primary); }
      button:active:not(:disabled) { transform: scale(0.9); }
      button:disabled { opacity: 0.35; cursor: not-allowed; }
      input {
        width: 56px;
        border: none;
        background: transparent;
        text-align: center;
        font-family: var(--dv-font-sans);
        font-variant-numeric: tabular-nums;
        font-weight: 500;
        color: var(--dv-text-primary);
        outline: none;
      }
      .size-sm { height: 32px; font-size: var(--dv-text-sm); }
      .size-sm button { height: 30px; width: 28px; }
      .size-md { height: 38px; font-size: var(--dv-text-body); }
      .size-md button { height: 36px; width: 34px; }
      .size-lg { height: 44px; font-size: var(--dv-text-body); }
      .size-lg button { height: 42px; width: 38px; }
    `;
  }

  get value(): number {
    return this.numAttr('value', 0);
  }

  set value(v: number) {
    this.setAttribute('value', String(v));
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === 'value') {
      const input = this.root.querySelector('input');
      if (input) {
        input.value = String(this.numAttr('value', 0));
        return;
      }
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  protected render(): void {
    const min = this.hasAttribute('min') ? this.numAttr('min', -Infinity) : -Infinity;
    const max = this.hasAttribute('max') ? this.numAttr('max', Infinity) : Infinity;
    const step = this.numAttr('step', 1);
    const val = Math.min(max, Math.max(min, this.numAttr('value', 0)));
    const disabled = this.boolAttr('disabled');
    const size = this.attr('size', 'md');

    this.root.innerHTML = `
      <div class="wrap size-${size} ${disabled ? 'disabled' : ''}">
        <button type="button" class="dec" aria-label="Уменьшить" ${val <= min ? 'disabled' : ''}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${DV_ICONS.minus}</svg>
        </button>
        <input type="text" inputmode="numeric" value="${val}" ${disabled ? 'disabled' : ''} />
        <button type="button" class="inc" aria-label="Увеличить" ${val >= max ? 'disabled' : ''}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${DV_ICONS.plus}</svg>
        </button>
      </div>
    `;

    const input = this.root.querySelector('input')!;
    const dec = this.root.querySelector<HTMLButtonElement>('.dec')!;
    const inc = this.root.querySelector<HTMLButtonElement>('.inc')!;

    const commit = (next: number) => {
      const clamped = Math.min(max, Math.max(min, Number(next.toFixed(4))));
      this.setAttribute('value', String(clamped));
      input.value = String(clamped);
      dec.disabled = clamped <= min;
      inc.disabled = clamped >= max;
      this.emit('dv-change', { value: clamped });
    };

    dec.addEventListener('click', () => commit(this.value - step));
    inc.addEventListener('click', () => commit(this.value + step));
    input.addEventListener('change', () => {
      const parsed = Number(input.value);
      commit(Number.isFinite(parsed) ? parsed : this.value);
    });
  }
}

defineElement('dv-number-input', DvNumberInput);
