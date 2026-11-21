import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export class DvCopyButton extends DvBaseElement {
  static observedAttributes = ['value', 'label', 'size', 'variant'];

  private _copied = false;
  private _timer: number | null = null;

  protected static get componentStyles(): string {
    return `
      :host { display: inline-flex; }
      button {
        display: inline-flex;
        align-items: center;
        gap: var(--dv-space-2);
        border: none;
        border-radius: var(--dv-radius-sm);
        background: var(--dv-surface);
        color: var(--dv-text-primary);
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        font-weight: 500;
        cursor: pointer;
        transition: transform var(--dv-duration-fast) var(--dv-ease), opacity var(--dv-duration-fast) var(--dv-ease);
      }
      button:hover { background: var(--dv-surface-hover); }
      button:active { transform: scale(0.95); }
      button:focus-visible { outline: none; box-shadow: var(--dv-focus-ring); }
      .variant-ghost { background: transparent; color: var(--dv-text-secondary); }
      .variant-ghost:hover { background: var(--dv-surface); color: var(--dv-text-primary); }
      .size-sm { height: 32px; padding: 0 10px; }
      .size-md { height: 38px; padding: 0 14px; }
      .size-lg { height: 44px; padding: 0 16px; }
      .copied-icon { color: var(--dv-success); }
    `;
  }

  protected onUnmount(): void {
    if (this._timer) window.clearTimeout(this._timer);
  }

  protected render(): void {
    const label = this.attr('label', '');
    const size = this.attr('size', 'md');
    const variant = this.attr('variant', 'secondary');
    const iconSvg = this._copied ? DV_ICONS.check : DV_ICONS.copy;

    this.root.innerHTML = `
      <button type="button" class="size-${size} variant-${variant}" aria-label="${escapeHtml(label || 'Копировать')}">
        <svg class="${this._copied ? 'copied-icon' : ''}" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconSvg}</svg>
        ${label ? `<span>${escapeHtml(this._copied ? 'Скопировано' : label)}</span>` : ''}
      </button>
    `;

    this.root.querySelector('button')?.addEventListener('click', async () => {
      const val = this.attr('value', '');
      try {
        await navigator.clipboard?.writeText(val);
      } catch {
        // ignore clipboard error in restricted environments
      }
      this._copied = true;
      this.render();
      this.emit('dv-copy', { value: val });
      if (this._timer) window.clearTimeout(this._timer);
      this._timer = window.setTimeout(() => {
        this._copied = false;
        this.render();
      }, 1500);
    });
  }
}

defineElement('dv-copy-button', DvCopyButton);
