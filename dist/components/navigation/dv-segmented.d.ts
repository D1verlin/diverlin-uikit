import { DvBaseElement } from '../../core/base-element';
export interface DvSegmentedOption {
    id: string;
    label: string;
}
export declare class DvSegmented extends DvBaseElement {
    static observedAttributes: string[];
    protected static get componentStyles(): string;
    private getItems;
    private updatePill;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    protected render(): void;
}
//# sourceMappingURL=dv-segmented.d.ts.map