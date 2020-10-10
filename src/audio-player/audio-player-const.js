// @flow

// import {type MediaMetadataControlNameType} from './audio-player-type'

import {hasVolumeBar} from '../lib/system';

import {type PlayerPlayingStateType, type PlayerRepeatingStateType} from './audio-player-type';
import type {AudioPlayerStateType} from './audio-player-type';

/*
import type {
    AudioPlayerContextType,
    AudioPlayerListItemType,
    MediaMetadataType,
    PlayerRepeatingStateType,
} from './audio-player-type';
*/

export const seekStepSecond = 10;

export const playerPlayingStateTypeMap: {+[key: PlayerPlayingStateType]: PlayerPlayingStateType} = {
    playing: 'playing',
    paused: 'paused',
    stopped: 'stopped',
};

export const playerRepeatingStateTypeMap: {+[key: PlayerRepeatingStateType]: PlayerRepeatingStateType} = {
    none: 'none',
    all: 'all',
    one: 'one',
};

export const playerRepeatingStateTypeList: Array<PlayerRepeatingStateType> = Object.keys(
    playerRepeatingStateTypeMap
).map((key: PlayerRepeatingStateType): PlayerRepeatingStateType => playerRepeatingStateTypeMap[key]);

export const defaultAudioPlayerState: AudioPlayerStateType = {
    trackCurrentTime: 0,
    trackFullTime: 0,
    trackVolume: hasVolumeBar ? 0.5 : 1,
    isMuted: false,
    playingState: playerPlayingStateTypeMap.paused,
    activeIndex: 0,
    isShuffleOn: false,
    repeatingState: playerRepeatingStateTypeMap.none,
    isTrackListOpen: true,
    isLoadingMetadata: true,
};
