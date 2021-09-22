/// <reference types="react" />
declare type PropsType = Readonly<{
    isMuted: boolean;
    onChangeProgressBar: (progress: number) => void;
    onChangeVolumeBar: (volume: number) => void;
    onClickMuteVolume: () => void;
    trackCurrentTime: number;
    trackFullTime: number;
    trackVolume: number;
}>;
export declare function AudioPlayerHeadPlayingBar(props: PropsType): JSX.Element;
export {};
