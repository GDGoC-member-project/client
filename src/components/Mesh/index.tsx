import { motion } from "motion/react";
import Ellipse from "./components/Ellipse";

const COUNT = 128;

export default function Mesh() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="relative h-150 w-full top-3/4 translate-y-2/3">
                <motion.div
                    className="absolute inset-0"
                    initial={{
                        opacity: 0,
                        scale: 0.9,
                        rotate: -8,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                    }}
                    transition={{
                        duration: 2,
                        ease: [0.25, 0.8, 0.25, 1],
                        delay: 0.3,
                    }}
                >
                    {Array.from({ length: COUNT }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute left-1/2 top-1/2"
                            style={{
                                transform: `translate(-50%, -50%) rotate(${(360 / COUNT) * i}deg)`,
                                transformOrigin: "center",
                            }}
                        >
                            <Ellipse />
                        </div>
                    ))}
                </motion.div>
            </div>

            <div
                className="absolute inset-0 z-20"
                style={{
                    background: "linear-gradient(to top, rgba(18,18,18) 0%, rgba(18,18,18,0) 60%)",
                }}
            />
        </div>
    );
}
