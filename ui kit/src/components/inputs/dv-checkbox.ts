import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export class DvCheckbox extends DvBaseElement {
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
      .box {
        width: 18px;
        height: 18px;
        border-radius: var(--dv-radius-xs);
        border: none;
        background: var(--dv-surface-active);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--dv-accent-fg);
        flex-shrink: 0;
        transition: transform var(--dv-duration-fast) var(--dv-ease);
      }
      .check-icon {
        opacity: 0;
        transform: scale(0.6);
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      input:checked + .box {
        background: var(--dv-accent);
      }
      input:checked + .box .check-icon {
        opacity: 1;
        transform: scale(1);
      }
      label:active:not(.disabled) .box {
        transform: scale(0.92);
      }
      input:focus-visible + .box {
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

    this.root.innerHTML = `
      <label class="${disabled ? 'disabled' : ''}">
        <input type="checkbox" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''} />
        <span class="box" aria-hidden="true">
          <svg class="check-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${DV_ICONS.check}</svg>
        </span>
        ${label ? `<span>${escapeHtml(label)}</span>` : '<slot></slot>'}
      </label>
    `;

    const input = this.root.querySelector('input')!;
    input.addEventListener('change', () => {
      this.checked = input.checked;
      this.emit('dv-change', { checked: input.checked, value: this.attr('value', 'on') });
    });
  }
}

defineElement('dv-checkbox', DvCheckbox);
