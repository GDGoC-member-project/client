import FormSection, { useSection } from "@/components/FormKit/FormSection";
import type { ProjectRecruitment, ProjectRequest } from "@/types/project";
import RoleCard from "./components/RoleCard";
import TextInput from "@/components/FormKit/TextInput";
import AddCardButton from "./components/AddCardButton";
import { FieldArray } from "formik";
import { isFilledRecruitmentField } from "./utils/isFilledRecruitmentField";
import { AnimatePresence, motion } from "motion/react";
import { SMOOOTH } from "@/styles/transitions";

const createRecruitment = (): ProjectRecruitment => ({
    position: "",
    description: "",
    filled: 0,
    max: null as number | null,
});

export default function TeamRoles() {
    return (
        <FormSection<ProjectRequest> title="모집 인원">
            <TeamRolesFields />
        </FormSection>
    );
}

function TeamRolesFields() {
    const { v, te, list } = useSection();

    return (
        <FieldArray name="recruitments">
            {({ push, remove }) => {
                const recruitments = (list("recruitments") as ProjectRecruitment[]) ?? [];
                const hasEmpty = recruitments.some(isFilledRecruitmentField);

                return (
                    <motion.div transition={SMOOOTH} className="flex flex-col gap-4">
                        <AnimatePresence>
                            {recruitments.map((_, i) => (
                                <RoleCard
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.2 }}
                                    position={v(`recruitments[${i}].position`)}
                                    description={v(`recruitments[${i}].description`)}
                                    max={v(`recruitments[${i}].max`)}
                                    isFieldEmpty={isFilledRecruitmentField(recruitments[i])}
                                    onRemove={() => remove(i)}
                                >
                                    <TextInput
                                        label="파트 이름"
                                        name={`recruitments[${i}].position`}
                                        error={te(`recruitments[${i}].position`)}
                                        placeholder="예: 기획, iOS 개발 등"
                                        required
                                    />
                                    <TextInput
                                        label="담당 업무"
                                        name={`recruitments[${i}].description`}
                                        error={te(`recruitments[${i}].description`)}
                                        placeholder="담당하게 될 핵심 업무를 작성해주세요"
                                        required
                                    />
                                    <TextInput
                                        label="최대 모집 인원"
                                        name={`recruitments[${i}].max`}
                                        type="number"
                                        error={te(`recruitments[${i}].max`)}
                                        required
                                    />
                                </RoleCard>
                            ))}
                        </AnimatePresence>

                        <AddCardButton
                            onClick={() => {
                                if (recruitments.length === 0) {
                                    push(createRecruitment());
                                    return;
                                }
                                if (hasEmpty) return;
                                push(createRecruitment());
                            }}
                            disabled={recruitments.length > 0 && hasEmpty}
                        />
                    </motion.div>
                );
            }}
        </FieldArray>
    );
}
