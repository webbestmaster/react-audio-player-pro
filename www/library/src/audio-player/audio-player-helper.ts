/* global HTMLAudioElement*/

import type {DefaultAudioPlayerStateType, DefaultDefinedAudioPlayerStateType} from "../../library";

import {defaultAudioPlayerState} from "./audio-player-const";

export function getDefaultState(defaultState?: DefaultAudioPlayerStateType): DefaultDefinedAudioPlayerStateType {
    if (defaultState) {
        return {
            ...defaultAudioPlayerState,
            ...defaultState,
        };
    }

    return defaultAudioPlayerState;
}

export function getStopHandler(audioTag: HTMLAudioElement): () => void {
    return function handleOnStop() {
        audioTag.currentTime = 0;

        function handleCanPlay(): void {
            audioTag.removeEventListener("canplay", handleCanPlay, false);

            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            audioTag.play().then(() => {
                audioTag.pause();

                audioTag.currentTime = 0;
            });
        }

        audioTag.addEventListener("canplay", handleCanPlay, false);
    };
}
