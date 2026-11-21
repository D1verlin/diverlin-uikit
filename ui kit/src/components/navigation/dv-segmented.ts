import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export interface DvSegmentedOption {
  id: string;
  label: string;
}

export class DvSegmented extends DvBaseElement {
  static observedAttributes = ['value', 'items'];

  protected static get componentStyles(): string {
    return `
      :host { display: inline-flex; }
      .track {
        position: relative;
        display: inline-flex;
        padding: 3px;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        border: none;
      }
      .pill {
        position: absolute;
        top: 3px;
        bottom: 3px;
        left: 0;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-shadow-sm);
        transition: transform var(--dv-duration-base) cubic-bezier(0.22, 1, 0.36, 1), width var(--dv-duration-base) cubic-bezier(0.22, 1, 0.36, 1);
        pointer-events: none;
      }
      button {
        position: relative;
        z-index: 1;
        border: none;
        background: transparent;
        padding: 6px 14px;
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        font-weight: 500;
        color: var(--dv-text-secondary);
        cursor: pointer;
        border-radius: var(--dv-radius-xs);
      }
      button[aria-pressed='true'] {
        color: var(--dv-text-primary);
      }
      button:focus-visible { outline: none; box-shadow: var(--dv-focus-ring); }
    `;
  }

  private getItems(): DvSegmentedOption[] {
    try {
      const parsed = JSON.parse(this.attr('items', '[]'));
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  private updatePill(): void {
    const activeBtn = this.root.querySelector<HTMLButtonElement>('button[aria-pressed="true"]');
    const pill = this.root.querySelector<HTMLElement>('.pill');
    if (activeBtn && pill) {
      pill.style.width = `${activeBtn.offsetWidth}px`;
      pill.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
    }
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === 'value' && this.root.querySelector('.track')) {
      const active = newValue ?? '';
      this.root.querySelectorAll('button').forEach((btn) => {
        btn.setAttribute('aria-pressed', String(btn.getAttribute('data-id') === active));
      });
      this.updatePill();
      return;
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  protected render(): void {
    const items = this.getItems();
    const active = this.attr('value', items[0]?.id ?? '');

    this.root.innerHTML = `
      <div class="track" role="group">
        <div class="pill" aria-hidden="true"></div>
        ${items
          .map(
            (i) =>
              `<button type="button" data-id="${escapeHtml(i.id)}" aria-pressed="${i.id === active}">${escapeHtml(i.label)}</button>`,
          )
          .join('')}
      </div>
    `;

    requestAnimationFrame(() => this.updatePill());

    this.root.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id') ?? '';
        this.setAttribute('value', id);
        this.emit('dv-change', { value: id });
      });
    });
  }
}

defineElement('dv-segmented', DvSegmented);
