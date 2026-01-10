import Skeleton from "@/components/Skeleton";

export default function ProjectCardSkeleton() {
    return (
        <div className="w-full flex flex-col gap-3 border border-grey-800 rounded-xl px-6 py-5">
            <Skeleton className="w-1/2 h-6" />
            <Skeleton className="w-3/4 h-4" />
        </div>
    );
}
