import {PlayerPlayingStateType, PlayerRepeatingStateType} from '../../../library';
import {Spinner} from '../../layout/spinner/c-spinner';

import {AudioPlayerHeadPlayingBar} from './audio-player-head-playing-bar/c-audio-player-head-playing-bar';
import {AudioPlayerHeadControls} from './audio-player-head-controls/c-audio-player-head-controls';

import audioPlayerHeadStyle from './audio-player-head.scss';

type PropsType = Readonly<{
    isLoading: boolean;
    isMuted: boolean;
    isShuffleOn: boolean;
    isTrackListOpen: boolean;
    onChangeProgressBar: (progress: number) => void;
    onChangeVolumeBar: (volume: number) => void;
    onClickMuteVolume: () => void;
    onClickNextTrack: () => void;
    onClickPlay: () => void;

    onClickPrevTrack: () => void;
    onClickRepeat: () => void;
    onClickShuffle: () => void;
    onClickTrackList: () => void;
    playingState: PlayerPlayingStateType;
    repeatingState: PlayerRepeatingStateType;
    trackCurrentTime: number;
    trackFullTime: number;
    trackVolume: number;
}>;

export function AudioPlayerHead(props: PropsType): JSX.Element {
    const {
        onClickShuffle,
        onClickRepeat,
        onClickPrevTrack,
        onClickPlay,
        onClickNextTrack,
        onClickTrackList,
        onClickMuteVolume,
        onChangeProgressBar,
        onChangeVolumeBar,

        isMuted,
        playingState,
        isShuffleOn,
        repeatingState,
        isTrackListOpen,
        trackCurrentTime,
        trackVolume,
        trackFullTime,
        isLoading,
    } = props;

    return (
        <div className={audioPlayerHeadStyle.audio_player_head}>
            <Spinner
                className={audioPlayerHeadStyle.spinner}
                isShow={isLoading}
                lineWidth={3}
                position="absolute"
                size={26}
                wrapperHeight={26}
                wrapperPadding={0}
                wrapperWidth={26}
            />

            <AudioPlayerHeadControls
                isShuffleOn={isShuffleOn}
                isTrackListOpen={isTrackListOpen}
                onClickNextTrack={onClickNextTrack}
                onClickPlay={onClickPlay}
                onClickPrevTrack={onClickPrevTrack}
                onClickRepeat={onClickRepeat}
                onClickShuffle={onClickShuffle}
                onClickTrackList={onClickTrackList}
                playingState={playingState}
                repeatingState={repeatingState}
            />

            <AudioPlayerHeadPlayingBar
                isMuted={isMuted}
                onChangeProgressBar={onChangeProgressBar}
                onChangeVolumeBar={onChangeVolumeBar}
                onClickMuteVolume={onClickMuteVolume}
                trackCurrentTime={trackCurrentTime}
                trackFullTime={trackFullTime}
                trackVolume={trackVolume}
            />
        </div>
    );
}
