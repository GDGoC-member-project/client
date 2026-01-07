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

export const PartLabelMap: Record<Part, string> = {
    [Part.APP]: "앱 개발",
    [Part.FRONTEND]: "프론트엔드",
    [Part.BACKEND]: "백엔드",
    [Part.AI]: "인공지능",
    [Part.DESIGN]: "디자인",
};

export enum Role {
    LEAD = "LEAD",
    CORE = "CORE",
    MEMBER = "MEMBER",
}

export const RoleLabelMap: Record<Role, string> = {
    [Role.LEAD]: "리드",
    [Role.CORE]: "코어",
    [Role.MEMBER]: "멤버",
};

export enum SocialIcon {
    GITHUB = "GITHUB",
    FIGMA = "FIGMA",
    DRIBBBLE = "DRIBBBLE", // TODO: 비헨스로 바꾸기
    INSTAGRAM = "INSTAGRAM",
    MAIL = "MAIL",
    LINK = "LINK",
}

export const SocialIconLabelMap: Record<SocialIcon, string> = {
    [SocialIcon.GITHUB]: "GitHub",
    [SocialIcon.FIGMA]: "Figma",
    [SocialIcon.DRIBBBLE]: "Dribbble",
    [SocialIcon.INSTAGRAM]: "Instagram",
    [SocialIcon.MAIL]: "Email",
    [SocialIcon.LINK]: "Link",
};

export type SocialLink = {
    icon?: SocialIcon;
    url: string;
};

export type ProfileFilter = { type: "ROLE"; value: Role } | { type: "PART"; value: Part };

export const ProfileFilterItems: { label: string; filter: ProfileFilter }[] = [
    { label: "Core Members", filter: { type: "ROLE", value: Role.CORE } },
    { label: "App", filter: { type: "PART", value: Part.APP } },
    { label: "Frontend", filter: { type: "PART", value: Part.FRONTEND } },
    { label: "Backend", filter: { type: "PART", value: Part.BACKEND } },
    { label: "Design", filter: { type: "PART", value: Part.DESIGN } },
    { label: "AI", filter: { type: "PART", value: Part.AI } },
];

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
