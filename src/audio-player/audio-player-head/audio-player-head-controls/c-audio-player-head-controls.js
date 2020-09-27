// @flow

import React, {Component, type Node} from 'react';

import {AudioPlayerControlButton} from '../../../layout/audio-player-control-button/c-audio-player-control-button';

import AudioPlayerHeadControlsStyle from './audio-player-head-controls.scss';

type PropsType = {};

type StateType = {};

export class AudioPlayerHeadControls extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {};
    }

    renderButtonShuffle(): Node {
        return (
            <AudioPlayerControlButton
                ariaLabel="shuffle"
                imageId="button-shuffle"
                isActive={false}
                onClick={console.log}
            />
        );
    }

    renderButtonRepeat(): Node {
        return (
            <AudioPlayerControlButton
                ariaLabel="repeat"
                // imageId={repeatingState === repeatOne ? 'button-repeat-one' : 'button-repeat'}
                imageId="button-repeat"
                // isActive={[repeatOne, repeatAll].includes(repeatingState)}
                isActive={false}
                onClick={console.log}
            />
        );
    }

    renderButtonPrevTrack(): Node {
        return <AudioPlayerControlButton ariaLabel="prev" imageId="button-prev-track" onClick={console.log}/>;
    }

    renderButtonPlay(): Node {
        // {playingState !== playingStatePlaying
        //     ? <AudioPlayerControlButton ariaLabel="play" imageId="button-play" onClick={handlePlay}/>
        //     : <AudioPlayerControlButton ariaLabel="pause" imageId="button-pause" onClick={handlePause}/>}

        return <AudioPlayerControlButton ariaLabel="pause" imageId="button-pause" onClick={console.log}/>;
    }

    renderButtonNextTrack(): Node {
        return <AudioPlayerControlButton ariaLabel="next" imageId="button-next-track" onClick={console.log}/>;
    }

    renderButtonPlayList(): Node {
        return (
            <AudioPlayerControlButton
                ariaLabel="list"
                imageId="button-play-list"
                isActive={false}
                onClick={console.log}
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
                {this.renderButtonPlayList()}
            </div>
        );
    }
}
