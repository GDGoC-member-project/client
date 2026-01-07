export type ChipValue = string;

export type TextChipsOption = {
    separator?: string;
    maxItems?: number;
    maxItemLength?: number;
    preventDuplicates?: boolean;
    normalize?: (value: string) => string;
};
