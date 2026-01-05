import { IconProvider } from "@/components/SocialIcon";
import type { SocialLinksProps } from "./types";
import { IconButton } from "@/components/IconButton";

export default function SocialLinks({ links }: SocialLinksProps) {
    if (links.length === 0) return null;

    return (
        <div className="flex gap-3">
            {links.map((link) => {
                const icon = <IconProvider type={link.type} className="size-4 text-white" />;

                if (!icon) return null;

                return (
                    <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
                        <IconButton label={link.type} icon={icon} />
                    </a>
                );
            })}
        </div>
    );
}
