// @flow

import React, {useContext, useState} from 'react';

import {classNames} from '../../lib/css';

import {PlayListContext} from '../../../www/js/provider/play-list/c-play-list-context';
import type {TrackType} from '../../audio-player/audio-player-type';

import playListMenuButtonStyle from './play-list-menu-button.scss';

type PropsType = {|
    +track: TrackType,
    +className?: string,
|};

export function PlayListMenuButton(props: PropsType): React$Node {
    const {className, track} = props;
    const fullClassName = classNames(playListMenuButtonStyle.play_list_menu_button, className);
    const playListContextData = useContext(PlayListContext);

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    if (!playListContextData.isInitialized) {
        return null;
    }

    return (
        <button className={fullClassName} type="button">
            menu
        </button>
    );
}
