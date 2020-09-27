// @flow

import React, {Component, type Node} from 'react';
import classNames from 'classnames';

import audioPlayerPlayListItemStyle from './audio-player-play-list-item.scss';

type PropsType = {};

type StateType = {};

export class AudioPlayerPlayListItem extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {};
    }

    renderButton(): Node {
        return (
            <button className={audioPlayerPlayListItemStyle.button} type="button">
                <span className={audioPlayerPlayListItemStyle.button_image}/>
                <span>play/pause</span>
            </button>
        );
    }

    renderContent(): Node {
        return <div className={audioPlayerPlayListItemStyle.content}>content</div>;
    }

    render(): Node {
        return (
            <li className={audioPlayerPlayListItemStyle.audio_player_play_list_item}>
                {this.renderButton()}
                {this.renderContent()}
            </li>
        );
    }
}
