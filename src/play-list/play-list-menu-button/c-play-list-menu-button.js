// @flow

import React, {useContext, useState, useCallback} from 'react';

import {classNames} from '../../lib/css';

import {PlayListContext} from '../../../www/js/provider/play-list/c-play-list-context';
import type {TrackType} from '../../audio-player/audio-player-type';

import {PlayListMenu} from '../play-list-menu/c-play-list-menu';

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

    const handleToggleMenu = useCallback(
        function handleToggleMenuInner() {
            setIsMenuOpen(!isMenuOpen);
        },
        [isMenuOpen, setIsMenuOpen]
    );

    if (!playListContextData.isInitialized) {
        return null;
    }

    return (
        <div className={playListMenuButtonStyle.content_wrapper}>
            <button className={fullClassName} onClick={handleToggleMenu} type="button">
                menu
            </button>

            {isMenuOpen ? <PlayListMenu/> : null}
        </div>
    );
}
