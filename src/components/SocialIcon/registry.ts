import InstagramIcon from "@/assets/icons/instagram.svg?react";
import GithubIcon from "@/assets/icons/github.svg?react";
import MailIcon from "@/assets/icons/mail.svg?react";

import type { ComponentType } from "react";
import type { SocialIcon } from "@/types/profile";

export type IconComponent = ComponentType<{ className?: string }>;

export const ICON_REGISTRY: Partial<Record<SocialIcon, IconComponent>> = {
    GITHUB: GithubIcon,
    MAIL: MailIcon,
    INSTAGRAM: InstagramIcon,
};
