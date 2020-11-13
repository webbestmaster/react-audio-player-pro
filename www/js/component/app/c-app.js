// @flow

import React from 'react';

import {ExampleAudio} from '../example-audio/c-example-audio';
import {ExamplePlayer} from '../example-audio-player/c-example-audio-player';

export function App(): React$Node {
    return (
        <>
            <ExampleAudio/>

            <ExamplePlayer/>
        </>
    );
}
