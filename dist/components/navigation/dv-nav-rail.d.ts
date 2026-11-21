import { DvBaseElement } from '../../core/base-element';
export interface DvNavRailItem {
    id: string;
    label: string;
    icon: string;
    align?: 'top' | 'center' | 'bottom';
}
export declare class DvNavRail extends DvBaseElement {
    static observedAttributes: string[];
    protected static get componentStyles(): string;
    private getItems;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    private renderItems;
    protected render(): void;
}
//# sourceMappingURL=dv-nav-rail.d.ts.map