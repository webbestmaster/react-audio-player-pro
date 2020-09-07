// @flow

/* global window, document, navigator */

function getIsIOS(): boolean {
    if (typeof navigator === 'undefined' || typeof window === 'undefined') {
        return false;
    }

    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

function getIsAndroid(): boolean {
    if (typeof navigator === 'undefined') {
        return false;
    }

    return /(android)/i.test(navigator.userAgent);
}

export const hasVolumeBar = !(getIsIOS() || getIsAndroid());
