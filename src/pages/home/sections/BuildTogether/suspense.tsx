import { Suspense, use } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import BuildTogetherSection from "./section";
import { getProjectsPromise } from "./resource";

function BuildTogetherResolved() {
    const projects = use(getProjectsPromise());
    return <BuildTogetherSection projects={projects} />;
}

export default function BuildTogether() {
    return (
        <section className="px-4 sm:px-0">
            <div className="flex flex-col items-center gap-2 mb-16">
                <h2 className="font-title03-medium">Build Together</h2>
                <p className="font-head02-regular">지금 참여할 수 있는 프로젝트를 만나보세요.</p>
            </div>

            <ErrorBoundary fallback={null}>
                <Suspense fallback={null}>
                    <BuildTogetherResolved />
                </Suspense>
            </ErrorBoundary>
        </section>
    );
}
