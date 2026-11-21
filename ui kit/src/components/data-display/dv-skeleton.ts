import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvSkeleton extends DvBaseElement {
  static observedAttributes = ['variant', 'width', 'height', 'lines', 'preset'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; }
      .stack { display: flex; flex-direction: column; gap: var(--dv-space-2); }
      .row { display: flex; align-items: center; gap: var(--dv-space-3); }
      .card-box {
        display: flex;
        flex-direction: column;
        gap: var(--dv-space-3);
        padding: var(--dv-space-4);
        background: var(--dv-surface);
        border: none;
        border-radius: var(--dv-radius-md);
      }
      .skeleton {
        background: var(--dv-skeleton-base);
        border-radius: var(--dv-radius-sm);
        animation: dv-pulse 1.4s ease-in-out infinite;
      }
      .variant-text { height: 14px; border-radius: var(--dv-radius-xs); }
      .variant-rect { border-radius: var(--dv-radius-md); }
      .variant-circle { border-radius: 50%; flex-shrink: 0; }

      @keyframes dv-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.45; }
      }
    `;
  }

  protected render(): void {
    const preset = this.attr('preset');
    if (preset === 'profile') {
      this.root.innerHTML = `
        <div class="row" aria-hidden="true">
          <div class="skeleton variant-circle" style="width:40px;height:40px;"></div>
          <div class="stack" style="flex:1">
            <div class="skeleton variant-text" style="width:45%;"></div>
            <div class="skeleton variant-text" style="width:70%;"></div>
          </div>
        </div>
      `;
      return;
    }

    if (preset === 'card') {
      this.root.innerHTML = `
        <div class="card-box" aria-hidden="true">
          <div class="skeleton variant-rect" style="width:100%;height:120px;"></div>
          <div class="skeleton variant-text" style="width:60%;"></div>
          <div class="skeleton variant-text" style="width:90%;"></div>
          <div class="skeleton variant-text" style="width:40%;"></div>
        </div>
      `;
      return;
    }

    if (preset === 'article') {
      this.root.innerHTML = `
        <div class="stack" aria-hidden="true">
          <div class="skeleton variant-text" style="width:55%;height:20px;"></div>
          <div class="skeleton variant-text" style="width:100%;"></div>
          <div class="skeleton variant-text" style="width:94%;"></div>
          <div class="skeleton variant-text" style="width:72%;"></div>
        </div>
      `;
      return;
    }

    const lines = this.numAttr('lines', 0);
    if (lines > 1) {
      const widths = Array.from({ length: lines }, (_, i) => (i === lines - 1 ? '65%' : i % 2 === 1 ? '92%' : '100%'));
      this.root.innerHTML = `
        <div class="stack" aria-hidden="true">
          ${widths.map((w) => `<div class="skeleton variant-text" style="width:${w};"></div>`).join('')}
        </div>
      `;
      return;
    }

    const variant = this.attr('variant', 'text');
    const width = this.attr('width', '100%');
    const height = this.attr('height', variant === 'circle' ? width : variant === 'rect' ? '80px' : '14px');
    this.root.innerHTML = `<div class="skeleton variant-${variant}" style="width:${width};height:${height}" aria-hidden="true"></div>`;
  }
}

defineElement('dv-skeleton', DvSkeleton);
