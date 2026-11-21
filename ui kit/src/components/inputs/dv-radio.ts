import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvRadio extends DvBaseElement {
  static observedAttributes = ['checked', 'disabled', 'label', 'name', 'value'];

  protected static get componentStyles(): string {
    return `
      :host { display: inline-flex; }
      label {
        display: inline-flex;
        align-items: center;
        gap: var(--dv-space-2);
        cursor: pointer;
        user-select: none;
        font-size: var(--dv-text-body);
        color: var(--dv-text-primary);
      }
      label.disabled { opacity: 0.45; cursor: not-allowed; }
      input {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
      }
      .circle {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: none;
        background: var(--dv-surface-active);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        transition: transform var(--dv-duration-fast) var(--dv-ease);
      }
      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--dv-accent-fg);
        transform: scale(0);
        opacity: 0;
        transition: transform var(--dv-duration-fast) cubic-bezier(0.34, 1.56, 0.64, 1), opacity var(--dv-duration-fast) var(--dv-ease);
      }
      input:checked + .circle {
        background: var(--dv-accent);
      }
      input:checked + .circle .dot {
        transform: scale(1);
        opacity: 1;
      }
      label:active:not(.disabled) .circle {
        transform: scale(0.92);
      }
      input:focus-visible + .circle {
        box-shadow: var(--dv-focus-ring);
      }
    `;
  }

  get checked(): boolean {
    return this.boolAttr('checked');
  }

  set checked(val: boolean) {
    if (val) this.setAttribute('checked', '');
    else this.removeAttribute('checked');
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === 'checked') {
      const input = this.root.querySelector('input');
      if (input) {
        input.checked = this.boolAttr('checked');
        return;
      }
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  protected render(): void {
    const checked = this.boolAttr('checked');
    const disabled = this.boolAttr('disabled');
    const label = this.attr('label');
    const name = this.attr('name');

    this.root.innerHTML = `
      <label class="${disabled ? 'disabled' : ''}">
        <input type="radio" ${name ? `name="${escapeHtml(name)}"` : ''} ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''} />
        <span class="circle" aria-hidden="true"><span class="dot"></span></span>
        ${label ? `<span>${escapeHtml(label)}</span>` : '<slot></slot>'}
      </label>
    `;

    const input = this.root.querySelector('input')!;
    input.addEventListener('change', () => {
      if (input.checked && name) {
        document.querySelectorAll(`dv-radio[name="${name}"]`).forEach((el) => {
          if (el !== this) el.removeAttribute('checked');
        });
      }
      this.checked = input.checked;
      this.emit('dv-change', { checked: input.checked, value: this.attr('value') });
    });
  }
}

defineElement('dv-radio', DvRadio);
