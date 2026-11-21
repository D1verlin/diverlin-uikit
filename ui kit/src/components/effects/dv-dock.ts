import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export interface DvDockItem {
  id: string;
  label: string;
  icon: string;
}

export class DvDock extends DvBaseElement {
  static observedAttributes = ['items', 'base-size', 'max-size'];

  protected static get componentStyles(): string {
    return `
      :host { display: inline-flex; }
      .dock {
        display: inline-flex;
        align-items: flex-end;
        gap: 8px;
        height: 62px;
        padding: 8px 12px;
        border-radius: var(--dv-radius-lg);
        background: var(--dv-surface);
      }
      .item {
        position: relative;
        width: var(--_sz, 42px);
        height: var(--_sz, 42px);
        border: none;
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface-elevated);
        color: var(--dv-text-primary);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: var(--dv-shadow-sm);
        transition: width 110ms cubic-bezier(0.22, 1, 0.36, 1), height 110ms cubic-bezier(0.22, 1, 0.36, 1), transform 110ms var(--dv-ease);
      }
      .item:active { transform: scale(0.94); }
      .tip {
        position: absolute;
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%) translateY(4px);
        padding: 4px 8px;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
        font-family: var(--dv-font-sans);
        font-size: 11px;
        font-weight: 500;
        white-space: nowrap;
        pointer-events: none;
        opacity: 0;
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) var(--dv-ease);
      }
      .item:hover .tip {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
    `;
  }

  private getItems(): DvDockItem[] {
    try {
      const parsed = JSON.parse(
        this.attr(
          'items',
          '[{"id":"home","label":"Главная","icon":"home"},{"id":"search","label":"Поиск","icon":"search"},{"id":"layers","label":"Слои","icon":"layers"},{"id":"code","label":"Код","icon":"code"},{"id":"settings","label":"Настройки","icon":"settings"}]',
        ),
      );
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  protected render(): void {
    const items = this.getItems();
    const baseSize = this.numAttr('base-size', 42);
    const maxSize = this.numAttr('max-size', 58);

    this.root.innerHTML = `
      <div class="dock" role="toolbar" aria-label="Dock">
        ${items
          .map((item) => {
            const svg = DV_ICONS[item.icon] ?? DV_ICONS.layers;
            return `
            <button type="button" class="item" data-id="${escapeHtml(item.id)}" style="--_sz:${baseSize}px" aria-label="${escapeHtml(item.label)}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${svg}</svg>
              <span class="tip" role="tooltip">${escapeHtml(item.label)}</span>
            </button>
          `;
          })
          .join('')}
      </div>
    `;

    const dock = this.root.querySelector<HTMLElement>('.dock')!;
    const btns = Array.from(this.root.querySelectorAll<HTMLButtonElement>('.item'));

    dock.addEventListener('pointermove', (e: PointerEvent) => {
      btns.forEach((btn) => {
        const rect = btn.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const dist = Math.abs(e.clientX - cx);
        const factor = Math.max(0, 1 - dist / 110);
        const sz = baseSize + (maxSize - baseSize) * factor;
        btn.style.setProperty('--_sz', `${sz.toFixed(1)}px`);
      });
    });

    dock.addEventListener('pointerleave', () => {
      btns.forEach((btn) => btn.style.setProperty('--_sz', `${baseSize}px`));
    });

    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.emit('dv-select', { id: btn.dataset.id ?? '' });
      });
    });
  }
}

defineElement('dv-dock', DvDock);
