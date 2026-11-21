import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvTextarea extends DvBaseElement {
  static observedAttributes = ['value', 'placeholder', 'rows', 'disabled', 'readonly', 'error'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; width: 100%; }
      textarea {
        width: 100%;
        min-height: 88px;
        padding: 10px 12px;
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-body);
        line-height: var(--dv-leading-body);
        color: var(--dv-text-primary);
        background: var(--dv-surface);
        border: none;
        border-radius: var(--dv-radius-sm);
        outline: none;
        resize: vertical;
      }
      textarea::placeholder { color: var(--dv-text-muted); }
      textarea:hover:not(:disabled):not(:focus) { background: var(--dv-surface-hover); }
      textarea:focus {
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-focus-ring);
      }
      textarea:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      textarea.has-error { box-shadow: 0 0 0 2px var(--dv-danger); }
    `;
  }

  private _syncing = false;

  get value(): string {
    return this.root.querySelector('textarea')?.value ?? this.attr('value');
  }

  set value(v: string) {
    this.setAttribute('value', v);
    const el = this.root.querySelector('textarea');
    if (el && el.value !== v) el.value = v;
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === 'value') {
      if (this._syncing) return;
      const el = this.root.querySelector('textarea');
      if (el) {
        if (el.value !== (newValue ?? '')) el.value = newValue ?? '';
        return;
      }
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  protected render(): void {
    const value = this.attr('value', '');
    const placeholder = this.attr('placeholder', '');
    const rows = this.numAttr('rows', 3);
    const disabled = this.boolAttr('disabled');
    const readonly = this.boolAttr('readonly');
    const error = this.boolAttr('error');

    this.root.innerHTML = `
      <textarea
        rows="${rows}"
        class="${error ? 'has-error' : ''}"
        placeholder="${escapeHtml(placeholder)}"
        ${disabled ? 'disabled' : ''}
        ${readonly ? 'readonly' : ''}
      >${escapeHtml(value)}</textarea>
    `;

    const el = this.root.querySelector('textarea')!;
    el.addEventListener('input', () => {
      this._syncing = true;
      this.setAttribute('value', el.value);
      this._syncing = false;
      this.emit('dv-input', { value: el.value });
    });
    el.addEventListener('change', () => {
      this.emit('dv-change', { value: el.value });
    });
  }
}

defineElement('dv-textarea', DvTextarea);
