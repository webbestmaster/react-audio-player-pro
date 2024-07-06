import { jsx as _jsx } from "react/jsx-runtime";
import { cls } from "../../lib/css";
import { audioPlayerIconIdPrefix } from "../audio-player-control-sprite/c-audio-player-control-sprite";
import { SvgImage } from "../svg-image/c-svg-image";
import * as audioPlayerControlStyle from "./audio-player-control-button.scss";
import { audioPlayerControlTagNameMap } from "./audio-player-control-button-const";
const cssButton = audioPlayerControlStyle.audio_player_control__button;
const cssActive = audioPlayerControlStyle.audio_player_control__button__active;
const cssWidthBorder = audioPlayerControlStyle.audio_player_control__button__bordered;
const cssImage = audioPlayerControlStyle.audio_player_control__button__image;
const hideForNarrow = audioPlayerControlStyle.audio_player_control__hide_for_narrow;
export function AudioPlayerControlButton(props) {
    const { onClick, imageId, isActive, ariaLabel, className, tag, hasBorder, isHideForNarrow } = props;
    const fullClassName = cls(cssButton, {
        [cssActive]: isActive,
        [cssWidthBorder]: hasBorder,
        [hideForNarrow]: isHideForNarrow,
    }, className);
    const image = _jsx(SvgImage, { className: cssImage, imageId: `#${audioPlayerIconIdPrefix}${imageId}` });
    if (tag === audioPlayerControlTagNameMap.div) {
        return _jsx("div", { className: fullClassName, children: image });
    }
    if (tag === audioPlayerControlTagNameMap.span) {
        return _jsx("span", { className: fullClassName, children: image });
    }
    return (_jsx("button", { "aria-label": ariaLabel, className: fullClassName, onClick: onClick, type: "button", children: _jsx(SvgImage, { className: cssImage, imageId: `#${audioPlayerIconIdPrefix}${imageId}` }) }));
}
//# sourceMappingURL=c-audio-player-control-button.js.map