import { Link } from "react-router-dom";
import LogoTyped from "@/components/Logo+Typed";

export default function Header() {
    return (
        <div className="fixed w-full z-999 backdrop-blur-lg">
            <div className="max-w-6xl mx-auto px-4 h-19 py-4 flex items-center justify-between">
                <LogoTyped />
                <Link to="/profile">
                    <div className="size-8 bg-white rounded-full flex items-center justify-center">
                        <div className="size-6 bg-grey-800 rounded-full" />
                    </div>
                </Link>
            </div>
        </div>
    );
}
