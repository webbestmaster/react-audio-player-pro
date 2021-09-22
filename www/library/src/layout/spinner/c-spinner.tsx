import {classNames} from '../../lib/css';

import spinnerStyle from './spinner.scss';
import {defaultData, positionValueMap} from './spinner-const';
import {PositionType} from './spinner-type';

const {size: defaultSize} = defaultData;

type PropsType = Readonly<{
    // default - 5px
    arcColor?: string;
    // default - $color-border
    circleColor?: string;
    // default - 100%
    className?: string;
    // default - $light-gray
    isShow?: boolean;
    // default - 48px
    lineWidth?: number; // default - true
    position?: PositionType;
    size?: number;
    // default - static
    wrapperColor?: string;
    // default - 100%
    wrapperHeight?: number | string;
    // default - transparent
    wrapperPadding?: number | string;
    // default - 12px
    wrapperWidth?: number | string; // default = ''
}>;

export function Spinner(props: PropsType): JSX.Element | null {
    const {
        size: rawSize,
        lineWidth,
        arcColor,
        circleColor,
        isShow,
        wrapperWidth,
        wrapperHeight,
        position: rawPosition,
        wrapperColor,
        wrapperPadding,
        className,
    } = props;

    if (isShow === false) {
        return null;
    }

    const position = rawPosition || positionValueMap.static;
    const size = rawSize || defaultSize;

    const spinnerImageStyle = {
        borderColor: circleColor,
        borderTopColor: arcColor,
        borderWidth: lineWidth,
        height: size,
        width: size,
    };

    const spinnerWrapperStyle = {
        backgroundColor: wrapperColor,
        height: wrapperHeight,
        minHeight: size,
        minWidth: size,
        padding: wrapperPadding,
        position,
        width: wrapperWidth,
    };

    return (
        <div
            className={classNames(spinnerStyle.spinner_wrapper, className, {
                [spinnerStyle.spinner_wrapper__static]: position === positionValueMap.static,
            })}
            style={spinnerWrapperStyle}
        >
            <div className={spinnerStyle.spinner_image} style={spinnerImageStyle} />
        </div>
    );
}
