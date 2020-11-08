// @flow

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
        // eslint-disable-next-line id-match
        +content?: React$Node,
    |};

    declare export type PlayerRepeatingStateType = 'none' | 'all' | 'one';

    declare export type DefaultAudioPlayerStateType = {|
        +isTrackListOpen?: boolean,
        +activeIndex?: number,
        +isShuffleOn?: boolean,
        +isMuted?: boolean,
        +repeatingState?: PlayerRepeatingStateType,
    |};

    // eslint-disable-next-line id-match
    declare export var AudioPlayerControlSprite: React$ComponentType<{}>;

    declare export type AudioPropsType = {|
        +src: string,
        +mediaMetadata?: MediaMetadataType,
        +className?: string,
        +onDidMount?: (audioNode: HTMLAudioElement | null) => void,
        +downloadFileName?: string,
        +useRepeatButton?: boolean,
    |};

    // eslint-disable-next-line id-match
    declare export var Audio: React$ComponentType<AudioPropsType>;

    declare export type AudioPlayerPropsType = {|
        +trackList: Array<TrackType>,
        +className?: string,
        +onDidMount?: (audioNode: HTMLAudioElement | null) => void,
        +defaultState?: DefaultAudioPlayerStateType,
    |};

    // eslint-disable-next-line id-match
    declare export var AudioPlayer: React$ComponentType<AudioPlayerPropsType>;
}

declare module 'react-audio-player-pro/dist/style.css' {
    declare type StyleType = {};

    declare var style: StyleType;

    declare export default typeof style;
}
