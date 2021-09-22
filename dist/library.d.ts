/// <reference types="react" />
import { AudioPlayerControlSprite } from './src/layout/audio-player-control-sprite/c-audio-player-control-sprite';
import { Audio } from './src/audio-player/audio/c-audio';
import { AudioPlayer } from './src/audio-player/c-audio-player';
import { PlayListContext } from './src/provider/play-list/play-list-context';
import { PlayListProvider } from './src/provider/play-list/c-play-list-context';
import { PlayListPanel } from './src/play-list/play-list-panel/c-play-list-panel';
export declare type PlayerPlayingStateType = 'paused' | 'playing' | 'stopped';
export declare type PlayerRepeatingStateType = 'all' | 'none' | 'one';
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
export declare type AudioPlayerPropsType = Readonly<{
    className?: string;
    defaultState?: DefaultAudioPlayerStateType;
    onDidMount?: (audioNode: HTMLAudioElement | null) => void;
    trackList: Array<TrackType>;
}>;
export { AudioPlayerControlSprite, Audio, AudioPlayer, PlayListContext, PlayListProvider, PlayListPanel, };

declare module 'react-audio-player-pro/dist/style.css' {
    type StyleType = Record<string, string>;

    const style: StyleType;

    export default style;
}
