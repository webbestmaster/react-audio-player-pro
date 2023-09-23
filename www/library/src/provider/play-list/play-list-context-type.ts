import type {SavedTrackType} from "../../../library";

export type PlayListType = Readonly<{
    name: string;
    trackList: ReadonlyArray<SavedTrackType>;
}>;

export type PlayListContextType = Readonly<{
    createPlayList: () => PlayListType;
    deletePlayList: (playList: PlayListType) => Error | null;
    getAllPlayLists: () => ReadonlyArray<PlayListType>;
    getTrackById: (trackId: string) => SavedTrackType | null;
    isInitialized: boolean;

    // Helpers
    removeTrackById: (trackId: string) => Error | null;
    updatePlayList: (oldPlayList: PlayListType, updatedListPlayData: PlayListType) => Error | PlayListType;
}>;
