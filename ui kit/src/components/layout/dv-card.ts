import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvCard extends DvBaseElement {
  static observedAttributes = ['padding', 'variant', 'interactive', 'horizontal'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; }
      :host([variant='surface']),
      :host([variant='outline']) {
        --dv-surface: var(--dv-surface-elevated);
      }
      .card {
        display: flex;
        flex-direction: column;
        border-radius: var(--dv-radius-lg);
        border: none;
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        overflow: hidden;
        transition: transform var(--dv-duration-base) var(--dv-ease), opacity var(--dv-duration-fast) var(--dv-ease);
      }
      .card.horizontal {
        flex-direction: row;
        align-items: stretch;
      }

      /* Surface card: soft tonal container; inner controls step up to elevated */
      .variant-surface {
        background: var(--dv-card-bg);
      }

      /* Elevated card: raised above page canvas with soft shadow; inner controls use recessed surface */
      .variant-elevated {
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-shadow-md);
      }

      /* Recessed / subtle card */
      .variant-outline {
        background: var(--dv-surface-hover);
        --dv-surface: var(--dv-surface-elevated);
      }

      .interactive { cursor: pointer; }
      .interactive:hover {
        transform: translateY(-2px);
      }

      .media:empty, .header:empty, .footer:empty { display: none; }
      .header { padding-bottom: var(--dv-space-3); margin-bottom: var(--dv-space-3); }
      .footer { padding-top: var(--dv-space-3); margin-top: var(--dv-space-3); }

      .pad-none .content { padding: 0; }
      .pad-sm .content { padding: var(--dv-space-3); }
      .pad-md .content { padding: var(--dv-space-5); }
      .pad-lg .content { padding: var(--dv-space-6); }
      .content { flex: 1; min-width: 0; display: flex; flex-direction: column; }
    `;
  }

  protected render(): void {
    const padding = this.attr('padding', 'md');
    const variant = this.attr('variant', 'elevated');
    const interactive = this.boolAttr('interactive');
    const horizontal = this.boolAttr('horizontal');

    this.root.innerHTML = `
      <div class="card variant-${variant} pad-${padding} ${interactive ? 'interactive' : ''} ${horizontal ? 'horizontal' : ''}">
        <div class="media"><slot name="media"></slot></div>
        <div class="content">
          <div class="header"><slot name="header"></slot></div>
          <slot></slot>
          <div class="footer"><slot name="footer"></slot></div>
        </div>
      </div>
    `;
  }
}

defineElement('dv-card', DvCard);
