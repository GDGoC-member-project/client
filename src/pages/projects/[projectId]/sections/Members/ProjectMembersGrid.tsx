import type { ProjectMember } from "@/types/project";
import ProfileAvatarVertical from "@/components/ProfileAvatarVertical";

interface ProjectMembersGridProps {
    members: ProjectMember[];
}

export default function ProjectMembersGrid({ members }: ProjectMembersGridProps) {
    return (
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
            {members.map((member) => (
                <ProfileAvatarVertical
                    key={member.id}
                    member={member}
                    subtitle={member.role}
                    size="COMPACT"
                />
            ))}
        </div>
    );
}
