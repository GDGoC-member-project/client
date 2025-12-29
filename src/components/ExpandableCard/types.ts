export type ExpandableCardProps = {
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    defaultExpanded?: boolean;
    expanded?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
    className?: string;
    children?: React.ReactNode;
};
