import { DvBaseElement } from '../../core/base-element';
export declare class DvDatePicker extends DvBaseElement {
    static observedAttributes: string[];
    private _open;
    private _viewYear;
    private _viewMonth;
    private _onDocClick;
    private _onKeyDown;
    protected static get componentStyles(): string;
    protected onMount(): void;
    protected onUnmount(): void;
    private setOpen;
    private formatIso;
    private renderCalendar;
    protected render(): void;
}
//# sourceMappingURL=dv-date-picker.d.ts.map