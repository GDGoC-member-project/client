export function dateToDatetimeLocal(date: Date): string {
    const offset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() - offset).toISOString().slice(0, 16);
}

export function datetimeLocalToDate(value: string): Date | null {
    return value ? new Date(value) : null;
}
