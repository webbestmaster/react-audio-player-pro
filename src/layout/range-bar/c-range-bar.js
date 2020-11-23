// @flow

/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, {useRef, useState} from 'react';

import {classNames} from '../../lib/css';

import rangeBarStyle from './range-bar.scss';
import {inputData} from './range-bar-const';

type PropsType = {|
    +progress: number,
    +onChange: (value: number) => void,
    +ariaLabel: string,
    +isDisable?: boolean,
    +className?: string,
|};

export function RangeBar(props: PropsType): React$Node {
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
    const inputRef = useRef<?HTMLInputElement>();
    const {className, isDisable, progress, onChange, ariaLabel} = props;

    function getCurrentValue(): number {
        const {current} = inputRef;

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
                <div className={rangeBarStyle.point_bar} style={{left: `${progress * 100}%`}}/>
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
