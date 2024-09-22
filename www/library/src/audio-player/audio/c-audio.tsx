/* global HTMLAudioElement, MediaMetadataInit */
/* eslint react/no-unknown-property: ['error', { ignore: ['volume'] }], sonarjs/no-unknown-property: ['error', { ignore: ['volume'] }] */

import {type JSX, useEffect, useRef, useState} from "react";

import type {AudioPreloadValueType, PlayerPlayingStateType, TrackType} from "../../../library";
import {audioPlayerControlTagNameMap} from "../../layout/audio-player-control-button/audio-player-control-button-const";
import {AudioPlayerControlButton} from "../../layout/audio-player-control-button/c-audio-player-control-button";
import {RangeBar} from "../../layout/range-bar/c-range-bar";
import {Time} from "../../layout/time/c-time";
import {cls} from "../../lib/css";
import {setMediaMetadata} from "../../lib/media-meta-data/media-meta-data";
import {PlayListMenuButton} from "../../play-list/add-track-to-play-list-button/c-add-track-to-play-list-button";
import {playerPlayingStateTypeMap, seekStepSecond} from "../audio-player-const";
import {getStopHandler} from "../audio-player-helper";
import * as audioStyle from "./audio.scss";

export interface AudioPropsType {
    readonly className?: string;
    readonly downloadFileName?: string;
    readonly duration?: number;
    readonly mediaMetadata?: MediaMetadataInit;
    readonly onDidMount?: (audioNode: HTMLAudioElement | null) => void;
    readonly preload?: AudioPreloadValueType;
    readonly src: string;
    readonly useRepeatButton?: boolean;
}

// eslint-disable-next-line max-statements
export function Audio(props: AudioPropsType): JSX.Element {
    const {
        className,
        downloadFileName,
        duration = 0,
        mediaMetadata,
        onDidMount,
        preload = "auto",
        src,
        useRepeatButton = false,
    } = props;

    const refAudio = useRef<HTMLAudioElement | null>(null);
    const [trackCurrentTime, setTrackCurrentTime] = useState<number>(0);
    const [trackFullTime, setTrackFullTime] = useState<number>(duration);
    const [trackVolume, setTrackVolume] = useState<number>(1);
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [playingState, setPlayingState] = useState<PlayerPlayingStateType>(playerPlayingStateTypeMap.paused);
    const [isRepeatOn, setIsRepeatOn] = useState<boolean>(false);
    const isActualMuted = isMuted || trackVolume === 0;
    const soundImageId = isActualMuted ? "button-sound-off" : "button-sound-on";

    function getAudioTag(): HTMLAudioElement {
        const audioTag = refAudio.current;

        if (audioTag) {
            return audioTag;
        }

        throw new Error("Audio tag is not exists");
    }

    function handleClickPlay(): void {
        const audioTag = getAudioTag();

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        audioTag.play();
    }

    function handleOnEnded(): void {
        const audioTag = getAudioTag();

        audioTag.currentTime = 0;

        if (isRepeatOn) {
            setTrackCurrentTime(0);
            handleClickPlay();
            return;
        }

        setPlayingState(playerPlayingStateTypeMap.paused);
        setTrackCurrentTime(0);
    }

    function handleOnLoadedMetadata(): void {
        const audioTag = getAudioTag();

        setTrackCurrentTime(0);
        setTrackFullTime(audioTag.duration);

        audioTag.volume = trackVolume;
    }

    function handleOnPause(): void {
        setPlayingState(playerPlayingStateTypeMap.paused);
    }

    function seekForward(): void {
        const audioTag = getAudioTag();

        audioTag.currentTime += seekStepSecond;
    }

    function seekBackward(): void {
        const audioTag = getAudioTag();

        audioTag.currentTime -= seekStepSecond;
    }

    function handleOnPlay(): void {
        setPlayingState(playerPlayingStateTypeMap.playing);

        const seek = {
            seekbackward: seekBackward,
            seekforward: seekForward,
            stop: getStopHandler(getAudioTag()),
        };

        if (mediaMetadata) {
            setMediaMetadata(mediaMetadata, seek);
            return;
        }

        setMediaMetadata({title: src}, seek);
    }

    function handleOnTimeUpdate(): void {
        const audioTag = getAudioTag();

        setTrackCurrentTime(audioTag.currentTime);
    }

    function handleOnVolumeChange(): void {
        const audioTag = getAudioTag();

        setIsMuted(audioTag.muted);
        setTrackVolume(audioTag.volume);
    }

    function handleClickPause(): void {
        const audioTag = getAudioTag();

        audioTag.pause();
    }

    function handleClickRepeat(): void {
        setIsRepeatOn(!isRepeatOn);
    }

    function handleOnChangeProgressBar(progress: number): void {
        const audioTag = getAudioTag();
        const audioTagTrackCurrentTime = progress * trackFullTime;

        audioTag.currentTime = audioTagTrackCurrentTime;

        setTrackCurrentTime(audioTagTrackCurrentTime);
    }

    function handleClickToggleMute(): void {
        const audioTag = getAudioTag();
        const audioTagIsMuted = !audioTag.muted;

        audioTag.muted = audioTagIsMuted;
        setIsMuted(audioTagIsMuted);
    }

    function handleChangeVolumeBar(volumeBarValue: number): void {
        const audioTag = getAudioTag();

        audioTag.volume = volumeBarValue;

        setTrackVolume(volumeBarValue);
    }

    useEffect(() => {
        const audioTag = getAudioTag();

        if (onDidMount) {
            onDidMount(audioTag);
        }
    }, [onDidMount]);

    const track: TrackType = mediaMetadata ? {mediaMetadata, src} : {src};

    return (
        <div className={cls(audioStyle.audio, className)}>
            <audio
                className={audioStyle.audio_tag}
                onEnded={handleOnEnded}
                onLoadedMetadata={handleOnLoadedMetadata}
                onPause={handleOnPause}
                onPlay={handleOnPlay}
                onTimeUpdate={handleOnTimeUpdate}
                onVolumeChange={handleOnVolumeChange}
                preload={preload}
                ref={refAudio}
                src={src}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                volume={trackVolume}
            >
                <track kind="captions" src={src} />
            </audio>

            {playingState === playerPlayingStateTypeMap.playing ? (
                <AudioPlayerControlButton ariaLabel="pause" imageId="button-pause" onClick={handleClickPause} />
            ) : (
                <AudioPlayerControlButton ariaLabel="play" imageId="button-play" onClick={handleClickPlay} />
            )}

            {useRepeatButton ? (
                <AudioPlayerControlButton
                    ariaLabel="repeat"
                    imageId="button-repeat"
                    isActive={isRepeatOn}
                    onClick={handleClickRepeat}
                />
            ) : null}

            <Time className={audioStyle.time} currentTime={trackCurrentTime} fullTime={trackFullTime} />

            <RangeBar
                ariaLabel="progress bar"
                onChange={handleOnChangeProgressBar}
                progress={trackCurrentTime / trackFullTime}
            />

            <AudioPlayerControlButton
                ariaLabel="switch-sound"
                imageId={soundImageId}
                isHideForNarrow
                onClick={handleClickToggleMute}
            />

            <RangeBar
                ariaLabel="volume bar"
                className={audioStyle.sound_range}
                isHideForNarrow
                onChange={handleChangeVolumeBar}
                progress={trackVolume}
            />

            <a
                aria-label="download"
                className={audioStyle.download_button}
                download={downloadFileName ?? true}
                href={src}
            >
                <AudioPlayerControlButton
                    ariaLabel="download"
                    imageId="button-download"
                    tag={audioPlayerControlTagNameMap.span}
                />
            </a>

            <PlayListMenuButton track={track} />
        </div>
    );
}
