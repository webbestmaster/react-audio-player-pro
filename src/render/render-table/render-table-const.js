// @flow

import type {CellAlignType, CellTagNameType} from './render-table-type';

export const cellAlignTypeMap: {[key: string]: CellAlignType} = {
    left: 'left',
    center: 'center',
    right: 'right',
    'default': 'left',
};

export const cellTagNameTypeMap: {[key: string]: CellTagNameType} = {
    tdCell: 'td',
    thCell: 'th',
};
