import { DvBaseElement } from '../../core/base-element';
export interface DvTimelineItem {
    title: string;
    time?: string;
    description?: string;
    icon?: string;
}
export declare class DvTimeline extends DvBaseElement {
    static observedAttributes: string[];
    protected static get componentStyles(): string;
    protected render(): void;
}
//# sourceMappingURL=dv-timeline.d.ts.map