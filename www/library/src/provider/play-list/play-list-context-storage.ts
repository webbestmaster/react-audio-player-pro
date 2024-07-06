/* global localStorage */

import {defaultPlayListName} from "./play-list-context-const";
import type {PlayListType} from "./play-list-context-type";

const localStorageKeyName = "react-audio-player-play-list-storage-key-v.1.0.0";

type SavedDataType = ReadonlyArray<PlayListType>;

function getDefaultPlayListContextData(): SavedDataType {
    return [
        {
            name: defaultPlayListName,
            // IsDefault: true,
            trackList: [],
        },
    ];
}

export function savePlayListContextData(data: SavedDataType): void {
    if (typeof localStorage === "undefined") {
        return;
    }

    localStorage.setItem(localStorageKeyName, JSON.stringify(data));
}

export function getSavedPlayListContextData(): SavedDataType {
    if (typeof localStorage === "undefined") {
        return getDefaultPlayListContextData();
    }

    const rawData = localStorage.getItem(localStorageKeyName);

    if (typeof rawData === "string" && rawData.trim()) {
        // TODO: add type check here
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return JSON.parse(rawData);
    }

    return getDefaultPlayListContextData();
}
