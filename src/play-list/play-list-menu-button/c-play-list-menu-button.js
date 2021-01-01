// @flow

import React, {useContext, useState, useCallback} from 'react';

import {classNames} from '../../lib/css';

import {PlayListContext} from '../../../www/js/provider/play-list/c-play-list-context';
import type {TrackType} from '../../audio-player/audio-player-type';
import {countTrackInPlayList} from '../../../www/js/provider/play-list/play-list-context-helper';

import playListMenuButtonStyle from './play-list-menu-button.scss';

type PropsType = {|
    +track: TrackType,
    +className?: string,
|};

export function PlayListMenuButton(props: PropsType): React$Node {
    const {className, track} = props;
    const fullClassName = classNames(playListMenuButtonStyle.play_list_menu_button, className);
    const playListContextData = useContext(PlayListContext);
    const {addTrackToDefaultList, getAllPlayLists} = playListContextData;

    const handleAddTrack = useCallback(
        function handleAddTrackInner() {
            addTrackToDefaultList(track);
        },
        [addTrackToDefaultList, track]
    );

    if (!playListContextData.isInitialized) {
        return null;
    }

    const [defaultPlayList] = getAllPlayLists();
    const savedTrackCount = countTrackInPlayList(defaultPlayList, track);

    return (
        <div className={playListMenuButtonStyle.content_wrapper}>
            <button className={fullClassName} onClick={handleAddTrack} type="button">
                +{savedTrackCount}
            </button>
        </div>
    );
}
