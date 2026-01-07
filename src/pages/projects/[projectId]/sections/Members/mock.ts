import { Role } from "@/types/profile";
import type { ProjectMember } from "@/types/project";

export const MOCK_PROJECT_MEMBERS: ProjectMember[] = [
    {
        user_id: crypto.randomUUID(),
        name: "김구글",
        role: Role.MEMBER,
    },
    {
        user_id: crypto.randomUUID(),
        name: "김구글",
        role: Role.MEMBER,
    },
    {
        user_id: crypto.randomUUID(),
        name: "김구글",
        role: Role.MEMBER,
        isLeader: true,
    },
];
