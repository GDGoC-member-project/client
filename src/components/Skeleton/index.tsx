import { cn } from "@/utils/classname";
import type { SkeletonProps } from "./types";

export default function Skeleton({ className }: SkeletonProps) {
    return <div className={cn("animate-pulse rounded-md bg-grey-900", className)} />;
}
