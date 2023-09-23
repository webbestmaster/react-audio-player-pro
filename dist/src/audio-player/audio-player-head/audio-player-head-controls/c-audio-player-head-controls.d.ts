/// <reference types="react" />
import type { PlayerPlayingStateType, PlayerRepeatingStateType } from "../../../../library";
type PropsType = Readonly<{
    isShuffleOn: boolean;
    isTrackListOpen: boolean;
    onClickNextTrack: () => void;
    onClickPlay: () => void;
    onClickPrevTrack: () => void;
    onClickRepeat: () => void;
    onClickShuffle: () => void;
    onClickTrackList: () => void;
    playingState: PlayerPlayingStateType;
    repeatingState: PlayerRepeatingStateType;
}>;
export declare function AudioPlayerHeadControls(props: PropsType): JSX.Element;
export {};
