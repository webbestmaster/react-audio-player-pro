// @flow

/*
import type {
    AudioPlayerContextType,
    AudioPlayerListItemType,
    MediaMetadataType,
    PlayerRepeatingStateType,
} from './audio-player-type';
*/

export const playerPlayingStateTypeMap = {
    playing: 'playing',
    paused: 'paused',
    stopped: 'stopped',
};

/*
export const playerRepeatingStateTypeMap = {
    none: 'none',
    all: 'all',
    one: 'one',
};
*/

/*

export const playerRepeatingStateTypeList: Array<PlayerRepeatingStateType> = Object.keys(
    playerRepeatingStateTypeMap
).map((key: PlayerRepeatingStateType): PlayerRepeatingStateType => playerRepeatingStateTypeMap[key]);

export const defaultAudioPlayerContextData: AudioPlayerContextType = {
    setPlayList(itemList: Array<AudioPlayerListItemType>): null {
        return null;
    },
    addItemToPlayList(item: AudioPlayerListItemType): null {
        return null;
    },
    addItemListToPlayList(itemList: Array<AudioPlayerListItemType>): null {
        return null;
    },
    removeItemFromPlayList(itemIndex: number): null {
        return null;
    },
    removeItemListFromPlayList(itemIndexList: Array<number>): null {
        return null;
    },
    clearPlayList(): null {
        return null;
    },
    playList: [],
    playingState: playerPlayingStateTypeMap.stopped,
    activeIndex: -1,
    setActiveIndex(activeIndex: number): null {
        return null;
    },
    play(): null {
        return null;
    },
    pause(): null {
        return null;
    },
    stop(): null {
        return null;
    },
    next(): null {
        return null;
    },
    prev(): null {
        return null;
    },
    setMediaMetadata(metadata: MediaMetadataType): null {
        return null;
    },
    repeatingState: playerRepeatingStateTypeMap.none,
    setRepeatingState(playerRepeatingState: PlayerRepeatingStateType): null {
        return null;
    },
    toggleRepeatingState(): null {
        return null;
    },
    isShuffleOn: false,
    setShuffleIsEnable(isShuffleEnable: boolean): null {
        return null;
    },
    toggleShuffleIsEnable(): null {
        return null;
    },
    isAutoPlayOn: false, // TODO: remove this setting
    setAutoPlayIsEnable(isAutoPlayEnable: boolean): null {
        return null;
    },
    isPlayListOpen: true,
    setPlayListIsOpen(isPlayListOpen: boolean): null {
        return null;
    },
    togglePlayListIsOpen(): null {
        return null;
    },
    handleOnTrackEnded(): null {
        return null;
    },
    handleOnTrackError(): null {
        return null;
    },
    handlePause(): null {
        return null;
    },
    handlePlay(): null {
        return null;
    },
};
*/
