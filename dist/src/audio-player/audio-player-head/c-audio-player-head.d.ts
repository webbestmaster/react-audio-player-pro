/// <reference types="react" />
import { PlayerPlayingStateType, PlayerRepeatingStateType } from '../../../library';
declare type PropsType = Readonly<{
    isLoading: boolean;
    isMuted: boolean;
    isShuffleOn: boolean;
    isTrackListOpen: boolean;
    onChangeProgressBar: (progress: number) => void;
    onChangeVolumeBar: (volume: number) => void;
    onClickMuteVolume: () => void;
    onClickNextTrack: () => void;
    onClickPlay: () => void;
    onClickPrevTrack: () => void;
    onClickRepeat: () => void;
    onClickShuffle: () => void;
    onClickTrackList: () => void;
    playingState: PlayerPlayingStateType;
    repeatingState: PlayerRepeatingStateType;
    trackCurrentTime: number;
    trackFullTime: number;
    trackVolume: number;
}>;
export declare function AudioPlayerHead(props: PropsType): JSX.Element;
export {};
