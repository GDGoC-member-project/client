import { useEffect, useState } from "react";

function useStripeCount(stripeWidth = 64) {
    const [width, setWidth] = useState(typeof window === "undefined" ? 0 : window.innerWidth);

    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        onResize();

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return Math.ceil(width / stripeWidth);
}

export default function TilesOverlay() {
    const stripeWidth = 32;
    const count = useStripeCount(stripeWidth);

    return (
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            <div
                className="h-full grid"
                style={{
                    gridAutoFlow: "column",
                    gridAutoColumns: `${stripeWidth}px`,
                }}
            >
                {Array.from({ length: count }).map((_, i) => (
                    <div key={i} className="h-full bg-black/20 backdrop-blur-[20px]" />
                ))}
            </div>
        </div>
    );
}
