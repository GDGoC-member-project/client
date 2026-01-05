import GithubIcon from "@/assets/icons/github.svg?react";
import InstagramIcon from "@/assets/icons/instagram.svg?react";
import MailIcon from "@/assets/icons/mail.svg?react";
import ContentBillboard from "@/components/ContentBillboard";
import type { Profile } from "@/types/profile";

interface ProfileBillboardProps {
    profile: Profile;
}

interface LinkIconProps {
    type: Profile["links"][number]["type"];
}

function LinkIcon({ type }: LinkIconProps) {
    switch (type) {
        case "github":
            return <GithubIcon className="size-5 text-white" />;
        case "email":
            return <MailIcon className="size-5 text-white" />;
        case "instagram":
            return <InstagramIcon className="size-5 text-white" />;
        case "blog":
        case "portfolio":
        default:
            return null;
    }
}

export default function ProfileBillboard({ profile }: ProfileBillboardProps) {
    return (
        <ContentBillboard>
            <div className="w-full flex flex-col gap-3">
                <div className="rounded-full flex items-center justify-center overflow-hidden size-37.5">
                    {profile.profileImage ? (
                        <img
                            src={profile.profileImage}
                            alt={profile.name}
                            className="size-full object-cover"
                        />
                    ) : (
                        <div className="size-full bg-grey-900" />
                    )}
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="font-title01-medium">{profile.name}</h1>
                    <p className="font-body01-medium">
                        {profile.generation} | {profile.role} | {profile.position}
                    </p>
                    {profile.aboutMe && (
                        <div className="flex items-start justify-between gap-8">
                            <p className="font-body01-regular text-grey-300">{profile.aboutMe}</p>
                            {profile.links.length > 0 && (
                                <div className="flex flex-row gap-3">
                                    {profile.links
                                        .filter(
                                            (link) =>
                                                link.type === "github" ||
                                                link.type === "email" ||
                                                link.type === "instagram"
                                        )
                                        .map((link) => (
                                            <a
                                                key={link.id}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="size-9 bg-grey-900 rounded-full flex items-center justify-center hover:bg-grey-800 transition-colors"
                                            >
                                                <LinkIcon type={link.type} />
                                            </a>
                                        ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </ContentBillboard>
    );
}
