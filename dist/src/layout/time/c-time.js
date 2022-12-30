import { jsx as _jsx } from "react/jsx-runtime";
import { getProgressHumanTime } from '../../lib/time';
import { classNames } from '../../lib/css';
import timeStyle from './time.scss';
export function Time(props) {
    const { currentTime, fullTime, className } = props;
    const fullClassName = classNames(timeStyle.time, className);
    const timeProgress = getProgressHumanTime(currentTime, fullTime);
    return _jsx("span", { className: fullClassName, children: timeProgress });
}
//# sourceMappingURL=c-time.js.map