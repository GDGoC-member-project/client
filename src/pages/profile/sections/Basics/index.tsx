import FormSection, { useSection } from "@/components/FormKit/FormSection";
import { Part, Role, type ProfileRequest } from "@/types/profile";
import TextInput from "@/components/FormKit/TextInput";
import TextSelect from "@/components/FormKit/TextSelect";
import TextChipsInput from "@/components/FormKit/TextChipsInput";

export default function Basics() {
    return (
        <FormSection<ProfileRequest> title="기본 정보">
            <BasicsFields />
        </FormSection>
    );
}

function BasicsFields() {
    const { te } = useSection();
    const roleOptions = Object.values(Role).map((v) => ({ label: v, value: v }));
    const partOptions = Object.values(Part).map((v) => ({ label: v, value: v }));

    return (
        <>
            <TextInput
                label="이름"
                name="name"
                placeholder="이름을 입력해 주세요"
                error={te("name")}
                required
            />

            <TextInput
                label="기수"
                name="generation"
                placeholder="기수를 입력해 주세요"
                error={te("generation")}
                type="number"
                required
            />

            <TextInput
                label="한 줄 소개"
                name="bio"
                placeholder="한 줄 소개를 입력해 주세요"
                error={te("bio")}
                required
            />

            <TextInput
                label="학과/소속"
                name="department"
                placeholder="학과나 소속을 입력해 주세요"
                error={te("department")}
                required
            />

            <TextInput
                label="MBTI"
                name="mbti_info"
                placeholder="예: ENTJ"
                error={te("mbti_info")}
            />

            <TextSelect
                label="역할"
                name="role"
                options={roleOptions}
                placeholder="역할을 선택해 주세요"
                error={te("role")}
                required
            />

            <TextSelect
                label="파트"
                name="part"
                options={partOptions}
                placeholder="파트를 선택해 주세요"
                error={te("part")}
                required
            />

            <TextChipsInput
                label="기술 스택"
                name="techStacks"
                placeholder=", 로 구분하여 입력해 주세요"
                error={te("techStacks")}
            />
        </>
    );
}
