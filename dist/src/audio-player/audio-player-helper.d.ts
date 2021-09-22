import { DefaultAudioPlayerStateType, DefaultDefinedAudioPlayerStateType } from '../../library';
export declare function getDefaultState(defaultState?: DefaultAudioPlayerStateType): DefaultDefinedAudioPlayerStateType;
export declare function getStopHandler(audioTag: HTMLAudioElement): () => void;
