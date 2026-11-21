import { DvBaseElement, defineElement } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export class DvIcon extends DvBaseElement {
  static observedAttributes = ['name', 'size', 'stroke-width'];

  protected static get componentStyles(): string {
    return `
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        color: currentColor;
      }
      svg {
        display: block;
      }
    `;
  }

  protected render(): void {
    const name = this.attr('name');
    const size = this.numAttr('size', 18);
    const strokeWidth = this.attr('stroke-width', '1.75');
    const inner = DV_ICONS[name];

    if (!inner) {
      this.root.innerHTML = `<slot></slot>`;
      return;
    }

    this.root.innerHTML = `
      <svg
        width="${size}"
        height="${size}"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="${strokeWidth}"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >${inner}</svg>
    `;
  }
}

defineElement('dv-icon', DvIcon);
