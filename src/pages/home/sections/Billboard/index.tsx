import TilesOverlay from "@/components/TilesOverlay";
import BillboardBackground from "./Background";

export default function Billboard() {
    return (
        <section className="relative w-full h-150 overflow-x-hidden">
            <BillboardBackground />
            <TilesOverlay />

            <div className="relative z-20 grid place-items-center h-full text-center">
                <div className="flex flex-col gap-2">
                    <h1 className="font-title03-medium">Google Developer Groups</h1>
                    <div className="flex items-center gap-2">
                        <h1 className="font-head02-regular">On Campus</h1>
                        <div className="size-0.75 bg-white rounded-full" />
                        <h1 className="font-head02-regular">
                            Seoul National University of Science and Technology
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
