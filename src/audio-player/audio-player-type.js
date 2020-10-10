// @flow

// import {type Node} from 'react';

// export type AudioPlayerItemIdType = string | number;

// import type {MediaMetadataType} from '../lib/media-meta-data/media-meta-data-type';

/*
export type AudioPlayerListItemType = {|
    +src: string,
    +mediaMetadata?: MediaMetadataType,
|};
*/

import type {MediaMetadataType} from '../lib/media-meta-data/media-meta-data-type';

export type PlayerPlayingStateType = 'playing' | 'paused' | 'stopped';

export type PlayerRepeatingStateType = 'none' | 'all' | 'one';

export type TrackType = {|
    +src: string,
    +mediaMetadata?: MediaMetadataType,
    // eslint-disable-next-line id-match
    +content?: React$Node,
|};
