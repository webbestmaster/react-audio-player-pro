// @flow

import type {PlayListContextType, PlayListType} from './play-list-context-type';

export const defaultPlayListContextData: PlayListContextType = {
    list: [],
    getAllLists: (): Array<PlayListType> => [],
};
