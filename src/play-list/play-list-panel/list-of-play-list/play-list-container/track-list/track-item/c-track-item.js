// @flow

import React, {useCallback, useContext} from 'react';

import type {SavedTrackType} from '../../../../../../audio-player/audio-player-type';
import {PlayListContext} from '../../../../../../provider/play-list/c-play-list-context';

import trackItemStyle from './track-item.scss';

type PropsType = {|
    +track: SavedTrackType,
|};

export function TrackItem(props: PropsType): React$Node {
    const {track} = props;

    const playListContextData = useContext(PlayListContext);
    const {removeTrack} = playListContextData;

    const handleRemoveTrack = useCallback(
        function handleRemoveTrackInner() {
            removeTrack(track);
        },
        [removeTrack, track]
    );

    return (
        <div className={trackItemStyle.track_item}>
            <div>track item: {track.src}</div>

            <button className={trackItemStyle.button_remove} onClick={handleRemoveTrack} type="button">
                remove
            </button>
        </div>
    );
}
