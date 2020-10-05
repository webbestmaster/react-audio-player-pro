/// <reference types="react" />

declare module 'react-audio-player-pro' {
    export interface AudioPlayerListItemArtworkType {
        src: string, // 'https://dummyimage.com/96x96',
        sizes: string, // '96x96',
        type: string, // 'image/png',
    }

    export interface MediaMetadataType {
        title: string,
        artist?: string,
        album?: string,
        artwork?: Array<AudioPlayerListItemArtworkType>,
    }

    export interface TrackType {
        src: string,
        mediaMetadata?: MediaMetadataType,
        // eslint-disable-next-line id-match
        content?: React.ReactNode,
    }

    export const AudioPlayerControlSprite: (props: {}) => React.SFC<{}>;

    export interface AudioPropsType {
        src: string,
        mediaMetadata?: MediaMetadataType,
        className?: string,
        onDidMount?: (audioNode: HTMLAudioElement | null) => void,
        downloadFileName?: string,
        useRepeatButton?: boolean,
    }

    export const Audio: (props: AudioPropsType) => React.SFC<AudioPropsType>;

    export interface AudioPlayerPropsType {
        trackList: Array<TrackType>,
        className?: string,
        onDidMount?: (audioNode: HTMLAudioElement | null) => void,
    }

    export const AudioPlayer: (props: AudioPlayerPropsType) => React.SFC<AudioPlayerPropsType>;
}

declare module 'react-audio-player-pro/dist/style.css' {
    type StyleType = {};

    const style: StyleType;

    export default style;
}
