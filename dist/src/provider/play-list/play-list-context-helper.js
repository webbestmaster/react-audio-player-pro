export function getDefaultPlayListContextData() {
    const defaultPlayList = {
        name: '',
        trackList: [],
        // isDefault: false,
    };
    return {
        createPlayList: () => defaultPlayList,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
        deletePlayList: (playList) => new Error('deletePlayList: overwrite me'),
        getAllPlayLists: () => [defaultPlayList],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
        getTrackById: (trackId) => null,
        isInitialized: false,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
        removeTrackById: (trackId) => new Error('removeTrack: overwrite me'),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
        updatePlayList: (oldPlayList, newListPlayData) => {
            return new Error('updatePlayList: overwrite me');
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