// @flow

import type {SavedTrackType} from '../../audio-player/audio-player-type';

export type PlayListType = {|
    +name: string,
    +trackList: Array<SavedTrackType>,
|};

export type PlayListContextType = {|
    +getAllPlayLists: () => Array<PlayListType>,
    +createPlayList: () => PlayListType,
    +updatePlayList: (oldPlayList: PlayListType, newListPlayData: PlayListType) => PlayListType | Error,
    +deletePlayList: (playList: PlayListType) => null | Error,
    +isInitialized: boolean,

    // helpers
    +removeTrackById: (trackId: string) => null | Error,
    +getTrackById: (trackId: string) => SavedTrackType | null,
|};
