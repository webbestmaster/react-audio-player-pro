type PropsType = Readonly<{
    children: JSX.Element | null;
    isRender: boolean;
}>;

export function IsRender(props: PropsType): JSX.Element | null {
    const {isRender, children} = props;

    return isRender ? children : null;
}
