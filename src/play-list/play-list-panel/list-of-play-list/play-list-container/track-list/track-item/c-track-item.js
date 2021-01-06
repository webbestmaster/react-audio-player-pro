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
    const {removeTrackById} = playListContextData;

    const handleRemoveTrack = useCallback(
        function handleRemoveTrackInner() {
            removeTrackById(track.id);
        },
        [removeTrackById, track]
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
