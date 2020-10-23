// @flow

import React, {type Node} from 'react';
import classNames from 'classnames';

import timeStyle from './time.scss';

type PropsType = {|
    +currentTime: number,
    +fullTime: number,
    +className?: string,
|};

export function Time(props: PropsType): Node {
    const {currentTime, fullTime, className} = props;

    const trackCurrentTimeMinutes = Math.floor(currentTime / 60);
    const trackCurrentTimeSeconds = String(Math.floor(currentTime % 60)).padStart(2, '0');

    const trackFullTimeMinutes = Math.floor(fullTime / 60);
    const trackFullTimeSeconds = String(Math.floor(fullTime % 60)).padStart(2, '0');

    return (
        <span className={classNames(timeStyle.time, className)}>
            {trackCurrentTimeMinutes}:{trackCurrentTimeSeconds}&nbsp;/&nbsp;{trackFullTimeMinutes}:
            {trackFullTimeSeconds}
        </span>
    );
}
