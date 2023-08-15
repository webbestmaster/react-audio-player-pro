import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* global document, HTMLAudioElement */
import { useEffect, useRef, useState } from 'react';
import { setMediaMetadata } from '../lib/media-meta-data/media-meta-data';
import { getRandom, getShiftIndex } from '../lib/number';
import { AudioPlayerHead } from './audio-player-head/c-audio-player-head';
import { AudioPlayerTrackList } from './audio-player-track-list/c-audio-player-track-list';
import { playerPlayingStateTypeMap, playerRepeatingStateTypeList, playerRepeatingStateTypeMap, seekStepSecond, } from './audio-player-const';
import { getDefaultState, getStopHandler } from './audio-player-helper';
import audioPlayerStyle from './audio-player.scss';
// eslint-disable-next-line complexity, max-statements, sonarjs/cognitive-complexity
export function AudioPlayer(props) {
    var _a;
    const { defaultState, className, onDidMount, trackList } = props;
    const defaultDefinedState = getDefaultState(defaultState);
    const duration = ((_a = trackList[0]) === null || _a === void 0 ? void 0 : _a.duration) || 0;
    const [trackCurrentTime, setTrackCurrentTime] = useState(0);
    const [trackFullTime, setTrackFullTime] = useState(duration);
    const [trackVolume, setTrackVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(defaultDefinedState.isMuted);
    const [playingState, setPlayingState] = useState(playerPlayingStateTypeMap.paused);
    const [activeIndex, setActiveIndex] = useState(defaultDefinedState.activeIndex);
    const [isShuffleOn, setIsShuffleOn] = useState(defaultDefinedState.isShuffleOn);
    const [repeatingState, setRepeatingState] = useState(defaultDefinedState.repeatingState);
    const [isTrackListOpen, setIsTrackListOpen] = useState(defaultDefinedState.isTrackListOpen);
    const [isLoadingMetadata, setIsLoadingMetadata] = useState(false);
    const [isOnEndState, setIsOnEndState] = useState(false);
    const refAudio = useRef(null);
    function getAudioTag() {
        const audioTag = refAudio.current;
        if (audioTag) {
            return audioTag;
        }
        console.error('Audio tag is not exists');
        return document.createElement('audio');
    }
    useEffect(() => {
        const audioTag = getAudioTag();
        if (onDidMount) {
            onDidMount(audioTag);
        }
    }, [onDidMount]);
    function getTrackByIndex(trackIndex) {
        return trackList[trackIndex] || null;
    }
    function getCurrentTrack() {
        return getTrackByIndex(activeIndex);
    }
    function setActiveTrackIndex(newActiveIndex) {
        setActiveIndex(newActiveIndex);
        setIsLoadingMetadata(true);
        setTrackCurrentTime(0);
        setTrackFullTime(0);
        // eslint-disable-next-line no-use-before-define, @typescript-eslint/no-use-before-define
        updateMediaMetadata();
    }
    function handleClickNextTrack() {
        const nextIndex = getShiftIndex(trackList.length, activeIndex, 1);
        setActiveTrackIndex(nextIndex);
    }
    function handleClickPrevTrack() {
        const nextIndex = getShiftIndex(trackList.length, activeIndex, -1);
        setActiveTrackIndex(nextIndex);
    }
    function seekForward() {
        const audioTag = getAudioTag();
        audioTag.currentTime += seekStepSecond;
    }
    function seekBackward() {
        const audioTag = getAudioTag();
        audioTag.currentTime -= seekStepSecond;
    }
    function updateMediaMetadata() {
        const track = getCurrentTrack();
        if (!track) {
            return;
        }
        const { mediaMetadata } = track;
        if (mediaMetadata) {
            setMediaMetadata(mediaMetadata, {
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                nexttrack: handleClickNextTrack,
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                previoustrack: handleClickPrevTrack,
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                seekbackward: seekBackward,
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                seekforward: seekForward,
                stop: getStopHandler(getAudioTag()),
            });
        }
    }
    function getCurrentTrackSrcAsString() {
        const track = getCurrentTrack();
        return track ? track.src : '';
    }
    function handleAudioTagOnLoadedMetadata() {
        const audioTag = getAudioTag();
        setIsLoadingMetadata(false);
        setTrackFullTime(audioTag.duration);
        audioTag.volume = trackVolume;
    }
    function handleAudioTagOnPause() {
        setPlayingState(playerPlayingStateTypeMap.paused);
    }
    function handleAudioTagOnVolumeChange() {
        const audioTag = getAudioTag();
        setIsMuted(audioTag.muted);
        setTrackVolume(audioTag.volume);
    }
    function handleClickPlay() {
        const audioTag = getAudioTag();
        if (audioTag.paused) {
            audioTag.play();
        }
        else {
            audioTag.pause();
        }
    }
    // eslint-disable-next-line complexity, max-statements
    function handleAudioTagOnEnded() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
        const { one: repeatOne, all: repeatAll, none: repeatNone } = playerRepeatingStateTypeMap;
        const trackListLength = trackList.length;
        setIsOnEndState(true);
        if (trackListLength <= 1) {
            setActiveIndex(0);
            setTrackCurrentTime(0);
            return;
        }
        if (isShuffleOn) {
            const randomActiveIndex = getRandom(0, trackListLength, [activeIndex]);
            setActiveTrackIndex(randomActiveIndex);
            return;
        }
        if (repeatingState === repeatOne) {
            setIsOnEndState(false);
            handleClickPlay();
            return;
        }
        if (repeatingState === repeatAll) {
            handleClickNextTrack();
            return;
        }
        // repeatingState === repeatNone, no last track
        if (activeIndex < trackListLength - 1) {
            handleClickNextTrack();
            return;
        }
        // repeatingState === repeatNone, last track
        setIsOnEndState(false);
        setActiveTrackIndex(0);
    }
    function handleAudioTagOnPlay() {
        setPlayingState(playerPlayingStateTypeMap.playing);
        updateMediaMetadata();
    }
    function handleAudioTagCanOnPlay() {
        if (isOnEndState) {
            setIsOnEndState(false);
            handleClickPlay();
        }
    }
    function handleAudioTagOnTimeUpdate() {
        const audioTag = getAudioTag();
        setTrackCurrentTime(audioTag.currentTime);
    }
    function handleClickMute() {
        const audioTag = getAudioTag();
        const isNewMuted = !audioTag.muted;
        audioTag.muted = isNewMuted;
        setIsMuted(isNewMuted);
    }
    function handleClickShuffle() {
        setIsShuffleOn(!isShuffleOn);
    }
    function handleClickRepeat() {
        const currentIndex = playerRepeatingStateTypeList.indexOf(repeatingState);
        const nextIndex = (currentIndex + 1) % playerRepeatingStateTypeList.length;
        setRepeatingState(playerRepeatingStateTypeList[nextIndex]);
    }
    function handleClickShowHideTrackList() {
        setIsTrackListOpen(!isTrackListOpen);
    }
    function handleChangeProgressBar(trackCurrentProgress) {
        const audioTag = getAudioTag();
        audioTag.currentTime = trackCurrentProgress * trackFullTime;
    }
    function handleChangeVolumeBar(VolumeBarValue) {
        const audioTag = getAudioTag();
        audioTag.volume = VolumeBarValue;
    }
    function playByIndex(trackIndex) {
        setActiveIndex(trackIndex);
        setIsLoadingMetadata(true);
        const audioTag = getAudioTag();
        function handleOnCanPlay() {
            setIsLoadingMetadata(false);
            audioTag.removeEventListener('canplay', handleOnCanPlay, false);
            audioTag.play();
        }
        audioTag.addEventListener('canplay', handleOnCanPlay, false);
    }
    return (_jsxs("div", { className: className || '', children: [_jsx("audio", { autoPlay: playingState === playerPlayingStateTypeMap.playing, className: audioPlayerStyle.audio_tag, muted: isMuted, onCanPlay: handleAudioTagCanOnPlay, onEnded: handleAudioTagOnEnded, onLoadedMetadata: handleAudioTagOnLoadedMetadata, onPause: handleAudioTagOnPause, onPlay: handleAudioTagOnPlay, onTimeUpdate: handleAudioTagOnTimeUpdate, onVolumeChange: handleAudioTagOnVolumeChange, preload: "metadata", ref: refAudio, src: getCurrentTrackSrcAsString(), 
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                volume: trackVolume, children: _jsx("track", { kind: "captions", src: getCurrentTrackSrcAsString() }) }, "audio-tag"), _jsx(AudioPlayerHead, { isLoading: isLoadingMetadata, isMuted: isMuted, isShuffleOn: isShuffleOn, isTrackListOpen: isTrackListOpen, onChangeProgressBar: handleChangeProgressBar, onChangeVolumeBar: handleChangeVolumeBar, onClickMuteVolume: handleClickMute, onClickNextTrack: handleClickNextTrack, onClickPlay: handleClickPlay, onClickPrevTrack: handleClickPrevTrack, onClickRepeat: handleClickRepeat, onClickShuffle: handleClickShuffle, onClickTrackList: handleClickShowHideTrackList, playingState: playingState, repeatingState: repeatingState, trackCurrentTime: trackCurrentTime, trackFullTime: trackFullTime, trackVolume: trackVolume }), isTrackListOpen ? (_jsx(AudioPlayerTrackList, { activeIndex: activeIndex, isLoading: isLoadingMetadata, onClickPlay: handleClickPlay, playByIndex: playByIndex, playingState: playingState, setActiveIndex: setActiveTrackIndex, trackList: trackList })) : null] }));
}
//# sourceMappingURL=c-audio-player.js.map