// @flow

import type {PlayListContextType, PlayListType} from './play-list-context-type';

export function getDefaultPlayListContextData(): PlayListContextType {
    return {
        list: [],
        getAllLists: (): Array<PlayListType> => [],
    };
}
