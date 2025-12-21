import { Outlet } from "react-router-dom";
import Header from "@/components/Header";

export default function Layout() {
    return (
        <>
            <Header />
            <div className="max-w-6xl mx-auto px-4 pt-16 h-screen">
                <main className="overflow-x-hidden h-full pb-8">
                    <Outlet />
                </main>
            </div>
        </>
    );
}
