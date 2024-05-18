/* eslint-disable capitalized-comments */
export function getDefaultPlayListContextData() {
    const defaultPlayList = {
        name: "",
        trackList: [],
        // isDefault: false,
    };
    return {
        createPlayList: () => {
            return defaultPlayList;
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        deletePlayList: (playList) => {
            return new Error("deletePlayList: overwrite me");
        },
        getAllPlayLists: () => {
            return [defaultPlayList];
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        getTrackById: (trackId) => {
            return null;
        },
        isInitialized: false,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        removeTrackById: (trackId) => {
            return new Error("removeTrack: overwrite me");
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        updatePlayList: (oldPlayList, updatedListPlayData) => {
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
export function isTracksEquals(trackA, trackB) {
    return trackA.src === trackB.src;
}
export function savedTrackToTrack(savedTrack) {
    const { src, mediaMetadata, content } = savedTrack;
    let track = { src };
    if (mediaMetadata) {
        track = { ...track, mediaMetadata };
    }
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (content) {
        track = { ...track, content };
    }
    return track;
}
/*
export function savedTrackListToTrackList(list: Array<SavedTrackType>): Array<TrackType> {
    return list.map(savedTrackToTrack);
}
*/
//# sourceMappingURL=play-list-context-helper.js.map