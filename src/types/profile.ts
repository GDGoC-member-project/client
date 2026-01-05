import type { IconType } from "@/components/SocialIcon";

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
