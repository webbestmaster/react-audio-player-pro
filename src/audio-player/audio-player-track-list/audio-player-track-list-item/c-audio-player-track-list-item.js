// @flow

import React, {Component, type Node} from 'react';
import classNames from 'classnames';

import type {PlayerPlayingStateType, TrackType} from '../../audio-player-type';
import {playerPlayingStateTypeMap} from '../../audio-player-const';

import audioPlayerTrackListItemStyle from './audio-player-track-list-item.scss';

type PropsType = {|
    +isCurrentTrack: boolean,
    +activeIndex: number,
    +track: TrackType,
    +playingState: PlayerPlayingStateType,
    +onClickPlay: () => mixed,
    +setActiveIndex: (activeIndex: number, callBack?: () => mixed) => mixed,
|};

type StateType = {};

export class AudioPlayerTrackListItem extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {};
    }

    handleSetActiveIndex = () => {
        const {props} = this;
        const {setActiveIndex, activeIndex} = props;

        setActiveIndex(activeIndex);
    };

    handleSetActiveIndexAndTogglePlay = () => {
        const {props} = this;
        const {onClickPlay, setActiveIndex, activeIndex} = props;

        setActiveIndex(activeIndex, onClickPlay);
    };

    renderButton(): Node {
        const {props} = this;
        const {isCurrentTrack, playingState, onClickPlay, setActiveIndex, activeIndex} = props;

        if (playingState === playerPlayingStateTypeMap.playing) {
            if (isCurrentTrack) {
                return (
                    <button className={audioPlayerTrackListItemStyle.button} onClick={onClickPlay} type="button">
                        <span className={audioPlayerTrackListItemStyle.button_image}/>
                        <span>handleClickPause</span>
                    </button>
                );
            }

            return (
                <button
                    className={audioPlayerTrackListItemStyle.button}
                    onClick={this.handleSetActiveIndex}
                    type="button"
                >
                    <span className={audioPlayerTrackListItemStyle.button_image}/>
                    <span>handleClickToPlay</span>
                </button>
            );
        }

        if (isCurrentTrack) {
            return (
                <button className={audioPlayerTrackListItemStyle.button} onClick={onClickPlay} type="button">
                    <span className={audioPlayerTrackListItemStyle.button_image}/>
                    <span>handleClickToPlay</span>
                </button>
            );
        }

        return (
            <button
                className={audioPlayerTrackListItemStyle.button}
                onClick={this.handleSetActiveIndexAndTogglePlay}
                type="button"
            >
                <span className={audioPlayerTrackListItemStyle.button_image}/>
                <span>handleClickToPlay</span>
            </button>
        );
    }

    renderContent(): Node {
        const {props} = this;
        const {isCurrentTrack} = props;

        return <div className={audioPlayerTrackListItemStyle.content}>content</div>;
    }

    render(): Node {
        const {props} = this;
        const {isCurrentTrack} = props;

        const className = classNames(audioPlayerTrackListItemStyle.audio_player_track_list_item, {
            [audioPlayerTrackListItemStyle.audio_player_track_list_item__active]: isCurrentTrack,
        });

        return (
            <li className={className}>
                {this.renderButton()}
                {this.renderContent()}
            </li>
        );
    }
}
