interface PropsType {
    readonly className: string;
    readonly imageId: string;
}

export function SvgImage(props: PropsType): JSX.Element {
    const {className, imageId} = props;

    return (
        <svg className={className}>
            <use xlinkHref={imageId} />
        </svg>
    );
}
