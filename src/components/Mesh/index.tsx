import Ellipse from "./components/Ellipse";

const COUNT = 128;

export default function Mesh() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="relative h-150 w-full top-3/4 translate-y-2/3">
                {Array.from({ length: COUNT }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute left-1/2 top-1/2"
                        style={{
                            transform: `
                                translate(-50%, -50%)
                                rotate(${(360 / COUNT) * i}deg)
                            `,
                            transformOrigin: "center",
                        }}
                    >
                        <Ellipse />
                    </div>
                ))}
            </div>

            <div
                className="absolute inset-0 z-20"
                style={{
                    background: "linear-gradient(to top, rgba(18,18,18) 0%, rgba(18,18,18,0) 60%)",
                }}
            />
        </div>
    );
}
