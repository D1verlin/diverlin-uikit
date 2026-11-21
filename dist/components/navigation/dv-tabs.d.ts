import { DvBaseElement } from '../../core/base-element';
export interface DvTabItem {
    id: string;
    label: string;
    disabled?: boolean;
}
export declare class DvTabs extends DvBaseElement {
    static observedAttributes: string[];
    protected static get componentStyles(): string;
    private getItems;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    protected render(): void;
}
//# sourceMappingURL=dv-tabs.d.ts.map