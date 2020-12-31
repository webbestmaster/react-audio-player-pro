// @flow

import React, {useContext} from 'react';

import {PlayListContext} from '../../www/js/provider/play-list/c-play-list-context';

import playListStyle from './play-list.css';

type PropsType = {};

export function PlayList(props: PropsType): React$Node {
    const playListContextData = useContext(PlayListContext);

    console.log(playListContextData);

    return <div className={playListStyle.play_list}>Play List</div>;
}
