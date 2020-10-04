// @flow

import React, {Component, type Node} from 'react';
import classNames from 'classnames';

import type {PlayerPlayingStateType, TrackType} from '../../audio-player-type';

import audioPlayerTrackListItemStyle from './audio-player-track-list-item.scss';

type PropsType = {|
    +activeIndex: number,
    +track: TrackType,
    +playingState: PlayerPlayingStateType,
|};

type StateType = {};

export class AudioPlayerTrackListItem extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {};
    }

    renderButton(): Node {
        return (
            <button className={audioPlayerTrackListItemStyle.button} type="button">
                <span className={audioPlayerTrackListItemStyle.button_image}/>
                <span>play/pause</span>
            </button>
        );
    }

    renderContent(): Node {
        return <div className={audioPlayerTrackListItemStyle.content}>content</div>;
    }

    render(): Node {
        return (
            <li className={audioPlayerTrackListItemStyle.audio_player_track_list_item}>
                {this.renderButton()}
                {this.renderContent()}
            </li>
        );
    }
}
