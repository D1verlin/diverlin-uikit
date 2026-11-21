import { DvBaseElement } from '../../core/base-element';
export interface DvBreadcrumbItem {
    label: string;
    href?: string;
}
export declare class DvBreadcrumbs extends DvBaseElement {
    static observedAttributes: string[];
    protected static get componentStyles(): string;
    protected render(): void;
}
//# sourceMappingURL=dv-breadcrumbs.d.ts.map