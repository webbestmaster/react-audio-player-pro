/// <reference types="react" />
import { PlayerPlayingStateType, PlayerRepeatingStateType } from '../../../../library';
declare type PropsType = Readonly<{
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
