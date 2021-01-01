// @flow

import React, {useContext, useState} from 'react';

import {classNames} from '../../lib/css';

import {PlayListContext} from '../../../www/js/provider/play-list/c-play-list-context';

import playListMenuButtonStyle from './play-list-menu-button.scss';

type PropsType = {|
    +className?: string,
|};

export function PlayListMenuButton(props: PropsType): React$Node {
    const {className} = props;
    const fullClassName = classNames(playListMenuButtonStyle.play_list_menu_button, className);
    const playListContextData = useContext(PlayListContext);

    if (!playListContextData.isInitialized) {
        return null;
    }

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <button className={fullClassName} type="button">
            menu
        </button>
    );
}
