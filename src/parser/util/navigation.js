// @flow

import type {LineDataType} from '../parser-type';
import {emptyString} from '../../render/render-const';

// eslint-disable-next-line complexity
export function searchSiblingItem(
    lineData: LineDataType,
    lineDataList: Array<LineDataType>,
    direction: number
): LineDataType | null {
    const index = lineDataList.indexOf(lineData);

    if (index === -1) {
        // this string should not be test covered
        console.error('lineDataList should contain lineData');
        return null;
    }

    const siblingIndex = index + direction;

    const siblingItem = siblingIndex in lineDataList ? lineDataList[siblingIndex] : null;

    if (!siblingItem) {
        return null;
    }

    if (siblingItem.trimmedLine === emptyString) {
        const newDirection = direction + (direction >= 0 ? 1 : -1);

        return searchSiblingItem(lineData, lineDataList, newDirection);
    }

    return siblingItem;
}

export function getIsEdgeLine(lineData: LineDataType, lineDataList: Array<LineDataType>, direction: number): boolean {
    const {selector} = lineData;
    const foundItem = searchSiblingItem(lineData, lineDataList, direction);

    return !foundItem || foundItem.selector !== selector;
}

export function getParent(lineData: LineDataType, lineDataList: Array<LineDataType>): LineDataType | null {
    const linaDataListLength = lineDataList.length;

    // eslint-disable-next-line no-loops/no-loops
    for (let lineDataIndex = linaDataListLength - 1; lineDataIndex >= 0; lineDataIndex -= 1) {
        const lineDataCandidate = lineDataList[lineDataIndex];

        if (lineDataCandidate.spaceCount < lineData.spaceCount) {
            return lineDataCandidate;
        }
    }

    // this string should not be test covered
    console.error('Parent not found');

    return null;
}
