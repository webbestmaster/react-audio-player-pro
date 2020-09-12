// @flow

/* global navigator, MediaMetadata */

import type {MediaMetadataControlNameType} from './media-meta-data-type';
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

    Object.keys(mediaMetadataControlNameMap).forEach((controlName: MediaMetadataControlNameType) => {
        // $FlowFixMe
        navigator.mediaSession.setActionHandler(controlName, null);
    });
}

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

    if (mediaMetadataControlSetting) {
        Object.keys(mediaMetadataControlSetting).forEach((controlName: MediaMetadataControlNameType) => {
            // $FlowFixMe
            navigator.mediaSession.setActionHandler(controlName, mediaMetadataControlSetting[controlName]);
        });
    }
}
