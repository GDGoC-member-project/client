import { MOCK_PROFILE } from "./mock";
import Billboard from "./sections/Billboard";
import ActivityGraph from "./sections/ActivityGraph";

export default function Profile() {
    return (
        <div className="flex flex-col items-center gap-37.5 pb-40">
            <Billboard profile={MOCK_PROFILE} />
            <ActivityGraph />
        </div>
    );
}

