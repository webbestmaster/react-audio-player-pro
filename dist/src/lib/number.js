export function getShiftIndex(listLength, currentIndex, shift) {
    const rawIndex = (currentIndex + shift) % listLength;
    if (rawIndex < 0) {
        return rawIndex + listLength;
    }
    return rawIndex;
}
export function getRandom(fromInclude, toExclude, excludeList) {
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
//# sourceMappingURL=number.js.map