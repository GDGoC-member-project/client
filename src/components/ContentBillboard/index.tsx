import TilesOverlay from "@/components/TilesOverlay";
import ContentBillboardBackground from "./Background";
import type { ContentBillboardProps } from "./types";

export default function ContentBillboard({ children }: ContentBillboardProps) {
    return (
        <section className="relative w-full h-150 overflow-x-hidden">
            <ContentBillboardBackground />
            <TilesOverlay />

            <div className="relative z-20 h-full flex items-center">
                <div className="mx-auto w-full max-w-6xl px-4">{children}</div>
            </div>
        </section>
    );
}
