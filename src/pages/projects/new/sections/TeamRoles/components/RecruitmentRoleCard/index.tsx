import RoleCard from "../RoleCard";
import TextInput from "@/components/FormKit/TextInput";
import { useSection } from "@/components/FormKit/FormSection";
import type { ProjectRecruitment } from "@/types/project";
import { isFilledRecruitmentField } from "../../utils/isFilledRecruitmentField";
import { type HTMLMotionProps } from "motion/react";

type RecruitmentRoleCardProps = {
    recruitment: ProjectRecruitment & { uniqueId: number };
    index: number;
    onRemove: (index: number) => void;
} & Omit<HTMLMotionProps<"div">, "children">;

export default function RecruitmentRoleCard({
    recruitment,
    index,
    onRemove,
    ...motionProps
}: RecruitmentRoleCardProps) {
    const { v, te } = useSection();

    return (
        <RoleCard
            {...motionProps}
            position={v(`recruitments[${index}].position`)}
            description={v(`recruitments[${index}].description`)}
            max={v(`recruitments[${index}].max`)}
            isFieldEmpty={isFilledRecruitmentField(recruitment)}
            onRemove={() => onRemove(index)}
        >
            <TextInput
                label="파트 이름"
                name={`recruitments[${index}].position`}
                error={te(`recruitments[${index}].position`)}
                placeholder="예: 기획, iOS 개발 등"
                required
            />
            <TextInput
                label="담당 업무"
                name={`recruitments[${index}].description`}
                error={te(`recruitments[${index}].description`)}
                placeholder="담당하게 될 핵심 업무를 작성해주세요"
                required
            />
            <TextInput
                label="최대 모집 인원"
                name={`recruitments[${index}].max`}
                type="number"
                error={te(`recruitments[${index}].max`)}
                required
            />
        </RoleCard>
    );
}
