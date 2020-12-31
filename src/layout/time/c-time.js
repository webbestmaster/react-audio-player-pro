// @flow

import React from 'react';

import {getProgressHumanTime} from '../../lib/time';
import {classNames} from '../../lib/css';

import timeStyle from './time.scss';

type PropsType = {|
    +currentTime: number,
    +fullTime: number,
    +className?: string,
|};

export function Time(props: PropsType): React$Node {
    const {currentTime, fullTime, className} = props;

    const fullClassName = classNames(timeStyle.time, className);
    const timeProgress = getProgressHumanTime(currentTime, fullTime);

    return <span className={fullClassName}>{timeProgress}</span>;
}
