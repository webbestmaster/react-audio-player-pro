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
|};

type StateType = {};

export class AudioPlayerHeadPlayingBar extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {};
    }

    handleOnChangeProgressBar = () => {};

    handleOnChangeVolumeBar = (trackVolume: number) => {
        // const audioTag = this.getAudioTag();
        // if (!audioTag) {
        //     return;
        // }
        // audioTag.volume = trackVolume;
        // this.setState({trackVolume});
    };

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
        const {trackCurrentTime, trackFullTime} = props;

        return <RangeBar onChange={this.handleOnChangeProgressBar} progress={trackCurrentTime / trackFullTime}/>;
    }

    renderSwitchSoundButton(): Node {
        if (!hasVolumeBar) {
            return null;
        }

        // const {state} = this;
        // const {trackVolume, isMuted} = state;
        // const isActualMuted = isMuted || trackVolume === 0;
        // const soundImageSrc = isActualMuted ? 'button-sound-off' : 'button-sound-on';

        const {props} = this;
        const {onClickMuteVolume, isMuted} = props;

        const soundImageSrc = isMuted ? 'button-sound-off' : 'button-sound-on';

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
        const {trackVolume} = props;

        return (
            <RangeBar
                className={audioPlayerHeadPlayingBarStyle.volume_bar}
                onChange={this.handleOnChangeVolumeBar}
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
