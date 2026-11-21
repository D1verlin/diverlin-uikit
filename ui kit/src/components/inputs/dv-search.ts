import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export class DvSearch extends DvBaseElement {
  static observedAttributes = ['value', 'placeholder', 'size', 'disabled', 'shortcut', 'loading'];

  private _syncing = false;

  protected static get componentStyles(): string {
    return `
      :host { display: block; width: 100%; }
      .wrap {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        background: var(--dv-surface);
        border-radius: var(--dv-radius-sm);
        transition: opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .wrap:hover:not(.disabled):not(.focused) {
        background: var(--dv-surface-hover);
      }
      .wrap.focused {
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-focus-ring);
      }
      .wrap.disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }

      .size-sm { height: 32px; padding-inline: 10px; gap: 8px; font-size: var(--dv-text-sm); }
      .size-md { height: 38px; padding-inline: 12px; gap: 10px; font-size: var(--dv-text-body); }
      .size-lg { height: 44px; padding-inline: 14px; gap: 10px; font-size: var(--dv-text-body); }

      .lead-icon {
        display: inline-flex;
        color: var(--dv-text-muted);
        flex-shrink: 0;
      }

      input {
        flex: 1;
        min-width: 0;
        border: none;
        background: transparent;
        outline: none;
        font-family: var(--dv-font-sans);
        font-size: inherit;
        color: var(--dv-text-primary);
      }
      input::placeholder { color: var(--dv-text-muted); }
      input:disabled { cursor: not-allowed; }
      input::-webkit-search-cancel-button { -webkit-appearance: none; appearance: none; }

      .clear-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 22px;
        height: 22px;
        border: none;
        border-radius: var(--dv-radius-xs);
        background: transparent;
        color: var(--dv-text-muted);
        cursor: pointer;
        opacity: 0;
        transform: scale(0.8);
        pointer-events: none;
        transition:
          opacity var(--dv-duration-fast) var(--dv-ease),
          transform var(--dv-duration-fast) cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .clear-btn.visible {
        opacity: 1;
        transform: scale(1);
        pointer-events: auto;
      }
      .clear-btn:hover {
        background: var(--dv-surface-hover);
        color: var(--dv-text-primary);
      }

      .kbd {
        display: inline-flex;
        align-items: center;
        height: 20px;
        padding: 0 6px;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-surface-elevated);
        color: var(--dv-text-muted);
        font-family: var(--dv-font-mono);
        font-size: 11px;
        flex-shrink: 0;
        transition: opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .wrap.focused .kbd,
      .wrap.has-value .kbd {
        opacity: 0;
        pointer-events: none;
        position: absolute;
        right: 10px;
      }

      .spinner {
        width: 14px;
        height: 14px;
        border: 2px solid var(--dv-surface-active);
        border-top-color: var(--dv-text-primary);
        border-radius: 50%;
        animation: dv-spin 0.65s linear infinite;
        flex-shrink: 0;
      }
      @keyframes dv-spin {
        to { transform: rotate(360deg); }
      }
    `;
  }

  get value(): string {
    return this.root.querySelector('input')?.value ?? this.attr('value');
  }

  set value(v: string) {
    this.setAttribute('value', v);
    const input = this.root.querySelector('input');
    if (input && input.value !== v) {
      input.value = v;
      this.syncState(v);
    }
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === 'value') {
      if (this._syncing) return;
      const input = this.root.querySelector('input');
      if (input) {
        const next = newValue ?? '';
        if (input.value !== next) input.value = next;
        this.syncState(next);
        return;
      }
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  private syncState(val: string): void {
    const hasVal = val.length > 0;
    this.root.querySelector('.wrap')?.classList.toggle('has-value', hasVal);
    this.root.querySelector('.clear-btn')?.classList.toggle('visible', hasVal);
  }

  protected render(): void {
    const value = this.attr('value', '');
    const placeholder = this.attr('placeholder', 'Поиск...');
    const size = this.attr('size', 'md');
    const disabled = this.boolAttr('disabled');
    const shortcut = this.attr('shortcut', '');
    const loading = this.boolAttr('loading');
    const hasVal = value.length > 0;

    this.root.innerHTML = `
      <div class="wrap size-${size} ${disabled ? 'disabled' : ''} ${hasVal ? 'has-value' : ''}">
        <span class="lead-icon" aria-hidden="true">
          ${
            loading
              ? '<span class="spinner"></span>'
              : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${DV_ICONS.search}</svg>`
          }
        </span>
        <input
          type="text"
          role="searchbox"
          value="${escapeHtml(value)}"
          placeholder="${escapeHtml(placeholder)}"
          ${disabled ? 'disabled' : ''}
        />
        <button type="button" class="clear-btn ${hasVal ? 'visible' : ''}" aria-label="Очистить поиск" tabindex="-1">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${DV_ICONS.x}</svg>
        </button>
        ${shortcut ? `<span class="kbd">${escapeHtml(shortcut)}</span>` : ''}
      </div>
    `;

    const wrap = this.root.querySelector('.wrap')!;
    const input = this.root.querySelector('input')!;
    const clearBtn = this.root.querySelector('.clear-btn')!;

    input.addEventListener('focus', () => wrap.classList.add('focused'));
    input.addEventListener('blur', () => wrap.classList.remove('focused'));

    input.addEventListener('input', () => {
      this._syncing = true;
      this.setAttribute('value', input.value);
      this._syncing = false;
      this.syncState(input.value);
      this.emit('dv-input', { value: input.value });
    });

    input.addEventListener('change', () => {
      this.emit('dv-change', { value: input.value });
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.emit('dv-submit', { value: input.value });
      } else if (e.key === 'Escape' && input.value) {
        e.stopPropagation();
        this.clear();
      }
    });

    clearBtn.addEventListener('click', () => {
      this.clear();
      input.focus();
    });
  }

  public clear(): void {
    const input = this.root.querySelector('input');
    this._syncing = true;
    this.setAttribute('value', '');
    this._syncing = false;
    if (input) input.value = '';
    this.syncState('');
    this.emit('dv-input', { value: '' });
    this.emit('dv-clear');
  }
}

defineElement('dv-search', DvSearch);
