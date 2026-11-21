import { DvBaseElement, defineElement } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';
import { getTheme, setTheme } from '../../core/theme';

export class DvThemeToggle extends DvBaseElement {
  static observedAttributes = ['size', 'show-label'];

  private _onThemeChange = () => {
    this.render();
  };

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
      .size-sm { height: 32px; padding: 0 9px; }
      .size-md { height: 38px; padding: 0 12px; }
      .size-lg { height: 44px; padding: 0 14px; }
    `;
  }

  protected onMount(): void {
    document.documentElement.addEventListener('dv-theme-change', this._onThemeChange);
  }

  protected onUnmount(): void {
    document.documentElement.removeEventListener('dv-theme-change', this._onThemeChange);
  }

  protected render(): void {
    const theme = getTheme();
    const size = this.attr('size', 'md');
    const showLabel = this.boolAttr('show-label');
    const isDark = theme === 'dark';
    const icon = isDark ? DV_ICONS.sun : DV_ICONS.moon;
    const label = isDark ? 'Светлая тема' : 'Тёмная тема';

    this.root.innerHTML = `
      <button type="button" class="size-${size}" aria-label="${label}" title="${label}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icon}</svg>
        ${showLabel ? `<span>${isDark ? 'Светлая' : 'Тёмная'}</span>` : ''}
      </button>
    `;

    this.root.querySelector('button')?.addEventListener('click', () => {
      const next = getTheme() === 'dark' ? 'light' : 'dark';
      setTheme(next);
      this.emit('dv-change', { theme: next });
    });
  }
}

defineElement('dv-theme-toggle', DvThemeToggle);
