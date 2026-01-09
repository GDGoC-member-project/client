import type { ApiResponse } from "@/types/api";
import type { ProfileResponse, ProfileSummaryResponse } from "@/types/profile";

export async function fetchProfiles(): Promise<ProfileSummaryResponse[]> {
    const res = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/profiles`);
    if (!res.ok) throw new Error(`Failed to fetch profiles: ${res.status}`);

    const json = (await res.json()) as ApiResponse<ProfileSummaryResponse[]>;
    return json.data ?? [];
}

export async function fetchProfileMe(): Promise<ProfileResponse> {
    const res = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/profiles/me`, {
        credentials: "include",
    });
    if (!res.ok) throw new Error(`Failed to fetch my profile: ${res.status}`);

    const json = (await res.json()) as ApiResponse<ProfileResponse>;
    if (!json.data) throw new Error("No profile data found for me");
    return json.data;
}
