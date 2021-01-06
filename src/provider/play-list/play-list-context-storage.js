// @flow

/* global localStorage */

import type {PlayListType} from './play-list-context-type';

const localStorageKeyName = 'my-play-list-storage-key';

type SavedDataType = Array<PlayListType>;

function getDefaultPlayListContextData(): SavedDataType {
    return [
        {
            name: 'Play list',
            isDefault: true,
            trackList: [],
        },
    ];
}

export function savePlayListContextData(data: SavedDataType) {
    localStorage.setItem(localStorageKeyName, JSON.stringify(data));
}

export function getSavedPlayListContextData(): SavedDataType {
    const rawData = localStorage.getItem(localStorageKeyName);

    if (rawData) {
        // TODO: add type chek here
        return JSON.parse(rawData);
    }

    return getDefaultPlayListContextData();
}
