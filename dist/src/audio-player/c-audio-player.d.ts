/// <reference types="react" />
import { DefaultAudioPlayerStateType, TrackType } from '../../library';
export type AudioPlayerPropsType = Readonly<{
    className?: string;
    defaultState?: DefaultAudioPlayerStateType;
    onDidMount?: (audioNode: HTMLAudioElement | null) => void;
    trackList: Array<TrackType>;
}>;
export declare function AudioPlayer(props: AudioPlayerPropsType): JSX.Element;
