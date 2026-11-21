import { DvBaseElement } from '../../core/base-element';
export declare class DvTrueFocus extends DvBaseElement {
    static observedAttributes: string[];
    private _activeIdx;
    private _timer;
    protected static get componentStyles(): string;
    protected onUnmount(): void;
    private syncBox;
    protected render(): void;
}
//# sourceMappingURL=dv-true-focus.d.ts.map