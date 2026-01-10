import FormSection from "@/components/FormKit/FormSection";
import { useSection } from "@/components/FormKit/FormSection";
import type { ProfileRequest } from "@/types/profile";
import { FieldArray } from "formik";
import { AnimatePresence, motion } from "motion/react";
import { SMOOOTH } from "@/styles/transitions";
import { createSocialLink, isFilledSocialLinkField } from "./utils";
import type { SocialLinkItem } from "./components/SocialLinkCard.tsx/types";
import SocialLinkCard from "./components/SocialLinkCard.tsx";
import AddCardButton from "./components/AddCardButton";

export default function SocialLinks() {
    return (
        <FormSection<ProfileRequest> title="소셜 링크">
            <SocialLinksFields />
        </FormSection>
    );
}

function SocialLinksFields() {
    const { list } = useSection();

    return (
        <FieldArray name="social_links">
            {({ push, remove }) => {
                const socialLinks = (list("social_links") as SocialLinkItem[]) ?? [];

                const hasEmpty = socialLinks.some((v) => !isFilledSocialLinkField(v));

                return (
                    <motion.div layout transition={SMOOOTH} className="flex flex-col gap-4">
                        <AnimatePresence>
                            {socialLinks.map((item, i) => (
                                <SocialLinkCard
                                    key={item.uniqueId}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.2 }}
                                    index={i}
                                    item={item}
                                    onRemove={remove}
                                />
                            ))}
                        </AnimatePresence>

                        <AddCardButton
                            onClick={() => {
                                requestAnimationFrame(() => {
                                    if (socialLinks.length === 0) {
                                        push(createSocialLink());
                                        return;
                                    }
                                    if (hasEmpty) return;
                                    push(createSocialLink());
                                });
                            }}
                            disabled={socialLinks.length > 0 && hasEmpty}
                        />
                    </motion.div>
                );
            }}
        </FieldArray>
    );
}
