import { Suspense, use } from "react";
import OurPeopleSection from "./section";
import { getProfilesPromise } from "./resource";

function OurPeopleResolved() {
    const profiles = use(getProfilesPromise());
    return <OurPeopleSection profiles={profiles} />;
}

export default function OurPeople() {
    return (
        <Suspense fallback={null}>
            <OurPeopleResolved />
        </Suspense>
    );
}
