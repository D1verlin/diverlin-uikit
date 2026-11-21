import { DvBaseElement } from '../../core/base-element';
export declare class DvNumberInput extends DvBaseElement {
    static observedAttributes: string[];
    protected static get componentStyles(): string;
    get value(): number;
    set value(v: number);
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    protected render(): void;
}
//# sourceMappingURL=dv-number-input.d.ts.map