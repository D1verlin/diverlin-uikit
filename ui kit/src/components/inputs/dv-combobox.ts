import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export interface DvComboboxOption {
  label: string;
  value: string;
}

export class DvCombobox extends DvBaseElement {
  static observedAttributes = ['value', 'options', 'placeholder', 'multiple', 'disabled', 'size'];

  private _open = false;
  private _query = '';

  private _onDocClick = (e: MouseEvent) => {
    if (this._open && !e.composedPath().includes(this)) {
      this.setOpen(false);
    }
  };

  private _onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this._open) {
      this.setOpen(false);
      this.root.querySelector<HTMLInputElement>('.search-input')?.blur();
    }
  };

  protected static get componentStyles(): string {
    return `
      :host { display: block; width: 100%; position: relative; }
      .control {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        width: 100%;
        min-height: 38px;
        padding: 5px 10px;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        cursor: text;
        transition: opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .control:hover:not(.disabled):not(.open) { background: var(--dv-surface-hover); }
      .control.open {
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-focus-ring);
      }
      .control.disabled { opacity: 0.45; cursor: not-allowed; }
      .size-sm { min-height: 32px; padding: 3px 8px; }
      .size-lg { min-height: 44px; padding: 7px 12px; }

      .chips {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        align-items: center;
      }
      .chip {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        height: 24px;
        padding: 0 8px;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-surface-elevated);
        color: var(--dv-text-primary);
        font-size: var(--dv-text-xs);
        font-weight: 500;
      }
      .chip-rm {
        display: inline-flex;
        border: none;
        background: transparent;
        color: var(--dv-text-muted);
        cursor: pointer;
        padding: 1px;
      }
      .chip-rm:hover { color: var(--dv-text-primary); }

      .search-input {
        flex: 1;
        min-width: 80px;
        border: none;
        background: transparent;
        outline: none;
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-body);
        color: var(--dv-text-primary);
      }
      .search-input::placeholder { color: var(--dv-text-muted); }

      .chevron {
        color: var(--dv-text-muted);
        display: inline-flex;
        margin-left: auto;
        transition: transform var(--dv-duration-fast) var(--dv-ease);
      }
      .control.open .chevron { transform: rotate(180deg); }

      .menu {
        position: absolute;
        top: calc(100% + 6px);
        left: 0;
        right: 0;
        z-index: var(--dv-z-dropdown);
        background: var(--dv-surface-elevated);
        border-radius: var(--dv-radius-md);
        box-shadow: var(--dv-shadow-md);
        padding: 4px;
        max-height: 220px;
        overflow-y: auto;
        display: none;
        flex-direction: column;
        gap: 2px;
      }
      .menu.open {
        display: flex;
        animation: dv-cb-in var(--dv-duration-fast) var(--dv-ease);
      }
      @keyframes dv-cb-in {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 8px 10px;
        border: none;
        border-radius: var(--dv-radius-xs);
        background: transparent;
        color: var(--dv-text-primary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        cursor: pointer;
        text-align: left;
      }
      .option:hover { background: var(--dv-surface-hover); }
      .option[aria-selected='true'] { background: var(--dv-surface); font-weight: 600; }
      .empty {
        padding: 12px;
        text-align: center;
        font-size: var(--dv-text-sm);
        color: var(--dv-text-muted);
      }
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

  private getOptions(): DvComboboxOption[] {
    try {
      const parsed = JSON.parse(this.attr('options', '[]'));
      if (!Array.isArray(parsed)) return [];
      return parsed.map((o) =>
        typeof o === 'string' ? { label: o, value: o } : { label: String(o.label ?? o.value), value: String(o.value) },
      );
    } catch {
      return [];
    }
  }

  private getSelectedValues(): string[] {
    const raw = this.attr('value', '');
    if (!raw) return [];
    if (this.boolAttr('multiple')) {
      return raw.split(',').map((s) => s.trim()).filter(Boolean);
    }
    return [raw];
  }

  private setOpen(next: boolean): void {
    this._open = next;
    this.root.querySelector('.control')?.classList.toggle('open', next);
    this.root.querySelector('.menu')?.classList.toggle('open', next);
  }

  private renderMenu(): void {
    const menu = this.root.querySelector('.menu');
    if (!menu) return;
    const options = this.getOptions();
    const selected = new Set(this.getSelectedValues());
    const q = this._query.trim().toLowerCase();
    const filtered = q ? options.filter((o) => o.label.toLowerCase().includes(q)) : options;

    if (filtered.length === 0) {
      menu.innerHTML = `<div class="empty">Ничего не найдено</div>`;
      return;
    }

    menu.innerHTML = filtered
      .map(
        (o) => `
      <button type="button" class="option" data-val="${escapeHtml(o.value)}" aria-selected="${selected.has(o.value)}">
        <span>${escapeHtml(o.label)}</span>
        ${
          selected.has(o.value)
            ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">${DV_ICONS.check}</svg>`
            : ''
        }
      </button>
    `,
      )
      .join('');

    menu.querySelectorAll<HTMLButtonElement>('.option').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const val = btn.dataset.val ?? '';
        const isMulti = this.boolAttr('multiple');
        if (isMulti) {
          const next = new Set(this.getSelectedValues());
          if (next.has(val)) next.delete(val);
          else next.add(val);
          const joined = Array.from(next).join(',');
          this.setAttribute('value', joined);
          this._query = '';
          this.emit('dv-change', { value: Array.from(next) });
        } else {
          this._open = false;
          this._query = '';
          this.setAttribute('value', val);
          this.emit('dv-change', { value: val });
        }
      });
    });
  }

  protected render(): void {
    const multiple = this.boolAttr('multiple');
    const disabled = this.boolAttr('disabled');
    const size = this.attr('size', 'md');
    const placeholder = this.attr('placeholder', 'Выберите или найдите...');
    const options = this.getOptions();
    const selectedVals = this.getSelectedValues();
    const selectedOpts = selectedVals
      .map((v) => options.find((o) => o.value === v))
      .filter((o): o is DvComboboxOption => Boolean(o));

    const singleLabel = !multiple && selectedOpts[0] ? selectedOpts[0].label : '';

    this.root.innerHTML = `
      <div class="control size-${size} ${disabled ? 'disabled' : ''} ${this._open ? 'open' : ''}">
        ${
          multiple && selectedOpts.length
            ? `<div class="chips">
                ${selectedOpts
                  .map(
                    (o) => `
                  <span class="chip">
                    <span>${escapeHtml(o.label)}</span>
                    <button type="button" class="chip-rm" data-rm="${escapeHtml(o.value)}" aria-label="Удалить">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">${DV_ICONS.x}</svg>
                    </button>
                  </span>
                `,
                  )
                  .join('')}
              </div>`
            : ''
        }
        <input
          type="text"
          class="search-input"
          value="${escapeHtml(this._query || singleLabel)}"
          placeholder="${escapeHtml(multiple && selectedOpts.length ? '' : placeholder)}"
          ${disabled ? 'disabled' : ''}
        />
        <span class="chevron" aria-hidden="true">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${DV_ICONS['chevron-down']}</svg>
        </span>
      </div>
      <div class="menu ${this._open ? 'open' : ''}" role="listbox"></div>
    `;

    this.renderMenu();
    if (disabled) return;

    const control = this.root.querySelector('.control')!;
    const input = this.root.querySelector<HTMLInputElement>('.search-input')!;

    control.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).closest('.chip-rm')) return;
      this.setOpen(true);
      input.focus();
    });

    input.addEventListener('focus', () => {
      if (!multiple && singleLabel && !this._query) {
        input.select();
      }
      this.setOpen(true);
    });

    input.addEventListener('input', () => {
      this._query = input.value;
      this.setOpen(true);
      this.renderMenu();
    });

    this.root.querySelectorAll<HTMLButtonElement>('.chip-rm').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const rm = btn.dataset.rm ?? '';
        const next = this.getSelectedValues().filter((v) => v !== rm);
        this.setAttribute('value', next.join(','));
        this.emit('dv-change', { value: next });
      });
    });
  }
}

defineElement('dv-combobox', DvCombobox);
