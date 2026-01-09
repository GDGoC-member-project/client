import type { UUID } from "./common";
import type { ProfileSummaryResponse } from "./profile";

export type ProjectMemberRole = "기획" | "디자이너" | "앱 개발자" | "프론트엔드" | "백엔드";

export type ProjectMember = ProfileSummaryResponse & {
    isLeader?: boolean;
};

type ProjectBase = {
    title: string;
    description?: string | null;
    recruitments?: ProjectRecruitment[];
    deadline?: Date | null;
};

type ProjectDetail = {
    content?: string;
    externalUrl?: string | null;
};

type ProjectIdentity = {
    projectId: UUID;
};

export type ProjectRecruitment = {
    position?: string | null;
    description?: string | null;
    filled?: number | null;
    max?: number | null;
};

export type ProjectSummaryResponse = ProjectIdentity & ProjectBase;

export type ProjectResponse = ProjectIdentity & ProjectBase & ProjectDetail;

export type ProjectRequest = ProjectBase & ProjectDetail;

export type CreateOrUpdateProjectResponse = {
    data: string;
};
