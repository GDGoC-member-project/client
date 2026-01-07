export type TextInputProps = Omit<React.ComponentProps<"input">, "value" | "onChange"> & {
    label?: string;
    error?: string;
    required?: boolean;
};
