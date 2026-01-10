import type { ApiResponse } from "@/types/api";
import type { OAuthSuccessMessage, MeAccountResponse } from "@/types/auth";
import { writeCachedMe } from "./storage";

const API_BASE = "https://gdgoc2026.duckdns.org";
const ALLOWED_ORIGINS = new Set(["https://gdgoc2026.duckdns.org"]);

export function openGoogleLoginPopup() {
    const width = 480;
    const height = 620;

    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    const authUrl = `${API_BASE}/api/v1/auth/login`;

    const popup = window.open(
        authUrl,
        "google-oauth",
        `width=${width},height=${height},left=${left},top=${top},
         resizable=no,scrollbars=yes,status=no`
    );

    if (!popup) {
        window.location.href = authUrl;
        return;
    }

    const handler = async (event: MessageEvent) => {
        try {
            if (!ALLOWED_ORIGINS.has(event.origin)) return;

            const data = event.data as OAuthSuccessMessage | undefined;
            if (!data || data.type !== "oauth_success") return;

            window.removeEventListener("message", handler);

            await fetchMe();

            window.location.reload();
        } catch (err) {}
    };

    window.addEventListener("message", handler);
}

export function listenGoogleLoginPopup(
    onSuccess: (payload: OAuthSuccessMessage["payload"]) => void
) {
    function handler(event: MessageEvent) {
        if (!ALLOWED_ORIGINS.has(event.origin)) return;

        const data = event.data as OAuthSuccessMessage | undefined;
        if (!data || data.type !== "oauth_success") return;

        onSuccess(data.payload);

        window.removeEventListener("message", handler);
    }

    window.addEventListener("message", handler);
}

export async function fetchMe(signal?: AbortSignal): Promise<MeAccountResponse> {
    const res = await fetch(`${API_BASE}/api/v1/me/account`, {
        method: "GET",
        credentials: "include",
        headers: {
            Accept: "application/json",
        },
        signal,
    });

    if (!res.ok) {
        throw new Error(`ME_FAILED_${res.status}`);
    }

    const data = (await res.json()) as ApiResponse<MeAccountResponse>;

    writeCachedMe(data.data);

    return data.data;
}
