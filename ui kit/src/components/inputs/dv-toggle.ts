import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvToggle extends DvBaseElement {
  static observedAttributes = ['checked', 'disabled', 'label'];

  protected static get componentStyles(): string {
    return `
      :host { display: inline-flex; }
      .wrap {
        display: inline-flex;
        align-items: center;
        gap: var(--dv-space-3);
        cursor: pointer;
        user-select: none;
        font-size: var(--dv-text-body);
        color: var(--dv-text-primary);
        background: none;
        border: none;
        padding: 0;
      }
      .wrap:disabled { opacity: 0.45; cursor: not-allowed; }
      .wrap:focus-visible { outline: none; }
      .wrap:focus-visible .track { box-shadow: var(--dv-focus-ring); }

      .track {
        position: relative;
        width: 40px;
        height: 22px;
        border-radius: 11px;
        background: var(--dv-surface-active);
        border: none;
        flex-shrink: 0;
        transition: opacity var(--dv-duration-base) var(--dv-ease);
      }
      .track.checked {
        background: var(--dv-accent);
      }
      .thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: var(--dv-text-primary);
        transition: transform var(--dv-duration-base) cubic-bezier(0.34, 1.45, 0.64, 1);
      }
      .track.checked .thumb {
        background: var(--dv-accent-fg);
        transform: translateX(18px);
      }
      .wrap:active:not(:disabled) .thumb {
        transform: scale(0.92);
      }
      .wrap:active:not(:disabled) .track.checked .thumb {
        transform: translateX(18px) scale(0.92);
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
      const btn = this.root.querySelector('button');
      const track = this.root.querySelector('.track');
      if (btn && track) {
        const isChecked = this.boolAttr('checked');
        btn.setAttribute('aria-checked', String(isChecked));
        track.classList.toggle('checked', isChecked);
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
      <button
        type="button"
        class="wrap"
        role="switch"
        aria-checked="${checked}"
        ${disabled ? 'disabled' : ''}
      >
        <span class="track ${checked ? 'checked' : ''}" aria-hidden="true">
          <span class="thumb"></span>
        </span>
        ${label ? `<span>${escapeHtml(label)}</span>` : '<slot></slot>'}
      </button>
    `;

    const btn = this.root.querySelector('button')!;
    btn.addEventListener('click', () => {
      if (this.boolAttr('disabled')) return;
      this.checked = !this.checked;
      this.emit('dv-change', { checked: this.checked });
    });
  }
}

defineElement('dv-toggle', DvToggle);
