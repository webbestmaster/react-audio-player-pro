// @flow

import React, {type Node} from 'react';

import {Audio} from '../../../../src/audio-player.js';
import {AudioPlayerProvider, AudioPlayerContextConsumer} from '../../../../src/audio-player/c-audio-player-context';
import aMozhetBitVorona from '../../../file/audio/a-mozhet-bit-vorona.mp3';
import akunaMatata from '../../../file/audio/akuna-matata.mp3';
import antoshka from '../../../file/audio/antoshka.mp3';
import arabskayaNoch from '../../../file/audio/arabskaya-noch.mp3';
import the33korovi from '../../../file/audio/the-33-korovi.mp3';
import {type AudioPlayerContextType} from '../../../../src/audio-player/audio-player-type';
import {AudioPlayerControl} from '../../../../src/audio-player/ui/audio-player-control/c-audio-player-control';
import {AudioPlayerPlayList} from '../../../../src/audio-player/ui/audio-player-play-list/c-audio-player-play-list';
import {SystemProvider, SystemContextConsumer} from '../../../../src/system/c-system-context';
import type {SystemContextType} from '../../../../src/system/system-context-type';

const audioDataList = [
    {
        title: 'a mozhet bit vorona',
        src: aMozhetBitVorona,
    },
    {
        title: 'akuna matata',
        src: akunaMatata,
    },
    {
        title: 'antoshka',
        src: antoshka,
    },
    {
        title: 'arabskaya noch',
        src: arabskayaNoch,
    },
    {
        title: 'the 33 korovi',
        src: the33korovi,
    },
];

export function App(): Node {
    return (
        <div>
            <AudioPlayerProvider>
                <SystemProvider>
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
                                <SystemContextConsumer>
                                    {(systemContext: SystemContextType): Node => {
                                        return (
                                            <>
                                                <AudioPlayerControl
                                                    audioPlayerContext={audioPlayerContext}
                                                    systemContext={systemContext}
                                                />
                                                <AudioPlayerPlayList
                                                    audioPlayerContext={audioPlayerContext}
                                                    playList={audioDataList}
                                                />
                                            </>
                                        );
                                    }}
                                </SystemContextConsumer>
                            );
                        }}
                    </AudioPlayerContextConsumer>
                </SystemProvider>
            </AudioPlayerProvider>
        </div>
    );
}
