import type { ApiResponse } from "@/types/api";
import type { UUID } from "@/types/common";
import type {
    CreateOrUpdateProjectResponse,
    ProjectRequest,
    ProjectResponse,
    ProjectSummaryResponse,
} from "@/types/project";

export async function fetchProjects() {
    const res = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/projects`);

    if (!res.ok) {
        throw new Error("Failed to fetch projects");
    }

    const json = (await res.json()) as ApiResponse<ProjectSummaryResponse[]>;
    return json.data ?? [];
}

export async function fetchProjectById(projectId: UUID) {
    const res = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/projects/${projectId}`);

    if (!res.ok) {
        throw new Error("Failed to fetch project");
    }

    const json = (await res.json()) as ApiResponse<ProjectResponse>;
    return json.data;
}

export async function createProject(payload: ProjectRequest) {
    const res = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/projects`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
    });

    if (!res.ok) {
        throw new Error("Failed to create project");
    }

    const json = (await res.json()) as ApiResponse<CreateOrUpdateProjectResponse>;

    return json.data;
}

export async function updateProject(projectId: UUID, payload: ProjectRequest) {
    const res = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/projects/${projectId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
    });

    if (!res.ok) {
        throw new Error("Failed to update project");
    }

    const json = (await res.json()) as ApiResponse<CreateOrUpdateProjectResponse>;

    return json.data;
}

export async function deleteProject(projectId: UUID) {
    const res = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/projects/${projectId}`, {
        method: "DELETE",
        credentials: "include",
    });

    if (!res.ok) {
        throw new Error("Failed to delete project");
    }
}
