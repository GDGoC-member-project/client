import type { ProjectRequest } from "@/types/project";
import * as Yup from "yup";

const fields = {
    title: {
        initial: "",
        schema: Yup.string().trim().required("프로젝트 제목은 필수입니다.").max(80),
    },
    description: {
        initial: "",
        schema: Yup.string().trim().max(160).required("프로젝트 설명은 필수입니다."),
    },
    content: {
        initial: "",
        schema: Yup.string().trim().required("상세 설명은 필수입니다."),
    },
    recruitments: {
        initial: [] as ProjectRequest["recruitments"],
        schema: Yup.array()
            .of(
                Yup.object({
                    position: Yup.string().trim().max(50).nullable(),
                    description: Yup.string().trim().max(300).nullable(),
                    filled: Yup.number().min(0).integer().nullable(),
                    max: Yup.number()
                        .min(1, "최대 모집 인원은 1 이상이어야 합니다.")
                        .integer()
                        .nullable(),
                }).test(
                    "filled<=max",
                    "최대 모집 인원은 현재 모집 인원보다 작을 수 없습니다.",
                    (v) => (v?.filled == null || v?.max == null ? true : v.filled <= v.max)
                )
            )
            .nullable(),
    },
    deadline: {
        initial: new Date(),
        schema: Yup.date().required("마감일은 필수입니다."),
    },
} as const;

export const createInitialValues = (overrides?: Partial<ProjectRequest>): ProjectRequest => ({
    title: fields.title.initial,
    description: fields.description.initial,
    content: fields.content.initial,
    recruitments: fields.recruitments.initial,
    deadline: fields.deadline.initial,
    ...overrides,
});

export const validationSchema = Yup.object(
    Object.fromEntries(Object.entries(fields).map(([k, v]) => [k, v.schema]))
);
