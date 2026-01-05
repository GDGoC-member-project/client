import { Link } from "react-router-dom";
import type { Profile } from "@/types/profile";

interface ProfileHeaderProps {
    profile: Profile;
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
    return (
        <div className="relative w-full bg-black">
            <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 flex flex-col sm:flex-row gap-8">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <span className="font-body04-medium text-grey-300">&lt;&gt; Members</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="size-16 bg-white rounded-full flex items-center justify-center">
                            {profile.profileImage ? (
                                <img
                                    src={profile.profileImage}
                                    alt={profile.name}
                                    className="w-full h-full rounded-full object-cover"
                                />
                            ) : (
                                <div className="size-12 bg-grey-800 rounded-full" />
                            )}
                        </div>
                        <div className="size-32 bg-white rounded-full flex items-center justify-center">
                            {profile.profileImage ? (
                                <img
                                    src={profile.profileImage}
                                    alt={profile.name}
                                    className="w-full h-full rounded-full object-cover"
                                />
                            ) : (
                                <div className="size-24 bg-grey-800 rounded-full" />
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="font-title03-medium">{profile.name}</h1>
                            <p className="font-body03-regular text-grey-300">
                                {profile.generation} {profile.role} | {profile.position}
                            </p>
                            <p className="font-body03-regular">{profile.aboutMe}</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 relative min-h-96">
                    {profile.backgroundImage ? (
                        <img
                            src={profile.backgroundImage}
                            alt="background"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-orange-500 via-red-500 via-purple-500 to-blue-500 opacity-50" />
                    )}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-32 bg-white rounded-full flex items-center justify-center">
                        {profile.profileImage ? (
                            <img
                                src={profile.profileImage}
                                alt={profile.name}
                                className="w-full h-full rounded-full object-cover"
                            />
                        ) : (
                            <div className="size-24 bg-grey-800 rounded-full" />
                        )}
                    </div>
                    <div className="absolute bottom-4 right-4 flex gap-2">
                        <button className="size-8 bg-grey-800 rounded-full flex items-center justify-center">
                            <div className="size-4 bg-grey-300 rounded-full" />
                        </button>
                        <Link
                            to="/profile/edit"
                            className="size-8 bg-grey-800 rounded-full flex items-center justify-center"
                        >
                            <div className="size-4 bg-grey-300 rounded-full" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
