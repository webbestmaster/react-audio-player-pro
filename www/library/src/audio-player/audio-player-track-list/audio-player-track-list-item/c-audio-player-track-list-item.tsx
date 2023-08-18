/* global HTMLAudioElement */

import {useRef, useState} from "react";

import {cls} from "../../../lib/css";
import {PlayerPlayingStateType, TrackType} from "../../../../library";
import {playerPlayingStateTypeMap} from "../../audio-player-const";
import {SvgImage} from "../../../layout/svg-image/c-svg-image";
import {audioPlayerIconIdPrefix} from "../../../layout/audio-player-control-sprite/c-audio-player-control-sprite";
import {Spinner} from "../../../layout/spinner/c-spinner";
import {getTrackHumanTime} from "../../../lib/time";

import {PlayListMenuButton} from "../../../play-list/add-track-to-play-list-button/c-add-track-to-play-list-button";

import audioPlayerTrackListItemStyle from "./audio-player-track-list-item.scss";
import {getActualContent} from "./audio-player-track-list-item-helper";

type PropsType = Readonly<{
    activeIndex: number;
    isCurrentTrack: boolean;
    isLoading: boolean;
    onClickPlay: () => void;
    playByIndex: (trackIndex: number) => void;
    playingState: PlayerPlayingStateType;
    setActiveIndex: (activeIndex: number) => void;
    track: TrackType;
}>;

export function AudioPlayerTrackListItem(props: PropsType): JSX.Element {
    const {isCurrentTrack, activeIndex, track, playingState, onClickPlay, setActiveIndex, isLoading, playByIndex} =
        props;

    const {src, duration = 0, preload = "auto"} = track;
    const [trackFullTime, setTrackFullTime] = useState<number>(duration);
    const {minutes: trackFullTimeMinutes, seconds: trackFullTimeSeconds} = getTrackHumanTime(trackFullTime);
    const refAudio = useRef<HTMLAudioElement | null>(null);
    const actualContent = getActualContent(track);

    const spinner = <Spinner isShow={isLoading} lineWidth={4} position="absolute" size={30} wrapperPadding={0} />;

    // eslint-disable-next-line unicorn/no-keyword-prefix
    const className = cls(audioPlayerTrackListItemStyle.audio_player_track_list_item, {
        [audioPlayerTrackListItemStyle.audio_player_track_list_item__active]: isCurrentTrack,
    });

    function getAudioTag(): HTMLAudioElement {
        const audioTag = refAudio.current;

        if (audioTag) {
            return audioTag;
        }

        throw new Error("Audio tag is not exists");
    }

    function handleSetActiveIndex() {
        setActiveIndex(activeIndex);
    }

    function handleSetActiveIndexAndPlay() {
        playByIndex(activeIndex);
    }

    function handleOnLoadedMetadata() {
        const audioTag = getAudioTag();

        setTrackFullTime(audioTag.duration);
    }

    function renderButton(): JSX.Element {
        const playImageId = `#${audioPlayerIconIdPrefix}button-play`;
        const pauseImageId = `#${audioPlayerIconIdPrefix}button-pause-playlist`;
        const accessibleName = "play";

        if (playingState === playerPlayingStateTypeMap.playing) {
            if (isCurrentTrack) {
                return (
                    <button
                        aria-label={accessibleName}
                        className={audioPlayerTrackListItemStyle.button}
                        onClick={onClickPlay}
                        type="button"
                    >
                        {spinner}

                        <SvgImage
                            className={audioPlayerTrackListItemStyle.button_image__active}
                            imageId={pauseImageId}
                        />
                    </button>
                );
            }

            return (
                <button
                    aria-label={accessibleName}
                    className={audioPlayerTrackListItemStyle.button}
                    onClick={handleSetActiveIndex}
                    type="button"
                >
                    <SvgImage className={audioPlayerTrackListItemStyle.button_image} imageId={playImageId} />
                </button>
            );
        }

        if (isCurrentTrack) {
            return (
                <button
                    aria-label={accessibleName}
                    className={audioPlayerTrackListItemStyle.button}
                    onClick={onClickPlay}
                    type="button"
                >
                    {spinner}

                    <SvgImage className={audioPlayerTrackListItemStyle.button_image} imageId={playImageId} />
                </button>
            );
        }

        return (
            <button
                aria-label={accessibleName}
                className={audioPlayerTrackListItemStyle.button}
                onClick={handleSetActiveIndexAndPlay}
                type="button"
            >
                <SvgImage className={audioPlayerTrackListItemStyle.button_image} imageId={playImageId} />
            </button>
        );
    }

    return (
        // eslint-disable-next-line unicorn/no-keyword-prefix
        <li className={className}>
            <audio
                className={audioPlayerTrackListItemStyle.audio_tag}
                muted
                onLoadedMetadata={handleOnLoadedMetadata}
                preload={preload}
                ref={refAudio}
                src={src}
            />

            {renderButton()}

            <div className={audioPlayerTrackListItemStyle.content}>
                <div className={audioPlayerTrackListItemStyle.track_title}>{actualContent}</div>
            </div>

            <div className={audioPlayerTrackListItemStyle.track_time}>
                {`${trackFullTimeMinutes}:${trackFullTimeSeconds}`}
            </div>

            <PlayListMenuButton className={audioPlayerTrackListItemStyle.play_list_menu_button} track={track} />
        </li>
    );
}
