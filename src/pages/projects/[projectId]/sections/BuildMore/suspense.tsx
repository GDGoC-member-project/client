import { Suspense, use } from "react";
import { useParams } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import BuildMoreSection from "./section";
import { getProjectsPromise } from "./resource";
import BuildMoreSkeleton from "./skeleton";

function BuildMoreResolved() {
    const { projectId } = useParams<{ projectId: string }>();
    const allProjects = use(getProjectsPromise());

    const projects = allProjects.filter((p) => p.projectId !== projectId);

    return <BuildMoreSection projects={projects} />;
}

export default function BuildMore() {
    return (
        <section className="px-4 sm:px-0">
            <div className="flex flex-col items-center gap-2 mb-16">
                <h2 className="font-title03-medium">Build More</h2>
                <p className="font-head02-regular">
                    지금 참여할 수 있는 다른 프로젝트를 만나보세요.
                </p>
            </div>

            <ErrorBoundary fallback={<BuildMoreSkeleton />}>
                <Suspense fallback={<BuildMoreSkeleton />}>
                    <BuildMoreResolved />
                </Suspense>
            </ErrorBoundary>
        </section>
    );
}
