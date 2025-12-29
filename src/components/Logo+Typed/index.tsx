import GDG from "@/assets/icons/gdg.svg?react";
import { Link } from "react-router-dom";

export default function LogoTyped() {
    return (
        <Link to="/">
            <div className="flex items-center gap-2">
                <GDG height="24" />
                <span className="font-head03-medium">SeoulTech</span>
            </div>
        </Link>
    );
}
