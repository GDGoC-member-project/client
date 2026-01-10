import type { ProfileRequest } from "@/types/profile";
import { Part, Role, SocialIcon } from "@/types/profile";
import * as Yup from "yup";

const fields = {
    name: {
        initial: "",
        schema: Yup.string()
            .trim()
            .required("이름은 필수입니다.")
            .max(50, "이름은 최대 50자까지 입력할 수 있습니다."),
    },

    generation: {
        initial: undefined as ProfileRequest["generation"],
        schema: Yup.number()
            .transform((v, raw) => (raw === "" || raw == null ? undefined : v))
            .integer("기수는 정수여야 합니다.")
            .min(0, "기수는 0 이상이어야 합니다.")
            .optional(),
    },

    part: {
        initial: undefined as ProfileRequest["part"],
        schema: Yup.mixed<Part>().oneOf(Object.values(Part)).required("파트는 필수입니다."),
    },

    role: {
        initial: undefined as ProfileRequest["role"],
        schema: Yup.mixed<Role>().oneOf(Object.values(Role)).required("역할은 필수입니다."),
    },

    department: {
        initial: undefined as ProfileRequest["department"],
        schema: Yup.string()
            .trim()
            .required("학과/소속은 필수입니다.")
            .max(80, "학과/소속은 최대 80자까지 입력할 수 있습니다."),
    },

    bio: {
        initial: undefined as ProfileRequest["bio"],
        schema: Yup.string()
            .trim()
            .max(120, "한 줄 소개는 최대 120자까지 입력할 수 있습니다.")
            .optional(),
    },

    mbti_info: {
        initial: undefined as ProfileRequest["mbti_info"],
        schema: Yup.string()
            .trim()
            .matches(/^[IE][NS][FT][JP]$/i, "올바른 MBTI 형식이 아닙니다. 예: ENTJ")
            .optional(),
    },

    profile_image_url: {
        initial: undefined as ProfileRequest["profile_image_url"],
        schema: Yup.string().trim().url("프로필 이미지 URL 형식이 올바르지 않습니다.").optional(),
    },

    tech_stacks: {
        initial: [] as ProfileRequest["tech_stacks"],
        schema: Yup.array()
            .of(Yup.string().trim().max(30))
            .max(10, "기술 스택은 최대 10개까지 등록할 수 있습니다.")
            .optional(),
    },

    social_links: {
        initial: [] as NonNullable<ProfileRequest["social_links"]>,
        schema: Yup.array()
            .of(
                Yup.object({
                    icon: Yup.mixed<SocialIcon>().oneOf(Object.values(SocialIcon)).optional(),
                    url: Yup.string()
                        .trim()
                        .url("링크 URL 형식이 올바르지 않습니다.")
                        .required("링크 URL은 필수입니다."),
                })
            )
            .max(3, "소셜 링크는 최대 3개까지 등록할 수 있습니다.")
            .optional(),
    },
} as const;

export const createInitialValues = (overrides?: Partial<ProfileRequest>): ProfileRequest => ({
    name: fields.name.initial,
    generation: fields.generation.initial,
    part: fields.part.initial,
    role: fields.role.initial,
    department: fields.department.initial,
    bio: fields.bio.initial,
    mbti_info: fields.mbti_info.initial,
    profile_image_url: fields.profile_image_url.initial,
    tech_stacks: fields.tech_stacks.initial,
    social_links: fields.social_links.initial,
    ...overrides,
});

export const validationSchema = Yup.object(
    Object.fromEntries(Object.entries(fields).map(([k, v]) => [k, v.schema]))
);
