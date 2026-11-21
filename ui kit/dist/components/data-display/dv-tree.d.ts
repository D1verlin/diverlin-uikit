import { DvBaseElement } from '../../core/base-element';
export interface DvTreeNode {
    id: string;
    label: string;
    icon?: string;
    children?: DvTreeNode[];
}
export declare class DvTree extends DvBaseElement {
    static observedAttributes: string[];
    private _expanded;
    private _didInitExpand;
    protected static get componentStyles(): string;
    private getItems;
    private collectAllIds;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    private renderNodes;
    protected render(): void;
}
//# sourceMappingURL=dv-tree.d.ts.map