import type {JSX} from "react";

import {cls} from "../../lib/css";
import {audioPlayerIconIdPrefix} from "../audio-player-control-sprite/c-audio-player-control-sprite";
import {SvgImage} from "../svg-image/c-svg-image";
import * as audioPlayerControlStyle from "./audio-player-control-button.scss";
import {audioPlayerControlTagNameMap} from "./audio-player-control-button-const";
import type {AudioPlayerControlTagNameType} from "./audio-player-control-button-type";

const cssButton = audioPlayerControlStyle.audio_player_control__button;
const cssActive = audioPlayerControlStyle.audio_player_control__button__active;
const cssWidthBorder = audioPlayerControlStyle.audio_player_control__button__bordered;
const cssImage = audioPlayerControlStyle.audio_player_control__button__image;
const hideForNarrow = audioPlayerControlStyle.audio_player_control__hide_for_narrow;

type PropsType = Readonly<{
    ariaLabel: string;

    className?: string;
    hasBorder?: boolean;
    imageId: string;
    isActive?: boolean;
    isHideForNarrow?: boolean;
    onClick?: () => unknown;
    tag?: AudioPlayerControlTagNameType;
}>;

export function AudioPlayerControlButton(props: PropsType): JSX.Element {
    const {onClick, imageId, isActive, ariaLabel, className, tag, hasBorder, isHideForNarrow} = props;
    const fullClassName = cls(
        cssButton,
        {
            [cssActive]: isActive,
            [cssWidthBorder]: hasBorder,
            [hideForNarrow]: isHideForNarrow,
        },
        className
    );

    const image = <SvgImage className={cssImage} imageId={`#${audioPlayerIconIdPrefix}${imageId}`} />;

    if (tag === audioPlayerControlTagNameMap.div) {
        return <div className={fullClassName}>{image}</div>;
    }

    if (tag === audioPlayerControlTagNameMap.span) {
        return <span className={fullClassName}>{image}</span>;
    }

    return (
        <button aria-label={ariaLabel} className={fullClassName} onClick={onClick} type="button">
            <SvgImage className={cssImage} imageId={`#${audioPlayerIconIdPrefix}${imageId}`} />
        </button>
    );
}
