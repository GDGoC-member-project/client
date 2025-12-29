import type { TeamRoleCapacityIndicatorProps } from "./types";

export default function TeamRoleCapacityIndicator({
    role,
    filled,
    max,
}: TeamRoleCapacityIndicatorProps) {
    const isFull = filled >= max;

    return (
        <div
            className={`${
                isFull ? "text-grey-300" : "text-white"
            } w-full flex items-center justify-between pointer-events-none`}
        >
            <p className="font-body03-medium">{role}</p>

            <p className="font-body03-medium">
                {filled}/{max}
            </p>
        </div>
    );
}
