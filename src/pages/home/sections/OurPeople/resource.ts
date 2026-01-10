import { fetchProfiles } from "@/api/profiles";
import type { ProfileSummaryResponse } from "@/types/profile";

let promise: Promise<ProfileSummaryResponse[]> | null = null;

export function getProfilesPromise() {
    if (!promise) promise = fetchProfiles();
    return promise;
}

export function invalidateProfiles() {
    promise = null;
}
