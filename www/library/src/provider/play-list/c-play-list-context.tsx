import {useCallback, useEffect, useMemo, useState, ReactNode} from "react";

import {SavedTrackType} from "../../../library";
import {getRandomStringBySize} from "../../lib/string";

import {PlayListContextType, PlayListType} from "./play-list-context-type";
import {getSavedPlayListContextData, savePlayListContextData} from "./play-list-context-storage";
import {defaultPlayListName} from "./play-list-context-const";
import {PlayListContext} from "./play-list-context";

export type PlayListProviderPropsType = Readonly<{children: ReactNode}>;

export function PlayListProvider(props: PlayListProviderPropsType): JSX.Element {
    const {children} = props;
    const [list, setList] = useState<Array<PlayListType>>(getSavedPlayListContextData());

    const getTrackById = useCallback(
        (trackId: string): SavedTrackType | null => {
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

    const createPlayList = useCallback((): PlayListType => {
        const updatedPlayList: PlayListType = {
            name: `${defaultPlayListName} ${getRandomStringBySize(4)}`,
            trackList: [],
            // IsDefault: false,
        };

        const updatedList = [...list, updatedPlayList];

        setList(updatedList);

        return updatedPlayList;
    }, [list, setList]);

    const getAllPlayLists = useCallback((): Array<PlayListType> => {
        return [...list];
    }, [list]);

    const updatePlayList = useCallback(
        (oldPlayList: PlayListType, updatedListPlayData: PlayListType): Error | PlayListType => {
            const updatedList = [...list];

            const playListIndex = updatedList.indexOf(oldPlayList);

            if (playListIndex < 0) {
                return new Error("Old Play List is not exists.");
            }

            updatedList[playListIndex] = updatedListPlayData;

            setList(updatedList);

            return updatedListPlayData;
        },
        [list, setList]
    );

    const deletePlayList = useCallback(
        (playList: PlayListType): Error | null => {
            const updatedList = [...list];

            const playListIndex = updatedList.indexOf(playList);

            if (playListIndex < 0) {
                return new Error("Play List is not exists.");
            }

            updatedList.splice(playListIndex, 1);

            setList(updatedList);

            return null;
        },
        [list, setList]
    );

    const removeTrackById = useCallback(
        (trackId: string): Error | null => {
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
                        const updatedTrackList = [...trackList];

                        updatedTrackList.splice(trackIndex, 1);

                        updatePlayList(playList, {
                            ...playList,
                            trackList: updatedTrackList,
                        });

                        return null;
                    }
                }
            }

            return new Error("Track is not exists.");
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
