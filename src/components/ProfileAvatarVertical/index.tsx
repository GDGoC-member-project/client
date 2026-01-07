import type { ProfileAvatarVerticalProps } from "./types";

export default function ProfileAvatarVertical({
    member,
    subtitle,
    size = "DEFAULT",
}: ProfileAvatarVerticalProps) {
    return (
        <div className={`flex flex-col items-center ${size === "COMPACT" ? "gap-3" : "gap-2"}`}>
            <div
                className={`rounded-full flex items-center justify-center overflow-hidden ${
                    size === "COMPACT" ? "size-24" : "size-27.5"
                }`}
            >
                {member.profile_image_url ? (
                    <img
                        src={member.profile_image_url}
                        alt={member.name}
                        className="size-full object-cover"
                    />
                ) : (
                    <div className="size-full bg-grey-900" />
                )}
            </div>
            <div className="flex flex-col items-center gap-0.5">
                <p
                    className={`${
                        size === "COMPACT" ? "font-body02-medium" : "font-head03-medium"
                    }`}
                >
                    {member.name}
                </p>
                <p className="font-body03-regular text-grey-200">{subtitle}</p>
            </div>
        </div>
    );
}
