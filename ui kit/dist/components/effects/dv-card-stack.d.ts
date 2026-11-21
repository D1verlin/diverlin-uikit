import { DvBaseElement } from '../../core/base-element';
export interface DvStackCardItem {
    title: string;
    subtitle?: string;
    meta?: string;
}
export declare class DvCardStack extends DvBaseElement {
    static observedAttributes: string[];
    private _order;
    protected static get componentStyles(): string;
    private getItems;
    private syncPositions;
    protected render(): void;
}
//# sourceMappingURL=dv-card-stack.d.ts.map