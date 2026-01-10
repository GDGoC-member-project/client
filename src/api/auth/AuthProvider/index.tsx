import React from "react";
import type { AuthInfo, AuthStatus } from "@/types/auth";
import { fetchMe } from "../login";
import type { ProfileResponse } from "@/types/profile";
import { fetchProfileMe } from "@/api/profiles";
import { logoutServer } from "../logout";
import { clearCachedMe } from "../storage";

const AuthContext = React.createContext<AuthInfo | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [status, setStatus] = React.useState<AuthStatus>("unknown");
    const [profile, setProfile] = React.useState<ProfileResponse | null>(null);

    async function refresh() {
        const controller = new AbortController();

        try {
            await fetchMe(controller.signal);
            setStatus("authenticated");
        } catch {
            clearCachedMe();
            setStatus("unauthenticated");
        }
    }

    function logout() {
        logoutServer();
        clearCachedMe();
        setStatus("unauthenticated");
        window.location.replace("/");
    }

    React.useEffect(() => {
        refresh();
        fetchProfileMe()
            .then(setProfile)
            .catch(() => setProfile(null));
    }, []);

    const value: AuthInfo = {
        status,
        profile,
        refresh,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const ctx = React.useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
    return ctx;
}
