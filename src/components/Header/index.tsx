import LogoTyped from "@/components/Logo+Typed";
import ActionMenu from "./components/ActionMenu";

export default function Header() {
    return (
        <header className="fixed z-999 w-full backdrop-blur-md">
            <div className="mx-auto flex h-19 max-w-6xl items-center justify-between px-4 py-4">
                <LogoTyped />
                <ActionMenu />
            </div>
        </header>
    );
}
