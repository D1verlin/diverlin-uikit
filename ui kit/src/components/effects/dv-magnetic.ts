import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvMagnetic extends DvBaseElement {
  static observedAttributes = ['strength', 'disabled'];

  protected static get componentStyles(): string {
    return `
      :host { display: inline-block; }
      .mag {
        display: inline-block;
        transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
        will-change: transform;
      }
      .mag.tracking {
        transition: transform 60ms linear;
      }
    `;
  }

  protected render(): void {
    const strength = this.numAttr('strength', 0.35);
    const disabled = this.boolAttr('disabled');

    this.root.innerHTML = `<div class="mag"><slot></slot></div>`;
    if (disabled) return;

    const mag = this.root.querySelector<HTMLElement>('.mag')!;

    this.addEventListener('pointermove', (e: PointerEvent) => {
      const rect = this.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      mag.classList.add('tracking');
      mag.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
    });

    this.addEventListener('pointerleave', () => {
      mag.classList.remove('tracking');
      mag.style.transform = 'translate3d(0, 0, 0)';
    });
  }
}

defineElement('dv-magnetic', DvMagnetic);
