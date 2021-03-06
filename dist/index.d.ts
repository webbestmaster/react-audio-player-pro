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
        content?: JSX.Element | Array<JSX.Element> | string,
    }

    export interface SavedTrackType {
        src: string,
        mediaMetadata?: MediaMetadataType,
        content?: string,
        id: string,
    }

    export type PlayerRepeatingStateType = 'none' | 'all' | 'one';

    export interface DefaultAudioPlayerStateType {
        isTrackListOpen?: boolean,
        activeIndex?: number,
        isShuffleOn?: boolean,
        isMuted?: boolean,
        repeatingState?: PlayerRepeatingStateType,
    }

    export const AudioPlayerControlSprite: React.FC<{}>;

    export interface AudioPropsType {
        src: string,
        mediaMetadata?: MediaMetadataType,
        className?: string,
        onDidMount?: (audioNode: HTMLAudioElement | null) => void,
        downloadFileName?: string,
        useRepeatButton?: boolean,
    }

    export const Audio: React.FC<AudioPropsType>;

    export interface AudioPlayerPropsType {
        trackList: Array<TrackType>,
        className?: string,
        onDidMount?: (audioNode: HTMLAudioElement | null) => void,
        defaultState?: DefaultAudioPlayerStateType,
    }

    export const AudioPlayer: React.FC<AudioPlayerPropsType>;

    export const PlayListPanel: React.FC<{}>;

    export interface PlayListProviderPropsType {
        children: JSX.Element | Array<JSX.Element> | string
    }

    export const PlayListProvider: React.FC<PlayListProviderPropsType>;

    export interface PlayListType {
        name: string,
        trackList: Array<SavedTrackType>,
    }

    export interface PlayListContextType {
        getAllPlayLists: () => Array<PlayListType>,
        createPlayList: () => PlayListType,
        updatePlayList: (oldPlayList: PlayListType, newListPlayData: PlayListType) => PlayListType | Error,
        deletePlayList: (playList: PlayListType) => null | Error,
        isInitialized: boolean,

        // helpers
        removeTrackById: (trackId: string) => null | Error,
        getTrackById: (trackId: string) => SavedTrackType | null,
    }

    export const PlayListContext: React.Context<PlayListContextType>;
}

declare module 'react-audio-player-pro/dist/style.css' {
    type StyleType = {};

    const style: StyleType;

    export default style;
}
