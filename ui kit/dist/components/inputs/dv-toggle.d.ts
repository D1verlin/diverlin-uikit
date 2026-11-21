import { DvBaseElement } from '../../core/base-element';
export declare class DvToggle extends DvBaseElement {
    static observedAttributes: string[];
    protected static get componentStyles(): string;
    get checked(): boolean;
    set checked(val: boolean);
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    protected render(): void;
}
//# sourceMappingURL=dv-toggle.d.ts.map