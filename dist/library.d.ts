/// <reference types="react" />
export declare type PlayerPlayingStateType = 'paused' | 'playing' | 'stopped';
export declare type PlayerRepeatingStateType = 'all' | 'none' | 'one';
export declare type AudioPreloadValueType = 'auto' | 'metadata' | 'none';
export declare type TrackType = Readonly<{
    content?: JSX.Element | string;
    mediaMetadata?: MediaMetadataInit;
    src: string;
}>;
export declare type SavedTrackType = Readonly<{
    content?: string;
    id: string;
    mediaMetadata?: MediaMetadataInit;
    src: string;
}>;
export declare type DefaultAudioPlayerStateType = Readonly<{
    activeIndex?: number;
    isMuted?: boolean;
    isShuffleOn?: boolean;
    isTrackListOpen?: boolean;
    repeatingState?: PlayerRepeatingStateType;
}>;
export declare type DefaultDefinedAudioPlayerStateType = Readonly<{
    activeIndex: number;
    isMuted: boolean;
    isShuffleOn: boolean;
    isTrackListOpen: boolean;
    repeatingState: PlayerRepeatingStateType;
}>;
export { Audio } from './src/audio-player/audio/c-audio';
export { type AudioPropsType } from './src/audio-player/audio/c-audio';
export { AudioPlayer } from './src/audio-player/c-audio-player';
export { type AudioPlayerPropsType } from './src/audio-player/c-audio-player';
export { PlayListProvider } from './src/provider/play-list/c-play-list-context';
export { type PlayListProviderPropsType } from './src/provider/play-list/c-play-list-context';
export { AudioPlayerControlSprite } from './src/layout/audio-player-control-sprite/c-audio-player-control-sprite';
export { PlayListPanel } from './src/play-list/play-list-panel/c-play-list-panel';
export { PlayListContext } from './src/provider/play-list/play-list-context';

declare module 'react-audio-player-pro/dist/style.css' {
    type StyleType = Record<string, string>;

    const style: StyleType;

    export default style;
}
