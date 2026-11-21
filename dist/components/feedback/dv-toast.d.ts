import { DvBaseElement } from '../../core/base-element';
export type DvToastVariant = 'neutral' | 'success' | 'warning' | 'danger' | 'info';
export interface DvToastOptions {
    message: string;
    variant?: DvToastVariant;
    duration?: number;
}
export declare class DvToastContainer extends DvBaseElement {
    protected static get componentStyles(): string;
    addToast(opts: DvToastOptions): void;
    protected render(): void;
}
export declare function showToast(opts: DvToastOptions): void;
//# sourceMappingURL=dv-toast.d.ts.map