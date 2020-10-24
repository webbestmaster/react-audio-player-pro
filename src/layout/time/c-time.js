// @flow

import React, {type Node} from 'react';
import classNames from 'classnames';

import {getTrackHumanTime} from '../../lib/time';

import timeStyle from './time.scss';

type PropsType = {|
    +currentTime: number,
    +fullTime: number,
    +className?: string,
|};

export function Time(props: PropsType): Node {
    const {currentTime, fullTime, className} = props;

    const {minutes: trackCurrentTimeMinutes, seconds: trackCurrentTimeSeconds} = getTrackHumanTime(currentTime);
    const {minutes: trackFullTimeMinutes, seconds: trackFullTimeSeconds} = getTrackHumanTime(fullTime);

    return (
        <span className={classNames(timeStyle.time, className)}>
            {trackCurrentTimeMinutes}:{trackCurrentTimeSeconds}&nbsp;/&nbsp;{trackFullTimeMinutes}:
            {trackFullTimeSeconds}
        </span>
    );
}
