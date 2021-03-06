// @flow

import React from 'react';

import type {PlayerPlayingStateType, TrackType} from '../audio-player-type';

import audioPlayerTrackListStyle from './audio-player-track-list.scss';
import {AudioPlayerTrackListItem} from './audio-player-track-list-item/c-audio-player-track-list-item';

type PropsType = {|
    +activeIndex: number,
    +trackList: Array<TrackType>,
    +playingState: PlayerPlayingStateType,
    +onClickPlay: () => void,
    +playByIndex: (trackIndex: number) => void,
    +setActiveIndex: (activeIndex: number) => void,
    +isLoading: boolean,
|};

export function AudioPlayerTrackList(props: PropsType): React$Node {
    const {activeIndex, trackList, playingState, onClickPlay, setActiveIndex, isLoading, playByIndex} = props;

    return (
        <ul className={audioPlayerTrackListStyle.audio_player_track_list}>
            {trackList.map((track: TrackType, index: number): React$Node => {
                const isCurrentTrack = activeIndex === index;

                return (
                    <AudioPlayerTrackListItem
                        activeIndex={index}
                        isCurrentTrack={isCurrentTrack}
                        isLoading={isLoading && isCurrentTrack}
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
