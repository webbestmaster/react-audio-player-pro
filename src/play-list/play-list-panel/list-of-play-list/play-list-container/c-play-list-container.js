// @flow

import React, {useContext, useRef} from 'react';

import type {PlayListType} from '../../../../provider/play-list/play-list-context-type';
import {PlayListContext} from '../../../../provider/play-list/c-play-list-context';
import {getTrackListIdList} from '../../../../provider/play-list/play-list-context-helper';

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

    function getInputPlayListName(): HTMLInputElement {
        return (
            inputPlayListNameRef.current
            || (() => {
                throw new Error('Can not get input of play list name');
            })()
        );
    }

    function handleOnInputPlayListName() {
        playListContextData.updatePlayList(playList, {
            name: getInputPlayListName().value.trim(),
            trackList: playList.trackList,
            isDefault: playList.isDefault,
        });
    }

    return (
        <div className={playListContainerStyle.play_list_container}>
            <h1>play list container</h1>

            <div>
                <span>play list name:</span>

                <input
                    defaultValue={playList.name}
                    onInput={handleOnInputPlayListName}
                    ref={inputPlayListNameRef}
                    type="text"
                />
            </div>

            <TrackList key={getTrackListIdList(trackList).join('-')} playList={playList}/>
        </div>
    );
}
