// @flow

import React, {useState} from 'react';

import {PlayListProvider} from '../../../../src/provider/play-list/c-play-list-context';
import {PlayListPanel} from '../../../../src/play-list/play-list-panel/c-play-list-panel';
import {Audio, AudioPlayer} from '../../../../src/audio-player';
import {demoUrl} from '../../../const';
import type {TrackType} from '../../../../src/audio-player/audio-player-type';
import {CustomContent} from '../example-audio-player/c-custom-content';

const icon64 = demoUrl + '/image-file/react-icon-64.png';
const icon128 = demoUrl + '/image-file/react-icon-128.png';
const icon256 = demoUrl + '/image-file/react-icon-256.png';
const icon512 = demoUrl + '/image-file/react-icon-512.png';

const lesserFaith = demoUrl + '/audio-file/j-syreus-bach-lesser-faith.mp3';
const brothersAllegretto = demoUrl + '/audio-file/dee-yan-key-world-of-brothers-allegretto.mp3';
const atLeastItIs = demoUrl + '/audio-file/mid-air-machine-at-least-it-is.mp3';
const theGhostInYourPiano = demoUrl + '/audio-file/the-ghost-in-your-piano-climb.mp3';

const meydnPureWater = demoUrl + '/audio-file/meydn-pure-water.mp3';

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
        content: <CustomContent/>,
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

export function PlayList(): React$Node {
    return (
        <div>
            <PlayListProvider>
                <hr/>

                <PlayListPanel/>

                <hr/>

                <Audio src={meydnPureWater}/>

                <hr/>

                <AudioPlayer
                    defaultState={{
                        isMuted: false,
                        activeIndex: 0,
                        isShuffleOn: false,
                        isTrackListOpen: true,
                        repeatingState: 'none',
                    }}
                    trackList={audioDataList}
                />
            </PlayListProvider>

            <hr/>

            <hr/>

            <hr/>
        </div>
    );
}
