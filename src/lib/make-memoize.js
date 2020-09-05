// @flow

import {hasProperty} from './is';

export function memoize<ArgumentType, ResultType>(
    pureFunction: (data: ArgumentType) => ResultType
): (data: ArgumentType) => ResultType {
    const cache = {};

    return function memoizeFunction(data: ArgumentType): ResultType {
        const cacheId = JSON.stringify(arguments);

        if (hasProperty(cache, cacheId)) {
            console.info('cacheId', cacheId, 'from cache');
            return cache[cacheId];
        }

        cache[cacheId] = pureFunction(data);

        return cache[cacheId];
    };
}
