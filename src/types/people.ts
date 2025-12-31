export type MemberRole = "core" | "app" | "frontend" | "backend" | "design" | "ai";

export interface Member {
    id: string;
    name: string;
    role: MemberRole;
    department: string;
    profileImage?: string;
}

