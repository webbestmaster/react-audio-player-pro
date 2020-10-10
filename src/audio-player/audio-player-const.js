// @flow

// import {type MediaMetadataControlNameType} from './audio-player-type'

import {type PlayerPlayingStateType, type PlayerRepeatingStateType} from './audio-player-type';

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
