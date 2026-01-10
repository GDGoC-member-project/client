import { fetchProfileById } from "@/api/profiles";
import type { ProfileResponse } from "@/types/profile";

const promiseCache = new Map<string, Promise<ProfileResponse>>();

export function getProfilePromise(userId: string) {
    if (!promiseCache.has(userId)) {
        promiseCache.set(userId, fetchProfileById(userId));
    }
    return promiseCache.get(userId)!;
}

export function invalidateProfile(userId: string) {
    promiseCache.delete(userId);
}
