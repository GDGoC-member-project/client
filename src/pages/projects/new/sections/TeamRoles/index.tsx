import FormSection from "@/components/FormKit/FormSection";
import { useSection } from "@/components/FormKit/FormSection";
import type { ProjectRequest } from "@/types/project";
import type { ProjectRecruitment } from "@/types/project";
import { AnimatePresence, motion } from "motion/react";
import { SMOOOTH } from "@/styles/transitions";
import AddCardButton from "./components/AddCardButton";
import { FieldArray } from "formik";
import { isFilledRecruitmentField } from "./utils/isFilledRecruitmentField";
import { createRecruitment } from "./utils/createRecruitment";
import RecruitmentRoleCard from "./components/RecruitmentRoleCard";

export default function TeamRoles() {
    return (
        <FormSection<ProjectRequest> title="모집 인원">
            <TeamRolesFields />
        </FormSection>
    );
}

function TeamRolesFields() {
    const { list } = useSection();

    return (
        <FieldArray name="recruitments">
            {({ push, remove }) => {
                const recruitments =
                    (list("recruitments") as (ProjectRecruitment & { uniqueId: number })[]) ?? [];
                const hasEmpty = recruitments.some(isFilledRecruitmentField);

                return (
                    <motion.div layout transition={SMOOOTH} className="flex flex-col gap-4">
                        <AnimatePresence>
                            {recruitments.map((recruitment, i) => (
                                <RecruitmentRoleCard
                                    key={recruitment.uniqueId}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.2 }}
                                    recruitment={recruitment}
                                    index={i}
                                    onRemove={remove}
                                />
                            ))}
                        </AnimatePresence>

                        <AddCardButton
                            onClick={() => {
                                requestAnimationFrame(() => {
                                    if (recruitments.length === 0) {
                                        push(createRecruitment());
                                        return;
                                    }
                                    if (hasEmpty) return;
                                    push(createRecruitment());
                                });
                            }}
                            disabled={recruitments.length > 0 && hasEmpty}
                        />
                    </motion.div>
                );
            }}
        </FieldArray>
    );
}
