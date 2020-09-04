// @flow

import type {DocumentMetaType, SelectorType} from '../../parser/parser-type';
import {filterEmptyString} from '../../parser/util/string';
import {emptyString} from '../render-const';
import {renderInlineHtml} from '../render-helper';

import {cellAlignTypeMap} from './render-table-const';
import type {CellAlignType} from './render-table-type';

export function renderTableCellContent(line: string, documentMeta: DocumentMetaType): string {
    return renderInlineHtml(line, documentMeta).trim();
}

export function isTableDivideLine(line: string): boolean {
    return line.replace(/[\s:|-]/g, '') === emptyString;
}

export function lineToAlign(divideRaw: string): CellAlignType {
    const alignMark = ':';
    const divide = divideRaw.trim();
    const [firstChar] = divide;
    const lastChar = divide[divide.length - 1];

    if (firstChar === lastChar && firstChar === alignMark) {
        return cellAlignTypeMap.center;
    }

    if (lastChar === alignMark) {
        return cellAlignTypeMap.right;
    }

    return cellAlignTypeMap.left;
}

export function getAlignList(selector: SelectorType, divideLine: string): Array<CellAlignType> {
    return divideLine.split(selector).filter(filterEmptyString).map<CellAlignType>(lineToAlign);
}
