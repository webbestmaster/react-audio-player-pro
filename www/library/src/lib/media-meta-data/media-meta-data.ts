/* global navigator, MediaMetadata */

import {MediaMetadataControlSettingType, MediaMetadataType} from './media-meta-data-type';
import {mediaMetadataControlNameMap} from './media-meta-data-const';

export function clearMediaMetadata(): void {
    // @ts-ignore
    if (typeof navigator === 'undefined' || typeof MediaMetadata === 'undefined') {
        return;
    }

    if (!('mediaSession' in navigator)) {
        return;
    }

    // @ts-ignore
    navigator.mediaSession.metadata = null;

    // eslint-disable-next-line no-loops/no-loops, guard-for-in
    for (const controlName in mediaMetadataControlNameMap) {
        // @ts-ignore
        navigator.mediaSession.setActionHandler(controlName, null);
    }
}

// eslint-disable-next-line complexity
export function setMediaMetadata(
    mediaMetadata: MediaMetadataType,
    mediaMetadataControlSetting?: MediaMetadataControlSettingType
): void {
    // @ts-ignore
    if (typeof navigator === 'undefined' || typeof MediaMetadata === 'undefined') {
        return;
    }

    if (!('mediaSession' in navigator)) {
        return;
    }

    clearMediaMetadata();

    // @ts-ignore
    navigator.mediaSession.metadata = new MediaMetadata(mediaMetadata);

    if (!mediaMetadataControlSetting) {
        return;
    }

    // eslint-disable-next-line no-loops/no-loops, guard-for-in
    for (const controlName in mediaMetadataControlSetting) {
        // @ts-ignore
        navigator.mediaSession.setActionHandler(controlName, mediaMetadataControlSetting[controlName]);
    }
}
