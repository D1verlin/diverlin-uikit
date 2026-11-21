import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvOtpInput extends DvBaseElement {
  static observedAttributes = ['length', 'value', 'disabled', 'size'];

  protected static get componentStyles(): string {
    return `
      :host { display: inline-flex; }
      .row {
        display: inline-flex;
        align-items: center;
        gap: var(--dv-space-2);
      }
      input {
        width: 42px;
        height: 46px;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        font-family: var(--dv-font-mono);
        font-size: 1.125rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        text-align: center;
        outline: none;
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) var(--dv-ease);
      }
      .size-sm input { width: 34px; height: 38px; font-size: 0.95rem; }
      .size-lg input { width: 50px; height: 54px; font-size: 1.25rem; }
      input:hover:not(:disabled):not(:focus) { background: var(--dv-surface-hover); }
      input:focus {
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-focus-ring);
        transform: translateY(-1px);
      }
      input:disabled { opacity: 0.45; cursor: not-allowed; }
    `;
  }

  get value(): string {
    return Array.from(this.root.querySelectorAll<HTMLInputElement>('input'))
      .map((i) => i.value)
      .join('');
  }

  private _syncing = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === 'value' && this._syncing) return;
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  protected render(): void {
    const length = Math.min(8, Math.max(2, this.numAttr('length', 6)));
    const disabled = this.boolAttr('disabled');
    const size = this.attr('size', 'md');
    const initial = this.attr('value', '');

    this.root.innerHTML = `
      <div class="row size-${size}">
        ${Array.from({ length }, (_, idx) => {
          const ch = initial[idx] ?? '';
          return `<input type="text" inputmode="numeric" maxlength="1" value="${ch.replace(/"/g, '&quot;')}" aria-label="Цифра ${idx + 1}" ${disabled ? 'disabled' : ''} />`;
        }).join('')}
      </div>
    `;

    const inputs = Array.from(this.root.querySelectorAll<HTMLInputElement>('input'));

    const syncEmit = () => {
      const val = this.value;
      this._syncing = true;
      this.setAttribute('value', val);
      this._syncing = false;
      this.emit('dv-input', { value: val });
      if (val.length === length) {
        this.emit('dv-complete', { value: val });
      }
    };

    inputs.forEach((inp, idx) => {
      inp.addEventListener('input', () => {
        const clean = inp.value.replace(/\D/g, '').slice(-1);
        inp.value = clean;
        if (clean && idx < inputs.length - 1) {
          inputs[idx + 1].focus();
        }
        syncEmit();
      });

      inp.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !inp.value && idx > 0) {
          inputs[idx - 1].focus();
          inputs[idx - 1].value = '';
          syncEmit();
        } else if (e.key === 'ArrowLeft' && idx > 0) {
          inputs[idx - 1].focus();
        } else if (e.key === 'ArrowRight' && idx < inputs.length - 1) {
          inputs[idx + 1].focus();
        }
      });

      inp.addEventListener('paste', (e) => {
        e.preventDefault();
        const text = (e.clipboardData?.getData('text') ?? '').replace(/\D/g, '');
        if (!text) return;
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].value = text[i] ?? '';
        }
        const focusIdx = Math.min(text.length, inputs.length - 1);
        inputs[focusIdx].focus();
        syncEmit();
      });
    });
  }
}

defineElement('dv-otp-input', DvOtpInput);
