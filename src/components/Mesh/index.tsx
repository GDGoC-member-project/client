import { motion } from "motion/react";
import { MeshColorSets, type MeshProps } from "./types";

const COUNT = 128;
const W = 1116;
const H = 2122;
const EASE = [0.25, 0.8, 0.25, 1] as const;

export default function Mesh({
    variant = "auto",
    phase = "idle",
    initiallyVisible = false,
    strokeColor = "blue",
}: MeshProps) {
    const effectivePhase = variant === "auto" ? "loaded" : phase;
    const isSwitch = variant === "switchOnLoad";
    const key = isSwitch ? effectivePhase : undefined;

    const autoInitial = { opacity: initiallyVisible ? 1 : 0, scale: 0.9, rotate: -8 };
    const autoAnimate = { opacity: 1, scale: 1, rotate: 0 };

    const switchInitial =
        phase === "loaded"
            ? { opacity: 1, scale: 0.9, rotate: -8 }
            : { opacity: initiallyVisible ? 1 : 1, scale: 0.9, rotate: -8 };

    const switchAnimate =
        phase === "loaded"
            ? { opacity: 1, scale: 1, rotate: 0 }
            : { opacity: 1, scale: 0.9, rotate: -8 };

    const svgTransition = {
        duration: effectivePhase === "loaded" ? 2 : 0,
        ease: EASE,
        delay: effectivePhase === "loaded" ? 0.3 : 0,
    } as const;

    const initialStroke = isSwitch ? MeshColorSets.grey : MeshColorSets[strokeColor];
    const targetStroke = isSwitch
        ? phase === "loaded"
            ? MeshColorSets.blue
            : MeshColorSets.grey
        : MeshColorSets[strokeColor];

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="relative w-full h-full">
                <motion.svg
                    key={key}
                    className="absolute left-1/2 top-1/5 -translate-x-1/2"
                    width={W}
                    height={H}
                    viewBox={`${-W / 2} ${-H / 2} ${W} ${H}`}
                    style={{ willChange: "transform, opacity", overflow: "visible" }}
                    initial={isSwitch ? switchInitial : autoInitial}
                    animate={isSwitch ? switchAnimate : autoAnimate}
                    transition={svgTransition}
                >
                    <motion.g
                        fill="none"
                        strokeWidth="0.8"
                        vectorEffect="non-scaling-stroke"
                        initial={{ stroke: initialStroke }}
                        animate={{
                            stroke: targetStroke,
                        }}
                        transition={
                            phase === "loaded"
                                ? { duration: 0.8, ease: [0.25, 0.8, 0.25, 1], delay: 0.35 }
                                : { duration: 0 }
                        }
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
                    </motion.g>
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
