import { cn } from "@/utils/classname";
import { ProfileFilterItems } from "@/types/profile";

export default function SelectorSkeleton() {
    const items = ProfileFilterItems;

    return (
        <div className="w-full">
            <div className="relative mx-auto flex w-fit items-center justify-center gap-6">
                {items.map(({ label }) => {
                    return (
                        <p
                            key={label}
                            className={cn(
                                "relative font-body01-medium transition-colors px-px pointer-events-none text-grey-300"
                            )}
                        >
                            {label}
                        </p>
                    );
                })}
            </div>
        </div>
    );
}
