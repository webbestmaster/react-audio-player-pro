import {MediaMetadataControlNameType} from './media-meta-data-type';

export const mediaMetadataControlNameMap: {[key in MediaMetadataControlNameType]: MediaMetadataControlNameType} = {
    nexttrack: 'nexttrack',
    pause: 'pause',
    play: 'play',
    previoustrack: 'previoustrack',
    seekbackward: 'seekbackward',
    seekforward: 'seekforward',
};
