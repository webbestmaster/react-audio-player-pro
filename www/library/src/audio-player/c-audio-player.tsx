/* global document */

import {useEffect, useRef, useState} from 'react';

import {setMediaMetadata} from '../lib/media-meta-data/media-meta-data';
import {getRandom, getShiftIndex} from '../lib/number';
import {hasVolumeBar} from '../lib/system';
import {IsRender} from '../layout/is-render/c-is-render';

import {AudioPlayerHead} from './audio-player-head/c-audio-player-head';
import {AudioPlayerTrackList} from './audio-player-track-list/c-audio-player-track-list';
import type {
    AudioPlayerPropsType,
    PlayerPlayingStateType,
    PlayerRepeatingStateType,
    TrackType,
} from './audio-player-type';

import {
    playerPlayingStateTypeMap,
    playerRepeatingStateTypeList,
    playerRepeatingStateTypeMap,
    seekStepSecond,
} from './audio-player-const';

import {getDefaultState, getStopHandler} from './audio-player-helper';
import audioPlayerStyle from './audio-player.scss';

type PropsType = AudioPlayerPropsType;

// eslint-disable-next-line complexity, max-statements, sonarjs/cognitive-complexity
export function AudioPlayer(props: PropsType): JSX.Element {
    const {defaultState, className, onDidMount, trackList} = props;

    const defaultDefinedState = getDefaultState(defaultState);

    const [trackCurrentTime, setTrackCurrentTime] = useState<number>(0);
    const [trackFullTime, setTrackFullTime] = useState<number>(0);
    const [trackVolume, setTrackVolume] = useState<number>(hasVolumeBar ? 0.5 : 1);
    const [isMuted, setIsMuted] = useState<boolean>(defaultDefinedState.isMuted);
    const [playingState, setPlayingState] = useState<PlayerPlayingStateType>(playerPlayingStateTypeMap.paused);
    const [activeIndex, setActiveIndex] = useState<number>(defaultDefinedState.activeIndex);
    const [isShuffleOn, setIsShuffleOn] = useState<boolean>(defaultDefinedState.isShuffleOn);
    const [repeatingState, setRepeatingState] = useState<PlayerRepeatingStateType>(defaultDefinedState.repeatingState);
    const [isTrackListOpen, setIsTrackListOpen] = useState<boolean>(defaultDefinedState.isTrackListOpen);
    const [isLoadingMetadata, setIsLoadingMetadata] = useState<boolean>(false);
    const [isOnEndState, setIsOnEndState] = useState<boolean>(false);
    const refAudio = useRef<?HTMLAudioElement>();

    function getAudioTag(): HTMLAudioElement {
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

    function getCurrentTrack(): TrackType | null {
        return getTrackByIndex(activeIndex);
    }

    function getTrackByIndex(trackIndex: number): TrackType | null {
        return trackList[trackIndex] || null;
    }

    function getCurrentTrackSrcAsString(): string {
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

    // eslint-disable-next-line complexity, max-statements
    function handleAudioTagOnEnded() {
        const {one: repeatOne, all: repeatAll, none: repeatNone} = playerRepeatingStateTypeMap;
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

    function updateMediaMetadata() {
        const track = getCurrentTrack();

        if (!track) {
            return;
        }

        const {mediaMetadata} = track;

        if (mediaMetadata) {
            setMediaMetadata(mediaMetadata, {
                seekforward: seekForward,
                seekbackward: seekBackward,
                previoustrack: handleClickPrevTrack,
                nexttrack: handleClickNextTrack,
                stop: getStopHandler(getAudioTag()),
            });
        }
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

    function seekForward() {
        const audioTag = getAudioTag();

        audioTag.currentTime += seekStepSecond;
    }

    function seekBackward() {
        const audioTag = getAudioTag();

        audioTag.currentTime -= seekStepSecond;
    }

    function handleClickPlay() {
        const audioTag = getAudioTag();

        if (audioTag.paused) {
            audioTag.play();
        } else {
            audioTag.pause();
        }
    }

    function handleClickMute() {
        const audioTag = getAudioTag();

        const isNewMuted = !audioTag.muted;

        audioTag.muted = isNewMuted;

        setIsMuted(isNewMuted);
    }

    function handleClickNextTrack() {
        const nextIndex = getShiftIndex(trackList.length, activeIndex, 1);

        setActiveTrackIndex(nextIndex);
    }

    function handleClickPrevTrack() {
        const nextIndex = getShiftIndex(trackList.length, activeIndex, -1);

        setActiveTrackIndex(nextIndex);
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

    function handleChangeProgressBar(trackCurrentProgress: number) {
        const audioTag = getAudioTag();

        audioTag.currentTime = trackCurrentProgress * trackFullTime;
    }

    function handleChangeVolumeBar(VolumeBarValue: number) {
        const audioTag = getAudioTag();

        audioTag.volume = VolumeBarValue;
    }

    function setActiveTrackIndex(newActiveIndex: number) {
        setActiveIndex(newActiveIndex);
        setIsLoadingMetadata(true);
        setTrackCurrentTime(0);
        setTrackFullTime(0);

        updateMediaMetadata();
    }

    function playByIndex(trackIndex: number) {
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

    return (
        <div className={className || ''}>
            <audio
                autoPlay={playingState === playerPlayingStateTypeMap.playing}
                className={audioPlayerStyle.audio_tag}
                key="audio-tag"
                muted={isMuted}
                onCanPlay={handleAudioTagCanOnPlay}
                onEnded={handleAudioTagOnEnded}
                onLoadedMetadata={handleAudioTagOnLoadedMetadata}
                onPause={handleAudioTagOnPause}
                onPlay={handleAudioTagOnPlay}
                onTimeUpdate={handleAudioTagOnTimeUpdate}
                onVolumeChange={handleAudioTagOnVolumeChange}
                preload="metadata"
                ref={refAudio}
                src={getCurrentTrackSrcAsString()}
                volume={trackVolume}
            >
                <track kind="captions" src={getCurrentTrackSrcAsString()} />
            </audio>

            <AudioPlayerHead
                isLoading={isLoadingMetadata}
                isMuted={isMuted}
                isShuffleOn={isShuffleOn}
                isTrackListOpen={isTrackListOpen}
                onChangeProgressBar={handleChangeProgressBar}
                onChangeVolumeBar={handleChangeVolumeBar}
                onClickMuteVolume={handleClickMute}
                onClickNextTrack={handleClickNextTrack}
                onClickPlay={handleClickPlay}
                onClickPrevTrack={handleClickPrevTrack}
                onClickRepeat={handleClickRepeat}
                onClickShuffle={handleClickShuffle}
                onClickTrackList={handleClickShowHideTrackList}
                playingState={playingState}
                repeatingState={repeatingState}
                trackCurrentTime={trackCurrentTime}
                trackFullTime={trackFullTime}
                trackVolume={trackVolume}
            />

            <IsRender isRender={isTrackListOpen}>
                <AudioPlayerTrackList
                    activeIndex={activeIndex}
                    isLoading={isLoadingMetadata}
                    onClickPlay={handleClickPlay}
                    playByIndex={playByIndex}
                    playingState={playingState}
                    setActiveIndex={setActiveTrackIndex}
                    trackList={trackList}
                />
            </IsRender>
        </div>
    );
}
