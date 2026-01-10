import type { MeAccountResponse } from "@/types/auth";

const KEY = "gdgoc_auth_profile_v1";

export function readCachedMe(): MeAccountResponse | null {
    try {
        const raw = localStorage.getItem(KEY);
        if (!raw) return null;
        return JSON.parse(raw) as MeAccountResponse;
    } catch {
        return null;
    }
}

export function writeCachedMe(me: MeAccountResponse) {
    localStorage.setItem(KEY, JSON.stringify(me));
}

export function clearCachedMe() {
    localStorage.removeItem(KEY);
}
