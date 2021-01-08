// @flow

import React, {useContext, useCallback} from 'react';

import {PlayListContext} from '../../provider/play-list/play-list-context';

import {AudioPlayerControlButton} from '../../layout/audio-player-control-button/c-audio-player-control-button';

import playListPanelStyle from './play-list-panel.scss';
import {ListOfPlayList} from './list-of-play-list/c-list-of-play-list';

type PropsType = {};

export function PlayListPanel(props: PropsType): React$Node {
    const playListContextData = useContext(PlayListContext);
    const {createPlayList} = playListContextData;

    const handleCreateNewPlayList = useCallback(() => {
        createPlayList();
    }, [createPlayList]);

    return (
        <div className={playListPanelStyle.play_list_panel}>
            <ListOfPlayList/>

            <div className={playListPanelStyle.add_play_list_wrapper}>
                <AudioPlayerControlButton
                    ariaLabel="add play list"
                    className={playListPanelStyle.add_play_list_button}
                    imageId="play-list-plus"
                    onClick={handleCreateNewPlayList}
                />
            </div>
        </div>
    );
}
