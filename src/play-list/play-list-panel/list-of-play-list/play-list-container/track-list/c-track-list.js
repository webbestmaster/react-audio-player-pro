// @flow

import React from 'react';

import type {SavedTrackType} from '../../../../../audio-player/audio-player-type';
import type {PlayListType} from '../../../../../provider/play-list/play-list-context-type';

import {TrackItem} from './track-item/c-track-item';
import trackListStyle from './track-list.scss';

type PropsType = {|
    +playList: PlayListType,
|};

export function TrackList(props: PropsType): React$Node {
    const {playList} = props;
    const {trackList} = playList;

    return (
        <div className={trackListStyle.track_list}>
            <h1>track list</h1>

            {trackList.map((track: SavedTrackType): React$Node =>
                <TrackItem key={track.id} track={track}/>
            )}
        </div>
    );
}
