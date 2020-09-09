// @flow

import React, {type Node} from 'react';

import {
    Audio,
    AudioPlayerContextConsumer,
    type AudioPlayerContextType,
    AudioPlayerControl,
    AudioPlayerPlayList,
    AudioPlayerProvider,
} from '../../../../src/audio-player.js';

import aMozhetBitVorona from '../../../file/audio/a-mozhet-bit-vorona.mp3';
import akunaMatata from '../../../file/audio/akuna-matata.mp3';
import antoshka from '../../../file/audio/antoshka.mp3';
import arabskayaNoch from '../../../file/audio/arabskaya-noch.mp3';
import the33korovi from '../../../file/audio/the-33-korovi.mp3';

const audioDataList = [
    {
        src: aMozhetBitVorona,
        mediaMetadata: {
            title: 'a mozhet bit vorona',
            artist: 'souz mult film',
            album: 'the album name',
            artwork: [
                {src: 'https://dummyimage.com/96x96', sizes: '96x96', type: 'image/png'},
                {src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png'},
            ],
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
                <Audio data={audioDataList[0]}/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <AudioPlayerContextConsumer>
                    {(audioPlayerContext: AudioPlayerContextType): Node => {
                        return (
                            <>
                                <AudioPlayerControl audioPlayerContext={audioPlayerContext}/>
                                <AudioPlayerPlayList audioPlayerContext={audioPlayerContext} playList={audioDataList}/>
                            </>
                        );
                    }}
                </AudioPlayerContextConsumer>
            </AudioPlayerProvider>
        </div>
    );
}
