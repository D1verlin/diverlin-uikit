import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export interface DvStackCardItem {
  title: string;
  subtitle?: string;
  meta?: string;
}

export class DvCardStack extends DvBaseElement {
  static observedAttributes = ['items', 'fan-on-hover'];

  private _order: number[] = [];

  protected static get componentStyles(): string {
    return `
      :host { display: block; width: 100%; max-width: 360px; }
      .deck {
        position: relative;
        height: 170px;
        width: 100%;
        cursor: pointer;
        user-select: none;
      }
      .card {
        position: absolute;
        inset: 0;
        height: 132px;
        padding: var(--dv-space-5);
        border-radius: var(--dv-radius-lg);
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-shadow-md);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition:
          transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
          opacity 260ms var(--dv-ease);
      }
      .top-row {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: var(--dv-space-2);
      }
      .title {
        font-size: var(--dv-text-h4);
        font-weight: 600;
        color: var(--dv-text-primary);
      }
      .meta {
        font-size: var(--dv-text-xs);
        font-variant-numeric: tabular-nums;
        color: var(--dv-text-muted);
      }
      .sub {
        font-size: var(--dv-text-sm);
        color: var(--dv-text-secondary);
      }
      .deck.fan:hover .card[data-pos='1'] {
        transform: translateY(22px) scale(0.96) rotate(-1.5deg) !important;
      }
      .deck.fan:hover .card[data-pos='2'] {
        transform: translateY(44px) scale(0.92) rotate(1.5deg) !important;
      }
    `;
  }

  private getItems(): DvStackCardItem[] {
    try {
      const parsed = JSON.parse(
        this.attr(
          'items',
          '[{"title":"Релиз v2.4","subtitle":"Нажмите на стопку для перелистывания","meta":"01 / 03"},{"title":"Токены поверхности","subtitle":"Безрамочный дизайн на полутонах","meta":"02 / 03"},{"title":"Локальные шрифты","subtitle":"Onest, Dela Gothic One и Montserrat","meta":"03 / 03"}]',
        ),
      );
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  private syncPositions(): void {
    const cards = this.root.querySelectorAll<HTMLElement>('.card');
    cards.forEach((c, domIdx) => {
      const pos = this._order.indexOf(domIdx);
      c.dataset.pos = String(pos);
      c.style.zIndex = String(cards.length - pos);
      c.style.transform = `translateY(${pos * 12}px) scale(${1 - pos * 0.045})`;
      c.style.opacity = String(Math.max(0.4, 1 - pos * 0.2));
    });
  }

  protected render(): void {
    const items = this.getItems();
    const fan = this.hasAttribute('fan-on-hover') ? this.boolAttr('fan-on-hover') : true;
    this._order = items.map((_, i) => i);

    this.root.innerHTML = `
      <div class="deck ${fan ? 'fan' : ''}" role="button" tabindex="0" aria-label="Стопка карточек, нажмите для смены">
        ${items
          .map(
            (item) => `
          <div class="card">
            <div class="top-row">
              <span class="title">${escapeHtml(item.title)}</span>
              ${item.meta ? `<span class="meta">${escapeHtml(item.meta)}</span>` : ''}
            </div>
            ${item.subtitle ? `<div class="sub">${escapeHtml(item.subtitle)}</div>` : ''}
          </div>
        `,
          )
          .join('')}
      </div>
    `;

    this.syncPositions();

    const deck = this.root.querySelector<HTMLElement>('.deck')!;
    const cycle = () => {
      if (this._order.length <= 1) return;
      const first = this._order.shift()!;
      this._order.push(first);
      this.syncPositions();
      this.emit('dv-change', { activeIndex: this._order[0] });
    };

    deck.addEventListener('click', cycle);
    deck.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        cycle();
      }
    });
  }
}

defineElement('dv-card-stack', DvCardStack);
