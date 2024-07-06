import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* global HTMLSelectElement */
import { useCallback, useContext, useState } from "react";
import { AudioPlayerControlButton } from "../../layout/audio-player-control-button/c-audio-player-control-button";
import { cls } from "../../lib/css";
import { getRandomString } from "../../lib/string";
import { PlayListContext } from "../../provider/play-list/play-list-context";
import { noNamePlayListName } from "../../provider/play-list/play-list-context-const";
import { isTracksEquals } from "../../provider/play-list/play-list-context-helper";
import * as addTrackToPlayListButtonStyle from "./add-track-to-play-list-button.scss";
export function PlayListMenuButton(props) {
    const { className, track } = props;
    const fullClassName = cls(addTrackToPlayListButtonStyle.add_track_to_play_list_button, className);
    const playListContextData = useContext(PlayListContext);
    const [selectKey, setSelectKey] = useState(0);
    const { getAllPlayLists, updatePlayList, removeTrackById, isInitialized: isPlayListContextInitialized, } = playListContextData;
    const listOfPlayList = getAllPlayLists();
    const defaultSelectValue = "-1";
    const handleAddTrack = useCallback(
    // eslint-disable-next-line max-statements
    (evt) => {
        const selectNode = evt.currentTarget;
        const listIndex = Number.parseInt(selectNode.value, 10);
        const playList = listOfPlayList.at(listIndex);
        const { src, mediaMetadata, content, preload, duration } = track;
        setSelectKey(selectKey + 1);
        if (!playList) {
            console.log("Can not get play list by index", listIndex);
            return;
        }
        const existsSavedTrack = playList.trackList.find((savedTrack) => {
            return isTracksEquals(savedTrack, track);
        });
        if (existsSavedTrack) {
            removeTrackById(existsSavedTrack.id);
            return;
        }
        let trackToSave = {
            id: getRandomString(),
            src,
        };
        if (mediaMetadata) {
            trackToSave = {
                ...trackToSave,
                mediaMetadata,
            };
        }
        if (typeof content === "string") {
            trackToSave = {
                ...trackToSave,
                content,
            };
        }
        if (typeof preload === "string") {
            trackToSave = {
                ...trackToSave,
                preload,
            };
        }
        if (typeof duration === "number") {
            trackToSave = {
                ...trackToSave,
                duration,
            };
        }
        const updatedTrackList = [trackToSave, ...playList.trackList];
        updatePlayList(playList, {
            ...playList,
            trackList: updatedTrackList,
        });
        selectNode.value = defaultSelectValue;
        console.log("---> track added to list!");
        console.log(trackToSave);
        console.log(playList);
    }, [listOfPlayList, updatePlayList, track, defaultSelectValue, removeTrackById, setSelectKey, selectKey]);
    if (!isPlayListContextInitialized) {
        return null;
    }
    return (_jsxs("label", { className: addTrackToPlayListButtonStyle.content_wrapper, children: [_jsx(AudioPlayerControlButton, { ariaLabel: "play list menu", className: fullClassName, imageId: "play-list-menu" }), _jsxs("select", { className: addTrackToPlayListButtonStyle.select_play_list, defaultValue: defaultSelectValue, onChange: handleAddTrack, children: [_jsx("option", { disabled: true, value: defaultSelectValue, children: "\u00A0" }), listOfPlayList.map((playList, index) => {
                        const isTrackExistsInPlayList = playList.trackList.find((savedTrack) => {
                            return isTracksEquals(savedTrack, track);
                        });
                        const name = playList.name.trim() || noNamePlayListName;
                        const actionSign = isTrackExistsInPlayList ? "[✓]" : "[_]";
                        const text = `${actionSign} ${name}`;
                        return (_jsx("option", { value: index, children: text }, String(index) + name));
                    })] }, selectKey)] }));
}
//# sourceMappingURL=c-add-track-to-play-list-button.js.map