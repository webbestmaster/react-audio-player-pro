// @flow

import React, {useContext, useState} from 'react';

import {PlayListContext} from '../../www/js/provider/play-list/c-play-list-context';

import {IsRender} from '../layout/is-render/c-is-render';

import playListPanelStyle from './play-list-panel.scss';
import type {PageNameType} from './play-list-panel-type';
import {playListPanelPageNameMap} from './play-list-panel-const';
import {ListOfPlayList} from './list-of-play-list/c-list-of-play-list';

type PropsType = {};

export function PlayListPanel(props: PropsType): React$Node {
    const playListContextData = useContext(PlayListContext);

    const [pageName, setPageName] = useState<PageNameType>(playListPanelPageNameMap.listOfPlayList);

    console.log(playListContextData);

    return (
        <div className={playListPanelStyle.play_list_panel}>
            <h1>Play List Panel</h1>

            <h2>page name: {pageName}</h2>

            <IsRender isRender={pageName === playListPanelPageNameMap.listOfPlayList}>
                <ListOfPlayList/>
            </IsRender>

            <IsRender isRender={pageName === playListPanelPageNameMap.playList}>some play list</IsRender>
        </div>
    );
}
