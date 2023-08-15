import {Audio, AudioPlayer, PlayListPanel, PlayListProvider, TrackType} from '../../library/library';
import {demoUrl} from '../../const';
import {CustomContent} from '../example-audio-player/c-custom-content';

const icon64 = `${demoUrl}/image-file/react-icon-64.png`;
const icon128 = `${demoUrl}/image-file/react-icon-128.png`;
const icon256 = `${demoUrl}/image-file/react-icon-256.png`;
const icon512 = `${demoUrl}/image-file/react-icon-512.png`;

const lesserFaith = `${demoUrl}/audio-file/j-syreus-bach-lesser-faith.mp3`;
const brothersAllegretto = `${demoUrl}/audio-file/dee-yan-key-world-of-brothers-allegretto.mp3`;
const atLeastItIs = `${demoUrl}/audio-file/mid-air-machine-at-least-it-is.mp3`;
const theGhostInYourPiano = `${demoUrl}/audio-file/the-ghost-in-your-piano-climb.mp3`;

const meydnPureWater = `${demoUrl}/audio-file/meydn-pure-water.mp3`;

const audioDataList: Array<TrackType> = [
    {
        mediaMetadata: {
            album: 'Ability to Break ~ Energetic Tracks',
            artist: 'J. Syreus Bach',
            artwork: [
                {sizes: '64x64', src: icon64, type: 'image/png'},
                {sizes: '128x128', src: icon128, type: 'image/png'},
                {sizes: '256x256', src: icon256, type: 'image/png'},
                {sizes: '512x512', src: icon512, type: 'image/png'},
            ],
            title: 'Lesser Faith',
        },
        src: lesserFaith,
    },
    {
        content: <CustomContent />,
        mediaMetadata: {
            album: 'Perpetual Peace',
            artist: 'Dee Yan-Key',
            artwork: [
                {sizes: '64x64', src: icon64, type: 'image/png'},
                {sizes: '128x128', src: icon128, type: 'image/png'},
                {sizes: '256x256', src: icon256, type: 'image/png'},
                {sizes: '512x512', src: icon512, type: 'image/png'},
            ],
            title: 'World of Brothers (Allegretto)',
        },
        src: brothersAllegretto,
    },
    {
        mediaMetadata: {
            album: 'Everywhere Outside ~ World Music',
            artist: 'Mid-Air Machine',
            artwork: [
                {sizes: '64x64', src: icon64, type: 'image/png'},
                {sizes: '128x128', src: icon128, type: 'image/png'},
                {sizes: '256x256', src: icon256, type: 'image/png'},
                {sizes: '512x512', src: icon512, type: 'image/png'},
            ],
            title: 'At Least It Is',
        },
        src: atLeastItIs,
    },
    {
        mediaMetadata: {
            album: 'The Ghost in Your Piano',
            artist: 'The Ghost in Your Piano',
            artwork: [
                {sizes: '64x64', src: icon64, type: 'image/png'},
                {sizes: '128x128', src: icon128, type: 'image/png'},
                {sizes: '256x256', src: icon256, type: 'image/png'},
                {sizes: '512x512', src: icon512, type: 'image/png'},
            ],
            title: 'Climb',
        },
        src: theGhostInYourPiano,
    },
];

export function PlayList(): JSX.Element {
    return (
        <div>
            <PlayListProvider>
                <hr />

                <PlayListPanel />

                <hr />

                <Audio src={meydnPureWater} />

                <hr />

                <AudioPlayer
                    defaultState={{
                        activeIndex: 0,
                        isMuted: false,
                        isShuffleOn: false,
                        isTrackListOpen: true,
                        repeatingState: 'none',
                    }}
                    trackList={audioDataList}
                />
            </PlayListProvider>

            <hr />

            <hr />

            <hr />
        </div>
    );
}
