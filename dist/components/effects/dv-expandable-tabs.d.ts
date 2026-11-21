import { DvBaseElement } from '../../core/base-element';
export interface DvExpandableTabItem {
    id: string;
    label: string;
    icon: string;
}
export declare class DvExpandableTabs extends DvBaseElement {
    static observedAttributes: string[];
    protected static get componentStyles(): string;
    private getItems;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    protected render(): void;
}
//# sourceMappingURL=dv-expandable-tabs.d.ts.map