import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Time } from "../../../layout/time/c-time";
import { RangeBar } from "../../../layout/range-bar/c-range-bar";
import { AudioPlayerControlButton } from "../../../layout/audio-player-control-button/c-audio-player-control-button";
import * as audioPlayerHeadPlayingBarStyle from "./audio-player-head-playing-bar.scss";
export function AudioPlayerHeadPlayingBar(props) {
    const { trackCurrentTime, trackFullTime, onClickMuteVolume, isMuted, trackVolume, onChangeProgressBar, onChangeVolumeBar, } = props;
    const isActualMuted = isMuted || trackVolume === 0;
    const soundImageSrc = isActualMuted ? "button-sound-off" : "button-sound-on";
    const isTrackInitialized = trackFullTime !== 0;
    return (_jsxs("div", { className: audioPlayerHeadPlayingBarStyle.audio_player_head_playing_bar, children: [_jsx(Time, { className: audioPlayerHeadPlayingBarStyle.time, currentTime: trackCurrentTime, fullTime: trackFullTime }), _jsx(RangeBar, { ariaLabel: "progress bar", isDisable: !isTrackInitialized, onChange: onChangeProgressBar, progress: isTrackInitialized ? trackCurrentTime / trackFullTime : 0 }), _jsx(AudioPlayerControlButton, { ariaLabel: "switch-sound", className: "", imageId: soundImageSrc, isHideForNarrow: true, onClick: onClickMuteVolume }), _jsx(RangeBar, { ariaLabel: "volume bar", className: audioPlayerHeadPlayingBarStyle.volume_bar, isHideForNarrow: true, onChange: onChangeVolumeBar, progress: trackVolume })] }));
}
//# sourceMappingURL=c-audio-player-head-playing-bar.js.map