interface PropsType {
    // eslint-disable-next-line unicorn/no-keyword-prefix
    readonly className: string;
    readonly imageId: string;
}

export function SvgImage(props: PropsType): JSX.Element {
    // eslint-disable-next-line unicorn/no-keyword-prefix
    const {className, imageId} = props;

    return (
        // eslint-disable-next-line unicorn/no-keyword-prefix
        <svg className={className}>
            <use xlinkHref={imageId} />
        </svg>
    );
}
