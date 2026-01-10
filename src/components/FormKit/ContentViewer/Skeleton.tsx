import Skeleton from "@/components/Skeleton";

export default function ContentViewerSkeleton() {
    return (
        <div className="w-full max-w-6xl space-y-6">
            <Skeleton className="h-8 w-3/5" />
            <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-10/12" />
            </div>

            <Skeleton className="h-64 w-full" />

            <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-9/12" />
            </div>

            <div className="space-y-2 pt-2">
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-3/4" />
            </div>
        </div>
    );
}
