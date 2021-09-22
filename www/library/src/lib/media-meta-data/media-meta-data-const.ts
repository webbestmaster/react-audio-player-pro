import {MediaMetadataControlNameType} from './media-meta-data-type';

export const mediaMetadataControlNameMap: {[key in MediaMetadataControlNameType]: MediaMetadataControlNameType} = {
    play: 'play',
    pause: 'pause',
    seekbackward: 'seekbackward',
    seekforward: 'seekforward',
    previoustrack: 'previoustrack',
    nexttrack: 'nexttrack',
};
