import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvTiltCard extends DvBaseElement {
  static observedAttributes = ['max-tilt', 'padding'];

  protected static get componentStyles(): string {
    return `
      :host {
        display: block;
        perspective: 900px;
        --dv-surface: var(--dv-surface-elevated);
      }
      .tilt {
        border-radius: var(--dv-radius-lg);
        background: var(--dv-card-bg);
        color: var(--dv-text-primary);
        transform-style: preserve-3d;
        transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
        will-change: transform;
      }
      .tilt.active {
        transition: transform 60ms linear;
      }
      .pad-sm { padding: var(--dv-space-3); }
      .pad-md { padding: var(--dv-space-5); }
      .pad-lg { padding: var(--dv-space-6); }
    `;
  }

  protected render(): void {
    const maxTilt = this.numAttr('max-tilt', 10);
    const padding = this.attr('padding', 'lg');

    this.root.innerHTML = `<div class="tilt pad-${padding}"><slot></slot></div>`;

    const tilt = this.root.querySelector<HTMLElement>('.tilt')!;
    tilt.addEventListener('pointermove', (e: PointerEvent) => {
      const rect = tilt.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      const rx = (-ny * maxTilt * 2).toFixed(2);
      const ry = (nx * maxTilt * 2).toFixed(2);
      tilt.classList.add('active');
      tilt.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    });

    tilt.addEventListener('pointerleave', () => {
      tilt.classList.remove('active');
      tilt.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  }
}

defineElement('dv-tilt-card', DvTiltCard);
