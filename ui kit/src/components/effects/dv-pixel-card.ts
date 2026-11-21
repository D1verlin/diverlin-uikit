import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvPixelCard extends DvBaseElement {
  static observedAttributes = ['title', 'subtitle', 'cols'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; width: 100%; max-width: 340px; }
      .card {
        position: relative;
        overflow: hidden;
        min-height: 160px;
        padding: var(--dv-space-5);
        border-radius: var(--dv-radius-lg);
        background: var(--dv-card-bg);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 4px;
        cursor: pointer;
      }
      .grid {
        position: absolute;
        inset: 0;
        display: grid;
        grid-template-columns: repeat(var(--_cols, 10), 1fr);
        pointer-events: none;
      }
      .px {
        background: var(--dv-surface-active);
        opacity: 0;
        transition: opacity 220ms var(--dv-ease);
        transition-delay: var(--_d, 0ms);
      }
      .card:hover .px {
        opacity: 0.42;
      }
      .content {
        position: relative;
        z-index: 2;
      }
      .title {
        font-size: var(--dv-text-h4);
        font-weight: 600;
        color: var(--dv-text-primary);
      }
      .sub {
        font-size: var(--dv-text-sm);
        color: var(--dv-text-secondary);
      }
    `;
  }

  protected render(): void {
    const title = this.attr('title', 'Pixel Transition');
    const subtitle = this.attr('subtitle', 'Наведите курсор для волнового заполнения сетки');
    const cols = Math.min(16, Math.max(6, this.numAttr('cols', 10)));
    const rows = 6;
    const total = cols * rows;

    const cells = Array.from({ length: total }, (_, idx) => {
      const r = Math.floor(idx / cols);
      const c = idx % cols;
      const delay = (r + c) * 18;
      return `<span class="px" style="--_d:${delay}ms"></span>`;
    }).join('');

    this.root.innerHTML = `
      <div class="card" style="--_cols:${cols}">
        <div class="grid" aria-hidden="true">${cells}</div>
        <div class="content">
          <div class="title">${escapeHtml(title)}</div>
          ${subtitle ? `<div class="sub">${escapeHtml(subtitle)}</div>` : ''}
        </div>
      </div>
    `;
  }
}

defineElement('dv-pixel-card', DvPixelCard);
