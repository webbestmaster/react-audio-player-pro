import { SavedTrackType } from '../../../library';
export declare type PlayListType = Readonly<{
    name: string;
    trackList: Array<SavedTrackType>;
}>;
export declare type PlayListContextType = Readonly<{
    createPlayList: () => PlayListType;
    deletePlayList: (playList: PlayListType) => Error | null;
    getAllPlayLists: () => Array<PlayListType>;
    getTrackById: (trackId: string) => SavedTrackType | null;
    isInitialized: boolean;
    removeTrackById: (trackId: string) => Error | null;
    updatePlayList: (oldPlayList: PlayListType, newListPlayData: PlayListType) => Error | PlayListType;
}>;
