import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* global HTMLInputElement */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRef, useState } from 'react';
import { classNames } from '../../lib/css';
import rangeBarStyle from './range-bar.scss';
import { inputData } from './range-bar-const';
export function RangeBar(props) {
    const [isMouseDown, setIsMouseDown] = useState(false);
    const inputRef = useRef(null);
    const { className, isDisable, progress, onChange, ariaLabel, isHideForNarrow } = props;
    function getCurrentValue() {
        const { current } = inputRef;
        if (!current) {
            return 0;
        }
        return Number.parseFloat(current.value);
    }
    function handleMouseDown() {
        setIsMouseDown(true);
    }
    function handleMouseUp() {
        setIsMouseDown(false);
    }
    function handleProgressBarChange() {
        onChange(getCurrentValue());
    }
    const fullClassName = classNames(rangeBarStyle.range_bar, className, {
        [rangeBarStyle.wrapper__active]: isMouseDown,
        [rangeBarStyle.wrapper__disable]: isDisable === true,
        [rangeBarStyle.range_bar__hide_for_narrow]: isHideForNarrow,
    });
    return (_jsxs("div", { className: fullClassName, onPointerDown: handleMouseDown, onPointerUp: handleMouseUp, children: [_jsx("div", { className: rangeBarStyle.progress_bar__wrapper, children: _jsx("div", { className: rangeBarStyle.progress_bar, style: { transform: `translateZ(0) scaleX(${progress || 0})` } }) }), _jsx("div", { className: rangeBarStyle.point_bar__wrapper, children: _jsx("div", { className: rangeBarStyle.point_bar, style: { left: `${progress * 100}%` } }) }), _jsx("input", { "aria-label": ariaLabel, className: rangeBarStyle.input_range, defaultValue: inputData.defaultValue, max: inputData.max, min: inputData.min, onChange: handleProgressBarChange, ref: inputRef, step: inputData.step, type: "range" })] }));
}
//# sourceMappingURL=c-range-bar.js.map