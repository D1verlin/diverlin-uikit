import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvAspectRatio extends DvBaseElement {
  static observedAttributes = ['ratio', 'radius', 'fit'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; width: 100%; }
      .frame {
        position: relative;
        width: 100%;
        overflow: hidden;
        background: var(--dv-surface);
      }
      .rad-none { border-radius: 0; }
      .rad-sm { border-radius: var(--dv-radius-sm); }
      .rad-md { border-radius: var(--dv-radius-md); }
      .rad-lg { border-radius: var(--dv-radius-lg); }
      ::slotted(*) {
        width: 100%;
        height: 100%;
        display: block;
      }
    `;
  }

  protected render(): void {
    const ratio = this.attr('ratio', '16/9');
    const radius = this.attr('radius', 'md');
    const fit = this.attr('fit', 'cover');

    this.root.innerHTML = `
      <div class="frame rad-${radius}" style="aspect-ratio:${ratio};--_fit:${fit}">
        <slot></slot>
      </div>
    `;
  }
}

defineElement('dv-aspect-ratio', DvAspectRatio);
