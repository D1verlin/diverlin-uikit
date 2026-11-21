import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export interface DvCommandItem {
  id: string;
  label: string;
  group?: string;
  shortcut?: string;
  icon?: string;
}

export class DvCommand extends DvBaseElement {
  static observedAttributes = ['open', 'items', 'placeholder'];

  private _query = '';
  private _activeIdx = 0;

  private _onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this.boolAttr('open')) {
      this.close();
    }
  };

  protected static get componentStyles(): string {
    return `
      :host { display: contents; }
      .backdrop {
        position: fixed;
        inset: 0;
        z-index: var(--dv-z-modal);
        background: rgba(0, 0, 0, 0.5);
        display: none;
        align-items: flex-start;
        justify-content: center;
        padding: min(14vh, 120px) var(--dv-space-4) var(--dv-space-4);
      }
      .backdrop.open { display: flex; }
      .dialog {
        width: 100%;
        max-width: 520px;
        border-radius: var(--dv-radius-lg);
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-shadow-lg);
        overflow: hidden;
        animation: dv-cmd-in var(--dv-duration-base) var(--dv-ease);
      }
      @keyframes dv-cmd-in {
        from { opacity: 0; transform: translateY(-6px) scale(0.985); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      .search-row {
        display: flex;
        align-items: center;
        gap: var(--dv-space-3);
        padding: 12px 16px;
        background: var(--dv-surface);
      }
      .search-row input {
        flex: 1;
        border: none;
        background: transparent;
        outline: none;
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-body);
        color: var(--dv-text-primary);
      }
      .search-row input::placeholder { color: var(--dv-text-muted); }
      .list {
        max-height: 300px;
        overflow-y: auto;
        padding: var(--dv-space-2);
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--dv-space-3);
        width: 100%;
        padding: 9px 12px;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: transparent;
        color: var(--dv-text-primary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        cursor: pointer;
        text-align: left;
      }
      .item:hover,
      .item.active {
        background: var(--dv-surface-hover);
      }
      .left { display: flex; align-items: center; gap: var(--dv-space-2); }
      .icon { color: var(--dv-text-muted); display: inline-flex; }
      .kbd {
        font-family: var(--dv-font-mono);
        font-size: 11px;
        color: var(--dv-text-muted);
        background: var(--dv-surface);
        padding: 2px 6px;
        border-radius: var(--dv-radius-xs);
      }
      .empty {
        padding: 20px;
        text-align: center;
        font-size: var(--dv-text-sm);
        color: var(--dv-text-muted);
      }
    `;
  }

  protected onMount(): void {
    document.addEventListener('keydown', this._onKeyDown);
  }

  protected onUnmount(): void {
    document.removeEventListener('keydown', this._onKeyDown);
  }

  public show(): void {
    this._query = '';
    this._activeIdx = 0;
    this.setAttribute('open', '');
  }

  public close(): void {
    this.removeAttribute('open');
    this.emit('dv-close');
  }

  private getItems(): DvCommandItem[] {
    try {
      const parsed = JSON.parse(this.attr('items', '[]'));
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  private renderList(): void {
    const list = this.root.querySelector('.list');
    if (!list) return;
    const items = this.getItems();
    const q = this._query.trim().toLowerCase();
    const filtered = q ? items.filter((i) => i.label.toLowerCase().includes(q)) : items;

    if (filtered.length === 0) {
      list.innerHTML = `<div class="empty">Команды не найдены</div>`;
      return;
    }

    this._activeIdx = Math.min(this._activeIdx, filtered.length - 1);

    list.innerHTML = filtered
      .map((item, idx) => {
        const iconSvg = item.icon && DV_ICONS[item.icon] ? DV_ICONS[item.icon] : DV_ICONS['arrow-right'];
        return `
        <button type="button" class="item ${idx === this._activeIdx ? 'active' : ''}" data-id="${escapeHtml(item.id)}">
          <span class="left">
            <span class="icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${iconSvg}</svg>
            </span>
            <span>${escapeHtml(item.label)}</span>
          </span>
          ${item.shortcut ? `<span class="kbd">${escapeHtml(item.shortcut)}</span>` : ''}
        </button>
      `;
      })
      .join('');

    list.querySelectorAll<HTMLButtonElement>('.item').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id ?? '';
        const item = items.find((i) => i.id === id);
        this.close();
        this.emit('dv-select', { id, item });
      });
    });
  }

  protected render(): void {
    const open = this.boolAttr('open');
    const placeholder = this.attr('placeholder', 'Введите команду или поиск...');

    this.root.innerHTML = `
      <div class="backdrop ${open ? 'open' : ''}">
        <div class="dialog" role="dialog" aria-modal="true" aria-label="Палитра команд">
          <div class="search-row">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" style="color:var(--dv-text-muted)">${DV_ICONS.search}</svg>
            <input type="text" placeholder="${escapeHtml(placeholder)}" value="${escapeHtml(this._query)}" />
            <span class="kbd">Esc</span>
          </div>
          <div class="list"></div>
        </div>
      </div>
    `;

    this.renderList();

    this.root.querySelector('.backdrop')?.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) this.close();
    });

    const input = this.root.querySelector<HTMLInputElement>('input');
    if (open && input) {
      requestAnimationFrame(() => input.focus());
      input.addEventListener('input', () => {
        this._query = input.value;
        this._activeIdx = 0;
        this.renderList();
      });
      input.addEventListener('keydown', (e) => {
        const btns = this.root.querySelectorAll<HTMLButtonElement>('.item');
        if (!btns.length) return;
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          this._activeIdx = (this._activeIdx + 1) % btns.length;
          this.renderList();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          this._activeIdx = (this._activeIdx - 1 + btns.length) % btns.length;
          this.renderList();
        } else if (e.key === 'Enter') {
          e.preventDefault();
          btns[this._activeIdx]?.click();
        }
      });
    }
  }
}

defineElement('dv-command', DvCommand);
