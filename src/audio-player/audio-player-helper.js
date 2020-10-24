// @flow

import type {DefaultAudioPlayerStateType, DefaultDefinedAudioPlayerStateType} from './audio-player-type';
import {defaultAudioPlayerState} from './audio-player-const';

export function getDefaultState(defaultState?: DefaultAudioPlayerStateType): DefaultDefinedAudioPlayerStateType {
    if (defaultState) {
        return {
            ...defaultAudioPlayerState,
            ...defaultState,
        };
    }

    return defaultAudioPlayerState;
}
