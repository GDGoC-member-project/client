import { fetchProjects } from "@/api/projects";
import type { ProjectSummaryResponse } from "@/types/project";

let promise: Promise<ProjectSummaryResponse[]> | null = null;

export function getProjectsPromise() {
    if (!promise) promise = fetchProjects();
    return promise;
}

export function invalidateProjects() {
    promise = null;
}
