import GDG from "@/assets/icons/gdg.svg?react";
import { Link } from "react-router-dom";

export default function LogoTyped() {
    // TODO: 텍스 넣기!!!!
    return (
        <Link to="/">
            <div className="flex items-center gap-2">
                <GDG height="24" />
                <span className="font-medium text-[22px] tracking-tight">SeoulTech</span>
            </div>
        </Link>
    );
}
