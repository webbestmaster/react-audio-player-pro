// @flow

import React from 'react';

import {classNames} from '../../lib/css';
import {SvgImage} from '../svg-image/c-svg-image';
import {audioPlayerIconIdPrefix} from '../audio-player-control-sprite/c-audio-player-control-sprite';

import audioPlayerControlStyle from './audio-player-control-button.scss';

const cssButton = audioPlayerControlStyle.audio_player_control__button;
const cssActive = audioPlayerControlStyle.audio_player_control__button__active;
const cssImage = audioPlayerControlStyle.audio_player_control__button__image;

type PropsType = {|
    +className?: string,
    +onClick?: () => mixed,
    +imageId: string,
    +ariaLabel: string,
    +isActive?: boolean,
|};

export function AudioPlayerControlButton(props: PropsType): React$Node {
    const {onClick, imageId, isActive, ariaLabel, className} = props;
    const fullClassName = classNames(cssButton, {[cssActive]: isActive}, className);

    return (
        <button aria-label={ariaLabel} className={fullClassName} onClick={onClick} type="button">
            <SvgImage className={cssImage} imageId={'#' + audioPlayerIconIdPrefix + imageId}/>
        </button>
    );
}
