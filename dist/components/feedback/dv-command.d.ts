import { DvBaseElement } from '../../core/base-element';
export interface DvCommandItem {
    id: string;
    label: string;
    group?: string;
    shortcut?: string;
    icon?: string;
}
export declare class DvCommand extends DvBaseElement {
    static observedAttributes: string[];
    private _query;
    private _activeIdx;
    private _onKeyDown;
    protected static get componentStyles(): string;
    protected onMount(): void;
    protected onUnmount(): void;
    show(): void;
    close(): void;
    private getItems;
    private renderList;
    protected render(): void;
}
//# sourceMappingURL=dv-command.d.ts.map