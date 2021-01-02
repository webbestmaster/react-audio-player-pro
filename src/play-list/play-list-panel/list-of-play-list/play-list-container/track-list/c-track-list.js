// @flow

import React from 'react';

import type {SavedTrackType} from '../../../../../audio-player/audio-player-type';
import {DragList} from '../../../../../layout/drag-list/c-drag-list';
import type {DragListItemType} from '../../../../../layout/drag-list/drag-list-type';

import {TrackItem} from './track-item/c-track-item';
import trackListStyle from './track-list.scss';

type PropsType = {|
    +trackList: Array<SavedTrackType>,
|};

export function TrackList(props: PropsType): React$Node {
    const {trackList} = props;

    function handleOnChange(idList: Array<string>) {
        console.log('handleOnChange');
        console.log(idList);
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
