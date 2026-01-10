import { fetchProjectById } from "@/api/projects";
import type { ProjectResponse } from "@/types/project";

const promiseCache = new Map<string, Promise<ProjectResponse>>();

export function getProjectPromise(projectId: string) {
    if (!promiseCache.has(projectId)) {
        promiseCache.set(projectId, fetchProjectById(projectId));
    }
    return promiseCache.get(projectId)!;
}

export function invalidateProject(projectId: string) {
    promiseCache.delete(projectId);
}
