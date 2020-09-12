// @flow

import React, {type Node} from 'react';
import classNames from 'classnames';

import {SvgImage} from '../svg-image/c-svg-image';
import {audioPlayerIconIdPrefix} from '../audio-player-control-sprite/c-audio-player-control-sprite';

import audioPlayerControlStyle from './audio-player-control-button.scss';

const cssButton = audioPlayerControlStyle.audio_player_control__button;
const cssActive = audioPlayerControlStyle.audio_player_control__button__active;
const cssImage = audioPlayerControlStyle.audio_player_control__button__image;

type PropsType = {|
    +onClick: () => mixed,
    +imageId: string,
    +ariaLabel: string,
    +isActive?: boolean,
|};

export function AudioPlayerControlButton(props: PropsType): Node {
    const {onClick, imageId, isActive, ariaLabel} = props;
    const className = classNames(cssButton, {[cssActive]: isActive});

    return (
        <button aria-label={ariaLabel} className={className} onClick={onClick} type="button">
            <SvgImage className={cssImage} imageId={'#' + audioPlayerIconIdPrefix + imageId}/>
        </button>
    );
}
