/* eslint-disable capitalized-comments */

// @flow

// TODO: you should uncomment this

// eslint-disable-next-line jest/require-hook
console.log("TODO: you should uncomment this");

/*
declare module 'react-audio-player-pro' {
    declare export type AudioPlayerListItemArtworkType = {|
        +src: string, // 'https://dummyimage.com/96x96',
        +sizes: string, // '96x96',
        +type: string, // 'image/png',
    |};

    declare export type MediaMetadataType = {|
        +title: string,
        +artist?: string,
        +album?: string,
        +artwork?: Array<AudioPlayerListItemArtworkType>,
    |};

    declare export type TrackType = {|
        +src: string,
        +mediaMetadata?: MediaMetadataType,
        +content?: React$Node,
    |};

    declare export type SavedTrackType = {|
        +src: string,
        +mediaMetadata?: MediaMetadataType,
        +content?: string,
        +id: string,
    |};

    declare export type PlayerRepeatingStateType = 'none' | 'all' | 'one';

    declare export type DefaultAudioPlayerStateType = {|
        +isTrackListOpen?: boolean,
        +activeIndex?: number,
        +isShuffleOn?: boolean,
        +isMuted?: boolean,
        +repeatingState?: PlayerRepeatingStateType,
    |};

    declare export var AudioPlayerControlSprite: React$ComponentType<{}>;

    declare export type AudioPropsType = {|
        +src: string,
        +mediaMetadata?: MediaMetadataType,
        +className?: string,
        +onDidMount?: (audioNode: HTMLAudioElement | null) => void,
        +downloadFileName?: string,
        +useRepeatButton?: boolean,
    |};

    declare export var Audio: React$ComponentType<AudioPropsType>;

    declare export type AudioPlayerPropsType = {|
        +trackList: Array<TrackType>,
        +className?: string,
        +onDidMount?: (audioNode: HTMLAudioElement | null) => void,
        +defaultState?: DefaultAudioPlayerStateType,
    |};

    declare export var AudioPlayer: React$ComponentType<AudioPlayerPropsType>;

    declare export var PlayListPanel: React$ComponentType<{}>;

    declare export type PlayListProviderPropsType = {|+children: React$Node|};

    declare export var PlayListProvider: React$ComponentType<PlayListProviderPropsType>;

    declare export type PlayListType = {|
        +name: string,
        +trackList: Array<SavedTrackType>,
    |};

    declare export type PlayListContextType = {|
        +getAllPlayLists: () => Array<PlayListType>,
        +createPlayList: () => PlayListType,
        +updatePlayList: (oldPlayList: PlayListType, newListPlayData: PlayListType) => PlayListType | Error,
        +deletePlayList: (playList: PlayListType) => null | Error,
        +isInitialized: boolean,

        // helpers
        +removeTrackById: (trackId: string) => null | Error,
        +getTrackById: (trackId: string) => SavedTrackType | null,
    |};

    declare export var PlayListContext: React$Context<PlayListContextType>;
}

declare module 'react-audio-player-pro/dist/style.css' {
    declare type StyleType = {};

    declare var style: StyleType;

    declare export default typeof style;
}
*/
