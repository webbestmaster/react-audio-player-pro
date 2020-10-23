// @flow

/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, {type Node, useState, useRef} from 'react';
import classNames from 'classnames';

import rangeBarStyle from './range-bar.scss';
import {inputData} from './range-bar-const';

type PropsType = {|
    +progress: number,
    +onChange: (value: number) => mixed,
    +isDisable?: boolean,
    +className?: string,
|};

export function RangeBar(props: PropsType): Node {
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
    const input = useRef<?HTMLInputElement>();
    const {className, isDisable, progress, onChange} = props;

    function getCurrentValue(): number {
        const {current} = input;

        if (!current) {
            return 0;
        }

        return Number.parseFloat(current.value);
    }

    function handleMouseDown() {
        setIsMouseDown(true);
    }

    function handleMouseUp() {
        setIsMouseDown(true);
    }

    function handleProgressBarChange() {
        onChange(getCurrentValue());
    }

    const fullClassName = classNames(rangeBarStyle.range_bar, className, {
        [rangeBarStyle.wrapper__active]: isMouseDown,
        [rangeBarStyle.wrapper__disable]: isDisable === true,
    });

    return (
        <div
            className={fullClassName}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchEnd={handleMouseUp}
            onTouchStart={handleMouseDown}
        >
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
                className={rangeBarStyle.input_range}
                defaultValue={inputData.defaultValue}
                max={inputData.max}
                min={inputData.min}
                onChange={handleProgressBarChange}
                ref={input}
                step={inputData.step}
                type="range"
            />
        </div>
    );
}
