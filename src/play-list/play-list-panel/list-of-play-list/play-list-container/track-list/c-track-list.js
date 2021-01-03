// @flow

import React, {useContext} from 'react';

import type {SavedTrackType} from '../../../../../audio-player/audio-player-type';
import {DragList} from '../../../../../layout/drag-list/c-drag-list';
import type {DragListItemType} from '../../../../../layout/drag-list/drag-list-type';
import type {PlayListType} from '../../../../../provider/play-list/play-list-context-type';
import {PlayListContext} from '../../../../../provider/play-list/c-play-list-context';

import {TrackItem} from './track-item/c-track-item';
import trackListStyle from './track-list.scss';

type PropsType = {|
    +playList: PlayListType,
|};

export function TrackList(props: PropsType): React$Node {
    const {playList} = props;
    const {trackList} = playList;
    const playListContextData = useContext(PlayListContext);
    const {getTrackById, updatePlayList} = playListContextData;

    function handleOnChange(idList: Array<string>) {
        console.log('---- TrackList - handleOnChange');
        console.log(idList);

        const newTrackList: Array<SavedTrackType> = idList.map(getTrackById).filter(Boolean);

        updatePlayList(playList, {
            ...playList,
            trackList: newTrackList,
        });
    }

    const dragItemList: Array<DragListItemType> = [];
    const dragItemIdList: Array<string> = [];

    trackList.forEach((track: SavedTrackType) => {
        const trackId = track.id;

        dragItemIdList.push(trackId);

        dragItemList.push({
            id: trackId,
            node: <TrackItem track={track}/>,
        });
    });

    return (
        <div className={trackListStyle.track_list}>
            <h1>track list</h1>

            <DragList key={dragItemIdList.join('-')} list={dragItemList} onChange={handleOnChange}/>
        </div>
    );
}
