import { Link } from "react-router-dom";
import LogoTyped from "@/components/Logo+Typed";
import LogoutIcon from "@/assets/icons/logout.svg?react";
import EditProfileIcon from "@/assets/icons/edit-profile.svg?react";

export default function Header() {
    return (
        <div className="fixed w-full z-999 backdrop-blur-lg">
            <div className="max-w-6xl mx-auto px-4 h-19 py-4 flex items-center justify-between">
                <LogoTyped />
                <div className="flex items-center gap-2 bg-grey-800 rounded-full px-2 py-2">
                    <button
                        className="group flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-grey-700 transition-all overflow-hidden"
                    >
                        <LogoutIcon className="size-4 text-grey-300 flex-shrink-0" />
                        <span className="font-body03-medium whitespace-nowrap max-w-0 group-hover:max-w-32 opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                            로그아웃
                        </span>
                    </button>
                    <Link
                        to="/profile/edit"
                        className="group flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-grey-700 transition-all overflow-hidden"
                    >
                        <EditProfileIcon className="size-4 text-grey-300 flex-shrink-0" />
                        <span className="font-body03-medium whitespace-nowrap max-w-0 group-hover:max-w-32 opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                            프로필 수정
                        </span>
                    </Link>
                    <Link
                        to="/profile"
                        className="size-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 hover:ring-2 hover:ring-grey-300 transition-all"
                    >
                        <div className="size-6 bg-grey-800 rounded-full" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
