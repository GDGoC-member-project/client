import type { ApiResponse } from "@/types/api";
import type { ProfileSummaryResponse } from "@/types/profile";

export async function fetchProfiles(): Promise<ProfileSummaryResponse[]> {
    const res = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/profiles`);
    if (!res.ok) throw new Error(`Failed to fetch profiles: ${res.status}`);

    const json = (await res.json()) as ApiResponse<ProfileSummaryResponse[]>;
    return json.data ?? [];
}
