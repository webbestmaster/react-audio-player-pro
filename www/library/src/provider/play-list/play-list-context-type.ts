import {SavedTrackType} from '../../../library';

export type PlayListType = Readonly<{
    name: string;
    trackList: Array<SavedTrackType>;
}>;

export type PlayListContextType = Readonly<{
    createPlayList: () => PlayListType;
    deletePlayList: (playList: PlayListType) => Error | null;
    getAllPlayLists: () => Array<PlayListType>;
    getTrackById: (trackId: string) => SavedTrackType | null;
    isInitialized: boolean;

    // helpers
    removeTrackById: (trackId: string) => Error | null;
    updatePlayList: (oldPlayList: PlayListType, newListPlayData: PlayListType) => Error | PlayListType;
}>;
