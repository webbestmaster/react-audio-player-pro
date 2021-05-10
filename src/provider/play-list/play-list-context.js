// @flow

import React from 'react';

import type {PlayListContextType} from './play-list-context-type';
import {getDefaultPlayListContextData} from './play-list-context-helper';

const defaultPlayListContextData = getDefaultPlayListContextData();

export const PlayListContext: React$Context<PlayListContextType>
    = React.createContext<PlayListContextType>(defaultPlayListContextData);
