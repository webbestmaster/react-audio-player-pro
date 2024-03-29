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
        // eslint-disable-next-line no-param-reassign
        audioTag.currentTime = 0;

        function handleCanPlay(): void {
            audioTag.removeEventListener("canplay", handleCanPlay, false);

            // eslint-disable-next-line promise/catch-or-return, @typescript-eslint/no-floating-promises
            audioTag
                .play()
                // eslint-disable-next-line promise/always-return
                .then(() => {
                    audioTag.pause();
                    // eslint-disable-next-line no-param-reassign
                    audioTag.currentTime = 0;
                });
        }

        audioTag.addEventListener("canplay", handleCanPlay, false);
    };
}
