import { cn } from "@/utils/classname";
import { Link } from "react-router-dom";
import type { ActionButtonProps } from "./types";

const iconBtn =
    "size-12 rounded-full grid place-items-center text-grey-300 cursor-pointer hover:text-white hover:scale-110 hover:ring hover:ring-grey-300 transition-all";

export default function ActionButton(props: ActionButtonProps) {
    const common = {
        "aria-label": props.ariaLabel,
        className: cn(iconBtn, props.className),
    };

    if ("to" in props && props.to) {
        return (
            <Link to={props.to} {...common}>
                {props.children}
            </Link>
        );
    }

    return (
        <button type="button" onClick={props.onClick} {...common}>
            {props.children}
        </button>
    );
}
