// @flow

export function getRandom(fromInclude: number, toExclude: number, excludeList?: Array<number>): number {
    if (toExclude - fromInclude < 1) {
        return fromInclude;
    }

    const randomNumber = fromInclude + Math.floor(Math.random() * (toExclude - fromInclude));

    if (!excludeList) {
        return randomNumber;
    }

    if (excludeList.includes(randomNumber)) {
        return getRandom(fromInclude, toExclude, excludeList);
    }

    return randomNumber;
}
