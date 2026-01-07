import type { ProfileSummaryResponse } from "@/types/profile";

export type ProfileAvatarVerticalProps = {
    member: ProfileSummaryResponse;
    subtitle?: string;
    size?: ProfileAvatarVerticalSize;
};

export type ProfileAvatarVerticalSize = "DEFAULT" | "COMPACT";
