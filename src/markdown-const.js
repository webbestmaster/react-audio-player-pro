// @flow

import type {MarkdownConfigType} from './markdown-type';

export const defaultMarkdownConfig: MarkdownConfigType = {
    useLineBreak: false,
    wrapperClassName: 'md-pro',
    parseLink: true,
    codeHighlight: (langName: string, code: string): string => code,
    useWrapper: true,
};
