// @flow

import React, {type Node} from 'react';

import aMozhetBitVorona from '../../../file/audio/a-mozhet-bit-vorona.mp3';
import akunaMatata from '../../../file/audio/akuna-matata.mp3';
import antoshka from '../../../file/audio/antoshka.mp3';
import arabskayaNoch from '../../../file/audio/arabskaya-noch.mp3';
import the33korovi from '../../../file/audio/the-33-korovi.mp3';
import {Audio} from '../../../../src/audio-player/audio/c-audio';
// eslint-disable-next-line max-len
import {AudioPlayerControlSprite} from '../../../../src/layout/audio-player-control-sprite/c-audio-player-control-sprite';
import {AudioPlayer} from '../../../../src/audio-player/c-audio-player';
import type {TrackType} from '../../../../src/audio-player/audio-player-type';

const audioDataList: Array<TrackType> = [
    {
        src: aMozhetBitVorona,
        mediaMetadata: {
            title: 'a mozhet bit vorona',
            artist: 'souz mult film',
            album: 'the album name',
            artwork: [{src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png'}],
        },
    },
    {
        src: akunaMatata,
        mediaMetadata: {
            title: 'akuna matata',
        },
    },
    {
        src: antoshka,
        mediaMetadata: {
            title: 'antoshka',
        },
    },
    {
        src: arabskayaNoch,
        mediaMetadata: {
            title: 'arabskaya noch',
        },
    },
    {
        src: the33korovi,
        mediaMetadata: {
            title: 'the 33 korovi',
        },
    },
];

export function App(): Node {
    return (
        <div>
            <AudioPlayerControlSprite/>

            <Audio mediaMetadata={audioDataList[0].mediaMetadata} src={audioDataList[0].src}/>

            <br/>
            <br/>

            <AudioPlayer trackList={audioDataList}/>
        </div>
    );
}
