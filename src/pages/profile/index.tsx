import { MOCK_PROFILE } from "./mock";
import ProfileHeader from "./sections/ProfileHeader";
import ActivityGraph from "./sections/ActivityGraph";

export default function Profile() {
    return (
        <div className="w-full flex flex-col">
            <div className="px-4 py-8">
                <h1 className="font-title03-medium">Profile</h1>
                <p className="font-body03-regular text-grey-300">Profile</p>
            </div>
            <ProfileHeader profile={MOCK_PROFILE} />
            <ActivityGraph />
        </div>
    );
}

