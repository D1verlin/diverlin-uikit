import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export interface DvNavRailItem {
  id: string;
  label: string;
  icon: string;
  align?: 'top' | 'center' | 'bottom';
}

export class DvNavRail extends DvBaseElement {
  static observedAttributes = ['items', 'value', 'expanded', 'justify'];

  protected static get componentStyles(): string {
    return `
      :host { display: inline-flex; height: 100%; }
      .rail {
        display: flex;
        flex-direction: column;
        gap: var(--dv-space-3);
        width: 56px;
        height: 100%;
        padding: var(--dv-space-3) var(--dv-space-2);
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface);
        transition: width var(--dv-duration-base) var(--dv-ease);
      }
      .rail.expanded {
        width: 204px;
        padding: var(--dv-space-3);
      }
      .section {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .section:empty { display: none; }
      .section-center {
        margin-block: auto;
      }
      .section-bottom {
        margin-top: auto;
      }
      .section-center + .section-bottom {
        margin-top: 0;
      }

      .rail.justify-center { justify-content: center; }
      .rail.justify-bottom { justify-content: flex-end; }
      .rail.justify-between { justify-content: space-between; }

      .item {
        position: relative;
        display: flex;
        align-items: center;
        gap: var(--dv-space-3);
        height: 38px;
        padding: 0 11px;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: transparent;
        color: var(--dv-text-secondary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        font-weight: 500;
        cursor: pointer;
        white-space: nowrap;
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) var(--dv-ease);
      }
      .item:hover {
        background: var(--dv-surface-hover);
        color: var(--dv-text-primary);
      }
      .item:active { transform: scale(0.96); }
      .item[aria-current='page'] {
        background: var(--dv-surface-elevated);
        color: var(--dv-text-primary);
        box-shadow: var(--dv-shadow-sm);
      }
      .item:focus-visible { outline: none; box-shadow: var(--dv-focus-ring); }
      .icon { display: inline-flex; flex-shrink: 0; }
      .label { overflow: hidden; text-overflow: ellipsis; }
      .rail:not(.expanded) .label { display: none; }

      .rail:not(.expanded) .item .tooltip {
        position: absolute;
        left: calc(100% + 10px);
        top: 50%;
        transform: translateY(-50%) translateX(-4px);
        padding: 5px 9px;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
        font-size: var(--dv-text-xs);
        pointer-events: none;
        opacity: 0;
        z-index: var(--dv-z-tooltip);
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) var(--dv-ease);
      }
      .rail:not(.expanded) .item:hover .tooltip {
        opacity: 1;
        transform: translateY(-50%) translateX(0);
      }
      .rail.expanded .tooltip { display: none; }
      .slot-wrap:empty { display: none; }
    `;
  }

  private getItems(): DvNavRailItem[] {
    try {
      const parsed = JSON.parse(this.attr('items', '[]'));
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === 'value' && this.root.querySelector('.rail')) {
      const active = newValue ?? '';
      this.root.querySelectorAll<HTMLButtonElement>('.item').forEach((btn) => {
        btn.setAttribute('aria-current', btn.dataset.id === active ? 'page' : 'false');
      });
      return;
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  private renderItems(list: DvNavRailItem[], active: string): string {
    return list
      .map((item) => {
        const svg = DV_ICONS[item.icon] ?? DV_ICONS.layers;
        return `
          <button
            type="button"
            class="item"
            data-id="${escapeHtml(item.id)}"
            aria-current="${item.id === active ? 'page' : 'false'}"
            aria-label="${escapeHtml(item.label)}"
          >
            <span class="icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${svg}</svg>
            </span>
            <span class="label">${escapeHtml(item.label)}</span>
            <span class="tooltip" role="tooltip">${escapeHtml(item.label)}</span>
          </button>
        `;
      })
      .join('');
  }

  protected render(): void {
    const items = this.getItems();
    const active = this.attr('value', items[0]?.id ?? '');
    const expanded = this.boolAttr('expanded');
    const justify = this.attr('justify', 'top');

    const hasPerItemAlign = items.some((i) => i.align);
    const topItems = hasPerItemAlign ? items.filter((i) => !i.align || i.align === 'top') : items;
    const centerItems = hasPerItemAlign ? items.filter((i) => i.align === 'center') : [];
    const bottomItems = hasPerItemAlign ? items.filter((i) => i.align === 'bottom') : [];

    this.root.innerHTML = `
      <nav class="rail ${expanded ? 'expanded' : ''} ${!hasPerItemAlign ? `justify-${justify}` : ''}" aria-label="Navigation rail">
        <div class="section section-top">
          ${this.renderItems(topItems, active)}
        </div>
        ${
          centerItems.length
            ? `<div class="section section-center">${this.renderItems(centerItems, active)}</div>`
            : ''
        }
        ${
          bottomItems.length
            ? `<div class="section section-bottom">${this.renderItems(bottomItems, active)}</div>`
            : ''
        }
        <slot name="footer"></slot>
      </nav>
    `;

    this.root.querySelectorAll<HTMLButtonElement>('.item').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id ?? '';
        this.setAttribute('value', id);
        this.emit('dv-change', { value: id });
      });
    });
  }
}

defineElement('dv-nav-rail', DvNavRail);
