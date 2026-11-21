import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export interface DvContextMenuItem {
  id: string;
  label: string;
  danger?: boolean;
}

export class DvContextMenu extends DvBaseElement {
  static observedAttributes = ['items'];

  private _open = false;

  private _onDocClick = (e: MouseEvent) => {
    if (this._open && !e.composedPath().includes(this)) {
      this.close();
    }
  };

  private _onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this._open) {
      this.close();
    }
  };

  protected static get componentStyles(): string {
    return `
      :host { display: block; }
      .menu {
        position: fixed;
        min-width: 180px;
        padding: 4px;
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-shadow-lg);
        z-index: var(--dv-z-dropdown);
        display: none;
        flex-direction: column;
        gap: 2px;
      }
      .menu.open {
        display: flex;
        animation: dv-ctx-in var(--dv-duration-fast) var(--dv-ease);
      }
      @keyframes dv-ctx-in {
        from { opacity: 0; transform: scale(0.97); }
        to { opacity: 1; transform: scale(1); }
      }
      .item {
        width: 100%;
        padding: 7px 10px;
        border: none;
        border-radius: var(--dv-radius-xs);
        background: transparent;
        color: var(--dv-text-primary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        text-align: left;
        cursor: pointer;
      }
      .item:hover { background: var(--dv-surface-hover); }
      .item.danger { color: var(--dv-danger); }
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

  private getItems(): DvContextMenuItem[] {
    try {
      const parsed = JSON.parse(this.attr('items', '[]'));
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  public close(): void {
    this._open = false;
    this.root.querySelector('.menu')?.classList.remove('open');
  }

  protected render(): void {
    const items = this.getItems();

    this.root.innerHTML = `
      <div class="target"><slot></slot></div>
      <div class="menu" role="menu">
        ${items
          .map(
            (i) =>
              `<button type="button" class="item ${i.danger ? 'danger' : ''}" role="menuitem" data-id="${escapeHtml(i.id)}">${escapeHtml(i.label)}</button>`,
          )
          .join('')}
      </div>
    `;

    const target = this.root.querySelector('.target')!;
    const menu = this.root.querySelector<HTMLElement>('.menu')!;

    target.addEventListener('contextmenu', (e: Event) => {
      const me = e as MouseEvent;
      me.preventDefault();
      this._open = true;
      menu.classList.add('open');
      const x = Math.min(me.clientX, window.innerWidth - 200);
      const y = Math.min(me.clientY, window.innerHeight - 200);
      menu.style.left = `${Math.max(8, x)}px`;
      menu.style.top = `${Math.max(8, y)}px`;
    });

    menu.querySelectorAll<HTMLButtonElement>('.item').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id ?? '';
        this.close();
        this.emit('dv-select', { id });
      });
    });
  }
}

defineElement('dv-context-menu', DvContextMenu);
