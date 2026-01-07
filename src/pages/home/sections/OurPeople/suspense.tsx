import { Suspense, use } from "react";
import OurPeopleSection from "./section";
import { getProfilesPromise } from "./resource";
import OurPeopleSkeleton from "./skeleton";
import ErrorBoundary from "@/components/ErrorBoundary";

function OurPeopleResolved() {
    const profiles = use(getProfilesPromise());
    return <OurPeopleSection profiles={profiles} />;
}

export default function OurPeople() {
    return (
        <section className="px-4 sm:px-0">
            <div className="flex flex-col items-center gap-2 mb-16">
                <h2 className="font-title03-medium">Our People</h2>
                <p className="font-head02-regular">
                    함께 배우고, 만들고, 성장하는 GDGoC 5기 멤버들을 소개합니다.
                </p>
            </div>

            <ErrorBoundary fallback={<OurPeopleSkeleton />}>
                <Suspense fallback={<OurPeopleSkeleton />}>
                    <OurPeopleResolved />
                </Suspense>
            </ErrorBoundary>
        </section>
    );
}
