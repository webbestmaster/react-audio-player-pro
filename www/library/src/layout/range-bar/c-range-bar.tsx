/* global HTMLInputElement */

import {useRef, useState} from "react";

import {cls} from "../../lib/css";

import * as rangeBarStyle from "./range-bar.scss";
import {inputData} from "./range-bar-const";

type PropsType = Readonly<{
    ariaLabel: string;

    className?: string;
    isDisable?: boolean;
    isHideForNarrow?: boolean;
    onChange: (value: number) => void;
    progress: number;
}>;

export function RangeBar(props: PropsType): JSX.Element {
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const {className, isDisable, progress, onChange, ariaLabel, isHideForNarrow} = props;

    function getCurrentValue(): number {
        const {current} = inputRef;

        if (!current) {
            return 0;
        }

        return Number.parseFloat(current.value);
    }

    function handleMouseDown(): void {
        setIsMouseDown(true);
    }

    function handleMouseUp(): void {
        setIsMouseDown(false);
    }

    function handleProgressBarChange(): void {
        onChange(getCurrentValue());
    }

    const fullClassName = cls(rangeBarStyle.range_bar, className, {
        [rangeBarStyle.wrapper__active]: isMouseDown,
        [rangeBarStyle.wrapper__disable]: isDisable === true,
        [rangeBarStyle.range_bar__hide_for_narrow]: isHideForNarrow,
    });

    return (
        <div className={fullClassName} onPointerDown={handleMouseDown} onPointerUp={handleMouseUp}>
            <div className={rangeBarStyle.progress_bar__wrapper}>
                <div
                    className={rangeBarStyle.progress_bar}
                    style={{transform: `translateZ(0) scaleX(${progress || 0})`}}
                />
            </div>

            <div className={rangeBarStyle.point_bar__wrapper}>
                <div className={rangeBarStyle.point_bar} style={{left: `${progress * 100}%`}} />
            </div>

            <input
                aria-label={ariaLabel}
                className={rangeBarStyle.input_range}
                defaultValue={inputData.defaultValue}
                max={inputData.max}
                min={inputData.min}
                onChange={handleProgressBarChange}
                ref={inputRef}
                step={inputData.step}
                type="range"
            />
        </div>
    );
}
