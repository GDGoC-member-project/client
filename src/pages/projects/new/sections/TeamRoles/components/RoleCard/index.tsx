import { useExpandableMotion } from "@/hooks/useExpandableMotion";
import { motion } from "motion/react";
import { SMOOOTH } from "@/styles/transitions";
import type { RoleCardProps } from "./types";

export default function RoleCard({
    position,
    description,
    filled,
    max,
    isFieldEmpty,
    onRemove,
    onDone,
    expanded: expandedProp,
    onExpandedChange,
    className,
    children,
}: RoleCardProps) {
    const { expanded, open, close, contentMotion } = useExpandableMotion({
        expandedProp,
        onExpandedChange,
        defaultExpanded: true,
    });

    return (
        <motion.div
            layout
            transition={SMOOOTH}
            className={`${className} w-full border border-grey-800 rounded-xl p-6 transition-colors ${
                expanded ? "bg-grey-900" : "bg-transparent"
            }`}
        >
            <div className="w-full flex justify-between items-start">
                <motion.div
                    className="flex-1"
                    style={{ overflow: "hidden" }}
                    initial={false}
                    animate={{
                        height: expanded ? 0 : "auto",
                        opacity: expanded ? 0 : 1,
                    }}
                    transition={SMOOOTH}
                >
                    <div className="flex flex-col gap-4">
                        <h4 className="font-body01-regular">
                            {position}{" "}
                            <span className="font-head03-medium">
                                ({filled && `${filled}/`}
                                {max}명)
                            </span>
                        </h4>
                        <p className="font-body02-regular text-grey-200">{description}</p>
                    </div>
                </motion.div>
                <div className="flex items-center gap-3">
                    <button
                        className="font-body02-medium text-grey-200 cursor-pointer"
                        onClick={onRemove}
                    >
                        삭제
                    </button>
                    {expanded ? (
                        <>
                            <button
                                className="font-body02-medium cursor-pointer disabled:cursor-not-allowed disabled:text-grey-600"
                                disabled={isFieldEmpty}
                                onClick={() => {
                                    close();
                                    onDone?.();
                                }}
                            >
                                완료
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="font-body02-medium cursor-pointer" onClick={open}>
                                수정
                            </button>
                        </>
                    )}
                </div>
            </div>

            <motion.div {...contentMotion}>
                <div className="flex flex-col gap-6">{children}</div>
            </motion.div>
        </motion.div>
    );
}
