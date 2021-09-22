export type MediaMetadataControlNameType =
    'nexttrack' | 'pause' | 'play' | 'previoustrack' | 'seekbackward' | 'seekforward';

/*
export type MediaMetadataControlSettingType = {
    +[key: MediaMetadataControlNameType]: () => void,
};
*/

export type MediaMetadataControlSettingType = Readonly<{
    nexttrack?: () => void;
    pause?: () => void;
    play?: () => void;
    previoustrack?: () => void;
    seekbackward?: () => void;
    seekforward?: () => void;
    stop?: () => void;
}>;

type AudioPlayerListItemArtworkType = Readonly<{
    // 'https://dummyimage.com/96x96',
    sizes: string;
    src: string; // '96x96',
    type: string; // 'image/png',
}>;

export type MediaMetadataType = Readonly<{
    album?: string;
    artist?: string;
    artwork?: Array<AudioPlayerListItemArtworkType>;
    title: string;
}>;
