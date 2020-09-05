// @flow

/* global window, requestAnimationFrame, Event */

import type {PromiseResolveType} from './promise';

export async function forceResize(): Promise<void> {
    return new Promise((resolve: () => void) => {
        requestAnimationFrame(() => {
            window.dispatchEvent(new Event('resize'));
            requestAnimationFrame(resolve);
            console.log('resized');
        });
    });
}

export function scrollToTop(): Promise<true> {
    return new Promise((resolve: PromiseResolveType<true>) => {
        requestAnimationFrame(() => {
            window.scrollTo(0, 0);
            resolve(true);
        });
    });
}
