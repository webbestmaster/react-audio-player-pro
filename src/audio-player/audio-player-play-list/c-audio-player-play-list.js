// @flow

import React, {Component, type Node} from 'react';
import classNames from 'classnames';

import audioPlayerPlayListStyle from './audio-player-play-list.scss';
import {AudioPlayerPlayListItem} from './audio-player-play-list-item/c-audio-player-play-list-item';

type PropsType = {};

type StateType = {};

export class AudioPlayerPlayList extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {};
    }

    renderAudioItemList(): Array<Node> {
        return [
            <AudioPlayerPlayListItem key={1}/>,
            <AudioPlayerPlayListItem key={2}/>,
            <AudioPlayerPlayListItem key={3}/>,
            <AudioPlayerPlayListItem key={4}/>,
        ];
    }

    render(): Node {
        return <ul className={audioPlayerPlayListStyle.audio_player_play_list}>{this.renderAudioItemList()}</ul>;
    }
}
