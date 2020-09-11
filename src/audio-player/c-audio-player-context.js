// @flow

/* global navigator, MediaMetadata */

import React, {Component, type Node} from 'react';

import {getRandom} from '../lib/number';

import type {
    AudioPlayerContextType,
    AudioPlayerListItemType,
    MediaMetadataType,
    PlayerPlayingStateType,
    PlayerRepeatingStateType,
} from './audio-player-type';

import {
    defaultAudioPlayerContextData,
    playerPlayingStateTypeMap,
    playerRepeatingStateTypeList,
    playerRepeatingStateTypeMap,
} from './audio-player-const';

import {AudioPlayerControlSprite} from './ui/audio-player-control/c-audio-player-control-sprite';

type PropsType = {|
    +children: Node,
|};

type StateType = {|
    +playList: Array<AudioPlayerListItemType>,
    +isPlayListOpen: boolean,
    +playingState: PlayerPlayingStateType,
    +activeIndex: number,
    +repeatingState: PlayerRepeatingStateType,
    +isShuffleOn: boolean,
    +isAutoPlayOn: boolean,
|};

const audioPlayerContext = React.createContext<AudioPlayerContextType>(defaultAudioPlayerContextData);
const AudioPlayerContextProvider = audioPlayerContext.Provider;

export const AudioPlayerContextConsumer = audioPlayerContext.Consumer;

export class AudioPlayerProvider extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            playList: [],
            isPlayListOpen: true,
            playingState: defaultAudioPlayerContextData.playingState,
            activeIndex: defaultAudioPlayerContextData.activeIndex,
            repeatingState: defaultAudioPlayerContextData.repeatingState,
            isShuffleOn: defaultAudioPlayerContextData.isShuffleOn,
            isAutoPlayOn: defaultAudioPlayerContextData.isAutoPlayOn,
        };
    }

    setPlayList = (itemList: Array<AudioPlayerListItemType>): null => {
        this.setState({playList: itemList});
        this.setActiveIndex(defaultAudioPlayerContextData.activeIndex);
        this.stop();
        return null;
    };

    addItemToPlayList = (item: AudioPlayerListItemType): null => {
        return this.addItemListToPlayList([item]);
    };

    addItemListToPlayList = (itemList: Array<AudioPlayerListItemType>): null => {
        const {state} = this;
        const {playList} = state;

        const newPlayList = [...playList, ...itemList];

        this.setState({playList: newPlayList});

        return null;
    };

    removeItemFromPlayList = (itemIndex: number): null => {
        this.removeItemListFromPlayList([itemIndex]);

        return null;
    };

    removeItemListFromPlayList = (itemIndexList: Array<number>): null => {
        const {state} = this;
        const {playList} = state;

        const filteredPlayList = playList.filter(
            (item: AudioPlayerListItemType, index: number): boolean => !itemIndexList.includes(index)
        );

        this.setState({playList: filteredPlayList});

        return null;
    };

    clearPlayList = (): null => {
        this.setState({playList: []});

        return null;
    };

    setActiveIndex = (activeIndex: number): null => {
        this.setState({activeIndex: defaultAudioPlayerContextData.activeIndex}, () => {
            this.setState({activeIndex});
        });

        return null;
    };

    setPlayListIsOpen = (isPlayListOpen: boolean): null => {
        this.setState({isPlayListOpen});

        return null;
    };

    togglePlayListIsOpen = (): null => {
        const {state} = this;
        const {isPlayListOpen} = state;

        this.setPlayListIsOpen(!isPlayListOpen);

        return null;
    };

    play = (): null => {
        const {state} = this;
        const {activeIndex, playList, isShuffleOn} = state;

        if (playList.length === 0) {
            return null;
        }

        if (activeIndex === defaultAudioPlayerContextData.activeIndex) {
            this.setActiveIndex(isShuffleOn ? getRandom(0, playList.length) : 0);
        }

        this.setState({playingState: playerPlayingStateTypeMap.playing});

        console.log('---- play ----');

        return null;
    };

    pause = (): null => {
        this.setState({playingState: playerPlayingStateTypeMap.paused});

        return null;
    };

    stop = (): null => {
        this.setState({playingState: playerPlayingStateTypeMap.stopped});

        return null;
    };

    next = (): null => {
        const {state} = this;
        const {activeIndex, playList} = state;

        if (activeIndex === playList.length - 1) {
            this.handleChangeIndexButton(0);
            return null;
        }

        this.handleChangeIndexButton(activeIndex + 1);

        return null;
    };

    prev = (): null => {
        const {state} = this;
        const {activeIndex, playList} = state;

        if (activeIndex === 0) {
            this.handleChangeIndexButton(playList.length - 1);
            return null;
        }

        this.handleChangeIndexButton(activeIndex - 1);

        return null;
    };

    setMediaMetadata = (metadata: MediaMetadataType): null => {
        // $FlowFixMe
        if (typeof navigator === 'undefined' || typeof MediaMetadata === 'undefined') {
            return null;
        }

        const isMediaSessionSupport = Boolean('mediaSession' in navigator);

        if (!isMediaSessionSupport) {
            return null;
        }

        // $FlowFixMe
        navigator.mediaSession.metadata = new MediaMetadata(metadata);

        /*
        navigator.mediaSession.setActionHandler('play', function () {});
        navigator.mediaSession.setActionHandler('pause', function () {});
        navigator.mediaSession.setActionHandler('seekbackward', function () {});
        navigator.mediaSession.setActionHandler('seekforward', function () {});
        navigator.mediaSession.setActionHandler('previoustrack', function () {});
        navigator.mediaSession.setActionHandler('nexttrack', function () {});
        */

        console.log('[not implemented]: setMediaMetadata:', metadata);

        return null;
    };

    tryToPlayIndex(index: number) {
        const {state} = this;
        const {playList} = state;

        const item = playList[index];

        if (!item) {
            this.setActiveIndex(defaultAudioPlayerContextData.activeIndex);
            this.stop();
            return;
        }

        this.setActiveIndex(index);
    }

    handleChangeIndexButton(nextIndex: number): null {
        const {state} = this;
        const {isShuffleOn, repeatingState, playList} = state;

        if (isShuffleOn) {
            this.playNextShuffleTrack();
            return null;
        }

        if ([playerRepeatingStateTypeMap.none, playerRepeatingStateTypeMap.one].includes(repeatingState)) {
            this.tryToPlayIndex(nextIndex);
            return null;
        }

        if (repeatingState === playerRepeatingStateTypeMap.all) {
            this.tryToPlayIndex(nextIndex % playList.length);
            return null;
        }

        console.error('handleOnTrackEnded: Can not get what todo!!!');

        return null;
    }

    // eslint-disable-next-line complexity, max-statements
    handleOnTrackEnded = (): null => {
        const {state} = this;
        const {repeatingState, activeIndex, isShuffleOn, playList} = state;

        if (isShuffleOn) {
            this.playNextShuffleTrack();
            return null;
        }

        const nextIndex = activeIndex + 1;

        if (repeatingState === playerRepeatingStateTypeMap.none) {
            this.tryToPlayIndex(nextIndex);
            return null;
        }

        if (repeatingState === playerRepeatingStateTypeMap.one) {
            this.tryToPlayIndex(activeIndex);
            return null;
        }

        if (repeatingState === playerRepeatingStateTypeMap.all) {
            this.tryToPlayIndex(nextIndex % playList.length);
            return null;
        }

        console.error('handleOnTrackEnded: Can not get what todo!!!');

        return null;
    };

    playNextShuffleTrack(): null {
        const {state} = this;
        const {playList, activeIndex} = state;
        const playListLength = playList.length;

        if (playListLength === 0) {
            return null;
        }

        if (playListLength === 1) {
            this.tryToPlayIndex(0);
            return null;
        }

        this.tryToPlayIndex(getRandom(0, playListLength, [activeIndex]));

        return null;
    }

    handleOnTrackError = (): null => {
        this.next();

        console.error('handleOnTrackError!!!');

        return null;
    };

    handlePause = (evt: SyntheticEvent<HTMLAudioElement>): null => {
        const audioNode = evt.currentTarget;
        const {duration, currentTime} = audioNode;

        // this is not pause, just track is end
        if (duration === currentTime) {
            return null;
        }

        this.pause();

        return null;
    };

    handlePlay = (evt: SyntheticEvent<HTMLAudioElement>): null => {
        const {state} = this;
        const {activeIndex, playList} = state;

        this.play();

        const listItem = playList[activeIndex];

        if (listItem) {
            const {mediaMetadata} = listItem;

            this.setMediaMetadata(mediaMetadata || {title: listItem.src});
        }

        return null;
    };

    setRepeatingState = (playerRepeatingState: PlayerRepeatingStateType): null => {
        this.setState({repeatingState: playerRepeatingState});

        return null;
    };

    toggleRepeatingState = () => {
        const {state} = this;
        const {repeatingState} = state;

        const currentIndex = playerRepeatingStateTypeList.indexOf(repeatingState);
        const nextIndex = (currentIndex + 1) % playerRepeatingStateTypeList.length;

        this.setRepeatingState(playerRepeatingStateTypeList[nextIndex]);
    };

    setShuffleIsEnable = (isShuffleEnable: boolean): null => {
        this.setState({isShuffleOn: isShuffleEnable});

        return null;
    };

    toggleShuffleIsEnable = (): null => {
        const {state} = this;
        const {isShuffleOn} = state;

        this.setShuffleIsEnable(!isShuffleOn);

        return null;
    };

    setAutoPlayIsEnable = (isAutoPlayEnable: boolean): null => {
        this.setState({isAutoPlayOn: isAutoPlayEnable});

        return null;
    };

    getProviderValue(): AudioPlayerContextType {
        const {state} = this;

        return {
            ...state,
            setPlayList: this.setPlayList,
            addItemToPlayList: this.addItemToPlayList,
            addItemListToPlayList: this.addItemListToPlayList,
            removeItemFromPlayList: this.removeItemFromPlayList,
            removeItemListFromPlayList: this.removeItemListFromPlayList,
            clearPlayList: this.clearPlayList,
            setActiveIndex: this.setActiveIndex,
            play: this.play,
            pause: this.pause,
            stop: this.stop,
            next: this.next,
            prev: this.prev,
            setMediaMetadata: this.setMediaMetadata,
            setRepeatingState: this.setRepeatingState,
            toggleRepeatingState: this.toggleRepeatingState,
            setShuffleIsEnable: this.setShuffleIsEnable,
            toggleShuffleIsEnable: this.toggleShuffleIsEnable,
            setAutoPlayIsEnable: this.setAutoPlayIsEnable,
            setPlayListIsOpen: this.setPlayListIsOpen,
            togglePlayListIsOpen: this.togglePlayListIsOpen,
            handleOnTrackEnded: this.handleOnTrackEnded,
            handleOnTrackError: this.handleOnTrackError,
            handlePause: this.handlePause,
            handlePlay: this.handlePlay,
        };
    }

    render(): Node {
        const {props} = this;
        const {children} = props;

        const providedData = this.getProviderValue();

        return [
            <AudioPlayerContextProvider key="audio-player-context-provider" value={providedData}>
                {children}
            </AudioPlayerContextProvider>,
            <AudioPlayerControlSprite key="audio-player-control-sprite"/>,
        ];
    }
}
