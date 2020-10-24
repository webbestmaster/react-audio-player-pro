// @flow

import React, {type Node, useRef, useState} from 'react';
import classNames from 'classnames';

import type {PlayerPlayingStateType, TrackType} from '../../audio-player-type';
import {playerPlayingStateTypeMap} from '../../audio-player-const';
import {SvgImage} from '../../../layout/svg-image/c-svg-image';
import {audioPlayerIconIdPrefix} from '../../../layout/audio-player-control-sprite/c-audio-player-control-sprite';
import {Spinner} from '../../../layout/spinner/c-spinner';
import {getTrackHumanTime} from '../../../lib/time';

import audioPlayerTrackListItemStyle from './audio-player-track-list-item.scss';

type PropsType = {|
    +isCurrentTrack: boolean,
    +activeIndex: number,
    +track: TrackType,
    +playingState: PlayerPlayingStateType,
    +onClickPlay: () => mixed,
    +setActiveIndex: (activeIndex: number, callBack?: () => mixed) => mixed,
    +isLoading: boolean,
|};

export function AudioPlayerTrackListItem(props: PropsType): Node {
    const {isCurrentTrack, activeIndex, track, playingState, onClickPlay, setActiveIndex, isLoading} = props;

    const [trackFullTime, setTrackFullTime] = useState<number>(0);
    const {minutes: trackFullTimeMinutes, seconds: trackFullTimeSeconds} = getTrackHumanTime(trackFullTime);
    const refAudio = useRef<?HTMLAudioElement>();
    const {content, mediaMetadata, src} = track;
    const mediaTitle = mediaMetadata && mediaMetadata.title;
    const actualContent = content || mediaTitle || src;

    const spinner = <Spinner isShow={isLoading} lineWidth={4} position="absolute" size={30} wrapperPadding={0}/>;

    const className = classNames(audioPlayerTrackListItemStyle.audio_player_track_list_item, {
        [audioPlayerTrackListItemStyle.audio_player_track_list_item__active]: isCurrentTrack,
    });

    function getAudioTag(): HTMLAudioElement {
        const audioTag = refAudio.current;

        if (audioTag) {
            return audioTag;
        }

        throw new Error('Audio tag is not exists');
    }

    function handleSetActiveIndex() {
        setActiveIndex(activeIndex);
    }

    function handleSetActiveIndexAndTogglePlay() {
        setActiveIndex(activeIndex, onClickPlay);
    }

    function handleOnLoadedMetadata() {
        const audioTag = getAudioTag();

        setTrackFullTime(audioTag.duration);
    }

    function renderButton(): Node {
        const playImageId = '#' + audioPlayerIconIdPrefix + 'button-play';
        const pauseImageId = '#' + audioPlayerIconIdPrefix + 'button-pause-playlist';

        if (playingState === playerPlayingStateTypeMap.playing) {
            if (isCurrentTrack) {
                return (
                    <button className={audioPlayerTrackListItemStyle.button} onClick={onClickPlay} type="button">
                        {spinner}
                        <SvgImage
                            className={audioPlayerTrackListItemStyle.button_image__active}
                            imageId={pauseImageId}
                        />
                    </button>
                );
            }

            return (
                <button className={audioPlayerTrackListItemStyle.button} onClick={handleSetActiveIndex} type="button">
                    <SvgImage className={audioPlayerTrackListItemStyle.button_image} imageId={playImageId}/>
                </button>
            );
        }

        if (isCurrentTrack) {
            return (
                <button className={audioPlayerTrackListItemStyle.button} onClick={onClickPlay} type="button">
                    {spinner}
                    <SvgImage className={audioPlayerTrackListItemStyle.button_image} imageId={playImageId}/>
                </button>
            );
        }

        return (
            <button
                className={audioPlayerTrackListItemStyle.button}
                onClick={handleSetActiveIndexAndTogglePlay}
                type="button"
            >
                <SvgImage className={audioPlayerTrackListItemStyle.button_image} imageId={playImageId}/>
            </button>
        );
    }

    return (
        <li className={className}>
            <audio
                className={audioPlayerTrackListItemStyle.audio_tag}
                muted
                onLoadedMetadata={handleOnLoadedMetadata}
                preload="metadata"
                ref={refAudio}
                src={src}
            />
            {renderButton()}
            <div className={audioPlayerTrackListItemStyle.content}>
                <div className={audioPlayerTrackListItemStyle.track_title}>{actualContent}</div>
            </div>
            <div className={audioPlayerTrackListItemStyle.track_time}>
                {trackFullTimeMinutes}:{trackFullTimeSeconds}
            </div>
        </li>
    );
}
