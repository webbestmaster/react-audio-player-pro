import {Context, createContext} from 'react';

import {PlayListContextType} from './play-list-context-type';
import {getDefaultPlayListContextData} from './play-list-context-helper';

const defaultPlayListContextData = getDefaultPlayListContextData();

export const PlayListContext: Context<PlayListContextType> =
    createContext<PlayListContextType>(defaultPlayListContextData);
