import { PlayListType } from './play-list-context-type';
type SavedDataType = Array<PlayListType>;
export declare function savePlayListContextData(data: SavedDataType): void;
export declare function getSavedPlayListContextData(): SavedDataType;
export {};
