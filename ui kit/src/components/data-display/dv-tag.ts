import { DvBaseElement, defineElement } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export class DvTag extends DvBaseElement {
  static observedAttributes = ['selected', 'removable', 'disabled'];

  protected static get componentStyles(): string {
    return `
      :host { display: inline-flex; }
      .tag {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        height: 28px;
        padding: 0 10px;
        border-radius: var(--dv-radius-sm);
        border: none;
        background: var(--dv-surface);
        color: var(--dv-text-secondary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-xs);
        font-weight: 500;
        cursor: pointer;
        user-select: none;
        transition: opacity var(--dv-duration-fast) var(--dv-ease), transform var(--dv-duration-fast) var(--dv-ease);
      }
      .tag:hover:not(.disabled) { background: var(--dv-surface-hover); color: var(--dv-text-primary); }
      .tag.selected {
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
      }
      .tag.disabled { opacity: 0.45; cursor: not-allowed; }
      .remove {
        display: inline-flex;
        padding: 2px;
        margin-right: -4px;
        border: none;
        background: transparent;
        color: currentColor;
        opacity: 0.7;
        cursor: pointer;
        border-radius: 3px;
      }
      .remove:hover { opacity: 1; }
    `;
  }

  protected render(): void {
    const selected = this.boolAttr('selected');
    const removable = this.boolAttr('removable');
    const disabled = this.boolAttr('disabled');

    this.root.innerHTML = `
      <span class="tag ${selected ? 'selected' : ''} ${disabled ? 'disabled' : ''}">
        <slot></slot>
        ${
          removable
            ? `<button type="button" class="remove" aria-label="Удалить тег" ${disabled ? 'disabled' : ''}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${DV_ICONS.x}</svg>
              </button>`
            : ''
        }
      </span>
    `;

    this.root.querySelector('.tag')?.addEventListener('click', (e) => {
      if (disabled) return;
      if ((e.target as HTMLElement).closest('.remove')) return;
      const next = !this.boolAttr('selected');
      if (next) this.setAttribute('selected', '');
      else this.removeAttribute('selected');
      this.emit('dv-change', { selected: next });
    });

    this.root.querySelector('.remove')?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (disabled) return;
      this.emit('dv-remove');
      this.remove();
    });
  }
}

defineElement('dv-tag', DvTag);
