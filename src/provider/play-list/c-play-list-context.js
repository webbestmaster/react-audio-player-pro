// @flow

import React, {useState, useMemo, useCallback, useEffect} from 'react';

import type {TrackType} from '../../audio-player/audio-player-type';

import type {PlayListContextType, PlayListType} from './play-list-context-type';
import {getDefaultPlayListContextData} from './play-list-context-helper';
import {getSavedPlayListContextData, savePlayListContextData} from './play-list-context-storage';

const defaultPlayListContextData = getDefaultPlayListContextData();

export const PlayListContext: React$Context<PlayListContextType> = React.createContext<PlayListContextType>(
    defaultPlayListContextData
);

type PropsType = {|
    +children: React$Node,
|};

export function PlayListProvider(props: PropsType): React$Node {
    const {children} = props;
    const [list, setList] = useState<Array<PlayListType>>(getSavedPlayListContextData());

    const createPlayList = useCallback(
        function createPlayListInner(): PlayListType {
            const newPlayList: PlayListType = {
                name: '',
                trackList: [],
                isDefault: false,
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

    const addTrackToDefaultList = useCallback(
        function addTrackToDefaultListInner(track: TrackType) {
            const defaultList = list[0];
            const newTrackList = [...defaultList.trackList, track];

            updatePlayList(defaultList, {
                ...defaultList,
                trackList: newTrackList,
            });
        },
        [list, updatePlayList]
    );
    const removeTrack = useCallback(
        function removeTrackInner(track: TrackType) {
            list.forEach((playList: PlayListType) => {
                const {trackList} = playList;

                if (trackList.includes(track)) {
                    trackList.splice(trackList.indexOf(track), 1);
                    updatePlayList(playList, {
                        ...playList,
                        trackList: [...trackList],
                    });
                }
            });
        },
        [list, updatePlayList]
    );

    const providedData: PlayListContextType = useMemo<PlayListContextType>((): PlayListContextType => {
        return {
            createPlayList,
            getAllPlayLists,
            updatePlayList,
            deletePlayList,
            isInitialized: true,

            addTrackToDefaultList,
            removeTrack,
        };
    }, [createPlayList, getAllPlayLists, updatePlayList, deletePlayList, addTrackToDefaultList, removeTrack]);

    useEffect(() => {
        savePlayListContextData(list);
    }, [list]);

    return <PlayListContext.Provider value={providedData}>{children}</PlayListContext.Provider>;
}
