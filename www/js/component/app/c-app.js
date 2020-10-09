// @flow

import React, {type Node} from 'react';

import {ExampleAudio} from '../example-audio/c-example-audio';
import {ExamplePlayer} from '../example-audio-player/c-example-audio-player';

export function App(): Node {
    return (
        <>
            <ExampleAudio/>

            <ExamplePlayer/>
        </>
    );
}
