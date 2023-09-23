/* global HTMLAudioElement*/
import { defaultAudioPlayerState } from "./audio-player-const";
export function getDefaultState(defaultState) {
    if (defaultState) {
        return {
            ...defaultAudioPlayerState,
            ...defaultState,
        };
    }
    return defaultAudioPlayerState;
}
export function getStopHandler(audioTag) {
    return function handleOnStop() {
        // eslint-disable-next-line no-param-reassign
        audioTag.currentTime = 0;
        function handleCanPlay() {
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
//# sourceMappingURL=audio-player-helper.js.map