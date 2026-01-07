import FormSection, { useSection } from "@/components/FormKit/FormSection";
import type { ProfileRequest } from "@/types/profile";
import ImageInputCircle from "./ImageInputCircle";

export default function ProfileImage() {
    return (
        <FormSection<ProfileRequest>>
            <ProfileImageField />
        </FormSection>
    );
}

function ProfileImageField() {
    const { te } = useSection();

    async function handleImageUpload(file: File): Promise<string> {
        await new Promise((r) => setTimeout(r, 1000));
        return `https://localhost.com/${file.name}`;
    } // TODO: Implement

    return (
        <ImageInputCircle
            name="profile_image_url"
            error={te("profile_image_url")}
            onUpload={handleImageUpload}
        />
    );
}
