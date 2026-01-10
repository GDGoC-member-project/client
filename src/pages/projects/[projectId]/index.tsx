import Billboard from "./sections/Billboard";
import BuildMore from "./sections/BuildMore";
import ProjectDetailContent from "./sections/Content";

export default function ProjectDetail() {
    return (
        <div className="flex flex-col items-center gap-16 pb-40">
            <Billboard />
            <ProjectDetailContent />
            <BuildMore />
        </div>
    );
}
