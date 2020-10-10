# React Audio Player Pro

[![Build Status](https://travis-ci.org/webbestmaster/react-audio-player-pro.svg?branch=master)](https://travis-ci.org/github/webbestmaster/react-audio-player-pro)
[![GitHub license](https://img.shields.io/npm/l/react-audio-player-pro)](https://github.com/webbestmaster/react-audio-player-pro/blob/master/license)
[![npm version](https://img.shields.io/npm/v/react-audio-player-pro.svg?style=flat)](https://www.npmjs.com/package/react-audio-player-pro)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-audio-player-pro)
[![Coverage Status](https://coveralls.io/repos/github/webbestmaster/react-audio-player-pro/badge.svg?branch=master)](https://coveralls.io/github/webbestmaster/react-audio-player-pro?branch=master)
[![GitHub stars](https://img.shields.io/github/stars/webbestmaster/react-audio-player-pro?style=social&maxAge=2592000)](https://github.com/webbestmaster/react-audio-player-pro/)


**[Demo](http://webbestmaster.github.io/audio-player)**


## Install

```bash
npm i markdown-pro
```

## Usage example &lt;Audio/&gt;

```javascript
import React from 'react';
import {AudioPlayerControlSprite, Audio} from 'react-audio-player-pro';

const mediaMetadata = {

    // required
    title: 'Pure Water',

    // optional
    artist: 'Meydän',

    // optional
    album: 'Interplanetary Forest',

    // optional
    artwork: [

        // src, sizes and type is required
        {src: '/path/to/image/64px/64px', sizes: '64x64', type: 'image/png'},
        {src: '/path/to/image/128px/128px', sizes: '128x128', type: 'image/png'},
    ],
};

export function ExampleAudio() {
    return (
        &lt;&gt;
            &lt;AudioPlayerControlSprite/&gt;
            &lt;Audio
                // string - path to audio file, required
                src="/path/to/audio/file"

                // MediaMetadata - media meta data
                // https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata/MediaMetadata
                // optional
                mediaMetadata={audioData.mediaMetadata}

                // string - wrapper's class name, optional, deafult: ''
                className="my-class-name"

                // callback function - called on did mount, optional, default: noop
                onDidMount={console.log}

                // string - name for download file, optional, deafult: &lt;src&gt;
                downloadFileName="my-file.mp3"

                // boolean - show repeat button, optional, deafult: false
                useRepeatButton={true}
            /&gt;
        &lt;/&gt;
    );
}
```


## Usage example &lt;AudioPlayer/&gt;

```javascript
import React from 'react';
import {AudioPlayerControlSprite, AudioPlayer} from 'react-audio-player-pro';

const audioTrackList: Array&lt;Track&gt; = [
    {
        // string - path to audio file, required
        src: '/path/to/audio/file',

        // React$Node - custom content instead of title, optional, deafult: &lt;title&gt or &lt;src&gt
        content: &lt;CustomContent/&gt;,

        // MediaMetadata - media meta data, see `mediaMetadata` above
        // https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata/MediaMetadata
        // optional
        mediaMetadata: {
            title: 'Lesser Faith',
            artist: 'J. Syreus Bach',
            album: 'Ability to Break ~ Energetic Tracks',
            artwork: [
                {src: '/path/to/image/64px/64px', sizes: '64x64', type: 'image/png'},
                {src: '/path/to/image/128px/128px', sizes: '128x128', type: 'image/png'},
            ],
        },
    },
    // other tracks here...
];

export function ExampleAudioPlayer() {
    return (
        &lt;&gt;
            &lt;AudioPlayerControlSprite/&gt;
            &lt;AudioPlayer
                // Array&lt;Track&gt; - list of track, see `audioTrackList` above, required
                trackList={audioTrackList}

                // string - wrapper's class name, optional, deafult: ''
                className="my-class-name"

                // callback function - called on did mount, optional, default: noop
                onDidMount={console.log}
            /&gt;
        &lt;/&gt;
    );
}
```
