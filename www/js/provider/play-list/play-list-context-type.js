// @flow

import type {TrackType} from '../../../../src/audio-player/audio-player-type';

export type PlayListType = {|
    +name: string,
    +trackList: TrackType,
|};

export type PlayListContextType = {|
    +list: Array<PlayListType>,
    +getAllLists: () => Array<PlayListType>,
|};
