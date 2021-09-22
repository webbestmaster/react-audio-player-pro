import {AudioPlayerControlSprite, Audio} from '../../library/library';
import {demoUrl} from '../../const';
import {Markdown} from '../layout/c-markdown';

import exampleAudio from './example-audio.md';

const meydnPureWater = demoUrl + '/audio-file/meydn-pure-water.mp3';

const icon64 = demoUrl + '/image-file/react-icon-64.png';
const icon128 = demoUrl + '/image-file/react-icon-128.png';
const icon256 = demoUrl + '/image-file/react-icon-256.png';
const icon512 = demoUrl + '/image-file/react-icon-512.png';

export function ExampleAudio(): JSX.Element {
    const singleAudioData = {
        src: meydnPureWater,
        mediaMetadata: {
            title: 'Pure Water',
            artist: 'Meydän',
            album: 'Interplanetary Forest',
            artwork: [
                {src: icon64, sizes: '64x64', type: 'image/png'},
                {src: icon128, sizes: '128x128', type: 'image/png'},
                {src: icon256, sizes: '256x256', type: 'image/png'},
                {src: icon512, sizes: '512x512', type: 'image/png'},
            ],
        },
    };

    return (
        <div className="example-wrapper">
            <Markdown config={{useWrapper: false}} mdInput={exampleAudio} />

            <Audio mediaMetadata={singleAudioData.mediaMetadata} src={singleAudioData.src} useRepeatButton />

            <AudioPlayerControlSprite />
        </div>
    );
}
