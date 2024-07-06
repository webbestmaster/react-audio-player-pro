/* eslint-disable capitalized-comments */

import type {SavedTrackType, TrackType} from "../../../library";
import type {PlayListContextType, PlayListType} from "./play-list-context-type";

export function getDefaultPlayListContextData(): PlayListContextType {
    const defaultPlayList: PlayListType = {
        name: "",
        trackList: [],
        // isDefault: false,
    };

    return {
        createPlayList: (): PlayListType => {
            return defaultPlayList;
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        deletePlayList: (playList: PlayListType): Error | null => {
            return new Error("deletePlayList: overwrite me");
        },
        getAllPlayLists: (): Array<PlayListType> => {
            return [defaultPlayList];
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        getTrackById: (trackId: string): SavedTrackType | null => {
            return null;
        },
        isInitialized: false,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        removeTrackById: (trackId: string): Error | null => {
            return new Error("removeTrack: overwrite me");
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        updatePlayList: (oldPlayList: PlayListType, updatedListPlayData: PlayListType): Error | PlayListType => {
            return new Error("updatePlayList: overwrite me");
        },
    };
}

/*
export function getTrackContentAsString(track: TrackType): string {
    const {content, mediaMetadata} = track;

    if (typeof content === 'string') {
        return content;
    }

    if (mediaMetadata) {
        return mediaMetadata.title;
    }

    return track.src;
}
*/

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

export function isTracksEquals(trackA: SavedTrackType | TrackType, trackB: SavedTrackType | TrackType): boolean {
    return trackA.src === trackB.src;
}

export function savedTrackToTrack(savedTrack: SavedTrackType): TrackType {
    const {src, mediaMetadata, content} = savedTrack;

    let track: TrackType = {src};

    if (mediaMetadata) {
        track = {...track, mediaMetadata};
    }

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
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
