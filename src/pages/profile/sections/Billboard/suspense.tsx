import { Suspense, use } from "react";
import { useParams } from "react-router-dom";
import ContentBillboard from "@/components/ContentBillboard";
import ErrorBoundary from "@/components/ErrorBoundary";
import { getProfilePromise } from "../../resource";
import BillboardContentSkeleton from "./skeleton";
import ProfileBillboardSection from "./section";
import { readCachedMe } from "@/api/auth/storage";

function BillboardResolved() {
    const { userId } = useParams<{ userId: string }>();
    const currentUserId = readCachedMe()?.userId;
    if (!userId && !currentUserId) window.location.replace("/");
    const profile = use(getProfilePromise(userId ?? currentUserId!));
    return <ProfileBillboardSection profile={profile} />;
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
