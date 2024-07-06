/* global navigator, MediaMetadata, MediaMetadataInit */

import {mediaMetadataControlNameList} from "./media-meta-data-const";
import type {MediaMetadataControlSettingType} from "./media-meta-data-type";

export function clearMediaMetadata(): void {
    if (typeof navigator === "undefined" || typeof MediaMetadata === "undefined") {
        return;
    }

    if (!("mediaSession" in navigator)) {
        return;
    }

    navigator.mediaSession.metadata = null;

    for (const controlName of mediaMetadataControlNameList) {
        navigator.mediaSession.setActionHandler(controlName, null);
    }
}

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

    for (const controlName of mediaMetadataControlNameList) {
        navigator.mediaSession.setActionHandler(controlName, mediaMetadataControlSetting[controlName] ?? null);
    }
}
