export default function DayColumn() {
    return (
        <div className="w-10 grid gap-1" style={{ gridTemplateRows: "repeat(7, 1fr)" }}>
            <span className="font-body04-regular text-grey-300 leading-none">Mon</span>
            <span />
            <span className="font-body04-regular text-grey-300 leading-none">Wed</span>
            <span />
            <span className="font-body04-regular text-grey-300 leading-none">Fri</span>
            <span />
            <span />
        </div>
    );
}
