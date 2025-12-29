import { useParams } from "react-router-dom";
import Billboard from "./sections/Billboard";
import BuildMore from "./sections/BuildMore";
import Members from "./sections/Members";

export default function ProjectDetail() {
    const { projectId } = useParams<{ projectId: string }>();

    if (!projectId) return null;

    return (
        <div className="flex flex-col items-center gap-37.5 pb-40">
            <Billboard projectId={projectId} />
            <Members />
            <BuildMore />
        </div>
    );
}
