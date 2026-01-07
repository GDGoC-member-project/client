import type { UUID } from "./common";
import type { IconType } from "@/components/SocialIcon";

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
    APP = "APP",
    FRONTEND = "FRONTEND",
    BACKEND = "BACKEND",
    AI = "AI",
    DESIGN = "DESIGN",
}

export enum Role {
    LEAD = "LEAD",
    CORE = "CORE",
    MEMBER = "MEMBER",
}

export enum SocialIcon {
    GITHUB = "GITHUB",
    FIGMA = "FIGMA",
    DRIBBBLE = "DRIBBBLE",
    INSTAGRAM = "INSTAGRAM",
    MAIL = "MAIL",
    LINK = "LINK",
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
