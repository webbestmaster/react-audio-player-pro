import { jsx as _jsx } from "react/jsx-runtime";
import * as audioPlayerTrackListStyle from "./audio-player-track-list.scss";
import { AudioPlayerTrackListItem } from "./audio-player-track-list-item/c-audio-player-track-list-item";
export function AudioPlayerTrackList(props) {
    const { activeIndex, trackList, playingState, onClickPlay, setActiveIndex, isLoading, playByIndex } = props;
    return (_jsx("ul", { className: audioPlayerTrackListStyle.audio_player_track_list, children: trackList.map((track, index) => {
            const isCurrentTrack = activeIndex === index;
            return (_jsx(AudioPlayerTrackListItem, { activeIndex: index, isCurrentTrack: isCurrentTrack, isLoading: isLoading ? isCurrentTrack : false, onClickPlay: onClickPlay, playByIndex: playByIndex, playingState: playingState, setActiveIndex: setActiveIndex, track: track }, track.src));
        }) }));
}
//# sourceMappingURL=c-audio-player-track-list.js.map