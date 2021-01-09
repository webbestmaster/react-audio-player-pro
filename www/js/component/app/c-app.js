// @flow

import React from 'react';

import {ExampleAudio} from '../example-audio/c-example-audio';
import {ExamplePlayer} from '../example-audio-player/c-example-audio-player';
// import {PlayList} from '../play-list/c-play-list';

export function App(): React$Node {
    return (
        <>
             {/*<PlayList/>*/}

            <ExampleAudio/>

            <ExamplePlayer/>
        </>
    );
}
