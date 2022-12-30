/*
import type {
    AudioPlayerContextType,
    AudioPlayerListItemType,
    MediaMetadataType,
    PlayerRepeatingStateType,
} from './audio-player-type';
*/
export const seekStepSecond = 10;
export const playerPlayingStateTypeMap = {
    paused: 'paused',
    playing: 'playing',
    stopped: 'stopped',
};
export const playerRepeatingStateTypeMap = {
    all: 'all',
    none: 'none',
    one: 'one',
};
const { none, all, one } = playerRepeatingStateTypeMap;
export const playerRepeatingStateTypeList = [none, all, one];
export const defaultAudioPlayerState = {
    activeIndex: 0,
    isMuted: false,
    isShuffleOn: false,
    isTrackListOpen: true,
    repeatingState: none,
};
//# sourceMappingURL=audio-player-const.js.map