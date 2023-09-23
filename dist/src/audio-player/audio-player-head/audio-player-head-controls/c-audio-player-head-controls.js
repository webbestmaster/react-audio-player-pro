import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AudioPlayerControlButton } from "../../../layout/audio-player-control-button/c-audio-player-control-button";
import { playerPlayingStateTypeMap, playerRepeatingStateTypeMap } from "../../audio-player-const";
import AudioPlayerHeadControlsStyle from "./audio-player-head-controls.scss";
const { one: repeatOne, all: repeatAll } = playerRepeatingStateTypeMap;
export function AudioPlayerHeadControls(props) {
    const { onClickShuffle, onClickRepeat, onClickPrevTrack, onClickPlay, onClickNextTrack, onClickTrackList, playingState, isShuffleOn, repeatingState, isTrackListOpen, } = props;
    const isPlaying = playingState === playerPlayingStateTypeMap.playing;
    return (_jsxs("div", { className: AudioPlayerHeadControlsStyle.audio_player_head_controls, children: [_jsx(AudioPlayerControlButton, { ariaLabel: "shuffle", imageId: "button-shuffle", isActive: isShuffleOn, onClick: onClickShuffle }), _jsx(AudioPlayerControlButton, { ariaLabel: "repeat", imageId: repeatingState === repeatOne ? "button-repeat-one" : "button-repeat", isActive: repeatingState === repeatOne || repeatingState === repeatAll, onClick: onClickRepeat }), _jsx(AudioPlayerControlButton, { ariaLabel: "prev", imageId: "button-prev-track", onClick: onClickPrevTrack }), isPlaying ? (_jsx(AudioPlayerControlButton, { ariaLabel: "pause", imageId: "button-pause", onClick: onClickPlay })) : (_jsx(AudioPlayerControlButton, { ariaLabel: "play", imageId: "button-play", onClick: onClickPlay })), _jsx(AudioPlayerControlButton, { ariaLabel: "next", imageId: "button-next-track", onClick: onClickNextTrack }), _jsx(AudioPlayerControlButton, { ariaLabel: "track-list", imageId: "button-track-list", isActive: isTrackListOpen, onClick: onClickTrackList })] }));
}
//# sourceMappingURL=c-audio-player-head-controls.js.map