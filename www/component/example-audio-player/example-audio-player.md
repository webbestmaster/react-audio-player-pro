### Example &lt;AudioPlayer/&gt;

```javascript
import React from 'react';
import {AudioPlayerControlSprite, AudioPlayer, type TrackType} from 'react-audio-player-pro';
import reactAudioPlayerProStyle from 'react-audio-player-pro/dist/style.css';

const audioTrackList: Array&lt;TrackType&gt; = [
    {
        // string - path to audio file, required
        src: '/path/to/audio/file',

        // JSX.Element - custom content instead of title, optional, deafult: &lt;title&gt or &lt;src&gt
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
                // Array&lt;TrackType&gt; - list of track, see `audioTrackList` above, required
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
            /&gt;
        &lt;/&gt;
    );
}
```

### Result:
