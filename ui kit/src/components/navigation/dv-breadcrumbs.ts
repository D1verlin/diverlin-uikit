import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export interface DvBreadcrumbItem {
  label: string;
  href?: string;
}

export class DvBreadcrumbs extends DvBaseElement {
  static observedAttributes = ['items'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; }
      nav ol {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--dv-space-2);
        font-size: var(--dv-text-sm);
        color: var(--dv-text-muted);
      }
      a {
        color: var(--dv-text-secondary);
        text-decoration: none;
      }
      a:hover { color: var(--dv-text-primary); }
      .current { color: var(--dv-text-primary); font-weight: 500; }
      .sep { display: inline-flex; color: var(--dv-text-muted); }
    `;
  }

  protected render(): void {
    let items: DvBreadcrumbItem[] = [];
    try {
      const parsed = JSON.parse(this.attr('items', '[]'));
      if (Array.isArray(parsed)) items = parsed;
    } catch {
      items = [];
    }

    this.root.innerHTML = `
      <nav aria-label="Breadcrumb">
        <ol>
          ${items
            .map((item, idx) => {
              const isLast = idx === items.length - 1;
              const sep =
                idx > 0
                  ? `<li class="sep" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${DV_ICONS['chevron-right']}</svg></li>`
                  : '';
              const content =
                isLast || !item.href
                  ? `<span class="${isLast ? 'current' : ''}" ${isLast ? 'aria-current="page"' : ''}>${escapeHtml(item.label)}</span>`
                  : `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`;
              return `${sep}<li>${content}</li>`;
            })
            .join('')}
        </ol>
      </nav>
    `;
  }
}

defineElement('dv-breadcrumbs', DvBreadcrumbs);
