import type { ProfileFilter, ProfileSummaryResponse } from "@/types/profile";

export function applyFilter(profiles: ProfileSummaryResponse[], filter: ProfileFilter) {
    if (filter.type === "ROLE") return profiles.filter((p) => p.role === filter.value);
    return profiles.filter((p) => p.part === filter.value);
}
