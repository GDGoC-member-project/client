import type { PageTitleCenteredProps } from "./types";

export default function PageTitleCentered({
    title,
    description,
    // backLink,
    topPadding = true,
    bottomPadding = true,
}: PageTitleCenteredProps) {
    return (
        <div
            className={`${topPadding ? "pt-49" : ""} ${
                bottomPadding ? "pb-25" : ""
            } w-full mx-auto flex flex-col items-center gap-2`}
        >
            <h1 className="font-title03-medium">{title}</h1>
            <h2 className="font-head02-regular">{description}</h2>
        </div>
    );
}
