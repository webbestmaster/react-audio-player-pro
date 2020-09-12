// @flow

import React, {Component, type Node} from 'react';
import classNames from 'classnames';

import serviceStyle from '../../../css/service.scss';
import type {AudioPlayerContextType, AudioPlayerListItemType, PlayerPlayingStateType} from '../../audio-player-type';
import {
    defaultAudioPlayerContextData,
    playerPlayingStateTypeMap,
    playerRepeatingStateTypeMap,
} from '../../audio-player-const';
import {hasVolumeBar} from '../../../lib/system';

import {RangeBar} from '../../../layout/range-bar/c-range-bar';

import {AudioPlayerControlButton} from '../../../layout/audio-player-control-button/c-audio-player-control-button';

import audioPlayerControlStyle from './audio-player-control.scss';

export type PropsType = {|
    // native property
    +audioPlayerContext: AudioPlayerContextType,
    +className?: string,
    +onDidMount?: () => mixed,

    // for extend property
    +data?: AudioPlayerListItemType,
    +downloadFileName?: string,
|};

export type StateType = {|
    // native property
    +trackCurrentTime: number,
    +trackFullTime: number,
    +trackVolume: number,
    +isMuted: boolean,
    +isProgressBarActive: boolean,

    // for extend property
    +playingState?: PlayerPlayingStateType,
|};

const volumeMultiplier = 100;

export class AudioPlayerControl extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            trackCurrentTime: 0,
            trackFullTime: 0,
            trackVolume: hasVolumeBar ? 0.5 : 1,
            isMuted: false,
            isProgressBarActive: false,
        };

        this.ref = {
            refAudio: React.createRef<HTMLAudioElement>(),
        };
    }

    componentDidMount() {
        const {props} = this;
        const {onDidMount} = props;

        if (onDidMount) {
            onDidMount();
        }
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        const {props} = this;
        const {audioPlayerContext} = props;

        if (prevProps.audioPlayerContext.playingState !== audioPlayerContext.playingState) {
            this.updatePlayingState();
        }
    }

    // eslint-disable-next-line complexity, max-statements
    updatePlayingState() {
        const {props, state, ref} = this;
        const {audioPlayerContext} = props;
        const {refAudio} = ref;
        const audioNode = refAudio.current;

        if (audioPlayerContext.activeIndex === defaultAudioPlayerContextData.activeIndex) {
            console.log('player is not play default active index');
            return;
        }

        if (!audioNode) {
            console.error('audioNode is null');
            return;
        }

        if (audioPlayerContext.playingState === playerPlayingStateTypeMap.playing) {
            audioNode.play();
            return;
        }

        if (audioPlayerContext.playingState === playerPlayingStateTypeMap.paused) {
            audioNode.pause();
            return;
        }

        if (audioPlayerContext.playingState === playerPlayingStateTypeMap.stopped) {
            audioNode.pause();
            audioNode.currentTime = 0; // state.trackCurrentTime updated by this.handleOnTimeUpdate
            return;
        }

        console.error('Can not detect this playingState:', audioPlayerContext.playingState);
    }

    ref: {|
        +refAudio: {current: HTMLAudioElement | null},
    |};

    renderMainButtonList(): Node {
        const {props} = this;
        const {audioPlayerContext} = props;
        const handlePrev = audioPlayerContext.prev;
        const handlePlay = audioPlayerContext.play;
        const handlePause = audioPlayerContext.pause;
        const handleStop = audioPlayerContext.stop;
        const handleToggleRepeat = audioPlayerContext.toggleRepeatingState;
        const handleNext = audioPlayerContext.next;
        const handleToggleShuffle = audioPlayerContext.toggleShuffleIsEnable;
        const handleTogglePlayListIsOpen = audioPlayerContext.togglePlayListIsOpen;
        const {isShuffleOn, playingState, repeatingState, isPlayListOpen} = audioPlayerContext;
        const {one: repeatOne, all: repeatAll} = playerRepeatingStateTypeMap;
        const {playing: playingStatePlaying} = playerPlayingStateTypeMap;

        return (
            <div className={audioPlayerControlStyle.audio_player_control__button__list}>
                <AudioPlayerControlButton
                    ariaLabel="shuffle"
                    imageId="button-shuffle"
                    isActive={isShuffleOn}
                    onClick={handleToggleShuffle}
                />

                <AudioPlayerControlButton
                    ariaLabel="repeat"
                    imageId={repeatingState === repeatOne ? 'button-repeat-one' : 'button-repeat'}
                    isActive={[repeatOne, repeatAll].includes(repeatingState)}
                    onClick={handleToggleRepeat}
                />

                <AudioPlayerControlButton ariaLabel="prev" imageId="button-prev-track" onClick={handlePrev}/>

                {playingState !== playingStatePlaying
                    ? <AudioPlayerControlButton ariaLabel="play" imageId="button-play" onClick={handlePlay}/>
                    : <AudioPlayerControlButton ariaLabel="pause" imageId="button-pause" onClick={handlePause}/>}

                <AudioPlayerControlButton ariaLabel="next" imageId="button-next-track" onClick={handleNext}/>
                <AudioPlayerControlButton
                    ariaLabel="list"
                    imageId="button-play-list"
                    isActive={isPlayListOpen}
                    onClick={handleTogglePlayListIsOpen}
                />
            </div>
        );
    }

    handleOnTimeUpdate = (evt: SyntheticEvent<HTMLAudioElement>) => {
        const {state} = this;

        if (state.isProgressBarActive) {
            return;
        }

        this.setState({trackCurrentTime: evt.currentTarget.currentTime});
    };

    handleOnLoadedMetadata = (evt: SyntheticEvent<HTMLAudioElement>): null => {
        const {props, state} = this;
        const {audioPlayerContext} = props;
        const {playingState} = audioPlayerContext;
        const {trackVolume} = state;
        const audioNode = evt.currentTarget;

        this.setState({
            trackCurrentTime: 0,
            trackFullTime: audioNode.duration,
        });

        audioNode.volume = trackVolume;

        if (playingState !== playerPlayingStateTypeMap.playing) {
            return null;
        }

        audioNode.play();

        return null;
    };

    /*
    handleOnCanPlay = (evt: SyntheticEvent<HTMLAudioElement>): null => {
        return null;
    };
*/

    handleProgressBarChange = (value: number) => {
        const {state, ref} = this;
        const {trackFullTime} = state;
        const {refAudio} = ref;
        const audioNode = refAudio.current;
        const currentTime = value * trackFullTime;

        this.setState({
            trackCurrentTime: currentTime,
        });

        if (!audioNode) {
            console.error('handleProgressBarChange: audioNode is null');
            return;
        }

        audioNode.currentTime = currentTime;
    };

    handleChangeVolumeBar = (value: number) => {
        const {ref} = this;
        const {refAudio} = ref;
        const audioNode = refAudio.current;

        this.setState({
            trackVolume: value,
            isMuted: false,
        });

        if (!audioNode) {
            console.error('handleChangeVolumeBar: audioNode is null');
            return;
        }

        audioNode.volume = value;
    };

    handleToggleMute = () => {
        const {state, ref} = this;
        const {isMuted, trackVolume} = state;
        const audioNode = ref.refAudio.current;
        const newIsMutedState = !isMuted;

        this.setState({isMuted: newIsMutedState});

        if (!audioNode) {
            console.log('handleToggleMute: audioNode is null');
            return;
        }

        audioNode.volume = newIsMutedState ? 0 : trackVolume;
    };

    // eslint-disable-next-line complexity
    renderVolumeBar(): Node {
        const {state} = this;
        const {trackVolume, isMuted} = state;
        const isActualMuted = isMuted || trackVolume === 0;
        const soundImageSrc = isActualMuted ? 'button-sound-off' : 'button-sound-on';

        return (
            <div className={audioPlayerControlStyle.audio_player_control__volume_bar_part_wrapper}>
                <AudioPlayerControlButton
                    ariaLabel="volume"
                    imageId={soundImageSrc}
                    isActive={isActualMuted}
                    onClick={this.handleToggleMute}
                />
                <RangeBar
                    className={audioPlayerControlStyle.audio_player_control__progress_bar__wrapper}
                    onChange={this.handleChangeVolumeBar}
                    progress={trackVolume}
                />
            </div>
        );
    }

    renderProgressBarLine(progress: number): Node {
        return (
            <div className={audioPlayerControlStyle.audio_player_control__input_range__line}>
                <div
                    className={audioPlayerControlStyle.audio_player_control__input_range__passed}
                    style={{transform: `translateZ(0) scaleX(${progress})`}}
                />
            </div>
        );
    }

    renderProgressBar(): Node {
        const {state} = this;
        const {trackCurrentTime, trackFullTime} = state;

        const trackCurrentTimeMinutes = Math.floor(trackCurrentTime / 60);
        const trackCurrentTimeSeconds = String(Math.floor(trackCurrentTime % 60)).padStart(2, '0');

        const trackFullTimeMinutes = Math.floor(trackFullTime / 60);
        const trackFullTimeSeconds = String(Math.floor(trackFullTime % 60)).padStart(2, '0');

        return (
            <>
                <p className={audioPlayerControlStyle.audio_player_control__progress_bar__time}>
                    {trackCurrentTimeMinutes}:{trackCurrentTimeSeconds}&nbsp;/&nbsp;{trackFullTimeMinutes}:
                    {trackFullTimeSeconds}
                </p>
                <RangeBar
                    className={audioPlayerControlStyle.audio_player_control__progress_bar__wrapper}
                    onChange={this.handleProgressBarChange}
                    progress={trackCurrentTime / trackFullTime || 0}
                />
            </>
        );
    }

    renderProgressBarInactive(): Node {
        const {props} = this;
        const {audioPlayerContext} = props;

        return (
            <>
                <p className={audioPlayerControlStyle.audio_player_control__progress_bar__time}>
                    0:00&nbsp;/&nbsp;0:00
                </p>
                <label className={audioPlayerControlStyle.audio_player_control__progress_bar__wrapper}>
                    {this.renderProgressBarLine(0)}
                    <input
                        className={audioPlayerControlStyle.audio_player_control__input_range}
                        disabled
                        key={audioPlayerContext.activeIndex + '-inactive'}
                        max="0"
                        min="0"
                        step="0.01"
                        type="range"
                        value="0"
                    />
                </label>
            </>
        );
    }

    renderBottomBarList(): Node {
        const {props} = this;
        const {audioPlayerContext} = props;
        const {activeIndex, playList} = audioPlayerContext;
        const activeItem = playList[activeIndex];

        return (
            <div className={audioPlayerControlStyle.audio_player_control__bottom_bar_list_wrapper}>
                <div className={audioPlayerControlStyle.audio_player_control__progress_bar_part_wrapper}>
                    {activeItem ? this.renderProgressBar() : this.renderProgressBarInactive()}
                </div>
                {hasVolumeBar ? this.renderVolumeBar() : null}
            </div>
        );
    }

    renderAudioTag(): Node {
        return null;

        /*
        const {props, state, ref} = this;
        const {refAudio} = ref;
        const {src} = props;

        return (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <audio
                controls
                key={src}
                preload="metadata"
                // className={serviceStyle.hidden}
                ref={refAudio}
                // onEnded={audioPlayerContext.handleOnTrackEnded}
                // onError={audioPlayerContext.handleOnTrackError}
                // onCanPlay={this.handleOnCanPlay}
                // onLoadedMetadata={this.handleOnLoadedMetadata}
                // onPause={audioPlayerContext.handlePause}
                // onPlay={audioPlayerContext.handlePlay}
                // onTimeUpdate={this.handleOnTimeUpdate}
                src={src}
            />
        );
*/
    }

    render(): Node {
        const {props} = this;
        const {className} = props;

        return (
            <>
                {this.renderAudioTag()}
                {/*
                <div className={classNames(audioPlayerControlStyle.audio_player_control__wrapper, className)}>
                    {this.renderMainButtonList()}
                    {this.renderBottomBarList()}
                </div>
*/}
            </>
        );
    }
}
