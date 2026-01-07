import type { ChipProps } from "./types";
import { X } from "lucide-react";

export function Chip({ value, onRemove }: ChipProps) {
    return (
        <span className="inline-flex items-center gap-1.5 rounded-sm px-2.5 py-0.5 bg-grey-900 text-white font-body03-regular">
            <span className="max-w-60 truncate">{value}</span>
            <button
                type="button"
                aria-label={`Remove ${value}`}
                onClick={onRemove}
                className="text-grey-300 hover:text-white transition-colors cursor-pointer"
            >
                <X size={14} strokeWidth={2} />
            </button>
        </span>
    );
}
