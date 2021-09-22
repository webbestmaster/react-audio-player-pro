/// <reference types="react" />
import { PlayerPlayingStateType, TrackType } from '../../../../library';
declare type PropsType = Readonly<{
    activeIndex: number;
    isCurrentTrack: boolean;
    isLoading: boolean;
    onClickPlay: () => void;
    playByIndex: (trackIndex: number) => void;
    playingState: PlayerPlayingStateType;
    setActiveIndex: (activeIndex: number) => void;
    track: TrackType;
}>;
export declare function AudioPlayerTrackListItem(props: PropsType): JSX.Element;
export {};
