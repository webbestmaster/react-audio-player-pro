// @flow

import React, {useContext} from 'react';

import {PlayListContext} from '../../../provider/play-list/c-play-list-context';
import type {PlayListType} from '../../../provider/play-list/play-list-context-type';

import {PlayListContainer} from './play-list-container/c-play-list-container';

type PropsType = {};

export function ListOfPlayList(props: PropsType): React$Node {
    const playListContextData = useContext(PlayListContext);

    const listOfPlayList = playListContextData.getAllPlayLists();

    return (
        <div>
            <h1>ListOfPlayList</h1>

            {listOfPlayList.map((playList: PlayListType, index: number): React$Node => {
                // eslint-disable-next-line react/no-array-index-key
                return <PlayListContainer key={index} playList={playList}/>;
            })}
        </div>
    );
}
