import ErrorBoundary from "@/components/ErrorBoundary";
import { Suspense, use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectPromise } from "./resource";
import Billboard from "./sections/BillboardContent";
import BuildMore from "./sections/BuildMore";
import ContentBillboard from "@/components/ContentBillboard";
import BillboardContentSkeleton from "./sections/BillboardContent/skeleton";

function ProjectDetailResolved({ onResolved }: { onResolved: () => void }) {
    const { projectId } = useParams<{ projectId: string }>();

    if (!projectId) return null;

    const project = use(getProjectPromise(projectId));

    useEffect(() => {
        onResolved();
    }, [onResolved]);

    return <Billboard project={project} />;
}

export default function ProjectDetail() {
    const { projectId } = useParams<{ projectId: string }>();

    const [isContentLoaded, setIsContentLoaded] = useState(false);

    useEffect(() => {
        setIsContentLoaded(false);
    }, [projectId]);

    return (
        <div className="flex flex-col items-center gap-37.5 pb-40">
            <ContentBillboard isContentLoaded={isContentLoaded}>
                <ErrorBoundary fallback={<BillboardContentSkeleton />}>
                    <Suspense fallback={<BillboardContentSkeleton />}>
                        <ProjectDetailResolved onResolved={() => setIsContentLoaded(true)} />
                    </Suspense>
                </ErrorBoundary>
            </ContentBillboard>
            <BuildMore />
        </div>
    );
}
