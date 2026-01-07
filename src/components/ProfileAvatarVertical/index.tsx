import { Link } from "react-router-dom";
import type { ProfileAvatarVerticalProps } from "./types";
import { cn } from "@/utils/classname";

export default function ProfileAvatarVertical({
    member,
    subtitle,
    size = "DEFAULT",
}: ProfileAvatarVerticalProps) {
    const isCompact = size === "COMPACT";

    return (
        <Link
            to={`/profiles/${member.user_id}`}
            className={cn(
                "group flex flex-col items-center focus:outline-none",
                isCompact ? "gap-3" : "gap-2"
            )}
            aria-label={`${member.name} 프로필 보기`}
        >
            <div
                className={cn(
                    "relative rounded-full flex items-center justify-center overflow-hidden",
                    "transition-transform duration-300 ease-out",
                    "group-hover:scale-[1.05]",
                    "group-focus-visible:ring-2 group-focus-visible:ring-grey-300",
                    isCompact ? "size-24" : "size-27.5"
                )}
            >
                {member.profile_image_url ? (
                    <img
                        src={member.profile_image_url}
                        alt={member.name}
                        className="size-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                    />
                ) : (
                    <div className="size-full bg-grey-900" />
                )}
            </div>

            <div className="flex flex-col items-center gap-0.5">
                <p
                    className={cn(
                        "transition-colors",
                        isCompact ? "font-body02-medium" : "font-head03-medium",
                        "group-hover:text-white"
                    )}
                >
                    {member.name}
                </p>
                <p className="font-body03-regular text-grey-200 group-hover:text-grey-100 transition-colors">
                    {subtitle}
                </p>
            </div>
        </Link>
    );
}
