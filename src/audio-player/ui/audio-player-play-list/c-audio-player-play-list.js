// @flow

import React, {Component, type Node} from 'react';
import classNames from 'classnames';

import type {AudioPlayerContextType, AudioPlayerListItemType} from '../../audio-player-type';
import {playerPlayingStateTypeMap} from '../../audio-player-const';
import {audioPlayerIconIdPrefix} from '../audio-player-control/c-audio-player-control-sprite';
import {SvgImage} from '../../../layout/svg-image/c-svg-image';

import audioPlayerPlayListStyle from './audio-player-play-list.scss';

type PropsType = {|
    +audioPlayerContext: AudioPlayerContextType,
    +playList: Array<AudioPlayerListItemType>,
|};

type StateType = null;

export class AudioPlayerPlayList extends Component<PropsType, StateType> {
    renderMainButtonImage(item: AudioPlayerListItemType, index: number): Node {
        const {props} = this;
        const {audioPlayerContext} = props;
        const {activeIndex, playingState} = audioPlayerContext;

        if (activeIndex === index && playingState === playerPlayingStateTypeMap.playing) {
            return (
                <SvgImage
                    className={
                        audioPlayerPlayListStyle.audio_player_play_list___list_item__play_pause_button__image__active
                    }
                    imageId={'#' + audioPlayerIconIdPrefix + 'button-pause-playlist'}
                />
            );
        }

        return (
            <SvgImage
                className={audioPlayerPlayListStyle.audio_player_play_list___list_item__play_pause_button__image}
                imageId={'#' + audioPlayerIconIdPrefix + 'button-play'}
            />
        );
    }

    makeMainButtonClickHandler(item: AudioPlayerListItemType, index: number): () => mixed {
        const {props} = this;
        const {audioPlayerContext} = props;
        const {activeIndex, playingState} = audioPlayerContext;

        if (index === activeIndex) {
            return () => {
                if (playingState !== playerPlayingStateTypeMap.playing) {
                    audioPlayerContext.play();
                    return;
                }

                audioPlayerContext.pause();
            };
        }

        return () => {
            audioPlayerContext.play();
            audioPlayerContext.setActiveIndex(index);
        };
    }

    renderMainButton(item: AudioPlayerListItemType, index: number): Node {
        const handleClick = this.makeMainButtonClickHandler(item, index);

        return (
            <button
                aria-label="play"
                className={audioPlayerPlayListStyle.audio_player_play_list___list_item__play_pause_button}
                onClick={handleClick}
                type="button"
            >
                {this.renderMainButtonImage(item, index)}
            </button>
        );
    }

    renderPlayListItem = (item: AudioPlayerListItemType, index: number): Node => {
        const {title, src} = item;
        const {props} = this;
        const {audioPlayerContext} = props;
        const {activeIndex} = audioPlayerContext;

        return (
            <li
                className={classNames(audioPlayerPlayListStyle.audio_player_play_list___list_item, {
                    [audioPlayerPlayListStyle.audio_player_play_list___list_item__active]: index === activeIndex,
                })}
                key={src + '-' + String(index)}
            >
                {this.renderMainButton(item, index)}
                <div className={audioPlayerPlayListStyle.audio_player_play_list__info}>
                    <p className={audioPlayerPlayListStyle.audio_player_play_list__title}>{title}</p>
                </div>
            </li>
        );
    };

    render(): Node {
        const {props} = this;
        const {audioPlayerContext, playList} = props;
        const {isPlayListOpen} = audioPlayerContext;

        if (!isPlayListOpen) {
            return null;
        }

        return (
            <div className={audioPlayerPlayListStyle.audio_player_play_list__wrapper}>
                <ol className={audioPlayerPlayListStyle.audio_player_play_list__list}>
                    {playList.map(this.renderPlayListItem)}
                </ol>
            </div>
        );
    }
}
