import { DvBaseElement } from '../../core/base-element';
export declare class DvSplitPane extends DvBaseElement {
    static observedAttributes: string[];
    private _dragging;
    private _syncing;
    protected static get componentStyles(): string;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    private syncVisual;
    protected render(): void;
}
//# sourceMappingURL=dv-split-pane.d.ts.map