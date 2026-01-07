import ProfileAvatarVerticalSkeleton from "@/components/ProfileAvatarVertical/skeleton";
import { ProfileFilterItems } from "@/types/profile";
import { cn } from "@/utils/classname";

function SelectorSkeleton() {
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

function GridSkeleton({ count = 8 }: { count?: number }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-6xl mt-16">
            {Array.from({ length: count }).map((_, i) => (
                <ProfileAvatarVerticalSkeleton key={i} />
            ))}
        </div>
    );
}

export default function OurPeopleSkeleton() {
    return (
        <>
            <SelectorSkeleton />
            <GridSkeleton />
        </>
    );
}
