import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvClickSpark extends DvBaseElement {
  static observedAttributes = ['count', 'radius'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; width: 100%; }
      .area {
        position: relative;
        overflow: hidden;
        min-height: 150px;
        padding: var(--dv-space-5);
        border-radius: var(--dv-radius-lg);
        background: var(--dv-card-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        user-select: none;
      }
      .burst {
        position: absolute;
        pointer-events: none;
        width: 0;
        height: 0;
      }
      .ray {
        position: absolute;
        left: -1px;
        top: -5px;
        width: 2px;
        height: 10px;
        border-radius: 1px;
        background: var(--dv-text-primary);
        transform: rotate(var(--_ang)) translateY(0);
        animation: dv-spark-out 420ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }
      @keyframes dv-spark-out {
        0% {
          opacity: 1;
          transform: rotate(var(--_ang)) translateY(-4px) scaleY(1);
        }
        100% {
          opacity: 0;
          transform: rotate(var(--_ang)) translateY(var(--_rad, -28px)) scaleY(0.2);
        }
      }
    `;
  }

  protected render(): void {
    const count = Math.min(16, Math.max(4, this.numAttr('count', 8)));
    const radius = Math.max(14, this.numAttr('radius', 28));

    this.root.innerHTML = `<div class="area"><slot></slot></div>`;

    const area = this.root.querySelector<HTMLElement>('.area')!;
    area.addEventListener('pointerdown', (e: PointerEvent) => {
      const rect = area.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const burst = document.createElement('div');
      burst.className = 'burst';
      burst.style.left = `${x}px`;
      burst.style.top = `${y}px`;

      const step = 360 / count;
      for (let i = 0; i < count; i++) {
        const ray = document.createElement('span');
        ray.className = 'ray';
        ray.style.setProperty('--_ang', `${i * step}deg`);
        ray.style.setProperty('--_rad', `-${radius}px`);
        burst.appendChild(ray);
      }

      area.appendChild(burst);
      window.setTimeout(() => burst.remove(), 450);
    });
  }
}

defineElement('dv-click-spark', DvClickSpark);
