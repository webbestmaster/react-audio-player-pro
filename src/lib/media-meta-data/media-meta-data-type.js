// @flow

export type MediaMetadataControlNameType =
    | 'play'
    | 'pause'
    | 'seekbackward'
    | 'seekforward'
    | 'previoustrack'
    | 'nexttrack';

/*
export type MediaMetadataControlSettingType = {
    +[key: MediaMetadataControlNameType]: () => mixed,
};
*/

export type MediaMetadataControlSettingType = {|
    +play?: () => mixed,
    +pause?: () => mixed,
    +seekbackward?: () => mixed,
    +seekforward?: () => mixed,
    +previoustrack?: () => mixed,
    +nexttrack?: () => mixed,
|};

type AudioPlayerListItemArtworkType = {|
    +src: string, // 'https://dummyimage.com/96x96',
    +sizes: string, // '96x96',
    +type: string, // 'image/png',
|};

export type MediaMetadataType = {|
    +title: string,
    +artist?: string,
    +album?: string,
    +artwork?: Array<AudioPlayerListItemArtworkType>,
|};
