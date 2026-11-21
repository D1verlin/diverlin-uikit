import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvKbd extends DvBaseElement {
  protected static get componentStyles(): string {
    return `
      :host { display: inline-flex; }
      kbd {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 22px;
        height: 22px;
        padding: 0 6px;
        font-family: var(--dv-font-mono);
        font-size: 11px;
        font-weight: 500;
        line-height: 1;
        color: var(--dv-text-secondary);
        background: var(--dv-surface);
        border: none;
        border-radius: var(--dv-radius-xs);
      }
    `;
  }

  protected render(): void {
    this.root.innerHTML = `<kbd><slot></slot></kbd>`;
  }
}

defineElement('dv-kbd', DvKbd);
