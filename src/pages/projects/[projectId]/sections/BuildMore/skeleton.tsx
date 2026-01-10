import ProjectCardSkeleton from "@/components/ProjectCard/Skeleton";

export default function BuildMoreSkeleton() {
    const left = [0, 2];
    const right = [1, 3];

    const renderColumn = (items: number[]) => (
        <div className="w-full sm:w-100 flex flex-col gap-6">
            {items.map((i) => (
                <ProjectCardSkeleton key={i} />
            ))}
        </div>
    );

    return (
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-center">
            {renderColumn(left)}
            {renderColumn(right)}
        </div>
    );
}
