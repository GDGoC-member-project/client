import { ChevronRight } from "lucide-react";
import type { ExpandableCardProps } from "./types";

export function CardHeader({ title, description, expanded }: ExpandableCardProps) {
    return (
        <div className="flex items-end justify-between gap-1">
            <div className="flex items-center gap-1.5">
                <div className="flex flex-col gap-1">
                    {title && <h2 className="truncate font-body02-medium">{title}</h2>}
                    {description && <p className="font-body03-medium">{description}</p>}
                </div>
            </div>

            <button
                type="button"
                aria-expanded={!!expanded}
                aria-label={expanded ? "Collapse" : "Expand"}
                className="grid rounded-md place-items-center"
            >
                <ChevronRight
                    className={`size-6 text-grey-200 transition-transform ${
                        expanded ? "rotate-90" : "rotate-0"
                    }`}
                />
            </button>
        </div>
    );
}
