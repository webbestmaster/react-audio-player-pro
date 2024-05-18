/* global navigator, MediaMetadata, MediaMetadataInit */
import { mediaMetadataControlNameList } from "./media-meta-data-const";
export function clearMediaMetadata() {
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
export function setMediaMetadata(mediaMetadata, mediaMetadataControlSetting) {
    var _a;
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
        navigator.mediaSession.setActionHandler(controlName, (_a = mediaMetadataControlSetting[controlName]) !== null && _a !== void 0 ? _a : null);
    }
}
//# sourceMappingURL=media-meta-data.js.map