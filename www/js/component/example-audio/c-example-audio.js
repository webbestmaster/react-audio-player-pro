// @flow

import React, {type Node} from 'react';

import {AudioPlayerControlSprite} from '../../../../src/audio-player';

import {Audio} from '../../../../src/audio-player/audio/c-audio';
import meydnPureWater from '../../../file/audio/meydn-pure-water.mp3';
import icon64 from '../../../file/image/react-icon-64.png';
import icon128 from '../../../file/image/react-icon-128.png';
import icon256 from '../../../file/image/react-icon-256.png';
import icon512 from '../../../file/image/react-icon-512.png';

import {Markdown} from '../layout/c-markdown';

import exampleAudio from './example-audio.md';

export function ExampleAudio(): Node {
    const singleAudioData = {
        src: meydnPureWater,
        mediaMetadata: {
            title: 'Pure Water',
            artist: 'Meydän',
            album: 'Interplanetary Forest',
            artwork: [
                {src: icon64, sizes: '64x64', type: 'image/png'},
                {src: icon128, sizes: '128x128', type: 'image/png'},
                {src: icon256, sizes: '256x256', type: 'image/png'},
                {src: icon512, sizes: '512x512', type: 'image/png'},
            ],
        },
    };

    return (
        <div className="example-wrapper">
            <Markdown config={{useWrapper: false}} mdInput={exampleAudio}/>
            <Audio mediaMetadata={singleAudioData.mediaMetadata} src={singleAudioData.src} useRepeatButton/>
            <AudioPlayerControlSprite/>
        </div>
    );
}
