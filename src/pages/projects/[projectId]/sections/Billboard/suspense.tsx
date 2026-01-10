import { Suspense, use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BillboardSection from "./section";
import { getProjectPromise } from "../../resource";
import ContentBillboard from "@/components/ContentBillboard";
import ErrorBoundary from "@/components/ErrorBoundary";
import BillboardContentSkeleton from "./skeleton";

function BillboardResolved() {
    const { projectId } = useParams<{ projectId: string }>();
    if (!projectId) return null;

    const project = use(getProjectPromise(projectId));
    return <BillboardSection project={project} />;
}

export default function Billboard() {
    return (
        <ContentBillboard>
            <ErrorBoundary fallback={<BillboardContentSkeleton />}>
                <Suspense fallback={<BillboardContentSkeleton />}>
                    <BillboardResolved />
                </Suspense>
            </ErrorBoundary>
        </ContentBillboard>
    );
}
