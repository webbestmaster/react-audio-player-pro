// @flow

import React, {useContext, useRef, useState} from 'react';

import type {PlayListType} from '../../../../www/js/provider/play-list/play-list-context-type';
import {PlayListContext} from '../../../../www/js/provider/play-list/c-play-list-context';

import type {TrackType} from '../../../audio-player/audio-player-type';

import playListContainerStyle from './play-list-container.scss';
import {TrackList} from './track-list/c-track-list';

type PropsType = {|
    +playList: PlayListType,
|};

export function PlayListContainer(props: PropsType): React$Node {
    const {playList} = props;
    const {trackList} = playList;
    const [src, setSrc] = useState<string>('');
    const inputSrcRef = useRef<?HTMLInputElement>();
    const inputPlayListNameRef = useRef<?HTMLInputElement>();

    const playListContextData = useContext(PlayListContext);

    function getInputSrc(): HTMLInputElement {
        return (
            inputSrcRef.current
            || (() => {
                throw new Error('Can not get input of src');
            })()
        );
    }

    function getInputPlayListName(): HTMLInputElement {
        return (
            inputPlayListNameRef.current
            || (() => {
                throw new Error('Can not get input of play list name');
            })()
        );
    }

    function handleOnInputSrc() {
        setSrc(getInputSrc().value);
    }

    function handleOnInputPlayListName() {
        playListContextData.updatePlayList(playList, {
            name: getInputPlayListName().value.trim(),
            trackList: playList.trackList,
        });
    }

    function handleAddSong() {
        const newTrackList: Array<TrackType> = [...playList.trackList];

        newTrackList.push({src});

        playListContextData.updatePlayList(playList, {
            name: playList.name,
            trackList: newTrackList,
        });

        getInputSrc().value = '';
    }

    return (
        <div className={playListContainerStyle.play_list_container}>
            <h1>play list container</h1>

            <div>
                <input
                    defaultValue={playList.name}
                    onInput={handleOnInputPlayListName}
                    ref={inputPlayListNameRef}
                    type="text"
                />
            </div>

            <div>
                <input
                    onInput={handleOnInputSrc}
                    placeholder="https://some/song/src.mp3"
                    ref={inputSrcRef}
                    type="text"
                />

                <button onClick={handleAddSong} type="button">
                    + add your song +
                </button>
            </div>

            <TrackList trackList={trackList}/>
        </div>
    );
}
