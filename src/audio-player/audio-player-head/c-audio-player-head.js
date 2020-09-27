// @flow

import React, {Component, type Node} from 'react';
import classNames from 'classnames';

import {AudioPlayerHeadPlayingBar} from './audio-player-head-playing-bar/c-audio-player-head-playing-bar';
import {AudioPlayerHeadControls} from './audio-player-head-controls/c-audio-player-head-controls';

import audioPlayerHeadStyle from './audio-player-head.scss';

type PropsType = {};

type StateType = {};

export class AudioPlayerHead extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {};
    }

    render(): Node {
        return (
            <div className={audioPlayerHeadStyle.audio_player_head}>
                <AudioPlayerHeadControls/>
                <AudioPlayerHeadPlayingBar/>
            </div>
        );
    }
}
