// @flow

/* eslint-disable jsx-a11y/no-onchange */

import React, {useCallback, useContext, useState} from 'react';

import {classNames} from '../../lib/css';
import {PlayListContext} from '../../provider/play-list/c-play-list-context';
import type {SavedTrackType, TrackType} from '../../audio-player/audio-player-type';
import {getTrackContentAsString, isTracksEquals} from '../../provider/play-list/play-list-context-helper';
import {getRandomString} from '../../lib/string';
import type {PlayListType} from '../../provider/play-list/play-list-context-type';
import {noNamePlayListName} from '../../provider/play-list/play-list-context-const';
import {AudioPlayerControlButton} from '../../layout/audio-player-control-button/c-audio-player-control-button';

import addTrackToPlayListButtonStyle from './add-track-to-play-list-button.scss';

type PropsType = {|
    +track: TrackType,
    +className?: string,
|};

export function PlayListMenuButton(props: PropsType): React$Node {
    const {className, track} = props;
    const fullClassName = classNames(addTrackToPlayListButtonStyle.add_track_to_play_list_button, className);
    const playListContextData = useContext(PlayListContext);
    const [selectKey, setSelectKey] = useState<number>(0);
    const {getAllPlayLists, updatePlayList, removeTrackById} = playListContextData;
    const listOfPlayList = getAllPlayLists();
    const defaultSelectValue = '-1';

    const handleAddTrack = useCallback(
        // eslint-disable-next-line max-statements
        function handleAddTrackInner(evt: SyntheticEvent<HTMLSelectElement>) {
            const selectNode = evt.currentTarget;
            const listIndex = Number.parseInt(selectNode.value, 10);
            const playList = listOfPlayList[listIndex];
            const {src, mediaMetadata} = track;
            const content = getTrackContentAsString(track);

            setSelectKey(selectKey + 1);

            if (!playList) {
                console.log('Can not get play list by index', listIndex);
                return;
            }

            const existsSavedTrack = playList.trackList.find((savedTrack: SavedTrackType): boolean => {
                return isTracksEquals(savedTrack, track);
            });

            if (existsSavedTrack) {
                removeTrackById(existsSavedTrack.id);
                return;
            }

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
        [listOfPlayList, updatePlayList, track, defaultSelectValue, removeTrackById, setSelectKey, selectKey]
    );

    if (!playListContextData.isInitialized) {
        return null;
    }

    return (
        <label className={addTrackToPlayListButtonStyle.content_wrapper}>
            <AudioPlayerControlButton ariaLabel="play list menu" className={fullClassName} imageId="play-list-menu"/>

            <select
                className={addTrackToPlayListButtonStyle.select_play_list}
                defaultValue={defaultSelectValue}
                key={selectKey}
                onChange={handleAddTrack}
            >
                <option disabled value={defaultSelectValue}>
                    &nbsp;
                </option>

                {listOfPlayList.map((playList: PlayListType, index: number): React$Node => {
                    const isTrackExistsInPlayList = playList.trackList.find((savedTrack: SavedTrackType): boolean =>
                        isTracksEquals(savedTrack, track)
                    );

                    const name = playList.name.trim() || noNamePlayListName;
                    const actionSign = isTrackExistsInPlayList ? '✓' : ' ';
                    const text = '[' + actionSign + ']' + ' ' + name;

                    return (
                        <option key={String(index) + name} value={index}>
                            {text}
                        </option>
                    );
                })}
            </select>
        </label>
    );
}
