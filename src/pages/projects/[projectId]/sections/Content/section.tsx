import ContentViewer from "@/components/FormKit/ContentViewer";
import type { ProejctContentSectionProps } from "./types";

export default function ProjectDetailContentSection({ content }: ProejctContentSectionProps) {
    return <ContentViewer content={content} />;
}
