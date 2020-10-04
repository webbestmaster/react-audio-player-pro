// @flow

import React, {Component, type Node} from 'react';
import classNames from 'classnames';

import audioPlayerTrackListStyle from './audio-player-track-list.scss';
import {AudioPlayerTrackListItem} from './audio-player-track-list-item/c-audio-player-track-list-item';

type PropsType = {};

type StateType = {};

export class AudioPlayerTrackList extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {};
    }

    renderAudioItemList(): Array<Node> {
        return [
            <AudioPlayerTrackListItem key={1}/>,
            <AudioPlayerTrackListItem key={2}/>,
            <AudioPlayerTrackListItem key={3}/>,
            <AudioPlayerTrackListItem key={4}/>,
        ];
    }

    render(): Node {
        return <ul className={audioPlayerTrackListStyle.audio_player_track_list}>{this.renderAudioItemList()}</ul>;
    }
}
