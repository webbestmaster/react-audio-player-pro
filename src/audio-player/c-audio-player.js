// @flow

import React, {Component, type Node} from 'react';

import {setMediaMetadata} from '../lib/media-meta-data/media-meta-data';
import {getRandom, getShiftIndex} from '../lib/number';

import {AudioPlayerHead} from './audio-player-head/c-audio-player-head';
import {AudioPlayerTrackList} from './audio-player-track-list/c-audio-player-track-list';
import type {AudioPlayerPropsType, AudioPlayerStateType, TrackType} from './audio-player-type';

import {
    playerPlayingStateTypeMap,
    seekStepSecond,
    playerRepeatingStateTypeList,
    playerRepeatingStateTypeMap,
    defaultAudioPlayerState,
} from './audio-player-const';

import audioPlayerStyle from './audio-player.scss';

type StateType = AudioPlayerStateType;
type PropsType = AudioPlayerPropsType;

export class AudioPlayer extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = this.getDefaultState(props);

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

    getDefaultState(props: PropsType): StateType {
        const {defaultState = {}} = props;

        // $FlowFixMe
        return {
            ...defaultAudioPlayerState,
            ...defaultState,
        };
    }

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

        this.setState({isLoadingMetadata: false});

        if (!audioTag) {
            return;
        }

        this.setState({
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
        // const audioTag = this.getAudioTag();

        // if (audioTag) {
        // audioTag.currentTime = 0;
        // }

        const {state, props} = this;
        const {trackList} = props;
        const {isShuffleOn, repeatingState, activeIndex} = state;
        const {one: repeatOne, all: repeatAll, none: repeatNone} = playerRepeatingStateTypeMap;

        if (isShuffleOn) {
            const randomActiveIndex = getRandom(0, trackList.length);

            this.setActiveIndex(randomActiveIndex, this.handleClickPlay);
            return;
        }

        if (repeatingState === repeatOne) {
            // TODO: fix this workaround
            this.setState({}, this.handleClickPlay);
            return;
        }

        if (repeatingState === repeatAll) {
            this.handleClickNextTrack();
            // TODO: fix this workaround
            this.setState({}, this.handleClickPlay);
            return;
        }

        // repeatingState === repeatNone
        if (activeIndex < trackList.length - 1) {
            this.handleClickNextTrack();
            // TODO: fix this workaround
            this.setState({}, this.handleClickPlay);
            return;
        }

        this.setActiveIndex(0);
    };

    updateMediaMetadata() {
        const track = this.getCurrentTrack();

        if (!track) {
            return;
        }

        const {mediaMetadata} = track;

        if (mediaMetadata) {
            setMediaMetadata(mediaMetadata, {
                seekforward: this.seekForward,
                seekbackward: this.seekBackward,
                previoustrack: this.handleClickPrevTrack,
                nexttrack: this.handleClickNextTrack,
            });
        }
    }

    handleAudioTagOnPlay = () => {
        this.setState({playingState: playerPlayingStateTypeMap.playing});
        this.updateMediaMetadata();
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
                key="audio-tag"
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

        this.setActiveIndex(nextIndex);
    };

    handleClickPrevTrack = () => {
        const {state, props} = this;
        const {activeIndex} = state;
        const {trackList} = props;

        const nextIndex = getShiftIndex(trackList.length, activeIndex, -1);

        this.setActiveIndex(nextIndex);
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

    renderAudioPlayerHead(): Node {
        const {state} = this;
        const {
            isShuffleOn,
            playingState,
            repeatingState,
            isMuted,
            isTrackListOpen,
            trackCurrentTime,
            trackVolume,
            trackFullTime,
            isLoadingMetadata,
        } = state;

        return (
            <AudioPlayerHead
                isLoading={isLoadingMetadata}
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
        );
    }

    setActiveIndex = (activeIndex: number, callBack?: () => mixed) => {
        this.setState({
            activeIndex,
            isLoadingMetadata: true,
            trackCurrentTime: 0,
            trackFullTime: 0,
        });

        this.updateMediaMetadata();
    };

    renderAudioPlayerTrackList(): Node {
        const {state, props} = this;
        const {trackList} = props;
        const {playingState, isTrackListOpen, activeIndex, isLoadingMetadata} = state;

        if (!isTrackListOpen) {
            return null;
        }

        return (
            <AudioPlayerTrackList
                activeIndex={activeIndex}
                isLoading={isLoadingMetadata}
                onClickPlay={this.handleClickPlay}
                playingState={playingState}
                setActiveIndex={this.setActiveIndex}
                trackList={trackList}
            />
        );
    }

    render(): Node {
        const {props} = this;
        const {className} = props;

        return (
            <div className={className || ''}>
                {this.renderAudioTag()}
                {this.renderAudioPlayerHead()}
                {this.renderAudioPlayerTrackList()}
            </div>
        );
    }
}
