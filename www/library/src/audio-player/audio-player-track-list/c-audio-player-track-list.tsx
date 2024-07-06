import type {PlayerPlayingStateType, TrackType} from "../../../library";
import * as audioPlayerTrackListStyle from "./audio-player-track-list.scss";
import {AudioPlayerTrackListItem} from "./audio-player-track-list-item/c-audio-player-track-list-item";

type PropsType = Readonly<{
    activeIndex: number;
    isLoading: boolean;
    onClickPlay: () => void;
    playByIndex: (trackIndex: number) => void;
    playingState: PlayerPlayingStateType;
    setActiveIndex: (activeIndex: number) => void;
    trackList: ReadonlyArray<TrackType>;
}>;

export function AudioPlayerTrackList(props: PropsType): JSX.Element {
    const {activeIndex, trackList, playingState, onClickPlay, setActiveIndex, isLoading, playByIndex} = props;

    return (
        <ul className={audioPlayerTrackListStyle.audio_player_track_list}>
            {trackList.map((track: TrackType, index: number): JSX.Element => {
                const isCurrentTrack = activeIndex === index;

                return (
                    <AudioPlayerTrackListItem
                        activeIndex={index}
                        isCurrentTrack={isCurrentTrack}
                        isLoading={isLoading ? isCurrentTrack : false}
                        key={track.src}
                        onClickPlay={onClickPlay}
                        playByIndex={playByIndex}
                        playingState={playingState}
                        setActiveIndex={setActiveIndex}
                        track={track}
                    />
                );
            })}
        </ul>
    );
}
