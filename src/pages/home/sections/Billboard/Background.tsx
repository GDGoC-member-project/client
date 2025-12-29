import Blob1 from "./assets/blob_1.svg?react";
import Blob2 from "./assets/blob_2.svg?react";
import Lighting1 from "./assets/lighting_1.svg?react";

export default function BillboardBackground() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-90">
                <Lighting1 height={355} className="opacity-100" />
            </div>

            <div className="absolute inset-0 z-5">
                <div className="absolute top-0 right-1/2 -translate-x-45">
                    <Blob1 height={411} />
                </div>

                <div className="absolute bottom-0 left-1/2 translate-x-45">
                    <Blob2 height={432} />
                </div>
            </div>
        </div>
    );
}
