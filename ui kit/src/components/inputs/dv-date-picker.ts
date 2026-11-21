import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

const MONTHS_RU = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const WEEKDAYS_RU = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

export class DvDatePicker extends DvBaseElement {
  static observedAttributes = ['value', 'placeholder', 'disabled', 'size'];

  private _open = false;
  private _viewYear = new Date().getFullYear();
  private _viewMonth = new Date().getMonth();

  private _onDocClick = (e: MouseEvent) => {
    if (this._open && !e.composedPath().includes(this)) {
      this.setOpen(false);
    }
  };

  private _onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this._open) {
      this.setOpen(false);
    }
  };

  protected static get componentStyles(): string {
    return `
      :host { display: inline-block; position: relative; width: 100%; max-width: 280px; }
      .trigger {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--dv-space-2);
        border: none;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        font-family: var(--dv-font-sans);
        font-variant-numeric: tabular-nums;
        cursor: pointer;
        outline: none;
        transition: opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .trigger:hover:not(:disabled) { background: var(--dv-surface-hover); }
      .trigger:focus-visible,
      .trigger.open {
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-focus-ring);
      }
      .trigger:disabled { opacity: 0.45; cursor: not-allowed; }
      .size-sm { height: 32px; padding: 0 10px; font-size: var(--dv-text-sm); }
      .size-md { height: 38px; padding: 0 12px; font-size: var(--dv-text-body); }
      .size-lg { height: 44px; padding: 0 14px; font-size: var(--dv-text-body); }
      .placeholder { color: var(--dv-text-muted); }

      .popover {
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        width: 280px;
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
        animation: dv-cal-in var(--dv-duration-fast) var(--dv-ease);
      }
      @keyframes dv-cal-in {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .cal-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .month-label {
        font-size: var(--dv-text-sm);
        font-weight: 600;
        color: var(--dv-text-primary);
      }
      .nav-btn {
        width: 28px;
        height: 28px;
        border: none;
        border-radius: var(--dv-radius-xs);
        background: transparent;
        color: var(--dv-text-secondary);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .nav-btn:hover { background: var(--dv-surface-hover); color: var(--dv-text-primary); }

      .grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 2px;
        text-align: center;
      }
      .wd {
        font-size: 11px;
        color: var(--dv-text-muted);
        padding-bottom: 4px;
      }
      .day {
        height: 32px;
        border: none;
        border-radius: var(--dv-radius-xs);
        background: transparent;
        color: var(--dv-text-primary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-xs);
        font-variant-numeric: tabular-nums;
        cursor: pointer;
      }
      .day:hover { background: var(--dv-surface-hover); }
      .day.today { background: var(--dv-surface); font-weight: 600; }
      .day.selected {
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
        font-weight: 600;
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

  private setOpen(next: boolean): void {
    this._open = next;
    this.root.querySelector('.trigger')?.classList.toggle('open', next);
    this.root.querySelector('.popover')?.classList.toggle('open', next);
  }

  private formatIso(y: number, m: number, d: number): string {
    return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
  }

  private renderCalendar(): void {
    const pop = this.root.querySelector('.popover');
    if (!pop) return;
    const selected = this.attr('value', '');
    const now = new Date();
    const todayIso = this.formatIso(now.getFullYear(), now.getMonth(), now.getDate());

    const firstDay = new Date(this._viewYear, this._viewMonth, 1);
    const startOffset = (firstDay.getDay() + 6) % 7; // Monday = 0
    const daysInMonth = new Date(this._viewYear, this._viewMonth + 1, 0).getDate();

    const blanks = Array.from({ length: startOffset }, () => `<div></div>`).join('');
    const days = Array.from({ length: daysInMonth }, (_, i) => {
      const d = i + 1;
      const iso = this.formatIso(this._viewYear, this._viewMonth, d);
      const isSelected = iso === selected;
      const isToday = iso === todayIso;
      return `<button type="button" class="day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}" data-iso="${iso}">${d}</button>`;
    }).join('');

    pop.innerHTML = `
      <div class="cal-head">
        <button type="button" class="nav-btn prev" aria-label="Предыдущий месяц">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${DV_ICONS['chevron-left']}</svg>
        </button>
        <span class="month-label">${MONTHS_RU[this._viewMonth]} ${this._viewYear}</span>
        <button type="button" class="nav-btn next" aria-label="Следующий месяц">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${DV_ICONS['chevron-right']}</svg>
        </button>
      </div>
      <div class="grid">
        ${WEEKDAYS_RU.map((w) => `<div class="wd">${w}</div>`).join('')}
        ${blanks}
        ${days}
      </div>
    `;

    pop.querySelector('.prev')?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (this._viewMonth === 0) {
        this._viewMonth = 11;
        this._viewYear--;
      } else {
        this._viewMonth--;
      }
      this.renderCalendar();
    });

    pop.querySelector('.next')?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (this._viewMonth === 11) {
        this._viewMonth = 0;
        this._viewYear++;
      } else {
        this._viewMonth++;
      }
      this.renderCalendar();
    });

    pop.querySelectorAll<HTMLButtonElement>('.day').forEach((btn) => {
      btn.addEventListener('click', () => {
        const iso = btn.dataset.iso ?? '';
        this._open = false;
        this.setAttribute('value', iso);
        this.emit('dv-change', { value: iso });
      });
    });
  }

  protected render(): void {
    const val = this.attr('value', '');
    const placeholder = this.attr('placeholder', 'Выберите дату');
    const disabled = this.boolAttr('disabled');
    const size = this.attr('size', 'md');

    if (val && /^\d{4}-\d{2}-\d{2}$/.test(val)) {
      const [y, m] = val.split('-').map(Number);
      this._viewYear = y;
      this._viewMonth = m - 1;
    }

    this.root.innerHTML = `
      <button type="button" class="trigger size-${size} ${this._open ? 'open' : ''}" ${disabled ? 'disabled' : ''}>
        <span class="${val ? '' : 'placeholder'}">${escapeHtml(val || placeholder)}</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${DV_ICONS['chevron-down']}</svg>
      </button>
      <div class="popover ${this._open ? 'open' : ''}"></div>
    `;

    this.renderCalendar();
    this.root.querySelector('.trigger')?.addEventListener('click', () => {
      if (!disabled) this.setOpen(!this._open);
    });
  }
}

defineElement('dv-date-picker', DvDatePicker);
