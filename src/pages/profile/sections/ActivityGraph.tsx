export default function ActivityGraph() {
    const months = ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Mon", "Wed", "Fri"];
    const weeks = 53;
    const squares = Array.from({ length: weeks * 7 }, () => {
        const intensity = Math.floor(Math.random() * 5);
        return intensity;
    });

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    {months.map((month, idx) => (
                        <div key={idx} className="font-body04-regular text-grey-300 w-8 text-center">
                            {month}
                        </div>
                    ))}
                </div>
                <div className="flex gap-2">
                    <div className="flex flex-col gap-1">
                        {days.map((day, idx) => (
                            <div key={idx} className="font-body04-regular text-grey-300 h-4">
                                {day}
                            </div>
                        ))}
                    </div>
                    <div className="flex-1 flex flex-wrap gap-1">
                        {squares.map((intensity, idx) => (
                            <div
                                key={idx}
                                className={`size-3 rounded ${
                                    intensity === 0
                                        ? "bg-grey-900"
                                        : intensity === 1
                                          ? "bg-green-900"
                                          : intensity === 2
                                            ? "bg-green-700"
                                            : intensity === 3
                                              ? "bg-green-500"
                                              : "bg-green-400"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

