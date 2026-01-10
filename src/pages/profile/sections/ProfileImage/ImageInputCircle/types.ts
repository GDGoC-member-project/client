export type ImageInputCircleProps = {
    name: string;
    size?: number;
    onUpload: (file: File) => Promise<string>;
    error?: string;
    disabled?: boolean;
};
