/* global navigator, MediaMetadata, MediaMetadataInit */
import { mediaMetadataControlNameList } from './media-meta-data-const';
export function clearMediaMetadata() {
    if (typeof navigator === 'undefined' || typeof MediaMetadata === 'undefined') {
        return;
    }
    if (!('mediaSession' in navigator)) {
        return;
    }
    navigator.mediaSession.metadata = null;
    // eslint-disable-next-line no-loops/no-loops
    for (const controlName of mediaMetadataControlNameList) {
        navigator.mediaSession.setActionHandler(controlName, null);
    }
}
// eslint-disable-next-line complexity
export function setMediaMetadata(mediaMetadata, mediaMetadataControlSetting) {
    if (typeof navigator === 'undefined' || typeof MediaMetadata === 'undefined') {
        return;
    }
    if (!('mediaSession' in navigator)) {
        return;
    }
    clearMediaMetadata();
    navigator.mediaSession.metadata = new MediaMetadata(mediaMetadata);
    if (!mediaMetadataControlSetting) {
        return;
    }
    // eslint-disable-next-line no-loops/no-loops
    for (const controlName of mediaMetadataControlNameList) {
        navigator.mediaSession.setActionHandler(controlName, mediaMetadataControlSetting[controlName] || null);
    }
}
//# sourceMappingURL=media-meta-data.js.map