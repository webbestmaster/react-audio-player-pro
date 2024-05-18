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
        audioTag.currentTime = 0;
        function handleCanPlay() {
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
//# sourceMappingURL=audio-player-helper.js.map