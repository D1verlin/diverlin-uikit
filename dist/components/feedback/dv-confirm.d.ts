import { DvBaseElement } from '../../core/base-element';
export interface DvConfirmOptions {
    title: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    variant?: 'primary' | 'danger';
}
export interface DvPromptOptions extends DvConfirmOptions {
    placeholder?: string;
    defaultValue?: string;
}
export declare class DvConfirm extends DvBaseElement {
    static observedAttributes: string[];
    private _onKeyDown;
    protected static get componentStyles(): string;
    protected onMount(): void;
    protected onUnmount(): void;
    private resolveCancel;
    private resolveConfirm;
    protected render(): void;
}
export declare function confirmDialog(opts: DvConfirmOptions): Promise<boolean>;
export declare function promptDialog(opts: DvPromptOptions): Promise<string | null>;
//# sourceMappingURL=dv-confirm.d.ts.map