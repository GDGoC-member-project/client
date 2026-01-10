import { Suspense, use, useEffect, useState } from "react";
import BillboardSection from "./section";
import { getProjectPromise } from "../../resource";
import { useParams } from "react-router-dom";
import ContentBillboard from "@/components/ContentBillboard";
import ErrorBoundary from "@/components/ErrorBoundary";
import BillboardContentSkeleton from "./skeleton";

function BillboardResolved({ onResolved }: { onResolved: () => void }) {
    const { projectId } = useParams<{ projectId: string }>();

    if (!projectId) return null;

    const project = use(getProjectPromise(projectId));

    useEffect(() => {
        onResolved();
    }, [onResolved]);

    return <BillboardSection project={project} />;
}

export default function Billboard() {
    const { projectId } = useParams<{ projectId: string }>();

    const [isContentLoaded, setIsContentLoaded] = useState(false);

    useEffect(() => {
        setIsContentLoaded(false);
    }, [projectId]);

    return (
        <ContentBillboard isContentLoaded={isContentLoaded}>
            <ErrorBoundary fallback={<BillboardContentSkeleton />}>
                <Suspense fallback={<BillboardContentSkeleton />}>
                    <BillboardResolved onResolved={() => setIsContentLoaded(true)} />
                </Suspense>
            </ErrorBoundary>
        </ContentBillboard>
    );
}
