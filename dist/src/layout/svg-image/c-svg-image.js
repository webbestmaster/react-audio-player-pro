import { jsx as _jsx } from "react/jsx-runtime";
export function SvgImage(props) {
    const { className, imageId } = props;
    return (_jsx("svg", { className: className, children: _jsx("use", { xlinkHref: imageId }) }));
}
//# sourceMappingURL=c-svg-image.js.map