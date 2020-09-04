// @flow

import type {VariableType} from '../parser-type';

/*
export function getIsVariableLine(lineContent: string): boolean {
    return /\[[^^][\S\s]+?]:/.test(lineContent);
}
*/

export function getVariableData(lineContent: string): VariableType | null {
    const matchData = lineContent.match(/\[([^^][\S\s]+?)]:\s+?\S/);

    if (!matchData) {
        return null;
    }

    const key = matchData[1];

    const value = lineContent.slice(lineContent.indexOf(']:') + 3).trim();

    return {
        key,
        value,
    };
}
