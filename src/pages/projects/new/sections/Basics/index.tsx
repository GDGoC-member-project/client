import TextInput from "@/components/FormKit/TextInput";
import type { FormSectionProps } from "@/components/FormKit/types";
import type { ProjectRequest } from "@/types/project";

export default function Basics({ touched, errors }: FormSectionProps<ProjectRequest>) {
    return (
        <section className="flex flex-col gap-6">
            <p className="font-head02-medium">기본 정보</p>

            <TextInput
                label="프로젝트 이름"
                name="title"
                placeholder="제목을 입력해 주세요"
                error={touched.title ? errors.title : undefined}
                required
            />

            <TextInput
                label="한 줄 소개"
                name="description"
                placeholder="프로젝트를 짧게 소개해 주세요"
                error={touched.description ? errors.description : undefined}
                required
            />

            <TextInput
                label="모집 마감일"
                name="deadline"
                placeholder="마감일을 선택해 주세요"
                type="datetime-local"
                error={touched.deadline ? errors.deadline : undefined}
                required
            />

            <TextInput
                label="외부 URL"
                name="externalUrl"
                placeholder="프로젝트를 더 잘 이해할 수 있는 외부 링크를 입력해주세요."
                error={touched.externalUrl ? errors.externalUrl : undefined}
                type="url"
            />
        </section>
    );
}
