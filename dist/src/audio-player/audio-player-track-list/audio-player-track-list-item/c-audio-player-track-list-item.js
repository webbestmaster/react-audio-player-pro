import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* global HTMLAudioElement */
import { useRef, useState } from 'react';
import { classNames } from '../../../lib/css';
import { playerPlayingStateTypeMap } from '../../audio-player-const';
import { SvgImage } from '../../../layout/svg-image/c-svg-image';
import { audioPlayerIconIdPrefix } from '../../../layout/audio-player-control-sprite/c-audio-player-control-sprite';
import { Spinner } from '../../../layout/spinner/c-spinner';
import { getTrackHumanTime } from '../../../lib/time';
import { PlayListMenuButton } from '../../../play-list/add-track-to-play-list-button/c-add-track-to-play-list-button';
import audioPlayerTrackListItemStyle from './audio-player-track-list-item.scss';
import { getActualContent } from './audio-player-track-list-item-helper';
export function AudioPlayerTrackListItem(props) {
    const { isCurrentTrack, activeIndex, track, playingState, onClickPlay, setActiveIndex, isLoading, playByIndex } = props;
    const { src, duration = 0, preload = 'auto' } = track;
    const [trackFullTime, setTrackFullTime] = useState(duration);
    const { minutes: trackFullTimeMinutes, seconds: trackFullTimeSeconds } = getTrackHumanTime(trackFullTime);
    const refAudio = useRef(null);
    const actualContent = getActualContent(track);
    const spinner = _jsx(Spinner, { isShow: isLoading, lineWidth: 4, position: "absolute", size: 30, wrapperPadding: 0 });
    const className = classNames(audioPlayerTrackListItemStyle.audio_player_track_list_item, {
        [audioPlayerTrackListItemStyle.audio_player_track_list_item__active]: isCurrentTrack,
    });
    function getAudioTag() {
        const audioTag = refAudio.current;
        if (audioTag) {
            return audioTag;
        }
        throw new Error('Audio tag is not exists');
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
    function renderButton() {
        const playImageId = '#' + audioPlayerIconIdPrefix + 'button-play';
        const pauseImageId = '#' + audioPlayerIconIdPrefix + 'button-pause-playlist';
        const accessibleName = 'play';
        if (playingState === playerPlayingStateTypeMap.playing) {
            if (isCurrentTrack) {
                return (_jsxs("button", { "aria-label": accessibleName, className: audioPlayerTrackListItemStyle.button, onClick: onClickPlay, type: "button", children: [spinner, _jsx(SvgImage, { className: audioPlayerTrackListItemStyle.button_image__active, imageId: pauseImageId })] }));
            }
            return (_jsx("button", { "aria-label": accessibleName, className: audioPlayerTrackListItemStyle.button, onClick: handleSetActiveIndex, type: "button", children: _jsx(SvgImage, { className: audioPlayerTrackListItemStyle.button_image, imageId: playImageId }) }));
        }
        if (isCurrentTrack) {
            return (_jsxs("button", { "aria-label": accessibleName, className: audioPlayerTrackListItemStyle.button, onClick: onClickPlay, type: "button", children: [spinner, _jsx(SvgImage, { className: audioPlayerTrackListItemStyle.button_image, imageId: playImageId })] }));
        }
        return (_jsx("button", { "aria-label": accessibleName, className: audioPlayerTrackListItemStyle.button, onClick: handleSetActiveIndexAndPlay, type: "button", children: _jsx(SvgImage, { className: audioPlayerTrackListItemStyle.button_image, imageId: playImageId }) }));
    }
    return (_jsxs("li", { className: className, children: [_jsx("audio", { className: audioPlayerTrackListItemStyle.audio_tag, muted: true, onLoadedMetadata: handleOnLoadedMetadata, preload: preload, ref: refAudio, src: src }), renderButton(), _jsx("div", { className: audioPlayerTrackListItemStyle.content, children: _jsx("div", { className: audioPlayerTrackListItemStyle.track_title, children: actualContent }) }), _jsx("div", { className: audioPlayerTrackListItemStyle.track_time, children: `${trackFullTimeMinutes}:${trackFullTimeSeconds}` }), _jsx(PlayListMenuButton, { className: audioPlayerTrackListItemStyle.play_list_menu_button, track: track })] }));
}
//# sourceMappingURL=c-audio-player-track-list-item.js.map