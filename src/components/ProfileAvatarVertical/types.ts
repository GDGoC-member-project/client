import type { Member } from "@/types/people";
import type { ProjectMember } from "@/types/project";

export type ProfileAvatarVerticalProps = {
    member: Member | ProjectMember; // TODO: 타입 통일하기
    subtitle?: string;
    size?: ProfileAvatarVerticalSize;
};

export type ProfileAvatarVerticalSize = "DEFAULT" | "COMPACT";
