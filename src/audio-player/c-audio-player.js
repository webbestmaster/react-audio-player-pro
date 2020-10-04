// @flow

import React, {Component, type Node} from 'react';

import {hasVolumeBar} from '../lib/system';

import {setMediaMetadata} from '../lib/media-meta-data/media-meta-data';

import {AudioPlayerHead} from './audio-player-head/c-audio-player-head';
import {AudioPlayerPlayList} from './audio-player-play-list/c-audio-player-play-list';
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

    handleOnLoadedMetadata = () => {
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

    handleOnPause = () => {
        this.setState({playingState: playerPlayingStateTypeMap.paused});
    };

    handleOnVolumeChange = () => {
        const audioTag = this.getAudioTag();

        if (!audioTag) {
            return;
        }

        this.setState({
            isMuted: audioTag.muted,
            trackVolume: audioTag.volume,
        });
    };

    handleOnEnded = () => {
        const audioTag = this.getAudioTag();

        if (audioTag) {
            audioTag.currentTime = 0;
        }

        this.setState({
            playingState: playerPlayingStateTypeMap.paused,
            trackCurrentTime: 0,
        });
    };

    handleOnPlay = () => {
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

    handleOnTrackError = (error: Error) => {
        console.error('[handleOnTrackError]: Error!');

        throw error;
    };

    handleOnTimeUpdate = () => {
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
        const {activeIndex} = state;
        const {refAudio} = ref;

        const track = this.getCurrentTrack();

        if (!track) {
            return null;
        }

        const {src} = track;

        return (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <audio
                className={audioPlayerStyle.audio_tag}
                key={activeIndex + src}
                onEnded={this.handleOnEnded}
                onError={this.handleOnTrackError}
                onLoadedMetadata={this.handleOnLoadedMetadata}
                onPause={this.handleOnPause}
                onPlay={this.handleOnPlay}
                onTimeUpdate={this.handleOnTimeUpdate}
                onVolumeChange={this.handleOnVolumeChange}
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

    render(): Node {
        const {state, props} = this;
        const {className} = props;
        const {isShuffleOn, playingState, repeatingState, isMuted} = state;

        console.log(state);

        return (
            <div className={className || ''}>
                {this.renderAudioTag()}
                <AudioPlayerHead
                    isMuted={isMuted}
                    isShuffleOn={isShuffleOn}
                    onClickMuteVolume={this.handleClickMute}
                    onClickNextTrack={console.log}
                    onClickPlay={this.handleClickPlay}
                    onClickPrevTrack={console.log}
                    onClickRepeat={this.handleClickRepeat}
                    onClickShuffle={this.handleClickShuffle}
                    onClickTrackList={console.log}
                    playingState={playingState}
                    repeatingState={repeatingState}
                />

                <AudioPlayerPlayList/>
            </div>
        );
    }
}
