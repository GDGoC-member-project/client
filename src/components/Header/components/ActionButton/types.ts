type BaseProps = {
    children: React.ReactNode;
    ariaLabel?: string;
    className?: string;
};

export type ActionButtonProps =
    | (BaseProps & { to: string; onClick?: never })
    | (BaseProps & { to?: undefined; onClick: () => void });
