import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export interface DvTreeNode {
  id: string;
  label: string;
  icon?: string;
  children?: DvTreeNode[];
}

export class DvTree extends DvBaseElement {
  static observedAttributes = ['items', 'selected', 'expand-all', 'show-icons'];

  private _expanded = new Set<string>();
  private _didInitExpand = false;

  protected static get componentStyles(): string {
    return `
      :host { display: block; width: 100%; }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .children {
        padding-left: 18px;
        margin-top: 2px;
        animation: dv-tree-in var(--dv-duration-fast) var(--dv-ease);
      }
      @keyframes dv-tree-in {
        from { opacity: 0; transform: translateY(-3px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .node-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        padding: 6px 10px;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: transparent;
        color: var(--dv-text-secondary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        cursor: pointer;
        text-align: left;
        transition: opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .node-btn:hover {
        background: var(--dv-surface);
        color: var(--dv-text-primary);
      }
      .node-btn.selected {
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        font-weight: 600;
      }
      .node-btn:focus-visible {
        outline: none;
        box-shadow: var(--dv-focus-ring);
      }
      .chev {
        width: 14px;
        height: 14px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--dv-text-muted);
        flex-shrink: 0;
        transition: transform var(--dv-duration-fast) var(--dv-ease);
      }
      .chev.open { transform: rotate(90deg); }
      .chev-spacer { width: 14px; flex-shrink: 0; }
      .icon { display: inline-flex; color: var(--dv-text-muted); flex-shrink: 0; }
    `;
  }

  private getItems(): DvTreeNode[] {
    try {
      const parsed = JSON.parse(this.attr('items', '[]'));
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  private collectAllIds(nodes: DvTreeNode[], out: Set<string>): void {
    for (const n of nodes) {
      if (n.children?.length) {
        out.add(n.id);
        this.collectAllIds(n.children, out);
      }
    }
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === 'expand-all') {
      this._didInitExpand = false;
    }
    if (name === 'selected' && this.root.querySelector('ul')) {
      const sel = newValue ?? '';
      this.root.querySelectorAll<HTMLButtonElement>('.node-btn').forEach((btn) => {
        btn.classList.toggle('selected', btn.dataset.id === sel);
      });
      return;
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  private renderNodes(nodes: DvTreeNode[], selected: string, showIcons: boolean): string {
    return `
      <ul>
        ${nodes
          .map((n) => {
            const hasChildren = Boolean(n.children && n.children.length > 0);
            const isOpen = this._expanded.has(n.id);
            const iconSvg = showIcons && n.icon && DV_ICONS[n.icon] ? DV_ICONS[n.icon] : null;
            return `
            <li>
              <button
                type="button"
                class="node-btn ${n.id === selected ? 'selected' : ''}"
                data-id="${escapeHtml(n.id)}"
                data-has-children="${hasChildren}"
                aria-expanded="${hasChildren ? String(isOpen) : 'false'}"
              >
                ${
                  hasChildren
                    ? `<span class="chev ${isOpen ? 'open' : ''}" aria-hidden="true">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${DV_ICONS['chevron-right']}</svg>
                      </span>`
                    : `<span class="chev-spacer"></span>`
                }
                ${
                  iconSvg
                    ? `<span class="icon" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">${iconSvg}</svg></span>`
                    : ''
                }
                <span>${escapeHtml(n.label)}</span>
              </button>
              ${hasChildren && isOpen ? `<div class="children">${this.renderNodes(n.children!, selected, showIcons)}</div>` : ''}
            </li>
          `;
          })
          .join('')}
      </ul>
    `;
  }

  protected render(): void {
    const items = this.getItems();
    const selected = this.attr('selected', '');
    const showIcons = this.hasAttribute('show-icons') ? this.boolAttr('show-icons') : true;

    if (!this._didInitExpand) {
      this._didInitExpand = true;
      this._expanded.clear();
      if (this.boolAttr('expand-all')) {
        this.collectAllIds(items, this._expanded);
      } else if (items[0]?.id) {
        this._expanded.add(items[0].id);
      }
    }

    this.root.innerHTML = this.renderNodes(items, selected, showIcons);

    this.root.querySelectorAll<HTMLButtonElement>('.node-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id ?? '';
        const hasChildren = btn.dataset.hasChildren === 'true';
        if (hasChildren) {
          if (this._expanded.has(id)) this._expanded.delete(id);
          else this._expanded.add(id);
          this.setAttribute('selected', id);
          this.render();
        } else {
          this.setAttribute('selected', id);
        }
        this.emit('dv-select', { id });
      });
    });
  }
}

defineElement('dv-tree', DvTree);
