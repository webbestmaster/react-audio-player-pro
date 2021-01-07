// @flow

import React, {useContext, useRef, useCallback} from 'react';

import type {PlayListType} from '../../../../provider/play-list/play-list-context-type';
import {PlayListContext} from '../../../../provider/play-list/c-play-list-context';
import {getTrackListIdList} from '../../../../provider/play-list/play-list-context-helper';
import {defaultPlayListName} from '../../../../provider/play-list/play-list-context-const';

import playListContainerStyle from './play-list-container.scss';
import {TrackList} from './track-list/c-track-list';

type PropsType = {|
    +playList: PlayListType,
|};

export function PlayListContainer(props: PropsType): React$Node {
    const {playList} = props;
    const {trackList} = playList;
    const inputPlayListNameRef = useRef<?HTMLInputElement>();

    const playListContextData = useContext(PlayListContext);
    const {updatePlayList} = playListContextData;

    function getInputPlayListName(): HTMLInputElement {
        return (
            inputPlayListNameRef.current
            || (() => {
                throw new Error('Can not get input of play list name');
            })()
        );
    }

    function handleOnInputPlayListName() {
        updatePlayList(playList, {
            name: getInputPlayListName().value.trim(),
            trackList: playList.trackList,
            isDefault: playList.isDefault,
        });
    }

    const handleRemovePlayList = useCallback(function handleRemovePlayListInner() {
        console.log('handleRemovePlayList');
    }, []);

    return (
        <div className={playListContainerStyle.play_list_container}>
            <button
                className={playListContainerStyle.remove_play_list_button}
                onClick={handleRemovePlayList}
                type="button"
            >
                remove play list
            </button>

            <input
                className={playListContainerStyle.header_input}
                defaultValue={playList.name}
                onInput={handleOnInputPlayListName}
                placeholder={defaultPlayListName}
                ref={inputPlayListNameRef}
                type="text"
            />

            <TrackList key={getTrackListIdList(trackList).join('-')} playList={playList}/>
        </div>
    );
}
