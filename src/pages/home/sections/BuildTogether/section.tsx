import ExpandableCard from "@/components/ExpandableCard";
import TeamRoleCapacityIndicator from "@/components/TeamRoleCapacityIndicator";
import { Link } from "react-router-dom";
import type { BuildTogetherSectionProps } from "./types";

export default function BuildTogetherSection({ projects }: BuildTogetherSectionProps) {
    const left = projects.filter((_, i) => i % 2 === 0);
    const right = projects.filter((_, i) => i % 2 === 1);

    return (
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-center">
            <div className="w-full sm:w-100 flex flex-col gap-6">
                {left.map((p) => (
                    <Link to={`/projects/${p.projectId}`} key={p.projectId}>
                        <ExpandableCard title={p.title} description={p.description}>
                            <div className="w-full flex flex-col gap-2">
                                {p.recruitments &&
                                    p.recruitments.map((r, idx) => (
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
                ))}
            </div>

            <div className="w-full sm:w-100 flex flex-col gap-6">
                {right.map((p) => (
                    <Link to={`/projects/${p.projectId}`} key={p.projectId}>
                        <ExpandableCard title={p.title} description={p.description}>
                            <div className="w-full flex flex-col gap-2">
                                {p.recruitments &&
                                    p.recruitments.map((r, idx) => (
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
                ))}
            </div>
        </div>
    );
}
