// @flow

import React from 'react';

import {Time} from '../../../layout/time/c-time';
import {RangeBar} from '../../../layout/range-bar/c-range-bar';
import {hasVolumeBar} from '../../../lib/system';
import {AudioPlayerControlButton} from '../../../layout/audio-player-control-button/c-audio-player-control-button';
import {IsRender} from '../../../layout/is-render/c-is-render';

import audioPlayerHeadPlayingBarStyle from './audio-player-head-playing-bar.scss';

type PropsType = {|
    +onClickMuteVolume: () => mixed,
    +isMuted: boolean,
    +trackCurrentTime: number,
    +trackVolume: number,
    +trackFullTime: number,
    +onChangeProgressBar: (progress: number) => mixed,
    +onChangeVolumeBar: (volume: number) => mixed,
|};

export function AudioPlayerHeadPlayingBar(props: PropsType): React$Node {
    const {
        trackCurrentTime,
        trackFullTime,
        onClickMuteVolume,
        isMuted,
        trackVolume,
        onChangeProgressBar,
        onChangeVolumeBar,
    } = props;
    const progressBarAriaLabel = 'progress bar';
    const volumeBarAriaLabel = 'volume bar';
    const switchSoundAriaLabel = 'switch-sound';
    const isActualMuted = isMuted || trackVolume === 0;
    const soundImageSrc = isActualMuted ? 'button-sound-off' : 'button-sound-on';
    const isTrackInitialized = trackFullTime !== 0;

    return (
        <div className={audioPlayerHeadPlayingBarStyle.audio_player_head_playing_bar}>
            <Time
                className={audioPlayerHeadPlayingBarStyle.time}
                currentTime={trackCurrentTime}
                fullTime={trackFullTime}
            />

            <RangeBar
                ariaLabel={progressBarAriaLabel}
                isDisable={!isTrackInitialized}
                onChange={onChangeProgressBar}
                progress={isTrackInitialized ? trackCurrentTime / trackFullTime : 0}
            />

            <IsRender isRender={hasVolumeBar}>
                <AudioPlayerControlButton
                    ariaLabel={switchSoundAriaLabel}
                    className=""
                    imageId={soundImageSrc}
                    onClick={onClickMuteVolume}
                />
                <RangeBar
                    ariaLabel={volumeBarAriaLabel}
                    className={audioPlayerHeadPlayingBarStyle.volume_bar}
                    onChange={onChangeVolumeBar}
                    progress={trackVolume}
                />
            </IsRender>
        </div>
    );
}
