// @flow

import React from 'react';

import type {PlayListContextType} from './play-list-context-type';
import {getDefaultPlayListContextData} from './play-list-context-helper';

const defaultPlayListContextData = getDefaultPlayListContextData();

const PlayListContext: React$Context<PlayListContextType> = React.createContext<PlayListContextType>(
    defaultPlayListContextData
);

type PropsType = {|
    +children: React$Node,
|};

export function PlayListProvider(props: PropsType): React$Node {
    const {children} = props;

    const providedData: PlayListContextType = {
        list: [],
        getAllLists: defaultPlayListContextData.getAllLists,
    };

    return <PlayListContext.Provider value={providedData}>{children}</PlayListContext.Provider>;
}
