### Example &lt;Audio/&gt;

```javascript
import React from 'react';
import {AudioPlayerControlSprite, Audio} from 'react-audio-player-pro';
import reactAudioPlayerProStyle from 'react-audio-player-pro/dist/style.css';

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
                mediaMetadata={mediaMetadata}

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

### Result:
