import { DvBaseElement } from '../../core/base-element';
export declare class DvOtpInput extends DvBaseElement {
    static observedAttributes: string[];
    protected static get componentStyles(): string;
    get value(): string;
    private _syncing;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    protected render(): void;
}
//# sourceMappingURL=dv-otp-input.d.ts.map