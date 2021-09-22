import {classNames} from '../../lib/css';
import {SvgImage} from '../svg-image/c-svg-image';
import {audioPlayerIconIdPrefix} from '../audio-player-control-sprite/c-audio-player-control-sprite';

import audioPlayerControlStyle from './audio-player-control-button.scss';
import {AudioPlayerControlTagNameType} from './audio-player-control-button-type';
import {audioPlayerControlTagNameMap} from './audio-player-control-button-const';

const cssButton = audioPlayerControlStyle.audio_player_control__button;
const cssActive = audioPlayerControlStyle.audio_player_control__button__active;
const cssWidthBorder = audioPlayerControlStyle.audio_player_control__button__bordered;
const cssImage = audioPlayerControlStyle.audio_player_control__button__image;

type PropsType = Readonly<{
    ariaLabel: string;
    className?: string;
    hasBorder?: boolean;
    imageId: string;
    isActive?: boolean;
    onClick?: () => unknown;
    tag?: AudioPlayerControlTagNameType;
}>;

export function AudioPlayerControlButton(props: PropsType): JSX.Element {
    const {onClick, imageId, isActive, ariaLabel, className, tag, hasBorder} = props;
    const fullClassName = classNames(
        cssButton,
        {
            [cssActive]: isActive,
            [cssWidthBorder]: hasBorder,
        },
        className
    );

    const image = <SvgImage className={cssImage} imageId={'#' + audioPlayerIconIdPrefix + imageId} />;

    if (tag === audioPlayerControlTagNameMap.div) {
        return <div className={fullClassName}>{image}</div>;
    }

    if (tag === audioPlayerControlTagNameMap.span) {
        return <span className={fullClassName}>{image}</span>;
    }

    return (
        <button aria-label={ariaLabel} className={fullClassName} onClick={onClick} type="button">
            <SvgImage className={cssImage} imageId={'#' + audioPlayerIconIdPrefix + imageId} />
        </button>
    );
}
