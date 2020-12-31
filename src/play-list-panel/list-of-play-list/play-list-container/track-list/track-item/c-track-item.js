// @flow

import React from 'react';

import type {TrackType} from '../../../../../audio-player/audio-player-type';

type PropsType = {|
    +track: TrackType,
|};

export function TrackItem(props: PropsType): React$Node {
    const {track} = props;

    return <div>track item : {JSON.stringify(props)}</div>;
}
