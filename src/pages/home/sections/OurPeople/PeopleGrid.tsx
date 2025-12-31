import { motion, AnimatePresence } from "motion/react";
import type { Member } from "@/types/people";
import MemberCard from "./MemberCard";

interface PeopleGridProps {
    members: Member[];
}

export default function PeopleGrid({ members }: PeopleGridProps) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-6xl">
            <AnimatePresence mode="popLayout">
                {members.map((member, index) => (
                    <motion.div
                        key={member.id}
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
                        <MemberCard member={member} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

