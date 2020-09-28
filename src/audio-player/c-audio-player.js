// @flow

import React, {Component, type Node} from 'react';

import {AudioPlayerHead} from './audio-player-head/c-audio-player-head';
import {AudioPlayerPlayList} from './audio-player-play-list/c-audio-player-play-list';

type PropsType = {};

type StateType = {};

export class AudioPlayer extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {};
    }

    render(): Node {
        return (
            <div>
                <AudioPlayerHead/>
                <AudioPlayerPlayList/>
            </div>
        );
    }
}
