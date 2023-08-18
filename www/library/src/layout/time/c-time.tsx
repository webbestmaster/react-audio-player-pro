import {getProgressHumanTime} from "../../lib/time";
import {cls} from "../../lib/css";

import timeStyle from "./time.scss";

interface PropsType {
    // eslint-disable-next-line unicorn/no-keyword-prefix
    readonly className?: string;
    readonly currentTime: number;
    readonly fullTime: number;
}

export function Time(props: PropsType): JSX.Element {
    // eslint-disable-next-line unicorn/no-keyword-prefix
    const {currentTime, fullTime, className} = props;

    const fullClassName = cls(timeStyle.time, className);
    const timeProgress = getProgressHumanTime(currentTime, fullTime);

    return <span className={fullClassName}>{timeProgress}</span>;
}
