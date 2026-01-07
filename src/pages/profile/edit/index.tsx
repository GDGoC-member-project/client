import { Formik } from "formik";
import { createInitialValues, validationSchema } from "../form.schema";
import PageTitleCentered from "@/components/PageTitleCentered";
import SubmitButton from "@/components/FormKit/SubmitButton";
import Basics from "./sections/Basics";

export default function EditProfile() {
    const initialValues = createInitialValues();

    return (
        <div className="mx-auto max-w-6xl px-4">
            <PageTitleCentered
                title="프로필 수정"
                description="맴버 소개 페이지에 프로필을 등록할 수 있습니다"
            />

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                validateOnChange={false}
                onSubmit={async () => {}}
            >
                {({ handleSubmit }) => (
                    <form className="flex flex-col gap-20 pb-30" onSubmit={handleSubmit}>
                        <Basics />
                        <SubmitButton />
                    </form>
                )}
            </Formik>
        </div>
    );
}
