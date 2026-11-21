import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvDropdown extends DvBaseElement {
  static observedAttributes = ['open', 'align'];

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
      .menu {
        position: absolute;
        top: calc(100% + 6px);
        min-width: 190px;
        z-index: var(--dv-z-dropdown);
        background: var(--dv-surface-elevated);
        border: none;
        border-radius: var(--dv-radius-md);
        box-shadow: var(--dv-shadow-md);
        padding: var(--dv-space-1);
        display: none;
        flex-direction: column;
        gap: 2px;
      }
      .menu.open {
        display: flex;
        animation: dv-dropdown-in var(--dv-duration-fast) var(--dv-ease);
      }
      @keyframes dv-dropdown-in {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .align-left { left: 0; }
      .align-right { right: 0; }
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
    const align = this.attr('align', 'left');

    this.root.innerHTML = `
      <div class="trigger"><slot name="trigger"></slot></div>
      <div class="menu align-${align} ${open ? 'open' : ''}" role="menu">
        <slot></slot>
      </div>
    `;

    this.root.querySelector('.trigger')?.addEventListener('click', () => {
      if (this.boolAttr('open')) this.removeAttribute('open');
      else this.setAttribute('open', '');
    });
  }
}

defineElement('dv-dropdown', DvDropdown);
