// @flow

import type {TrackType} from '../../../../src/audio-player/audio-player-type';

export type PlayListType = {|
    +name: string,
    +trackList: Array<TrackType>,
|};

export type PlayListContextType = {|
    +createPlayList: () => PlayListType,
    +getAllPlayLists: () => Array<PlayListType>,
    +updatePlayList: (oldPlayList: PlayListType, newListPlayData: PlayListType) => PlayListType | Error,
    +deletePlayList: (playList: PlayListType) => null | Error,
|};
