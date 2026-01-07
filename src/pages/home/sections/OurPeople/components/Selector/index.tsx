import { motion } from "motion/react";
import { cn } from "@/utils/classname";
import type { SelectorProps } from "./types";
import { ProfileFilterItems, type ProfileFilter } from "@/types/profile";

export default function Selector({ value, onChange }: SelectorProps) {
    const isSame = (a: ProfileFilter, b: ProfileFilter) => a.type === b.type && a.value === b.value;
    const items = ProfileFilterItems;

    return (
        <div className="w-full">
            <div className="relative mx-auto flex w-fit items-center justify-center gap-6">
                {items.map(({ label, filter }) => {
                    const isActive = isSame(value, filter);

                    return (
                        <button
                            key={label}
                            type="button"
                            onClick={() => onChange(filter)}
                            className={cn(
                                "relative font-body01-medium transition-colors px-px cursor-pointer",
                                isActive ? "text-white" : "text-grey-300 hover:text-white"
                            )}
                        >
                            {label}

                            {isActive && (
                                <motion.div
                                    layoutId="selector-underline"
                                    className="absolute left-0 right-0 -bottom-0.5 h-px bg-white"
                                    transition={{ type: "spring", stiffness: 520, damping: 40 }}
                                />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
