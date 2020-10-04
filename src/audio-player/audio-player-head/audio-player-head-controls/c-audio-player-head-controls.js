// @flow

import React, {Component, type Node} from 'react';

import {AudioPlayerControlButton} from '../../../layout/audio-player-control-button/c-audio-player-control-button';

import type {PlayerPlayingStateType, PlayerRepeatingStateType} from '../../audio-player-type';
import {playerPlayingStateTypeMap, playerRepeatingStateTypeMap} from '../../audio-player-const';

import AudioPlayerHeadControlsStyle from './audio-player-head-controls.scss';

type PropsType = {|
    +onClickShuffle: () => mixed,
    +onClickRepeat: () => mixed,
    +onClickPrevTrack: () => mixed,
    +onClickPlay: () => mixed,
    +onClickNextTrack: () => mixed,
    +onClickTrackList: () => mixed,

    +playingState: PlayerPlayingStateType,
    +isShuffleOn: boolean,
    +repeatingState: PlayerRepeatingStateType,
    +isTrackListOpen: boolean,
|};

type StateType = {};

export class AudioPlayerHeadControls extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {};
    }

    renderButtonShuffle(): Node {
        const {props} = this;
        const {onClickShuffle, isShuffleOn} = props;

        return (
            <AudioPlayerControlButton
                ariaLabel="shuffle"
                imageId="button-shuffle"
                isActive={isShuffleOn}
                onClick={onClickShuffle}
            />
        );
    }

    renderButtonRepeat(): Node {
        const {props} = this;
        const {onClickRepeat, repeatingState} = props;
        const {one: repeatOne, all: repeatAll} = playerRepeatingStateTypeMap;

        return (
            <AudioPlayerControlButton
                ariaLabel="repeat"
                imageId={repeatingState === repeatOne ? 'button-repeat-one' : 'button-repeat'}
                isActive={[repeatOne, repeatAll].includes(repeatingState)}
                onClick={onClickRepeat}
            />
        );
    }

    renderButtonPrevTrack(): Node {
        const {props} = this;
        const {onClickPrevTrack} = props;

        return <AudioPlayerControlButton ariaLabel="prev" imageId="button-prev-track" onClick={onClickPrevTrack}/>;
    }

    renderButtonPlay(): Node {
        const {props} = this;
        const {onClickPlay, playingState} = props;

        return playingState !== playerPlayingStateTypeMap.playing
            ? <AudioPlayerControlButton ariaLabel="play" imageId="button-play" onClick={onClickPlay}/>
            : <AudioPlayerControlButton ariaLabel="pause" imageId="button-pause" onClick={onClickPlay}/>
        ;
    }

    renderButtonNextTrack(): Node {
        const {props} = this;
        const {onClickNextTrack} = props;

        return <AudioPlayerControlButton ariaLabel="next" imageId="button-next-track" onClick={onClickNextTrack}/>;
    }

    renderButtonTrackList(): Node {
        const {props} = this;
        const {onClickTrackList, isTrackListOpen} = props;

        return (
            <AudioPlayerControlButton
                ariaLabel="track-list"
                imageId="button-track-list"
                isActive={isTrackListOpen}
                onClick={onClickTrackList}
            />
        );
    }

    render(): Node {
        return (
            <div className={AudioPlayerHeadControlsStyle.audio_player_head_controls}>
                {this.renderButtonShuffle()}
                {this.renderButtonRepeat()}
                {this.renderButtonPrevTrack()}
                {this.renderButtonPlay()}
                {this.renderButtonNextTrack()}
                {this.renderButtonTrackList()}
            </div>
        );
    }
}
