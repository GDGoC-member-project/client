import Blob from "./assets/blob.svg?react";
import Lighting from "./assets/lighting.svg?react";

export default function ContentBillboardBackground() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-1/2 translate-x-2">
                <Lighting height={521} />
            </div>

            <div className="absolute inset-0 z-5">
                <div className="absolute top-0 left-1/2 translate-x-45">
                    <Blob height={444} />
                </div>
            </div>
        </div>
    );
}
