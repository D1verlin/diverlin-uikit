import { DvBaseElement, defineElement } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export class DvPagination extends DvBaseElement {
  static observedAttributes = ['page', 'total'];

  protected static get componentStyles(): string {
    return `
      :host { display: inline-flex; }
      nav {
        display: inline-flex;
        align-items: center;
        gap: var(--dv-space-1);
        font-variant-numeric: tabular-nums;
      }
      button {
        min-width: 34px;
        height: 34px;
        padding: 0 8px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        color: var(--dv-text-secondary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        cursor: pointer;
      }
      button:hover:not(:disabled) {
        background: var(--dv-surface-hover);
        color: var(--dv-text-primary);
      }
      button.active {
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
        font-weight: 600;
      }
      button:disabled { opacity: 0.45; cursor: not-allowed; }
      button:focus-visible { outline: none; box-shadow: var(--dv-focus-ring); }
    `;
  }

  protected render(): void {
    const total = Math.max(1, this.numAttr('total', 1));
    const page = Math.min(total, Math.max(1, this.numAttr('page', 1)));

    const pages: number[] = [];
    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || Math.abs(i - page) <= 1) {
        pages.push(i);
      }
    }

    this.root.innerHTML = `
      <nav aria-label="Pagination">
        <button type="button" data-page="${page - 1}" ${page <= 1 ? 'disabled' : ''} aria-label="Previous page">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${DV_ICONS['chevron-left']}</svg>
        </button>
        ${pages
          .map(
            (p) =>
              `<button type="button" data-page="${p}" class="${p === page ? 'active' : ''}" aria-current="${p === page ? 'page' : 'false'}">${p}</button>`,
          )
          .join('')}
        <button type="button" data-page="${page + 1}" ${page >= total ? 'disabled' : ''} aria-label="Next page">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${DV_ICONS['chevron-right']}</svg>
        </button>
      </nav>
    `;

    this.root.querySelectorAll('button[data-page]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const next = Number(btn.getAttribute('data-page'));
        if (next >= 1 && next <= total && next !== page) {
          this.setAttribute('page', String(next));
          this.emit('dv-change', { page: next });
        }
      });
    });
  }
}

defineElement('dv-pagination', DvPagination);
