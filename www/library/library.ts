/* global HTMLAudioElement, MediaMetadataInit */

export type PlayerPlayingStateType = 'paused' | 'playing' | 'stopped';

export type PlayerRepeatingStateType = 'all' | 'none' | 'one';

export type TrackType = Readonly<{
    content?: JSX.Element | string;
    mediaMetadata?: MediaMetadataInit;
    src: string;
}>;

export type SavedTrackType = Readonly<{
    content?: string;
    id: string;
    mediaMetadata?: MediaMetadataInit;
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

export type AudioPlayerPropsType = Readonly<{
    className?: string;
    defaultState?: DefaultAudioPlayerStateType;
    onDidMount?: (audioNode: HTMLAudioElement | null) => void;
    trackList: Array<TrackType>;
}>;

export {AudioPlayerControlSprite} from './src/layout/audio-player-control-sprite/c-audio-player-control-sprite';
export {Audio} from './src/audio-player/audio/c-audio';
export {AudioPlayer} from './src/audio-player/c-audio-player';
export {PlayListContext} from './src/provider/play-list/play-list-context';
export {PlayListProvider} from './src/provider/play-list/c-play-list-context';
export {PlayListPanel} from './src/play-list/play-list-panel/c-play-list-panel';
