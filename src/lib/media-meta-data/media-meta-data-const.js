// @flow

import {type MediaMetadataControlNameType} from './media-meta-data-type';

export const mediaMetadataControlNameMap: {+[key: MediaMetadataControlNameType]: MediaMetadataControlNameType} = {
    play: 'play',
    pause: 'pause',
    seekbackward: 'seekbackward',
    seekforward: 'seekforward',
    previoustrack: 'previoustrack',
    nexttrack: 'nexttrack',
};
