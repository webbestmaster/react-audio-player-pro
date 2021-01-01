// @flow

import React, {useContext} from 'react';

import {classNames} from '../../lib/css';
import {PlayListContext} from '../../../www/js/provider/play-list/c-play-list-context';

import playListMenuStyle from './play-list-menu.scss';

type PropsType = {|
    +className?: string,
|};

export function PlayListMenu(props: PropsType): React$Node {
    const {className} = props;

    const fullClassName = classNames(playListMenuStyle.play_list_menu, className);

    const playListContextData = useContext(PlayListContext);

    if (!playListContextData.isInitialized) {
        return null;
    }

    return <div className={fullClassName}/>;
}
