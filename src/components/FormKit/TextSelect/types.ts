export type SelectOption<T extends string | number> = {
    label: string;
    value: T;
    disabled?: boolean;
};

export type TextSelectProps<T extends string | number> = Omit<
    React.ComponentProps<"select">,
    "value" | "onChange"
> & {
    label?: string;
    error?: string;
    required?: boolean;
    options: SelectOption<T>[];
    placeholder?: string;
    emptyAsUndefined?: boolean;
};
