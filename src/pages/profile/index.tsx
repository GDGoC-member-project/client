import ActivityGraph from "./sections/ActivityGraph";
import Billboard from "./sections/Billboard";

export default function Profile() {
    return (
        <div className="flex flex-col items-center gap-16 pb-40">
            <Billboard />
            <ActivityGraph />
        </div>
    );
}
