// @flow

import type {FootnoteType} from '../parser-type';

export function getIsFootnoteDescription(lineContent: string): boolean {
    return /^\[\^[^\]]+]:/.test(lineContent);
}

export function getFootnoteById(id: string, list: Array<FootnoteType>): FootnoteType | void {
    return list.find((footnote: FootnoteType): boolean => footnote.id === id);
}

export function getFootnoteInlineLineContent(match: string): string {
    return match.slice(3, -1).trim();
}

// see findFootnoteMarkGlobalRegExp
export function getFootnoteMarkId(match: string): string {
    return getFootnoteInlineLineContent(match).toLowerCase().replace(/\W/g, ' ').trim().replace(/\s+/g, '-');
}

export function getMdFootnoteContent(footnote: FootnoteType): string {
    const {inlineLineContent, descriptionLineData} = footnote;

    if (descriptionLineData) {
        const {lineContent, additionalLineList} = descriptionLineData;
        const start = lineContent.indexOf(']:') + 2;

        return lineContent.slice(start) + '\n' + additionalLineList.join('\n');
    }

    return inlineLineContent;
}
