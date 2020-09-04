// @flow

export type PairNumberArrayType = [number, number];

export function harArrayOverflow(arrayA: PairNumberArrayType, arrayB: PairNumberArrayType): boolean {
    const [startA, endA] = arrayA;
    const [startB, endB] = arrayB;

    return !(endA < startB || endB < startA);
}

export function harArrayListOverflow(
    pairNumberArray: PairNumberArrayType,
    arrayList: Array<PairNumberArrayType>
): boolean {
    // eslint-disable-next-line no-loops/no-loops
    for (const arrayInList of arrayList) {
        if (harArrayOverflow(pairNumberArray, arrayInList)) {
            return true;
        }
    }

    return false;
}

function getMatchIndexList(html: string, regExp: RegExp): Array<PairNumberArrayType> {
    const resultList: Array<PairNumberArrayType> = [];

    const matchList = html.match(regExp);

    if (!matchList) {
        return [];
    }

    let currentIndex = 0;

    // eslint-disable-next-line no-loops/no-loops
    for (const matchedString of matchList) {
        const start = html.indexOf(matchedString, currentIndex);
        const end = start + matchedString.length - 1;

        currentIndex = end;

        resultList.push([start, end]);
    }

    return resultList;
}

const tagSelectorRegExpGlobal = /(<\w+[\S\s]*?>)|(<\/\w+?>)|(<\w+[\S\s]*?\/>)/g;

export function getTagIndexList(html: string): Array<PairNumberArrayType> {
    return getMatchIndexList(html, tagSelectorRegExpGlobal);
}

const linkSelectorRegExpGlobal = /(<a\s*?>[\S\s]*?<\/a>)|(<a\s[\S\s]*?>[\S\s]*?<\/a>)|(<a\s+[\S\s]*?\/>)/g;

export function getLinkIndexList(html: string): Array<PairNumberArrayType> {
    return getMatchIndexList(html, linkSelectorRegExpGlobal);
}
