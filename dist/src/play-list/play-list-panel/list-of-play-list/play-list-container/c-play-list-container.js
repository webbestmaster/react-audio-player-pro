import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* global HTMLInputElement */
import { useCallback, useContext, useRef } from "react";
import { AudioPlayer } from "../../../../audio-player/c-audio-player";
import { AudioPlayerControlButton } from "../../../../layout/audio-player-control-button/c-audio-player-control-button";
import { PlayListContext } from "../../../../provider/play-list/play-list-context";
import { noNamePlayListName } from "../../../../provider/play-list/play-list-context-const";
import { savedTrackToTrack } from "../../../../provider/play-list/play-list-context-helper";
import * as playListContainerStyle from "./play-list-container.scss";
export function PlayListContainer(props) {
    const { playList } = props;
    const { trackList, name: playListName } = playList;
    const inputPlayListNameRef = useRef(null);
    const playListContextData = useContext(PlayListContext);
    const { updatePlayList, deletePlayList, getAllPlayLists } = playListContextData;
    const allPlayLists = getAllPlayLists();
    const hasTrackInList = trackList.length > 0;
    function getInputPlayListName() {
        var _a;
        return ((_a = inputPlayListNameRef.current) !== null && _a !== void 0 ? _a : (() => {
            throw new Error("Can not get input of play list name");
        })());
    }
    const handleOnBlurPlayListName = useCallback(() => {
        updatePlayList(playList, {
            name: getInputPlayListName().value.trim(),
            trackList,
        });
    }, [updatePlayList, playList, trackList]);
    const handleRemovePlayList = useCallback(() => {
        deletePlayList(playList);
    }, [deletePlayList, playList]);
    const useRemovePlayListButton = allPlayLists.length > 1 && trackList.length === 0;
    const removePlayListButtonClassName = useRemovePlayListButton
        ? playListContainerStyle.remove_play_list_button_active
        : playListContainerStyle.remove_play_list_button;
    return (_jsxs("div", { className: playListContainerStyle.play_list_container, children: [_jsxs("div", { className: playListContainerStyle.header_container, children: [_jsx("input", { className: playListContainerStyle.header_input, defaultValue: playListName, onBlur: handleOnBlurPlayListName, placeholder: noNamePlayListName, ref: inputPlayListNameRef, type: "text" }), _jsx(AudioPlayerControlButton, { ariaLabel: "delete", className: removePlayListButtonClassName, imageId: "trash-bin", onClick: handleRemovePlayList })] }), hasTrackInList ? (_jsx(AudioPlayer, { trackList: trackList.map(savedTrackToTrack) })) : (_jsx("p", { className: playListContainerStyle.no_track_here, children: "\u2205" }))] }));
}
//# sourceMappingURL=c-play-list-container.js.map