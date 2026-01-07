import type { TextInputProps } from "./types";
import { cn } from "@/utils/classname";
import { datetimeLocalToDate, dateToDatetimeLocal } from "@/utils/date";
import { useField } from "formik";
import { Asterisk, X } from "lucide-react";

export default function TextInput({
    className,
    label,
    error,
    required,
    type = "text",
    ...props
}: TextInputProps) {
    const [field, , helpers] = useField<any>(props.name!);

    const isDateTimeLocal = type === "datetime-local";
    const rawValue = field.value;

    const inputValue = isDateTimeLocal
        ? rawValue instanceof Date
            ? dateToDatetimeLocal(rawValue)
            : ""
        : rawValue ?? "";

    const showClear = isDateTimeLocal ? Boolean(rawValue) : Boolean(inputValue);

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
                <input
                    {...props}
                    name={field.name}
                    onBlur={field.onBlur}
                    type={type}
                    value={inputValue}
                    onChange={(e) => {
                        if (isDateTimeLocal) {
                            helpers.setValue(datetimeLocalToDate(e.target.value));
                        } else {
                            field.onChange(e);
                        }
                    }}
                    className={cn(
                        "font-body01-regular w-full border-b border-grey-300 py-2 pr-8 transition-all duration-200 outline-none",
                        "focus:border-b-white",
                        "placeholder:text-grey-300",
                        "appearance-none [-webkit-appearance:none] [-moz-appearance:none]",
                        error && "border-warning-yellow focus:border-warning-yellow",
                        className
                    )}
                />

                {showClear && (
                    <button
                        type="button"
                        aria-label="Clear input"
                        onClick={() => helpers.setValue(isDateTimeLocal ? null : "")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-1 rounded-md text-grey-300 hover:text-white transition-colors"
                    >
                        <X size={16} strokeWidth={2} />
                    </button>
                )}
            </div>

            {error && <p className="font-body04-regular text-warning-yellow mt-1.5">{error}</p>}
        </div>
    );
}
