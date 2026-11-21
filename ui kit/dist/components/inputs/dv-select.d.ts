import { DvBaseElement } from '../../core/base-element';
export interface DvSelectOption {
    label: string;
    value: string;
    disabled?: boolean;
}
export declare class DvSelect extends DvBaseElement {
    static observedAttributes: string[];
    private _open;
    private _onDocClick;
    private _onKeyDown;
    protected static get componentStyles(): string;
    protected onMount(): void;
    protected onUnmount(): void;
    get value(): string;
    set value(v: string);
    private getItems;
    private setOpen;
    protected render(): void;
}
//# sourceMappingURL=dv-select.d.ts.map