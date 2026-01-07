/**
 * @deprecated: Use Role in [profile.ts](./profile.ts)
 */
export type MemberRole = "core" | "app" | "frontend" | "backend" | "design" | "ai";

/**
 * @deprecated: Use ProfileResponse or ProfileSummaryResponse in [profile.ts](./profile.ts)
 */
export interface Member {
    id: string;
    name: string;
    role: MemberRole;
    department: string;
    profileImage?: string;
}
