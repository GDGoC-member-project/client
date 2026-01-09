import type { ProfileResponse } from "./profile";

export type OAuthSuccessMessage = {
    type: "oauth_success";
    payload: {
        userId: string;
        externalUid: string;
        email: string;
        role: string;
    };
};

export type MeAccountResponse = {
    userId: string;
    externalUid: string;
    email: string;
    role: string;
};

export type AuthStatus = "unknown" | "authenticated" | "unauthenticated";

export type AuthInfo = {
    status: AuthStatus;
    // me: MeAccountResponse | null;
    profile: ProfileResponse | null;
    refresh: () => Promise<void>;
    logout: () => void;
};
