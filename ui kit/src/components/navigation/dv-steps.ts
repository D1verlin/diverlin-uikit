import { DvBaseElement, defineElement, escapeHtml } from '../../core/base-element';
import { DV_ICONS } from '../../core/icons';

export class DvSteps extends DvBaseElement {
  static observedAttributes = ['steps', 'current'];

  protected static get componentStyles(): string {
    return `
      :host { display: block; width: 100%; }
      ol {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--dv-space-4);
      }
      li {
        display: flex;
        align-items: center;
        gap: var(--dv-space-2);
        font-size: var(--dv-text-sm);
        color: var(--dv-text-muted);
      }
      .num {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
        color: var(--dv-text-secondary);
        background: var(--dv-surface);
      }
      li.active { color: var(--dv-text-primary); font-weight: 600; }
      li.active .num {
        background: var(--dv-accent);
        color: var(--dv-accent-fg);
      }
      li.done { color: var(--dv-text-secondary); }
      li.done .num {
        background: var(--dv-surface-hover);
        color: var(--dv-text-primary);
      }
      .sep {
        width: 24px;
        height: 1px;
        background: var(--dv-border);
      }
    `;
  }

  protected render(): void {
    let steps: string[] = [];
    try {
      const parsed = JSON.parse(this.attr('steps', '[]'));
      if (Array.isArray(parsed)) steps = parsed.map(String);
    } catch {
      steps = [];
    }
    const current = this.numAttr('current', 0);

    this.root.innerHTML = `
      <ol>
        ${steps
          .map((label, idx) => {
            const state = idx < current ? 'done' : idx === current ? 'active' : '';
            return `
              ${idx > 0 ? '<div class="sep" aria-hidden="true"></div>' : ''}
              <li class="${state}">
                <span class="num">${
                  idx < current
                    ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">${DV_ICONS.check}</svg>`
                    : idx + 1
                }</span>
                <span>${escapeHtml(label)}</span>
              </li>
            `;
          })
          .join('')}
      </ol>
    `;
  }
}

defineElement('dv-steps', DvSteps);
