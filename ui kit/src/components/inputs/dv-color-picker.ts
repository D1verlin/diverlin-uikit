import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

const DEFAULT_SWATCHES = [
  '#18181b',
  '#52525b',
  '#dc2626',
  '#ea580c',
  '#ca8a04',
  '#16a34a',
  '#0d9488',
  '#2563eb',
  '#4f46e5',
  '#9333ea',
  '#db2777',
  '#f4f4f6',
];

export class DvColorPicker extends DvBaseElement {
  static observedAttributes = ['value', 'disabled', 'swatches'];

  private _open = false;

  private _onDocClick = (e: MouseEvent) => {
    if (this._open && !e.composedPath().includes(this)) {
      this.setOpen(false);
    }
  };

  private _onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this._open) {
      this.setOpen(false);
      this.root.querySelector<HTMLButtonElement>('.trigger')?.focus();
    }
  };

  protected static get componentStyles(): string {
    return `
      :host { display: inline-block; position: relative; }
      .trigger {
        display: inline-flex;
        align-items: center;
        gap: var(--dv-space-2);
        height: 38px;
        padding: 0 12px;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        font-family: var(--dv-font-mono);
        font-size: var(--dv-text-sm);
        cursor: pointer;
        transition: opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .trigger:hover:not(:disabled) { background: var(--dv-surface-hover); }
      .trigger:focus-visible,
      .trigger.open {
        outline: none;
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-focus-ring);
      }
      .trigger:disabled { opacity: 0.45; cursor: not-allowed; }
      .preview-dot {
        width: 16px;
        height: 16px;
        border-radius: var(--dv-radius-xs);
        flex-shrink: 0;
      }
      .popover {
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        width: 224px;
        padding: var(--dv-space-3);
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-shadow-lg);
        z-index: var(--dv-z-dropdown);
        display: none;
        flex-direction: column;
        gap: var(--dv-space-3);
      }
      .popover.open {
        display: flex;
        animation: dv-cp-in var(--dv-duration-fast) var(--dv-ease);
      }
      @keyframes dv-cp-in {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .swatches {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 6px;
      }
      .swatch {
        width: 26px;
        height: 26px;
        border: none;
        border-radius: var(--dv-radius-xs);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: transform var(--dv-duration-fast) cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .swatch:hover { transform: scale(1.12); }
      .swatch.active { transform: scale(1.08); box-shadow: var(--dv-focus-ring); }
      .custom-row {
        display: flex;
        align-items: center;
        gap: var(--dv-space-2);
      }
      input[type='color'] {
        width: 34px;
        height: 32px;
        padding: 0;
        border: none;
        border-radius: var(--dv-radius-xs);
        background: transparent;
        cursor: pointer;
      }
      .hex-input {
        flex: 1;
        min-width: 0;
        height: 32px;
        padding: 0 8px;
        border: none;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        font-family: var(--dv-font-mono);
        font-size: var(--dv-text-sm);
        outline: none;
      }
      .hex-input:focus { box-shadow: var(--dv-focus-ring); }
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
    return this.attr('value', '#18181b');
  }

  set value(v: string) {
    this.setAttribute('value', v);
  }

  private _syncing = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === 'value' && this.root.querySelector('.trigger')) {
      if (this._syncing) return;
      this.syncVisual(newValue ?? '#18181b');
      return;
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  private syncVisual(color: string): void {
    const dot = this.root.querySelector<HTMLElement>('.preview-dot');
    const label = this.root.querySelector('.hex-label');
    const hexInp = this.root.querySelector<HTMLInputElement>('.hex-input');
    const nativeInp = this.root.querySelector<HTMLInputElement>('input[type="color"]');
    if (dot) dot.style.background = color;
    if (label) label.textContent = color;
    if (hexInp && hexInp.value !== color) hexInp.value = color;
    if (nativeInp && /^#[0-9a-fA-F]{6}$/.test(color)) nativeInp.value = color;
    this.root.querySelectorAll<HTMLElement>('.swatch').forEach((s) => {
      s.classList.toggle('active', s.dataset.color?.toLowerCase() === color.toLowerCase());
    });
  }

  private setOpen(next: boolean): void {
    this._open = next;
    this.root.querySelector('.trigger')?.classList.toggle('open', next);
    this.root.querySelector('.popover')?.classList.toggle('open', next);
  }

  private getSwatches(): string[] {
    const raw = this.attr('swatches');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed.map(String);
      } catch {
        // fallback
      }
    }
    return DEFAULT_SWATCHES;
  }

  private applyColor(color: string, commit: boolean): void {
    this._syncing = true;
    this.setAttribute('value', color);
    this._syncing = false;
    this.syncVisual(color);
    this.emit('dv-input', { value: color });
    if (commit) this.emit('dv-change', { value: color });
  }

  protected render(): void {
    const val = this.attr('value', '#18181b');
    const disabled = this.boolAttr('disabled');
    const swatches = this.getSwatches();

    this.root.innerHTML = `
      <button type="button" class="trigger ${this._open ? 'open' : ''}" ${disabled ? 'disabled' : ''}>
        <span class="preview-dot" style="background:${escapeHtml(val)}"></span>
        <span class="hex-label">${escapeHtml(val)}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${DV_ICONS['chevron-down']}</svg>
      </button>
      <div class="popover ${this._open ? 'open' : ''}">
        <div class="swatches">
          ${swatches
            .map(
              (c) =>
                `<button type="button" class="swatch ${c.toLowerCase() === val.toLowerCase() ? 'active' : ''}" data-color="${escapeHtml(c)}" style="background:${escapeHtml(c)}" aria-label="${escapeHtml(c)}"></button>`,
            )
            .join('')}
        </div>
        <div class="custom-row">
          <input type="color" value="${/^#[0-9a-fA-F]{6}$/.test(val) ? val : '#18181b'}" aria-label="Выбор цвета" />
          <input type="text" class="hex-input" value="${escapeHtml(val)}" maxlength="7" aria-label="Hex код" />
        </div>
      </div>
    `;

    this.root.querySelector('.trigger')?.addEventListener('click', () => {
      if (!disabled) this.setOpen(!this._open);
    });

    this.root.querySelectorAll<HTMLButtonElement>('.swatch').forEach((btn) => {
      btn.addEventListener('click', () => {
        const c = btn.dataset.color ?? '#18181b';
        this.applyColor(c, true);
      });
    });

    const nativeInp = this.root.querySelector<HTMLInputElement>('input[type="color"]')!;
    nativeInp.addEventListener('input', () => this.applyColor(nativeInp.value, false));
    nativeInp.addEventListener('change', () => this.applyColor(nativeInp.value, true));

    const hexInp = this.root.querySelector<HTMLInputElement>('.hex-input')!;
    hexInp.addEventListener('change', () => {
      const cleaned = hexInp.value.trim();
      if (/^#[0-9a-fA-F]{6}$/.test(cleaned)) {
        this.applyColor(cleaned, true);
      }
    });
  }
}

defineElement('dv-color-picker', DvColorPicker);
