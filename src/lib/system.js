// @flow

/* global window, navigator */

const isWindowExists = typeof window !== 'undefined';
const isNavigatorExists = typeof navigator !== 'undefined';
const userAgent = isNavigatorExists ? navigator.userAgent : '';

const isIOS = isNavigatorExists && isWindowExists ? /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream : false;

const isAndroid = isNavigatorExists ? /(android)/i.test(userAgent) : false;

export const hasVolumeBar: boolean = !isIOS && !isAndroid && isWindowExists;
