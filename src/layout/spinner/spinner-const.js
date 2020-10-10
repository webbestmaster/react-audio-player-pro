// @flow

import type {PositionType} from './spinner-type';

export const defaultData = {
    size: 48,
};

export const positionValueMap: {+[key: PositionType]: PositionType} = {
    'static': 'static',
    absolute: 'absolute',
    fixed: 'fixed',
    relative: 'relative',
};
