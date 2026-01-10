import ProjectCard from "@/components/ProjectCard";
import type { BuildTogetherSectionProps } from "./types";

export default function BuildTogetherSection({ projects }: BuildTogetherSectionProps) {
    const left = projects.filter((_, i) => i % 2 === 0);
    const right = projects.filter((_, i) => i % 2 === 1);

    const renderColumn = (columnProjects: typeof projects) => (
        <div className="w-full sm:w-100 flex flex-col gap-6">
            {columnProjects.map((p) => (
                <ProjectCard key={p.projectId} project={p} />
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
