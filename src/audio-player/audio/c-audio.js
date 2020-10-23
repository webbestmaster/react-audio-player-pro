// @flow

/* global setTimeout */

import React, {type Node, useState, useRef, useEffect} from 'react';
import classNames from 'classnames';

import {playerPlayingStateTypeMap, seekStepSecond} from '../audio-player-const';
import {AudioPlayerControlButton} from '../../layout/audio-player-control-button/c-audio-player-control-button';
import {Time} from '../../layout/time/c-time';
import {hasVolumeBar} from '../../lib/system';
import {type PlayerPlayingStateType} from '../audio-player-type';
import {type MediaMetadataType} from '../../lib/media-meta-data/media-meta-data-type';
import {RangeBar} from '../../layout/range-bar/c-range-bar';
import {setMediaMetadata} from '../../lib/media-meta-data/media-meta-data';

import audioStyle from './audio.scss';

type PropsType = {|
    +src: string,
    +mediaMetadata?: MediaMetadataType,
    +className?: string,
    +onDidMount?: (audioNode: HTMLAudioElement | null) => mixed,
    +downloadFileName?: string,
    +useRepeatButton?: boolean,
|};

// eslint-disable-next-line complexity, max-statements, sonarjs/cognitive-complexity
export function Audio(props: PropsType): Node {
    const {src, mediaMetadata, className, onDidMount, downloadFileName, useRepeatButton} = props;

    const refAudio = useRef<?HTMLAudioElement>();
    const [trackCurrentTime, setTrackCurrentTime] = useState<number>(0);
    const [trackFullTime, setTrackFullTime] = useState<number>(0);
    const [trackVolume, setTrackVolume] = useState<number>(hasVolumeBar ? 0.5 : 1);
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [playingState, setPlayingState] = useState<PlayerPlayingStateType>(playerPlayingStateTypeMap.paused);
    const [isRepeatOn, setIsRepeatOn] = useState<boolean>(false);
    const isActualMuted = isMuted || trackVolume === 0;
    const soundImageId = isActualMuted ? 'button-sound-off' : 'button-sound-on';

    function handleOnEnded() {
        const audioTag = refAudio.current;

        if (audioTag) {
            audioTag.currentTime = 0;
        }

        if (isRepeatOn) {
            // TODO: fix this workaround
            setTrackCurrentTime(0);
            setTimeout(handlePlay, 200);
            return;
        }

        setPlayingState(playerPlayingStateTypeMap.paused);
        setTrackCurrentTime(0);
    }

    function handleOnLoadedMetadata() {
        const audioTag = refAudio.current;

        if (!audioTag) {
            return;
        }

        setTrackCurrentTime(0);
        setTrackFullTime(audioTag.duration);

        audioTag.volume = trackVolume;
    }

    function handleOnPause() {
        setPlayingState(playerPlayingStateTypeMap.paused);
    }

    function seekForward() {
        const audioTag = refAudio.current;

        if (audioTag) {
            audioTag.currentTime += seekStepSecond;
        }
    }

    function seekBackward() {
        const audioTag = refAudio.current;

        if (audioTag) {
            audioTag.currentTime -= seekStepSecond;
        }
    }

    function handleOnPlay() {
        setPlayingState(playerPlayingStateTypeMap.playing);

        const seek = {
            seekforward: seekForward,
            seekbackward: seekBackward,
        };

        if (mediaMetadata) {
            setMediaMetadata(mediaMetadata, seek);
            return;
        }

        setMediaMetadata({title: src}, seek);
    }

    function handleOnTimeUpdate() {
        const audioTag = refAudio.current;

        if (!audioTag) {
            return;
        }

        setTrackCurrentTime(audioTag.currentTime);
    }

    function handleOnVolumeChange() {
        const audioTag = refAudio.current;

        if (!audioTag) {
            return;
        }

        setIsMuted(audioTag.muted);
        setTrackVolume(audioTag.volume);
    }

    function handlePause() {
        const audioTag = refAudio.current;

        if (!audioTag) {
            console.error('[handlePause]: can not get audio tag');
            return;
        }

        audioTag.pause();
    }

    function handlePlay() {
        const audioTag = refAudio.current;

        if (!audioTag) {
            console.error('[handlePlay]: can not get audio tag');
            return;
        }

        audioTag.play();
    }

    function handleRepeat() {
        setIsRepeatOn(!isRepeatOn);
    }

    function handleOnChangeProgressBar(progress: number) {
        const audioTag = refAudio.current;

        if (!audioTag) {
            return;
        }

        const audioTagTrackCurrentTime = progress * trackFullTime;

        audioTag.currentTime = audioTagTrackCurrentTime;

        setTrackCurrentTime(audioTagTrackCurrentTime);
    }

    function handleToggleMute() {
        const audioTag = refAudio.current;

        if (!audioTag) {
            return;
        }

        const audioTagIsMuted = !audioTag.muted;

        audioTag.muted = audioTagIsMuted;
        setIsMuted(audioTagIsMuted);
    }

    function handleOnChangeVolumeBar(volumeBarValue: number) {
        const audioTag = refAudio.current;

        if (!audioTag) {
            return;
        }

        audioTag.volume = volumeBarValue;

        setTrackVolume(volumeBarValue);
    }

    useEffect(() => {
        const audioTag = refAudio.current;

        if (onDidMount) {
            onDidMount(audioTag);
        }
    }, [onDidMount]);

    return (
        <div className={classNames(audioStyle.audio, className)}>
            <audio
                className={audioStyle.audio_tag}
                onEnded={handleOnEnded}
                onLoadedMetadata={handleOnLoadedMetadata}
                onPause={handleOnPause}
                onPlay={handleOnPlay}
                onTimeUpdate={handleOnTimeUpdate}
                onVolumeChange={handleOnVolumeChange}
                preload="metadata"
                ref={refAudio}
                src={src}
                volume={trackVolume}
            >
                <track kind="captions" src={src}/>
            </audio>

            {playingState === playerPlayingStateTypeMap.playing
                ? <AudioPlayerControlButton ariaLabel="pause" imageId="button-pause" onClick={handlePause}/>
                : <AudioPlayerControlButton ariaLabel="play" imageId="button-play" onClick={handlePlay}/>}

            {useRepeatButton === true
                ? <AudioPlayerControlButton
                    ariaLabel="repeat"
                    imageId="button-repeat"
                    isActive={isRepeatOn}
                    onClick={handleRepeat}
                />
                : null}

            <Time className={audioStyle.time} currentTime={trackCurrentTime} fullTime={trackFullTime}/>

            <RangeBar onChange={handleOnChangeProgressBar} progress={trackCurrentTime / trackFullTime}/>

            {hasVolumeBar
                ? <AudioPlayerControlButton ariaLabel="switch-sound" imageId={soundImageId} onClick={handleToggleMute}/>
                : null}

            {hasVolumeBar
                ? <RangeBar
                    className={audioStyle.sound_range}
                    onChange={handleOnChangeVolumeBar}
                    progress={trackVolume}
                />
                : null}

            <a className={audioStyle.download_button} download={downloadFileName || true} href={src}>
                <AudioPlayerControlButton ariaLabel="download" imageId="button-download"/>
            </a>
        </div>
    );
}
