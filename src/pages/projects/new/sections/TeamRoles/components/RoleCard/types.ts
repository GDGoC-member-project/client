export type RoleCardProps = {
    position?: string | React.ReactNode;
    description?: string | React.ReactNode;
    filled?: number;
    max?: number;
    isFieldEmpty?: boolean;
    onRemove?: () => void;
    onDone?: () => void;
    defaultExpanded?: boolean;
    expanded?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
    className?: string;
    children?: React.ReactNode;
};
