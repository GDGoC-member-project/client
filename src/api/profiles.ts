import type { ProfileRequest } from "./../types/profile";
import type { ApiResponse } from "@/types/api";
import type { UUID } from "@/types/common";
import type {
    ProfileImageUploadResponse,
    ProfileResponse,
    ProfileSummaryResponse,
} from "@/types/profile";

export async function fetchProfiles(): Promise<ProfileSummaryResponse[]> {
    const res = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/profiles`);
    if (!res.ok) throw new Error(`Failed to fetch profiles: ${res.status}`);

    const json = (await res.json()) as ApiResponse<ProfileSummaryResponse[]>;
    return json.data ?? [];
}

export async function fetchProfileById(userId: UUID): Promise<ProfileResponse> {
    const res = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/profiles/${userId}`);
    if (!res.ok) throw new Error(`Failed to fetch profile by ID: ${res.status}`);

    const json = (await res.json()) as ApiResponse<ProfileResponse>;
    if (!json.data) throw new Error("No profile data found for the given ID");
    return json.data;
}

export async function fetchProfileMe(): Promise<ProfileResponse> {
    const res = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/profiles/me`, {
        credentials: "include",
    });
    if (!res.ok) throw new Error(`Failed to fetch my profile: ${res.status}`);

    const json = (await res.json()) as ApiResponse<ProfileResponse>;
    if (!json.data) throw new Error("No profile data found for me");
    return json.data;
}

export async function createProfile(payload: ProfileRequest): Promise<ProfileResponse> {
    const res = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/profiles/me`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Failed to create profile: ${res.status}`);

    const json = (await res.json()) as ApiResponse<ProfileResponse>;
    if (!json.data) throw new Error("No profile data found after creation");
    return json.data;
}

export async function updateProfile(payload: ProfileRequest): Promise<ProfileResponse> {
    const res = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/profiles/me`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Failed to update profile: ${res.status}`);

    const json = (await res.json()) as ApiResponse<ProfileResponse>;
    if (!json.data) throw new Error("No profile data found after update");
    return json.data;
}

export async function uploadProfileImage(file: File): Promise<string> {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/profiles/upload_image`,
        {
            method: "POST",
            credentials: "include",
            body: formData,
        }
    );
    if (!res.ok) throw new Error(`Failed to upload profile image: ${res.status}`);

    const json = (await res.json()) as ApiResponse<ProfileImageUploadResponse>;
    if (!json.data) throw new Error("No data found after profile image upload");
    return json.data.profile_image_url;
}
