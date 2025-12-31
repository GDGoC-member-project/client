import type { ProjectMember } from "@/types/project";
import ProjectMemberCard from "./ProjectMemberCard";

interface ProjectMembersGridProps {
    members: ProjectMember[];
}

export default function ProjectMembersGrid({ members }: ProjectMembersGridProps) {
    return (
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
            {members.map((member) => (
                <ProjectMemberCard key={member.id} member={member} />
            ))}
        </div>
    );
}

