// @flow

import React, {Component, type Node} from 'react';
import classNames from 'classnames';

import type {PlayerPlayingStateType, TrackType} from '../audio-player-type';

import audioPlayerTrackListStyle from './audio-player-track-list.scss';
import {AudioPlayerTrackListItem} from './audio-player-track-list-item/c-audio-player-track-list-item';

type PropsType = {|
    +activeIndex: number,
    +trackList: Array<TrackType>,
    +playingState: PlayerPlayingStateType,
|};

type StateType = {};

export class AudioPlayerTrackList extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {};
    }

    renderAudioItemList(): Array<Node> {
        const {props} = this;
        const {trackList, activeIndex, playingState} = props;

        return trackList.map((track: TrackType, index: number): Node => {
            return (
                <AudioPlayerTrackListItem
                    activeIndex={activeIndex}
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    playingState={playingState}
                    track={track}
                />
            );
        });
    }

    render(): Node {
        return <ul className={audioPlayerTrackListStyle.audio_player_track_list}>{this.renderAudioItemList()}</ul>;
    }
}
