// @flow

import React, {type Node} from 'react';

import {classNames} from '../../lib/css';

import spinnerStyle from './spinner.scss';
import {defaultData, positionValueMap} from './spinner-const';
import type {PositionType} from './spinner-type';

const {size: defaultSize} = defaultData;

type PropsType = {|
    +size?: number, // default - 48px
    +lineWidth?: number, // default - 5px
    +arcColor?: string, // default - $color-border
    +circleColor?: string, // default - $light-gray
    +isShow?: boolean, // default - true
    +position?: PositionType, // default - static
    +wrapperColor?: string, // default - transparent
    +wrapperPadding?: string | number, // default - 12px
    +wrapperWidth?: string | number, // default - 100%
    +wrapperHeight?: string | number, // default - 100%
    +className?: string, // default = ''
|};

export function Spinner(props: PropsType): Node {
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
        borderWidth: lineWidth,
        width: size,
        height: size,
        borderColor: circleColor,
        borderTopColor: arcColor,
    };

    const spinnerWrapperStyle = {
        minHeight: size,
        minWidth: size,
        position,
        backgroundColor: wrapperColor,
        width: wrapperWidth,
        height: wrapperHeight,
        padding: wrapperPadding,
    };

    return (
        <div
            className={classNames(spinnerStyle.spinner_wrapper, className, {
                [spinnerStyle.spinner_wrapper__static]: position === positionValueMap.static,
            })}
            style={spinnerWrapperStyle}
        >
            <div className={spinnerStyle.spinner_image} style={spinnerImageStyle}/>
        </div>
    );
}
