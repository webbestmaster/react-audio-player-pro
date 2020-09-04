// @flow

import {type FootnoteTypeType} from '../parser-type';

export const footnoteTypeMap: {[key: FootnoteTypeType]: FootnoteTypeType} = {
    inline: 'inline',
    'super': 'super',
};

export const footnotePrefix = 'fn-';

export const findFootnoteMarkGlobalRegExp = /\S\[\^[^\]]+?]|\S\^\[[^\]]+?]/g;
