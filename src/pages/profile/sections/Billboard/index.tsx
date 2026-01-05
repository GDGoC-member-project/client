import ContentBillboard from "@/components/ContentBillboard";
import type { Profile } from "@/types/profile";
import SocialLinks from "./components/SocialLinks";

interface ProfileBillboardProps {
    profile: Profile;
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
                            <SocialLinks links={profile.links} />
                        </div>
                    )}
                </div>
            </div>
        </ContentBillboard>
    );
}
