import { DvBaseElement } from '../../core/base-element';
export declare class DvTextarea extends DvBaseElement {
    static observedAttributes: string[];
    protected static get componentStyles(): string;
    private _syncing;
    get value(): string;
    set value(v: string);
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    protected render(): void;
}
//# sourceMappingURL=dv-textarea.d.ts.map