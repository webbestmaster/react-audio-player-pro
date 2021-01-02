// @flow

import React, {useContext, useState, useCallback} from 'react';

import {classNames} from '../../lib/css';

import {PlayListContext} from '../../provider/play-list/c-play-list-context';
import type {TrackType} from '../../audio-player/audio-player-type';
import {countTrackInPlayList, getTrackContentAsString} from '../../provider/play-list/play-list-context-helper';

import addTrackToPlayListButtonStyle from './add-track-to-play-list-button.scss';

type PropsType = {|
    +track: TrackType,
    +className?: string,
|};

export function PlayListMenuButton(props: PropsType): React$Node {
    const {className, track} = props;
    const fullClassName = classNames(addTrackToPlayListButtonStyle.add_track_to_play_list_button, className);
    const playListContextData = useContext(PlayListContext);
    const {addTrackToDefaultList, getAllPlayLists} = playListContextData;

    const handleAddTrack = useCallback(
        function handleAddTrackInner() {
            const {src, mediaMetadata} = track;
            const content = getTrackContentAsString(track);

            console.log('---- handleAddTrackInner ----');
            console.log(track);
            console.log(track.content);
            console.log(React.isValidElement(track.content));

            let trackToSave: TrackType = {
                src,
            };

            if (mediaMetadata) {
                trackToSave = {
                    ...trackToSave,
                    mediaMetadata,
                };
            }

            if (content) {
                trackToSave = {
                    ...trackToSave,
                    content,
                };
            }

            addTrackToDefaultList(trackToSave);
        },
        [addTrackToDefaultList, track]
    );

    if (!playListContextData.isInitialized) {
        return null;
    }

    const [defaultPlayList] = getAllPlayLists();
    const savedTrackCount = countTrackInPlayList(defaultPlayList, track);

    return (
        <div className={addTrackToPlayListButtonStyle.content_wrapper}>
            <button className={fullClassName} onClick={handleAddTrack} type="button">
                +{savedTrackCount}
            </button>
        </div>
    );
}
