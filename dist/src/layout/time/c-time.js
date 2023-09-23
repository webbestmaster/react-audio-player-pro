import { jsx as _jsx } from "react/jsx-runtime";
import { getProgressHumanTime } from "../../lib/time";
import { cls } from "../../lib/css";
import timeStyle from "./time.scss";
export function Time(props) {
    // eslint-disable-next-line unicorn/no-keyword-prefix
    const { currentTime, fullTime, className } = props;
    const fullClassName = cls(timeStyle.time, className);
    const timeProgress = getProgressHumanTime(currentTime, fullTime);
    return _jsx("span", { className: fullClassName, children: timeProgress });
}
//# sourceMappingURL=c-time.js.map