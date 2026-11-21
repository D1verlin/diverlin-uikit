import { DvBaseElement } from '../../core/base-element';
export declare class DvSearch extends DvBaseElement {
    static observedAttributes: string[];
    private _syncing;
    protected static get componentStyles(): string;
    get value(): string;
    set value(v: string);
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    private syncState;
    protected render(): void;
    clear(): void;
}
//# sourceMappingURL=dv-search.d.ts.map