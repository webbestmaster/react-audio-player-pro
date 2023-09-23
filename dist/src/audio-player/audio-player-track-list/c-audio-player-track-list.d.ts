/// <reference types="react" />
import type { PlayerPlayingStateType, TrackType } from "../../../library";
type PropsType = Readonly<{
    activeIndex: number;
    isLoading: boolean;
    onClickPlay: () => void;
    playByIndex: (trackIndex: number) => void;
    playingState: PlayerPlayingStateType;
    setActiveIndex: (activeIndex: number) => void;
    trackList: Array<TrackType>;
}>;
export declare function AudioPlayerTrackList(props: PropsType): JSX.Element;
export {};
