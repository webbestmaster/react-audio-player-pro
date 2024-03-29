# React Audio Player Pro

[![GitHub license](https://img.shields.io/npm/l/react-audio-player-pro)](https://github.com/webbestmaster/react-audio-player-pro/blob/master/license)
[![npm version](https://img.shields.io/npm/v/react-audio-player-pro.svg)](https://www.npmjs.com/package/react-audio-player-pro)
[![Known Vulnerabilities](https://snyk.io/test/github/webbestmaster/react-audio-player-pro/badge.svg)](https://snyk.io/test/github/webbestmaster/react-audio-player-pro)
[![Dependency count](https://badgen.net/bundlephobia/dependency-count/react-audio-player-pro)](https://libraries.io/npm/react-audio-player-pro)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-audio-player-pro)](https://bundlephobia.com/package/react-audio-player-pro)
[![nodejs version](https://img.shields.io/node/v/react-audio-player-pro)](https://nodejs.org/en/docs)
[![Github CI](https://github.com/webbestmaster/react-audio-player-pro/actions/workflows/github-ci.yml/badge.svg)](https://github.com/webbestmaster/react-audio-player-pro/actions/workflows/github-ci.yml)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/webbestmaster/react-audio-player-pro/github-ci.yml)](https://github.com/webbestmaster/react-audio-player-pro/actions/workflows/github-ci.yml)
[![Type definitions](https://img.shields.io/npm/types/react-audio-player-pro)](https://www.typescriptlang.org)
[![Website](https://img.shields.io/website?url=https://webbestmaster.github.io/react-audio-player-pro)](https://webbestmaster.github.io/react-audio-player-pro)
[![CodeFactor](https://www.codefactor.io/repository/github/webbestmaster/react-audio-player-pro/badge)](https://www.codefactor.io/repository/github/webbestmaster/react-audio-player-pro)
[![Package Quality](https://packagequality.com/shield/react-audio-player-pro.svg)](https://packagequality.com/#?package=react-audio-player-pro)
[![GitHub stars](https://img.shields.io/github/stars/webbestmaster/react-audio-player-pro?style=social)](https://github.com/webbestmaster/react-audio-player-pro)

<!--
[![codecov](https://codecov.io/gh/webbestmaster/react-audio-player-pro/branch/master/graph/badge.svg)](https://codecov.io/gh/webbestmaster/react-audio-player-pro)
[![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/webbestmaster/react-audio-player-pro)](https://libraries.io/npm/react-audio-player-pro)
-->


React Audio Player Pro provides: single audio, playlist and playlist provider.

**[Live demo](https://webbestmaster.github.io/react-audio-player-pro)**


## Install

```bash
npm i react-audio-player-pro
```


### Typing Flow

Use `./flow-typed/react-audio-player-pro.js`.


## Usage example &lt;Audio/&gt;

```javascript
import React from 'react';
import {AudioPlayerControlSprite, Audio} from 'react-audio-player-pro';
import 'react-audio-player-pro/dist/style.css';

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
        <>
            <AudioPlayerControlSprite/>
            <Audio
                // string - path to audio file, required
                src="/path/to/audio/file"

                // string - 'none' | 'metadata' | 'auto', default: 'auto', optional
                preload="auto"

                // duration - number, default: 0, optional
                // will updated automatically when track started or metadata loaded
                duration={100}

                // MediaMetadata - media meta data, optional
                // https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata/MediaMetadata
                mediaMetadata={mediaMetadata}

                // string - wrapper's class name, optional, deafult: ''
                className="my-class-name"

                // callback function - called on did mount, optional, default: noop
                onDidMount={console.log}

                // string - name for download file, optional, deafult: <src>
                downloadFileName="my-file.mp3"

                // boolean - show repeat button, optional, deafult: false
                useRepeatButton={true}
            />
        </>
    );
}
```


## Usage example &lt;AudioPlayer/&gt;

```javascript
import React from 'react';
import {AudioPlayerControlSprite, AudioPlayer, TrackType} from 'react-audio-player-pro';
import 'react-audio-player-pro/dist/style.css';

const audioTrackList: Array<TrackType> = [
    {
        // string - path to audio file, required
        src: '/path/to/audio/file',

        // string - 'none' | 'metadata' | 'auto', default: 'auto', optional
        preload: 'auto',

        // duration - number, default: 0, optional
        // will updated automatically when track started or metadata loaded
        duration: 100,

        // JSX.Element - custom content instead of title, optional, deafult: <title> or <src>
        content: <CustomContent/>,

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
        <>
            <AudioPlayerControlSprite/>
            <AudioPlayer
                // Array<TrackType> - list of track, see `audioTrackList` above, required
                trackList={audioTrackList}

                // string - wrapper's class name, optional, deafult: ''
                className="my-class-name"

                // callback function - called on did mount, optional, default: noop
                onDidMount={console.log}

                // default player state, optional
                defaultState={{
                    // boolean - is player muted, optional, default: false
                    isMuted: false,

                    // number - active song index, optional, default: 0
                    activeIndex: 0,

                    // boolean - is shuffle on, optional, default: false
                    isShuffleOn: false,

                    // boolean - is track list open, optional, default: true
                    isTrackListOpen: true,

                    // string: 'none' | 'all' | 'one' - repeating state, optional, default: 'none'
                    repeatingState: 'none',
                }}
            />
        </>
    );
}
```

## Usage example &lt;PlayListPanel/&gt; and &lt;PlayListProvider/&gt;

```javascript
import React from 'react';
import {AudioPlayerControlSprite, PlayListPanel, PlayListProvider, AudioPlayer, TrackType} from 'react-audio-player-pro';
import 'react-audio-player-pro/dist/style.css';

const audioTrackList: Array<TrackType> = [
    {
        // string - path to audio file, required
        src: '/path/to/audio/file',

        // JSX.Element - custom content instead of title, optional, deafult: <title> or <src>
        content: <CustomContent/>,

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

export function PlayListProvider() {
    return (
        <>
            <AudioPlayerControlSprite/>

            // No props
            <PlayListProvider>

                // PlayListProvider provide a button to add track to play list
                <AudioPlayer trackList={audioTrackList}/>

                // No props
                <PlayListPanel/>

            </PlayListProvider>
        </>
    );
}
```

## License

See [license](license).
