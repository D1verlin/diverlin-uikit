import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export interface DvTimelineItem {
  title: string;
  time?: string;
  description?: string;
  icon?: string;
}

export class DvTimeline extends DvBaseElement {
  static observedAttributes = ['items', 'variant', 'dense'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; width: 100%; }
      ol {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
      }
      li {
        position: relative;
        display: grid;
        grid-template-columns: 32px 1fr;
        gap: var(--dv-space-3);
        padding-bottom: var(--dv-space-6);
      }
      .dense li {
        padding-bottom: var(--dv-space-4);
      }
      li:last-child {
        padding-bottom: 0;
      }
      .rail-col {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .marker {
        position: relative;
        z-index: 1;
        width: 32px;
        height: 32px;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: var(--dv-text-xs);
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        flex-shrink: 0;
      }
      .variant-minimal .marker {
        width: 24px;
        height: 24px;
        margin-top: 2px;
        border-radius: var(--dv-radius-xs);
        background: var(--dv-surface-active);
      }
      .line {
        position: absolute;
        top: 38px;
        bottom: calc(var(--dv-space-6) * -1 + 6px);
        left: 50%;
        width: 2px;
        transform: translateX(-50%);
        background: var(--dv-surface-active);
        border-radius: 1px;
      }
      .dense .line {
        bottom: calc(var(--dv-space-4) * -1 + 6px);
      }
      .variant-minimal .line {
        top: 30px;
      }
      li:last-child .line {
        display: none;
      }

      .content {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding-top: 4px;
      }
      .top {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        justify-content: space-between;
        gap: var(--dv-space-2);
      }
      .title {
        font-size: var(--dv-text-sm);
        font-weight: 600;
        color: var(--dv-text-primary);
      }
      .time {
        font-size: var(--dv-text-xs);
        font-variant-numeric: tabular-nums;
        color: var(--dv-text-muted);
      }
      .desc {
        font-size: var(--dv-text-sm);
        line-height: var(--dv-leading-sm);
        color: var(--dv-text-secondary);
      }
    `;
  }

  protected render(): void {
    let items: DvTimelineItem[] = [];
    try {
      const parsed = JSON.parse(this.attr('items', '[]'));
      if (Array.isArray(parsed)) items = parsed;
    } catch {
      items = [];
    }

    const variant = this.attr('variant', 'icons');
    const dense = this.boolAttr('dense');

    this.root.innerHTML = `
      <ol class="variant-${variant} ${dense ? 'dense' : ''}">
        ${items
          .map((item, idx) => {
            const svg = item.icon && DV_ICONS[item.icon] ? DV_ICONS[item.icon] : DV_ICONS['check-circle'];
            const markerInner =
              variant === 'numbered' || variant === 'minimal'
                ? String(idx + 1)
                : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${svg}</svg>`;

            return `
            <li>
              <div class="rail-col">
                <span class="marker" aria-hidden="true">${markerInner}</span>
                <span class="line" aria-hidden="true"></span>
              </div>
              <div class="content">
                <div class="top">
                  <span class="title">${escapeHtml(item.title)}</span>
                  ${item.time ? `<span class="time">${escapeHtml(item.time)}</span>` : ''}
                </div>
                ${item.description ? `<div class="desc">${escapeHtml(item.description)}</div>` : ''}
              </div>
            </li>
          `;
          })
          .join('')}
      </ol>
    `;
  }
}

defineElement('dv-timeline', DvTimeline);
