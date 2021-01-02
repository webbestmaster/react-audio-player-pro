// @flow

import React from 'react';

import type {TrackType} from '../../../../../../audio-player/audio-player-type';

import trackItemStyle from './track-item.scss';

type PropsType = {|
    +track: TrackType,
|};

export function TrackItem(props: PropsType): React$Node {
    const {track} = props;

    return <div className={trackItemStyle.track_item}>track item: {track.src}</div>;
}
