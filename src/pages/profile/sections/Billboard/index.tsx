import ContentBillboard from "@/components/ContentBillboard";
import type { ProfileBillboardProps } from "./types";
import SocialLinks from "./components/SocialLinks";
import { PartLabelMap, RoleLabelMap } from "@/types/profile";

export default function ProfileBillboard({ profile }: ProfileBillboardProps) {
    return (
        <ContentBillboard>
            <div className="w-full flex flex-col gap-4">
                <div className="rounded-full flex items-center justify-center overflow-hidden size-37.5">
                    {profile.profile_image_url ? (
                        <img
                            src={profile.profile_image_url}
                            alt={profile.name}
                            className="size-full object-cover"
                        />
                    ) : (
                        <div className="size-full bg-grey-900" />
                    )}
                </div>
                <h1 className="font-title01-medium">{profile.name}</h1>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 font-body01-medium">
                        {profile.generation && (
                            <>
                                <span>{profile.generation}기</span>{" "}
                                <div className="w-px h-5 bg-white" />
                            </>
                        )}
                        {profile.role && (
                            <>
                                <span>{RoleLabelMap[profile.role]}</span>{" "}
                                <div className="w-px h-5 bg-white" />
                            </>
                        )}
                        {profile.part && <span>{PartLabelMap[profile.part]}</span>}
                    </div>
                    <div className="flex justify-between">
                        <p className="font-body01-regular">{profile.bio}</p>
                        {profile.social_links && <SocialLinks links={profile.social_links} />}
                    </div>
                </div>
            </div>
        </ContentBillboard>
    );
}
