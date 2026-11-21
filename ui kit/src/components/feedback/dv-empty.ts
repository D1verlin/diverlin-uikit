import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export class DvEmpty extends DvBaseElement {
  static observedAttributes = ['icon', 'title', 'description'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; }
      .empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: var(--dv-space-3);
        padding: var(--dv-space-8) var(--dv-space-4);
      }
      .icon {
        color: var(--dv-text-muted);
        display: inline-flex;
      }
      .title {
        font-size: var(--dv-text-h4);
        font-weight: 600;
        color: var(--dv-text-primary);
      }
      .desc {
        max-width: 360px;
        font-size: var(--dv-text-sm);
        color: var(--dv-text-secondary);
        line-height: var(--dv-leading-sm);
      }
      .actions:empty { display: none; }
    `;
  }

  protected render(): void {
    const icon = this.attr('icon', 'layers');
    const title = this.attr('title', 'Нет данных');
    const description = this.attr('description');
    const svgInner = DV_ICONS[icon] ?? DV_ICONS.layers;

    this.root.innerHTML = `
      <div class="empty">
        <span class="icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${svgInner}</svg>
        </span>
        <div class="title">${escapeHtml(title)}</div>
        ${description ? `<div class="desc">${escapeHtml(description)}</div>` : ''}
        <div class="actions"><slot></slot></div>
      </div>
    `;
  }
}

defineElement('dv-empty', DvEmpty);
