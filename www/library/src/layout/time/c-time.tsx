import type {JSX} from "react";

import {cls} from "../../lib/css";
import {getProgressHumanTime} from "../../lib/time";
import * as timeStyle from "./time.scss";

interface PropsType {
    readonly className?: string;
    readonly currentTime: number;
    readonly fullTime: number;
}

export function Time(props: PropsType): JSX.Element {
    const {currentTime, fullTime, className} = props;

    const fullClassName = cls(timeStyle.time, className);
    const timeProgress = getProgressHumanTime(currentTime, fullTime);

    return <span className={fullClassName}>{timeProgress}</span>;
}
