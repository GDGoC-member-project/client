import { Link } from "react-router-dom";
import type { ProjectCardProps } from "./types";
import ExpandableCard from "@/components/ExpandableCard";
import TeamRoleCapacityIndicator from "@/components/TeamRoleCapacityIndicator";

export default function ProjectCard({ project: p }: ProjectCardProps) {
    return (
        <Link to={`/projects/${p.projectId}`}>
            <ExpandableCard title={p.title} description={p.description}>
                <div className="w-full flex flex-col gap-2">
                    {p.recruitments?.map((r, idx) => (
                        <TeamRoleCapacityIndicator
                            key={`${r.position}-${idx}`}
                            role={r.position ?? "기타"}
                            filled={r.filled ?? 0}
                            max={r.max ?? 0}
                        />
                    ))}
                </div>
            </ExpandableCard>
        </Link>
    );
}
