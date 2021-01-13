// @flow

// import {type MediaMetadataControlNameType} from './audio-player-type'

import type {DefaultDefinedAudioPlayerStateType} from './audio-player-type';
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

const {none, all, one} = playerRepeatingStateTypeMap;

export const playerRepeatingStateTypeList: Array<PlayerRepeatingStateType> = [none, all, one];

export const defaultAudioPlayerState: DefaultDefinedAudioPlayerStateType = {
    isTrackListOpen: true,
    activeIndex: 0,
    isShuffleOn: false,
    isMuted: false,
    repeatingState: none,
};
