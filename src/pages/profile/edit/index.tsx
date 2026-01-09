import { Formik } from "formik";
import { validationSchema } from "../form.schema";
import PageTitleCentered from "@/components/PageTitleCentered";
import Basics from "./sections/Basics";
import Links from "./sections/Links";
import SubmitButton from "@/components/FormKit/SubmitButton";
import ProfileImage from "./sections/ProfileImage";
import { useAuth } from "@/api/auth/AuthProvider";
import { profileResponseToRequest } from "@/types/profile";
import { updateProfile } from "@/api/profiles";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
    const { profile } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="mx-auto max-w-6xl px-4">
            <PageTitleCentered
                title="프로필 수정"
                description="맴버 소개 페이지에 프로필을 등록할 수 있습니다"
            />

            {profile !== null && (
                <Formik
                    initialValues={profileResponseToRequest(profile)}
                    validationSchema={validationSchema}
                    validateOnChange={false}
                    onSubmit={async (values) => {
                        try {
                            await updateProfile(values);
                        } catch (error) {
                            alert("프로필 수정에 실패했습니다. 다시 시도해주세요.");
                        }
                        navigate("/profile", { replace: true });
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
            )}
        </div>
    );
}
