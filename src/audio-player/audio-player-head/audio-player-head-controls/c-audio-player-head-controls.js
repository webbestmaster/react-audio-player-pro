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

    render(): Node {
        return (
            <div className={AudioPlayerHeadControlsStyle.audio_player_head_controls}>
                <AudioPlayerControlButton
                    ariaLabel="shuffle"
                    imageId="button-shuffle"
                    isActive={false}
                    onClick={console.log}
                />

                <AudioPlayerControlButton
                    ariaLabel="repeat"
                    // imageId={repeatingState === repeatOne ? 'button-repeat-one' : 'button-repeat'}
                    imageId="button-repeat"
                    // isActive={[repeatOne, repeatAll].includes(repeatingState)}
                    isActive={false}
                    onClick={console.log}
                />

                <AudioPlayerControlButton ariaLabel="prev" imageId="button-prev-track" onClick={console.log}/>

                {/*
                {playingState !== playingStatePlaying
                    ? <AudioPlayerControlButton ariaLabel="play" imageId="button-play" onClick={handlePlay}/>
                    : <AudioPlayerControlButton ariaLabel="pause" imageId="button-pause" onClick={handlePause}/>}
*/}

                <AudioPlayerControlButton ariaLabel="pause" imageId="button-pause" onClick={console.log}/>

                <AudioPlayerControlButton ariaLabel="next" imageId="button-next-track" onClick={console.log}/>
                <AudioPlayerControlButton
                    ariaLabel="list"
                    imageId="button-play-list"
                    isActive={false}
                    onClick={console.log}
                />
            </div>
        );
    }
}
