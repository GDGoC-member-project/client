import { useEffect } from "react";
import { Formik } from "formik";
import { createInitialValues, validationSchema } from "../form.schema";
import PageTitleCentered from "@/components/PageTitleCentered";
import Basics from "../sections/Basics";
import Links from "../sections/Links";
import ProfileImage from "../sections/ProfileImage";
import { createProfile } from "@/api/profiles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/api/auth/AuthProvider";
import SubmitButton from "@/components/FormKit/SubmitButton";

export default function EditProfile() {
    const { status, profile } = useAuth();
    const initialValues = createInitialValues();
    const navigate = useNavigate();

    useEffect(() => {
        if (status === "unknown") return;

        if (status === "unauthenticated") {
            navigate("/", { replace: true });
            return;
        }

        if (status === "authenticated" && profile !== null) {
            navigate("/profile", { replace: true });
        }
    }, [status, profile, navigate]);

    if (status === "unknown") return null;
    if (status === "unauthenticated") return null;
    if (profile !== null) return null;

    return (
        <div className="mx-auto max-w-6xl px-4">
            <PageTitleCentered
                title="프로필 등록"
                description="맴버 소개 페이지에 프로필을 등록할 수 있습니다"
            />

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                validateOnChange={false}
                onSubmit={async (values) => {
                    try {
                        await createProfile(values);
                    } catch (error) {
                        alert("프로필 등록에 실패했습니다. 다시 시도해주세요.");
                    }
                    navigate("/profile");
                }}
            >
                {({ handleSubmit }) => (
                    <form className="flex flex-col gap-20 pb-30" onSubmit={handleSubmit}>
                        <ProfileImage />
                        <Basics />
                        <Links />
                        <SubmitButton />
                    </form>
                )}
            </Formik>
        </div>
    );
}
