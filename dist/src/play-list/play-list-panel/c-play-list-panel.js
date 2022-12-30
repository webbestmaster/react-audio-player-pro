import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { PlayListContext } from '../../provider/play-list/play-list-context';
import { AudioPlayerControlButton } from '../../layout/audio-player-control-button/c-audio-player-control-button';
import playListPanelStyle from './play-list-panel.scss';
import { renderPlayListContainer } from './play-list-panel-helper';
export function PlayListPanel() {
    const playListContextData = useContext(PlayListContext);
    const { createPlayList, getAllPlayLists } = playListContextData;
    const listOfPlayList = getAllPlayLists();
    return (_jsxs("div", { className: playListPanelStyle.play_list_panel, children: [listOfPlayList.map(renderPlayListContainer), _jsx("div", { className: playListPanelStyle.add_play_list_wrapper, children: _jsx(AudioPlayerControlButton, { ariaLabel: "add play list", className: playListPanelStyle.add_play_list_button, imageId: "play-list-plus", onClick: createPlayList }) })] }));
}
//# sourceMappingURL=c-play-list-panel.js.map