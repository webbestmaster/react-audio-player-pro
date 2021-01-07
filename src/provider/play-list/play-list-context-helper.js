// @flow

import React from 'react';
import {renderToString} from 'react-dom/server';

import type {SavedTrackType, TrackType} from '../../audio-player/audio-player-type';
import {extractText} from '../../lib/string';

import type {PlayListContextType, PlayListType} from './play-list-context-type';

export function getDefaultPlayListContextData(): PlayListContextType {
    const defaultPlayList: PlayListType = {
        name: '',
        trackList: [],
        // isDefault: false,
    };

    return {
        createPlayList: (): PlayListType => defaultPlayList,
        getAllPlayLists: (): Array<PlayListType> => [defaultPlayList],
        updatePlayList: (oldPlayList: PlayListType, newListPlayData: PlayListType): PlayListType | Error => {
            return new Error('updatePlayList: overwrite me');
        },
        deletePlayList: (playList: PlayListType): null | Error => new Error('deletePlayList: overwrite me'),
        isInitialized: false,

        removeTrackById: (trackId: string): null | Error => new Error('removeTrack: overwrite me'),
        getTrackById: (trackId: string): SavedTrackType | null => null,
    };
}

export function getTrackContentAsString(track: TrackType): string {
    const {content} = track;

    if (!content) {
        return '';
    }

    const contentType = typeof content;

    if (['string', 'number'].includes(contentType)) {
        return String(content).trim();
    }

    if (React.isValidElement(content)) {
        return extractText(renderToString(content));
    }

    return '';
}

/*
export function getTrackList(list: Array<PlayListType>): Array<SavedTrackType> {
    const resultList: Array<SavedTrackType> = [];

    list.forEach((playList: PlayListType) => {
        resultList.push(...playList.trackList);
    });

    return resultList;
}
*/

/*
export function getTrackListIdList(trackList: Array<SavedTrackType>): Array<string> {
    return trackList.map<string>((track: SavedTrackType): string => track.id);
}
*/

export function isTracksEquals(trackA: TrackType | SavedTrackType, trackB: TrackType | SavedTrackType): boolean {
    return trackA.src === trackB.src;
}

export function savedTrackToTrack(savedTrack: SavedTrackType): TrackType {
    const {src, mediaMetadata, content} = savedTrack;

    let track: TrackType = {src};

    if (mediaMetadata) {
        track = {...track, mediaMetadata};
    }

    if (content) {
        track = {...track, content};
    }

    return track;
}

/*
export function savedTrackListToTrackList(list: Array<SavedTrackType>): Array<TrackType> {
    return list.map(savedTrackToTrack);
}
*/
