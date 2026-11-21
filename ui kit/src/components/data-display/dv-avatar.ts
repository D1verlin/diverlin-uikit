import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvAvatar extends DvBaseElement {
  static observedAttributes = ['src', 'alt', 'name', 'size'];

  protected static get componentStyles(): string {
    return `
      :host { display: inline-flex; flex-shrink: 0; }
      .avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface);
        border: none;
        color: var(--dv-text-primary);
        font-family: var(--dv-font-sans);
        font-weight: 600;
        user-select: none;
      }
      .size-sm { width: 28px; height: 28px; font-size: 11px; border-radius: var(--dv-radius-xs); }
      .size-md { width: 36px; height: 36px; font-size: 13px; border-radius: var(--dv-radius-sm); }
      .size-lg { width: 44px; height: 44px; font-size: 15px; border-radius: var(--dv-radius-md); }
      .size-xl { width: 56px; height: 56px; font-size: 18px; border-radius: var(--dv-radius-md); }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    `;
  }

  private getInitials(name: string): string {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return '?';
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }

  protected render(): void {
    const src = this.attr('src');
    const alt = this.attr('alt', this.attr('name', 'Avatar'));
    const name = this.attr('name', '');
    const size = this.attr('size', 'md');

    if (src) {
      this.root.innerHTML = `<div class="avatar size-${size}"><img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" /></div>`;
    } else {
      const initials = this.getInitials(name);
      this.root.innerHTML = `<div class="avatar size-${size}" aria-label="${escapeHtml(alt)}">${escapeHtml(initials)}</div>`;
    }
  }
}

defineElement('dv-avatar', DvAvatar);
