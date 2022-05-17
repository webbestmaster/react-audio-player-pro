import {useCallback, useEffect, useMemo, useState, ReactNode} from 'react';

import {SavedTrackType} from '../../../library';
import {getRandomStringBySize} from '../../lib/string';

import {PlayListContextType, PlayListType} from './play-list-context-type';
import {getSavedPlayListContextData, savePlayListContextData} from './play-list-context-storage';
import {defaultPlayListName} from './play-list-context-const';
import {PlayListContext} from './play-list-context';

export type PlayListProviderPropsType = Readonly<{children: ReactNode}>;

export function PlayListProvider(props: PlayListProviderPropsType): JSX.Element {
    const {children} = props;
    const [list, setList] = useState<Array<PlayListType>>(getSavedPlayListContextData());

    const getTrackById = useCallback(
        function getTrackByIdInner(trackId: string): SavedTrackType | null {
            const listLength = list.length;

            // eslint-disable-next-line no-loops/no-loops
            for (let playListIndex = 0; playListIndex < listLength; playListIndex += 1) {
                const {trackList} = list[playListIndex];
                const trackListLength = trackList.length;

                // eslint-disable-next-line no-loops/no-loops
                for (let trackIndex = 0; trackIndex < trackListLength; trackIndex += 1) {
                    const track = trackList[trackIndex];

                    if (track.id === trackId) {
                        return track;
                    }
                }
            }

            return null;
        },
        [list]
    );

    const createPlayList = useCallback(
        function createPlayListInner(): PlayListType {
            const newPlayList: PlayListType = {
                name: defaultPlayListName + ' ' + getRandomStringBySize(4),
                trackList: [],
                // isDefault: false,
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
        function updatePlayListInner(oldPlayList: PlayListType, newListPlayData: PlayListType): Error | PlayListType {
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
        function deletePlayListInner(playList: PlayListType): Error | null {
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

    const removeTrackById = useCallback(
        function removeTrackInner(trackId: string): Error | null {
            const listLength = list.length;

            // eslint-disable-next-line no-loops/no-loops
            for (let playListIndex = 0; playListIndex < listLength; playListIndex += 1) {
                const playList = list[playListIndex];
                const {trackList} = playList;
                const trackListLength = trackList.length;

                // eslint-disable-next-line no-loops/no-loops
                for (let trackIndex = 0; trackIndex < trackListLength; trackIndex += 1) {
                    const track = trackList[trackIndex];

                    if (track.id === trackId) {
                        const newTrackList = [...trackList];

                        newTrackList.splice(trackIndex, 1);

                        updatePlayList(playList, {
                            ...playList,
                            trackList: newTrackList,
                        });

                        return null;
                    }
                }
            }

            return new Error('Track is not exists.');
        },
        [list, updatePlayList]
    );

    const providedData: PlayListContextType = useMemo<PlayListContextType>((): PlayListContextType => {
        return {
            createPlayList,
            deletePlayList,
            getAllPlayLists,
            getTrackById,
            isInitialized: true,
            removeTrackById,
            updatePlayList,
        };
    }, [createPlayList, getAllPlayLists, updatePlayList, deletePlayList, removeTrackById, getTrackById]);

    useEffect(() => {
        savePlayListContextData(list);
    }, [list]);

    return <PlayListContext.Provider value={providedData}>{children}</PlayListContext.Provider>;
}
