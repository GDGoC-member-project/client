import DayColumn from "./components/DayColumn";
import HeatmapGrid from "./components/HeatmapGrid";
import MonthRow from "./components/MonthRow";
import { addDays, startOfWeek } from "./components/MonthRow/utils";
import { WEEKS } from "./constants";

export default function ActivityGraph() {
    const squares = Array.from({ length: WEEKS * 7 }, () => Math.floor(Math.random() * 5));
    const today = new Date();
    const start = startOfWeek(addDays(today, -(WEEKS * 7 - 1)));

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col gap-4">
                <MonthRow start={start} weeks={WEEKS} />
                <div className="flex gap-2">
                    <DayColumn />
                    <HeatmapGrid squares={squares} weeks={WEEKS} />
                </div>
            </div>
        </div>
    );
}
