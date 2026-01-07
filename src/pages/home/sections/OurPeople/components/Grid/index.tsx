import { AnimatePresence, motion } from "motion/react";
import type { GridProps } from "./types";
import ProfileAvatarVertical from "@/components/ProfileAvatarVertical";

export default function Grid({ profiles }: GridProps) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-6xl mt-16">
            <AnimatePresence mode="popLayout">
                {profiles.map((member, index) => (
                    <motion.div
                        key={member.user_id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                            delay: index * 0.02,
                        }}
                    >
                        <ProfileAvatarVertical member={member} subtitle={member.department} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
