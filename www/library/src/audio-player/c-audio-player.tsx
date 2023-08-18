/* global document, HTMLAudioElement */

import {useEffect, useRef, useState} from "react";

import {setMediaMetadata} from "../lib/media-meta-data/media-meta-data";
import {getRandom, getShiftIndex} from "../lib/number";
import {DefaultAudioPlayerStateType, PlayerPlayingStateType, PlayerRepeatingStateType, TrackType} from "../../library";

import {AudioPlayerHead} from "./audio-player-head/c-audio-player-head";
import {AudioPlayerTrackList} from "./audio-player-track-list/c-audio-player-track-list";

import {
    playerPlayingStateTypeMap,
    playerRepeatingStateTypeList,
    playerRepeatingStateTypeMap,
    seekStepSecond,
} from "./audio-player-const";

import {getDefaultState, getStopHandler} from "./audio-player-helper";
import audioPlayerStyle from "./audio-player.scss";

export type AudioPlayerPropsType = Readonly<{
    // eslint-disable-next-line unicorn/no-keyword-prefix
    className?: string;
    defaultState?: DefaultAudioPlayerStateType;
    onDidMount?: (audioNode: HTMLAudioElement | null) => void;
    trackList: Array<TrackType>;
}>;

// eslint-disable-next-line complexity, max-statements, sonarjs/cognitive-complexity
export function AudioPlayer(props: AudioPlayerPropsType): JSX.Element {
    // eslint-disable-next-line unicorn/no-keyword-prefix
    const {defaultState, className, onDidMount, trackList} = props;

    const defaultDefinedState = getDefaultState(defaultState);
    const duration: number = trackList.at(0)?.duration ?? 0;

    const [trackCurrentTime, setTrackCurrentTime] = useState<number>(0);
    const [trackFullTime, setTrackFullTime] = useState<number>(duration);
    const [trackVolume, setTrackVolume] = useState<number>(1);
    const [isMuted, setIsMuted] = useState<boolean>(defaultDefinedState.isMuted);
    const [playingState, setPlayingState] = useState<PlayerPlayingStateType>(playerPlayingStateTypeMap.paused);
    const [activeIndex, setActiveIndex] = useState<number>(defaultDefinedState.activeIndex);
    const [isShuffleOn, setIsShuffleOn] = useState<boolean>(defaultDefinedState.isShuffleOn);
    const [repeatingState, setRepeatingState] = useState<PlayerRepeatingStateType>(defaultDefinedState.repeatingState);
    const [isTrackListOpen, setIsTrackListOpen] = useState<boolean>(defaultDefinedState.isTrackListOpen);
    const [isLoadingMetadata, setIsLoadingMetadata] = useState<boolean>(false);
    const [isOnEndState, setIsOnEndState] = useState<boolean>(false);
    const refAudio = useRef<HTMLAudioElement | null>(null);

    function getAudioTag(): HTMLAudioElement {
        const audioTag = refAudio.current;

        if (audioTag) {
            return audioTag;
        }

        console.error("Audio tag is not exists");

        return document.createElement("audio");
    }

    useEffect(() => {
        const audioTag = getAudioTag();

        if (onDidMount) {
            onDidMount(audioTag);
        }
    }, [onDidMount]);

    function getTrackByIndex(trackIndex: number): TrackType | null {
        return trackList[trackIndex] || null;
    }

    function getCurrentTrack(): TrackType | null {
        return getTrackByIndex(activeIndex);
    }

    function setActiveTrackIndex(updatedActiveIndex: number) {
        setActiveIndex(updatedActiveIndex);
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

        const {mediaMetadata} = track;

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

    function getCurrentTrackSrcAsString(): string {
        const track = getCurrentTrack();

        return track ? track.src : "";
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
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            audioTag.play();
        } else {
            audioTag.pause();
        }
    }

    // eslint-disable-next-line complexity, max-statements
    function handleAudioTagOnEnded() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
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

        // The repeatingState === repeatNone, no last track
        if (activeIndex < trackListLength - 1) {
            handleClickNextTrack();
            return;
        }

        // The repeatingState === repeatNone, last track
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

    function handleChangeProgressBar(trackCurrentProgress: number) {
        const audioTag = getAudioTag();

        audioTag.currentTime = trackCurrentProgress * trackFullTime;
    }

    function handleChangeVolumeBar(VolumeBarValue: number) {
        const audioTag = getAudioTag();

        audioTag.volume = VolumeBarValue;
    }

    function playByIndex(trackIndex: number) {
        setActiveIndex(trackIndex);
        setIsLoadingMetadata(true);

        const audioTag = getAudioTag();

        function handleOnCanPlay() {
            setIsLoadingMetadata(false);

            audioTag.removeEventListener("canplay", handleOnCanPlay, false);

            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            audioTag.play();
        }

        audioTag.addEventListener("canplay", handleOnCanPlay, false);
    }

    return (
        // eslint-disable-next-line unicorn/no-keyword-prefix
        <div className={className ?? ""}>
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
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
                // @ts-ignore
                volume={trackVolume} // eslint-disable-line react/no-unknown-property
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

            {isTrackListOpen ? (
                <AudioPlayerTrackList
                    activeIndex={activeIndex}
                    isLoading={isLoadingMetadata}
                    onClickPlay={handleClickPlay}
                    playByIndex={playByIndex}
                    playingState={playingState}
                    setActiveIndex={setActiveTrackIndex}
                    trackList={trackList}
                />
            ) : null}
        </div>
    );
}
