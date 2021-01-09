// @flow

import React, {useContext} from 'react';

import {PlayListContext} from '../../provider/play-list/play-list-context';
import {AudioPlayerControlButton} from '../../layout/audio-player-control-button/c-audio-player-control-button';

import playListPanelStyle from './play-list-panel.scss';
import {renderPlayListContainer} from './play-list-panel-helper';

type PropsType = {};

export function PlayListPanel(props: PropsType): React$Node {
    const playListContextData = useContext(PlayListContext);
    const {createPlayList, getAllPlayLists} = playListContextData;
    const listOfPlayList = getAllPlayLists();

    return (
        <div className={playListPanelStyle.play_list_panel}>
            {listOfPlayList.map(renderPlayListContainer)}

            <div className={playListPanelStyle.add_play_list_wrapper}>
                <AudioPlayerControlButton
                    ariaLabel="add play list"
                    className={playListPanelStyle.add_play_list_button}
                    imageId="play-list-plus"
                    onClick={createPlayList}
                />
            </div>
        </div>
    );
}
