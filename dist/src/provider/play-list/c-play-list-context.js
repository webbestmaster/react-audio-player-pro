import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getRandomStringBySize } from "../../lib/string";
import { PlayListContext } from "./play-list-context";
import { defaultPlayListName } from "./play-list-context-const";
import { getSavedPlayListContextData, savePlayListContextData } from "./play-list-context-storage";
export function PlayListProvider(props) {
    const { children } = props;
    const [list, setList] = useState(getSavedPlayListContextData());
    const getTrackById = useCallback((trackId) => {
        const listLength = list.length;
        for (let playListIndex = 0; playListIndex < listLength; playListIndex += 1) {
            const { trackList } = list[playListIndex];
            const trackListLength = trackList.length;
            for (let trackIndex = 0; trackIndex < trackListLength; trackIndex += 1) {
                const track = trackList[trackIndex];
                if (track.id === trackId) {
                    return track;
                }
            }
        }
        return null;
    }, [list]);
    const createPlayList = useCallback(() => {
        const updatedPlayList = {
            name: `${defaultPlayListName} ${getRandomStringBySize(4)}`,
            trackList: [],
            // IsDefault: false,
        };
        const updatedList = [...list, updatedPlayList];
        setList(updatedList);
        return updatedPlayList;
    }, [list, setList]);
    const getAllPlayLists = useCallback(() => {
        return [...list];
    }, [list]);
    const updatePlayList = useCallback((oldPlayList, updatedListPlayData) => {
        const updatedList = [...list];
        const playListIndex = updatedList.indexOf(oldPlayList);
        if (playListIndex < 0) {
            return new Error("Old Play List is not exists.");
        }
        updatedList[playListIndex] = updatedListPlayData;
        setList(updatedList);
        return updatedListPlayData;
    }, [list, setList]);
    const deletePlayList = useCallback((playList) => {
        const updatedList = [...list];
        const playListIndex = updatedList.indexOf(playList);
        if (playListIndex < 0) {
            return new Error("Play List is not exists.");
        }
        updatedList.splice(playListIndex, 1);
        setList(updatedList);
        return null;
    }, [list, setList]);
    const removeTrackById = useCallback((trackId) => {
        const listLength = list.length;
        for (let playListIndex = 0; playListIndex < listLength; playListIndex += 1) {
            const playList = list[playListIndex];
            const { trackList } = playList;
            const trackListLength = trackList.length;
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
    }, [list, updatePlayList]);
    const providedData = useMemo(() => {
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
    return _jsx(PlayListContext.Provider, { value: providedData, children: children });
}
//# sourceMappingURL=c-play-list-context.js.map