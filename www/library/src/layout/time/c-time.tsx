import {getProgressHumanTime} from '../../lib/time';
import {classNames} from '../../lib/css';

import timeStyle from './time.scss';

type PropsType = Readonly<{
    className?: string;
    currentTime: number;
    fullTime: number;
}>;

export function Time(props: PropsType): JSX.Element {
    const {currentTime, fullTime, className} = props;

    const fullClassName = classNames(timeStyle.time, className);
    const timeProgress = getProgressHumanTime(currentTime, fullTime);

    return <span className={fullClassName}>{timeProgress}</span>;
}
