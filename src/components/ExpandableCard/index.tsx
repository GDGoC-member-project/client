import { useExpandableMotion } from "@/hooks/useExpandableMotion";
import { motion } from "motion/react";
import { SMOOOTH } from "@/styles/transitions";
import type { ExpandableCardProps } from "./types";
import { CardHeader } from "./CardHeader";

export default function ExpandableCard({
    title,
    description,
    defaultExpanded = false,
    expanded: expandedProp,
    onExpandedChange,
    className,
    children,
}: ExpandableCardProps) {
    const { expanded, open, close, contentMotion } = useExpandableMotion({
        expandedProp,
        defaultExpanded,
        onExpandedChange,
    });

    return (
        <motion.div
            layout
            transition={SMOOOTH}
            className={`${className} w-full border border-grey-800 rounded-xl px-6 py-5 cursor-pointer transition-colors ${
                expanded ? "bg-grey-900" : "bg-transparent"
            }`}
            onMouseEnter={open}
            onMouseLeave={close}
        >
            <CardHeader title={title} description={description} expanded={expanded} />
            <motion.div {...contentMotion}>
                <div className="pt-4">{children}</div>
            </motion.div>
        </motion.div>
    );
}
