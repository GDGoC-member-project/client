export function getMonthLabels(start: Date, weeks: number) {
    const fmt = new Intl.DateTimeFormat("en", { month: "short" });
    const labels: Array<{ text: string; col: number }> = [];

    let prevMonth = -1;
    let lastLabelCol = -9999;
    const minColGap = 4;

    for (let w = 0; w < weeks; w++) {
        const d = addDays(start, w * 7);
        const m = d.getMonth();

        if (m !== prevMonth) {
            const col = w + 1;

            if (col - lastLabelCol >= minColGap) {
                labels.push({ text: fmt.format(d), col });
                lastLabelCol = col;
            }

            prevMonth = m;
        }
    }

    return labels;
}

export function addDays(date: Date, days: number) {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
}

export function startOfWeek(date: Date) {
    const d = new Date(date);
    const day = d.getDay();
    d.setDate(d.getDate() - day);
    d.setHours(0, 0, 0, 0);
    return d;
}
