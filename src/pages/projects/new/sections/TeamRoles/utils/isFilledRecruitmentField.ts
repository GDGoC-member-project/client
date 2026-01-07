import type { ProjectRecruitment } from "@/types/project";

export const isFilledRecruitmentField = (r: ProjectRecruitment) => {
    const positionEmpty = !r.position?.trim();
    const descriptionEmpty = !r.description?.trim();
    const maxEmpty = r.max == null;
    return positionEmpty || descriptionEmpty || maxEmpty;
};
