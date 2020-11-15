// @flow

import React from 'react';

import type {PlayerPlayingStateType, PlayerRepeatingStateType} from '../audio-player-type';
import {Spinner} from '../../layout/spinner/c-spinner';

import {AudioPlayerHeadPlayingBar} from './audio-player-head-playing-bar/c-audio-player-head-playing-bar';
import {AudioPlayerHeadControls} from './audio-player-head-controls/c-audio-player-head-controls';

import audioPlayerHeadStyle from './audio-player-head.scss';

type PropsType = {|
    +onClickShuffle: () => void,
    +onClickRepeat: () => void,
    +onClickPrevTrack: () => void,
    +onClickPlay: () => void,
    +onClickNextTrack: () => void,
    +onClickTrackList: () => void,
    +onClickMuteVolume: () => void,
    +onChangeProgressBar: (progress: number) => void,
    +onChangeVolumeBar: (volume: number) => void,

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

export function AudioPlayerHead(props: PropsType): React$Node {
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
