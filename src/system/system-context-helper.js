// @flow

/* global window, document, navigator */

import {isNotNumber} from '../lib/is';

import type {ScreenWidthNameType, SystemContextScreenType, SystemContextType} from './system-context-type';
import {screenMinWidth, screenNameReference} from './system-context-const';

function getScreenName(screenWidth: number): ScreenWidthNameType {
    let screenName = 'mobile';

    Object.keys(screenMinWidth).every((screenNameInList: ScreenWidthNameType): boolean => {
        if (screenWidth >= screenMinWidth[screenNameInList]) {
            screenName = screenNameInList;
            return false;
        }

        return true;
    });

    return screenName;
}

function getLittleThenList(screenWidth: number): Array<ScreenWidthNameType> {
    const littleThenList = [];

    Object.keys(screenMinWidth).forEach((screenName: ScreenWidthNameType) => {
        if (screenWidth < screenMinWidth[screenName]) {
            littleThenList.push(screenName);
        }
    });

    return littleThenList;
}

function getScreenSize(): {|+width: number, +height: number|} {
    const defaultSize = {
        width: screenMinWidth.desktop,
        height: screenMinWidth.desktop,
    };

    if (typeof document === 'undefined') {
        return defaultSize;
    }

    const {documentElement} = document;

    if (!documentElement) {
        return defaultSize;
    }

    const {clientWidth: width, clientHeight: height} = documentElement;

    return {width, height};
}

export function getDevicePixelRatio(): number {
    const defaultDevicePixelRatio = 2;

    if (typeof window === 'undefined') {
        return defaultDevicePixelRatio;
    }

    const {devicePixelRatio} = window;

    if (isNotNumber(devicePixelRatio)) {
        return defaultDevicePixelRatio;
    }

    if (devicePixelRatio <= defaultDevicePixelRatio) {
        return defaultDevicePixelRatio;
    }

    return devicePixelRatio;
}

function getScreenState(): SystemContextScreenType {
    const {width, height} = getScreenSize();

    const isLandscape = width > height; // use >, do not use >=, if width === height it is portrait
    const systemName = getScreenName(width);

    return {
        width,
        height,
        name: systemName,
        littleThenList: getLittleThenList(width),
        isDesktop: systemName === screenNameReference.desktop,
        isTablet: systemName === screenNameReference.tablet,
        isMobile: systemName === screenNameReference.mobile,
        isLandscape,
        isPortrait: !isLandscape,
        devicePixelRatio: getDevicePixelRatio(),
    };
}

function getIsIOS(): boolean {
    if (typeof navigator === 'undefined') {
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

export function getSystemState(): SystemContextType {
    return {
        screen: getScreenState(),
        isScriptLoaded: typeof window !== 'undefined',
        isWindowLoaded: false,
        isIOS: getIsIOS(),
        isAndroid: getIsAndroid(),
    };
}
