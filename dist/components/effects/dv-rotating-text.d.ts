import { DvBaseElement } from '../../core/base-element';
export declare class DvRotatingText extends DvBaseElement {
    static observedAttributes: string[];
    private _idx;
    private _timer;
    protected static get componentStyles(): string;
    protected onUnmount(): void;
    private getWords;
    protected render(): void;
}
//# sourceMappingURL=dv-rotating-text.d.ts.map