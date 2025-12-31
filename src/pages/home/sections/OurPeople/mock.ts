import type { Member } from "@/types/people";

export const MOCK_MEMBERS: Member[] = Array.from({ length: 11 }).map((_, idx) => ({
    id: crypto.randomUUID(),
    name: "김구글",
    role: (["core", "app", "frontend", "backend", "design", "ai"] as const)[idx % 6],
    department: "인공지능응용학과",
}));
