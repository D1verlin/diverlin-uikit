import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvButtonGroup extends DvBaseElement {
  static observedAttributes = ['gap'];

  protected static get componentStyles(): string {
    return `
      :host {
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--dv-space-2);
      }
    `;
  }

  protected render(): void {
    const gap = this.attr('gap');
    if (gap) {
      this.style.gap = gap;
    }
    this.root.innerHTML = `<slot></slot>`;
  }
}

defineElement('dv-button-group', DvButtonGroup);
