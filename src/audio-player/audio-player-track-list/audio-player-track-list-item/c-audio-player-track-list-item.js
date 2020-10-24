// @flow

import React, {Component, type Node} from 'react';
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

type StateType = {|
    +trackFullTime: number,
|};

export class AudioPlayerTrackListItem extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            trackFullTime: 0,
        };

        this.ref = {
            refAudio: React.createRef<HTMLAudioElement>(),
        };
    }

    ref: {|
        +refAudio: {current: HTMLAudioElement | null},
    |};

    handleSetActiveIndex = () => {
        const {props} = this;
        const {setActiveIndex, activeIndex} = props;

        setActiveIndex(activeIndex);
    };

    handleSetActiveIndexAndTogglePlay = () => {
        const {props} = this;
        const {onClickPlay, setActiveIndex, activeIndex} = props;

        setActiveIndex(activeIndex, onClickPlay);
    };

    renderLoadingSpinner(): Node {
        const {props} = this;
        const {isLoading} = props;

        return <Spinner isShow={isLoading} lineWidth={4} position="absolute" size={30} wrapperPadding={0}/>;
    }

    renderButton(): Node {
        const {props} = this;
        const {isCurrentTrack, playingState, onClickPlay} = props;

        const playImageId = '#' + audioPlayerIconIdPrefix + 'button-play';
        const pauseImageId = '#' + audioPlayerIconIdPrefix + 'button-pause-playlist';

        if (playingState === playerPlayingStateTypeMap.playing) {
            if (isCurrentTrack) {
                return (
                    <button className={audioPlayerTrackListItemStyle.button} onClick={onClickPlay} type="button">
                        {this.renderLoadingSpinner()}
                        <SvgImage
                            className={audioPlayerTrackListItemStyle.button_image__active}
                            imageId={pauseImageId}
                        />
                    </button>
                );
            }

            return (
                <button
                    className={audioPlayerTrackListItemStyle.button}
                    onClick={this.handleSetActiveIndex}
                    type="button"
                >
                    <SvgImage className={audioPlayerTrackListItemStyle.button_image} imageId={playImageId}/>
                </button>
            );
        }

        if (isCurrentTrack) {
            return (
                <button className={audioPlayerTrackListItemStyle.button} onClick={onClickPlay} type="button">
                    {this.renderLoadingSpinner()}
                    <SvgImage className={audioPlayerTrackListItemStyle.button_image} imageId={playImageId}/>
                </button>
            );
        }

        return (
            <button
                className={audioPlayerTrackListItemStyle.button}
                onClick={this.handleSetActiveIndexAndTogglePlay}
                type="button"
            >
                <SvgImage className={audioPlayerTrackListItemStyle.button_image} imageId={playImageId}/>
            </button>
        );
    }

    renderContent(): Node {
        const {props} = this;
        const {track} = props;
        const {content, mediaMetadata} = track;
        const mediaTitle = mediaMetadata && mediaMetadata.title;
        const actualContent = content || mediaTitle || track.src;

        return (
            <div className={audioPlayerTrackListItemStyle.content}>
                <div className={audioPlayerTrackListItemStyle.track_title}>{actualContent}</div>
            </div>
        );
    }

    getAudioTag(): HTMLAudioElement | null {
        const {ref} = this;
        const {refAudio} = ref;

        return refAudio.current;
    }

    handleOnTrackError = (error: Error) => {
        console.error('[handleOnTrackError]: Error!');

        throw error;
    };

    handleOnLoadedMetadata = () => {
        const audioTag = this.getAudioTag();

        if (!audioTag) {
            return;
        }

        this.setState({
            trackFullTime: audioTag.duration,
        });
    };

    renderAudioTag(): Node {
        const {props, ref} = this;
        const {refAudio} = ref;
        const {track} = props;
        const {src} = track;

        return (
            <audio
                className={audioPlayerTrackListItemStyle.audio_tag}
                muted
                onError={this.handleOnTrackError}
                onLoadedMetadata={this.handleOnLoadedMetadata}
                preload="metadata"
                ref={refAudio}
                src={src}
            />
        );
    }

    renderFullTime(): Node {
        const {state} = this;
        const {trackFullTime} = state;

        const {minutes: trackFullTimeMinutes, seconds: trackFullTimeSeconds} = getTrackHumanTime(trackFullTime);

        return (
            <div className={audioPlayerTrackListItemStyle.track_time}>
                {trackFullTimeMinutes}:{trackFullTimeSeconds}
            </div>
        );
    }

    render(): Node {
        const {props} = this;
        const {isCurrentTrack} = props;

        const className = classNames(audioPlayerTrackListItemStyle.audio_player_track_list_item, {
            [audioPlayerTrackListItemStyle.audio_player_track_list_item__active]: isCurrentTrack,
        });

        return (
            <li className={className}>
                {this.renderAudioTag()}
                {this.renderButton()}
                {this.renderContent()}
                {this.renderFullTime()}
            </li>
        );
    }
}
