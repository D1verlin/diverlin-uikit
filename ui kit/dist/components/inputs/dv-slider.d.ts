import { DvBaseElement } from '../../core/base-element';
export interface DvSliderMark {
    value: number;
    label?: string;
}
export declare class DvSlider extends DvBaseElement {
    static observedAttributes: string[];
    private _dragging;
    protected static get componentStyles(): string;
    get value(): number;
    set value(v: number);
    private getMarks;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    private syncVisual;
    protected render(): void;
}
//# sourceMappingURL=dv-slider.d.ts.map