// @flow

import type {DocumentMetaType, LineDataType, OlAttributeType, SelectorType} from '../parser/parser-type';
import {olNumericType, oLParseDataList} from '../parser/parser-selector';
import {hasProperty} from '../parser/util/is';
import {makeFootnoteSuper} from '../parser/footnote/footnote';

import {breakLineTag, emptyString, space} from './render-const';
import {makeLinkFromText} from './render-link';
import {makePairTag} from './render-pair-tag';

export const breakLineRegExp = /\s*?\\$/;

export function addBreakLine(line: string): string {
    return line.replace(breakLineRegExp, '<br/>');
}

export function removeEndBreakLine(line: string): string {
    return line.replace(breakLineRegExp, emptyString);
}

export function getHasEndBreakLine(lineContent: string, useLineBreak: boolean): boolean {
    return useLineBreak || breakLineRegExp.test(lineContent);
}

function imageReplacer(matchedString: string, alt: mixed, src: string, title: mixed): string {
    const titleAttrValue = typeof title === 'string' && title.trim() ? ' title="' + title + '"' : '';
    const altAttrValue = typeof alt === 'string' && alt.trim() ? ' alt="' + alt + '"' : '';

    return `<img loading="lazy" src="${src}"${altAttrValue}${titleAttrValue}/>`;
}

function imageReplacerVariable(
    matchedString: string,
    alt: mixed,
    srcVariable: string,
    documentMeta: DocumentMetaType
): string {
    const altAttrValue = typeof alt === 'string' && alt.trim() ? ' alt="' + alt + '"' : '';
    const {variable} = documentMeta;

    if (hasProperty(variable, srcVariable)) {
        return `<img loading="lazy" src="${variable[srcVariable].value}"${altAttrValue}/>`;
    }

    return `<img loading="lazy" src="${srcVariable}"${altAttrValue}/>`;
}

const findImageRegExpGlobal = /!\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?\)/g;
const findImageVariableRegExpGlobal = /!\[([\S\s]*?)]\[([\S\s]+?)]/g;

export function makeImage(html: string, documentMeta: DocumentMetaType): string {
    return html
        .replace(findImageRegExpGlobal, imageReplacer)
        .replace(findImageVariableRegExpGlobal, (matchedString: string, alt: mixed, srcVariable: string): string => {
            return imageReplacerVariable(matchedString, alt, srcVariable, documentMeta);
        });
}

const findCheckboxCheckedRegExoGlobal = /\[x]/gi;
const findCheckboxUncheckedRegExoGlobal = /\[\s]/g;

export function makeCheckbox(html: string): string {
    return html
        .replace(findCheckboxCheckedRegExoGlobal, '<input type="checkbox" checked="checked" disabled="disabled"/>')
        .replace(findCheckboxUncheckedRegExoGlobal, '<input type="checkbox" disabled="disabled"/>');
}

export function isImageListOnly(lineContent: string): boolean {
    return lineContent.replace(findImageRegExpGlobal, '').trim() === emptyString;
}

const findLinkRegExpGlobal = /\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?\)/g;
const findLinkVariableRegExpGlobal = /\[([\S\s]*?)]\[([\S\s]+?)]/g;

function linkReplacer(matchedString: string, linkText: string, href: string, title: mixed): string {
    const titleAttrValue = typeof title === 'string' && title.trim() ? ' title="' + title + '"' : '';
    const text = linkText.length > 0 ? linkText : href;

    return `<a href="${href}"${titleAttrValue}>${text}</a>`;
}

function linkReplacerVariable(
    matchedString: string,
    linkText: string,
    hrefVariable: string,
    documentMeta: DocumentMetaType
): string {
    const {variable} = documentMeta;

    if (hasProperty(variable, hrefVariable)) {
        const href = variable[hrefVariable].value;
        const textVariable = linkText.length > 0 ? linkText : href;

        return `<a href="${href}">${textVariable}</a>`;
    }

    const text = linkText.length > 0 ? linkText : hrefVariable;

    return `<a href="${hrefVariable}">${text}</a>`;
}

export function makeLink(html: string, documentMeta: DocumentMetaType): string {
    return html
        .replace(findLinkRegExpGlobal, linkReplacer)
        .replace(
            findLinkVariableRegExpGlobal,
            (matchedString: string, linkText: string, hrefVariable: string): string => {
                return linkReplacerVariable(matchedString, linkText, hrefVariable, documentMeta);
            }
        );
}

export function getOlTypeBySelector(dataLineSelector: SelectorType): OlAttributeType {
    // eslint-disable-next-line no-loops/no-loops
    for (const oLParseData of oLParseDataList) {
        const {selector, olAttributeType} = oLParseData;

        if (dataLineSelector === selector) {
            return olAttributeType;
        }
    }

    // this string should not be test covered
    console.error('Can not detect ol type by selector', dataLineSelector);

    return olNumericType;
}

export function getOlStart(trimmedLine: string): string {
    const dotIndex = trimmedLine.indexOf('.');

    return trimmedLine.slice(0, dotIndex);
}

// eslint-disable-next-line complexity, max-statements
export function renderAdditionalLineList(lineData: LineDataType): string {
    const {additionalLineList, config} = lineData;
    const {useLineBreak} = config;

    if (additionalLineList.length === 0) {
        return emptyString;
    }

    const hasParentEndBreakLine = getHasEndBreakLine(lineData.lineContent, useLineBreak);
    const prefix = hasParentEndBreakLine ? breakLineTag : space;
    const additionalLineListLength = additionalLineList.length;
    const additionalLineLastIndex = additionalLineListLength - 1;
    const lineResult: Array<string> = new Array<string>(additionalLineListLength).fill('');

    // eslint-disable-next-line no-loops/no-loops
    for (let lineIndex = 0; lineIndex < additionalLineListLength; lineIndex += 1) {
        const additionalLine = additionalLineList[lineIndex];
        const hasBreakLine = getHasEndBreakLine(additionalLine, useLineBreak);

        if (hasBreakLine) {
            const additionalLineWithoutBreakLine = additionalLine.replace(breakLineRegExp, emptyString);

            if (lineIndex === additionalLineLastIndex) {
                lineResult[lineIndex] = additionalLineWithoutBreakLine;
            } else {
                lineResult[lineIndex] = additionalLineWithoutBreakLine + breakLineTag;
            }
        } else {
            // eslint-disable-next-line no-lonely-if
            if (lineIndex === additionalLineLastIndex) {
                lineResult[lineIndex] = additionalLine;
            } else {
                lineResult[lineIndex] = additionalLine + space;
            }
        }
    }

    return prefix + lineResult.join(emptyString);
}

export function renderInlineHtml(html: string, documentMeta: DocumentMetaType): string {
    const {config} = documentMeta;
    const {parseLink} = config;

    let fullLineContent = makeFootnoteSuper(html, documentMeta);

    fullLineContent = makeImage(fullLineContent, documentMeta);
    fullLineContent = makeLink(fullLineContent, documentMeta);
    if (parseLink) {
        fullLineContent = makeLinkFromText(fullLineContent);
    }
    fullLineContent = makeCheckbox(fullLineContent);
    return makePairTag(fullLineContent);
}
