import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvSpotlightCard extends DvBaseElement {
  static observedAttributes = ['size', 'padding'];

  protected static get componentStyles(): string {
    return `
      :host {
        display: block;
        --dv-surface: var(--dv-surface-elevated);
      }
      .card {
        position: relative;
        overflow: hidden;
        border-radius: var(--dv-radius-lg);
        background: var(--dv-card-bg);
        color: var(--dv-text-primary);
      }
      .pad-sm { padding: var(--dv-space-3); }
      .pad-md { padding: var(--dv-space-5); }
      .pad-lg { padding: var(--dv-space-6); }
      .spot {
        position: absolute;
        inset: 0;
        pointer-events: none;
        opacity: 0;
        transition: opacity var(--dv-duration-base) var(--dv-ease);
        background: radial-gradient(
          var(--_size, 240px) circle at var(--_x, 50%) var(--_y, 50%),
          var(--dv-surface-active),
          transparent 75%
        );
      }
      .card:hover .spot {
        opacity: 0.55;
      }
      .body {
        position: relative;
        z-index: 1;
      }
    `;
  }

  protected render(): void {
    const size = this.numAttr('size', 240);
    const padding = this.attr('padding', 'lg');

    this.root.innerHTML = `
      <div class="card pad-${padding}" style="--_size:${size}px">
        <div class="spot" aria-hidden="true"></div>
        <div class="body"><slot></slot></div>
      </div>
    `;

    const card = this.root.querySelector<HTMLElement>('.card')!;
    card.addEventListener('pointermove', (e: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--_x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--_y', `${e.clientY - rect.top}px`);
    });
  }
}

defineElement('dv-spotlight-card', DvSpotlightCard);
