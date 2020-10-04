// @flow

import React, {Component, type Node} from 'react';

import {hasVolumeBar} from '../lib/system';
import {setMediaMetadata} from '../lib/media-meta-data/media-meta-data';
import {getShiftIndex} from '../lib/array';

import {AudioPlayerHead} from './audio-player-head/c-audio-player-head';
import {AudioPlayerTrackList} from './audio-player-track-list/c-audio-player-track-list';
import type {PlayerPlayingStateType, PlayerRepeatingStateType, TrackType} from './audio-player-type';

import {
    playerPlayingStateTypeMap,
    seekStepSecond,
    playerRepeatingStateTypeList,
    playerRepeatingStateTypeMap,
} from './audio-player-const';

import audioPlayerStyle from './audio-player.scss';

type PropsType = {|
    +trackList: Array<TrackType>,
    +className?: string,
    +onDidMount?: (audioNode: HTMLAudioElement | null) => mixed,
|};

type StateType = {|
    +trackCurrentTime: number,
    +trackFullTime: number,
    +trackVolume: number,
    +isMuted: boolean,
    +playingState: PlayerPlayingStateType,
    +activeIndex: number,
    +isShuffleOn: boolean,
    +repeatingState: PlayerRepeatingStateType,
    +isTrackListOpen: boolean,
|};

export class AudioPlayer extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            trackCurrentTime: 0,
            trackFullTime: 0,
            trackVolume: hasVolumeBar ? 0.5 : 1,
            isMuted: false,
            playingState: playerPlayingStateTypeMap.paused,
            activeIndex: 0,
            isShuffleOn: false,
            repeatingState: playerRepeatingStateTypeMap.none,
            isTrackListOpen: true,
        };

        this.ref = {
            refAudio: React.createRef<HTMLAudioElement>(),
        };
    }

    componentDidMount() {
        const {props, state} = this;
        const {trackVolume} = state;
        const {onDidMount} = props;
        const audioTag = this.getAudioTag();

        if (audioTag) {
            audioTag.volume = trackVolume;
        }

        if (onDidMount) {
            onDidMount(audioTag);
        }
    }

    ref: {|
        +refAudio: {current: HTMLAudioElement | null},
    |};

    getAudioTag(): HTMLAudioElement | null {
        const {ref} = this;
        const {refAudio} = ref;

        return refAudio.current;
    }

    getCurrentTrack(): TrackType | null {
        const {state} = this;
        const {activeIndex} = state;

        return this.getTrackByIndex(activeIndex);
    }

    getTrackByIndex(trackIndex: number): TrackType | null {
        const {props} = this;
        const {trackList} = props;

        return trackList[trackIndex] || null;
    }

    handleAudioTagOnLoadedMetadata = () => {
        const {state} = this;
        const {trackVolume} = state;
        const audioTag = this.getAudioTag();

        if (!audioTag) {
            return;
        }

        this.setState({
            trackCurrentTime: 0,
            trackFullTime: audioTag.duration,
        });

        audioTag.volume = trackVolume;
    };

    handleAudioTagOnPause = () => {
        this.setState({playingState: playerPlayingStateTypeMap.paused});
    };

    handleAudioTagOnVolumeChange = () => {
        const audioTag = this.getAudioTag();

        if (!audioTag) {
            return;
        }

        this.setState({
            isMuted: audioTag.muted,
            trackVolume: audioTag.volume,
        });
    };

    handleAudioTagOnEnded = () => {
        const audioTag = this.getAudioTag();

        if (audioTag) {
            audioTag.currentTime = 0;
        }

        this.setState({
            playingState: playerPlayingStateTypeMap.paused,
            trackCurrentTime: 0,
        });
    };

    handleAudioTagOnPlay = () => {
        this.setState({playingState: playerPlayingStateTypeMap.playing});

        const track = this.getCurrentTrack();

        if (!track) {
            return;
        }

        const {mediaMetadata} = track;

        if (mediaMetadata) {
            setMediaMetadata(mediaMetadata, {
                seekforward: this.seekForward,
                seekbackward: this.seekBackward,
            });
        }
    };

    handleAudioTagOnTrackError = (error: Error) => {
        console.error('[handleAudioTagOnTrackError]: Error!');

        throw error;
    };

    handleAudioTagOnTimeUpdate = () => {
        const audioTag = this.getAudioTag();

        if (!audioTag) {
            return;
        }

        this.setState({trackCurrentTime: audioTag.currentTime});
    };

    seekForward = () => {
        const audioTag = this.getAudioTag();

        if (!audioTag) {
            return;
        }

        audioTag.currentTime += seekStepSecond;
    };

    seekBackward = () => {
        const audioTag = this.getAudioTag();

        if (!audioTag) {
            return;
        }

        audioTag.currentTime -= seekStepSecond;
    };

    renderAudioTag(): Node {
        const {ref, state} = this;
        const {activeIndex, playingState, isMuted} = state;
        const {refAudio} = ref;

        const track = this.getCurrentTrack();

        if (!track) {
            return null;
        }

        const {src} = track;

        return (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <audio
                autoPlay={playingState === playerPlayingStateTypeMap.playing}
                className={audioPlayerStyle.audio_tag}
                key={activeIndex + src}
                muted={isMuted}
                onEnded={this.handleAudioTagOnEnded}
                onError={this.handleAudioTagOnTrackError}
                onLoadedMetadata={this.handleAudioTagOnLoadedMetadata}
                onPause={this.handleAudioTagOnPause}
                onPlay={this.handleAudioTagOnPlay}
                onTimeUpdate={this.handleAudioTagOnTimeUpdate}
                onVolumeChange={this.handleAudioTagOnVolumeChange}
                preload="metadata"
                ref={refAudio}
                src={src}
            />
        );
    }

    handleClickPlay = () => {
        const audioTag = this.getAudioTag();

        if (!audioTag) {
            return;
        }

        if (audioTag.paused) {
            audioTag.play();
        } else {
            audioTag.pause();
        }
    };

    handleClickMute = () => {
        const audioTag = this.getAudioTag();

        if (!audioTag) {
            return;
        }

        const isNewMuted = !audioTag.muted;

        audioTag.muted = isNewMuted;

        this.setState({
            isMuted: isNewMuted,
        });
    };

    handleClickNextTrack = () => {
        const {state, props} = this;
        const {activeIndex} = state;
        const {trackList} = props;

        const nextIndex = getShiftIndex(trackList.length, activeIndex, 1);

        this.setState({
            activeIndex: nextIndex,
        });
    };

    handleClickPrevTrack = () => {
        const {state, props} = this;
        const {activeIndex} = state;
        const {trackList} = props;

        const nextIndex = getShiftIndex(trackList.length, activeIndex, -1);

        this.setState({
            activeIndex: nextIndex,
        });
    };

    handleClickShuffle = () => {
        const {state} = this;
        const {isShuffleOn} = state;

        this.setState({isShuffleOn: !isShuffleOn});
    };

    handleClickRepeat = () => {
        const {state} = this;
        const {repeatingState} = state;

        const currentIndex = playerRepeatingStateTypeList.indexOf(repeatingState);
        const nextIndex = (currentIndex + 1) % playerRepeatingStateTypeList.length;

        this.setState({repeatingState: playerRepeatingStateTypeList[nextIndex]});
    };

    handleClickShowHideTrackList = () => {
        const {state} = this;
        const {isTrackListOpen} = state;

        this.setState({isTrackListOpen: !isTrackListOpen});
    };

    handleChangeProgressBar = (trackCurrentProgress: number) => {
        const audioTag = this.getAudioTag();

        if (!audioTag) {
            return;
        }

        const {state} = this;
        const {trackFullTime} = state;

        audioTag.currentTime = trackCurrentProgress * trackFullTime;
    };

    handleChangeVolumeBar = (trackVolume: number) => {
        const audioTag = this.getAudioTag();

        if (!audioTag) {
            return;
        }

        audioTag.volume = trackVolume;
    };

    render(): Node {
        const {state, props} = this;
        const {className} = props;
        const {
            isShuffleOn,
            playingState,
            repeatingState,
            isMuted,
            isTrackListOpen,
            trackCurrentTime,
            trackVolume,
            trackFullTime,
        } = state;

        console.log(state);

        return (
            <div className={className || ''}>
                {this.renderAudioTag()}
                <AudioPlayerHead
                    isMuted={isMuted}
                    isShuffleOn={isShuffleOn}
                    isTrackListOpen={isTrackListOpen}
                    onChangeProgressBar={this.handleChangeProgressBar}
                    onChangeVolumeBar={this.handleChangeVolumeBar}
                    onClickMuteVolume={this.handleClickMute}
                    onClickNextTrack={this.handleClickNextTrack}
                    onClickPlay={this.handleClickPlay}
                    onClickPrevTrack={this.handleClickPrevTrack}
                    onClickRepeat={this.handleClickRepeat}
                    onClickShuffle={this.handleClickShuffle}
                    onClickTrackList={this.handleClickShowHideTrackList}
                    playingState={playingState}
                    repeatingState={repeatingState}
                    trackCurrentTime={trackCurrentTime}
                    trackFullTime={trackFullTime}
                    trackVolume={trackVolume}
                />

                {isTrackListOpen ? <AudioPlayerTrackList/> : null}
            </div>
        );
    }
}
