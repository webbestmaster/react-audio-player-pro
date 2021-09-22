import { DefaultDefinedAudioPlayerStateType, PlayerPlayingStateType, PlayerRepeatingStateType } from '../../library';
export declare const seekStepSecond = 10;
export declare const playerPlayingStateTypeMap: {
    [key in PlayerPlayingStateType]: PlayerPlayingStateType;
};
export declare const playerRepeatingStateTypeMap: {
    [key in PlayerRepeatingStateType]: PlayerRepeatingStateType;
};
export declare const playerRepeatingStateTypeList: Array<PlayerRepeatingStateType>;
export declare const defaultAudioPlayerState: DefaultDefinedAudioPlayerStateType;
