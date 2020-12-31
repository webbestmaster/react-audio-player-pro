// @flow

import React, {useState, useMemo, useCallback} from 'react';

import type {PlayListContextType, PlayListType} from './play-list-context-type';
import {getAllSavedPlayLists, getDefaultPlayListContextData} from './play-list-context-helper';

const defaultPlayListContextData = getDefaultPlayListContextData();

const PlayListContext: React$Context<PlayListContextType> = React.createContext<PlayListContextType>(
    defaultPlayListContextData
);

type PropsType = {|
    +children: React$Node,
|};

export function PlayListProvider(props: PropsType): React$Node {
    const {children} = props;
    const [list, setList] = useState<Array<PlayListType>>(getAllSavedPlayLists());

    const createPlayList = useCallback(
        function createPlayListInner(): PlayListType {
            const newPlayList: PlayListType = {
                name: '',
                trackList: [],
            };

            const newList = [...list, newPlayList];

            setList(newList);

            return newPlayList;
        },
        [list, setList]
    );

    const getAllPlayLists = useCallback(
        function getAllPlayListsInner(): Array<PlayListType> {
            return [...list];
        },
        [list]
    );

    const updatePlayList = useCallback(
        function updatePlayListInner(oldPlayList: PlayListType, newListPlayData: PlayListType): PlayListType | Error {
            const newList = [...list];

            const playListIndex = newList.indexOf(oldPlayList);

            if (playListIndex < 0) {
                return new Error('Old Play List is not exists.');
            }

            newList[playListIndex] = newListPlayData;

            setList(newList);

            return newListPlayData;
        },
        [list, setList]
    );

    const deletePlayList = useCallback(
        function deletePlayListInner(playList: PlayListType): null | Error {
            const newList = [...list];

            const playListIndex = newList.indexOf(playList);

            if (playListIndex < 0) {
                return new Error('Play List is not exists.');
            }

            newList.splice(playListIndex, 1);

            setList(newList);

            return null;
        },
        [list, setList]
    );

    const providedData: PlayListContextType = useMemo<PlayListContextType>((): PlayListContextType => {
        return {
            createPlayList,
            getAllPlayLists,
            updatePlayList,
            deletePlayList,
        };
    }, [createPlayList, getAllPlayLists, updatePlayList, deletePlayList]);

    return <PlayListContext.Provider value={providedData}>{children}</PlayListContext.Provider>;
}
