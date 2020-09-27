// @flow

import React, {Component, type Node} from 'react';

import AudioPlayerHeadPlayingBarStyle from './audio-player-head-playing-bar.scss';

type PropsType = {};

type StateType = {};

export class AudioPlayerHeadPlayingBar extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {};
    }

    render(): Node {
        return <div className={AudioPlayerHeadPlayingBarStyle.audio_player_head_playing_bar}>playing_bar</div>;
    }
}
