import { Link } from "react-router-dom";
import LogoTyped from "@/components/Logo+Typed";
import LogoutIcon from "@/assets/icons/logout.svg?react";
import EditProfileIcon from "@/assets/icons/edit-profile.svg?react";
import { cn } from "@/utils/classname";

const iconBtn =
    "size-12 rounded-full grid place-items-center text-grey-300 cursor-pointer hover:text-white hover:scale-110 hover:ring hover:ring-grey-300 transition-all";

export default function Header() {
    return (
        <header className="fixed z-999 w-full backdrop-blur-md">
            <div className="mx-auto flex h-19 max-w-6xl items-center justify-between px-4 py-4">
                <LogoTyped />

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
                                "flex items-center gap-1 pr-1",
                                "pointer-events-none opacity-0 translate-x-4 scale-95",
                                "transition-all duration-500 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
                                "group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100"
                            )}
                        >
                            <button
                                type="button"
                                aria-label="로그아웃"
                                onClick={() => {}}
                                className={iconBtn}
                            >
                                <LogoutIcon className="size-5 shrink-0 text-white" />
                            </button>

                            <Link to="/profile/edit" aria-label="프로필 수정" className={iconBtn}>
                                <EditProfileIcon className="size-5 shrink-0 text-white" />
                            </Link>
                        </div>

                        <Link
                            to="/profile"
                            aria-label="프로필"
                            className={cn(
                                "ml-1 z-10 flex size-12 shrink-0 items-center justify-center rounded-full",
                                "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                                "group-hover:scale-110 hover:ring hover:ring-grey-300"
                            )}
                        >
                            <div className="size-12 rounded-full bg-grey-900" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
