import { jsx as _jsx } from "react/jsx-runtime";
export function SvgImage(props) {
    // eslint-disable-next-line unicorn/no-keyword-prefix
    const { className, imageId } = props;
    return (
    // eslint-disable-next-line unicorn/no-keyword-prefix
    _jsx("svg", { className: className, children: _jsx("use", { xlinkHref: imageId }) }));
}
//# sourceMappingURL=c-svg-image.js.map