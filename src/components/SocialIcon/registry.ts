import InstagramIcon from "@/assets/icons/instagram.svg?react";
import GithubIcon from "@/assets/icons/github.svg?react";
import MailIcon from "@/assets/icons/mail.svg?react";

import type { ComponentType } from "react";

export type IconType = "github" | "email" | "instagram" | "blog" | "portfolio";

export type IconComponent = ComponentType<{ className?: string }>;

export const ICON_REGISTRY: Partial<Record<IconType, IconComponent>> = {
    github: GithubIcon,
    email: MailIcon,
    instagram: InstagramIcon,
};
