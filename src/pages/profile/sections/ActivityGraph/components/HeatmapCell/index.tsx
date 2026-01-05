import type { HeatmapCellProps } from "./types";

export default function HeatmapCell({ intensity }: HeatmapCellProps) {
    const color =
        intensity === 0
            ? "bg-grey-900"
            : intensity === 1
            ? "bg-green-900"
            : intensity === 2
            ? "bg-green-700"
            : intensity === 3
            ? "bg-green-500"
            : "bg-green-400";

    return <div className={`aspect-square rounded ${color}`} />;
}
