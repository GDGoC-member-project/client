import Skeleton from "@/components/Skeleton";

export default function BillboardContentSkeleton() {
    return (
        <div className="w-full flex flex-col gap-4 opacity-50">
            <div className="rounded-full flex items-center justify-center overflow-hidden size-37.5">
                <Skeleton className="size-full rounded-full" />
            </div>

            <Skeleton className="h-22.5 w-60" />

            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <Skeleton className="h-7 w-12" />
                    <Skeleton className="h-7 w-px" />
                    <Skeleton className="h-7 w-12" />
                    <Skeleton className="h-7 w-px" />
                    <Skeleton className="h-7 w-12" />
                </div>

                <div className="flex justify-between gap-4">
                    <div className="flex flex-col gap-2 w-full">
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-4 w-2/3" />
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                        <Skeleton className="size-6 rounded-full" />
                        <Skeleton className="size-6 rounded-full" />
                        <Skeleton className="size-6 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
