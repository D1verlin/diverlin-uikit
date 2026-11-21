import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvAnimatedList extends DvBaseElement {
  static observedAttributes = ['items', 'selected'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; width: 100%; max-width: 380px; }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        border: none;
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        font-weight: 500;
        cursor: pointer;
        text-align: left;
        opacity: 0;
        transform: translateY(8px);
        animation: dv-alist-in 260ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        animation-delay: var(--_d, 0ms);
        transition: transform var(--dv-duration-fast) var(--dv-ease);
      }
      .item:hover {
        background: var(--dv-surface-hover);
        transform: translateX(4px);
      }
      .item[aria-selected='true'] {
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
      }
      .idx {
        font-family: var(--dv-font-mono);
        font-size: 11px;
        opacity: 0.65;
      }
      @keyframes dv-alist-in {
        to { opacity: 1; transform: translateY(0); }
      }
    `;
  }

  private getItems(): string[] {
    try {
      const parsed = JSON.parse(
        this.attr('items', '["Архитектура токенов","Локальные шрифты woff2","Нативные Web Components","Безрамочные поверхности"]'),
      );
      return Array.isArray(parsed) ? parsed.map(String) : [];
    } catch {
      return [];
    }
  }

  protected render(): void {
    const items = this.getItems();
    const selected = this.attr('selected', items[0] ?? '');

    this.root.innerHTML = `
      <ul role="listbox">
        ${items
          .map(
            (text, idx) => `
          <li>
            <button
              type="button"
              class="item"
              role="option"
              data-val="${escapeHtml(text)}"
              aria-selected="${text === selected}"
              style="--_d:${idx * 55}ms"
            >
              <span>${escapeHtml(text)}</span>
              <span class="idx">0${idx + 1}</span>
            </button>
          </li>
        `,
          )
          .join('')}
      </ul>
    `;

    this.root.querySelectorAll<HTMLButtonElement>('.item').forEach((btn) => {
      btn.addEventListener('click', () => {
        const val = btn.dataset.val ?? '';
        this.root.querySelectorAll<HTMLButtonElement>('.item').forEach((b) => {
          b.setAttribute('aria-selected', String(b === btn));
        });
        this.emit('dv-select', { value: val });
      });
    });
  }
}

defineElement('dv-animated-list', DvAnimatedList);
