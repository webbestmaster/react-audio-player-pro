// @flow

import React from 'react';

import type {TrackType} from '../../../../audio-player/audio-player-type';

import {TrackItem} from './track-item/c-track-item';
import trackListStyle from './track-list.scss';

type PropsType = {|
    +trackList: Array<TrackType>,
|};

export function TrackList(props: PropsType): React$Node {
    const {trackList} = props;

    return (
        <div className={trackListStyle.track_list}>
            <h1>track list</h1>

            {trackList.map((track: TrackType, index: number): React$Node => {
                return <TrackItem key={index} track={track}/>;
            })}
        </div>
    );
}
