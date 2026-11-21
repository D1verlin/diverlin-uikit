export declare abstract class DvBaseElement extends HTMLElement {
    protected root: ShadowRoot;
    private _initialized;
    constructor();
    protected static get componentStyles(): string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(_name: string, oldValue: string | null, newValue: string | null): void;
    protected onMount(): void;
    protected onUnmount(): void;
    protected abstract render(): void;
    protected attr(name: string, fallback?: string): string;
    protected boolAttr(name: string): boolean;
    protected numAttr(name: string, fallback?: number): number;
    protected emit<T = unknown>(name: string, detail?: T): boolean;
}
export declare function defineElement(tagName: string, ctor: CustomElementConstructor): void;
export declare function escapeHtml(value: string): string;
//# sourceMappingURL=base-element.d.ts.map