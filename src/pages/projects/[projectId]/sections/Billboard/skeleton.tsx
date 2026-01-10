import Skeleton from "@/components/Skeleton";
import TeamRoleCapacityIndicatorSkeleton from "@/components/TeamRoleCapacityIndicator/Skeleton";

export default function BillboardContentSkeleton() {
    return (
        <div className="w-full max-w-lg flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <Skeleton className="w-3/4 h-15 opacity-50" />
                <Skeleton className="w-full h-7 opacity-50" />
            </div>

            <div className="w-full flex flex-col gap-2 opacity-50">
                {Array.from({ length: 2 }).map((_, index) => (
                    <TeamRoleCapacityIndicatorSkeleton key={index} />
                ))}
            </div>
        </div>
    );
}
