// @flow

import type {MarkdownConfigType} from '../markdown-type';

export type SelectorHeaderType = '# ' | '## ' | '### ' | '#### ' | '##### ' | '###### ';
export type SelectorBlockquoteType = '> ';
export type SelectorLineType = '---' | '***' | '___';
export type SelectorTableType = '|';
export type SelectorCodeType = '```';

export type SelectorUlItemType = '+ ' | '- ' | '* ';

export type SelectorOlNumericItemType = '0. ';
export type SelectorOlBigRomanNumberItemType = 'I. ';
export type SelectorOlSmallRomanNumberItemType = 'i. ';
export type SelectorOlBigAlphabetItemType = 'A. ';
export type SelectorOlSmallAlphabetItemType = 'a. ';

export type OlTypeNumericType = '1';
export type OlTypeBigRomanNumberType = 'I';
export type OlTypeSmallRomanNumberType = 'i';
export type OlTypeBigAlphabetType = 'A';
export type OlTypeSmallAlphabetType = 'a';

export type OlAttributeType =
    | OlTypeNumericType
    | OlTypeBigRomanNumberType
    | OlTypeSmallRomanNumberType
    | OlTypeBigAlphabetType
    | OlTypeSmallAlphabetType;

export type SelectorOlItemType =
    | SelectorOlNumericItemType
    | SelectorOlBigRomanNumberItemType
    | SelectorOlSmallRomanNumberItemType
    | SelectorOlBigAlphabetItemType
    | SelectorOlSmallAlphabetItemType;

export type SelectorParagraphType = '';

export type SelectorType =
    | SelectorHeaderType
    | SelectorUlItemType
    | SelectorOlItemType
    | SelectorParagraphType
    | SelectorBlockquoteType
    | SelectorLineType
    | SelectorTableType
    | SelectorCodeType;

export type LineDataType = {|
    // order number of line, start with 0
    +lineIndex: number,
    // left spaces before any content
    +spaceCount: number,
    // selector to render as html, example - '###'
    +selector: SelectorType,
    // full line with all symbols, example - '### this is line'
    +line: string,
    // trimmed line
    +trimmedLine: string,
    // trimmed line without selector, example - 'this is line'
    +lineContent: string,
    // line children
    +childList: Array<LineDataType>,
    // additional line list
    +additionalLineList: Array<string>,
    +config: MarkdownConfigType,
|};

export type OlParseDataType = {|
    +selector: SelectorOlItemType,
    +regExpSearchSelector: RegExp,
    +olAttributeType: OlAttributeType,
|};

export type ShortLineInfoType = {|
    +selector: SelectorType,
    +lineContent: string,
|};

export type FootnoteTypeType = 'inline' | 'super';

export type FootnoteType = {|
    +id: string,
    +type: FootnoteTypeType,
    +inlineLineContent: string,
    descriptionLineData: LineDataType | null,
|};

export type VariableType = {|
    +key: string,
    +value: string,
|};

export type DocumentMetaType = {|
    tableLineData: LineDataType | null,
    codeLineData: LineDataType | null,
    +config: MarkdownConfigType,
    +footnoteList: Array<FootnoteType>,
    variable: {
        [key: string]: VariableType,
    },
|};

export type PairTagSelectorType = {|
    +selector: string,
    +openTag: string,
    +closeTag: string,
    +equal: RegExp,
|};
