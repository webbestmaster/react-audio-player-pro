// @flow

import React, {type Node} from 'react';

import {Audio} from '../../../../src/audio-player.js';
import {AudioPlayerProvider} from '../../../../src/audio-player/c-audio-player-context';
import the33korovi from '../../../file/audio/the-33-korovi.mp3';

export function App(): Node {
    return (
        <div>
            <AudioPlayerProvider>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Audio src={the33korovi}/>
            </AudioPlayerProvider>
            <br/>
        </div>
    );
}
