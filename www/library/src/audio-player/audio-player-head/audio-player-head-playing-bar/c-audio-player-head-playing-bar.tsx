import {Time} from '../../../layout/time/c-time';
import {RangeBar} from '../../../layout/range-bar/c-range-bar';
import {AudioPlayerControlButton} from '../../../layout/audio-player-control-button/c-audio-player-control-button';

import audioPlayerHeadPlayingBarStyle from './audio-player-head-playing-bar.scss';

type PropsType = Readonly<{
    isMuted: boolean;
    onChangeProgressBar: (progress: number) => void;
    onChangeVolumeBar: (volume: number) => void;
    onClickMuteVolume: () => void;
    trackCurrentTime: number;
    trackFullTime: number;
    trackVolume: number;
}>;

export function AudioPlayerHeadPlayingBar(props: PropsType): JSX.Element {
    const {
        trackCurrentTime,
        trackFullTime,
        onClickMuteVolume,
        isMuted,
        trackVolume,
        onChangeProgressBar,
        onChangeVolumeBar,
    } = props;
    const isActualMuted = isMuted || trackVolume === 0;
    const soundImageSrc = isActualMuted ? 'button-sound-off' : 'button-sound-on';
    const isTrackInitialized = trackFullTime !== 0;

    return (
        <div className={audioPlayerHeadPlayingBarStyle.audio_player_head_playing_bar}>
            <Time
                className={audioPlayerHeadPlayingBarStyle.time}
                currentTime={trackCurrentTime}
                fullTime={trackFullTime}
            />

            <RangeBar
                ariaLabel="progress bar"
                isDisable={!isTrackInitialized}
                onChange={onChangeProgressBar}
                progress={isTrackInitialized ? trackCurrentTime / trackFullTime : 0}
            />

            <AudioPlayerControlButton
                ariaLabel="switch-sound"
                className=""
                imageId={soundImageSrc}
                isHideForNarrow
                onClick={onClickMuteVolume}
            />

            <RangeBar
                ariaLabel="volume bar"
                className={audioPlayerHeadPlayingBarStyle.volume_bar}
                isHideForNarrow
                onChange={onChangeVolumeBar}
                progress={trackVolume}
            />
        </div>
    );
}
