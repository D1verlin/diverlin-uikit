import { DvBaseElement } from '../../core/base-element';
export interface DvDockItem {
    id: string;
    label: string;
    icon: string;
}
export declare class DvDock extends DvBaseElement {
    static observedAttributes: string[];
    protected static get componentStyles(): string;
    private getItems;
    protected render(): void;
}
//# sourceMappingURL=dv-dock.d.ts.map