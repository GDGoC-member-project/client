import type { IconType } from "@/components/SocialIcon";
import type { UUID } from "./common";

type ProfileBase = {
    name: string;
    generation?: number;
    part?: Part;
    role?: Role;
    department?: string;
    bio?: string;
    profile_image_url?: string;
};

type ProfileDetail = {
    mbti_info?: string;
    tech_stacks?: string[];
    social_links?: SocialLink[];
};

type ProfileIdentity = {
    user_id: UUID;
};

export type ProfileRequest = ProfileBase & ProfileDetail;

export type ProfileSummaryResponse = ProfileIdentity & ProfileBase;

export type ProfileResponse = ProfileIdentity & ProfileBase & ProfileDetail;

export enum Part {
    APP = "App",
    FRONTEND = "Frontend",
    BACKEND = "Backend",
    AI = "AI",
    DESIGN = "Design",
}

export enum Role {
    LEAD = "리드",
    CORE = "코어",
    MEMBER = "멤버",
}

export enum SocialIcon {
    GITHUB = "GitHub",
    FIGMA = "Figma",
    DRIBBBLE = "Dribbble", // TODO: 비헨스로 바꾸기
    INSTAGRAM = "Instagram",
    MAIL = "Mail",
    LINK = "Link",
}

export type SocialLink = {
    icon?: SocialIcon;
    url: string;
};

/**
 * @deprecated: Use SocialLink and SocialIcon
 */
export interface ProfileLink {
    id: string;
    type: IconType;
    url: string;
}

export interface ProfileCard {
    id: string;
    title: string;
    description: string;
    url?: string;
}

/**
 * @deprecated: Use ProfileResponse
 */
export interface Profile {
    id: string;
    name: string;
    aboutMe: string;
    position: string;
    generation: string;
    role: string;
    skills: string[];
    mbti?: string;
    profileImage?: string;
    backgroundImage?: string;
    links: ProfileLink[];
    cards: ProfileCard[];
    uploadedFiles?: string[];
}
