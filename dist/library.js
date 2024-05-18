/* eslint-disable capitalized-comments */
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
export { Audio } from "./src/audio-player/audio/c-audio";
export { AudioPlayer } from "./src/audio-player/c-audio-player";
export { PlayListProvider } from "./src/provider/play-list/c-play-list-context";
export { AudioPlayerControlSprite } from "./src/layout/audio-player-control-sprite/c-audio-player-control-sprite";
export { PlayListPanel } from "./src/play-list/play-list-panel/c-play-list-panel";
export { PlayListContext } from "./src/provider/play-list/play-list-context";
//# sourceMappingURL=library.js.map