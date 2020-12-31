// @flow

import React, {useContext} from 'react';

import {PlayListContext} from '../../../www/js/provider/play-list/c-play-list-context';
import type {PlayListType} from '../../../www/js/provider/play-list/play-list-context-type';

type PropsType = {};

export function ListOfPlayList(props: PropsType): React$Node {
    const playListContextData = useContext(PlayListContext);

    const listOfPlayList = playListContextData.getAllPlayLists();

    return (
        <div>
            {listOfPlayList.map((playList: PlayListType, index: number): React$Node => {
                return (
                    <div key={playList.name + '-' + index}>
                        {playList.name}:{playList.trackList.length}
                    </div>
                );
            })}
        </div>
    );
}
