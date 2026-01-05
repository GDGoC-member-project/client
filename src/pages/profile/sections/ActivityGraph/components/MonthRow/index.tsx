import type { MonthRowProps } from "./types";
import { getMonthLabels } from "./utils";

export default function MonthRow({ start, weeks }: MonthRowProps) {
    const labels = getMonthLabels(start, weeks);

    return (
        <div
            className="ml-10 w-full grid"
            style={{ gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` }}
        >
            {labels.map(({ text, col }) => (
                <div
                    key={`${text}-${col}`}
                    className="font-body04-regular text-grey-300 whitespace-nowrap"
                    style={{ gridColumnStart: col }}
                >
                    {text}
                </div>
            ))}
        </div>
    );
}
