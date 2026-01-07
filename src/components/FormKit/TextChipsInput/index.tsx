import { useState } from "react";
import { useField } from "formik";
import { cn } from "@/utils/classname";
import { Asterisk, X } from "lucide-react";
import { splitTokens, normalizeTokens } from "./utils";
import { Chip } from "./components/Chip";
import type { TextChipsOption } from "./types";

type TextChipsInputProps = Omit<React.ComponentProps<"input">, "value" | "onChange" | "onKeyDown"> &
    TextChipsOption & {
        label?: string;
        error?: string;
        required?: boolean;
    };

export default function TextChipsInput({
    className,
    label,
    error,
    required,
    separator = ",",
    maxItems,
    maxItemLength,
    preventDuplicates = true,
    normalize,
    ...props
}: TextChipsInputProps) {
    const [field, , helpers] = useField<string[] | undefined>(props.name!);
    const chips = field.value ?? [];

    const [draft, setDraft] = useState("");

    const commit = (raw: string) => {
        const tokens = splitTokens(raw, separator);
        if (tokens.length === 0) return;

        const next = normalizeTokens(tokens, {
            existing: chips,
            maxItems,
            maxItemLength,
            preventDuplicates,
            normalize,
        });

        helpers.setValue(next.length ? next : undefined);
        helpers.setTouched(true);
    };

    const removeAt = (idx: number) => {
        const next = chips.filter((_, i) => i !== idx);
        helpers.setValue(next.length ? next : undefined);
        helpers.setTouched(true);
    };

    const clearAll = () => {
        helpers.setValue(undefined);
        helpers.setTouched(true);
        setDraft("");
    };

    return (
        <div className="flex flex-col w-full">
            <div className="flex items-start gap-0.5">
                {label && (
                    <label className="font-body03-regular text-grey-300 select-none">{label}</label>
                )}
                {required && (
                    <Asterisk size={14} strokeWidth={1.5} className="text-warning-yellow" />
                )}
            </div>

            <div className="relative w-full">
                <div
                    className={cn(
                        "w-full border-b border-grey-300 py-2 pr-8 transition-all duration-200",
                        "focus-within:border-b-white",
                        error && "border-warning-yellow focus-within:border-warning-yellow"
                    )}
                >
                    <div className="flex flex-wrap items-center gap-2">
                        {chips.map((chip, i) => (
                            <Chip key={`${chip}-${i}`} value={chip} onRemove={() => removeAt(i)} />
                        ))}

                        <input
                            {...props}
                            value={draft}
                            onChange={(e) => setDraft(e.target.value)}
                            onBlur={() => {
                                if (draft.trim()) {
                                    commit(draft);
                                    setDraft("");
                                }
                                helpers.setTouched(true);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || (separator === "," && e.key === ",")) {
                                    e.preventDefault();
                                    if (draft.trim()) {
                                        commit(draft);
                                        setDraft("");
                                    }
                                }

                                if (e.key === "Backspace" && !draft && chips.length > 0) {
                                    removeAt(chips.length - 1);
                                }
                            }}
                            onPaste={(e) => {
                                const text = e.clipboardData.getData("text");
                                if (text.includes(separator)) {
                                    e.preventDefault();
                                    commit(text);
                                    setDraft("");
                                }
                            }}
                            className={cn(
                                "min-w-40 flex-1 bg-transparent outline-none",
                                "font-body01-regular text-white placeholder:text-grey-300",
                                className
                            )}
                        />
                    </div>
                </div>

                {(chips.length > 0 || draft) && (
                    <button
                        type="button"
                        onClick={clearAll}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-grey-300 hover:text-white"
                    >
                        <X size={16} strokeWidth={2} />
                    </button>
                )}
            </div>

            {error && <p className="font-body04-regular text-warning-yellow mt-1.5">{error}</p>}
        </div>
    );
}
