import FormSection, { useSection } from "@/components/FormKit/FormSection";
import type { ProfileRequest } from "@/types/profile";
import ImageInputCircle from "./ImageInputCircle";
import { uploadProfileImage } from "@/api/profiles";

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
        const image_url = await uploadProfileImage(file);
        return image_url;
    }

    return (
        <ImageInputCircle
            name="profile_image_url"
            error={te("profile_image_url")}
            onUpload={handleImageUpload}
        />
    );
}
