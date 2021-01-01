// @flow

import type {TrackType} from '../../../../src/audio-player/audio-player-type';

import type {PlayListContextType, PlayListType} from './play-list-context-type';

export function getDefaultPlayListContextData(): PlayListContextType {
    const defaultPlayList: PlayListType = {
        name: '',
        trackList: [],
        isDefault: false,
    };

    return {
        createPlayList: (): PlayListType => defaultPlayList,
        getAllPlayLists: (): Array<PlayListType> => [defaultPlayList],
        updatePlayList: (oldPlayList: PlayListType, newListPlayData: PlayListType): PlayListType | Error => {
            return new Error('Overwrite me');
        },
        deletePlayList: (playList: PlayListType): null | Error => new Error('Overwrite me'),
        isInitialized: false,

        addTrackToDefaultList: (track: TrackType) => {},
    };
}

export function countTrackInPlayList(playList: PlayListType, track: TrackType): number {
    let counter = 0;
    const {trackList} = playList;
    const trackSrc = track.src;

    trackList.forEach((trackInList: TrackType) => {
        if (trackInList.src === trackSrc) {
            counter += 1;
        }
    });

    return counter;
}
