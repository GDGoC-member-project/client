import { ICON_REGISTRY, type IconType } from "./registry";
import { HelpCircleIcon } from "lucide-react";

type Props = {
    type: IconType;
    className?: string;
};

export function IconProvider({ type, className }: Props) {
    const Icon = ICON_REGISTRY[type] ?? HelpCircleIcon;

    return <Icon className={["size-4 text-white", className].filter(Boolean).join(" ")} />;
}
