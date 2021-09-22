type PropsType = Readonly<{
    className: string;
    imageId: string;
}>;

export function SvgImage(props: PropsType): JSX.Element {
    const {className, imageId} = props;

    return (
        <svg className={className}>
            <use xlinkHref={imageId} />
        </svg>
    );
}
