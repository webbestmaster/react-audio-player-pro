// @flow

import React, {useContext, useRef, useCallback} from 'react';

import type {PlayListType} from '../../../../provider/play-list/play-list-context-type';
import {PlayListContext} from '../../../../provider/play-list/c-play-list-context';
import {defaultPlayListName} from '../../../../provider/play-list/play-list-context-const';
import {IsRender} from '../../../../layout/is-render/c-is-render';
import {AudioPlayer} from '../../../../audio-player';
import {savedTrackToTrack} from '../../../../provider/play-list/play-list-context-helper';

import playListContainerStyle from './play-list-container.scss';

type PropsType = {|
    +playList: PlayListType,
|};

export function PlayListContainer(props: PropsType): React$Node {
    const {playList} = props;
    const {trackList} = playList;
    const inputPlayListNameRef = useRef<?HTMLInputElement>();

    const playListContextData = useContext(PlayListContext);
    const {updatePlayList, deletePlayList, getAllPlayLists} = playListContextData;
    const allPlayLists = getAllPlayLists();
    const hasTrackInList = trackList.length > 0;

    function getInputPlayListName(): HTMLInputElement {
        return (
            inputPlayListNameRef.current
            || (() => {
                throw new Error('Can not get input of play list name');
            })()
        );
    }

    const handleOnInputPlayListName = useCallback(
        function handleOnInputPlayListNameInner() {
            updatePlayList(playList, {
                name: getInputPlayListName().value.trim(),
                trackList,
            });
        },
        [updatePlayList, playList, trackList]
    );

    const handleRemovePlayList = useCallback(
        function handleRemovePlayListInner() {
            deletePlayList(playList);
        },
        [deletePlayList, playList]
    );

    return (
        <div className={playListContainerStyle.play_list_container}>
            <IsRender isRender={allPlayLists.length > 1 && trackList.length === 0}>
                <button
                    className={playListContainerStyle.remove_play_list_button}
                    onClick={handleRemovePlayList}
                    type="button"
                >
                    trash bin icon
                </button>
            </IsRender>

            <input
                className={playListContainerStyle.header_input}
                defaultValue={playList.name}
                onInput={handleOnInputPlayListName}
                placeholder={defaultPlayListName}
                ref={inputPlayListNameRef}
                type="text"
            />

            <IsRender isRender={!hasTrackInList}>animation how to add play list</IsRender>

            <IsRender isRender={hasTrackInList}>
                <AudioPlayer defaultState={{isTrackListOpen: false}} trackList={trackList.map(savedTrackToTrack)}/>
            </IsRender>
        </div>
    );
}
