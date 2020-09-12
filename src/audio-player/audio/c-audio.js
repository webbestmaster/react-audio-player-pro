// @flow

import React, {type Node, Component} from 'react';
import classNames from 'classnames';

import {playerPlayingStateTypeMap} from '../audio-player-const';
import {AudioPlayerControlButton} from '../../layout/audio-player-control-button/c-audio-player-control-button';
import {Time} from '../../layout/time/c-time';
import {hasVolumeBar} from '../../lib/system';
import {type MediaMetadataType, type PlayerPlayingStateType} from '../audio-player-type';
import {RangeBar} from '../../layout/range-bar/c-range-bar';

import audioStyle from './audio.scss';

type PropsType = {|
    +src: string,
    +mediaMetadata?: MediaMetadataType,
    +className?: string,
    +onDidMount?: (audioNode: HTMLAudioElement) => mixed,
    +downloadFileName?: string,
|};

type StateType = {|
    +trackCurrentTime: number,
    +trackFullTime: number,
    +trackVolume: number,
    +isMuted: boolean,
    +playingState: PlayerPlayingStateType,
|};

export class Audio extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            trackCurrentTime: 0,
            trackFullTime: 0,
            trackVolume: hasVolumeBar ? 0.5 : 1,
            isMuted: false,
            playingState: playerPlayingStateTypeMap.paused,
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

        if (onDidMount && audioTag) {
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

    handlePause = () => {
        const audioTag = this.getAudioTag();

        if (!audioTag) {
            console.error('[handlePause]: can not get audio tag');
            return;
        }

        audioTag.pause();
    };

    handlePlay = () => {
        const audioTag = this.getAudioTag();

        if (!audioTag) {
            console.error('[handlePlay]: can not get audio tag');
            return;
        }

        audioTag.play();
    };

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

    handleOnChangeProgressBar = (progress: number) => {
        const {state} = this;
        const {trackFullTime} = state;
        const audioTag = this.getAudioTag();

        if (!audioTag) {
            return;
        }

        const trackCurrentTime = progress * trackFullTime;

        audioTag.currentTime = trackCurrentTime;

        this.setState({trackCurrentTime});
    };

    handleOnChangeVolumeBar = (trackVolume: number) => {
        const audioTag = this.getAudioTag();

        if (!audioTag) {
            return;
        }

        audioTag.volume = trackVolume;

        this.setState({trackVolume});
    };

    handleToggleMute = () => {
        const audioTag = this.getAudioTag();

        if (!audioTag) {
            return;
        }

        const isMuted = !audioTag.muted;

        audioTag.muted = isMuted;

        this.setState({isMuted});
    };

    renderAudioTag(): Node {
        const {props, ref} = this;
        const {refAudio} = ref;
        const {src} = props;

        return (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <audio
                className={audioStyle.audio_tag}
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

    renderPlayButton(): Node {
        const {state} = this;
        const {playingState} = state;

        if (playingState === playerPlayingStateTypeMap.playing) {
            return <AudioPlayerControlButton ariaLabel="pause" imageId="button-pause" onClick={this.handlePause}/>;
        }

        return <AudioPlayerControlButton ariaLabel="play" imageId="button-play" onClick={this.handlePlay}/>;
    }

    renderTime(): Node {
        const {state} = this;
        const {trackCurrentTime, trackFullTime} = state;

        return <Time className={audioStyle.time} currentTime={trackCurrentTime} fullTime={trackFullTime}/>;
    }

    renderProgressBar(): Node {
        const {state} = this;
        const {trackCurrentTime, trackFullTime} = state;

        return <RangeBar onChange={this.handleOnChangeProgressBar} progress={trackCurrentTime / trackFullTime}/>;
    }

    renderSwitchSoundButton(): Node {
        if (!hasVolumeBar) {
            return null;
        }

        const {state} = this;
        const {trackVolume, isMuted} = state;
        const isActualMuted = isMuted || trackVolume === 0;
        const soundImageSrc = isActualMuted ? 'button-sound-off' : 'button-sound-on';

        return (
            <AudioPlayerControlButton
                ariaLabel="switch-sound"
                className={audioStyle.switch_sound_button}
                imageId={soundImageSrc}
                onClick={this.handleToggleMute}
            />
        );
    }

    renderVolumeBar(): Node {
        if (!hasVolumeBar) {
            return null;
        }

        const {state} = this;
        const {trackVolume} = state;

        return (
            <RangeBar
                className={audioStyle.sound_range}
                onChange={this.handleOnChangeVolumeBar}
                progress={trackVolume}
            />
        );
    }

    renderDownloadButton(): Node {
        const {props} = this;
        const {src, downloadFileName} = props;

        return (
            <a className={audioStyle.download_button} download={downloadFileName || true} href={src}>
                <AudioPlayerControlButton ariaLabel="download" imageId="button-download"/>
            </a>
        );
    }

    render(): Node {
        const {props} = this;
        const {className} = props;

        return (
            <div className={classNames(audioStyle.audio, className)}>
                {this.renderAudioTag()}
                {this.renderPlayButton()}
                {this.renderTime()}
                {this.renderProgressBar()}
                {this.renderSwitchSoundButton()}
                {this.renderVolumeBar()}
                {this.renderDownloadButton()}
            </div>
        );
    }
}
