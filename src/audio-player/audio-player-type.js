// @flow

import {type Node} from 'react';

export type AudioPlayerItemIdType = string | number;

export type AudioPlayerListItemArtworkType = {|
    +src: string, // 'https://dummyimage.com/96x96',
    +sizes: string, // '96x96',
    +type: string, // 'image/png',
|};

export type AudioPlayerListItemType = {|
    // +id?: AudioPlayerItemIdType,
    +src: string,
    +title: string,
    +artist?: string,
    +album?: string,
    +artwork?: Array<AudioPlayerListItemArtworkType>,
|};

export type PlayerPlayingStateType = 'playing' | 'paused' | 'stopped';
export type PlayerRepeatingStateType = 'none' | 'all' | 'one';

export type AudioPlayerContextType = {|
    +setPlayList: (itemList: Array<AudioPlayerListItemType>) => mixed,
    +addItemToPlayList: (item: AudioPlayerListItemType) => mixed,
    +addItemListToPlayList: (itemList: Array<AudioPlayerListItemType>) => mixed,
    +removeItemFromPlayList: (itemIndex: number) => mixed,
    +removeItemListFromPlayList: (itemIndexList: Array<number>) => mixed,
    +cleanPlayList: () => mixed,
    +playList: Array<AudioPlayerListItemType>,
    +playingState: PlayerPlayingStateType,
    +activeIndex: number,
    +setActiveIndex: (activeIndex: number) => mixed,
    +play: () => mixed,
    +pause: () => mixed,
    +stop: () => mixed,
    +next: () => mixed,
    +prev: () => mixed,
    +repeatingState: PlayerRepeatingStateType, // repeat from first item if play list is end, default none
    +setRepeatingState: (playerRepeatingState: PlayerRepeatingStateType) => mixed,
    +toggleRepeatingState: () => mixed,
    +isShuffleOn: boolean, // play item from random order, default false
    +setShuffleIsEnable: (isShuffleEnable: boolean) => mixed,
    +toggleShuffleIsEnable: () => mixed,
    +isAutoPlayOn: boolean, // TODO: remove this setting
    +setAutoPlayIsEnable: (isAutoPlayEnable: boolean) => mixed,
    +isPlayListOpen: boolean,
    +setPlayListIsOpen: (isPlayListOpen: boolean) => mixed,
    +togglePlayListIsOpen: () => mixed,
    +handleOnTrackEnded: () => mixed,
    +handleOnTrackError: () => mixed,
    +handlePause: (evt: SyntheticEvent<HTMLAudioElement>) => mixed,
    +handlePlay: (evt: SyntheticEvent<HTMLAudioElement>) => mixed,
|};
