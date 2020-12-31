// @flow

/* global localStorage */

import type {PlayListType} from './play-list-context-type';

const localStorageKeyName = 'my-play-list-storage-key';

type SavedDataType = Array<PlayListType>;

export function savePlayListContextData(data: SavedDataType) {
    localStorage.setItem(localStorageKeyName, JSON.stringify(data));
}

export function getSavedPlayListContextData(): SavedDataType {
    const rawData = localStorage.getItem(localStorageKeyName) || '[]';

    return JSON.parse(rawData);
}
