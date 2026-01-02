export type ProjectMemberRole = "기획" | "디자이너" | "앱 개발자" | "프론트엔드" | "백엔드";

export interface ProjectMember {
    id: string;
    name: string;
    role: ProjectMemberRole;
    profileImage?: string;
    isLeader?: boolean;
}

export type ProjectRequest = {
    title: string;
    description?: string | null;
    externalUrl?: string | null;
    content: string;
    recruitments?: ProjectRecruitment[];
    deadline?: Date | null;
    startDate?: Date | null;
    endDate?: Date | null;
};

export type ProjectRecruitment = {
    position?: string | null;
    description?: string | null;
    filled?: number | null;
    max?: number | null;
};
