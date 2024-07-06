import { jsx as _jsx } from "react/jsx-runtime";
import { cls } from "../../lib/css";
import { getProgressHumanTime } from "../../lib/time";
import * as timeStyle from "./time.scss";
export function Time(props) {
    const { currentTime, fullTime, className } = props;
    const fullClassName = cls(timeStyle.time, className);
    const timeProgress = getProgressHumanTime(currentTime, fullTime);
    return _jsx("span", { className: fullClassName, children: timeProgress });
}
//# sourceMappingURL=c-time.js.map