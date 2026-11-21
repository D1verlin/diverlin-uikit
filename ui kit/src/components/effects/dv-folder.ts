import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';

export class DvFolder extends DvBaseElement {
  static observedAttributes = ['label', 'open'];

  protected static get componentStyles(): string {
    return `
      :host { display: inline-block; }
      .wrap {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        gap: var(--dv-space-3);
        cursor: pointer;
        user-select: none;
        padding-top: 24px;
      }
      .folder {
        position: relative;
        width: 118px;
        height: 86px;
      }
      .back {
        position: absolute;
        inset: 0;
        border-radius: 10px;
        background: var(--dv-surface-active);
      }
      .tab {
        position: absolute;
        top: -10px;
        left: 0;
        width: 44px;
        height: 16px;
        border-radius: 6px 6px 0 0;
        background: var(--dv-surface-active);
      }
      .sheet {
        position: absolute;
        left: 12px;
        right: 12px;
        bottom: 10px;
        height: 64px;
        border-radius: 6px;
        background: var(--dv-surface-elevated);
        box-shadow: var(--dv-shadow-sm);
        transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
      }
      .s1 { z-index: 1; }
      .s2 { z-index: 2; }
      .s3 { z-index: 3; }
      .front {
        position: absolute;
        inset: 14px 0 0 0;
        z-index: 4;
        border-radius: 10px;
        background: var(--dv-accent);
        transform-origin: bottom center;
        transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
      }
      .wrap:hover .s1,
      .wrap.open .s1 {
        transform: translate(-18px, -28px) rotate(-10deg);
      }
      .wrap:hover .s2,
      .wrap.open .s2 {
        transform: translate(0px, -34px) rotate(0deg);
      }
      .wrap:hover .s3,
      .wrap.open .s3 {
        transform: translate(18px, -28px) rotate(10deg);
      }
      .wrap:hover .front,
      .wrap.open .front {
        transform: scaleY(0.86);
      }
      .label {
        font-size: var(--dv-text-sm);
        font-weight: 500;
        color: var(--dv-text-primary);
      }
    `;
  }

  protected render(): void {
    const label = this.attr('label', 'Проект Diverlin');
    const open = this.boolAttr('open');

    this.root.innerHTML = `
      <div class="wrap ${open ? 'open' : ''}" role="button" tabindex="0" aria-expanded="${open}">
        <div class="folder">
          <div class="tab"></div>
          <div class="back"></div>
          <div class="sheet s1"></div>
          <div class="sheet s2"></div>
          <div class="sheet s3"></div>
          <div class="front"></div>
        </div>
        <span class="label">${escapeHtml(label)}</span>
      </div>
    `;

    const wrap = this.root.querySelector<HTMLElement>('.wrap')!;
    wrap.addEventListener('click', () => {
      const next = !this.boolAttr('open');
      if (next) this.setAttribute('open', '');
      else this.removeAttribute('open');
      this.emit('dv-toggle', { open: next });
    });
  }
}

defineElement('dv-folder', DvFolder);
