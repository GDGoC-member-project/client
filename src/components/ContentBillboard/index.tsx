import type { ContentBillboardProps } from "./types";
import Mesh from "../Mesh";

export default function ContentBillboard({ isContentLoaded, children }: ContentBillboardProps) {
    return (
        <section className="relative w-full h-150 overflow-x-hidden">
            <Mesh
                variant="switchOnLoad"
                phase={isContentLoaded ? "loaded" : "idle"}
                initiallyVisible={true}
            />

            <div className="relative z-20 h-full flex items-center">
                <div className="mx-auto w-full max-w-6xl px-4">{children}</div>
            </div>
        </section>
    );
}
