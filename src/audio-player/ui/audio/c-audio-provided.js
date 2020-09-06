// @flow

import React, {type Node} from 'react';
import classNames from 'classnames';

import serviceStyle from '../../../css/service.scss';
import {playerPlayingStateTypeMap} from '../../audio-player-const';
import audioPlayerControlStyle from '../audio-player-control/audio-player-control.scss';
import {AudioPlayerControlButton} from '../audio-player-control/c-audio-player-control-button';
import type {PropsType, StateType} from '../audio-player-control/c-audio-player-control';
import {AudioPlayerControl} from '../audio-player-control/c-audio-player-control';
import {isNotFunction} from '../../../lib/is';
import {noop} from '../../../lib/function';

export class AudioProvided extends AudioPlayerControl {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            trackCurrentTime: 0,
            trackFullTime: 0,
            trackVolume: this.hasVolumeBar() ? 0.5 : 1,
            isMuted: false,
            isProgressBarActive: false,
            playingState: playerPlayingStateTypeMap.paused,
        };

        this.ref = {
            refAudio: React.createRef<HTMLAudioElement>(),
        };
    }

    componentDidMount() {
        const {props, ref} = this;
        const {onDidMount} = props;

        if (isNotFunction(onDidMount)) {
            return;
        }

        onDidMount(ref.refAudio.current);
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        const {state} = this;

        if (state.playingState !== prevState.playingState) {
            this.updatePlayingState();
        }
    }

    // eslint-disable-next-line complexity, max-statements
    updatePlayingState() {
        const {state, ref} = this;
        const {refAudio} = ref;
        const audioNode = refAudio.current;

        if (!audioNode) {
            console.error('audioNode is null');
            return;
        }

        if (state.playingState === playerPlayingStateTypeMap.playing) {
            audioNode.play();
            return;
        }

        if (state.playingState === playerPlayingStateTypeMap.paused) {
            audioNode.pause();
            return;
        }

        console.error('Can not detect this playingState:', state.playingState);
    }

    ref: {|
        +refAudio: {current: HTMLAudioElement | null},
    |};

    play = (): null => {
        this.setState({playingState: playerPlayingStateTypeMap.playing});

        return null;
    };

    pause = (): null => {
        this.setState({playingState: playerPlayingStateTypeMap.paused});

        return null;
    };

    renderPlayButton(): Node {
        const {state} = this;
        const handlePlay = this.play;
        const handlePause = this.pause;
        const {playingState} = state;
        const {playing: playingStatePlaying} = playerPlayingStateTypeMap;

        return playingState === playingStatePlaying
            ? <AudioPlayerControlButton ariaLabel="pause" imageId="button-pause" onClick={handlePause}/>
            : <AudioPlayerControlButton ariaLabel="play" imageId="button-play" onClick={handlePlay}/>
        ;
    }

    renderDownloadButton(): Node {
        const {props} = this;
        const {src, downloadFileName} = props;

        if (!src) {
            return null;
        }

        return (
            <a
                className={audioPlayerControlStyle.audio_player_control__button_link_wrapper}
                download={downloadFileName || true}
                href={src}
            >
                <AudioPlayerControlButton ariaLabel="download" imageId="button-download" onClick={noop}/>
            </a>
        );
    }

    handleOnLoadedMetadata = (evt: SyntheticEvent<HTMLAudioElement>): null => {
        const {state} = this;
        const {trackVolume, playingState} = state;
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

    handleOnTrackEnded = (evt: SyntheticEvent<HTMLAudioElement>) => {
        const audioNode = evt.currentTarget;

        audioNode.pause();
        audioNode.currentTime = 0;
    };

    handleOnTrackError = () => {};

    handlePause = (): null => {
        this.pause();

        return null;
    };

    handlePlay = (): null => {
        this.play();

        return null;
    };

    renderAudioTag(): Node {
        const {props, ref} = this;
        const {refAudio} = ref;
        const {src} = props;

        return (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <audio
                className={serviceStyle.hidden}
                key={src}
                onEnded={this.handleOnTrackEnded}
                onError={this.handleOnTrackError}
                onLoadedMetadata={this.handleOnLoadedMetadata}
                onPause={this.handlePause}
                onPlay={this.handlePlay}
                onTimeUpdate={this.handleOnTimeUpdate}
                preload="metadata"
                ref={refAudio}
                src={src}
            />
        );
    }

    renderBottomBarList(): Node {
        const {props} = this;
        const {src} = props;

        return (
            <div className={audioPlayerControlStyle.audio_player_control__bottom_bar_list_wrapper}>
                {this.renderPlayButton()}
                <div className={audioPlayerControlStyle.audio_player_control__progress_bar_part_wrapper}>
                    {src ? this.renderProgressBar() : this.renderProgressBarInactive()}
                </div>
                {this.hasVolumeBar() ? this.renderVolumeBar() : null}
                {this.renderDownloadButton()}
            </div>
        );
    }

    render(): Node {
        const {props} = this;
        const {className} = props;

        return (
            <>
                {this.renderAudioTag()}
                <div className={classNames(audioPlayerControlStyle.audio_player_control__wrapper__single, className)}>
                    {this.renderBottomBarList()}
                </div>
            </>
        );
    }
}
