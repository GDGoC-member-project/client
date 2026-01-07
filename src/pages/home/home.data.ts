import { fetchProfiles } from "@/api/profiles";

let profilesPromise: Promise<Awaited<ReturnType<typeof fetchProfiles>>> | null = null;

export function getProfilesPromise() {
    if (!profilesPromise) {
        profilesPromise = fetchProfiles();
    }
    return profilesPromise;
}
