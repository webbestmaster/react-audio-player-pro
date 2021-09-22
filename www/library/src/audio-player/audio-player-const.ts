import {DefaultDefinedAudioPlayerStateType, PlayerPlayingStateType, PlayerRepeatingStateType} from '../../library';

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
    paused: 'paused',
    playing: 'playing',
    stopped: 'stopped',
};

export const playerRepeatingStateTypeMap: {[key in PlayerRepeatingStateType]: PlayerRepeatingStateType} = {
    all: 'all',
    none: 'none',
    one: 'one',
};

const {none, all, one} = playerRepeatingStateTypeMap;

export const playerRepeatingStateTypeList: Array<PlayerRepeatingStateType> = [none, all, one];

export const defaultAudioPlayerState: DefaultDefinedAudioPlayerStateType = {
    activeIndex: 0,
    isMuted: false,
    isShuffleOn: false,
    isTrackListOpen: true,
    repeatingState: none,
};
