import {type JSX, useContext} from "react";

import {AudioPlayerControlButton} from "../../layout/audio-player-control-button/c-audio-player-control-button";
import {PlayListContext} from "../../provider/play-list/play-list-context";
import * as playListPanelStyle from "./play-list-panel.scss";
import {renderPlayListContainer} from "./play-list-panel-helper";

export function PlayListPanel(): JSX.Element {
    const playListContextData = useContext(PlayListContext);
    const {createPlayList, getAllPlayLists} = playListContextData;
    const listOfPlayList = getAllPlayLists();

    return (
        <div className={playListPanelStyle.play_list_panel}>
            {listOfPlayList.map(renderPlayListContainer)}

            <div className={playListPanelStyle.add_play_list_wrapper}>
                <AudioPlayerControlButton
                    ariaLabel="add play list"
                    className={playListPanelStyle.add_play_list_button}
                    imageId="play-list-plus"
                    onClick={createPlayList}
                />
            </div>
        </div>
    );
}
