// @flow

import React, {Component, type Node} from 'react';

import type {PlayerPlayingStateType, PlayerRepeatingStateType} from '../audio-player-type';
import {Spinner} from '../../layout/spinner/c-spinner';

import {AudioPlayerHeadPlayingBar} from './audio-player-head-playing-bar/c-audio-player-head-playing-bar';
import {AudioPlayerHeadControls} from './audio-player-head-controls/c-audio-player-head-controls';

import audioPlayerHeadStyle from './audio-player-head.scss';

type PropsType = {|
    +onClickShuffle: () => mixed,
    +onClickRepeat: () => mixed,
    +onClickPrevTrack: () => mixed,
    +onClickPlay: () => mixed,
    +onClickNextTrack: () => mixed,
    +onClickTrackList: () => mixed,
    +onClickMuteVolume: () => mixed,
    +onChangeProgressBar: (progress: number) => mixed,
    +onChangeVolumeBar: (volume: number) => mixed,

    +playingState: PlayerPlayingStateType,
    +isShuffleOn: boolean,
    +repeatingState: PlayerRepeatingStateType,
    +isMuted: boolean,
    +isTrackListOpen: boolean,
    +trackCurrentTime: number,
    +trackVolume: number,
    +trackFullTime: number,
    +isLoading: boolean,
|};

type StateType = {};

export class AudioPlayerHead extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {};
    }

    render(): Node {
        const {props} = this;
        const {
            onClickShuffle,
            onClickRepeat,
            onClickPrevTrack,
            onClickPlay,
            onClickNextTrack,
            onClickTrackList,
            onClickMuteVolume,
            onChangeProgressBar,
            onChangeVolumeBar,

            isMuted,
            playingState,
            isShuffleOn,
            repeatingState,
            isTrackListOpen,
            trackCurrentTime,
            trackVolume,
            trackFullTime,
            isLoading,
        } = props;

        return (
            <div className={audioPlayerHeadStyle.audio_player_head}>
                <Spinner
                    className={audioPlayerHeadStyle.spinner}
                    isShow={isLoading}
                    lineWidth={3}
                    position="absolute"
                    size={26}
                    wrapperHeight={26}
                    wrapperPadding={0}
                    wrapperWidth={26}
                />

                <AudioPlayerHeadControls
                    isShuffleOn={isShuffleOn}
                    isTrackListOpen={isTrackListOpen}
                    onClickNextTrack={onClickNextTrack}
                    onClickPlay={onClickPlay}
                    onClickPrevTrack={onClickPrevTrack}
                    onClickRepeat={onClickRepeat}
                    onClickShuffle={onClickShuffle}
                    onClickTrackList={onClickTrackList}
                    playingState={playingState}
                    repeatingState={repeatingState}
                />

                <AudioPlayerHeadPlayingBar
                    isMuted={isMuted}
                    onChangeProgressBar={onChangeProgressBar}
                    onChangeVolumeBar={onChangeVolumeBar}
                    onClickMuteVolume={onClickMuteVolume}
                    trackCurrentTime={trackCurrentTime}
                    trackFullTime={trackFullTime}
                    trackVolume={trackVolume}
                />
            </div>
        );
    }
}
