import { cn } from "@/utils/classname";
import { useField } from "formik";
import { Asterisk, X } from "lucide-react";

type TextInputProps = React.ComponentProps<"input"> & {
    label?: string;
    error?: string;
    required?: boolean;
};

export default function TextInput({
    className,
    label,
    error,
    required,
    type = "text",
    ...props
}: TextInputProps) {
    const [field, , helpers] = useField(props.name!);
    const showClear = Boolean(field.value);

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
                    {...field}
                    {...props}
                    type={type}
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
                        onClick={() => helpers.setValue("")}
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
