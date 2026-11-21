import { DvBaseElement } from '../../core/base-element';
export interface DvComboboxOption {
    label: string;
    value: string;
}
export declare class DvCombobox extends DvBaseElement {
    static observedAttributes: string[];
    private _open;
    private _query;
    private _onDocClick;
    private _onKeyDown;
    protected static get componentStyles(): string;
    protected onMount(): void;
    protected onUnmount(): void;
    private getOptions;
    private getSelectedValues;
    private setOpen;
    private renderMenu;
    protected render(): void;
}
//# sourceMappingURL=dv-combobox.d.ts.map