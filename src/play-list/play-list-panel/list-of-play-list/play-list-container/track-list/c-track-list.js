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

    if (trackList.length === 0) {
        return (
            <div className={trackListStyle.track_list}>
                <h1>here is tutor how to add track to play list</h1>
            </div>
        );
    }

    return (
        <div className={trackListStyle.track_list}>
            {trackList.map((track: SavedTrackType): React$Node =>
                <TrackItem key={track.id} track={track}/>
            )}
        </div>
    );
}
