// @flow

import React, {Component, type Node} from 'react';

import {Time} from '../../../layout/time/c-time';
import {RangeBar} from '../../../layout/range-bar/c-range-bar';
import {hasVolumeBar} from '../../../lib/system';
import {AudioPlayerControlButton} from '../../../layout/audio-player-control-button/c-audio-player-control-button';

import audioPlayerHeadPlayingBarStyle from './audio-player-head-playing-bar.scss';

type PropsType = {};

type StateType = {};

export class AudioPlayerHeadPlayingBar extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {};
    }

    handleOnChangeProgressBar = () => {};

    handleToggleMute = () => {};

    handleOnChangeVolumeBar = (trackVolume: number) => {
        // const audioTag = this.getAudioTag();
        // if (!audioTag) {
        //     return;
        // }
        // audioTag.volume = trackVolume;
        // this.setState({trackVolume});
    };

    renderTime(): Node {
        // const {state} = this;
        // const {trackCurrentTime, trackFullTime} = state;

        return <Time className={audioPlayerHeadPlayingBarStyle.time} currentTime={0} fullTime={1}/>;
    }

    renderProgressBar(): Node {
        // const {state} = this;
        // const {trackCurrentTime, trackFullTime} = state;

        return <RangeBar onChange={this.handleOnChangeProgressBar} progress={10 / 20}/>;
    }

    renderSwitchSoundButton(): Node {
        if (!hasVolumeBar) {
            return null;
        }

        // const {state} = this;
        // const {trackVolume, isMuted} = state;
        // const isActualMuted = isMuted || trackVolume === 0;
        // const soundImageSrc = isActualMuted ? 'button-sound-off' : 'button-sound-on';

        const soundImageSrc = Math.random() > 0.5 ? 'button-sound-off' : 'button-sound-on';

        return (
            <AudioPlayerControlButton
                ariaLabel="switch-sound"
                className=""
                imageId={soundImageSrc}
                onClick={this.handleToggleMute}
            />
        );
    }

    renderVolumeBar(): Node {
        if (!hasVolumeBar) {
            return null;
        }

        // const {state} = this;
        // const {trackVolume} = state;

        return (
            <RangeBar
                className={audioPlayerHeadPlayingBarStyle.volume_bar}
                onChange={this.handleOnChangeVolumeBar}
                progress={0.5}
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
