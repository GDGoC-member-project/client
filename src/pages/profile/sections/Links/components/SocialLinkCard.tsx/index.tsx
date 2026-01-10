import { useField } from "formik";
import { motion } from "motion/react";
import type { SocialLinkCardProps } from "./types";
import { SocialIcon, SocialIconLabelMap } from "@/types/profile";
import TextInput from "@/components/FormKit/TextInput";
import TextSelect from "@/components/FormKit/TextSelect";
import { Trash2 } from "lucide-react";

export default function SocialLinkCard({
    index,
    item,
    onRemove,
    ...motionProps
}: SocialLinkCardProps) {
    const iconName = `social_links[${index}].icon`;
    const urlName = `social_links[${index}].url`;

    const [, iconMeta] = useField<SocialIcon | undefined>(iconName);
    const [, urlMeta] = useField<string>(urlName);

    const iconError = iconMeta.touched ? (iconMeta.error as string | undefined) : undefined;
    const urlError = urlMeta.touched ? (urlMeta.error as string | undefined) : undefined;

    const socialIconOptions = Object.values(SocialIcon).map((v) => ({
        value: v,
        label: SocialIconLabelMap[v],
    }));

    return (
        <motion.div
            layout
            {...motionProps}
            className="rounded-xl border border-white/10 p-4 flex flex-col gap-4"
        >
            <div className="flex items-center justify-between">
                <p className="font-body04-regular text-grey-300">링크 {index + 1}</p>

                <button
                    type="button"
                    onClick={() => onRemove(index)}
                    className="inline-flex items-center gap-1 text-grey-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Remove social link"
                >
                    <Trash2 size={16} strokeWidth={2} />
                    <span className="font-body04-regular">삭제</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <TextSelect
                    name={iconName}
                    label="서비스"
                    placeholder="선택"
                    options={socialIconOptions}
                    error={iconError}
                />

                <div className="md:col-span-2">
                    <TextInput
                        name={urlName}
                        label="URL"
                        placeholder="https://..."
                        error={urlError}
                        required
                    />
                </div>
            </div>
        </motion.div>
    );
}
