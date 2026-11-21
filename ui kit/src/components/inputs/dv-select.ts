import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export interface DvSelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export class DvSelect extends DvBaseElement {
  static observedAttributes = ['value', 'disabled', 'error', 'size', 'options', 'placeholder'];

  private _open = false;

  private _onDocClick = (e: MouseEvent) => {
    if (this._open && !e.composedPath().includes(this)) {
      this.setOpen(false);
    }
  };

  private _onKeyDown = (e: KeyboardEvent) => {
    if (!this._open) return;
    if (e.key === 'Escape') {
      this.setOpen(false);
      this.root.querySelector<HTMLButtonElement>('.trigger')?.focus();
    }
  };

  protected static get componentStyles(): string {
    return `
      :host { display: block; width: 100%; position: relative; }
      .wrap { position: relative; width: 100%; }
      .trigger {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--dv-space-2);
        font-family: var(--dv-font-sans);
        color: var(--dv-text-primary);
        background: var(--dv-surface);
        border: none;
        border-radius: var(--dv-radius-sm);
        cursor: pointer;
        text-align: left;
        outline: none;
        transition: opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .trigger:hover:not(:disabled) { background: var(--dv-surface-hover); }
      .trigger:focus-visible,
      .trigger.open {
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-focus-ring);
      }
      .trigger:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .trigger.has-error { box-shadow: 0 0 0 2px var(--dv-danger); }
      .placeholder { color: var(--dv-text-muted); }

      .size-sm { height: 32px; padding: 0 10px; font-size: var(--dv-text-sm); }
      .size-md { height: 38px; padding: 0 12px; font-size: var(--dv-text-body); }
      .size-lg { height: 44px; padding: 0 14px; font-size: var(--dv-text-body); }

      .chevron {
        color: var(--dv-text-muted);
        display: inline-flex;
        flex-shrink: 0;
        transition: transform var(--dv-duration-fast) var(--dv-ease);
      }
      .trigger.open .chevron { transform: rotate(180deg); }

      .menu {
        position: absolute;
        top: calc(100% + 6px);
        left: 0;
        right: 0;
        z-index: var(--dv-z-dropdown);
        background: var(--dv-surface-elevated);
        border: none;
        border-radius: var(--dv-radius-md);
        box-shadow: var(--dv-shadow-md);
        padding: 4px;
        max-height: 240px;
        overflow-y: auto;
        display: none;
        flex-direction: column;
        gap: 2px;
      }
      .menu.open {
        display: flex;
        animation: dv-select-in var(--dv-duration-fast) var(--dv-ease);
      }
      @keyframes dv-select-in {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--dv-space-2);
        width: 100%;
        padding: 8px 10px;
        border: none;
        background: transparent;
        color: var(--dv-text-primary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        border-radius: var(--dv-radius-xs);
        cursor: pointer;
        text-align: left;
      }
      .option:hover:not(:disabled) {
        background: var(--dv-surface-hover);
      }
      .option[aria-selected='true'] {
        background: var(--dv-surface);
        font-weight: 600;
      }
      .option:disabled { opacity: 0.45; cursor: not-allowed; }
    `;
  }

  protected onMount(): void {
    document.addEventListener('click', this._onDocClick);
    document.addEventListener('keydown', this._onKeyDown);
  }

  protected onUnmount(): void {
    document.removeEventListener('click', this._onDocClick);
    document.removeEventListener('keydown', this._onKeyDown);
  }

  get value(): string {
    return this.attr('value', '');
  }

  set value(v: string) {
    this.setAttribute('value', v);
  }

  private getItems(): DvSelectOption[] {
    const rawOptions = this.attr('options', '');
    if (rawOptions) {
      try {
        const parsed = JSON.parse(rawOptions);
        if (Array.isArray(parsed)) {
          return parsed.map((item) =>
            typeof item === 'string'
              ? { label: item, value: item }
              : { label: String(item.label ?? item.value), value: String(item.value), disabled: Boolean(item.disabled) },
          );
        }
      } catch {
        return [];
      }
    }
    return Array.from(this.querySelectorAll('option')).map((opt) => ({
      label: opt.textContent ?? opt.value,
      value: opt.value,
      disabled: opt.disabled,
    }));
  }

  private setOpen(next: boolean): void {
    this._open = next;
    this.root.querySelector('.trigger')?.classList.toggle('open', next);
    this.root.querySelector('.trigger')?.setAttribute('aria-expanded', String(next));
    this.root.querySelector('.menu')?.classList.toggle('open', next);
  }

  protected render(): void {
    const value = this.attr('value', '');
    const disabled = this.boolAttr('disabled');
    const error = this.boolAttr('error');
    const size = this.attr('size', 'md');
    const placeholder = this.attr('placeholder', 'Выберите значение');
    const items = this.getItems();
    const selected = items.find((o) => o.value === value);

    this.root.innerHTML = `
      <div class="wrap">
        <button
          type="button"
          class="trigger size-${size} ${error ? 'has-error' : ''} ${this._open ? 'open' : ''}"
          aria-haspopup="listbox"
          aria-expanded="${this._open}"
          ${disabled ? 'disabled' : ''}
        >
          <span class="${selected ? '' : 'placeholder'}">${escapeHtml(selected ? selected.label : placeholder)}</span>
          <span class="chevron" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${DV_ICONS['chevron-down']}</svg>
          </span>
        </button>
        <div class="menu ${this._open ? 'open' : ''}" role="listbox">
          ${items
            .map(
              (o) => `
            <button
              type="button"
              class="option"
              role="option"
              data-value="${escapeHtml(o.value)}"
              aria-selected="${o.value === value}"
              ${o.disabled ? 'disabled' : ''}
            >
              <span>${escapeHtml(o.label)}</span>
              ${
                o.value === value
                  ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${DV_ICONS.check}</svg>`
                  : ''
              }
            </button>
          `,
            )
            .join('')}
        </div>
      </div>
    `;

    this.root.querySelector('.trigger')?.addEventListener('click', () => {
      if (disabled) return;
      this.setOpen(!this._open);
    });

    this.root.querySelectorAll<HTMLButtonElement>('.option').forEach((optBtn) => {
      optBtn.addEventListener('click', () => {
        if (optBtn.disabled) return;
        const val = optBtn.getAttribute('data-value') ?? '';
        this._open = false;
        this.setAttribute('value', val);
        this.emit('dv-change', { value: val });
      });
    });
  }
}

defineElement('dv-select', DvSelect);
