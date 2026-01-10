import type { SocialLink } from "@/types/profile";
import type { motion } from "motion/react";

export type SocialLinkItem = SocialLink & { uniqueId: number };

export type SocialLinkCardProps = React.ComponentProps<typeof motion.div> & {
    index: number;
    item: SocialLinkItem;
    onRemove: (index: number) => void;
};
