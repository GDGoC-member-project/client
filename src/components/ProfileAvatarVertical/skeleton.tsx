import Skeleton from "@/components/Skeleton";
import type { ProfileAvatarVerticalProps } from "./types";

type Props = {
    size?: ProfileAvatarVerticalProps["size"];
};

export default function ProfileAvatarVerticalSkeleton({ size = "DEFAULT" }: Props) {
    const isCompact = size === "COMPACT";

    return (
        <div className={`flex flex-col items-center ${isCompact ? "gap-3" : "gap-2"}`}>
            {/* Avatar */}
            <div className={`rounded-full overflow-hidden ${isCompact ? "size-24" : "size-27.5"}`}>
                <Skeleton className="size-full rounded-full" />
            </div>

            {/* Text */}
            <div className="flex flex-col items-center gap-0.5">
                <Skeleton className={`${isCompact ? "h-4 w-16" : "h-5 w-20"}`} />
                <Skeleton className={`${isCompact ? "h-3 w-20" : "h-4 w-24"}`} />
            </div>
        </div>
    );
}
