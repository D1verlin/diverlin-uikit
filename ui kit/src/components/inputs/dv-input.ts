import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvInput extends DvBaseElement {
  static observedAttributes = ['type', 'value', 'placeholder', 'disabled', 'readonly', 'error', 'size', 'name'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; width: 100%; }
      input {
        width: 100%;
        font-family: var(--dv-font-sans);
        color: var(--dv-text-primary);
        background: var(--dv-surface);
        border: none;
        border-radius: var(--dv-radius-sm);
        outline: none;
        transition: opacity var(--dv-duration-fast) var(--dv-ease);
      }
      input::placeholder { color: var(--dv-text-muted); }
      input:hover:not(:disabled):not(:focus) { background: var(--dv-surface-hover); }
      input:focus {
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-focus-ring);
      }
      input:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      input.has-error {
        box-shadow: 0 0 0 2px var(--dv-danger);
      }
      .size-sm { height: 32px; padding: 0 10px; font-size: var(--dv-text-sm); }
      .size-md { height: 38px; padding: 0 12px; font-size: var(--dv-text-body); }
      .size-lg { height: 44px; padding: 0 14px; font-size: var(--dv-text-body); }
    `;
  }

  private _syncing = false;

  get value(): string {
    return this.root.querySelector('input')?.value ?? this.attr('value');
  }

  set value(v: string) {
    this.setAttribute('value', v);
    const input = this.root.querySelector('input');
    if (input && input.value !== v) input.value = v;
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === 'value') {
      if (this._syncing) return;
      const input = this.root.querySelector('input');
      if (input) {
        if (input.value !== (newValue ?? '')) input.value = newValue ?? '';
        return;
      }
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  protected render(): void {
    const type = this.attr('type', 'text');
    const value = this.attr('value', '');
    const placeholder = this.attr('placeholder', '');
    const disabled = this.boolAttr('disabled');
    const readonly = this.boolAttr('readonly');
    const error = this.boolAttr('error');
    const size = this.attr('size', 'md');
    const name = this.attr('name', '');

    this.root.innerHTML = `
      <input
        type="${escapeHtml(type)}"
        class="size-${size} ${error ? 'has-error' : ''}"
        value="${escapeHtml(value)}"
        placeholder="${escapeHtml(placeholder)}"
        ${name ? `name="${escapeHtml(name)}"` : ''}
        ${disabled ? 'disabled' : ''}
        ${readonly ? 'readonly' : ''}
      />
    `;

    const input = this.root.querySelector('input')!;
    input.addEventListener('input', () => {
      this._syncing = true;
      this.setAttribute('value', input.value);
      this._syncing = false;
      this.emit('dv-input', { value: input.value });
    });
    input.addEventListener('change', () => {
      this.emit('dv-change', { value: input.value });
    });
  }
}

defineElement('dv-input', DvInput);
