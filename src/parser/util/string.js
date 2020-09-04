// @flow

import {emptyString} from '../../render/render-const';

export function filterEmptyString(line: string): boolean {
    return line.trim() !== emptyString;
}

export function cleanLine(line: string): string {
    return line.trim().replace(/\s+/g, ' ');
}

export function getIsAllSymbolsEqual(line: string): boolean {
    if (line.length === 0) {
        return true;
    }

    const [firstSymbol] = line;

    // eslint-disable-next-line no-loops/no-loops
    for (const char of line) {
        if (char !== firstSymbol) {
            return false;
        }
    }

    return true;
}
