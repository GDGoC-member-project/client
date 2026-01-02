import ContentField from "@/components/FormKit/ContentField";
import FormSection from "@/components/FormKit/FormSection";
import type { ProjectRequest } from "@/types/project";
import "./styles.css";

export default function ContentArea() {
    return (
        <FormSection<ProjectRequest> title="상세 설명">
            <ContentAreaFields />
        </FormSection>
    );
}

function ContentAreaFields() {
    return <ContentField name="content" />;
}
