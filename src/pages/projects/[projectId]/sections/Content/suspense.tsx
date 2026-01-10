import { Suspense, use } from "react";
import { useParams } from "react-router-dom";
import ProjectDetailContentSection from "./section";
import ErrorBoundary from "@/components/ErrorBoundary";
import ContentViewerSkeleton from "@/components/FormKit/ContentViewer/Skeleton";
import { getProjectPromise } from "../../resource";

function ProjectDetailContentResolved() {
    const { projectId } = useParams<{ projectId: string }>();

    if (!projectId) return null;

    const project = use(getProjectPromise(projectId));
    const content = project.content;

    if (!content) return null;
    return <ProjectDetailContentSection content={content} />;
}

export default function ProjectDetailContent() {
    return (
        <ErrorBoundary fallback={<ContentViewerSkeleton />}>
            <Suspense fallback={<ContentViewerSkeleton />}>
                <ProjectDetailContentResolved />
            </Suspense>
        </ErrorBoundary>
    );
}
