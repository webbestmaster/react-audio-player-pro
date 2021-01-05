// @flow

import type {SavedTrackType} from '../../audio-player/audio-player-type';

export type PlayListType = {|
    +name: string,
    +trackList: Array<SavedTrackType>,
    +isDefault: boolean,
|};

export type PlayListContextType = {|
    +getAllPlayLists: () => Array<PlayListType>,
    +createPlayList: () => PlayListType,
    +updatePlayList: (oldPlayList: PlayListType, newListPlayData: PlayListType) => PlayListType | Error,
    +deletePlayList: (playList: PlayListType) => null | Error,
    +isInitialized: boolean,

    // helpers
    // TODO: try to remove addTrackToDefaultList
    +addTrackToDefaultList: (track: SavedTrackType) => void,
    +removeTrack: (track: SavedTrackType) => void,
    +getTrackById: (trackId: string) => SavedTrackType | null,
|};
