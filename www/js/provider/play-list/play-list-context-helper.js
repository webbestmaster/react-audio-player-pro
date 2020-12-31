// @flow

import type {PlayListContextType, PlayListType} from './play-list-context-type';

export function getAllSavedPlayLists(): Array<PlayListType> {
    return [];
}

export function getDefaultPlayListContextData(): PlayListContextType {
    const defaultPlayList: PlayListType = {
        name: '',
        trackList: [],
    };

    return {
        createPlayList: (): PlayListType => defaultPlayList,
        getAllPlayLists: (): Array<PlayListType> => [],
        updatePlayList: (oldPlayList: PlayListType, newListPlayData: PlayListType): PlayListType | Error => {
            return new Error('Overwrite me');
        },
        deletePlayList: (playList: PlayListType): null | Error => new Error('Overwrite me'),
    };
}
