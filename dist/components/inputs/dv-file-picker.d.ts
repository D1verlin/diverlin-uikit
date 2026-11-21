import { DvBaseElement } from '../../core/base-element';
export declare class DvFilePicker extends DvBaseElement {
    static observedAttributes: string[];
    private _files;
    protected static get componentStyles(): string;
    get files(): File[];
    private formatSize;
    private addFiles;
    private renderFileList;
    protected render(): void;
}
//# sourceMappingURL=dv-file-picker.d.ts.map