// @flow

import React, {Component, type Node} from 'react';

import {Time} from '../../../layout/time/c-time';
import {RangeBar} from '../../../layout/range-bar/c-range-bar';
import {hasVolumeBar} from '../../../lib/system';
import {AudioPlayerControlButton} from '../../../layout/audio-player-control-button/c-audio-player-control-button';

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

type StateType = {};

export class AudioPlayerHeadPlayingBar extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {};
    }

    renderTime(): Node {
        const {props} = this;
        const {trackCurrentTime, trackFullTime} = props;

        return (
            <Time
                className={audioPlayerHeadPlayingBarStyle.time}
                currentTime={trackCurrentTime}
                fullTime={trackFullTime}
            />
        );
    }

    renderProgressBar(): Node {
        const {props} = this;
        const {trackCurrentTime, trackFullTime, onChangeProgressBar} = props;
        const ariaLabel = 'progress bar';

        if (trackFullTime === 0) {
            return <RangeBar ariaLabel={ariaLabel} isDisable onChange={onChangeProgressBar} progress={0}/>;
        }

        return (
            <RangeBar
                ariaLabel={ariaLabel}
                onChange={onChangeProgressBar}
                progress={trackCurrentTime / trackFullTime}
            />
        );
    }

    renderSwitchSoundButton(): Node {
        if (!hasVolumeBar) {
            return null;
        }

        const {props} = this;
        const {onClickMuteVolume, isMuted, trackVolume} = props;
        const isActualMuted = isMuted || trackVolume === 0;
        const soundImageSrc = isActualMuted ? 'button-sound-off' : 'button-sound-on';

        return (
            <AudioPlayerControlButton
                ariaLabel="switch-sound"
                className=""
                imageId={soundImageSrc}
                onClick={onClickMuteVolume}
            />
        );
    }

    renderVolumeBar(): Node {
        if (!hasVolumeBar) {
            return null;
        }

        const {props} = this;
        const {trackVolume, onChangeVolumeBar} = props;
        const ariaLabel = 'volume bar';

        return (
            <RangeBar
                ariaLabel={ariaLabel}
                className={audioPlayerHeadPlayingBarStyle.volume_bar}
                onChange={onChangeVolumeBar}
                progress={trackVolume}
            />
        );
    }

    render(): Node {
        return (
            <div className={audioPlayerHeadPlayingBarStyle.audio_player_head_playing_bar}>
                {this.renderTime()}
                {this.renderProgressBar()}
                {this.renderSwitchSoundButton()}
                {this.renderVolumeBar()}
            </div>
        );
    }
}
