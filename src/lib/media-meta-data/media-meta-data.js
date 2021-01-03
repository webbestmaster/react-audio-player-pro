// @flow

/* global navigator, MediaMetadata */

import {type MediaMetadataControlSettingType, type MediaMetadataType} from './media-meta-data-type';
import {mediaMetadataControlNameMap} from './media-meta-data-const';

export function clearMediaMetadata() {
    // $FlowFixMe
    if (typeof navigator === 'undefined' || typeof MediaMetadata === 'undefined') {
        return;
    }

    if (!('mediaSession' in navigator)) {
        return;
    }

    // $FlowFixMe
    navigator.mediaSession.metadata = null;

    // eslint-disable-next-line no-loops/no-loops, guard-for-in
    for (const controlName in mediaMetadataControlNameMap) {
        // $FlowFixMe
        navigator.mediaSession.setActionHandler(controlName, null);
    }
}

// eslint-disable-next-line complexity
export function setMediaMetadata(
    mediaMetadata: MediaMetadataType,
    mediaMetadataControlSetting?: MediaMetadataControlSettingType
) {
    // $FlowFixMe
    if (typeof navigator === 'undefined' || typeof MediaMetadata === 'undefined') {
        return;
    }

    if (!('mediaSession' in navigator)) {
        return;
    }

    clearMediaMetadata();

    // $FlowFixMe
    navigator.mediaSession.metadata = new MediaMetadata(mediaMetadata);

    if (!mediaMetadataControlSetting) {
        return;
    }

    // eslint-disable-next-line no-loops/no-loops, guard-for-in
    for (const controlName in mediaMetadataControlSetting) {
        // $FlowFixMe
        navigator.mediaSession.setActionHandler(controlName, mediaMetadataControlSetting[controlName]);
    }
}
