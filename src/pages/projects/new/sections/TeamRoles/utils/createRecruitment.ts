import type { ProjectRecruitment } from "@/types/project";

let nextId = 0;
export const createRecruitment = (): ProjectRecruitment & { uniqueId: number } => ({
    position: "",
    description: "",
    filled: 0,
    max: null as number | null,
    uniqueId: nextId++,
});
