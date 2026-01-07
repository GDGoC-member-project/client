import { motion } from "motion/react";

const COUNT = 128;
const W = 1116;
const H = 2122;

export default function Mesh() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="relative w-full h-full">
                <motion.svg
                    className="absolute left-1/2 top-1/5 -translate-x-1/2"
                    width={W}
                    height={H}
                    viewBox={`${-W / 2} ${-H / 2} ${W} ${H}`}
                    style={{
                        willChange: "transform, opacity",
                        overflow: "visible",
                    }}
                    initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                        duration: 2,
                        ease: [0.25, 0.8, 0.25, 1],
                        delay: 0.3,
                    }}
                >
                    <g
                        fill="none"
                        stroke="rgb(67,133,243)"
                        strokeWidth="0.8"
                        vectorEffect="non-scaling-stroke"
                    >
                        {Array.from({ length: COUNT }).map((_, i) => (
                            <ellipse
                                key={i}
                                cx={0}
                                cy={0}
                                rx={W / 2}
                                ry={H / 2}
                                transform={`rotate(${(360 / COUNT) * i})`}
                            />
                        ))}
                    </g>
                </motion.svg>

                <div
                    className="absolute inset-0 z-20"
                    style={{
                        background:
                            "linear-gradient(to top, rgba(18,18,18) 0%, rgba(18,18,18,0) 60%)",
                    }}
                />
            </div>
        </div>
    );
}
