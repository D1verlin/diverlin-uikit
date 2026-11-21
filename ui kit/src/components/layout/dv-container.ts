import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvContainer extends DvBaseElement {
  static observedAttributes = ['size', 'padding'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; width: 100%; }
      .container {
        width: 100%;
        margin-inline: auto;
      }
      .size-sm { max-width: var(--dv-container-sm); }
      .size-md { max-width: var(--dv-container-md); }
      .size-lg { max-width: var(--dv-container-lg); }
      .size-xl { max-width: var(--dv-container-xl); }

      .pad-none { padding-inline: 0; }
      .pad-sm { padding-inline: var(--dv-space-3); }
      .pad-md { padding-inline: var(--dv-space-4); }
      .pad-lg { padding-inline: var(--dv-space-6); }
      @media (min-width: 768px) {
        .pad-md { padding-inline: var(--dv-space-6); }
        .pad-lg { padding-inline: var(--dv-space-8); }
      }
    `;
  }

  protected render(): void {
    const size = this.attr('size', 'lg');
    const padding = this.attr('padding', 'md');
    this.root.innerHTML = `<div class="container size-${size} pad-${padding}"><slot></slot></div>`;
  }
}

defineElement('dv-container', DvContainer);
