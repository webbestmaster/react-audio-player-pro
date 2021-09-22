type PropsType = Readonly<{
    children: JSX.Element;
    isRender: boolean;
}>;

export function IsRender(props: PropsType): JSX.Element {
    const {isRender, children} = props;

    return isRender ? children : null;
}
