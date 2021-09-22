import {AudioPlayerControlButton} from '../../../layout/audio-player-control-button/c-audio-player-control-button';

import {PlayerPlayingStateType, PlayerRepeatingStateType} from '../../../../library';
import {playerPlayingStateTypeMap, playerRepeatingStateTypeMap} from '../../audio-player-const';

import AudioPlayerHeadControlsStyle from './audio-player-head-controls.scss';

const {one: repeatOne, all: repeatAll} = playerRepeatingStateTypeMap;

type PropsType = Readonly<{
    isShuffleOn: boolean;
    isTrackListOpen: boolean;
    onClickNextTrack: () => void;
    onClickPlay: () => void;
    onClickPrevTrack: () => void;
    onClickRepeat: () => void;

    onClickShuffle: () => void;
    onClickTrackList: () => void;
    playingState: PlayerPlayingStateType;
    repeatingState: PlayerRepeatingStateType;
}>;

export function AudioPlayerHeadControls(props: PropsType): JSX.Element {
    const {
        onClickShuffle,
        onClickRepeat,
        onClickPrevTrack,
        onClickPlay,
        onClickNextTrack,
        onClickTrackList,
        playingState,
        isShuffleOn,
        repeatingState,
        isTrackListOpen,
    } = props;

    const isPlaying = playingState === playerPlayingStateTypeMap.playing;

    return (
        <div className={AudioPlayerHeadControlsStyle.audio_player_head_controls}>
            <AudioPlayerControlButton
                ariaLabel="shuffle"
                imageId="button-shuffle"
                isActive={isShuffleOn}
                onClick={onClickShuffle}
            />

            <AudioPlayerControlButton
                ariaLabel="repeat"
                imageId={repeatingState === repeatOne ? 'button-repeat-one' : 'button-repeat'}
                isActive={repeatingState === repeatOne || repeatingState === repeatAll}
                onClick={onClickRepeat}
            />

            <AudioPlayerControlButton ariaLabel="prev" imageId="button-prev-track" onClick={onClickPrevTrack} />

            {isPlaying ? (
                <AudioPlayerControlButton ariaLabel="pause" imageId="button-pause" onClick={onClickPlay} />
            ) : (
                <AudioPlayerControlButton ariaLabel="play" imageId="button-play" onClick={onClickPlay} />
            )}

            <AudioPlayerControlButton ariaLabel="next" imageId="button-next-track" onClick={onClickNextTrack} />

            <AudioPlayerControlButton
                ariaLabel="track-list"
                imageId="button-track-list"
                isActive={isTrackListOpen}
                onClick={onClickTrackList}
            />
        </div>
    );
}
