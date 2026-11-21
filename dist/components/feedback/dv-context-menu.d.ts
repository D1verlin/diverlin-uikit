import { DvBaseElement } from '../../core/base-element';
export interface DvContextMenuItem {
    id: string;
    label: string;
    danger?: boolean;
}
export declare class DvContextMenu extends DvBaseElement {
    static observedAttributes: string[];
    private _open;
    private _onDocClick;
    private _onKeyDown;
    protected static get componentStyles(): string;
    protected onMount(): void;
    protected onUnmount(): void;
    private getItems;
    close(): void;
    protected render(): void;
}
//# sourceMappingURL=dv-context-menu.d.ts.map