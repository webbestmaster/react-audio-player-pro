import type {DefaultDefinedAudioPlayerStateType} from './audio-player-type';
import {PlayerPlayingStateType, PlayerRepeatingStateType} from './audio-player-type';

/*
import type {
    AudioPlayerContextType,
    AudioPlayerListItemType,
    MediaMetadataType,
    PlayerRepeatingStateType,
} from './audio-player-type';
*/

export const seekStepSecond = 10;

export const playerPlayingStateTypeMap: {[key in PlayerPlayingStateType]: PlayerPlayingStateType} = {
    playing: 'playing',
    paused: 'paused',
    stopped: 'stopped',
};

export const playerRepeatingStateTypeMap: {[key in PlayerRepeatingStateType]: PlayerRepeatingStateType} = {
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
