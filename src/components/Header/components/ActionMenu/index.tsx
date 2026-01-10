import { cn } from "@/utils/classname";
import { Link } from "react-router-dom";
import LogoutIcon from "@/assets/icons/logout.svg?react";
import EditProfileIcon from "@/assets/icons/edit-profile.svg?react";
import NewProjectButton from "@/assets/icons/file-plus-corner.svg?react";
import ActionButton from "../ActionButton";
import { useAuth } from "@/api/auth/AuthProvider";
import { isEmptyProfile } from "@/api/profiles";

export default function ActionMenu() {
    const { profile, logout } = useAuth();

    return (
        <div className="group relative inline-flex">
            <div
                className={cn(
                    "relative inline-flex h-14 items-center justify-end overflow-hidden rounded-full px-1",
                    "max-w-14",
                    "transition-[max-width,transform,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    "group-hover:bg-grey-900/30 group-hover:max-w-60 group-hover:scale-[1.04] group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.45)]"
                )}
            >
                <div
                    className={cn(
                        "flex items-center gap-2 pr-1",
                        "pointer-events-none opacity-0 translate-x-4 scale-95",
                        "transition-all duration-500 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        "group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100"
                    )}
                >
                    <ActionButton onClick={logout}>
                        <LogoutIcon className="size-4.5 shrink-0 text-white" />
                    </ActionButton>
                    <ActionButton to="/projects/new" ariaLabel="프로젝트 생성">
                        <NewProjectButton className="size-4.5 shrink-0 text-white" />
                    </ActionButton>
                    <ActionButton
                        to={
                            profile && !isEmptyProfile(profile)
                                ? "/profile/edit"
                                : "/profile/create"
                        }
                        ariaLabel="프로필 수정"
                    >
                        <EditProfileIcon className="size-4.5 shrink-0 text-white" />
                    </ActionButton>
                </div>

                <Link
                    to={profile && !isEmptyProfile(profile) ? "/profile" : "/profile/create"}
                    aria-label="프로필"
                    className={cn(
                        "ml-2 z-10 flex size-12 shrink-0 items-center justify-center rounded-full",
                        "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        "group-hover:scale-110 hover:ring hover:ring-grey-300"
                    )}
                >
                    <div className="size-12 rounded-full">
                        {profile?.profile_image_url ? (
                            <img
                                src={profile.profile_image_url}
                                alt="프로필 이미지"
                                className="size-12 rounded-full object-cover"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center rounded-full bg-grey-800 text-2xl font-semibold text-white">
                                {profile?.name ? profile.name.charAt(0) : "?"}
                            </div>
                        )}
                    </div>
                </Link>
            </div>
        </div>
    );
}
