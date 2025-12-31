import type { ProjectMember } from "@/types/project";

export const MOCK_PROJECT_MEMBERS: ProjectMember[] = [
    {
        id: crypto.randomUUID(),
        name: "김구글",
        role: "기획",
    },
    {
        id: crypto.randomUUID(),
        name: "김구글",
        role: "디자이너",
    },
    {
        id: crypto.randomUUID(),
        name: "김구글",
        role: "앱 개발자",
        isLeader: true,
    },
];

