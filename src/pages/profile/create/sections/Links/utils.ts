import { type SocialLink } from "@/types/profile";

let uid = 1;

export function createSocialLink(): SocialLink & { uniqueId: number } {
    return {
        uniqueId: uid++,
        icon: undefined,
        url: "",
    };
}

export function isFilledSocialLinkField(v: SocialLink | null | undefined) {
    const url = v?.url?.trim() ?? "";
    return url.length > 0;
}
