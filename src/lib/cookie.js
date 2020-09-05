// @flow

/* global document */

import {isString} from './is';

const gdprCookieKey = 'gdpr-cookie-key';

export function handleApplyGdpr() {
    document.cookie = `${gdprCookieKey}=1; path=/; max-age=36000000;`;
}

export function isGdprApplyed(): boolean {
    if (typeof document === 'undefined') {
        return false;
    }

    return isString(getCookie(gdprCookieKey));
}

export function getCookie(name: string): string | null {
    if (typeof document === 'undefined') {
        return null;
    }

    const matches = document.cookie.match(
        new RegExp('(?:^|; )' + name.replace(/([$()*+./?[\\\]^{|}])/g, '\\$1') + '=([^;]*)')
    );

    return matches ? decodeURIComponent(matches[1]) : null;
}
