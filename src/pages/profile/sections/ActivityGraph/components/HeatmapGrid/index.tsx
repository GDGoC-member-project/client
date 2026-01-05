import type { HeatmapGridProps } from "./types";
import HeatmapCell from "../HeatmapCell";

export default function HeatmapGrid({ squares, weeks }: HeatmapGridProps) {
    return (
        <div
            className="grid gap-1 w-full"
            style={{
                gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))`,
                gridTemplateRows: "repeat(7, minmax(0, 1fr))",
            }}
        >
            {squares.map((intensity, idx) => (
                <HeatmapCell key={idx} intensity={intensity} />
            ))}
        </div>
    );
}
