import { useEffect } from "react";
import ActivityGraph from "./sections/ActivityGraph";
import Billboard from "./sections/Billboard";
import { useAuth } from "@/api/auth/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const { status, profile } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (status === "unknown") return;

        if (status === "unauthenticated") {
            navigate("/", { replace: true });
            return;
        }

        if (status === "authenticated" && profile === null) {
            navigate("/profile/create", { replace: true });
        }
    }, [status, profile, navigate]);

    if (status === "unknown") return null;
    if (status === "unauthenticated") return null;
    if (status === "authenticated" && profile === null) return null;

    return (
        <div className="flex flex-col items-center gap-37.5 pb-40">
            {profile && <Billboard profile={profile} />}
            <ActivityGraph />
        </div>
    );
}
