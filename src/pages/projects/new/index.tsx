import { Formik } from "formik";
import { createInitialValues, validationSchema } from "../form.schema";
import PageTitleCentered from "@/components/PageTitleCentered";
import Basics from "./sections/Basics";
import SubmitButton from "@/components/FormKit/SubmitButton";

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
                onSubmit={async () => {}}
            >
                {({ handleSubmit, touched, errors }) => (
                    <form className="flex flex-col gap-20" onSubmit={handleSubmit}>
                        <Basics touched={touched} errors={errors} />

                        <SubmitButton />
                    </form>
                )}
            </Formik>
        </div>
    );
}
