/* global HTMLInputElement */

import {useCallback, useContext, useRef} from 'react';

import {PlayListType} from '../../../../provider/play-list/play-list-context-type';
import {PlayListContext} from '../../../../provider/play-list/play-list-context';
import {noNamePlayListName} from '../../../../provider/play-list/play-list-context-const';
// import {IsRender} from '../../../../layout/is-render/c-is-render';
import {AudioPlayer} from '../../../../audio-player/c-audio-player';
import {savedTrackToTrack} from '../../../../provider/play-list/play-list-context-helper';
import {AudioPlayerControlButton} from '../../../../layout/audio-player-control-button/c-audio-player-control-button';

import playListContainerStyle from './play-list-container.scss';

type PropsType = Readonly<{
    playList: PlayListType;
}>;

export function PlayListContainer(props: PropsType): JSX.Element {
    const {playList} = props;
    const {trackList, name: playListName} = playList;
    const inputPlayListNameRef = useRef<HTMLInputElement | null>(null);

    const playListContextData = useContext(PlayListContext);
    const {updatePlayList, deletePlayList, getAllPlayLists} = playListContextData;
    const allPlayLists = getAllPlayLists();
    const hasTrackInList = trackList.length > 0;

    function getInputPlayListName(): HTMLInputElement {
        return (
            inputPlayListNameRef.current ||
            (() => {
                throw new Error('Can not get input of play list name');
            })()
        );
    }

    const handleOnBlurPlayListName = useCallback(
        function handleOnBlurPlayListNameInner() {
            updatePlayList(playList, {
                name: getInputPlayListName().value.trim(),
                trackList,
            });
        },
        [updatePlayList, playList, trackList]
    );

    const handleRemovePlayList = useCallback(
        function handleRemovePlayListInner() {
            deletePlayList(playList);
        },
        [deletePlayList, playList]
    );

    const useRemovePlayListButton = allPlayLists.length > 1 && trackList.length === 0;
    const removePlayListButtonClassName = useRemovePlayListButton
        ? playListContainerStyle.remove_play_list_button_active
        : playListContainerStyle.remove_play_list_button;

    return (
        <div className={playListContainerStyle.play_list_container}>
            <div className={playListContainerStyle.header_container}>
                <input
                    className={playListContainerStyle.header_input}
                    defaultValue={playListName}
                    onBlur={handleOnBlurPlayListName}
                    placeholder={noNamePlayListName}
                    ref={inputPlayListNameRef}
                    type="text"
                />

                <AudioPlayerControlButton
                    ariaLabel="delete"
                    className={removePlayListButtonClassName}
                    imageId="trash-bin"
                    onClick={handleRemovePlayList}
                />
            </div>

            {hasTrackInList ? (
                <AudioPlayer
                    // defaultState={{isTrackListOpen: false}}
                    trackList={trackList.map(savedTrackToTrack)}
                />
            ) : (
                <p className={playListContainerStyle.no_track_here}>∅</p>
            )}
        </div>
    );
}
