// @flow

export function getShiftIndex(listLength: number, currentIndex: number, shift: number): number {
    const rawIndex = (currentIndex + shift) % listLength;

    if (rawIndex < 0) {
        return rawIndex + listLength;
    }

    return rawIndex;
}
