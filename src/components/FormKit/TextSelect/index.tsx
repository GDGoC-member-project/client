import type { TextSelectProps } from "./types";
import { cn } from "@/utils/classname";
import { useField } from "formik";
import { Asterisk, X, ChevronDown } from "lucide-react";

export default function TextSelect<T extends string | number>({
    className,
    label,
    error,
    required,
    options,
    placeholder = "선택",
    emptyAsUndefined = false,
    ...props
}: TextSelectProps<T>) {
    const [field, , helpers] = useField<T | "" | undefined>(props.name!);

    const rawValue = field.value;
    const value =
        rawValue == null
            ? ""
            : typeof rawValue === "number"
            ? String(rawValue)
            : (rawValue as string);

    const showClear = Boolean(value);

    return (
        <div className="flex flex-col w-full">
            <div className="flex items-start gap-0.5">
                {label && (
                    <label
                        htmlFor={props.id}
                        className="font-body03-regular text-grey-300 select-none"
                    >
                        {label}
                    </label>
                )}
                {required && (
                    <Asterisk size={14} strokeWidth={1.5} className="text-warning-yellow" />
                )}
            </div>

            <div className="relative w-full">
                <select
                    {...props}
                    name={field.name}
                    onBlur={field.onBlur}
                    value={value}
                    onChange={(e) => {
                        const v = e.target.value;

                        if (v === "") {
                            helpers.setValue(emptyAsUndefined ? undefined : ("" as any));
                            return;
                        }

                        const sample = options.find((o) => String(o.value) === v)?.value;
                        helpers.setValue((sample ?? (v as any)) as any);
                    }}
                    className={cn(
                        "font-body01-regular w-full border-b border-grey-300 py-2 pr-8 transition-all duration-200 outline-none",
                        "focus:border-b-white",
                        "text-white bg-transparent",
                        !value && "text-grey-300",
                        "appearance-none [-webkit-appearance:none] [-moz-appearance:none]",
                        error && "border-warning-yellow focus:border-warning-yellow",
                        className
                    )}
                >
                    <option value="" disabled={required}>
                        {placeholder}
                    </option>

                    {options.map((opt) => (
                        <option
                            key={`${opt.value}`}
                            value={String(opt.value)}
                            disabled={opt.disabled}
                            className="text-black"
                        >
                            {opt.label}
                        </option>
                    ))}
                </select>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    {showClear && (
                        <button
                            type="button"
                            aria-label="Clear selection"
                            onClick={() => {
                                helpers.setValue(emptyAsUndefined ? undefined : ("" as any));
                                helpers.setTouched(true);
                            }}
                            className="p-1 rounded-md text-grey-300 hover:text-white transition-colors"
                        >
                            <X size={16} strokeWidth={2} />
                        </button>
                    )}

                    <ChevronDown size={16} strokeWidth={2} className="text-grey-300" />
                </div>
            </div>

            {error && <p className="font-body04-regular text-warning-yellow mt-1.5">{error}</p>}
        </div>
    );
}
