// @flow

/* eslint-disable jsx-a11y/no-onchange */

import React, {useCallback, useContext} from 'react';

import {classNames} from '../../lib/css';
import {PlayListContext} from '../../provider/play-list/c-play-list-context';
import type {SavedTrackType, TrackType} from '../../audio-player/audio-player-type';
import {getTrackContentAsString} from '../../provider/play-list/play-list-context-helper';
import {getRandomString} from '../../lib/string';
import type {PlayListType} from '../../provider/play-list/play-list-context-type';

import addTrackToPlayListButtonStyle from './add-track-to-play-list-button.scss';

type PropsType = {|
    +track: TrackType,
    +className?: string,
|};

export function PlayListMenuButton(props: PropsType): React$Node {
    const {className, track} = props;
    const fullClassName = classNames(addTrackToPlayListButtonStyle.add_track_to_play_list_button, className);
    const playListContextData = useContext(PlayListContext);
    const {getAllPlayLists, updatePlayList} = playListContextData;
    const listOfPlayList = getAllPlayLists();
    const defaultSelectValue = '-1';

    const handleAddTrack = useCallback(
        function handleAddTrackInner(evt: SyntheticEvent<HTMLSelectElement>) {
            const selectNode = evt.currentTarget;
            const listIndex = Number.parseInt(selectNode.value, 10);
            const playList = listOfPlayList[listIndex];
            const {src, mediaMetadata} = track;
            const content = getTrackContentAsString(track);

            if (!playList) {
                console.log('Can not get play list by index', listIndex);
                return;
            }

            console.log('---- handleAddTrackInner ----');
            console.log(React.isValidElement(track.content));

            let trackToSave: SavedTrackType = {
                src,
                id: getRandomString(),
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

            updatePlayList(playList, {
                ...playList,
                trackList: [trackToSave, ...playList.trackList],
            });

            selectNode.value = defaultSelectValue;

            console.log('---> track added to list!');
            console.log(trackToSave);
            console.log(playList);
        },
        [listOfPlayList, updatePlayList, track, defaultSelectValue]
    );

    if (!playListContextData.isInitialized) {
        return null;
    }

    return (
        <label className={addTrackToPlayListButtonStyle.content_wrapper}>
            <div className={fullClassName}>+</div>

            <select
                className={addTrackToPlayListButtonStyle.select_play_list}
                defaultValue={defaultSelectValue}
                onChange={handleAddTrack}
            >
                <option disabled value={defaultSelectValue}>
                    &nbsp;
                </option>

                {listOfPlayList.map((playList: PlayListType, index: number): React$Node => {
                    return (
                        <option key={String(index) + playList.name} value={index}>
                            &nbsp;♫&nbsp;{playList.name}&nbsp;
                        </option>
                    );
                })}
            </select>
        </label>
    );
}
