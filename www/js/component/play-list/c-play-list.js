// @flow

import React, {useState} from 'react';

import {PlayListProvider} from '../../provider/play-list/c-play-list-context';
import {PlayListPanel} from '../../../../src/play-list/play-list-panel/c-play-list-panel';
import {Audio} from '../../../../src/audio-player';
import {demoUrl} from '../../../const';

const meydnPureWater = demoUrl + '/audio-file/meydn-pure-water.mp3';

export function PlayList(): React$Node {
    return (
        <div>
            <PlayListProvider>
                <hr/>

                <PlayListPanel/>

                <hr/>

                <Audio src={meydnPureWater}/>
            </PlayListProvider>
        </div>
    );
}
