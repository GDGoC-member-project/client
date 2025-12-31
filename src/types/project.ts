export type ProjectMemberRole = "기획" | "디자이너" | "앱 개발자" | "프론트엔드" | "백엔드";

export interface ProjectMember {
    id: string;
    name: string;
    role: ProjectMemberRole;
    profileImage?: string;
    isLeader?: boolean;
}

