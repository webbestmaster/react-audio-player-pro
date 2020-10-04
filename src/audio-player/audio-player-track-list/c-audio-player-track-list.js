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
    +onClickPlay: () => mixed,
    +setActiveIndex: (activeIndex: number) => mixed,
|};

type StateType = {};

export class AudioPlayerTrackList extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {};
    }

    renderAudioItemList(): Array<Node> {
        const {props} = this;
        const {trackList, activeIndex, playingState, onClickPlay, setActiveIndex} = props;

        return trackList.map((track: TrackType, index: number): Node => {
            return (
                <AudioPlayerTrackListItem
                    activeIndex={index}
                    isCurrentTrack={activeIndex === index}
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    onClickPlay={onClickPlay}
                    playingState={playingState}
                    setActiveIndex={setActiveIndex}
                    track={track}
                />
            );
        });
    }

    render(): Node {
        return <ul className={audioPlayerTrackListStyle.audio_player_track_list}>{this.renderAudioItemList()}</ul>;
    }
}
