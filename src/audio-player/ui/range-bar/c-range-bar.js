// @flow

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* global navigator, MediaMetadata */

import React, {Component, type Node} from 'react';
import classNames from 'classnames';

import rangeBarStyle from './range-bar.scss';
import {inputData} from './range-bar-const';

type PropsType = {
    +progress: number,
    +onChange: (value: number) => mixed,
    +isDisable?: boolean,
    +className?: string,
};

type StateType = {
    isMouseDown: boolean,
    value: number,
};

export class RangeBar extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            isMouseDown: false,
            value: props.progress,
        };

        this.ref = {
            input: React.createRef<HTMLInputElement>(),
        };
    }

    ref: {|
        +input: {current: HTMLInputElement | null},
    |};

    getCurrentValue(): number {
        const {ref} = this;
        const {input} = ref;
        const {current} = input;

        if (!current) {
            return 0;
        }

        return Number.parseFloat(current.value);
    }

    handleMouseDown = () => {
        this.setState({isMouseDown: true});
    };

    handleMouseUp = () => {
        this.setState({isMouseDown: false});
    };

    handleProgressBarChange = () => {
        const {props} = this;
        const {onChange} = props;
        const value = this.getCurrentValue();

        this.setState({value});

        onChange(value);
    };

    renderProgressBarLine(): Node {
        const {state} = this;
        const {value} = state;

        return (
            <div className={rangeBarStyle.progress_bar__wrapper}>
                <div className={rangeBarStyle.progress_bar} style={{transform: `translateZ(0) scaleX(${value})`}}/>
            </div>
        );
    }

    renderProgressPoint(): Node {
        const {state} = this;
        const {value} = state;

        return (
            <div className={rangeBarStyle.point_bar__wrapper}>
                <div className={rangeBarStyle.point_bar} style={{left: `${value * 100}%`}}/>
            </div>
        );
    }

    render(): Node {
        const {props, state, ref} = this;
        const {className, isDisable} = props;
        const {isMouseDown} = state;

        const fullClassName = classNames(rangeBarStyle.wrapper, className, {
            [rangeBarStyle.wrapper__active]: isMouseDown,
            [rangeBarStyle.wrapper__disable]: isDisable === true,
        });

        return (
            <div
                className={fullClassName}
                onMouseDown={this.handleMouseDown}
                onMouseUp={this.handleMouseUp}
                onTouchEnd={this.handleMouseUp}
                onTouchStart={this.handleMouseDown}
            >
                {this.renderProgressBarLine()}
                {this.renderProgressPoint()}
                <input
                    className={rangeBarStyle.input_range}
                    defaultValue={inputData.defaultValue}
                    max={inputData.max}
                    min={inputData.min}
                    onChange={this.handleProgressBarChange}
                    ref={ref.input}
                    step={inputData.step}
                    type="range"
                />
            </div>
        );
    }
}
