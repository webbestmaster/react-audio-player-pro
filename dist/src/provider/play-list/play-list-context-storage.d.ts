import type { PlayListType } from "./play-list-context-type";
type SavedDataType = ReadonlyArray<PlayListType>;
export declare function savePlayListContextData(data: SavedDataType): void;
export declare function getSavedPlayListContextData(): SavedDataType;
export {};
