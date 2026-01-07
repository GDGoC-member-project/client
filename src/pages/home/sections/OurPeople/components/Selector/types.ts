import type { ProfileFilter } from "@/types/profile";

export type SelectorProps = {
    value: ProfileFilter;
    onChange: (next: ProfileFilter) => void;
};
