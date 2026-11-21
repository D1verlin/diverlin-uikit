import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvPopover extends DvBaseElement {
  static observedAttributes = ['open'];

  private _onDocClick = (e: MouseEvent) => {
    if (this.boolAttr('open') && !e.composedPath().includes(this)) {
      this.removeAttribute('open');
    }
  };

  private _onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this.boolAttr('open')) {
      this.removeAttribute('open');
    }
  };

  protected static get componentStyles(): string {
    return `
      :host { position: relative; display: inline-block; }
      .panel {
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        min-width: 240px;
        padding: var(--dv-space-4);
        border-radius: var(--dv-radius-md);
        border: none;
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-shadow-md);
        z-index: var(--dv-z-dropdown);
        display: none;
      }
      .panel.open {
        display: block;
        animation: dv-pop-in var(--dv-duration-fast) var(--dv-ease);
      }
      @keyframes dv-pop-in {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
  }

  protected onMount(): void {
    document.addEventListener('click', this._onDocClick);
    document.addEventListener('keydown', this._onKeyDown);
  }

  protected onUnmount(): void {
    document.removeEventListener('click', this._onDocClick);
    document.removeEventListener('keydown', this._onKeyDown);
  }

  protected render(): void {
    const open = this.boolAttr('open');
    this.root.innerHTML = `
      <div class="trigger"><slot name="trigger"></slot></div>
      <div class="panel ${open ? 'open' : ''}"><slot></slot></div>
    `;

    this.root.querySelector('.trigger')?.addEventListener('click', () => {
      if (this.boolAttr('open')) this.removeAttribute('open');
      else this.setAttribute('open', '');
    });
  }
}

defineElement('dv-popover', DvPopover);
