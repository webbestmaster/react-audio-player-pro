import { jsx as _jsx } from "react/jsx-runtime";
import { PlayListContainer } from './list-of-play-list/play-list-container/c-play-list-container';
export function renderPlayListContainer(playList, index) {
    return _jsx(PlayListContainer, { playList: playList }, playList.name + '-' + String(index));
}
//# sourceMappingURL=play-list-panel-helper.js.map