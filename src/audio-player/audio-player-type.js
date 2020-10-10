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

export type DefaultAudioPlayerStateType = {|
    +isTrackListOpen?: boolean,
    +activeIndex?: number,
    +isShuffleOn?: boolean,
    +isMuted?: boolean,
    +repeatingState?: PlayerRepeatingStateType,
|};

export type AudioPlayerStateType = {|
    +trackCurrentTime: number,
    +trackFullTime: number,
    +trackVolume: number,
    +isMuted: boolean,
    +playingState: PlayerPlayingStateType,
    +activeIndex: number,
    +isShuffleOn: boolean,
    +repeatingState: PlayerRepeatingStateType,
    +isTrackListOpen: boolean,
    +isLoadingMetadata: boolean,
|};

export type AudioPlayerPropsType = {|
    +trackList: Array<TrackType>,
    +className?: string,
    +onDidMount?: (audioNode: HTMLAudioElement | null) => mixed,
    +defaultState?: DefaultAudioPlayerStateType,
|};
