import LogoTyped from "@/components/Logo+Typed";
import ActionMenu from "./components/ActionMenu";
import ContinueWithGoogle from "../ContinueWithGoogle";
import { useAuth } from "@/api/auth/AuthProvider";

export default function Header() {
    const { status } = useAuth();

    return (
        <header className="fixed z-999 w-full backdrop-blur-md">
            <div className="mx-auto flex h-19 max-w-6xl items-center justify-between px-4 py-4">
                <LogoTyped />
                {status === "authenticated" ? <ActionMenu /> : <ContinueWithGoogle />}
            </div>
        </header>
    );
}
