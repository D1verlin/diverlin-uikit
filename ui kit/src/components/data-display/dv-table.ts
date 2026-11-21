import { DvBaseElement, defineElement } from '../../core/base-element';

export class DvTable extends DvBaseElement {
  static observedAttributes = ['dense', 'sortable'];

  private _sortCol = -1;
  private _sortAsc = true;

  protected static get componentStyles(): string {
    return `
      :host {
        display: block;
        width: 100%;
        overflow-x: auto;
        border: none;
        border-radius: var(--dv-radius-md);
        background: var(--dv-surface);
      }
      ::slotted(table) {
        width: 100%;
        border-collapse: collapse;
        font-family: var(--dv-font-sans);
        font-size: var(--dv-text-sm);
        text-align: left;
        font-variant-numeric: tabular-nums;
      }
    `;
  }

  protected onMount(): void {
    this.syncTableStyles();
  }

  private sortByColumn(colIdx: number): void {
    const table = this.querySelector('table');
    const tbody = table?.querySelector('tbody');
    if (!tbody) return;

    if (this._sortCol === colIdx) {
      this._sortAsc = !this._sortAsc;
    } else {
      this._sortCol = colIdx;
      this._sortAsc = true;
    }

    const rows = Array.from(tbody.querySelectorAll('tr'));
    rows.sort((a, b) => {
      const av = a.children[colIdx]?.textContent?.trim() ?? '';
      const bv = b.children[colIdx]?.textContent?.trim() ?? '';
      const an = Number(av.replace(/[^\d.-]/g, ''));
      const bn = Number(bv.replace(/[^\d.-]/g, ''));
      const cmp =
        av !== '' && bv !== '' && Number.isFinite(an) && Number.isFinite(bn) && /\d/.test(av) && /\d/.test(bv)
          ? an - bn
          : av.localeCompare(bv, 'ru');
      return this._sortAsc ? cmp : -cmp;
    });

    rows.forEach((r) => tbody.appendChild(r));
    this.syncTableStyles();
    this.emit('dv-sort', { column: colIdx, ascending: this._sortAsc });
  }

  private syncTableStyles(): void {
    const table = this.querySelector('table');
    if (!table) return;
    const dense = this.boolAttr('dense');
    const sortable = this.boolAttr('sortable');
    const pad = dense ? '8px 12px' : '12px 16px';

    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    table.style.fontVariantNumeric = 'tabular-nums';

    table.querySelectorAll('th').forEach((th, idx) => {
      th.style.padding = pad;
      th.style.fontWeight = '600';
      th.style.fontSize = 'var(--dv-text-xs)';
      th.style.color = idx === this._sortCol ? 'var(--dv-text-primary)' : 'var(--dv-text-muted)';
      th.style.background = 'var(--dv-surface-hover)';
      th.style.whiteSpace = 'nowrap';

      if (sortable) {
        th.style.cursor = 'pointer';
        th.style.userSelect = 'none';
        if (!th.dataset.bound) {
          th.dataset.bound = '1';
          th.addEventListener('click', () => this.sortByColumn(idx));
        }
      }
    });

    table.querySelectorAll('td').forEach((td) => {
      td.style.padding = pad;
      td.style.color = 'var(--dv-text-primary)';
    });

    table.querySelectorAll('tbody tr').forEach((tr, idx) => {
      (tr as HTMLElement).style.background = idx % 2 === 1 ? 'var(--dv-surface-elevated)' : 'transparent';
    });
  }

  protected render(): void {
    this.root.innerHTML = `<slot></slot>`;
    this.syncTableStyles();
  }
}

defineElement('dv-table', DvTable);
