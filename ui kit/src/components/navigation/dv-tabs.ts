import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export interface DvTabItem {
  id: string;
  label: string;
  disabled?: boolean;
}

export class DvTabs extends DvBaseElement {
  static observedAttributes = ['value', 'items', 'variant'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; }
      .tablist {
        position: relative;
        display: inline-flex;
        flex-wrap: wrap;
        gap: var(--dv-space-1);
        padding: 3px;
        background: var(--dv-surface);
        border: none;
        border-radius: var(--dv-radius-sm);
      }
      .tablist.underline {
        display: flex;
        background: transparent;
        border: none;
        border-radius: 0;
        padding: 0;
        gap: var(--dv-space-4);
      }
      button {
        position: relative;
        background: transparent;
        border: none;
        padding: 6px 12px;
        border-radius: var(--dv-radius-xs);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        font-weight: 500;
        color: var(--dv-text-secondary);
        cursor: pointer;
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) var(--dv-ease);
      }
      button:hover:not(:disabled) {
        color: var(--dv-text-primary);
      }
      button:active:not(:disabled) {
        transform: scale(0.97);
      }
      button:focus-visible {
        outline: none;
        box-shadow: var(--dv-focus-ring);
      }
      button[aria-selected='true'] {
        background: var(--dv-surface-elevated);
        color: var(--dv-text-primary);
        box-shadow: var(--dv-shadow-sm);
      }
      .underline button {
        border-radius: 0;
        padding: 8px 2px;
        margin-bottom: -1px;
        border-bottom: 2px solid transparent;
      }
      .underline button[aria-selected='true'] {
        background: transparent;
        box-shadow: none;
        border-bottom-color: var(--dv-accent);
        color: var(--dv-text-primary);
      }
      button:disabled { opacity: 0.45; cursor: not-allowed; }
    `;
  }

  private getItems(): DvTabItem[] {
    const raw = this.attr('items');
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === 'value' && this.root.querySelector('.tablist')) {
      const active = newValue ?? '';
      this.root.querySelectorAll('button[role="tab"]').forEach((btn) => {
        btn.setAttribute('aria-selected', String(btn.getAttribute('data-id') === active));
      });
      return;
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  protected render(): void {
    const items = this.getItems();
    const active = this.attr('value', items[0]?.id ?? '');
    const variant = this.attr('variant', 'segmented');

    this.root.innerHTML = `
      <div class="tablist ${variant === 'underline' ? 'underline' : ''}" role="tablist">
        ${items
          .map(
            (item) => `
          <button
            type="button"
            role="tab"
            data-id="${escapeHtml(item.id)}"
            aria-selected="${item.id === active}"
            ${item.disabled ? 'disabled' : ''}
          >${escapeHtml(item.label)}</button>
        `,
          )
          .join('')}
      </div>
    `;

    this.root.querySelectorAll('button[role="tab"]').forEach((btn) => {
      btn.addEventListener('click', () => {
        if ((btn as HTMLButtonElement).disabled) return;
        const id = btn.getAttribute('data-id') ?? '';
        this.setAttribute('value', id);
        this.emit('dv-change', { value: id });
      });
    });
  }
}

defineElement('dv-tabs', DvTabs);
