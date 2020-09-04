// @flow

import type {
    OlParseDataType,
    OlTypeBigAlphabetType,
    OlTypeBigRomanNumberType,
    OlTypeNumericType,
    OlTypeSmallAlphabetType,
    OlTypeSmallRomanNumberType,
    PairTagSelectorType,
    SelectorBlockquoteType,
    SelectorCodeType,
    SelectorHeaderType,
    SelectorLineType,
    SelectorOlBigAlphabetItemType,
    SelectorOlBigRomanNumberItemType,
    SelectorOlNumericItemType,
    SelectorOlSmallAlphabetItemType,
    SelectorOlSmallRomanNumberItemType,
    SelectorTableType,
    SelectorType,
    SelectorUlItemType,
} from './parser-type';

export const selectorHeaderList: Array<SelectorHeaderType> = ['# ', '## ', '### ', '#### ', '##### ', '###### '];
export const selectorBlockquoteList: Array<SelectorBlockquoteType> = ['> '];
export const selectorLineList: Array<SelectorLineType> = ['---', '***', '___'];
export const selectorTableList: Array<SelectorTableType> = ['|'];
export const selectorCodeList: Array<SelectorCodeType> = ['```'];

export const selectorULItemList: Array<SelectorUlItemType> = ['+ ', '- ', '* '];

export const olNumericItemSelector: SelectorOlNumericItemType = '0. ';
export const olNumericItemRegExp = /^\d+\.\s/;
export const olNumericType: OlTypeNumericType = '1';

export const olBigRomanNumberItemSelector: SelectorOlBigRomanNumberItemType = 'I. ';
export const olBigRomanNumberItemRegExp = /^[CDILMVX]+\.\s/;
export const olBigRomanNumberType: OlTypeBigRomanNumberType = 'I';

export const olSmallRomanNumberItemSelector: SelectorOlSmallRomanNumberItemType = 'i. ';
export const olSmallRomanNumberItemRegExp = /^[cdilmvx]+\.\s/;
export const olSmallRomanNumberType: OlTypeSmallRomanNumberType = 'i';

export const olBigAlphabetItemSelector: SelectorOlBigAlphabetItemType = 'A. ';
export const olBigAlphabetItemRegExp = /^[A-Z]+\.\s/;
export const olBigAlphabetType: OlTypeBigAlphabetType = 'A';

export const olSmallAlphabetItemSelector: SelectorOlSmallAlphabetItemType = 'a. ';
export const olSmallAlphabetItemRegExp = /^[a-z]+\.\s/;
export const olSmallAlphabetType: OlTypeSmallAlphabetType = 'a';

export const oLParseDataList: Array<OlParseDataType> = [
    {
        selector: olNumericItemSelector,
        regExpSearchSelector: olNumericItemRegExp,
        olAttributeType: olNumericType,
    },
    {
        selector: olBigRomanNumberItemSelector,
        regExpSearchSelector: olBigRomanNumberItemRegExp,
        olAttributeType: olBigRomanNumberType,
    },
    {
        selector: olSmallRomanNumberItemSelector,
        regExpSearchSelector: olSmallRomanNumberItemRegExp,
        olAttributeType: olSmallRomanNumberType,
    },
    {
        selector: olBigAlphabetItemSelector,
        regExpSearchSelector: olBigAlphabetItemRegExp,
        olAttributeType: olBigAlphabetType,
    },
    {
        selector: olSmallAlphabetItemSelector,
        regExpSearchSelector: olSmallAlphabetItemRegExp,
        olAttributeType: olSmallAlphabetType,
    },
];

export const selectorList: Array<SelectorType> = [
    // ...selectorLineList,
    ...selectorHeaderList,
    ...selectorULItemList,
    ...selectorTableList,
    ...selectorCodeList,
    ...selectorBlockquoteList,
].sort((itemA: SelectorType, itemB: SelectorType): number => itemB.length - itemA.length);

const pairTagSelectorBold: PairTagSelectorType = {
    selector: '**',
    openTag: '<b>',
    closeTag: '</b>',
    equal: /\*+/,
};
const pairTagSelectorUnderline: PairTagSelectorType = {
    selector: '__',
    openTag: '<u>',
    closeTag: '</u>',
    equal: /_+/,
};
const pairTagSelectorStrike: PairTagSelectorType = {
    selector: '~~',
    openTag: '<strike>',
    closeTag: '</strike>',
    equal: /~+/,
};
const pairTagSelectorItalic1: PairTagSelectorType = {
    selector: '_',
    openTag: '<i>',
    closeTag: '</i>',
    equal: /_+/,
};
const pairTagSelectorItalic2: PairTagSelectorType = {
    selector: '*',
    openTag: '<i>',
    closeTag: '</i>',
    equal: /\*+/,
};
const pairTagSelectorSub: PairTagSelectorType = {
    selector: '~',
    openTag: '<sub>',
    closeTag: '</sub>',
    equal: /~+/,
};
const pairTagSelectorSup: PairTagSelectorType = {
    selector: '^',
    openTag: '<sup>',
    closeTag: '</sup>',
    equal: /\^+/,
};
const pairTagSelectorInlineCode: PairTagSelectorType = {
    selector: '`',
    openTag: '<code data-type="inline">',
    closeTag: '</code>',
    equal: /`+/,
};

const pairTagSelectorBoldAndItalic: PairTagSelectorType = {
    selector: '***',
    openTag: '<b><i>',
    closeTag: '</i></b>',
    equal: /\*+/,
};

// more long selectors should be first
export const pairTagSelectorList: Array<PairTagSelectorType> = [
    pairTagSelectorBoldAndItalic,
    pairTagSelectorBold,
    pairTagSelectorUnderline,
    pairTagSelectorItalic1,
    pairTagSelectorItalic2,
    pairTagSelectorStrike,
    pairTagSelectorSub,
    pairTagSelectorSup,
    pairTagSelectorInlineCode,
];
