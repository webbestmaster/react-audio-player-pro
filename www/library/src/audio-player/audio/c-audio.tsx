/* global HTMLAudioElement, MediaMetadataInit */

import {useEffect, useRef, useState} from 'react';

import {classNames} from '../../lib/css';
import {playerPlayingStateTypeMap, seekStepSecond} from '../audio-player-const';
import {AudioPlayerControlButton} from '../../layout/audio-player-control-button/c-audio-player-control-button';
import {Time} from '../../layout/time/c-time';
import {PlayerPlayingStateType} from '../../../library';
import {RangeBar} from '../../layout/range-bar/c-range-bar';
import {setMediaMetadata} from '../../lib/media-meta-data/media-meta-data';
import {getStopHandler} from '../audio-player-helper';
import {PlayListMenuButton} from '../../play-list/add-track-to-play-list-button/c-add-track-to-play-list-button';
import {audioPlayerControlTagNameMap} from '../../layout/audio-player-control-button/audio-player-control-button-const';

import audioStyle from './audio.scss';

export type AudioPropsType = {
    className?: string;
    downloadFileName?: string;
    mediaMetadata?: MediaMetadataInit;
    onDidMount?: (audioNode: HTMLAudioElement | null) => void;
    src: string;
    useRepeatButton?: boolean;
};

// eslint-disable-next-line complexity, max-statements, sonarjs/cognitive-complexity
export function Audio(props: AudioPropsType): JSX.Element {
    const {src, mediaMetadata, className, onDidMount, downloadFileName, useRepeatButton = false} = props;

    const refAudio = useRef<HTMLAudioElement | null>(null);
    const [trackCurrentTime, setTrackCurrentTime] = useState<number>(0);
    const [trackFullTime, setTrackFullTime] = useState<number>(0);
    const [trackVolume, setTrackVolume] = useState<number>(1);
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [playingState, setPlayingState] = useState<PlayerPlayingStateType>(playerPlayingStateTypeMap.paused);
    const [isRepeatOn, setIsRepeatOn] = useState<boolean>(false);
    const isActualMuted = isMuted || trackVolume === 0;
    const soundImageId = isActualMuted ? 'button-sound-off' : 'button-sound-on';

    function getAudioTag(): HTMLAudioElement {
        const audioTag = refAudio.current;

        if (audioTag) {
            return audioTag;
        }

        throw new Error('Audio tag is not exists');
    }

    function handleClickPlay() {
        const audioTag = getAudioTag();

        audioTag.play();
    }

    function handleOnEnded() {
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

    function handleOnLoadedMetadata() {
        const audioTag = getAudioTag();

        setTrackCurrentTime(0);
        setTrackFullTime(audioTag.duration);

        audioTag.volume = trackVolume;
    }

    function handleOnPause() {
        setPlayingState(playerPlayingStateTypeMap.paused);
    }

    function seekForward() {
        const audioTag = getAudioTag();

        audioTag.currentTime += seekStepSecond;
    }

    function seekBackward() {
        const audioTag = getAudioTag();

        audioTag.currentTime -= seekStepSecond;
    }

    function handleOnPlay() {
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

    function handleOnTimeUpdate() {
        const audioTag = getAudioTag();

        setTrackCurrentTime(audioTag.currentTime);
    }

    function handleOnVolumeChange() {
        const audioTag = getAudioTag();

        setIsMuted(audioTag.muted);
        setTrackVolume(audioTag.volume);
    }

    function handleClickPause() {
        const audioTag = getAudioTag();

        audioTag.pause();
    }

    function handleClickRepeat() {
        setIsRepeatOn(!isRepeatOn);
    }

    function handleOnChangeProgressBar(progress: number) {
        const audioTag = getAudioTag();
        const audioTagTrackCurrentTime = progress * trackFullTime;

        audioTag.currentTime = audioTagTrackCurrentTime;

        setTrackCurrentTime(audioTagTrackCurrentTime);
    }

    function handleClickToggleMute() {
        const audioTag = getAudioTag();
        const audioTagIsMuted = !audioTag.muted;

        audioTag.muted = audioTagIsMuted;
        setIsMuted(audioTagIsMuted);
    }

    function handleChangeVolumeBar(volumeBarValue: number) {
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

            <a className={audioStyle.download_button} download={downloadFileName || true} href={src}>
                <AudioPlayerControlButton
                    ariaLabel="download"
                    imageId="button-download"
                    tag={audioPlayerControlTagNameMap.span}
                />
            </a>

            <PlayListMenuButton
                track={{
                    mediaMetadata,
                    src,
                }}
            />
        </div>
    );
}
