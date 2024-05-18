import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Spinner } from "../../layout/spinner/c-spinner";
import { AudioPlayerHeadPlayingBar } from "./audio-player-head-playing-bar/c-audio-player-head-playing-bar";
import { AudioPlayerHeadControls } from "./audio-player-head-controls/c-audio-player-head-controls";
import * as audioPlayerHeadStyle from "./audio-player-head.scss";
export function AudioPlayerHead(props) {
    const { onClickShuffle, onClickRepeat, onClickPrevTrack, onClickPlay, onClickNextTrack, onClickTrackList, onClickMuteVolume, onChangeProgressBar, onChangeVolumeBar, isMuted, playingState, isShuffleOn, repeatingState, isTrackListOpen, trackCurrentTime, trackVolume, trackFullTime, isLoading, } = props;
    return (_jsxs("div", { className: audioPlayerHeadStyle.audio_player_head, children: [_jsx(Spinner, { className: audioPlayerHeadStyle.spinner, isShow: isLoading, lineWidth: 3, position: "absolute", size: 26, wrapperHeight: 26, wrapperPadding: 0, wrapperWidth: 26 }), _jsx(AudioPlayerHeadControls, { isShuffleOn: isShuffleOn, isTrackListOpen: isTrackListOpen, onClickNextTrack: onClickNextTrack, onClickPlay: onClickPlay, onClickPrevTrack: onClickPrevTrack, onClickRepeat: onClickRepeat, onClickShuffle: onClickShuffle, onClickTrackList: onClickTrackList, playingState: playingState, repeatingState: repeatingState }), _jsx(AudioPlayerHeadPlayingBar, { isMuted: isMuted, onChangeProgressBar: onChangeProgressBar, onChangeVolumeBar: onChangeVolumeBar, onClickMuteVolume: onClickMuteVolume, trackCurrentTime: trackCurrentTime, trackFullTime: trackFullTime, trackVolume: trackVolume })] }));
}
//# sourceMappingURL=c-audio-player-head.js.map