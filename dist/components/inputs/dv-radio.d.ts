import { DvBaseElement } from '../../core/base-element';
export declare class DvRadio extends DvBaseElement {
    static observedAttributes: string[];
    protected static get componentStyles(): string;
    get checked(): boolean;
    set checked(val: boolean);
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    protected render(): void;
}
//# sourceMappingURL=dv-radio.d.ts.map