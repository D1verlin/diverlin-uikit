import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export class DvAccordion extends DvBaseElement {
  static observedAttributes = ['title', 'open'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; }
      .item {
        border: none;
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface);
      }
      button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--dv-space-3);
        padding: var(--dv-space-4);
        background: transparent;
        border: none;
        text-align: left;
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-body);
        font-weight: 500;
        color: var(--dv-text-primary);
        cursor: pointer;
      }
      button:focus-visible { outline: none; box-shadow: var(--dv-focus-ring); border-radius: var(--dv-radius-md); }
      .chevron {
        color: var(--dv-text-muted);
        transition: transform var(--dv-duration-fast) var(--dv-ease);
        display: inline-flex;
      }
      button[aria-expanded='true'] .chevron { transform: rotate(180deg); }
      .panel {
        display: none;
        padding: 0 var(--dv-space-4) var(--dv-space-4);
        font-size: var(--dv-text-sm);
        color: var(--dv-text-secondary);
        line-height: var(--dv-leading-sm);
      }
      .panel.open {
        display: block;
        animation: dv-accordion-in var(--dv-duration-base) var(--dv-ease);
      }
      @keyframes dv-accordion-in {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
  }

  protected render(): void {
    const title = this.attr('title');
    const open = this.boolAttr('open');

    this.root.innerHTML = `
      <div class="item">
        <button type="button" aria-expanded="${open}">
          <span>${escapeHtml(title)}</span>
          <span class="chevron" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${DV_ICONS['chevron-down']}</svg>
          </span>
        </button>
        <div class="panel ${open ? 'open' : ''}">
          <slot></slot>
        </div>
      </div>
    `;

    this.root.querySelector('button')?.addEventListener('click', () => {
      if (this.boolAttr('open')) this.removeAttribute('open');
      else this.setAttribute('open', '');
      this.emit('dv-toggle', { open: this.boolAttr('open') });
    });
  }
}

defineElement('dv-accordion', DvAccordion);
