import type { SocialIcon } from "@/types/profile";
import { ICON_REGISTRY } from "./registry";
import { HelpCircleIcon } from "lucide-react";

type Props = {
    type: SocialIcon;
    className?: string;
};

export function IconProvider({ type, className }: Props) {
    const Icon = ICON_REGISTRY[type] ?? HelpCircleIcon;

    return <Icon className={["size-4 text-white", className].filter(Boolean).join(" ")} />;
}
