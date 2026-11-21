import { DvBaseElement } from '../../core/base-element';
export declare class DvColorPicker extends DvBaseElement {
    static observedAttributes: string[];
    private _open;
    private _onDocClick;
    private _onKeyDown;
    protected static get componentStyles(): string;
    protected onMount(): void;
    protected onUnmount(): void;
    get value(): string;
    set value(v: string);
    private _syncing;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    private syncVisual;
    private setOpen;
    private getSwatches;
    private applyColor;
    protected render(): void;
}
//# sourceMappingURL=dv-color-picker.d.ts.map