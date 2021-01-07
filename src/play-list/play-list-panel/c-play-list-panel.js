// @flow

import React, {useContext} from 'react';

import {PlayListContext} from '../../provider/play-list/c-play-list-context';

import playListPanelStyle from './play-list-panel.scss';
import {ListOfPlayList} from './list-of-play-list/c-list-of-play-list';

type PropsType = {};

export function PlayListPanel(props: PropsType): React$Node {
    const playListContextData = useContext(PlayListContext);
    const handleCreateNewPlayList = playListContextData.createPlayList;

    console.log('---> playListContextData', playListContextData);

    return (
        <div className={playListPanelStyle.play_list_panel}>
            <h1>Play List Panel</h1>

            <ListOfPlayList/>

            <br/>

            <br/>

            <button onClick={handleCreateNewPlayList} type="button">
                click here to create play list
            </button>
        </div>
    );
}
