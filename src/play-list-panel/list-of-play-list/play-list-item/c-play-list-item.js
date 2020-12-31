// @flow

import React from 'react';

import type {PlayListType} from '../../../../www/js/provider/play-list/play-list-context-type';

import playListItemStyle from './play-list-item.scss';

type PropsType = {|
    +playList: PlayListType,
|};

export function PlayListItem(props: PropsType): React$Node {
    const {playList} = props;

    return (
        <div className={playListItemStyle.play_list_item}>
            <h1>play list item</h1>

            <div>{JSON.stringify(playList)}</div>
        </div>
    );
}
