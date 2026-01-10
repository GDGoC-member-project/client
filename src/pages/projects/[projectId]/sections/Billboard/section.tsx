import TeamRoleCapacityIndicator from "@/components/TeamRoleCapacityIndicator";
import type { BillboardSectionProps } from "./types";

export default function BillboardSection({ project }: BillboardSectionProps) {
    return (
        <div className="w-full max-w-lg flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <h1 className="font-title03-medium">{project.title}</h1>
                <h2 className="font-body01-regular">{project.description}</h2>
            </div>

            <div className="w-full flex flex-col gap-2">
                {project.recruitments?.map((r) => (
                    <TeamRoleCapacityIndicator
                        key={r.position}
                        role={r.position ?? "기타"}
                        filled={r.filled ?? 0}
                        max={r.max ?? 0}
                    />
                ))}
            </div>
        </div>
    );
}
