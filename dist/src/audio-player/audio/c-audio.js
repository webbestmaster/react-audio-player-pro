import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* global HTMLAudioElement, MediaMetadataInit */
/* eslint react/no-unknown-property: ['error', { ignore: ['volume'] }] */
import { useEffect, useRef, useState } from "react";
import { audioPlayerControlTagNameMap } from "../../layout/audio-player-control-button/audio-player-control-button-const";
import { AudioPlayerControlButton } from "../../layout/audio-player-control-button/c-audio-player-control-button";
import { RangeBar } from "../../layout/range-bar/c-range-bar";
import { Time } from "../../layout/time/c-time";
import { cls } from "../../lib/css";
import { setMediaMetadata } from "../../lib/media-meta-data/media-meta-data";
import { PlayListMenuButton } from "../../play-list/add-track-to-play-list-button/c-add-track-to-play-list-button";
import { playerPlayingStateTypeMap, seekStepSecond } from "../audio-player-const";
import { getStopHandler } from "../audio-player-helper";
import * as audioStyle from "./audio.scss";
// eslint-disable-next-line max-statements
export function Audio(props) {
    const { className, downloadFileName, duration = 0, mediaMetadata, onDidMount, preload = "auto", src, useRepeatButton = false, } = props;
    const refAudio = useRef(null);
    const [trackCurrentTime, setTrackCurrentTime] = useState(0);
    const [trackFullTime, setTrackFullTime] = useState(duration);
    const [trackVolume, setTrackVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [playingState, setPlayingState] = useState(playerPlayingStateTypeMap.paused);
    const [isRepeatOn, setIsRepeatOn] = useState(false);
    const isActualMuted = isMuted || trackVolume === 0;
    const soundImageId = isActualMuted ? "button-sound-off" : "button-sound-on";
    function getAudioTag() {
        const audioTag = refAudio.current;
        if (audioTag) {
            return audioTag;
        }
        throw new Error("Audio tag is not exists");
    }
    function handleClickPlay() {
        const audioTag = getAudioTag();
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
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
        setMediaMetadata({ title: src }, seek);
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
    function handleOnChangeProgressBar(progress) {
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
    function handleChangeVolumeBar(volumeBarValue) {
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
    const track = mediaMetadata ? { mediaMetadata, src } : { src };
    return (_jsxs("div", { className: cls(audioStyle.audio, className), children: [_jsx("audio", { className: audioStyle.audio_tag, onEnded: handleOnEnded, onLoadedMetadata: handleOnLoadedMetadata, onPause: handleOnPause, onPlay: handleOnPlay, onTimeUpdate: handleOnTimeUpdate, onVolumeChange: handleOnVolumeChange, preload: preload, ref: refAudio, src: src, 
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                volume: trackVolume, children: _jsx("track", { kind: "captions", src: src }) }), playingState === playerPlayingStateTypeMap.playing ? (_jsx(AudioPlayerControlButton, { ariaLabel: "pause", imageId: "button-pause", onClick: handleClickPause })) : (_jsx(AudioPlayerControlButton, { ariaLabel: "play", imageId: "button-play", onClick: handleClickPlay })), useRepeatButton ? (_jsx(AudioPlayerControlButton, { ariaLabel: "repeat", imageId: "button-repeat", isActive: isRepeatOn, onClick: handleClickRepeat })) : null, _jsx(Time, { className: audioStyle.time, currentTime: trackCurrentTime, fullTime: trackFullTime }), _jsx(RangeBar, { ariaLabel: "progress bar", onChange: handleOnChangeProgressBar, progress: trackCurrentTime / trackFullTime }), _jsx(AudioPlayerControlButton, { ariaLabel: "switch-sound", imageId: soundImageId, isHideForNarrow: true, onClick: handleClickToggleMute }), _jsx(RangeBar, { ariaLabel: "volume bar", className: audioStyle.sound_range, isHideForNarrow: true, onChange: handleChangeVolumeBar, progress: trackVolume }), _jsx("a", { "aria-label": "download", className: audioStyle.download_button, download: downloadFileName !== null && downloadFileName !== void 0 ? downloadFileName : true, href: src, children: _jsx(AudioPlayerControlButton, { ariaLabel: "download", imageId: "button-download", tag: audioPlayerControlTagNameMap.span }) }), _jsx(PlayListMenuButton, { track: track })] }));
}
//# sourceMappingURL=c-audio.js.map