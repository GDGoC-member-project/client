export type ContentFieldProps = {
    name: string;
    placeholder?: string;
    editable?: boolean;
    className?: string;
    onImageUpload?: (file: File) => Promise<string>;
};
