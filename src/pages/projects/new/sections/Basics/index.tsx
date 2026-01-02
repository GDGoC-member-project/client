import FormSection, { useSection } from "@/components/FormKit/FormSection";
import type { ProjectRequest } from "@/types/project";
import TextInput from "@/components/FormKit/TextInput";

export default function Basics() {
    return (
        <FormSection<ProjectRequest> title="기본 정보">
            <BasicsFields />
        </FormSection>
    );
}

function BasicsFields() {
    const { te } = useSection();

    return (
        <>
            <TextInput
                label="프로젝트 이름"
                name="title"
                placeholder="제목을 입력해 주세요"
                error={te("title")}
                required
            />

            <TextInput
                label="한 줄 소개"
                name="description"
                placeholder="프로젝트를 짧게 소개해 주세요"
                error={te("description")}
                required
            />

            <TextInput
                label="모집 마감일"
                name="deadline"
                placeholder="마감일을 선택해 주세요"
                type="datetime-local"
                error={te("deadline")}
                required
            />

            <TextInput
                label="외부 URL"
                name="externalUrl"
                placeholder="프로젝트를 더 잘 이해할 수 있는 외부 링크를 입력해주세요."
                error={te("externalUrl")}
                type="url"
            />
        </>
    );
}
