import { Formik } from "formik";
import { createInitialValues, validationSchema } from "../form.schema";
import PageTitleCentered from "@/components/PageTitleCentered";
import Basics from "./sections/Basics";
import SubmitButton from "@/components/FormKit/SubmitButton";
import TeamRoles from "./sections/TeamRoles";
import ContentArea from "./sections/ContentArea";
import { createProject } from "@/api/projects";

export default function NewProject() {
    const initialValues = createInitialValues();

    return (
        <div className="mx-auto max-w-6xl px-4">
            <PageTitleCentered
                title="프로젝트 등록"
                description="프로젝트를 등록하고 함께할 팀원을 모집해보세요"
            />

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        await createProject(values);
                        alert("프로젝트가 성공적으로 생성되었습니다!");
                        window.location.href = "/";
                    } catch (error) {
                        alert("프로젝트 생성 중 오류가 발생했습니다. 다시 시도해 주세요.");
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({ handleSubmit, isSubmitting }) => (
                    <form className="flex flex-col gap-20 pb-30" onSubmit={handleSubmit}>
                        <Basics />

                        <TeamRoles />

                        <ContentArea />

                        <SubmitButton isSubmitting={isSubmitting} />
                    </form>
                )}
            </Formik>
        </div>
    );
}
