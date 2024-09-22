/* eslint-disable capitalized-comments */

/* global MediaMetadataInit */

import type {JSX} from "react";

export type PlayerPlayingStateType = "paused" | "playing" | "stopped";

export type PlayerRepeatingStateType = "all" | "none" | "one";

export type AudioPreloadValueType = "auto" | "metadata" | "none";

export type TrackType = Readonly<{
    content?: JSX.Element | string;
    duration?: number;
    mediaMetadata?: MediaMetadataInit;
    preload?: AudioPreloadValueType;
    src: string;
}>;

export type SavedTrackType = Readonly<{
    content?: string;
    duration?: number;
    id: string;
    mediaMetadata?: MediaMetadataInit;
    preload?: AudioPreloadValueType;
    src: string;
}>;

export type DefaultAudioPlayerStateType = Readonly<{
    activeIndex?: number;
    isMuted?: boolean;
    isShuffleOn?: boolean;
    isTrackListOpen?: boolean;
    repeatingState?: PlayerRepeatingStateType;
}>;

export type DefaultDefinedAudioPlayerStateType = Readonly<{
    activeIndex: number;
    isMuted: boolean;
    isShuffleOn: boolean;
    isTrackListOpen: boolean;
    repeatingState: PlayerRepeatingStateType;
}>;

/*
export type AudioPlayerStateType = Readonly<{
    activeIndex: number;
    isLoadingMetadata: boolean;
    isMuted: boolean;
    isShuffleOn: boolean;
    isTrackListOpen: boolean;
    playingState: PlayerPlayingStateType;
    repeatingState: PlayerRepeatingStateType;
    trackCurrentTime: number;
    trackFullTime: number;
    trackVolume: number;
}>;
*/

export {Audio} from "./src/audio-player/audio/c-audio";
export {type AudioPropsType} from "./src/audio-player/audio/c-audio";
export {AudioPlayer} from "./src/audio-player/c-audio-player";
export {type AudioPlayerPropsType} from "./src/audio-player/c-audio-player";
export {AudioPlayerControlSprite} from "./src/layout/audio-player-control-sprite/c-audio-player-control-sprite";
export {PlayListPanel} from "./src/play-list/play-list-panel/c-play-list-panel";
export {PlayListProvider} from "./src/provider/play-list/c-play-list-context";
export {type PlayListProviderPropsType} from "./src/provider/play-list/c-play-list-context";
export {PlayListContext} from "./src/provider/play-list/play-list-context";
