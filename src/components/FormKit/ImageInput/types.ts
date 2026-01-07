export type ImageInputProps = Omit<React.ComponentProps<"input">, "type" | "value" | "onChange"> & {
    label?: string;
    error?: string;
    required?: boolean;
    onUpload: (file: File) => Promise<string>;
    maxSizeMB?: number;
    allowedMimeTypes?: string[];
    previewClickable?: boolean;
};
