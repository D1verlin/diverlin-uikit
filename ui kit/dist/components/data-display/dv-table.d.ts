import { DvBaseElement } from '../../core/base-element';
export declare class DvTable extends DvBaseElement {
    static observedAttributes: string[];
    private _sortCol;
    private _sortAsc;
    protected static get componentStyles(): string;
    protected onMount(): void;
    private sortByColumn;
    private syncTableStyles;
    protected render(): void;
}
//# sourceMappingURL=dv-table.d.ts.map