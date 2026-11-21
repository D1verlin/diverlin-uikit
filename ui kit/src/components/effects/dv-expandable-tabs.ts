import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export interface DvExpandableTabItem {
  id: string;
  label: string;
  icon: string;
}

export class DvExpandableTabs extends DvBaseElement {
  static observedAttributes = ['items', 'value'];

  protected static get componentStyles(): string {
    return `
      :host { display: inline-flex; }
      .bar {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 5px;
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface);
      }
      .tab {
        display: inline-flex;
        align-items: center;
        gap: 0;
        height: 36px;
        padding: 0 10px;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: transparent;
        color: var(--dv-text-secondary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        font-weight: 500;
        cursor: pointer;
        overflow: hidden;
        transition:
          gap 200ms cubic-bezier(0.22, 1, 0.36, 1),
          padding 200ms cubic-bezier(0.22, 1, 0.36, 1),
          opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .tab:hover { color: var(--dv-text-primary); background: var(--dv-surface-hover); }
      .tab[aria-selected='true'] {
        gap: 8px;
        padding: 0 14px;
        background: var(--dv-surface-elevated);
        color: var(--dv-text-primary);
        box-shadow: var(--dv-shadow-sm);
      }
      .label {
        max-width: 0;
        opacity: 0;
        white-space: nowrap;
        overflow: hidden;
        transition:
          max-width 220ms cubic-bezier(0.22, 1, 0.36, 1),
          opacity 180ms var(--dv-ease);
      }
      .tab[aria-selected='true'] .label {
        max-width: 140px;
        opacity: 1;
      }
    `;
  }

  private getItems(): DvExpandableTabItem[] {
    try {
      const parsed = JSON.parse(
        this.attr(
          'items',
          '[{"id":"home","label":"Обзор","icon":"home"},{"id":"layers","label":"Компоненты","icon":"layers"},{"id":"code","label":"Сниппеты","icon":"code"},{"id":"settings","label":"Настройки","icon":"settings"}]',
        ),
      );
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === 'value' && this.root.querySelector('.bar')) {
      const active = newValue ?? '';
      this.root.querySelectorAll<HTMLButtonElement>('.tab').forEach((btn) => {
        btn.setAttribute('aria-selected', String(btn.dataset.id === active));
      });
      return;
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  protected render(): void {
    const items = this.getItems();
    const active = this.attr('value', items[0]?.id ?? '');

    this.root.innerHTML = `
      <div class="bar" role="tablist">
        ${items
          .map((item) => {
            const svg = DV_ICONS[item.icon] ?? DV_ICONS.layers;
            return `
            <button
              type="button"
              class="tab"
              role="tab"
              data-id="${escapeHtml(item.id)}"
              aria-selected="${item.id === active}"
              aria-label="${escapeHtml(item.label)}"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${svg}</svg>
              <span class="label">${escapeHtml(item.label)}</span>
            </button>
          `;
          })
          .join('')}
      </div>
    `;

    this.root.querySelectorAll<HTMLButtonElement>('.tab').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id ?? '';
        this.setAttribute('value', id);
        this.emit('dv-change', { value: id });
      });
    });
  }
}

defineElement('dv-expandable-tabs', DvExpandableTabs);
