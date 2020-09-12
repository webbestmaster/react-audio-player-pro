// @flow

/* global navigator, MediaMetadata */

import {type MediaMetadataControlSettingType, type MediaMetadataType} from './media-meta-data-type';
import {mediaMetadataControlNameMap} from './media-meta-data-const';
import type {MediaMetadataControlNameType} from './media-meta-data-type';

export function clearMediaMetadata() {
    if (typeof navigator === 'undefined' || typeof MediaMetadata === 'undefined') {
        return;
    }

    if (!('mediaSession' in navigator)) {
        return;
    }

    navigator.mediaSession.metadata = null;

    Object.keys(mediaMetadataControlNameMap).forEach((controlName: MediaMetadataControlNameType) => {
        navigator.mediaSession.setActionHandler(controlName, null);
    });
}

export function setMediaMetadata(
    mediaMetadata: MediaMetadataType,
    mediaMetadataControlSetting: MediaMetadataControlSettingType = {}
) {
    console.log(mediaMetadataControlSetting);

    if (typeof navigator === 'undefined' || typeof MediaMetadata === 'undefined') {
        return;
    }

    if (!('mediaSession' in navigator)) {
        return;
    }

    clearMediaMetadata();

    navigator.mediaSession.metadata = new MediaMetadata(mediaMetadata);

    Object.keys(mediaMetadataControlSetting).forEach((controlName: MediaMetadataControlSettingType) => {
        navigator.mediaSession.setActionHandler(controlName, mediaMetadataControlSetting[controlName]);
    });
}
