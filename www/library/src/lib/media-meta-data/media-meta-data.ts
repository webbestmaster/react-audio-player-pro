/* global navigator, MediaMetadata, MediaMetadataInit */

import type {MediaMetadataControlSettingType} from "./media-meta-data-type";
import {mediaMetadataControlNameList} from "./media-meta-data-const";

export function clearMediaMetadata(): void {
    if (typeof navigator === "undefined" || typeof MediaMetadata === "undefined") {
        return;
    }

    if (!("mediaSession" in navigator)) {
        return;
    }

    navigator.mediaSession.metadata = null;

    // eslint-disable-next-line no-loops/no-loops
    for (const controlName of mediaMetadataControlNameList) {
        navigator.mediaSession.setActionHandler(controlName, null);
    }
}

// eslint-disable-next-line complexity
export function setMediaMetadata(
    mediaMetadata: MediaMetadataInit,
    mediaMetadataControlSetting?: MediaMetadataControlSettingType
): void {
    if (typeof navigator === "undefined" || typeof MediaMetadata === "undefined") {
        return;
    }

    if (!("mediaSession" in navigator)) {
        return;
    }

    clearMediaMetadata();

    navigator.mediaSession.metadata = new MediaMetadata(mediaMetadata);

    if (!mediaMetadataControlSetting) {
        return;
    }

    // eslint-disable-next-line no-loops/no-loops
    for (const controlName of mediaMetadataControlNameList) {
        navigator.mediaSession.setActionHandler(controlName, mediaMetadataControlSetting[controlName] ?? null);
    }
}
