import { cn } from "@/utils/classname";
import type { IconButtonProps } from "./types";

export function IconButton({ icon, label, className, ...props }: IconButtonProps) {
    return (
        <button
            type="button"
            className={cn(
                "size-9 bg-grey-900 rounded-full flex items-center justify-center hover:bg-grey-800 transition-colors cursor-pointer",
                className
            )}
            aria-label={label}
            {...props}
        >
            {icon}
        </button>
    );
}
