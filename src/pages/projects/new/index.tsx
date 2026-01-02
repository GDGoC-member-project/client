import TextInput from "@/components/FormKit/TextInput";
import { Formik } from "formik";

export default function NewProject() {
    return (
        <div className="pt-49 mx-auto max-w-6xl px-4">
            <Formik initialValues={{}} validationSchema={{}} onSubmit={async () => {}}>
                {({}) => (
                    <form>
                        <TextInput label="프로젝트 이름" name="name" placeholder="아" required />
                    </form>
                )}
            </Formik>
        </div>
    );
}
