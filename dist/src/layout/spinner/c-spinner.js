import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '../../lib/css';
import spinnerStyle from './spinner.scss';
import { defaultData, positionValueMap } from './spinner-const';
const { size: defaultSize } = defaultData;
export function Spinner(props) {
    const { size: rawSize, lineWidth, arcColor, circleColor, isShow, wrapperWidth, wrapperHeight, position: rawPosition, wrapperColor, wrapperPadding, className, } = props;
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
    return (_jsx("div", { className: classNames(spinnerStyle.spinner_wrapper, className, {
            [spinnerStyle.spinner_wrapper__static]: position === positionValueMap.static,
        }), style: spinnerWrapperStyle, children: _jsx("div", { className: spinnerStyle.spinner_image, style: spinnerImageStyle }) }));
}
//# sourceMappingURL=c-spinner.js.map