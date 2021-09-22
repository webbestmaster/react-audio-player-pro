/* global localStorage */

import {PlayListType} from './play-list-context-type';
import {defaultPlayListName} from './play-list-context-const';

const localStorageKeyName = 'react-audio-player-play-list-storage-key-v.1.0.0';

type SavedDataType = Array<PlayListType>;

function getDefaultPlayListContextData(): SavedDataType {
    return [
        {
            name: defaultPlayListName,
            // isDefault: true,
            trackList: [],
        },
    ];
}

export function savePlayListContextData(data: SavedDataType): void {
    if (typeof localStorage === 'undefined') {
        return;
    }

    localStorage.setItem(localStorageKeyName, JSON.stringify(data));
}

export function getSavedPlayListContextData(): SavedDataType {
    if (typeof localStorage === 'undefined') {
        return getDefaultPlayListContextData();
    }

    const rawData = localStorage.getItem(localStorageKeyName);

    if (rawData) {
        // TODO: add type chek here
        return JSON.parse(rawData);
    }

    return getDefaultPlayListContextData();
}
