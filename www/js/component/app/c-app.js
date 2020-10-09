// @flow

import React, {type Node} from 'react';

import icon64 from '../../../file/image/react-icon-64.png';
import icon128 from '../../../file/image/react-icon-128.png';
import icon256 from '../../../file/image/react-icon-256.png';
import icon512 from '../../../file/image/react-icon-512.png';

import lesserFaith from '../../../file/audio/j-syreus-bach-lesser-faith.mp3';
import brothersAllegretto from '../../../file/audio/dee-yan-key-world-of-brothers-allegretto.mp3';
import atLeastItIs from '../../../file/audio/mid-air-machine-at-least-it-is.mp3';
import theGhostInYourPiano from '../../../file/audio/the-ghost-in-your-piano-climb.mp3';

import type {TrackType} from '../../../../src/audio-player/audio-player-type';
import {AudioPlayer} from '../../../../src/audio-player';
import {ExampleAudio} from '../example-audio/c-example-audio';

function LinkToNpm(): Node {
    return (
        <a href="https://npmjs.com" rel="noreferrer" target="_blank">
            Your custom `content`
        </a>
    );
}

const audioDataList: Array<TrackType> = [
    {
        src: lesserFaith,
        mediaMetadata: {
            title: 'Lesser Faith',
            artist: 'J. Syreus Bach',
            album: 'Ability to Break ~ Energetic Tracks',
            artwork: [
                {src: icon64, sizes: '64x64', type: 'image/png'},
                {src: icon128, sizes: '128x128', type: 'image/png'},
                {src: icon256, sizes: '256x256', type: 'image/png'},
                {src: icon512, sizes: '512x512', type: 'image/png'},
            ],
        },
    },
    {
        src: brothersAllegretto,
        content: <LinkToNpm/>,
        mediaMetadata: {
            title: 'World of Brothers (Allegretto)',
            artist: 'Dee Yan-Key',
            album: 'Perpetual Peace',
            artwork: [
                {src: icon64, sizes: '64x64', type: 'image/png'},
                {src: icon128, sizes: '128x128', type: 'image/png'},
                {src: icon256, sizes: '256x256', type: 'image/png'},
                {src: icon512, sizes: '512x512', type: 'image/png'},
            ],
        },
    },
    {
        src: atLeastItIs,
        mediaMetadata: {
            title: 'At Least It Is',
            artist: 'Mid-Air Machine',
            album: 'Everywhere Outside ~ World Music',
            artwork: [
                {src: icon64, sizes: '64x64', type: 'image/png'},
                {src: icon128, sizes: '128x128', type: 'image/png'},
                {src: icon256, sizes: '256x256', type: 'image/png'},
                {src: icon512, sizes: '512x512', type: 'image/png'},
            ],
        },
    },
    {
        src: theGhostInYourPiano,
        mediaMetadata: {
            title: 'Climb',
            artist: 'The Ghost in Your Piano',
            album: 'The Ghost in Your Piano',
            artwork: [
                {src: icon64, sizes: '64x64', type: 'image/png'},
                {src: icon128, sizes: '128x128', type: 'image/png'},
                {src: icon256, sizes: '256x256', type: 'image/png'},
                {src: icon512, sizes: '512x512', type: 'image/png'},
            ],
        },
    },
];

// eslint-disable-next-line react/no-multi-comp
export function App(): Node {
    return (
        <>
            <ExampleAudio/>

            <br/>
            <br/>

            <AudioPlayer trackList={audioDataList}/>
        </>
    );
}
