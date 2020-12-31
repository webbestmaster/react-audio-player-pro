// @flow

import React from 'react';

import {PlayListProvider} from '../../provider/play-list/c-play-list-context';
import {PlayList as PlayListPanel} from '../../../../src/play-list/c-play-list';

export function PlayList(): React$Node {
    return (
        <div>
            <PlayListProvider>
                <hr/>

                <h1>try play list</h1>

                <hr/>

                <PlayListPanel/>

                <hr/>
            </PlayListProvider>
        </div>
    );
}
